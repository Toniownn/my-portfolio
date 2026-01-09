import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import Me from "../assets/cdyc.png";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center sm:pt-0 pt-10 px-6 md:px-32"
    >
      <div className="w-full max-w-9xl mx-auto">
        <Card className="border-none bg-sky-400 shadow-[8px_8px_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_rgba(255,255,255,1)]">
          {/* Header */}
          <CardHeader className="text-center md:text-center my-5">
            <CardTitle className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              About Me
            </CardTitle>
            <CardDescription className="text-yellow-400 text-xl md:text-2xl lg:text-4xl font-semibold">
              Junior Software Engineer
            </CardDescription>
          </CardHeader>

          {/* Body */}
          <CardContent>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Image (comes first on mobile) */}
              <div className="order-1 lg:order-1 flex-shrink-0">
                <div className="bg-secondary-custom border-1 border-black dark:border-white rounded-xl w-35 h-35 md:w-[13rem] md:h-[14rem] xl:w-[18rem] xl:h-[20rem] relative shadow-[8px_8px_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_rgba(255,255,255,1)] overflow-visible">
                  <img
                    src={Me}
                    alt="Carl Anthony"
                    className="absolute -top-6 md:-top-11 xl:-top-15 left-0 w-full h-[120%] object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="order-2 lg:order-2 flex-1 text-white font-semibold text-sm lg:text-lg xl:text-2xl leading-relaxed text-center md:text-left">
                <p>
                  I am an entry-level IT graduate with hands-on experience in
                  web and mobile development. I have worked with technologies
                  such as React, Next.js, Flutter, Spring Boot, and SQL to build
                  and support monitoring systems, data loggers, and management
                  applications. Through my internship and junior programmer
                  role, I’ve contributed to UI development, backend integration,
                  system testing, and documentation. I am a fast learner with
                  strong problem-solving skills and a passion for continuously
                  improving my technical abilities through real-world projects
                  and collaboration.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
