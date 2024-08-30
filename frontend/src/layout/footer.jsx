import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const FooterPage = () => {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-7">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                        <h3 className="font-bold text-lg mb-3">About Us</h3>
                        <p className="text-sm text-muted-foreground">
                            We are a company dedicated to providing excellent services and products to our customers.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><Button variant="link" className="p-0 h-auto text-sm">Home</Button></li>
                            <li><Button variant="link" className="p-0 h-auto text-sm">About</Button></li>
                            <li><Button variant="link" className="p-0 h-auto text-sm">Services</Button></li>
                            <li><Button variant="link" className="p-0 h-auto text-sm">Contact</Button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Contact Us</h3>
                        <p className="text-sm text-muted-foreground">
                            123 Main Street<br />
                            City, State 12345<br />
                            Phone: (123) 456-7890<br />
                            Email: info@example.com
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-3">Follow Us</h3>
                        <div className="flex space-x-3">
                            <Button variant="ghost" size="sm" className="p-2">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="p-2">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-5 pt-5 border-t text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Your Company Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;