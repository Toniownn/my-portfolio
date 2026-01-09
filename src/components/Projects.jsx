import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { ProjectImages } from "../assets/ProjectImages";

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

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(
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

  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
    setModalImageIndex(0);
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

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-32 py-20">
      {/* Title */}
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Portfolio
        </h2>
        <p className="text-xl font-semibold">
          Here are a few projects I’ve built and enjoyed working on:
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="flex flex-col lg:flex-row gap-6 p-6 bg-sky-custom shadow-[8px_8px_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_rgba(255,255,255,1)] border-none"
          >
            {/* Left: Carousel */}
            <div
              className="relative w-full lg:w-1/4 flex items-center justify-center min-h-[200px] cursor-pointer"
              onClick={() => openModal(project, currentIndex[i])}
            >
              <img
                src={project.images[currentIndex[i]]}
                alt={project.title}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage(i);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage(i);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-800 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                <ChevronRight />
              </button>
            </div>

            {/* Right: Project info */}
            <CardContent className="flex-1 flex flex-col justify-between gap-4">
              <CardTitle className="text-2xl font-bold">
                {project.title}
              </CardTitle>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="text-sm w-full sm:w-auto"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See on GitHub
                  </a>
                </Button>

                {project.liveDemo && (
                  <Button
                    asChild
                    variant="outline"
                    className="text-sm w-full sm:w-auto"
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {/* Modal */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative w-full max-w-5xl">
            {" "}
            {/* Increased max width */}
            <img
              src={modalProject.images[modalImageIndex]}
              alt={modalProject.title}
              className="rounded-lg object-contain w-full max-h-[80vh]"
            />
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700"
            >
              <X size={20} />
            </button>
            {/* Previous image */}
            <button
              onClick={prevModalImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <ChevronLeft />
            </button>
            {/* Next image */}
            <button
              onClick={nextModalImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
