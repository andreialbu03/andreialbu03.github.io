const experiences = [
  {
    year: "2024",
    title: "Cloud Solutions Developer",
    company: "Deloitte",
    description:
      "Designed and implemented API endpoints for Kubernetes cluster provisioning in Azure using AKS, streamlining user deployment processes. Followed OpenAPI specifications for consistent API design, ensuring seamless integration with existing services. Assisted in training a GenAI bot on internal documentation, improving team members' access to accurate responses.",
    tags: ["Azure", "AKS", "Kubernetes", "OpenAPI", "GenAI"],
  },
  {
    year: "2023",
    title: "Cloud Platform Developer",
    company: "Deloitte",
    description:
      "Developed scripts to improve AWS account management, reducing maintenance time and simplifying policy detachment. Deployed scripts on AWS Lambda and managed queues with Amazon SQS, enhancing event processing efficiency by 50%. Implemented an IP Address Management feature for GCP accounts with Supernet IP Usage Monitoring and Threshold Alerting.",
    tags: ["AWS", "Lambda", "SQS", "GCP", "Python"],
  },
  {
    year: "2022",
    title: "Cloud API Developer",
    company: "Deloitte",
    description:
      "Reduced deployment time by 84% by switching from AWS CloudFormation to HashiCorp Terraform. Created API endpoints with OpenAPI specs, enhancing functionality and integration accuracy. Dockerized applications and integrated with GitHub Codespaces, accelerating onboarding by up to 80%.",
    tags: ["Terraform", "Docker", "GitHub Actions", "Azure DevOps", "AWS"],
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
          {experiences.map((exp) => (
            <div
              key={exp.year}
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
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
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
