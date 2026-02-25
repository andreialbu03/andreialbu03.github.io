import { Mountain } from "lucide-react";

const hobbies = [
  {
    activity: "Rock Climbing",
    description:
      "I'm passionate about rock climbing because it combines physical activity with problem-solving. Each route is like a unique puzzle that requires strategy, determination, and creative thinking—skills that translate directly to programming and tackling complex technical challenges.",
  },
  {
    activity: "Staying Active",
    description:
      "From gym workouts to outdoor activities, I believe in maintaining a healthy lifestyle. Being active helps me stay mentally sharp and energized for the challenges that come with software development.",
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-foreground">
          <span className="font-mono text-sm font-normal text-accent">04.</span>
          Interests & Hobbies
          <span className="h-px flex-1 bg-border" />
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby) => (
            <div
              key={hobby.activity}
              className="group relative rounded-xl border border-transparent p-6 transition-all hover:border-border hover:bg-card/50"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 pt-1">
                  <Mountain className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {hobby.activity}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
