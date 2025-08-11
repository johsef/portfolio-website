/**
 * @copyright 2024 joejoeoyemi
 * @license Apache-2.0
 *
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const WorkItem = [
  {
    imgUrl: "/images/project-1.png",
    title: "Dark Sass Blockchain Website",
    tags: ["React", "TailwindCSS", "Astro"],
    projectLink: "https://dark-sass-blockchain-site.netlify.app/",
  },
  {
    imgUrl: "/images/project-2.png",
    title: "IPhone 15 Clone Website",
    tags: ["Tailwind", "React", "Three.js"],
    projectLink: "https://phone-15-clone.netlify.app/",
  },
];

const Work = () => {
  return (
    <section
      className="section"
      id="work"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                Portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {WorkItem.map(({imgUrl, title, tags, projectLink}, key)=>(
                    <ProjectCard 
                    imgUrl={imgUrl}
                    tags={tags}
                    title={title}
                    projectLink={projectLink}
                    key={key}
                    classes="reveal-up" />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Work;
