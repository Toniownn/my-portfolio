import { motion as Motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
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
import { Layout, Server, Smartphone, Database, Wrench, Code2 } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const categories = [
  {
    title: "Frontend",
    blurb: "Building responsive, accessible web UIs.",
    Icon: Layout,
    accent: "brand",
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs, data layers, and integrations.",
    Icon: Server,
    accent: "violet",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "Spring Boot", Icon: SiSpringboot },
    ],
  },
  {
    title: "Mobile",
    blurb: "Cross-platform apps that ship to both stores.",
    Icon: Smartphone,
    accent: "mint",
    items: [
      { name: "Flutter", Icon: SiFlutter },
      { name: "Dart", Icon: SiDart },
    ],
  },
  {
    title: "Databases",
    blurb: "Relational and document stores.",
    Icon: Database,
    accent: "amber",
    items: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
  {
    title: "Languages",
    blurb: "What I write the most, day to day.",
    Icon: Code2,
    accent: "brand",
    items: [
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Dart", Icon: SiDart },
    ],
  },
  {
    title: "Tools",
    blurb: "Version control, design, and collaboration.",
    Icon: Wrench,
    accent: "violet",
    items: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Figma", Icon: SiFigma },
    ],
  },
];

const accentMap = {
  brand: { bg: "bento-brand", text: "text-brand", hover: "skill-hover-brand" },
  violet: { bg: "bento-violet", text: "text-violet", hover: "skill-hover-violet" },
  mint: { bg: "bento-mint", text: "text-mint", hover: "skill-hover-mint" },
  amber: { bg: "bento-amber", text: "text-amber", hover: "skill-hover-amber" },
};

export default function Skills() {
  return (
    <div className="px-6 md:px-32 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bento px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Toolbox
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] font-semibold tracking-tight">
            A full-stack <span className="text-gradient">toolbox.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            From the pixels to the database — the technologies I reach for
            most.
          </p>
        </Motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => {
            const accent = accentMap[cat.accent];
            return (
              <Motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(i * 0.06, 0.36),
                  ease,
                }}
                className={`bento bento-hover ${accent.bg} p-6 md:p-7 flex flex-col`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-hairline">
                      <cat.Icon className={`h-5 w-5 ${accent.text}`} />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{cat.blurb}</p>
                  </div>
                  <span className="text-xs font-mono text-subtle">
                    {String(cat.items.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className={`group flex items-center gap-3 rounded-lg px-2 py-1.5 -mx-2 hover:bg-foreground/[0.04] transition-colors ${accent.hover}`}
                    >
                      <item.Icon className="h-4 w-4 text-muted skill-icon transition-colors" />
                      <span className="text-sm text-foreground font-medium">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
