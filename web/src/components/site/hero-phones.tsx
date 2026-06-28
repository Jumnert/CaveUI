import {
  CloudRain,
  CloudSun,
  Heart,
  Play,
  Repeat,
  Send,
  Shuffle,
  SkipBack,
  SkipForward,
  Sun,
} from "lucide-react";

/** Now-playing music screen — album art, track, scrubber and transport controls. */
export function PhoneNowPlaying() {
  return (
    <div className="flex h-full w-full flex-col bg-background px-4 pt-7 pb-5 text-left text-foreground">
      <div className="flex items-center justify-between text-[10px] tracking-wide text-muted-foreground uppercase">
        <span>Now playing</span>
        <Heart className="size-3.5" />
      </div>

      <div
        className="mt-3 aspect-square w-full rounded-2xl bg-cover bg-center shadow-lg"
        style={{
          backgroundImage:
            "url('/lanadel.png'), linear-gradient(to bottom right, #6366f1, #a855f7, #d946ef)",
        }}
        role="img"
        aria-label="Shades of Cool — Lana Del Rey"
      />

      <div className="mt-4">
        <p className="text-sm leading-tight font-bold">Shades of Cool</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">Lana Del Rey</p>
      </div>

      <div className="mt-3">
        <div className="h-1 w-full rounded-full bg-muted">
          <div className="h-1 w-2/5 rounded-full bg-foreground" />
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-muted-foreground">
          <span>1:42</span>
          <span>4:03</span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <Shuffle className="size-4 text-muted-foreground" />
        <SkipBack className="size-5" />
        <div className="flex size-11 items-center justify-center rounded-full bg-foreground text-background">
          <Play className="size-5 fill-current" />
        </div>
        <SkipForward className="size-5" />
        <Repeat className="size-4 text-muted-foreground" />
      </div>
    </div>
  );
}

/** Weather screen — current conditions and an hourly strip. */
export function PhoneWeather() {
  const hours = [
    { t: "12p", Icon: Sun, d: "33°" },
    { t: "1p", Icon: Sun, d: "33°" },
    { t: "2p", Icon: CloudSun, d: "32°" },
    { t: "3p", Icon: CloudRain, d: "31°" },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-background px-4 pt-8 pb-5 text-left text-foreground">
      <p className="text-sm font-semibold">Phnom Penh</p>
      <p className="mt-0.5 text-[10px] text-muted-foreground">Tuesday, 14:20</p>

      <div className="mt-6 flex items-center gap-3">
        <Sun className="size-12 text-amber-400" />
        <div>
          <p className="text-4xl leading-none font-bold">32°</p>
          <p className="mt-1 text-[11px] text-muted-foreground">Humid</p>
        </div>
      </div>

      <div className="mt-2 flex gap-3 text-[10px] text-muted-foreground">
        <span>H: 34°</span>
        <span>L: 26°</span>
      </div>

      <div className="mt-auto grid grid-cols-4 gap-1 rounded-xl border bg-card p-2">
        {hours.map(({ t, Icon, d }) => (
          <div key={t} className="flex flex-col items-center gap-1">
            <span className="text-[9px] text-muted-foreground">{t}</span>
            <Icon className="size-4 text-amber-400" />
            <span className="text-[10px] font-medium">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Chat screen — conversation bubbles and a composer. */
export function PhoneMessages() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <div className="flex items-center gap-2 border-b px-4 pt-7 pb-3">
        <div className="flex size-7 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
          JK
        </div>
        <div>
          <p className="text-[11px] leading-none font-semibold">Jordan K.</p>
          <p className="mt-1 text-[9px] text-emerald-500">online</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-3 py-3">
        <div className="max-w-[82%] self-start rounded-2xl rounded-bl-sm bg-muted px-3 py-1.5 text-[11px]">
          Did you see the new caveui drop?
        </div>
        <div className="max-w-[82%] self-end rounded-2xl rounded-br-sm bg-primary px-3 py-1.5 text-[11px] text-primary-foreground">
          Yeah, copied a button already
        </div>
        <div className="max-w-[82%] self-start rounded-2xl rounded-bl-sm bg-muted px-3 py-1.5 text-[11px]">
          Wait, it&apos;s all Material 3?
        </div>
        <div className="max-w-[82%] self-end rounded-2xl rounded-br-sm bg-primary px-3 py-1.5 text-[11px] text-primary-foreground">
          Yep — just the source
        </div>
      </div>

      <div className="m-3 flex items-center gap-2 rounded-full border bg-card py-1.5 pr-1.5 pl-3">
        <span className="flex-1 text-[10px] text-muted-foreground">
          Message…
        </span>
        <div className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Send className="size-3" />
        </div>
      </div>
    </div>
  );
}
