const experiences = [
  {
    year: "2025",
    title: "Software Engineer",
    company: "Deloitte",
    bullets: [
      "Built and owned a production RCSA platform (Python, Flask) on Azure, designing data ingestion and normalization pipelines for multi-source process data, reducing manual assessment effort by 55% across a 14-member team",
      "Integrated GPT models via Azure AI Foundry into backend pipelines to extract structured process steps and map sub-risks, using parallel request handling and post-processing to increase throughput by 60%",
      "Designed API layer and workflow orchestration for risk identification, control mapping, and residual risk scoring, scaling from prototype to deployment that secured a $1M client engagement",
      "Developed a validation engine assessing 665+ enterprise controls using DBSCAN clustering for semantic grouping, reducing QA review time by 60% and improving control rationalization by 30%",
    ],
    tags: ["Python", "Flask", "Azure", "GPT", "DBSCAN", "API"],
  },
  {
    year: "2024",
    title: "Software Engineer",
    company: "Cirrus Labs",
    bullets: [
      "Scaled a centralized IPAM platform integrating AWS and Azure APIs, extending automated IP oversight across 15,000+ cloud accounts and reducing manual configuration errors and drift",
      "Migrated 10 production repositories from GCP to GitHub, re-engineering CI/CD pipelines and standardizing deployments across three environments while unifying developer tooling across teams",
    ],
    tags: ["AWS", "Azure", "GCP", "CI/CD", "GitHub"],
  },
  {
    year: "2024",
    title: "Software Engineering Intern",
    company: "Deloitte",
    bullets: [
      "Architected and deployed RESTful API endpoints (FastAPI) to automate Azure Kubernetes cluster provisioning, replacing manual processes with self-serve infrastructure access consumed by multiple engineering teams",
      "Developed internal RAG-based AI assistant using Azure AI Search and vector embeddings to index proprietary documentation and enable fast, context-aware knowledge retrieval",
      "Containerized development environments using Docker and GitHub Codespaces, standardizing local setup and reducing developer onboarding time by 65%",
    ],
    tags: ["FastAPI", "Azure", "AKS", "Docker", "RAG", "AI"],
  },
  {
    year: "2023",
    title: "Cloud Software Engineering Intern",
    company: "Deloitte",
    bullets: [
      "Migrated legacy CloudFormation templates to modular HashiCorp Terraform configurations, cutting cloud infrastructure deployment time by 84% through reusable components",
      "Built event-driven Python services with AWS Lambda and SQS to orchestrate policy detachment across 9,000+ accounts, implementing retries with exponential backoff and DynamoDB-based distributed locking",
      "Implemented GCP IPAM automation enabling real-time IP utilization monitoring and subnet exhaustion alerts, reducing manual oversight and improving network visibility",
    ],
    tags: ["Terraform", "AWS Lambda", "SQS", "DynamoDB", "GCP", "Python"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-accent">01.</span>
          Experience
          <span className="h-px flex-1 bg-border" />
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-transparent p-6 transition-all hover:border-border hover:bg-card/50"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <div className="shrink-0">
                  <span className="font-mono text-sm text-accent">
                    {exp.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}{" "}
                    <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  <ul className="mt-3 list-inside space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-muted-foreground"
                      >
                        <span className="shrink-0 text-accent">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
