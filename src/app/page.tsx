import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Mission30303 } from "@/components/Mission30303";
import { AboutUs } from "@/components/AboutUs";
import { Initiatives } from "@/components/Initiatives";
import { Impact } from "@/components/Impact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Mission30303 />
        <AboutUs />
        <Initiatives />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
