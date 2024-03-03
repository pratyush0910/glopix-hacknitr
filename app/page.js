
import Feedback from "./components/feedback";
import Hero from "./components/hero";
import Testimonials from "./components/Testimonials";
import Upload from "./components/Upload";
import Footer from './components/footer'
export default function Home() {
  return (
    <main>
      <Hero/>
      <Upload/>
      <Testimonials/>
      <Feedback/>
      <Footer/>
    </main>
  );
}
