import Feedback from "./components/feedback";
import Hero from "./components/hero";
import Testimonials from "./components/Testimonials";
import Upload from "./components/Upload";

export default function Home() {
  return (
    <main>
      <Hero />
      <Upload />
      <Testimonials />
      <Feedback />
    </main>
  );
}
