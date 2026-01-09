import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Instagram, Linkedin, Figma } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_mo88jdb",
        "template_jemri4l",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "sz4YUbEzRDcgIzbfX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-[85vh] bg-sky-custom px-6 md:px-32 py-16 text-white"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
        <p className="mt-4 text-lg opacity-90">
          Cultivating Connections: Reach Out And Connect With Me
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div className="space-y-8">
            <h3 className="text-6xl font-bold">Let’s connect</h3>

            <p className="text-lg">
              Say hello at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&to=anthonycarl56@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-cyan-200"
              >
                anthonycarl56@gmail.com
              </a>
            </p>

            <p className="text-lg">
              For more info, here’s my{" "}
              <a
                href="/CarlAnthonyDayoc_Resume.pdf"
                download="CarlAnthonyDayoc_Resume.pdf"
                className="underline underline-offset-4 hover:text-cyan-200"
              >
                resume
              </a>
            </p>

            {/* Icons */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/Toniownn"
                className="hover:text-cyan-200"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.instagram.com/tonyownn"
                className="hover:text-cyan-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/carl-anthony-dayoc-361b35168/"
                className="hover:text-cyan-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.figma.com/@Toniownn27"
                className="hover:text-cyan-200"
              >
                <Figma size={24} />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-sm opacity-80">
            © 2026 Carl Anthony Dayoc
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="lg:w-1/2">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-white">Name</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white dark:bg-white text-gray-900 placeholder:text-gray-400 py-5 focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white dark:bg-white text-gray-900 placeholder:text-gray-400 py-5 focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Subject</Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white dark:bg-white text-gray-900 placeholder:text-gray-400 py-5 focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Message</Label>
                  <Textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white dark:bg-white text-gray-900 placeholder:text-gray-400 py-5 focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-6 bg-sky-700 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-[8px_8px_0_rgba(255,255,255,1)]"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {success === true && (
                  <p className="text-green-500 mt-2">
                    Message sent successfully!
                  </p>
                )}
                {success === false && (
                  <p className="text-red-500 mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
