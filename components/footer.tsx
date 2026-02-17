import { Github, Linkedin, ExternalLink, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="px-6 pb-12 pt-24">
      <div className="mx-auto max-w-md text-center">
        <p className="font-mono text-sm text-accent">04. What&apos;s Next?</p>
        <h2 className="mt-4 text-4xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          I&apos;m always open to new opportunities and interesting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>
        <a
          href="mailto:andrei.albu03@gmail.com"
          className="mt-8 inline-block rounded-full border border-accent px-8 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Say Hello
        </a>
      </div>

      {/* Social links */}
      <div className="mx-auto mt-20 flex max-w-5xl items-center justify-center gap-6">
        <a
          href="https://github.com/andreialbu03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-accent"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrei-albu-cs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-accent"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://devpost.com/andrei-albu03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-accent"
          aria-label="Devpost"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
        <a
          href="mailto:andrei.albu03@gmail.com"
          className="text-muted-foreground transition-colors hover:text-accent"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
        Built by Andrei Albu
      </p>
    </footer>
  );
}
