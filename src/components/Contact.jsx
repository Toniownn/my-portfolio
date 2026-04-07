import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Figma,
  Loader2,
  Send,
  Mail,
  MapPin,
  FileText,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ease = [0.22, 1, 0.36, 1];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease },
});

const socials = [
  {
    href: "https://github.com/Toniownn",
    label: "GitHub",
    Icon: Github,
  },
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
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  const inputClass =
    "w-full rounded-xl bg-surface-2 border border-hairline px-4 py-3 text-sm text-foreground placeholder:text-subtle outline-none transition-all focus:border-brand focus-visible:ring-2 focus-visible:ring-brand/30";

  return (
    <div className="px-6 md:px-32 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Motion.div {...reveal(0)} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bento px-4 py-1.5">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Contact
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] font-semibold tracking-tight">
            Let&apos;s <span className="text-gradient">connect.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, a role to fill, or just want to say hello?
            I&apos;d love to hear from you.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          <Motion.div
            {...reveal(0.05)}
            className="bento lg:col-span-8 p-7 md:p-9"
          >
            <div className="mb-6">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
                Send a message
              </h3>
              <p className="text-sm text-muted mt-1">
                I&apos;ll get back to you as soon as I can.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-medium uppercase tracking-[0.14em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <Motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </Motion.button>

              {success === true && (
                <div
                  role="status"
                  className="rounded-xl bg-mint-soft border border-hairline px-4 py-3 text-sm text-foreground"
                >
                  Message sent successfully. Thanks for reaching out!
                </div>
              )}
              {success === false && (
                <div
                  role="alert"
                  className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </Motion.div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
            <Motion.a
              {...reveal(0.1)}
              href="https://mail.google.com/mail/?view=cm&to=anthonycarl56@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bento bento-hover bento-brand p-5 group"
            >
              <Mail className="h-5 w-5 text-brand" />
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-subtle">
                Email
              </p>
              <p className="mt-1 text-sm font-medium text-foreground group-hover:text-brand transition-colors break-all">
                anthonycarl56@gmail.com
              </p>
            </Motion.a>

            <Motion.a
              {...reveal(0.15)}
              href="/CarlAnthonyDayoc_Resume.pdf"
              download="CarlAnthonyDayoc_Resume.pdf"
              className="bento bento-hover bento-violet p-5 group"
            >
              <FileText className="h-5 w-5 text-violet" />
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-subtle">
                Resume
              </p>
              <p className="mt-1 text-sm font-medium text-foreground group-hover:text-violet transition-colors">
                Download CV (PDF)
              </p>
            </Motion.a>

            <Motion.div
              {...reveal(0.2)}
              className="bento bento-hover bento-mint p-5"
            >
              <MapPin className="h-5 w-5 text-mint" />
              <p className="mt-4 text-xs uppercase tracking-[0.14em] text-subtle">
                Based in
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                Cebu, Philippines
              </p>
            </Motion.div>

            <Motion.div
              {...reveal(0.25)}
              className="bento bento-hover p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-subtle">
                Find me online
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-surface-2 border border-hairline text-muted hover:text-brand hover:border-brand/30 transition-all"
                  >
                    <social.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline text-center text-xs text-subtle">
          © 2026 Carl Anthony Dayoc. All rights reserved.
        </div>
      </div>
    </div>
  );
}
