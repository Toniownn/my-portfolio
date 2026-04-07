import { motion as Motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Figma,
  ArrowUpRight,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiSpringboot,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import Me from "@/assets/cdyc.webp";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const socials = [
  { href: "https://github.com/Toniownn", label: "GitHub", Icon: Github },
  {
    href: "https://www.instagram.com/tonyownn",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/carl-anthony-dayoc-361b35168/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.figma.com/@Toniownn27",
    label: "Figma",
    Icon: Figma,
  },
];

const stackPreview = [
  { Icon: SiReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNodedotjs, label: "Node.js" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiSpringboot, label: "Spring Boot" },
  { Icon: SiFlutter, label: "Flutter" },
  { Icon: SiTailwindcss, label: "Tailwind" },
];

export default function Home() {
  return (
    <div className="relative px-6 md:px-32 pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <Motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full bento px-4 py-1.5"
            >
              <span className="relative inline-flex h-2 w-2 text-mint pulse-dot">
                <span className="relative inline-block h-2 w-2 rounded-full bg-mint" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Available for work
              </span>
            </Motion.div>

            <Motion.h1
              {...fadeUp(0.08)}
              className="font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[0.95] mt-6 text-foreground font-semibold tracking-tight"
            >
              Carl Anthony
              <br />
              <span className="text-gradient">Dayoc.</span>
            </Motion.h1>

            <Motion.p
              {...fadeUp(0.16)}
              className="text-base md:text-lg text-muted mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full-stack developer building web and mobile experiences across{" "}
              <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Next.js</span>,{" "}
              <span className="text-foreground font-medium">Node</span>,{" "}
              <span className="text-foreground font-medium">Spring Boot</span>,
              and <span className="text-foreground font-medium">Flutter</span>.
            </Motion.p>

            <Motion.div
              {...fadeUp(0.24)}
              className="mt-9 flex flex-col sm:flex-row items-center lg:items-start gap-3 justify-center lg:justify-start"
            >
              <Motion.a
                href="/CarlAnthonyDayoc_Resume.pdf"
                download="CarlAnthonyDayoc_Resume.pdf"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease }}
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download CV
              </Motion.a>
              <Motion.a
                href="#portfolio"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease }}
                className="inline-flex items-center gap-2 rounded-xl bento bento-hover px-6 py-3 text-sm font-medium text-foreground"
              >
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </Motion.a>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, color-mix(in oklch, var(--brand) 40%, transparent), transparent 60%), radial-gradient(circle at 70% 70%, color-mix(in oklch, var(--violet) 35%, transparent), transparent 60%)",
                }}
              />
              <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem] rounded-[2rem] overflow-hidden bento">
                <img
                  src={Me}
                  alt="Carl Anthony Dayoc"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bento bento-hover p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-subtle">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Role
            </div>
            <p className="mt-3 text-sm md:text-base font-semibold text-foreground leading-snug">
              Junior Software Developer
            </p>
            <p className="mt-1 text-xs text-muted">Full-stack · Web · Mobile</p>
          </div>

          <div className="bento bento-hover p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-subtle">
              <MapPin className="h-3.5 w-3.5 text-violet" />
              Based in
            </div>
            <p className="mt-3 text-sm md:text-base font-semibold text-foreground leading-snug">
              Cebu, Philippines
            </p>
            <p className="mt-1 text-xs text-muted">Open to remote</p>
          </div>

          <div className="bento bento-hover p-5 col-span-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-subtle">
              Current stack
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-3">
              {stackPreview.map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
                  title={tech.label}
                >
                  <tech.Icon className="h-4 w-4" />
                  <span className="text-xs font-medium">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-6 flex items-center justify-center lg:justify-start gap-3"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bento bento-hover text-muted hover:text-brand"
            >
              <social.Icon className="h-4 w-4" />
            </a>
          ))}
        </Motion.div>
      </div>
    </div>
  );
}
