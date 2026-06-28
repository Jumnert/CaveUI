import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  Check,
  ChevronRight,
  Lock,
  LogOut,
  Mail,
  Moon,
  Plus,
  Send,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./github-icon";

/* ------------------------------------------------------------------ Auth (indigo) */
export function PhoneLogin() {
  return (
    <div className="flex h-full w-full flex-col bg-background px-5 pt-10 text-left text-foreground">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-indigo-600 text-white">
        <Lock className="size-5" />
      </div>
      <p className="mt-5 text-xl font-bold tracking-tight">Sign in</p>
      <p className="mt-1 text-[11px] text-muted-foreground">Welcome back — let&apos;s get you in.</p>

      <div className="mt-6 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 rounded-xl border bg-card px-3 py-2.5 text-[11px] text-muted-foreground">
          <Mail className="size-3.5" /> you@example.com
        </div>
        <div className="flex items-center gap-2 rounded-xl border bg-card px-3 py-2.5 text-[11px] text-muted-foreground">
          <Lock className="size-3.5" /> ••••••••
        </div>
        <p className="text-right text-[10px] font-medium text-indigo-500">Forgot password?</p>
        <div className="mt-1 rounded-xl bg-indigo-600 py-2.5 text-center text-xs font-semibold text-white shadow-sm shadow-indigo-600/30">
          Sign in
        </div>
      </div>

      <div className="my-4 flex items-center gap-2 text-[10px] text-muted-foreground">
        <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
      </div>
      <div className="flex items-center justify-center gap-2 rounded-xl border bg-card py-2.5 text-[11px] font-medium">
        <GithubIcon className="size-3.5" /> Continue with GitHub
      </div>

      <p className="mt-auto pb-6 text-center text-[10px] text-muted-foreground">
        New here? <span className="font-semibold text-indigo-500">Create account</span>
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ Chat (blue) */
export function PhoneChat() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <div className="flex items-center gap-2 border-b px-4 pt-7 pb-3">
        <div className="flex size-8 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">
          JK
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-semibold leading-none">Jordan K.</p>
          <p className="mt-1 flex items-center gap-1 text-[9px] text-emerald-500">
            <span className="size-1.5 rounded-full bg-emerald-500" /> online
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-3 py-3">
        <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-muted px-3 py-1.5 text-[11px]">
          Did you see the new caveui drop?
        </div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-blue-600 px-3 py-1.5 text-[11px] text-white">
          Yeah — grabbed the chat block already
        </div>
        <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-muted px-3 py-1.5 text-[11px]">
          Wait, it&apos;s all Material 3?
        </div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-blue-600 px-3 py-1.5 text-[11px] text-white">
          Yep, just the source
        </div>
        <div className="flex max-w-[80%] gap-1 self-start rounded-2xl rounded-bl-sm bg-muted px-3 py-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="size-1.5 rounded-full bg-muted-foreground/60"
              style={{ animation: `icon-pop 1.2s ease-in-out ${i * 0.15}s infinite` }}
            />
          ))}
        </div>
      </div>

      <div className="m-3 flex items-center gap-2 rounded-full border bg-card py-1.5 pr-1.5 pl-3">
        <span className="flex-1 text-[10px] text-muted-foreground">Message…</span>
        <div className="flex size-6 items-center justify-center rounded-full bg-blue-600 text-white">
          <Send className="size-3" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Onboarding (violet→fuchsia) */
export function PhoneOnboarding() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-background px-5 pt-12 text-center text-foreground">
      <div className="mt-4 flex size-28 flex-col items-center justify-center gap-2 rounded-[2rem] border bg-card">
        <span className="rounded-full bg-violet-600 px-3 py-1 text-[9px] font-semibold text-white">Button</span>
        <span className="flex h-3.5 w-7 items-center justify-end rounded-full bg-violet-600 px-0.5">
          <span className="size-2.5 rounded-full bg-white" />
        </span>
        <span className="rounded-md bg-violet-500/15 px-2 py-0.5 text-[9px] font-medium text-violet-600">Badge</span>
      </div>
      <p className="mt-8 text-xl font-bold tracking-tight">Build faster</p>
      <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
        Copy beautiful, animated Compose components straight into your Android app.
      </p>
      <div className="mt-6 flex gap-1.5">
        <span className="h-1.5 w-6 rounded-full bg-violet-600" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
      </div>
      <div className="mt-auto w-full pb-6">
        <div className="rounded-full bg-violet-600 py-2.5 text-center text-xs font-semibold text-white">
          Get started
        </div>
        <p className="mt-3 text-[10px] font-medium text-muted-foreground">Skip for now</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Dashboard (finance / emerald) */
