import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Stockhome",
    description:
      "A complete financial website offering stock tracking features, information about investing and more. Helps investors build their personal wealth with up-to-date information and statistics about the latest stocks.",
    tags: ["Finance", "Web App", "API"],
  },
  {
    title: "CareBridge",
    description:
      "A healthcare tool using AI to simplify medical documents and enhance communication. Leveraging OpenAI's GPT model, it translates complex jargon into plain English with AI-driven text extraction for reliable health insights.",
    tags: ["AI", "OpenAI", "Healthcare"],
  },
  {
    title: "Covi",
    description:
      "A comprehensive Covid-19 Discord bot built with Python. Uses Discord.py, Serpapi for Google News scraping, and Disease.sh API for local and global Covid-19 statistics.",
    tags: ["Python", "Discord.py", "API"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-accent">02.</span>
          Projects
          <span className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-accent/30 hover:-translate-y-1"
            >
              {/* Top icon row */}
              <div className="mb-6 flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/andreialbu03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/andreialbu03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/andreialbu03?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
