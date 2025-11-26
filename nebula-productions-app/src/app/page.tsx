import Image from "next/image";
import LandingSection from "@/components/sections/landing-section";
import ContactsSection from "@/components/sections/contacts-section";
import WorksSection from "@/components/sections/works-section";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-gray-950 ">
        <LandingSection/>
        <WorksSection/>
        <ContactsSection/>
    </div>
  );
}
