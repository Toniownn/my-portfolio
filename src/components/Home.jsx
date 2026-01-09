import { Github, Instagram, Linkedin, Figma } from "lucide-react";

import Me from "../assets/cdyc.png";
export default function Home() {
  return (
    <>
      <main className="h-full flex justify-center items-center bg-gray-50 dark:bg-gray-900 px-6 md:px-32">
        <div className="w-full flex flex-col md:flex-row items-center gap-15 md:gap-32">
          <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
            {/*Social Icons*/}
            <div className="flex flex-row lg:flex-col items-center gap-5 md:gap-6 order-2 lg:order-1">
              <a
                href="https://github.com/Toniownn"
                className="hover:text-sky-500 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/tonyownn"
                className="hover:text-sky-500 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/carl-anthony-dayoc-361b35168/"
                className="hover:text-sky-500 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.figma.com/@Toniownn27"
                className="hover:text-sky-500 transition"
              >
                <Figma className="w-6 h-6" />
              </a>
            </div>

            {/*Main Content*/}
            <div className="flex-1 text-center md:text-left order-1 lg:order-2">
              <p className="text-sky-500 font-bold text-3xl lg:text-5xl">
                Hi, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-2">
                Carl Anthony Dayoc
              </h1>
              <h2 className="text-base lg:text-4xl font-medium mt-1">
                Junior Software Developer
              </h2>
              <p className="text-sm lg:text-2xl text-gray-600 dark:text-gray-300 mt-4 max-w-md">
                I strive to build immersive and beautiful web applications
                through carefully crafted code and user-centric design.
              </p>
              <a
                href="/CarlAnthonyDayoc_Resume.pdf"
                download="CarlAnthonyDayoc_Resume.pdf"
              >
                <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-black dark:text-white font-semibold px-6 py-3 rounded-lg transition shadow-[8px_8px_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_rgba(255,255,255,1)]">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/*Image flex-shrink-0*/}
          <div className="relative order-3">
            {/* Box with background and shadow */}
            <div className="bg-sky-400 rounded-xl w-60 h-60 md:w-[17rem] md:h-[18rem] xl:h-[32rem] xl:w-[35rem] relative shadow-[8px_8px_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_rgba(255,255,255,1)] overflow-visible">
              {/* Image */}
              <img
                src={Me}
                alt="Carl Anthony"
                className="absolute -top-11 md:-top-14 xl:-top-25 left-0 w-full h-[120%] object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
