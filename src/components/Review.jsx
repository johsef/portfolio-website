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
import ReviewCard from "./ReviewCard";
const reviews = [
  {
    content:
      "An exceptional front-end developer! The UI is smooth, responsive, and visually appealing. They truly brought our vision to life.",
    name: "Jessica Brown",
    imgUrl: "/images/people-1.jpg",
    company: "BrightFuture Solutions",
  },
  {
    content:
      "Incredibly skilled with modern frameworks and design principles. They transformed our website into a seamless user experience.",
    name: "Michael Stone",
    imgUrl: "/images/people-2.jpg",
    company: "Tech Innovate",
  },
  {
    content:
      "Attention to detail and user experience is remarkable. Our web app has never looked better!",
    name: "Linda Martinez",
    imgUrl: "/images/people-3.jpg",
    company: "Growth Mindset Inc.",
  },
  {
    content:
      "They made our website responsive and visually stunning. We’re thrilled with the result and look forward to more projects together!",
    name: "Samuel Green",
    imgUrl: "/images/people-4.jpg",
    company: "Peak Performers",
  },
  {
    content:
      "Fantastic front-end developer who understands user experience deeply. The final product was smooth and very intuitive.",
    name: "Samantha Lee",
    imgUrl: "/images/people-5.jpg",
    company: "NextGen Enterprises",
  },
  {
    content:
      "Their expertise in JavaScript frameworks made a huge difference for our project. The interface is fast, modern, and looks fantastic.",
    name: "Alex Johnson",
    imgUrl: "/images/people-6.jpg",
    company: "Elite Vision Corp.",
  },
];

const Review = () => {
  useGSAP(() => {
    gsap.to(".scrub-slide", {
      scrollTrigger: {
        trigger: ".scrub-slide",
        start: "-200% 80%",
        end: "400% 80%",
        scrub: true,
      },
      x: "-500",
    });
  });
  return (
    <>
      {/* <section className="section overflow-hidden" id="reviews">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                What our clients say
            </h2>

            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content, name, imgUrl, company}, key)=>(
                    <ReviewCard 
                    content={content}
                    name={name}
                    imgUrl={imgUrl}
                    company={company}
                    key={key}/>
                ))}
            </div>
        </div>
      </section> */}
    </>
  );
};

export default Review;
