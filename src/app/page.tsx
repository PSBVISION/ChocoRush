"use client";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import MessageSection from "@/sections/MessageSection";
import Flavour from "@/sections/Flavour";
import { useGSAP } from "@gsap/react";
import NutritionSection from "@/components/NutritionSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <Flavour />
          <NutritionSection/>
          <div className="h-dvh border border-red-500"></div>
        </div>
      </div>
    </main>
  );
}
