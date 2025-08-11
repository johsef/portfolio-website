/**
 * @copyright 2024 joejoeoyemi
 * @license Apache-2.0
 */

/**
 *Component
 */
import { useGSAP } from "@gsap/react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";

/**
 * USE GSAPI API
 */
gsap.registerPlugin(useGSAP, TextPlugin);
const Hero = () => {
  useGSAP(() => {
    gsap
      .timeline({ repeatDelay: 3, ease: "power2.out", repeat: -1 })
      .from(".message", {
        y: 100,
        opacity: 0,
        scale: 1,
        duration: 2.5,
        text: "",
      })
      .to(
        ".message",
        {
          text: "My name is Joseph",
          duration: 3,
        },
        ">2"
      )
      .to(
        ".message",
        {
          text: "A web developer by trade and a creative problem solver at heart",
          duration: 3,
          y: -80,
        },
        ">2"
      )
      .to(
        ".message",
        {
          text: "I blend creativity and technology to build responsive, engaging websites",
          duration: 3,
        },
        ">3"
      )
      .to(
        ".message",
        {
          text: "Let's build something amazing together!",
          duration: 4,
          y: 0,
        },
        ">3"
      );
  });
  return (
    <section id="home" className="py-24 h-[95vh]">
      <div
        className="container items-center
    "
      >
        <div className="relative">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar.jpg"
                width={40}
                height={40}
                alt="Joseph Oluwayemi potrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-slate-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
              <h1
                id="myText"
                className="text-white font-extralight text-lg"
              ></h1>
            </div>
          </div>

          <div className="py-[4rem] md:py-[6rem]">
            <h2 className="message headline-1 font-semibold py-14 text-center mx-auto">
              Hi there!{" "}
              <span className="inline-flex">
                <img
                  src="/images/waving-hand.gif"
                  className="h-8 w-8 md:h-16 md:w-16"
                  alt=""
                />
              </span>
            </h2>
          </div>
          

          <div className="button-test flex items-center gap-6 lg:gap-12  place-content-center">
            <ButtonPrimary target="_blank" href="https://drive.google.com/file/d/10LDBx6Jk5eZ3O5m9ZBl5aS5q5Ry1B663/view?usp=sharing" label="Download CV" icon="download" />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
