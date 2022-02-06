import { Hero } from "components/Hero";
import { Navigation } from "components/Navigation";
import { Profile } from "components/Profile";
import { Portfolio } from "components/Portfolio";
import { Skill } from "components/Skill";
import { Contact } from "components/Contact";

export default function Home() {
  return (
    <>
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
    </>
  );
}
