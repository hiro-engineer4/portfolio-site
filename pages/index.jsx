import { Hero } from "components/Hero";
import { Navigation } from "components/Navigation";
import { Profile } from "components/Profile";
import { Portfolio } from "components/Portfolio";

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
      </main>
    </>
  );
}
