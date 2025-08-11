/**
 * @copyright 2024 joejoeoyemi
 * @license Apache-2.0
 *
 */

/**
 *
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgUrl: "/images/angular.svg",
    label: "Angular",
    desc: "Framework",
  },
  {
    imgUrl: "/images/react.svg",
    label: "React",
    desc: "Javascrpit Library",
  },
  {
    imgUrl: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "User Interface",
  },
  {
    imgUrl: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgUrl: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgUrl: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgUrl: "/images/nextjs.svg",
    label: "NextJS",
    desc: "React Framework",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-slate-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites and applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgUrl, label, desc }, key) => (
            <SkillCard
              imgUrl={imgUrl}
              label={label}
              desc={desc}
              key={key}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
