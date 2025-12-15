import Nav from '../components/Nav/Nav';
import Hero from "../sections/Hero/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}