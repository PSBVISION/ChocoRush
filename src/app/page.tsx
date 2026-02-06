"use client";
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero/>
      <div className="h-dvh border border-red-500"></div>
    </main>
  );
}
