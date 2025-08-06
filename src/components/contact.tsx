import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { ContactForm } from "./contact-form";

export default function Contact() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                         <Badge variant="outline" className="text-sm py-1 px-4 rounded-full self-center border-primary/30 bg-card text-primary">Contact Us</Badge>
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
                                <a href="tel:+919111525376" className="text-lg hover:underline">+91 91115-25376</a>
                            </div>
                             <div className="flex items-center gap-4">
                                <MessageCircle className="h-6 w-6 text-primary" />
                                <a href="https://wa.me/917746945272" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">Chat on WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
