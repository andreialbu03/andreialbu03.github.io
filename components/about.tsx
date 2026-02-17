import Image from "next/image";

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
              I&apos;m an ambitious and driven computer science student with a
              passion for cloud technologies and software development. Currently
              in my fourth year at{" "}
              <span className="text-foreground font-medium">
                McMaster University
              </span>{" "}
              /{" "}
              <span className="text-foreground font-medium">
                Athabasca University
              </span>
              , I&apos;ve been building real-world experience through multiple
              roles at Deloitte working on cloud infrastructure and API
              development.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I&apos;ve attended hackathons like{" "}
              <span className="text-accent">Hack the North 2021</span>, and I
              enjoy pushing myself to learn new technologies and tackle complex
              problems. Outside of tech, you can find me playing basketball,
              working out, or reading about the latest developments in
              information technology.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Here are some technologies I&apos;ve been working with:
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                "AWS (Lambda, SQS, CloudFormation)",
                "Azure (AKS, DevOps)",
                "Google Cloud Platform",
                "Terraform / IaC",
                "Docker & Kubernetes",
                "Python & TypeScript",
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
                <Image
                  src="/images/me-talking.jpeg"
                  alt="Andrei Albu presenting"
                  fill
                  className="object-cover transition-all grayscale group-hover:grayscale-0"
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
