/**
 * @copyright 2024 joejoeoyemi
 * @license Apache-2.0
 *
 */
/**
 * Node modules
 */
import ReactLenis from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 *
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
// import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: "-200 bottom",
          end: "bottom 80%",
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap
      .timeline()
      .from(".test-text", {
        x: -500,
        duration: 1,
        ease: "linear",
      })
      .from(".header", {
        y: -500,
        duration: 1,
        ease: "elastic.out(0.9,0.9)",
      });

    gsap.from(".button-test", {
      scale: 0,
      duration: 1,
      x: -200,
      y: -60,
    });
  });
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        {/* <Review /> */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
