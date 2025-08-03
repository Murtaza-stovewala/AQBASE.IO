"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle } from "lucide-react";

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
        </Button>
    );
}

export default function Contact() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const initialState: ContactFormState = { message: "" };
    const [state, formAction] = useActionState(submitContactForm, initialState);
    
    useEffect(() => {
        if (state.message) {
            if (state.issues) {
                 toast({
                    title: "Oops! Something went wrong.",
                    description: state.issues.join(", "),
                    variant: "destructive",
                });
            } else {
                 toast({
                    title: "Success!",
                    description: state.message,
                });
                 formRef.current?.reset();
            }
        }
    }, [state, toast]);

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                         <div className="inline-block rounded-lg bg-card px-3 py-1 text-sm text-primary">Contact Us</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Build?</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                            Have a project in mind or just want to learn more about our process? We'd love to hear from you. Fill out the form or reach out to us directly.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-primary" />
                                <a href="mailto:hello@aqbase.io" className="text-lg hover:underline">hello@aqbase.io</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-primary" />
                                <a href="tel:+1234567890" className="text-lg hover:underline">+1 (234) 567-890</a>
                            </div>
                             <div className="flex items-center gap-4">
                                <MessageCircle className="h-6 w-6 text-primary" />
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">Chat on WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    <Card className="bg-background">
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                            <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form ref={formRef} action={formAction} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Project Details</Label>
                                    <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[100px]" required/>
                                </div>
                                <SubmitButton />
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
