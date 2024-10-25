import {
  FaSquareJs,
  FaGitAlt,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from "react-icons/fa6";
import {
  SiNestjs,
  SiStorybook,
  SiTypescript,
  SiSocketdotio,
} from "react-icons/si";
const skills = [
  {
    name: "JavaScript",
    icon: <FaSquareJs className="h-full w-full" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="h-full w-full" />,
    link: "https://git-scm.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-full w-full" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="h-full w-full" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="h-full w-full" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "React",
    icon: <FaReact className="h-full w-full" />,
    link: "https://react.dev/",
  },
  {
    name: "Sass",
    icon: <FaSass className="h-full w-full" />,
    link: "https://sass-lang.com/",
  },
  {
    name: "Nest.JS",
    icon: <SiNestjs className="h-full w-full" />,
    link: "https://nestjs.com/",
  },
  {
    name: "Storybook",
    icon: <SiStorybook className="h-full w-full" />,
    link: "https://storybook.js.org/",
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="h-full w-full" />,
    link: "https://socket.io/",
  },
];

const Skills = () => {
  return (
    <div className="mx-auto flex h-[728px] w-[1440px] flex-col items-center justify-center p-[60px_80px]">
      <div className="flex h-[608px] w-[1280px] flex-col items-start gap-5 px-8">
        {/* Header Row */}
        <div className="flex h-[96px] w-[1216px] flex-row items-center justify-center gap-4 py-5 text-[48px] font-normal leading-[56px] tracking-[-0.02em] text-black">
          <div>My</div>
          <div className="font-extrabold">Skills</div>
        </div>

        {/* Skills Column */}
        <div className="grid h-[492px] w-[1216px] grid-cols-5 grid-rows-2 items-center justify-between gap-4 text-center text-[20px] font-bold capitalize tracking-[-0.02em] text-black">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mx-auto flex h-[186px] w-[186px] cursor-pointer flex-col items-center justify-center gap-8 rounded border-2 border-black bg-white p-6 transition-colors duration-300 hover:bg-black hover:text-white"
              onClick={() => window.open(skill.link, "_blank")}
            >
              <div className="relative h-[56px] w-[56px]">{skill.icon}</div>
              <div className="h-[24px] w-[138px] leading-[24px]">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
