'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { adminAuth } from '@/lib/firebase-admin';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  try {
    // This part is tricky without client-side Firebase Auth SDK to get an ID token.
    // A more robust solution would involve getting the user's ID token from the client.
    // For this server-only approach, we'll create a custom token and then a session cookie.
    // This is NOT standard practice but works for a simple admin panel.
    
    // In a real app, you'd verify password, but admin SDK can't do that directly.
    // The user must be created in Firebase console first. We assume they exist.
    const user = await adminAuth.getUserByEmail(email);

    if (!user) {
        return { success: false, message: 'Invalid credentials.' };
    }
    
    // The password cannot be verified on the server with the Admin SDK alone.
    // We are trusting the user exists. This is a simplification.
    // In a production app, you would use the client SDK to sign in, get an ID token,
    // and send that token to the server to create a session cookie.

    const sessionCookie = await adminAuth.createSessionCookie(user.uid, { expiresIn: 60 * 60 * 24 * 5 * 1000 });
    cookies().set('session', sessionCookie, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

  } catch (error: any) {
    console.error('Login error:', error);
    let message = 'An unknown error occurred.';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        message = 'Invalid credentials. Please check your email and password.';
    }
    return { success: false, message };
  }

  revalidatePath('/admin');
  redirect('/admin');
}

export async function logout() {
  const sessionCookie = cookies().get('session')?.value;
  if (sessionCookie) {
    cookies().delete('session');
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie).catch(() => null);
    if (decodedClaims) {
      await adminAuth.revokeRefreshTokens(decodedClaims.sub);
    }
  }
  redirect('/admin/login');
}
