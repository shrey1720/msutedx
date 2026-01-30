"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Send } from "lucide-react";

const CONTACT_EMAIL = "msuxtedx09@gmail.com";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Website contact from ${name || email || "visitor"}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        window.location.href = mailto;
    };

    return (
        <section id="contact" className="section-padding">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Get in <span className="text-red-600">Touch</span>
                </h2>
                <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mb-8" />
                <p className="text-gray-400 max-w-2xl mx-auto italic">
                    Have questions or want to collaborate? We'd love to hear from you.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-card p-8 flex items-center gap-6 group hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                            <Mail />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white font-medium hover:text-red-500 transition-colors">
                                {CONTACT_EMAIL}
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-8 flex items-center gap-6 group hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                            <Instagram />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Follow Us</p>
                            <a href="https://www.instagram.com/tedxmsu_baroda/" className="text-white font-medium hover:text-red-500 transition-colors">
                                @tedxmsu_baroda
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-8 flex items-center gap-6 group hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                            <Linkedin />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Connect With Us</p>
                            <a href="https://www.linkedin.com/company/tedxmsu-baroda/" className="text-white font-medium hover:text-red-500 transition-colors">
                                LinkedIn / tedxmsu-baroda
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <form className="glass-card p-10 space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-red-600/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-red-600/50 transition-colors"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                            <textarea
                                rows={4}
                                placeholder="How can we help?"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-red-600/50 transition-colors resize-none"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-red-600 text-white font-bold rounded-lg flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(230,43,30,0.2)]"
                        >
                            <Send size={18} />
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
}
