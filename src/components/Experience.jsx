import { Card, CardContent } from "@/components/ui/card";

import bblc from "@/assets/bblc.png";
import ctu from "@/assets/ctu.jpg";
import lot from "@/assets/lot.jpg";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-sky-custom px-6 md:px-32 py-25"
    >
      <div className="w-full max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Experience
          </h2>
          <p className="text-xl font-semibold text-white">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>

        {/* Experience Card */}
        <Card className="border-none bg-secondary-custom shadow-[8px_8px_0_rgba(255,255,255,1)] dark:shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row md:gap-6 items-start">
              {/* Logo (20%) */}
              <div className="lg:w-1/5 flex items-center justify-center self-stretch">
                <img
                  src={bblc}
                  alt="Company Logo"
                  className="w-70 h-30 object-contain"
                />
              </div>

              {/* Content (80%) */}
              <div className="md:w-4/5 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-xl font-bold lg:text-center text-white">
                    Junior Programmer
                  </h3>
                  <span className="text-sm text-white">
                    Aug. 2024 – Aug. 2025
                  </span>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-white">
                  <li>
                    Contributed to a <strong>Next.js + MongoDB</strong>{" "}
                    web-based data logger for real-time temperature monitoring.
                  </li>
                  <li>
                    Built <strong>Flutter UI components</strong> and assisted in
                    integrating the mobile application with a
                    <strong> Spring Boot backend</strong>.
                  </li>
                  <li>
                    Supported <strong>API integration</strong>,{" "}
                    <strong>debugging</strong>, and{" "}
                    <strong>system testing </strong>
                    to improve application stability.
                  </li>
                  <li>
                    Assisted in preparing technical documentation for ongoing
                    development and maintenance.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none bg-secondary-custom shadow-[8px_8px_0_rgba(255,255,255,1)] dark:shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row md:gap-6 items-start">
              {/* Logo (20%) */}
              <div className="lg:w-1/5 flex items-center justify-center self-stretch">
                <img
                  src={ctu}
                  alt="Company Logo"
                  className="w-70 h-30 object-contain"
                />
              </div>

              {/* Content (80%) */}
              <div className="md:w-4/5 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-xl font-bold lg:text-center text-white">
                    Web Developer
                  </h3>
                  <span className="text-sm text-white">
                    Feb 2024 – May 2024
                  </span>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-white">
                  <li>
                    Assisted in developing a secure login and monitoring system
                    for tracking library user entry and exit.
                  </li>
                  <li>
                    Contributed to both <strong>front-end</strong> and{" "}
                    <strong>back-end</strong> features to improve staff
                    efficiency and data accuracy.
                  </li>
                  <li>
                    Helped with <strong>testing</strong> and{" "}
                    <strong>validation</strong> of system functionality
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-none bg-secondary-custom black shadow-[8px_8px_0_rgba(255,255,255,1)] dark:shadow-[8px_8px_0_rgba(0,0,0,1)]">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row md:gap-6 items-start">
              {/* Logo (20%) */}
              <div className="lg:w-1/5 flex items-center justify-center self-stretch">
                <img
                  src={lot}
                  alt="Company Logo"
                  className="w-70 h-30 object-contain"
                />
              </div>

              {/* Content (80%) */}
              <div className="md:w-4/5 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-xl font-bold lg:text-center text-white">
                    Front-End Developer
                  </h3>
                  <span className="text-sm text-white">
                    Feb 2024 – Jul 2024
                  </span>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-white">
                  <li>
                    <strong>Designed</strong> and <strong>developed</strong> a
                    desktop application for client record management.
                  </li>
                  <li>
                    Implemented <strong>user-friendly UI</strong> with a focus
                    on secure and efficient data handling.
                  </li>
                  <li>
                    Collaborated closely with backend developers to ensure
                    consistent system performance.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
