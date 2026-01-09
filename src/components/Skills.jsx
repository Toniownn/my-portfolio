import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-32 py-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          The skills, tools, and technologies I’ve explored and am actively
          building experience in:
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="
                flex flex-col items-center justify-center
                bg-white dark:bg-gray-800
                border-2 border-black dark:border-white
                rounded-xl p-6
                shadow-[6px_6px_0_rgba(0,0,0,1)]
                dark:shadow-[6px_6px_0_rgba(255,255,255,1)]
                transition-transform hover:-translate-y-1
              "
            >
              <Icon className="text-5xl text-sky-custom mb-3" />
              <span className="font-semibold text-sm md:text-base">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
