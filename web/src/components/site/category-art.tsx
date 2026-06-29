import type { CategorySlug } from "@/lib/registry/types";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-28 items-center justify-center overflow-hidden border-b bg-muted/30">
      {children}
    </div>
  );
}

/** A small, animated abstract preview that hints at what a category contains. */
export function CategoryArt({ slug }: { slug: CategorySlug }) {
  switch (slug) {
    case "buttons":
      return (
        <Frame>
          <span
            className="absolute size-16 rounded-full bg-primary/20"
            style={{ animation: "icon-ring 1.8s ease-out infinite" }}
          />
          <div
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-sm"
            style={{ animation: "icon-pop 1.8s ease-in-out infinite" }}
          >
            Click
          </div>
        </Frame>
      );

    case "cards":
      return (
        <Frame>
          <div className="relative h-16 w-24">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-lg border bg-card shadow-sm"
                style={{
                  transform: `translate(${i * 7}px, ${i * -6}px) rotate(${(i - 1) * 4}deg)`,
                  animation: `float-y ${5 + i}s ease-in-out ${-i * 0.6}s infinite`,
                }}
              />
            ))}
          </div>
        </Frame>
      );

    case "inputs":
      return (
        <Frame>
          <div className="flex w-44 items-center rounded-md border bg-background px-3 py-2 shadow-sm">
            <span className="text-xs text-muted-foreground">Search components…</span>
            <span
              className="ml-0.5 h-3.5 w-px bg-primary"
              style={{ animation: "icon-blink 1s steps(1) infinite" }}
            />
          </div>
        </Frame>
      );

    case "badges":
      return (
        <Frame>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["New", "Pro", "Beta"].map((t, i) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary"
                style={{ animation: `icon-pop 2.2s ease-in-out ${i * 0.35}s infinite` }}
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {t}
              </span>
            ))}
          </div>
        </Frame>
      );

    case "toggles":
      return (
        <Frame>
          <div className="relative flex h-6 w-11 items-center rounded-full bg-muted-foreground/25 px-0.5">
            <span
              className="absolute inset-0 rounded-full bg-primary"
              style={{ animation: "icon-crossfade-in 2s ease-in-out infinite alternate" }}
            />
            <span
              className="relative size-5 rounded-full bg-white shadow"
              style={{ animation: "icon-knob 2s ease-in-out infinite alternate" }}
            />
          </div>
        </Frame>
      );

    case "loaders":
      return (
        <Frame>
          <div className="flex flex-col items-center gap-2.5">
            <svg
              viewBox="0 0 24 24"
              className="size-7 animate-spin text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M12 3 a9 9 0 1 0 9 9" />
            </svg>
            <div className="h-1.5 w-28 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ animation: "progress 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </Frame>
      );

    case "icons":
      return (
        <Frame>
          <div className="flex items-center gap-5 text-primary">
            <svg
              viewBox="0 0 24 24"
              className="size-7 fill-current"
              style={{ animation: "icon-pop 1.6s ease-in-out infinite" }}
            >
              <path d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 5 5.2 5c2 0 3.3 1.1 4 2.2C9.9 6.1 11.2 5 13.2 5 16.4 5 18 8.3 16.4 11.7 14.5 16.4 12 21 12 21z" />
            </svg>
            <svg
              viewBox="0 0 40 40"
              className="size-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M9 20 l7 7 l14 -16"
                style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: "icon-draw 1.6s ease-in-out infinite alternate" }}
              />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="size-7 fill-current"
              style={{ transformOrigin: "12px 3px", animation: "icon-swing 0.5s ease-in-out infinite" }}
            >
              <path d="M12 2a2 2 0 0 1 2 2v.3A7 7 0 0 1 19 11v4l1.5 2.5a1 1 0 0 1-.86 1.5H4.36a1 1 0 0 1-.86-1.5L5 15v-4a7 7 0 0 1 5-6.7V4a2 2 0 0 1 2-2zm0 20a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 12 22z" />
            </svg>
          </div>
        </Frame>
      );

    case "checks":
      return (
        <Frame>
          <span className="relative inline-flex size-10 items-center justify-center text-primary">
            <span className="absolute inset-1.5 rounded-md border-2 border-current" />
            <span
              className="absolute inset-1.5 rounded-md bg-current"
              style={{ animation: "icon-crossfade-in 2s ease-in-out infinite alternate" }}
            />
            <svg
              viewBox="0 0 24 24"
              className="relative size-5 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M5 12 l5 5 L19 7"
                style={{ strokeDasharray: 24, strokeDashoffset: 24, animation: "icon-draw 2s ease-in-out infinite alternate" }}
              />
            </svg>
          </span>
        </Frame>
      );

    case "choices":
      return (
        <Frame>
          <div className="relative flex w-40 rounded-full bg-muted p-1 text-[10px] font-medium">
            <span
              className="absolute inset-y-1 rounded-full bg-primary"
              style={{ width: "calc((100% - 0.5rem) / 3)", left: 4, animation: "icon-seg 3.2s ease-in-out infinite" }}
            />
            {["Day", "Week", "Mo"].map((t) => (
              <span key={t} className="relative z-10 flex-1 py-1 text-center text-foreground">
                {t}
              </span>
            ))}
          </div>
        </Frame>
      );

    case "hints":
      return (
        <Frame>
          <span
            className="rounded-md bg-foreground px-2.5 py-1 text-[11px] font-medium text-background shadow"
            style={{ transformOrigin: "bottom", animation: "icon-crossfade-in 2.2s ease-in-out infinite alternate" }}
          >
            ⌘K to search
          </span>
        </Frame>
      );

    case "avatars":
      return (
        <Frame>
          <div className="flex -space-x-3">
            <div className="grid size-10 place-items-center rounded-full border-2 border-background bg-indigo-500 text-[11px] font-semibold text-white">
              AL
            </div>
            <div className="grid size-10 place-items-center rounded-full border-2 border-background bg-emerald-500 text-[11px] font-semibold text-white">
              RP
            </div>
            <div className="relative grid size-10 place-items-center rounded-full border-2 border-background bg-rose-500 text-[11px] font-semibold text-white">
              MK
              <span className="absolute -bottom-0.5 -right-0.5 size-3 animate-ping rounded-full bg-emerald-500/70" />
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-background bg-emerald-500" />
            </div>
            <div className="grid size-10 place-items-center rounded-full border-2 border-background bg-muted text-[11px] font-semibold text-foreground">
              +5
            </div>
          </div>
        </Frame>
      );

    case "disclosures":
      return (
        <Frame>
          <div className="w-40 space-y-1.5">
            <div className="flex items-center justify-between rounded-lg border bg-card px-3 py-2">
              <span className="h-1.5 w-16 rounded-full bg-foreground/30" />
              <svg viewBox="0 0 24 24" className="size-3.5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div
              className="rounded-lg bg-muted/50 px-3 py-2"
              style={{ animation: "icon-crossfade-in 2.6s ease-in-out infinite alternate" }}
            >
              <span className="block h-1 w-full rounded bg-foreground/15" />
              <span className="mt-1 block h-1 w-2/3 rounded bg-foreground/15" />
            </div>
          </div>
        </Frame>
      );

    case "sliders":
      return (
        <Frame>
          <div className="w-40">
            <div className="relative h-1.5 rounded-full bg-muted">
              <div className="absolute inset-y-0 left-0 w-[58%] rounded-full bg-violet-500" />
              <div
                className="absolute left-[58%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-500 bg-background"
                style={{ animation: "icon-pop 1.8s ease-in-out infinite" }}
              />
            </div>
          </div>
        </Frame>
      );

    case "selects":
      return (
        <Frame>
          <div className="w-40">
            <div className="flex items-center justify-between rounded-lg border bg-background px-3 py-1.5">
              <span className="h-1.5 w-14 rounded-full bg-foreground/25" />
              <svg viewBox="0 0 24 24" className="size-3 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div className="mt-1 overflow-hidden rounded-lg border bg-popover py-1 shadow-sm">
              <div className="relative px-3 py-1.5">
                <span
                  className="absolute inset-x-1 inset-y-0.5 rounded bg-indigo-500/15"
                  style={{ animation: "icon-crossfade-in 2.4s ease-in-out infinite alternate" }}
                />
                <span className="relative block h-1.5 w-20 rounded-full bg-indigo-500/70" />
              </div>
              <div className="px-3 py-1.5">
                <span className="block h-1.5 w-12 rounded-full bg-foreground/20" />
              </div>
            </div>
          </div>
        </Frame>
      );

    case "overlays":
      return (
        <Frame>
          <div className="absolute inset-0 bg-foreground/5" />
          <div
            className="relative w-36 rounded-xl border bg-card p-3 shadow-md"
            style={{ animation: "icon-pop 2.6s ease-in-out infinite" }}
          >
            <span className="block h-1.5 w-16 rounded-full bg-foreground/40" />
            <span className="mt-2 block h-1 w-full rounded bg-foreground/15" />
            <span className="mt-1 block h-1 w-2/3 rounded bg-foreground/15" />
            <div className="mt-2.5 flex justify-end gap-1.5">
              <span className="h-4 w-9 rounded-md bg-muted" />
              <span className="h-4 w-9 rounded-md bg-rose-500" />
            </div>
          </div>
        </Frame>
      );

    case "navigation":
      return (
        <Frame>
          <div className="flex w-44 items-center justify-around rounded-2xl border bg-card py-2">
            <span className="flex flex-col items-center gap-1">
              <span className="size-4 rounded-md bg-teal-500/25 ring-1 ring-teal-500/50" />
              <span className="h-1 w-4 rounded-full bg-teal-500" />
            </span>
            <span className="size-4 rounded-md bg-muted-foreground/20" />
            <span className="size-4 rounded-md bg-muted-foreground/20" />
          </div>
        </Frame>
      );

    case "feedback":
      return (
        <Frame>
          <div
            className="flex w-40 items-center gap-2 rounded-xl bg-foreground px-3 py-2 shadow-md"
            style={{ animation: "icon-crossfade-in 2.6s ease-in-out infinite alternate" }}
          >
            <span className="grid size-4 place-items-center rounded-full bg-emerald-500 text-white">
              <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L19 7" />
              </svg>
            </span>
            <span className="text-[10px] font-medium text-background">Saved to library</span>
          </div>
        </Frame>
      );

    case "menus":
      return (
        <Frame>
          <div className="w-36 overflow-hidden rounded-xl border bg-popover py-1 shadow-sm">
            <div className="px-3 py-1.5">
              <span className="block h-1.5 w-16 rounded-full bg-foreground/25" />
            </div>
            <div className="relative px-3 py-1.5">
              <span
                className="absolute inset-x-1 inset-y-0.5 rounded bg-indigo-500/15"
                style={{ animation: "icon-crossfade-in 2.4s ease-in-out infinite alternate" }}
              />
              <span className="relative block h-1.5 w-20 rounded-full bg-indigo-500/70" />
            </div>
            <div className="px-3 py-1.5">
              <span className="block h-1.5 w-12 rounded-full bg-foreground/25" />
            </div>
          </div>
        </Frame>
      );

    case "pickers":
      return (
        <Frame>
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 15 }, (_, i) => (
              <span
                key={i}
                className={
                  i === 7
                    ? "size-3 rounded-full bg-rose-500"
                    : "size-3 rounded-full bg-muted-foreground/20"
                }
                style={i === 7 ? { animation: "icon-pop 2s ease-in-out infinite" } : undefined}
              />
            ))}
          </div>
        </Frame>
      );

    case "command":
      return (
        <Frame>
          <div className="w-44 overflow-hidden rounded-xl border bg-popover shadow-sm">
            <div className="flex items-center gap-1.5 border-b px-2.5 py-1.5">
              <svg viewBox="0 0 24 24" className="size-3 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-3.5-3.5" />
              </svg>
              <span className="h-1.5 w-12 rounded-full bg-foreground/20" />
              <span
                className="ml-auto h-3 w-px bg-violet-500"
                style={{ animation: "icon-blink 1s steps(1) infinite" }}
              />
            </div>
            <div className="relative px-2.5 py-1.5">
              <span className="absolute inset-x-1 inset-y-0.5 rounded bg-violet-500/15" />
              <span className="relative block h-1.5 w-24 rounded-full bg-violet-500/70" />
            </div>
            <div className="px-2.5 py-1.5">
              <span className="block h-1.5 w-16 rounded-full bg-foreground/20" />
            </div>
          </div>
        </Frame>
      );

    case "charts":
      return (
        <Frame>
          <div className="flex h-16 items-end gap-1.5">
            {[45, 72, 38, 88, 56, 68].map((h, i) => (
              <span
                key={i}
                className="w-2.5 rounded-t bg-cyan-500/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Frame>
      );

    default:
      return null;
  }
}
