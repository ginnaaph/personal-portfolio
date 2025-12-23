import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "../../home/Footer";
import { ContactSection } from "../components/ContactSection";
import { ContactForm } from "../components/ContactForm";

export const ContactPg = () => {
    return (
        <div id="contact" className="flex flex-col items-center justify-start">
            <Navigation />
            <main className="w-full bg-[#DAD0DC]">
                <ContactSection />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}