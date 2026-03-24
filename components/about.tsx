export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-accent">03.</span>
          About Me
          <span className="h-px flex-1 bg-border" />
        </h2>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="flex-1">
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m an ambitious and driven computer science graduate from{" "}
              <span className="text-foreground font-medium">
                Athabasca University
              </span>{" "}
              (Great Distinction) with a passion for cloud technologies and
              software engineering. I&apos;ve built production systems at{" "}
              <span className="text-foreground font-medium">Deloitte</span> and{" "}
              <span className="text-foreground font-medium">Cirrus Labs</span>,
              working across cloud infrastructure, API development, and AI
              integration.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I&apos;ve attended hackathons like{" "}
              <span className="text-accent">Hack the North 2021</span>, and I
              enjoy pushing myself to learn new technologies and tackle complex
              problems. Outside of tech, you can find me rock climbing, which I
              love because it combines physical activity with
              problem-solving, much like coding itself.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Here are some technologies I&apos;ve been working with:
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "Python, Java, TypeScript",
                "AWS, Azure, GCP",
                "Docker & Kubernetes",
                "Terraform / IaC",
                "FastAPI, React, Flask",
                "CI/CD & GitHub Actions",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-start gap-2 font-mono text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0">
            <div className="group relative">
              <div className="relative h-72 w-60 overflow-hidden rounded-xl">
                <img
                  src="/images/me-talking.jpeg"
                  alt="Andrei Albu presenting"
                  className="h-full w-full object-cover transition-all grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute -inset-2 -z-10 rounded-xl border-2 border-accent/30 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
