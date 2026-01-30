"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is TEDx MSU Baroda?",
        a: "TEDx MSU Baroda is an independently organized TED event hosted by the MS University community. We feature short talks, performances, and conversations that spotlight ideas worth spreading from students, faculty, and local change-makers."
    },
    {
        q: "When and where is the next event?",
        a: "The next TEDx MSU Baroda event is scheduled for February 28, 2026. Exact venue details and arrival times will be emailed to ticket holders and posted on our social channels closer to the date."
    },
    {
        q: "How do I buy tickets?",
        a: "Tickets are sold through our registration page. When registrations open we'll share a link on the website and social media. Follow our Instagram and LinkedIn for the latest announcements."
    },
    {
        q: "Can I apply to be a speaker or performer?",
        a: "Yes — we run periodic speaker calls. For the current edition speaker applications are closed, but you can subscribe to updates or contact the team to be notified about future opportunities."
    },
    {
        q: "Are there volunteer opportunities?",
        a: "We welcome volunteers for event operations, hospitality, and outreach. Volunteer sign-ups are announced before the event; check the Team or Registration section on the site for details."
    },
    {
        q: "Is the event open to everyone?",
        a: "TEDx events are open to all members of the public unless a session is labeled for a specific group. Some ticket tiers may be reserved for students or partners — ticket descriptions will clarify eligibility."
    },
    {
        q: "What should I expect at the event?",
        a: "Expect short, powerful talks on diverse topics, live performances, networking breaks, and curated experiences. Most talks are under 18 minutes and are followed by opportunities to meet speakers and attendees."
    },
    {
        q: "Is there a code of conduct?",
        a: "Yes. We require respectful, inclusive behavior. Harassment or discrimination is not tolerated. Report any concerns to our organizers via the Contact section and we will address them promptly."
    },
    {
        q: "Will talks be recorded or shared online?",
        a: "Many TEDx talks are recorded and may be published online after the event. If a talk is not cleared for recording you will be informed. By attending, you consent to reasonable event photography and videography."
    },
    {
        q: "Are accommodations and accessibility available?",
        a: "We aim to make the event accessible. If you need mobility, hearing, or other accessibility support, please contact us in advance so we can make arrangements."
    },
    {
        q: "How can organizations sponsor or partner with TEDx MSU Baroda?",
        a: "Sponsorship and partnership inquiries are welcome. See the Sponsors section or email our partners team through the contact links for sponsorship packages and opportunities."
    },
    {
        q: "I have another question — who do I contact?",
        a: "Use the Contact section on the site to email our team. For quick updates follow our social media channels where we post announcements, timeline changes, and volunteer/ticket information."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section-padding">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">FAQ</h2>
                <p className="text-gray-400">Everything you need to know about the event.</p>
            </div>

            <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                {faqs.map((faq, i) => (
                    <div key={i} className="glass-card glass-card-hover">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center p-6 text-left"
                        >
                            <span className="font-semibold text-white">{faq.q}</span>
                            <motion.div
                                animate={{ rotate: openIndex === i ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="text-red-600" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
