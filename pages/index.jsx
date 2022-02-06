import { Hero } from "components/Hero";
import { Navigation } from "components/Navigation";
import { Profile } from "components/Profile";

export default function Home() {
  return (
    <>
      <Hero />
      <Navigation />
      <main>
        <section id="profile">
          <Profile />
        </section>
      </main>
    </>
  );
}
