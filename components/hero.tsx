import { Github, Linkedin, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-12 md:flex-row md:items-center md:gap-16">
        {/* Text content */}
        <div className="flex-1">
          <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Andrei Albu.</span>
          </h1>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">I build things for the cloud.</span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Cloud Developer at{" "}
            <span className="text-foreground font-medium">Deloitte</span> and
            Computer Science student at{" "}
            <span className="text-foreground font-medium">
              McMaster University
            </span>
            . I specialize in cloud infrastructure, API development, and DevOps
            automation.
          </p>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-5">
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
              className="ml-2 rounded-full border border-accent px-5 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-accent/20 sm:h-72 sm:w-72">
            <img
              src="/images/pfp.jpg"
              alt="Andrei Albu"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-accent/10 blur-sm" />
        </div>
      </div>
    </section>
  );
}
