"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function SubmitButton() {
    return (
        <Button type="submit" className="w-full">
            Send Message
        </Button>
    );
}

export function ContactForm() {
    const searchParams = useSearchParams();
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedPackage, setSelectedPackage] = useState('not-specified');
    
    useEffect(() => {
        const pkg = searchParams.get('package');
        if (pkg && ['base', 'standard', 'premium'].includes(pkg)) {
            setSelectedPackage(pkg);
        } else {
             setSelectedPackage('not-specified');
        }
    }, [searchParams]);

    const handlePackageChange = (value: string) => {
        setSelectedPackage(value);
        const url = new URL(window.location.href);
        if (value === 'not-specified') {
             url.searchParams.delete('package');
        } else {
            url.searchParams.set('package', value);
        }
        window.history.pushState({}, '', url);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Form submitted!",
            description: "This is a placeholder. The form doesn't do anything yet.",
        });
        formRef.current?.reset();
    };

    return (
        <Card className="bg-background rounded-xl">
            <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="package">Package</Label>
                        <Select name="package" value={selectedPackage} onValueChange={handlePackageChange} required>
                            <SelectTrigger id="package">
                                <SelectValue placeholder="Select a package" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="not-specified">General Inquiry</SelectItem>
                                <SelectItem value="base">Base</SelectItem>
                                <SelectItem value="standard">Standard</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[100px]" required/>
                    </div>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    );
}
