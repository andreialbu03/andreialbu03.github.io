import { Award } from "lucide-react";

const certifications = [
  "AWS Certified Developer – Associate",
  "Azure Developer Associate (AZ-204)",
  "Databricks Certified Data Engineer Associate",
  "Azure Fundamentals (AZ-900)",
  "Security Fundamentals (SC-900)",
];

export function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-accent">04.</span>
          Certifications
          <span className="h-px flex-1 bg-border" />
        </h2>

        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 transition-colors hover:border-accent/30"
            >
              <Award className="h-4 w-4 shrink-0 text-accent" />
              <span className="font-mono text-sm text-muted-foreground">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
