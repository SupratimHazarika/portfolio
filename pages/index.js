import Head from 'next/head';
import About from '../components/About';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Supratim | Front-End developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}