export function PhoneDashboard() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <div className="flex items-center justify-between px-4 pt-7 pb-3">
        <div>
          <p className="text-[10px] text-muted-foreground">Total balance</p>
          <p className="text-sm font-bold">Wallet</p>
        </div>
        <div className="size-8 rounded-full bg-emerald-500/20" />
      </div>

      <div className="mx-4 rounded-2xl bg-emerald-600 p-4 text-white">
        <p className="text-[10px] opacity-80">Available</p>
        <p className="mt-1 text-2xl font-bold tracking-tight">$8,420.50</p>
        <p className="mt-1 text-[10px] opacity-90">+2.4% this month</p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 px-4 text-center text-[10px] font-medium">
        {[
          { l: "Send", i: <ArrowUpRight className="size-3.5" /> },
          { l: "Request", i: <ArrowDownLeft className="size-3.5" /> },
          { l: "Top up", i: <Plus className="size-3.5" /> },
        ].map((a) => (
          <div key={a.l} className="rounded-xl border bg-card py-2">
            <span className="mx-auto mb-1 flex size-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
              {a.i}
            </span>
            {a.l}
          </div>
        ))}
      </div>

      <div className="mx-4 mt-3 mb-3 flex-1 rounded-xl border bg-card p-3">
        <p className="text-[10px] font-medium text-muted-foreground">Recent</p>
        <div className="mt-2 flex flex-col gap-2.5">
          {[
            { n: "Spotify", t: "Today", a: "-$9.99", up: false },
            { n: "Salary", t: "Mar 1", a: "+$3,200", up: true },
          ].map((r) => (
            <div key={r.n} className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-muted" />
              <div className="flex-1">
                <p className="text-[11px] font-medium leading-none">{r.n}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{r.t}</p>
              </div>
              <span className={`text-[11px] font-semibold ${r.up ? "text-emerald-500" : "text-foreground"}`}>
                {r.a}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Settings (neutral + sky, red sign-out) */
export function PhoneSettings() {
  const rows = [
    { label: "Notifications", icon: <Bell className="size-3.5" />, toggle: true, on: true },
    { label: "Dark mode", icon: <Moon className="size-3.5" />, toggle: true, on: true },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <div className="px-4 pt-7 pb-3">
        <p className="text-base font-bold">Settings</p>
      </div>
      <div className="mx-4 flex items-center gap-3 rounded-2xl border bg-card p-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-xs font-semibold text-white">
          AS
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-semibold leading-none">Ada Stevens</p>
          <p className="mt-1 text-[10px] text-muted-foreground">ada@caveui.dev</p>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </div>

      <div className="mx-4 mt-3 divide-y overflow-hidden rounded-2xl border bg-card">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-2.5 px-3 py-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-sky-500/15 text-sky-600">
              {r.icon}
            </span>
            <span className="flex-1 text-[11px]">{r.label}</span>
            <span className={`flex h-4 w-7 items-center rounded-full px-0.5 ${r.on ? "justify-end bg-sky-500" : "justify-start bg-muted-foreground/30"}`}>
              <span className="size-3 rounded-full bg-white shadow-sm" />
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2.5 px-3 py-2.5 text-rose-500">
          <span className="flex size-7 items-center justify-center rounded-lg bg-rose-500/10">
            <LogOut className="size-3.5" />
          </span>
          <span className="flex-1 text-[11px] font-medium">Sign out</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Paywall (premium amber→orange) */
export function PhonePaywall() {
  return (
    <div className="flex h-full w-full flex-col bg-background px-5 pt-10 text-left text-foreground">
      <div className="flex flex-col items-center text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-white">
          <Sparkles className="size-7" />
        </div>
        <p className="mt-3 text-xl font-bold tracking-tight">Go Pro</p>
        <p className="mt-1 text-[11px] text-muted-foreground">Everything, unlocked.</p>
        <p className="mt-3 text-3xl font-extrabold tracking-tight">
          $19<span className="text-[11px] font-medium text-muted-foreground">/mo</span>
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        {["Unlimited components", "Priority support", "Figma kit", "Lifetime updates"].map((f) => (
          <div key={f} className="flex items-center gap-2 text-[11px]">
            <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
              <Check className="size-2.5" />
            </span>
            {f}
          </div>
        ))}
      </div>
      <div className="mt-auto pb-6 pt-5">
        <div className="rounded-xl bg-amber-500 py-2.5 text-center text-xs font-semibold text-white">
          Start free trial
        </div>
        <p className="mt-3 text-center text-[10px] text-muted-foreground">Restore purchases</p>
      </div>
    </div>
  );
}
