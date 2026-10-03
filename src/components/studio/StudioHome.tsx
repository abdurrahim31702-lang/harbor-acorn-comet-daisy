import { useEffect } from "react";
import { useSectionSpy } from "./use-section-spy";
import { SceneCanvas } from "./canvas/SceneCanvas";
import { Loader } from "./Loader";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { Services } from "./Services";
import { Pricing } from "./Pricing";
import { Process } from "./Process";
import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useStudio } from "@/lib/studio-store";

const SECTIONS = [
  "home",
  "work",
  "services",
  "process",
  "about",
  "contact",
  "start",
] as const;

export function StudioHome() {
  useSectionSpy(SECTIONS);
  const menuOpen = useStudio((s) => s.menuOpen);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
    }
  }, []);

  return (
    <>
      <Loader />
      <div className="grain" aria-hidden="true" />
      <SceneCanvas />
      <div className="hero-veil pointer-events-none fixed inset-0 z-veil" />
      <Nav home />
      <main id="main" className="relative z-10">
        <Hero />
        <Work />
        <Services />
        <Pricing />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer home />
    </>
  );
}
