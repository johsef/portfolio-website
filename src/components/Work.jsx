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
    imgUrl: "/images/teju-weds-jide.jpeg",
    title: "Wedding Website",
    tags: ["React", "TailwindCSS"],
    projectLink: "https://teju-weds-jide.vercel.app/",
  },
  {
    imgUrl: "/images/event-planner-website.png",
    title: "Event Planner Website",
    tags: ["CSS3", "React", "MongoDB"],
    projectLink: "https://event-planner-system.vercel.app/",
  },
  {
    imgUrl: "/images/esther-weds-philip-website.png",
    title: "Wedding Website",
    tags: ["React", "TailwindCSS"],
    projectLink: "https://esther-weds-philip.vercel.app/",
  },
  // {
  //   imgUrl: "/images/project-1.jpg",
  //   title: "Full stack music app",
  //   tags: ["API", "MVC", "Development"],
  //   projectLink: "",
  // },
  // {
  //   imgUrl: "/images/project-2.jpg",
  //   title: "Free stock photo app",
  //   tags: ["API", "SPA"],
  //   projectLink: "",
  // },
  // {
  //   imgUrl: "/images/project-3.jpg",
  //   title: "Recipe  app",
  //   tags: ["API", "Development"],
  //   projectLink: "",
  // },
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
