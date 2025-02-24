// import Faq from "./components/Faq";
import Temoignages from "./components/Temoignages";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Vision from "./components/Vision";
import Links from "./components/Links";
import Services from "./components/Services";
import Values from "./components/Values";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Contact from "./components/Contact";
// import Loader from "./components/Loader";

function App() {
  return (
    <>
    {/* <Loader /> */}
      <Top />
      
      <Links />
      <Navbar />
      <section className="px-2 max-w-md:px-16 lg:px-32">
        <Hero />

        <Vision />
        <Values />
        <About />

        <Services />
        <Temoignages />
        <Teams />
        <Contact />
        <Footer />
        <section>
          <footer></footer>
        </section>
      </section>
    </>
  );
}

export default App;
