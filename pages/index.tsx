import { useCallback, useEffect, useRef, useState } from "react";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { StickyNavigation } from "@/components/Navigation/sticky";
import { Portfolio } from "@/components/Portfolio";
import { Profile } from "@/components/Profile";
import { Skill } from "@/components/Skill";

export default function Home() {
  const [isDisplay, setIsDisplay] = useState(false);

  const isRunning = useRef(false);

  const isScrollToggle = useCallback(() => {
    if (isRunning.current) return;
    isRunning.current = true;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const nav = document.querySelector("#navigation");
    const navOffset =
      nav && window.pageYOffset + nav.getBoundingClientRect().top;

    requestAnimationFrame(() => {
      if (navOffset && scrollTop > navOffset) {
        setIsDisplay(true);
      } else {
        setIsDisplay(false);
      }
      isRunning.current = false;
    });
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", isScrollToggle, { passive: true });
    return () => {
      document.removeEventListener("scroll", isScrollToggle);
    };
  }, []);

  return (
    <>
      <StickyNavigation isDisplay={isDisplay} />
      <Hero />
      <Navigation />
      <main>
        <section id="profile">
          <Profile />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
