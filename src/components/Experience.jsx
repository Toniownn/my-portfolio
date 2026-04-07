import { motion as Motion } from "framer-motion";
import { Calendar } from "lucide-react";

import bblc from "@/assets/bblc.webp";
import ctu from "@/assets/ctu.webp";
import lot from "@/assets/lot.webp";

const ease = [0.22, 1, 0.36, 1];

const experiences = [
  {
    logo: bblc,
    role: "Junior Programmer",
    company: "BBLC",
    period: "Aug. 2024 – Aug. 2025",
    tags: ["Next.js", "MongoDB", "Flutter", "Spring Boot"],
    bullets: [
      <>
        Contributed to a <strong>Next.js + MongoDB</strong> web-based data
        logger for real-time temperature monitoring.
      </>,
      <>
        Built <strong>Flutter UI components</strong> and assisted in
        integrating the mobile application with a{" "}
        <strong>Spring Boot backend</strong>.
      </>,
      <>
        Supported <strong>API integration</strong>,{" "}
        <strong>debugging</strong>, and <strong>system testing</strong> to
        improve application stability.
      </>,
      <>
        Assisted in preparing technical documentation for ongoing development
        and maintenance.
      </>,
    ],
  },
  {
    logo: ctu,
    role: "Web Developer",
    company: "CTU",
    period: "Feb 2024 – May 2024",
    tags: ["Front-end", "Back-end", "Testing"],
    bullets: [
      <>
        Assisted in developing a secure login and monitoring system for
        tracking library user entry and exit.
      </>,
      <>
        Contributed to both <strong>front-end</strong> and{" "}
        <strong>back-end</strong> features to improve staff efficiency and
        data accuracy.
      </>,
      <>
        Helped with <strong>testing</strong> and <strong>validation</strong>{" "}
        of system functionality
      </>,
    ],
  },
  {
    logo: lot,
    role: "Front-End Developer",
    company: "LOT",
    period: "Feb 2024 – Jul 2024",
    tags: ["Desktop UI", "UX", "Collaboration"],
    bullets: [
      <>
        <strong>Designed</strong> and <strong>developed</strong> a desktop
        application for client record management.
      </>,
      <>
        Implemented <strong>user-friendly UI</strong> with a focus on secure
        and efficient data handling.
      </>,
      <>
        Collaborated closely with backend developers to ensure consistent
        system performance.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <div className="px-6 md:px-32 py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bento px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Journey
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] font-semibold tracking-tight">
            Where I&apos;ve <span className="text-gradient">worked.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            A quick summary of my most recent experiences.
          </p>
        </Motion.div>

        <div className="mt-16 flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <Motion.article
              key={`${exp.role}-${exp.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="bento bento-hover p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-surface-2 border border-hairline p-2">
                    <img
                      src={exp.logo}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-subtle font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground font-display">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-surface-2 border border-hairline px-2 py-0.5 text-[11px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2.5 text-sm md:text-[0.95rem] leading-relaxed text-muted">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={`${exp.company}-${exp.period}-${j}`}
                        className="flex gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 rounded-full bg-brand flex-shrink-0"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
