import About from '../components/About';
import AskAI from '../components/AskAI';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <AskAI />
      <Contact />
    </div>
  );
}
