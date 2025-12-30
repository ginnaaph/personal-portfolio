import { Navigation } from "@/components/ui/navigation/Navigation";
import { Footer } from "../../home/components/Footer";
import { ContactSection } from "../components/ContactSection";
import { ContactForm } from "../components/ContactForm";

export const ContactPg = () => {
    return (
        <div id="contact" className="flex flex-col items-center  min-h-screen justify-start">
            <Navigation />
            <main className="w-full min-h-screen bg-[#DAD0DC]">
                <ContactSection />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}