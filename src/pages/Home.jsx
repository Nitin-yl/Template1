import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "../components/Features";
import DashboardSection from "../components/DashboardSection";
import LiquiditySection from "../components/LiquiditySection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050509] text-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 lg:px-6 space-y-24 pb-20">
        <Hero />
        <Partners />
        <Features />
        <DashboardSection />
        <LiquiditySection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
