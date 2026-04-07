import { motion as Motion } from "framer-motion";
import { GraduationCap, Code2, Layers, Rocket } from "lucide-react";
import Me from "@/assets/cdyc.webp";

const ease = [0.22, 1, 0.36, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease },
});

const stats = [
  {
    Icon: Code2,
    label: "Languages",
    value: "8+",
    sub: "JS, TS, Dart, Java, SQL…",
    accent: "brand",
  },
  {
    Icon: Layers,
    label: "Stack layers",
    value: "Full",
    sub: "Web · Mobile · Backend",
    accent: "violet",
  },
  {
    Icon: Rocket,
    label: "Shipped",
    value: "Apps",
    sub: "Web, mobile & desktop",
    accent: "mint",
  },
  {
    Icon: GraduationCap,
    label: "Background",
    value: "BS IT",
    sub: "Hands-on internships",
    accent: "amber",
  },
];

const learning = ["TypeScript", "Spring Boot", "MongoDB", "Next.js", "Flutter"];

export default function AboutMe() {
  return (
    <div className="px-6 md:px-32 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Motion.div {...reveal(0)} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bento px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              About
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] font-semibold tracking-tight">
            Hello, I&apos;m <span className="text-gradient">Carl.</span>
          </h2>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          <Motion.div
            {...reveal(0.05)}
            className="bento bento-hover md:col-span-2 md:row-span-2 relative overflow-hidden min-h-[360px]"
          >
            <img
              src={Me}
              alt="Carl Anthony Dayoc"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background:
                  "linear-gradient(to top, oklch(0 0 0 / 0.7), transparent)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 photo-caption">
              <p className="font-display text-xl font-semibold">
                Carl Anthony Dayoc
              </p>
              <p className="text-xs opacity-75 mt-1">
                Junior Software Developer
              </p>
            </div>
          </Motion.div>

          <Motion.div
            {...reveal(0.1)}
            className="bento bento-hover md:col-span-4 p-7 md:p-8"
          >
            <div className="text-xs uppercase tracking-[0.14em] text-subtle mb-3">
              Bio
            </div>
            <p className="text-base md:text-[1.05rem] text-muted leading-relaxed">
              I am an entry-level IT graduate with hands-on experience in web
              and mobile development. I have worked with technologies such as
              React, Next.js, Flutter, Spring Boot, and SQL to build and
              support monitoring systems, data loggers, and management
              applications. Through my internship and junior programmer role,
              I&apos;ve contributed to UI development, backend integration,
              system testing, and documentation. I am a fast learner with
              strong problem-solving skills and a passion for continuously
              improving my technical abilities through real-world projects and
              collaboration.
            </p>
          </Motion.div>

          {stats.map((stat, i) => {
            const accentBg = {
              brand: "bento-brand",
              violet: "bento-violet",
              mint: "bento-mint",
              amber: "bento-amber",
            }[stat.accent];
            const accentText = {
              brand: "text-brand",
              violet: "text-violet",
              mint: "text-mint",
              amber: "text-amber",
            }[stat.accent];
            return (
              <Motion.div
                key={stat.label}
                {...reveal(0.15 + i * 0.05)}
                className={`bento bento-hover ${accentBg} md:col-span-1 p-5`}
              >
                <stat.Icon className={`h-5 w-5 ${accentText}`} />
                <p className="mt-4 font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  {stat.sub}
                </p>
              </Motion.div>
            );
          })}

          <Motion.div
            {...reveal(0.35)}
            className="bento bento-hover md:col-span-2 p-6"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-subtle">
              <span className="relative inline-flex h-2 w-2 text-brand pulse-dot">
                <span className="relative inline-block h-2 w-2 rounded-full bg-brand" />
              </span>
              Currently exploring
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {learning.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-surface-2 border border-hairline px-2.5 py-1 text-xs font-mono text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}
