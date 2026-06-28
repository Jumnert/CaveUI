"use client";

// Android / Jetpack Compose ecosystem brands. SVGs live in /public/brand
// so they can be reused elsewhere via `/brand/<name>.svg`.
type Integration = {
  name: string;
  src: string;
  /** invert near-monochrome logos so they stay visible in dark mode */
  invertOnDark?: boolean;
};

const integrations: Integration[] = [
  { name: "Kotlin", src: "/brand/kotlin.svg" },
  { name: "Jetpack Compose", src: "/brand/jetpackcompose.svg" },
  { name: "Android", src: "/brand/android.svg" },
  { name: "Android Studio", src: "/brand/androidstudio.svg" },
  { name: "Firebase", src: "/brand/firebase.svg" },
  { name: "Gradle", src: "/brand/gradle.svg" },
  { name: "IntelliJ IDEA", src: "/brand/intellij.svg" },
  { name: "Java", src: "/brand/java.svg" },
  { name: "Google Cloud", src: "/brand/googlecloud.svg" },
  { name: "Git", src: "/brand/git.svg" },
  { name: "GitHub", src: "/brand/github.svg", invertOnDark: true },
  { name: "Figma", src: "/brand/figma.svg" },
  { name: "Docker", src: "/brand/docker.svg" },
];

// Symmetric diamond layout (sums to integrations.length = 13).
const columnLayout = [[0], [1, 2, 3], [4, 5, 6, 7, 8], [9, 10, 11], [12]];

function IntegrationCard({ app }: { app: Integration }) {
  return (
    <div className="group bg-muted/50 relative flex h-16 w-16 items-center justify-center rounded-lg shadow-[inset_0_0_2px_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)] sm:h-20 sm:w-20 lg:h-24 lg:w-24 dark:shadow-[inset_0_0_2px_2px_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.08),0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.5),0px_2px_4px_0px_rgba(0,0,0,0.4)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={app.src}
        alt={app.name}
        title={app.name}
        className={`h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8 lg:h-10 lg:w-10 ${
          app.invertOnDark ? "dark:invert" : ""
        }`}
      />
    </div>
  );
}

export default function Integrations1() {
  return (
    <section className="relative h-full w-full overflow-hidden py-10">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto mb-16 flex max-w-2xl flex-col items-center text-center duration-700 md:mb-12">
          <h2 className="text-foreground mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            By developers, for developers
          </h2>
        </div>

        <div className="relative mx-auto mb-16 max-w-4xl md:mb-24">
          <div className="animate-in fade-in slide-in-from-bottom-8 flex flex-wrap justify-center gap-4 delay-200 duration-700 md:hidden">
            {integrations.map((app) => (
              <IntegrationCard key={app.name} app={app} />
            ))}
          </div>

          <div className="hidden items-center justify-center gap-2 delay-200 duration-700 md:flex lg:gap-4">
            {columnLayout.map((colIndices, i) => (
              <div key={i} className="flex flex-col gap-2 lg:gap-4">
                {colIndices.map((index) => {
                  const app = integrations[index];
                  return <IntegrationCard key={app.name} app={app} />;
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto flex max-w-lg flex-col items-center text-center delay-300 duration-700">
          <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base">
            Built on the tools Android developers already love — Kotlin, Jetpack
            Compose, Material 3 and the rest of the modern Android stack.
          </p>
        </div>
      </div>
    </section>
  );
}
