import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Github,
  X,
  Expand,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ProjectImages } from "@/assets/ProjectImages";

const projects = [
  {
    title: "Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe Game is an interactive web-based application that recreates the classic two-player game on a 3×3 grid. The game manages player turns, validates each move, and continuously checks all possible winning combinations. It automatically determines when a player wins or when the match ends in a draw, providing clear visual feedback to the users. Designed with simplicity and usability in mind, the game offers a smooth and engaging experience for casual play.",
    images: ProjectImages.tictactoe,
    stack: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Toniownn/React-Tic-Tac-Toe",
    liveDemo: "https://react-tic-tac-toe-nine-murex.vercel.app/",
  },
  {
    title: "Ping Pong Score Keeper",
    description:
      "Ping Pong Score Keeper is an interactive scoreboard application designed for tracking ping-pong matches. Users can define a winning score, and the system automatically updates player scores in real time. Once a player reaches the selected winning number, the app clearly highlights and announces the winner.",
    images: ProjectImages.pingpong,
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Toniownn/PingPongScoreKeeper",
    liveDemo: "https://ping-pong-score-keeper-one.vercel.app/",
  },
  {
    title: "Note App",
    description:
      "Note App is a sticky notes application that allows users to create an account and log in to manage their notes securely. Users can create multiple folders to organize their notes by category, and easily add, edit, or delete notes within each folder. The app provides a simple and intuitive interface, making it easy to keep track of ideas, reminders, and tasks. With user authentication, each user’s notes are private and accessible only to them, ensuring a personalized and organized experience for managing daily tasks and important information.",
    images: ProjectImages.note,
    stack: ["React", "TypeScript", "Firebase", "Tailwind", "Shadcn"],
    github: "https://github.com/Toniownn/Note-App-Public",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Array(projects.length).fill(0)
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const nextImage = (i) => {
    setCurrentIndex((prev) =>
      prev.map((idx, j) =>
        i === j ? (idx + 1) % projects[i].images.length : idx
      )
    );
  };

  const prevImage = (i) => {
    setCurrentIndex((prev) =>
      prev.map((idx, j) =>
        i === j
          ? (idx - 1 + projects[i].images.length) % projects[i].images.length
          : idx
      )
    );
  };

  const openModal = (project, index = 0) => {
    setModalProject(project);
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const nextModalImage = () => {
    if (!modalProject) return;
    setModalImageIndex((prev) => (prev + 1) % modalProject.images.length);
  };

  const prevModalImage = () => {
    if (!modalProject) return;
    setModalImageIndex(
      (prev) =>
        (prev - 1 + modalProject.images.length) % modalProject.images.length
    );
  };

  const featured = projects[0];
  const rest = projects.slice(1);

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
              Selected work
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] font-semibold tracking-tight">
            Recent <span className="text-gradient">projects.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            A few projects I&apos;ve built and enjoyed working on.
          </p>
        </Motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          <Motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="bento bento-hover lg:col-span-12 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative bg-surface-2">
                <button
                  type="button"
                  onClick={() => openModal(featured, currentIndex[0])}
                  aria-label={`Expand ${featured.title} image`}
                  className="block w-full h-full relative group/img"
                >
                  <img
                    src={featured.images[currentIndex[0]]}
                    alt={`${featured.title} screenshot ${currentIndex[0] + 1} of ${featured.images.length}`}
                    className="w-full h-72 lg:h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/70 backdrop-blur border border-hairline text-foreground opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <Expand className="h-4 w-4" />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage(0);
                  }}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/70 backdrop-blur border border-hairline text-foreground hover:bg-background transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage(0);
                  }}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/70 backdrop-blur border border-hairline text-foreground hover:bg-background transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {featured.images.map((_, idx) => (
                    <span
                      key={idx}
                      aria-hidden="true"
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentIndex[0]
                          ? "w-6 bg-brand"
                          : "w-1.5 bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-7 md:p-9 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-soft text-brand px-2 py-0.5 text-[11px] font-mono font-medium uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground font-semibold tracking-tight">
                  {featured.title}
                </h3>
                <p className="text-sm md:text-base text-muted leading-relaxed">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface-2 border border-hairline px-2.5 py-1 text-xs font-mono text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-2">
                  <Motion.a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.25, ease }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Motion.a>
                  {featured.liveDemo && (
                    <Motion.a
                      href={featured.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.25, ease }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bento bento-hover px-5 py-2.5 text-sm font-medium text-foreground"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </Motion.a>
                  )}
                </div>
              </div>
            </div>
          </Motion.article>

          {rest.map((project, idx) => {
            const i = idx + 1;
            return (
              <Motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease }}
                className="bento bento-hover lg:col-span-6 overflow-hidden flex flex-col"
              >
                <div className="relative bg-surface-2">
                  <button
                    type="button"
                    onClick={() => openModal(project, currentIndex[i])}
                    aria-label={`Expand ${project.title} image`}
                    className="block w-full relative group/img"
                  >
                    <img
                      src={project.images[currentIndex[i]]}
                      alt={`${project.title} screenshot ${currentIndex[i] + 1} of ${project.images.length}`}
                      className="w-full h-56 md:h-64 object-cover"
                    />
                    <span className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-background/70 backdrop-blur border border-hairline text-foreground opacity-0 group-hover/img:opacity-100 transition-opacity">
                      <Expand className="h-4 w-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(i);
                    }}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-background/70 backdrop-blur border border-hairline text-foreground hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(i);
                    }}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-background/70 backdrop-blur border border-hairline text-foreground hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-foreground font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-surface-2 border border-hairline px-2 py-0.5 text-[11px] font-mono text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-surface-2 border border-hairline px-3 py-1.5 text-xs font-medium text-foreground hover:bg-foreground/[0.06] transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-surface-2 border border-hairline px-3 py-1.5 text-xs font-medium text-foreground hover:bg-foreground/[0.06] transition-colors"
                      >
                        Live
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </Motion.article>
            );
          })}
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-5xl p-0 overflow-hidden border-hairline bg-surface"
        >
          {modalProject && (
            <>
              <DialogTitle className="sr-only">
                {modalProject.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {modalProject.title} screenshot {modalImageIndex + 1} of{" "}
                {modalProject.images.length}
              </DialogDescription>
              <div className="relative">
                <img
                  src={modalProject.images[modalImageIndex]}
                  alt={`${modalProject.title} screenshot ${modalImageIndex + 1} of ${modalProject.images.length}`}
                  className="w-full max-h-[80vh] object-contain bg-surface-2"
                />
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  className="absolute top-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background/80 backdrop-blur border border-hairline text-foreground hover:bg-background transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={prevModalImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background/80 backdrop-blur border border-hairline text-foreground hover:bg-background transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextModalImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background/80 backdrop-blur border border-hairline text-foreground hover:bg-background transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
