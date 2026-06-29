import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code,
  Copy,
  CreditCard,
  Crown,
  DollarSign,
  Download,
  Equal,
  Eye,
  EyeOff,
  FileText,
  Folder,
  Globe,
  Heart,
  Home,
  Image as ImageIcon,
  Info,
  Layers,
  Link2,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Mic,
  Minus,
  Moon,
  MoreHorizontal,
  MoreVertical,
  Pencil,
  Percent,
  Phone,
  Plus,
  QrCode,
  RefreshCw,
  RotateCcw,
  Search,
  Send,
  Settings,
  Share2,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Star,
  Trash2,
  TrendingUp,
  UploadCloud,
  User,
  UserPlus,
  Users,
  Wifi,
  X,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ Finance Dashboard (teal) */
export function PhoneFinanceDashboard() {
  const transactions = [
    { name: "Octavia Devi",   initials: "OD", date: "12 Des, 10:32 AM", amount: "-$15.89",  positive: false },
    { name: "Aditya Anugrah", initials: "AA", date: "7 Des, 03:08 PM",  amount: "+$129.21", positive: true  },
    { name: "Melasari",       initials: "ML", date: "5 Des, 12:12 AM",  amount: "-$15.89",  positive: false },
    { name: "Judha Wijaya",   initials: "JW", date: "18 Des, 08:24 AM", amount: "+$89.73",  positive: true  },
  ];

  const actions = [
    { icon: <QrCode className="size-4" />,    label: "Scan",     primary: false },
    { icon: <RefreshCw className="size-4" />, label: "Transfer", primary: true  },
    { icon: <Plus className="size-4" />,      label: "Topup",    primary: false },
    { icon: <Users className="size-4" />,     label: "Partner",  primary: false },
    { icon: <Percent className="size-4" />,   label: "Promo",    primary: false },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-muted/40 text-left text-foreground">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-8 pb-4">
        <div className="grid size-10 place-items-center rounded-full bg-teal-600 text-[10px] font-bold text-white">
          LE
        </div>
        <div className="flex-1">
          <p className="text-[10px] text-muted-foreground">Good Morning,</p>
          <p className="text-[13px] font-bold leading-none">Lucia Esperanza</p>
        </div>
        <button
          type="button"
          className="grid size-9 place-items-center rounded-full border bg-background shadow-sm"
        >
          <Bell className="size-4 text-muted-foreground" />
        </button>
      </div>

      {/* Balance card — 2-stop teal gradient, no candy multi-stop */}
      <div className="mx-4 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 p-5 shadow-md shadow-teal-600/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/80">
            Available Balance
            <Eye className="size-3.5" />
          </div>
          <button
            type="button"
            className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold text-white"
          >
            <span className="text-[10px]">🇺🇸</span>
            US Dollar
            <ChevronDown className="size-3" />
          </button>
        </div>
        <p className="mt-3 text-[26px] font-extrabold leading-none tracking-tight text-white">
          $ 817,432.09
        </p>
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-teal-950/70 px-4 py-2 text-[11px] font-semibold text-white"
          >
            <ArrowUpRight className="size-3.5" />
            Withdraw
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-teal-900"
          >
            <FileText className="size-3.5" />
            History
          </button>
          <button
            type="button"
            className="grid size-8 place-items-center rounded-full bg-white text-teal-900"
          >
            <MoreHorizontal className="size-4" />
          </button>
        </div>
      </div>

      {/* Quick actions */}
      <div className="mx-4 mt-4 flex items-center justify-between rounded-2xl border bg-background px-3 py-3">
        {actions.map((a) => (
          <div key={a.label} className="flex flex-col items-center gap-1.5">
            <div
              className={`grid size-10 place-items-center rounded-full ${
                a.primary
                  ? "bg-teal-800 text-white"
                  : "border bg-card text-foreground"
              }`}
            >
              {a.icon}
            </div>
            <span className="text-[9px] font-medium text-muted-foreground">{a.label}</span>
          </div>
        ))}
      </div>

      {/* Transaction history */}
      <div className="mx-4 mt-3 flex-1 overflow-hidden rounded-3xl border bg-background px-4 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-extrabold">Transaction history</p>
          <span className="text-[10px] font-medium text-teal-600">View all</span>
        </div>

        <div className="mt-3 space-y-3.5 pb-4">
          {transactions.map((t) => (
            <div key={t.name + t.date} className="flex items-center gap-2.5">
              <div className="grid size-9 shrink-0 place-items-center rounded-full bg-teal-500/15 text-[9px] font-bold text-teal-700 dark:text-teal-400">
                {t.initials}
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold leading-none">{t.name}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{t.date}</p>
              </div>
              <span
                className={`text-[12px] font-bold tabular-nums ${
                  t.positive ? "text-teal-600" : "text-rose-500"
                }`}
              >
                {t.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ B-List Auth (purple mosaic) */

/** Colorful quarter-circle mosaic — the signature pattern from the B-List design. */
function MosaicPattern() {
  // 5 columns × 4 rows of quarter-circle tiles
  const colors = [
    "#F97316", "#A855F7", "#14B8A6", "#EC4899",
    "#14B8A6", "#EC4899", "#F97316", "#A855F7",
    "#A855F7", "#14B8A6", "#EC4899", "#F97316",
    "#EC4899", "#F97316", "#A855F7", "#14B8A6",
    "#F97316", "#A855F7", "#14B8A6", "#EC4899",
  ];
  const rotations = [0, 90, 180, 270];
  const cols = 5;
  const rows = 4;
  const size = 52; // tile px

  return (
    <div
      className="overflow-hidden"
      style={{ width: cols * size, height: rows * size, flexShrink: 0 }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const color = colors[i % colors.length];
        const rot = rotations[i % rotations.length];
        return (
          <div
            key={i}
            style={{
              display: "inline-block",
              width: size,
              height: size,
              overflow: "hidden",
              transform: `rotate(${rot}deg)`,
            }}
          >
            {/* quarter circle: a full circle clipped to the top-left quadrant */}
            <div
              style={{
                width: size * 2,
                height: size * 2,
                borderRadius: "50%",
                background: color,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export function PhoneBListWelcome() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-foreground">
      {/* Mosaic fills roughly half the screen */}
      <div className="w-full overflow-hidden">
        <MosaicPattern />
      </div>

      {/* Copy + CTAs */}
      <div className="flex flex-1 flex-col justify-center px-6 pb-8">
        <p className="mt-[22px] text-[22px] font-extrabold leading-tight tracking-tight text-foreground">
          Welcome to B-List
        </p>
        <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
          Record everything you need in one place in a few seconds and easily.
        </p>
        <div className="mt-7 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-full bg-violet-600 py-3 text-[13px] font-semibold text-white"
          >
            Register
          </button>
          <button
            type="button"
            className="flex-1 rounded-full border border-violet-500 bg-transparent py-3 text-[13px] font-semibold text-violet-600"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export function PhoneBListRegister() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-foreground">
      {/* Mosaic — partial, clipped top-right */}
      <div className="relative w-full overflow-hidden" style={{ height: 120 }}>
        <div className="absolute right-0 top-0">
          <MosaicPattern />
        </div>
        {/* Back chevron */}
        <button
          type="button"
          className="absolute left-4 top-4 flex size-7 items-center justify-center rounded-full text-zinc-700 dark:text-zinc-300"
        >
          <ChevronRight className="size-4 rotate-180" />
        </button>
      </div>

      {/* Form */}
      <div className="flex flex-1 flex-col px-5 pb-6">
        <p className="text-[20px] font-extrabold leading-tight tracking-tight text-foreground">
          Create a new account
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
          Please enter your information below to create an account.
        </p>

        <div className="mt-5 flex flex-col gap-2.5">
          <input
            readOnly
            placeholder="Full name"
            className="w-full rounded-xl bg-muted px-4 py-3 text-[12px] text-muted-foreground outline-none"
          />
          <input
            readOnly
            placeholder="Email"
            className="w-full rounded-xl bg-muted px-4 py-3 text-[12px] text-muted-foreground outline-none"
          />
          <div className="relative">
            <input
              readOnly
              placeholder="Password"
              className="w-full rounded-xl bg-muted px-4 py-3 text-[12px] text-muted-foreground outline-none"
            />
            <Eye className="absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-full bg-violet-600 py-3 text-[13px] font-semibold text-white"
        >
          Register now
        </button>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">or sign up with</p>

        <div className="mt-3 flex justify-center gap-4">
          {/* Facebook */}
          <div className="grid size-10 place-items-center rounded-full border">
            <svg viewBox="0 0 24 24" className="size-5 fill-[#1877F2]" aria-hidden>
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.257h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
          </div>
          {/* Google */}
          <div className="grid size-10 place-items-center rounded-full border">
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
              <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
              <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
              <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" />
              <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
            </svg>
          </div>
          {/* Apple */}
          <div className="grid size-10 place-items-center rounded-full border">
            <svg viewBox="0 0 24 24" className="size-5 fill-foreground" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Already have an account?{" "}
          <span className="font-semibold text-violet-600">Sign In</span>
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Social Discover (terracotta/warm) */
export function PhoneSocialDiscover() {
  const stories = [
    { name: "Brian S", live: true,  color: "bg-orange-400" },
    { name: "Jennie",  live: false, color: "bg-stone-400"  },
    { name: "James",   live: false, color: "bg-amber-700"  },
    { name: "Roes",    live: false, color: "bg-rose-400"   },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-[#FAF8F5] text-left text-[#1a1208] dark:bg-[#1a1208] dark:text-[#FAF8F5]">

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-7 pb-2">
        <div className="size-9 overflow-hidden rounded-full ring-2 ring-orange-400 ring-offset-1">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-300 to-amber-500 text-[9px] font-bold text-white">
            Me
          </div>
        </div>
        <button
          type="button"
          className="grid size-9 place-items-center rounded-full border border-stone-200 bg-white shadow-sm dark:border-stone-700 dark:bg-stone-800"
        >
          <Bell className="size-4 text-stone-500" />
        </button>
      </div>

      {/* Page title */}
      <p className="px-4 pb-3 text-[22px] font-extrabold tracking-tight">Discover</p>

      {/* Story strip */}
      <div className="flex items-start gap-3 overflow-x-hidden px-4 pb-4">
        {/* Add story */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="grid size-14 place-items-center rounded-full border-2 border-dashed border-stone-300 bg-orange-50 dark:border-stone-600 dark:bg-stone-800">
            <Plus className="size-5 text-orange-500" />
          </div>
          <span className="text-[9px] text-stone-500">Add story</span>
        </div>

        {stories.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-1.5">
            <div className="relative">
              <div className="size-14 overflow-hidden rounded-full ring-2 ring-orange-400 ring-offset-1 ring-offset-[#FAF8F5] dark:ring-offset-[#1a1208]">
                <div className={`flex h-full w-full items-center justify-center ${s.color} text-[10px] font-bold text-white`}>
                  {s.name[0]}
                </div>
              </div>
              {s.live && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-1.5 py-px text-[7px] font-bold uppercase tracking-wide text-white">
                  Live
                </span>
              )}
            </div>
            <span className="text-[9px] text-stone-600 dark:text-stone-400">{s.name}</span>
          </div>
        ))}
      </div>

      {/* Post card 1 — large, with overlay */}
      <div className="mx-3 flex-1 overflow-hidden rounded-2xl">
        {/* Photo area */}
        <div className="relative h-[230px] overflow-hidden rounded-2xl bg-gradient-to-br from-stone-800 via-amber-900 to-stone-700">
          {/* Decorative abstract flower shape */}
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <div className="size-40 rounded-full bg-gradient-to-br from-sky-100/40 to-white/20 blur-sm" />
            <div className="absolute size-24 rounded-full bg-white/10" />
          </div>
          {/* Warm grain overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />

          {/* Action column — right */}
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-0.5">
              <Heart className="size-5 fill-orange-500 text-orange-500" />
              <span className="text-[9px] font-semibold text-white">12.3k</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Share2 className="size-4 text-white" />
              <span className="text-[9px] font-semibold text-white">250</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <MessageCircle className="size-4 text-white" />
              <span className="text-[9px] font-semibold text-white">100</span>
            </div>
          </div>

          {/* Author + caption — bottom left */}
          <div className="absolute bottom-3 left-3 right-12">
            <div className="flex items-center gap-2">
              <div className="size-8 overflow-hidden rounded-full ring-2 ring-orange-400">
                <div className="flex h-full w-full items-center justify-center bg-orange-400 text-[8px] font-bold text-white">
                  NR
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold leading-none text-white">Nathan Rusl</p>
                <p className="text-[9px] text-white/70">@nathanrsl</p>
              </div>
            </div>
            <p className="mt-1.5 text-[10px] leading-snug text-white/90">
              Nature's beauty is the best remedy for a restless soul. #FindYourPeace
            </p>
          </div>
        </div>
      </div>

      {/* Post card 2 — peeking */}
      <div className="mx-3 mt-2.5 overflow-hidden rounded-2xl">
        <div className="h-[72px] bg-gradient-to-br from-stone-400 to-stone-600 rounded-2xl" />
      </div>

      {/* Bottom nav */}
      <div className="relative mt-2 flex items-center justify-around border-t border-stone-200 px-2 pb-3 pt-2 dark:border-stone-700">
        {/* FAB */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="grid size-11 place-items-center rounded-full bg-orange-500 shadow-md shadow-orange-400/40">
            <Plus className="size-5 text-white" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-0.5">
          <Home className="size-5 text-orange-500" />
          <span className="text-[8px] font-semibold text-orange-500">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Search className="size-5 text-stone-400" />
          <span className="text-[8px] text-stone-400">Search</span>
        </div>
        {/* FAB spacer */}
        <div className="w-12" />
        <div className="flex flex-col items-center gap-0.5">
          <MessageCircle className="size-5 text-stone-400" />
          <span className="text-[8px] text-stone-400">Message</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <User className="size-5 text-stone-400" />
          <span className="text-[8px] text-stone-400">Profile</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Memrizz Paywall (near-black + violet) */
export function PhoneMemrizzPaywall() {
  const features = [
    { icon: <Sparkles className="size-4" />,      label: "Everything in Memrizz Lite" },
    { icon: <ImageIcon className="size-4" />,     label: "Image Occlusion and Cloze decks" },
    { icon: <FileText className="size-4" />,      label: "Process documents of up to 50 Mb" },
    { icon: <Globe className="size-4" />,         label: "Generate cards in any language" },
  ];

  const plans = [
    { label: "Monthly",  price: "$14.99", unit: "/ month", original: null,      selected: true  },
    { label: "Semester", price: "$42.00", unit: "/ semester", original: "$44.97", selected: false },
    { label: "Annual",   price: "$119.00",unit: "/ year",     original: "$179.88",selected: false },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-stone-100 to-stone-50 px-5 pt-8 text-left text-foreground dark:from-stone-900 dark:to-stone-950">
      {/* Close button */}
      <div className="flex justify-end">
        <button type="button" className="grid size-8 place-items-center rounded-full border bg-background text-muted-foreground">
          <X className="size-3.5" />
        </button>
      </div>

      {/* Headline */}
      <p className="mt-3 text-[22px] leading-tight text-foreground/70">Upgrade to</p>
      <p className="text-[22px] font-extrabold leading-tight tracking-tight">Memrizz Premium</p>

      {/* Lite / Pro toggle */}
      <div className="mt-5 flex rounded-full border bg-background p-1">
        <span className="flex-1 rounded-full py-2 text-center text-[12px] text-muted-foreground">Lite</span>
        <span className="flex-1 rounded-full bg-foreground py-2 text-center text-[12px] font-semibold text-background">Pro</span>
      </div>

      {/* Feature list */}
      <div className="mt-5 flex flex-col gap-3">
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl border bg-background text-foreground/70">
              {f.icon}
            </span>
            <span className="text-[12px] font-medium">{f.label}</span>
          </div>
        ))}
      </div>

      {/* Plan selection */}
      <div className="mt-5 flex flex-col gap-2.5">
        {plans.map((p) => (
          <div
            key={p.label}
            className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
              p.selected
                ? "border-violet-500 bg-violet-50 dark:bg-violet-950/30"
                : "border-border bg-background"
            }`}
          >
            <span className={`text-[13px] font-semibold ${p.selected ? "text-violet-600" : "text-foreground"}`}>
              {p.label}
            </span>
            <div className="flex items-baseline gap-1.5">
              {p.original && (
                <span className="text-[11px] text-muted-foreground line-through">{p.original}</span>
              )}
              <span className="text-[13px] font-bold">{p.price}</span>
              <span className="text-[10px] text-muted-foreground">{p.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-4 text-center text-[10px] text-muted-foreground">Cancel anytime on the App Store</p>
      <button
        type="button"
        className="mt-3 w-full rounded-full bg-foreground py-3.5 text-[14px] font-semibold text-background"
      >
        Subscribe
      </button>
      {/* Home indicator */}
      <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-foreground/20" />
    </div>
  );
}

/* ------------------------------------------------------------------ CircleUp Onboarding (indigo/violet) */
export function PhoneCircleUpOnboarding() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#8B8FD4] text-center text-white dark:bg-[#3D3F7A]">
      {/* Brand name */}
      <p className="mt-8 text-[16px] font-bold tracking-tight">CircleUp</p>

      {/* Illustration card */}
      <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl bg-[#6B6FC4]" style={{ height: 220 }}>
        {/* Stars scattered */}
        {["top-3 left-6", "top-5 right-8", "top-10 left-1/2", "bottom-16 left-4"].map((pos, i) => (
          <span key={i} className={`absolute ${pos} text-white/60`} style={{ fontSize: i % 2 === 0 ? 8 : 6 }}>✦</span>
        ))}
        {/* Moon */}
        <Moon className="absolute right-6 top-4 size-8 text-white/80" />
        {/* Person silhouette area */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="relative">
            <div className="h-36 w-24 rounded-t-full bg-stone-300/30" />
            {/* VR headset hint */}
            <div className="absolute inset-x-2 top-6 h-8 rounded-lg bg-stone-800/70" />
          </div>
        </div>
        {/* Floating pills */}
        <div className="absolute left-2 top-10 rounded-xl bg-white px-3 py-1.5 text-[11px] font-bold text-stone-800 shadow">
          Intuitive
        </div>
        <div className="absolute bottom-10 right-2 rounded-xl bg-white px-3 py-1.5 text-[11px] font-bold text-stone-800 shadow">
          Full integration
        </div>
        {/* Emoji badge */}
        <div className="absolute right-4 top-16 grid size-9 place-items-center rounded-full bg-white shadow text-lg">
          😊
        </div>
        {/* AR badge */}
        <div className="absolute bottom-14 left-3 grid size-9 place-items-center rounded-full border-2 border-orange-500 bg-white shadow">
          <Layers className="size-4 text-orange-500" />
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-5 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-6 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>

      {/* Copy */}
      <p className="mt-4 text-[26px] font-extrabold leading-tight tracking-tight">Easy to use</p>
      <p className="mx-6 mt-2 text-[12px] leading-relaxed text-white/80">
        Just select the AR button when interacting with posts, choose your desired effect or object, and watch as it magically appears on your screen
      </p>

      {/* CTAs */}
      <div className="mt-6 w-full px-5">
        <button
          type="button"
          className="w-full rounded-xl bg-[#2D3282] py-3.5 text-[14px] font-bold text-white shadow-md shadow-indigo-900/40"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="mt-3 w-full py-2 text-[13px] font-medium text-white/90"
        >
          Log in
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ App Settings (neutral, red destructive) */
export function PhoneAppSettings() {
  const mainRows = [
    { icon: <User className="size-4" />,    label: "Profile details" },
    { icon: <Lock className="size-4" />,    label: "Password"        },
    { icon: <Bell className="size-4" />,    label: "Notifications"   },
    { icon: <Moon className="size-4" />,    label: "Dark mode", toggle: true },
  ];
  const infoRows = [
    { icon: <Info className="size-4" />,        label: "About application", destructive: false },
    { icon: <MessageCircle className="size-4" />,label: "Help/FAQ",          destructive: false },
    { icon: <Trash2 className="size-4" />,       label: "Deactivate my account", destructive: true  },
  ];

  return (
    <div className="flex h-full w-full flex-col bg-muted/40 text-left text-foreground">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-4 pt-7 pb-4">
        <button
          type="button"
          className="grid size-8 place-items-center rounded-full border bg-background"
        >
          <ChevronRight className="size-4 rotate-180 text-foreground" />
        </button>
        <p className="flex-1 text-center text-[16px] font-bold">Settings</p>
        <div className="size-8" /> {/* spacer */}
      </div>

      {/* Profile row */}
      <div className="mx-4 flex items-center gap-3 rounded-2xl border bg-background px-4 py-3">
        <div className="grid size-10 place-items-center overflow-hidden rounded-full bg-amber-100">
          <span className="text-lg">🧑‍💻</span>
        </div>
        <div className="flex-1">
          <p className="text-[13px] font-bold leading-none">Alfred Daniel</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">Product/UI Designer</p>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </div>

      {/* Section label */}
      <p className="mt-5 px-4 text-[12px] font-medium text-muted-foreground">Other settings</p>

      {/* Main settings group */}
      <div className="mx-4 mt-2 overflow-hidden rounded-2xl border bg-background divide-y divide-border">
        {mainRows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 px-4 py-3">
            <span className="text-foreground/70">{r.icon}</span>
            <span className="flex-1 text-[13px]">{r.label}</span>
            {r.toggle ? (
              /* Toggle ON state */
              <div className="flex h-6 w-11 items-center justify-end rounded-full bg-foreground px-0.5">
                <span className="size-5 rounded-full bg-background shadow-sm" />
              </div>
            ) : (
              <ChevronRight className="size-4 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>

      {/* Info / destructive group */}
      <div className="mx-4 mt-3 overflow-hidden rounded-2xl border bg-background divide-y divide-border">
        {infoRows.map((r) => (
          <div key={r.label} className="flex items-center gap-3 px-4 py-3">
            <span className={r.destructive ? "text-red-500" : "text-foreground/70"}>{r.icon}</span>
            <span className={`flex-1 text-[13px] ${r.destructive ? "font-medium text-red-500" : ""}`}>
              {r.label}
            </span>
            <ChevronRight className={`size-4 ${r.destructive ? "text-red-400" : "text-muted-foreground"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== Batch: faithful UI copies */

/** iOS-style status bar (time left, signal/wifi/battery right). */
function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? "text-white" : "text-foreground";
  return (
    <div className={`flex items-center justify-between px-5 pt-2 text-[11px] font-semibold ${c}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="flex items-end gap-px">
          {[2, 3, 4, 5].map((h) => (
            <span key={h} className="w-0.5 rounded-sm bg-current" style={{ height: h }} />
          ))}
        </span>
        <Wifi className="size-3" />
        <span className="ml-0.5 h-2.5 w-5 rounded-[3px] border border-current px-px">
          <span className="block h-full w-3/4 rounded-[1px] bg-current" />
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ AI Chat Pro paywall (violet) */
export function PhoneAiChatPaywall() {
  const features = [
    "Higher message limits for Pro conversations",
    "Priority access to latest AI models anytime",
    "Use AI in integrated productivity tools",
    "Adjust AI response speed up to 4.5×",
  ];
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-violet-50 to-background text-left text-foreground dark:from-violet-950/30">
      <StatusBar />
      {/* Back */}
      <div className="px-4 pt-2">
        <button type="button" className="grid size-9 place-items-center rounded-full bg-background shadow-sm">
          <ChevronLeft className="size-4" />
        </button>
      </div>

      {/* Orb */}
      <div className="mt-2 flex justify-center">
        <div className="size-24 rounded-full bg-gradient-to-br from-violet-300 via-violet-400 to-indigo-500 shadow-lg shadow-violet-400/40" />
      </div>

      <p className="mt-5 px-6 text-center text-[20px] font-extrabold tracking-tight">
        Try our AI Chat Pro for free
      </p>
      <div className="mt-2 flex items-center justify-center gap-2">
        <div className="flex -space-x-2">
          {["bg-rose-400", "bg-sky-400", "bg-amber-400"].map((c) => (
            <span key={c} className={`size-5 rounded-full ${c} ring-2 ring-background`} />
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground">
          Join 18,742 others who went Pro this week
        </p>
      </div>

      {/* Features */}
      <div className="mt-6 flex flex-col gap-3 px-8">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-3">
            <Check className="size-4 shrink-0 text-violet-600" />
            <span className="text-[12px]">{f}</span>
          </div>
        ))}
      </div>

      {/* Plans */}
      <div className="mt-6 flex gap-3 px-4">
        <div className="flex-1 rounded-2xl border-2 border-violet-500 bg-background p-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">Monthly</span>
            <span className="rounded-md bg-violet-600 px-1.5 py-0.5 text-[9px] font-bold text-white">-5%</span>
          </div>
          <p className="mt-1 text-[18px] font-extrabold">$9.05</p>
        </div>
        <div className="flex-1 rounded-2xl border bg-background p-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">Annual</span>
            <span className="rounded-md bg-violet-600 px-1.5 py-0.5 text-[9px] font-bold text-white">-15%</span>
          </div>
          <p className="mt-1 text-[18px] font-extrabold">$97.88</p>
        </div>
      </div>

      <p className="mt-3 px-8 text-center text-[10px] leading-relaxed text-muted-foreground">
        Monthly charges apply until cancelled in settings. View our{" "}
        <span className="font-semibold text-foreground">Privacy Policy</span> and{" "}
        <span className="font-semibold text-foreground">Terms</span>.
      </p>

      {/* Update row */}
      <div className="mt-auto flex items-center justify-between border-t px-5 py-3">
        <span className="text-[12px]">You&apos;ll receive an update on July 20</span>
        <div className="flex h-6 w-11 items-center justify-end rounded-full bg-violet-600 px-0.5">
          <span className="size-5 rounded-full bg-white shadow-sm" />
        </div>
      </div>
      <div className="px-4 pb-4">
        <button type="button" className="w-full rounded-full bg-foreground py-3.5 text-[14px] font-semibold text-background">
          Start 7 day free trial
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Meditation trial (purple, moon) */
export function PhoneMeditationTrial() {
  const steps = [
    { icon: <Check className="size-4" />, title: "Today", body: "Unlock our library of meditations, sleep sounds, and more" },
    { icon: <Bell className="size-4" />, title: "In 3 days", body: "We'll send you a reminder that your trial is ending soon" },
    { icon: <Star className="size-4" />, title: "In 5 days", body: "You'll be charged on December 15, cancel anytime before" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      {/* Hero night sky */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-b from-purple-900 via-purple-700 to-purple-500">
        <button type="button" className="absolute left-4 top-4 z-10 text-white/90">
          <X className="size-5" />
        </button>
        {/* moon */}
        <div className="absolute left-1/2 top-8 size-16 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-100 to-purple-300 shadow-lg shadow-purple-200/30" />
        {/* stars */}
        {["top-6 left-10", "top-12 right-12", "top-4 right-20", "top-20 left-20"].map((p, i) => (
          <span key={i} className="absolute text-white/70" style={{ fontSize: 7 }}>{p && "✦"}</span>
        ))}
        {/* mountain silhouette */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-purple-950/40" style={{ clipPath: "polygon(0 100%, 15% 40%, 35% 80%, 55% 30%, 75% 70%, 100% 35%, 100% 100%)" }} />
        {/* white curve bottom */}
        <div className="absolute inset-x-0 -bottom-1 h-6 rounded-t-[50%] bg-background" />
      </div>

      <p className="mt-3 px-6 text-[24px] font-extrabold tracking-tight">How your trial works</p>
      <p className="mt-1 px-6 text-[13px] text-muted-foreground">First 5 days free, then $9.99/month</p>

      {/* Annual / Monthly toggle */}
      <div className="mx-6 mt-4 flex rounded-full bg-muted p-1">
        <span className="flex-1 rounded-full py-2 text-center text-[12px] font-medium text-muted-foreground">Annual</span>
        <span className="flex-1 rounded-full bg-purple-600 py-2 text-center text-[12px] font-semibold text-white">Monthly</span>
      </div>

      {/* Timeline */}
      <div className="relative mt-5 px-6">
        <span className="absolute left-[2.85rem] top-4 bottom-8 w-0.5 bg-purple-200 dark:bg-purple-900" />
        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <div key={s.title} className="flex gap-3">
              <span className="z-10 grid size-9 shrink-0 place-items-center rounded-full bg-purple-600 text-white">
                {s.icon}
              </span>
              <div className="pt-0.5">
                <p className="text-[14px] font-bold">{s.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto px-5 pb-3 pt-4">
        <button type="button" className="flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 py-3.5 text-[14px] font-bold text-white">
          Start free trial
          <ArrowRight className="size-4" />
        </button>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">You can cancel any time</p>
        <div className="mt-2 flex items-center justify-between text-[9px] text-muted-foreground">
          <span>Terms of Use</span>
          <span>Restore</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ EzFunds wallet (sky blue) */
export function PhoneEzFunds() {
  const actions = [
    { i: <ArrowUp className="size-4" />, l: "Transfer" },
    { i: <ArrowDown className="size-4" />, l: "Withdraw" },
    { i: <DollarSign className="size-4" />, l: "Invest" },
    { i: <Plus className="size-4" />, l: "Top up" },
  ];
  const tx = [
    { n: "Alice Burgers", t: "Transfer", a: "$500,00", w: "23 min ago", c: "bg-emerald-400" },
    { n: "Bob Davis", t: "Withdraw", a: "$200,00", w: "5 hours ago", c: "bg-amber-400" },
    { n: "Catherine Ann", t: "Invest", a: "$1,000,00", w: "Yesterday", c: "bg-rose-400" },
  ];
  const nav = [
    { i: <Home className="size-5" />, l: "Home", on: true },
    { i: <BarChart3 className="size-5" />, l: "Analytic", on: false },
    { i: <FileText className="size-5" />, l: "Transaction", on: false },
    { i: <User className="size-5" />, l: "Profile", on: false },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      {/* Blue sky top */}
      <div className="bg-gradient-to-b from-sky-400 to-sky-500 px-5 pb-5 text-white">
        <StatusBar dark />
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-full bg-white/20"><Sparkles className="size-3.5" /></span>
            <span className="text-[13px] font-semibold">EzFunds</span>
          </div>
          <div className="flex items-center gap-3">
            <EyeOff className="size-4" />
            <Bell className="size-4" />
          </div>
        </div>
        <p className="mt-3 text-center text-[11px] text-white/80">Wallet Balance</p>
        <p className="text-center text-[30px] font-extrabold tracking-tight">$ 58,095</p>

        <div className="mt-3 flex justify-between">
          {actions.map((a) => (
            <div key={a.l} className="flex flex-col items-center gap-1">
              <span className="grid size-10 place-items-center rounded-full bg-white/20">{a.i}</span>
              <span className="text-[9px]">{a.l}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
          <div className="flex items-center justify-between text-[10px]">
            <span>Your saving goals</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[10px] font-semibold">
            <span>$ 41,287</span>
            <span>$ 150,874 USD</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-[28%] rounded-full bg-white" />
          </div>
          <p className="mt-1.5 text-[9px] text-white/80">$ 8,000 USD remaining to achieve your goals</p>
        </div>
      </div>

      {/* Insight card */}
      <div className="mx-4 -mt-3 flex items-center gap-2 rounded-2xl border bg-card p-3 shadow-sm">
        <span className="grid size-8 place-items-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950">☀️</span>
        <p className="flex-1 text-[11px] font-medium leading-snug">Let&apos;s take a look at your financial overview for October!</p>
        <ChevronRight className="size-4 text-muted-foreground" />
      </div>

      {/* Transactions */}
      <div className="mt-3 flex-1 px-4">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold">Transaction history</p>
          <span className="text-[11px] text-muted-foreground">See All</span>
        </div>
        <div className="mt-2 space-y-2.5">
          {tx.map((t) => (
            <div key={t.n} className="flex items-center gap-2.5">
              <div className="relative">
                <div className="size-8 rounded-full bg-muted" />
                <span className={`absolute -bottom-0.5 -right-0.5 size-3 rounded-full ${t.c} ring-2 ring-background`} />
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold leading-none">{t.n}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{t.t}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold">{t.a}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{t.w}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t px-2 py-2.5">
        {nav.map((n) => (
          <div key={n.l} className={`flex flex-col items-center gap-0.5 ${n.on ? "text-foreground" : "text-muted-foreground"}`}>
            {n.i}
            <span className="text-[8px] font-medium">{n.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Finster Cards (teal VISA) */
export function PhoneFinsterCards() {
  const nav = [
    { i: <Home className="size-5" />, l: "Home", on: false },
    { i: <CreditCard className="size-5" />, l: "Cards", on: false },
    { i: <QrCode className="size-5" />, l: "", on: true },
    { i: <BarChart3 className="size-5" />, l: "Stocks", on: false },
    { i: <User className="size-5" />, l: "Account", on: false },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <Sparkles className="size-5 text-foreground" />
        <p className="text-[15px] font-bold">Cards</p>
        <span className="grid size-8 place-items-center rounded-full border"><Bell className="size-4" /></span>
      </div>

      {/* VISA card */}
      <div className="mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 p-4 text-white">
        <div className="flex items-start justify-between">
          <div className="h-7 w-9 rounded-md bg-amber-300/80" />
          <span className="text-[11px] font-semibold tracking-wide">finster</span>
        </div>
        <p className="mt-5 text-[15px] tracking-[0.2em]">**** **** **** 3346</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-[11px] text-white/80">Choirul Syafril</p>
          </div>
          <span className="text-[15px] font-bold italic">VISA</span>
        </div>
        <p className="mt-1 text-right text-[10px] text-white/70">12/28</p>
      </div>

      {/* Balance */}
      <div className="mt-4 px-5">
        <p className="text-[11px] text-muted-foreground">Total balance</p>
        <div className="flex items-center gap-2">
          <p className="text-[24px] font-extrabold tracking-tight">$1,400,512.31</p>
          <span className="grid size-7 place-items-center rounded-full border"><EyeOff className="size-3.5 text-muted-foreground" /></span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-3 flex gap-2.5 px-4">
        {[
          { i: <ArrowUpRight className="size-4" />, l: "Transfer" },
          { i: <Plus className="size-4" />, l: "Top up" },
          { i: <ArrowDownLeft className="size-4" />, l: "Withdraw" },
        ].map((a) => (
          <div key={a.l} className="flex flex-1 flex-col items-center gap-1.5 rounded-2xl bg-muted py-3">
            <span className="text-teal-700 dark:text-teal-400">{a.i}</span>
            <span className="text-[10px] font-medium">{a.l}</span>
          </div>
        ))}
      </div>

      {/* Card details */}
      <div className="mt-4 flex-1 px-5">
        <p className="text-[12px] font-semibold">Card details</p>
        <div className="mt-2 flex items-center justify-between border-b py-2.5 text-[12px]">
          <span className="text-muted-foreground">CVV</span>
          <span className="font-semibold tracking-widest">***</span>
        </div>
        <div className="flex items-center justify-between border-b py-2.5 text-[12px]">
          <span className="text-muted-foreground">Card number</span>
          <span className="font-semibold tracking-wider">**** **** **** 3346</span>
        </div>
      </div>

      {/* CTA row */}
      <div className="flex gap-2.5 px-4 pb-2">
        <button type="button" className="flex-1 rounded-full bg-teal-900 py-2.5 text-[12px] font-semibold text-white">Show details</button>
        <button type="button" className="flex-1 rounded-full border py-2.5 text-[12px] font-semibold">More details</button>
      </div>

      {/* Bottom nav with center FAB */}
      <div className="flex items-center justify-around border-t px-2 py-2.5">
        {nav.map((n, i) => (
          n.on ? (
            <span key={i} className="grid size-10 place-items-center rounded-2xl bg-teal-700 text-white">{n.i}</span>
          ) : (
            <div key={i} className="flex flex-col items-center gap-0.5 text-muted-foreground">
              {n.i}
              <span className="text-[8px]">{n.l}</span>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Notifications center (coral/red) */
export function PhoneNotificationsCenter() {
  const today = [
    { icon: "🎬", c: "bg-red-500", title: "50% Off Extravaganza! Grab Your Movie Tickets at Half the Price!", t: "10:00 AM" },
    { icon: "🍄", c: "bg-emerald-500", title: "Successful purchase enjoy unforgettable Adventures with Super Mario movies", t: "10:50 AM" },
    { icon: "⚠️", c: "bg-amber-400", title: "Yo, Your account got spotted on a new device", t: "11:25 AM" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      <div className="flex items-center gap-3 px-4 pt-2 pb-3">
        <ArrowLeft className="size-5" />
        <p className="flex-1 text-[15px] font-bold">Notifications</p>
        <Settings className="size-4 text-muted-foreground" />
      </div>

      {/* Info banner */}
      <div className="mx-4 rounded-2xl bg-red-50 p-3 dark:bg-red-950/30">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-red-500 text-white"><Bell className="size-3.5" /></span>
          <span className="text-[11px] font-bold text-red-600">Information!</span>
        </div>
        <p className="mt-1.5 text-[10px] leading-snug text-red-500/90">
          Please note that there might be a brief delay in securing your seats at the theater while processing your ticket purchase.
        </p>
      </div>

      {/* Today section */}
      <div className="mt-4 flex items-center justify-between px-4">
        <p className="text-[12px] font-semibold">Today</p>
        <span className="text-[11px] font-medium text-red-500">Mark all read</span>
      </div>
      <div className="mt-2 space-y-3 px-4">
        {today.map((n) => (
          <div key={n.title} className="flex items-start gap-2.5">
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-red-500" />
            <span className={`grid size-8 shrink-0 place-items-center rounded-full ${n.c} text-[12px]`}>{n.icon}</span>
            <div className="flex-1">
              <p className="text-[11px] font-medium leading-snug">{n.title}</p>
              <p className="mt-0.5 text-[9px] text-muted-foreground">{n.t}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Earlier section */}
      <div className="mt-4 flex items-center justify-between px-4">
        <p className="text-[12px] font-semibold">Yesterday</p>
        <span className="text-[11px] font-medium text-red-500">Mark all read</span>
      </div>
      <div className="mt-2 space-y-3 px-4">
        {[
          "Jingle Deals: Spectacular Christmas Discounts at the Bioskop!",
          "Presale Frenzy: Grab Your Tickets Now at a Whopping 90% Discount!",
        ].map((t) => (
          <div key={t} className="flex items-start gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-red-500 text-[12px]">🎬</span>
            <div className="flex-1">
              <p className="text-[11px] font-medium leading-snug">{t}</p>
              <p className="mt-0.5 text-[9px] text-muted-foreground">10:00 AM</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ File storage (yellow→lime) */
export function PhoneFileStorage() {
  const folders = [
    { n: "Videos", d: "192 files, 1.4GB", c: "text-blue-500" },
    { n: "Photos", d: "15 files, 1.1GB", c: "text-amber-500" },
    { n: "Design", d: "45 files", c: "text-emerald-500" },
  ];
  const recent = [
    { ext: "ZIP", n: "Project_ux", d: "12 Oct, 2022 at 13:45 · 2.5MB", c: "bg-blue-500" },
    { ext: "EPS", n: "Icons_site", d: "12 Oct, 2022 at 13:46 · 0.9MB", c: "bg-amber-500" },
    { ext: "AVI", n: "Meeting_design", d: "12 Oct, 2022 at 13:48 · 1.7MB", c: "bg-violet-500" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <div className="flex items-center justify-between px-5 pt-9 pb-3">
        <Menu className="size-5" />
        <Search className="size-5" />
      </div>
      <p className="px-5 text-[16px] font-bold">Your storage</p>

      {/* Storage bar */}
      <div className="mx-5 mt-3 rounded-2xl bg-gradient-to-r from-amber-300 to-lime-300 p-4">
        <div className="flex items-center justify-between text-[11px] font-semibold text-stone-800">
          <span>489.56 GB/1 TB</span>
          <span>Available 510.44 GB</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/50">
          <div className="h-full w-[49%] rounded-full bg-stone-900" />
        </div>
      </div>

      {/* Folders */}
      <div className="mt-5 flex items-center justify-between px-5">
        <p className="text-[13px] font-bold">Your folders</p>
        <span className="text-[10px] text-muted-foreground">Show all</span>
      </div>
      <div className="mt-2 flex gap-3 overflow-x-hidden px-5">
        {folders.map((f) => (
          <div key={f.n} className="w-28 shrink-0 rounded-2xl border bg-card p-3">
            <div className="flex items-center justify-between">
              <Folder className={`size-6 ${f.c} fill-current`} />
              <MoreVertical className="size-3.5 text-muted-foreground" />
            </div>
            <p className="mt-2 text-[11px] font-semibold">{f.n}</p>
            <p className="mt-0.5 text-[8px] text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>

      {/* Recent files */}
      <div className="mt-5 flex items-center justify-between px-5">
        <p className="text-[13px] font-bold">Recent files</p>
        <span className="text-[10px] text-muted-foreground">Show all</span>
      </div>
      <div className="mt-2 space-y-2 px-5">
        {recent.map((r) => (
          <div key={r.n} className="flex items-center gap-3 rounded-xl border bg-card p-2.5">
            <span className={`grid size-9 place-items-center rounded-lg ${r.c} text-[8px] font-bold text-white`}>{r.ext}</span>
            <div className="flex-1">
              <p className="text-[11px] font-semibold leading-none">{r.n}</p>
              <p className="mt-0.5 text-[8px] text-muted-foreground">{r.d}</p>
            </div>
            <MoreVertical className="size-3.5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Creativity landing (minimal mono) */
export function PhoneCreativityLanding() {
  return (
    <div className="flex h-full w-full flex-col bg-background px-6 text-left text-foreground">
      <div className="flex items-center justify-between pt-9">
        <span className="text-[14px] font-extrabold tracking-tight">Creativty</span>
        <Menu className="size-5" />
      </div>

      <p className="mt-8 text-[20px] font-extrabold uppercase leading-tight tracking-tight">
        Where creative &amp; productive meet
      </p>

      {/* Image placeholder */}
      <div className="mt-5 h-32 rounded-xl bg-gradient-to-br from-stone-300 to-stone-500 dark:from-stone-700 dark:to-stone-800" />

      <p className="mt-5 text-center text-[10px] uppercase leading-relaxed tracking-wide text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
      </p>

      {/* Experts row */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="flex -space-x-2">
          {["bg-amber-400", "bg-rose-400", "bg-sky-400"].map((c) => (
            <span key={c} className={`size-7 rounded-full ${c} ring-2 ring-background`} />
          ))}
        </div>
        <span className="text-[9px] font-bold uppercase leading-tight">Consult with<br />our experts</span>
      </div>

      <div className="mt-6 flex justify-center">
        <button type="button" className="flex items-center gap-2 rounded-full bg-stone-700 px-5 py-2.5 text-[12px] font-medium text-white dark:bg-stone-200 dark:text-stone-900">
          Detailed Spec
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Sleep analytics (dark, gauges) */
function Gauge({ value, color, label }: { value: number; color: string; label: string }) {
  // Half-circle gauge approximation
  const pct = value / 100;
  return (
    <div className="relative flex flex-col items-center">
      <svg viewBox="0 0 100 55" className="w-28">
        <path d="M 8 50 A 42 42 0 0 1 92 50" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="text-muted/40" />
        <path
          d="M 8 50 A 42 42 0 0 1 92 50"
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={`${pct * 132} 132`}
        />
      </svg>
      <div className="absolute top-3 text-center">
        <p className="text-[22px] font-extrabold leading-none" style={{ color }}>{value}</p>
        <p className="mt-0.5 text-[8px] text-white/50">{label}</p>
      </div>
    </div>
  );
}

export function PhoneSleepAnalytics() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a0a0a] text-left text-white">
      <StatusBar dark />
      <div className="flex items-center justify-between px-5 pt-2">
        <div className="flex items-center gap-2">
          <span className="size-7 rounded-full bg-stone-700" />
          <span className="text-[12px] font-medium">Upgrade</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-full bg-violet-600"><Bell className="size-3.5" /></span>
          <span className="grid size-7 place-items-center rounded-full bg-stone-800"><Zap className="size-3.5" /></span>
        </div>
      </div>
      <p className="mt-3 px-5 text-[12px] text-white/60">Today, 27 January</p>

      {/* Sleep card */}
      <div className="mx-4 mt-3 rounded-2xl bg-[#141414] p-4">
        <div className="flex items-center justify-between text-[12px]">
          <span className="font-medium">Sleep</span>
          <ChevronRight className="size-3.5 text-white/40" />
        </div>
        <div className="mt-2 flex justify-center">
          <Gauge value={92} color="#34d399" label="↑ 23% vs 7-day avg" />
        </div>
        <p className="mt-1 text-center text-[13px] font-bold text-emerald-400">Optimal</p>
        <p className="mt-1 text-center text-[10px] leading-snug text-white/60">
          Your sleep quality was excellent last night. Keep up your good sleep habits.
        </p>
      </div>

      {/* Strain card */}
      <div className="mx-4 mt-3 flex-1 rounded-2xl bg-[#141414] p-4">
        <div className="flex items-center justify-between text-[12px]">
          <span className="font-medium">Strain</span>
          <ChevronRight className="size-3.5 text-white/40" />
        </div>
        <div className="mt-2 flex justify-center">
          <Gauge value={36} color="#fb923c" label="↓ 18% vs 7-day avg" />
        </div>
        <p className="mt-1 text-center text-[13px] font-bold text-orange-400">Poor</p>
        <p className="mt-1 text-center text-[10px] leading-snug text-white/60">
          Your strain level is high today. Consider taking it easy and prioritize recovery.
        </p>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-around border-t border-white/10 px-2 py-2.5 text-white/50">
        {[
          { i: <Home className="size-5" />, l: "Home" },
          { i: <BookOpen className="size-5" />, l: "Libraries" },
          { i: <BarChart3 className="size-5" />, l: "Analytics", on: true },
          { i: <User className="size-5" />, l: "Account" },
        ].map((n) => (
          <div key={n.l} className={`flex flex-col items-center gap-0.5 ${n.on ? "text-white" : ""}`}>
            {n.i}
            <span className="text-[8px]">{n.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Crypto swap (neutral, slide) */
export function PhoneCryptoSwap() {
  return (
    <div className="flex h-full w-full flex-col bg-muted/30 text-left text-foreground">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="relative">
          <span className="block size-8 rounded-full bg-stone-300" />
          <span className="absolute -right-1 -top-1 grid size-4 place-items-center rounded-full bg-red-500 text-[8px] font-bold text-white">8</span>
        </div>
        <button type="button" className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-[12px] font-semibold shadow-sm">
          <span className="size-4 rounded-full bg-blue-500" />
          0xfK07…8336
          <ChevronDown className="size-3.5" />
        </button>
        <span className="grid size-9 place-items-center rounded-full bg-background shadow-sm"><FileText className="size-4" /></span>
      </div>

      <p className="mt-3 text-center text-[20px] font-bold">Swap</p>

      {/* You Pay */}
      <div className="mx-4 mt-3 rounded-2xl bg-background p-4 shadow-sm">
        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>You Pay</span>
          <span className="flex items-center gap-1.5">
            52.34 BNB
            <span className="rounded-md bg-foreground px-1.5 py-0.5 text-[9px] font-bold text-background">Max</span>
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-[15px] font-semibold">
            <span className="grid size-7 place-items-center rounded-full bg-amber-400 text-[10px] font-bold text-white">B</span>
            BNB
            <ChevronDown className="size-4" />
          </span>
          <span className="text-[18px] font-bold">0.01</span>
        </div>
        <p className="mt-1 text-right text-[10px] text-muted-foreground">≈ 6,247.70 USD</p>
      </div>

      {/* Swap toggle */}
      <div className="-my-2.5 flex justify-center">
        <span className="z-10 grid size-9 place-items-center rounded-full border-4 border-muted/30 bg-background shadow-sm">⇅</span>
      </div>

      {/* You Receive */}
      <div className="mx-4 rounded-2xl bg-background p-4 shadow-sm">
        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>You Receive</span>
          <span>187.52 USDT</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="flex items-center gap-2 text-[15px] font-semibold">
            <span className="grid size-7 place-items-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">T</span>
            USDT
            <ChevronDown className="size-4" />
          </span>
          <span className="text-[16px] font-bold">6.7345108344</span>
        </div>
        <p className="mt-1 text-right text-[10px] text-muted-foreground">≈ 28,197.64 USD</p>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
        🔥 <span className="font-semibold text-foreground">Fee: 0.255851 USDT</span> <ChevronDown className="size-3" />
      </div>
      <p className="mt-1 text-center text-[10px] text-muted-foreground">1 BNB = 673.45108 (198,98 USD)</p>

      {/* Slide to swap */}
      <div className="mx-4 mt-auto mb-3 flex items-center rounded-full bg-foreground p-1.5">
        <span className="grid size-9 place-items-center rounded-full bg-background"><Check className="size-4" /></span>
        <span className="flex-1 text-center text-[13px] font-semibold text-background">Slide to Swap</span>
        <span className="pr-3 text-background/60">›››</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Calculator (orange/dark) */
export function PhoneCalculator() {
  const keys = [
    ["÷", "×", "⌫"],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    [".", "0", "="],
  ];
  return (
    <div className="flex h-full w-full flex-col bg-[#1a1a1a] text-right text-white">
      {/* Display */}
      <div className="flex flex-1 flex-col justify-end bg-[#e8531f] px-6 pb-6 pt-12">
        <p className="text-[14px] text-white/70">1852.6</p>
        <p className="mt-2 text-[40px] font-light tracking-tight">1000.324</p>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-3 gap-3 p-5">
        {keys.flat().map((k, i) => {
          const isOp = ["÷", "×", "⌫", "="].includes(k);
          return (
            <button
              key={i}
              type="button"
              className={`grid h-12 place-items-center rounded-full text-[18px] font-medium ${
                k === "=" ? "bg-[#e8531f] text-white" : isOp ? "bg-stone-700 text-orange-300" : "bg-stone-800 text-white"
              }`}
            >
              {k}
            </button>
          );
        })}
      </div>
      {/* extra row: clear / plus-minus / percent / etc small top controls */}
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="grid size-9 place-items-center rounded-full bg-orange-300 text-stone-900"><Plus className="size-4" /></span>
        <span className="grid size-9 place-items-center rounded-full bg-stone-700"><Minus className="size-4 text-orange-300" /></span>
        <span className="grid size-9 place-items-center rounded-full bg-stone-700"><Percent className="size-4 text-orange-300" /></span>
        <span className="grid size-9 place-items-center rounded-full bg-stone-700"><RotateCcw className="size-4 text-orange-300" /></span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Search (recent + list, violet FAB) */
export function PhoneSearchFilters() {
  const today = ["A Mouse Playing Guitar", "Fix React Form Validation"];
  const yesterday = [
    "Build contact from in HTML, CSS, JS",
    "Cartoon Cat in a Spacesuit",
    "Generate Intro Video for My App",
    "Clone My Voice for Audiobook",
    "Explain Quantum Physics Simply",
    "Fix My Python Loop Bug",
    "Write a Birthday Poem for Dad",
  ];
  const nav = [
    { i: <Home className="size-5" /> },
    { i: <MessageCircle className="size-5" /> },
    { i: <Plus className="size-5" />, fab: true },
    { i: <span className="size-5 rounded-full bg-violet-400/60" /> },
    { i: <Settings className="size-5" /> },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      {/* Search bar */}
      <div className="px-4 pt-2">
        <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
          <Search className="size-4 text-muted-foreground" />
          <span className="flex-1 text-[12px] text-muted-foreground">Search...</span>
        </div>
      </div>

      <div className="mt-4 flex-1 overflow-hidden px-4">
        <p className="text-[11px] font-semibold text-muted-foreground">Today</p>
        <div className="mt-1.5">
          {today.map((t) => (
            <div key={t} className="flex items-center justify-between border-b py-2.5">
              <span className="text-[12px]">{t}</span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] font-semibold text-muted-foreground">Yesterday</p>
        <div className="mt-1.5">
          {yesterday.map((t) => (
            <div key={t} className="flex items-center justify-between border-b py-2.5">
              <span className="text-[12px]">{t}</span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav with violet FAB */}
      <div className="flex items-center justify-around border-t px-2 py-2 text-muted-foreground">
        {nav.map((n, i) => (
          n.fab ? (
            <span key={i} className="grid size-11 place-items-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-400/40">{n.i}</span>
          ) : (
            <span key={i}>{n.i}</span>
          )
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Integration connect (light, checklist) */
export function PhoneIntegrationConnect() {
  const perms = [
    "Generate UI components based on prompts",
    "Sync generated layouts into your project",
    "Preview and insert components in real time",
    "Access and edit your existing v0.dev projects",
    "Deploy updates directly to your frontend",
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background px-5 pt-9 text-left text-foreground">
      {/* Logos */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-foreground text-[11px] font-bold text-background">U</span>
          <ArrowRight className="size-4 text-muted-foreground" />
          <span className="grid size-9 place-items-center rounded-xl bg-foreground text-[11px] font-bold text-background">v0</span>
        </div>
        <X className="size-4 text-muted-foreground" />
      </div>

      <p className="mt-4 text-[17px] font-bold">Connect Untitled to v0</p>
      <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
        Generate stunning UIs with AI, then customize and deploy instantly, straight from prompt to prod.
      </p>

      <div className="mt-5 border-t border-dashed pt-4">
        <p className="text-[12px] font-semibold">Untitled would like to</p>
        <div className="mt-3 space-y-3">
          {perms.map((p) => (
            <div key={p} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="size-4 text-emerald-500" />
                <span className="text-[12px]">{p}</span>
              </div>
              <ChevronRight className="size-3.5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-2 text-[12px] font-medium">
          <BookOpen className="size-3.5" /> Documentation
        </button>
        <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border py-2 text-[12px] font-medium">
          <Code className="size-3.5" /> Source
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-dashed pt-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5"><Link2 className="size-3.5" /> untitledui.com/integrations/v0</span>
        <Copy className="size-3.5" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ AEVUM car finder (mono editorial) */
export function PhoneAevumCars() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      {/* Hero */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-b from-sky-200 to-stone-300 dark:from-stone-700 dark:to-stone-800">
        <div className="flex items-center justify-between px-5 pt-9">
          <span className="text-[14px] font-extrabold tracking-[0.15em]">AEVUM</span>
          <Menu className="size-5" />
        </div>
        <p className="mt-4 text-center text-[22px] font-bold text-white drop-shadow">Find Your Car</p>
        {/* car silhouettes */}
        <div className="absolute inset-x-0 bottom-2 flex items-end justify-center gap-2 px-4">
          <div className="h-10 w-16 rounded-lg bg-stone-800/70" />
          <div className="h-12 w-20 rounded-lg bg-stone-700/80" />
          <div className="h-10 w-16 rounded-lg bg-stone-800/70" />
        </div>
      </div>

      {/* Filter row */}
      <div className="flex items-center justify-between px-5 pt-3">
        <button type="button" className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium">
          <Sparkles className="size-3.5" /> Filter
        </button>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          Sort by:
          <span className="flex items-center gap-1 rounded-md border px-2 py-1 font-medium text-foreground">
            Newest <ChevronDown className="size-3" />
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 border-b px-5 pb-2 text-[11px]">
        {["ALL", "LUX", "SEDAN", "SUV", "SPORTS", "EV"].map((t, i) => (
          <span key={t} className={i === 0 ? "border-b-2 border-foreground pb-1 font-semibold" : "text-muted-foreground"}>{t}</span>
        ))}
      </div>

      {/* Car */}
      <div className="flex flex-1 flex-col items-center justify-center px-5">
        <div className="h-20 w-48 rounded-xl bg-gradient-to-r from-stone-300 to-stone-400 dark:from-stone-600 dark:to-stone-700" />
        <p className="mt-3 self-start text-[15px] font-bold">BMW i7</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Wallet Home (violet/blue cards) */
export function PhoneWalletHome() {
  const tx = [
    { n: "FlowerShop", t: "15:44", a: "-$87.0", up: false, c: "bg-violet-500" },
    { n: "Uber Ride", t: "10:15", a: "-$25.5", up: false, c: "bg-stone-800" },
    { n: "Amazon - Electronics", t: "09:30", a: "-$89.9", up: false, c: "bg-stone-900" },
    { n: "Cashback", t: "09:12", a: "+$8.0", up: true, c: "bg-emerald-500" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-2">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-stone-900 text-[11px] font-bold text-white">A</span>
          <div>
            <p className="text-[13px] font-bold leading-none">Hi, Andrew</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">Welcome back!</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <RefreshCw className="size-4" />
          <BarChart3 className="size-4" />
        </div>
      </div>

      {/* Balance */}
      <div className="px-5 pt-4">
        <p className="text-[12px] text-muted-foreground">Your Balance</p>
        <p className="text-[28px] font-extrabold tracking-tight">$23,550.0</p>
        <div className="mt-2 flex gap-2.5">
          <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-stone-900 py-2.5 text-[12px] font-semibold text-white dark:bg-stone-100 dark:text-stone-900">
            <Plus className="size-3.5" /> Deposit
          </button>
          <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border py-2.5 text-[12px] font-semibold">
            <ArrowUpRight className="size-3.5" /> Transfer
          </button>
        </div>
      </div>

      {/* Cards section */}
      <div className="mx-4 mt-4 rounded-2xl border bg-card p-3">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold">Cards</p>
          <Plus className="size-4 text-muted-foreground" />
        </div>
        <div className="mt-2 flex gap-2.5">
          <div className="flex-1 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 p-3 text-white">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold italic">VISA</span>
              <MoreHorizontal className="size-3.5" />
            </div>
            <p className="mt-3 text-[15px] font-extrabold">$12550.0</p>
            <div className="mt-1 flex items-center justify-between text-[8px] text-white/70">
              <span>Debit</span><span>8764</span>
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 p-3 text-white">
            <p className="mt-6 text-[15px] font-extrabold">$11000.0</p>
            <div className="mt-1 flex items-center justify-between text-[8px] text-white/70">
              <span>Credit</span><span>2501</span>
            </div>
          </div>
        </div>
      </div>

      {/* Week budget */}
      <div className="mx-4 mt-3 flex items-center gap-3 rounded-2xl border bg-card p-3">
        <svg viewBox="0 0 36 36" className="size-9 -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="6" className="text-muted" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="38 94" className="text-violet-500" strokeLinecap="round" />
        </svg>
        <div className="flex-1">
          <p className="text-[12px] font-semibold">Week budget</p>
          <p className="text-[9px] text-muted-foreground">05/05-11/05</p>
        </div>
        <div className="text-right">
          <p className="text-[12px] font-bold">$160.8</p>
          <p className="text-[9px] text-muted-foreground">$200.0</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="mt-3 flex-1 px-5">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold">Transactions</p>
          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
        <div className="mt-2 space-y-2.5">
          {tx.map((t) => (
            <div key={t.n} className="flex items-center gap-2.5">
              <span className={`grid size-8 shrink-0 place-items-center rounded-full ${t.c} text-[8px] font-bold text-white`}>
                {t.n[0]}
              </span>
              <div className="flex-1">
                <p className="text-[11px] font-semibold leading-none">{t.n}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{t.t}</p>
              </div>
              <span className={`text-[11px] font-bold ${t.up ? "text-emerald-500" : "text-foreground"}`}>{t.a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating pill nav */}
      <div className="flex justify-center pb-3">
        <div className="flex items-center gap-1 rounded-full bg-stone-900 p-1.5 dark:bg-stone-800">
          <span className="grid size-9 place-items-center rounded-full bg-violet-300 text-stone-900"><Zap className="size-4" /></span>
          <span className="grid size-9 place-items-center rounded-full text-white"><CreditCard className="size-4" /></span>
          <span className="grid size-9 place-items-center rounded-full text-white"><MessageCircle className="size-4" /></span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Card Detail (blue gradient card) */
export function PhoneCardDetail() {
  const rows = [
    { i: <Info className="size-4" />, l: "Card details" },
    { i: <FileText className="size-4" />, l: "Tarif information" },
    { i: <BarChart3 className="size-4" />, l: "Spending statistics" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-stone-900 text-[11px] font-bold text-white">A</span>
          <div>
            <p className="text-[13px] font-bold leading-none">Hi, Andrew</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">Welcome back!</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <RefreshCw className="size-4" />
          <BarChart3 className="size-4" />
        </div>
      </div>

      {/* Big card */}
      <div className="mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-4 text-white">
        <div className="flex items-start justify-between">
          <Sparkles className="size-5" />
          <div className="flex items-center gap-1">
            <span className="text-white/80">))</span>
            <span className="flex"><span className="size-4 rounded-full bg-white/40" /><span className="-ml-1.5 size-4 rounded-full bg-white/70" /></span>
          </div>
        </div>
        <p className="mt-6 text-[17px] font-semibold tracking-wide">3487 9261 4234 7093</p>
        <div className="mt-3 flex items-end justify-between text-[9px]">
          <div>
            <p className="text-white/60">Card holder</p>
            <p className="text-[11px] font-semibold">Andrew River</p>
          </div>
          <div>
            <p className="text-white/60">Expiry date</p>
            <p className="text-[11px] font-semibold">09/30</p>
          </div>
        </div>
      </div>

      {/* Card balance */}
      <div className="px-5 pt-4">
        <p className="text-[12px] text-muted-foreground">Card Balance</p>
        <div className="flex items-center gap-2">
          <p className="text-[26px] font-extrabold tracking-tight">$11000.0</p>
          <EyeOff className="size-4 text-muted-foreground" />
        </div>
      </div>

      {/* Transfer / Withdraw */}
      <div className="mt-3 flex gap-2.5 px-4">
        <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border py-2.5 text-[12px] font-semibold">
          <Plus className="size-3.5" /> Transfer
        </button>
        <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border py-2.5 text-[12px] font-semibold">
          <Plus className="size-3.5" /> Withdraw
        </button>
      </div>

      {/* Detail rows */}
      <div className="mx-4 mt-3 divide-y rounded-2xl border bg-card">
        {rows.map((r) => (
          <div key={r.l} className="flex items-center gap-2.5 px-4 py-3">
            <span className="text-muted-foreground">{r.i}</span>
            <span className="flex-1 text-[12px]">{r.l}</span>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="mt-3 flex-1 px-5">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold">Transactions</p>
          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
        <div className="mt-2 space-y-2.5">
          {[
            { n: "FlowerShop", t: "15:44", a: "-$87.0", c: "bg-violet-500" },
            { n: "Uber Ride", t: "10:15", a: "-$25.5", c: "bg-stone-800" },
          ].map((t) => (
            <div key={t.n} className="flex items-center gap-2.5">
              <span className={`grid size-8 shrink-0 place-items-center rounded-full ${t.c} text-[8px] font-bold text-white`}>{t.n[0]}</span>
              <div className="flex-1">
                <p className="text-[11px] font-semibold leading-none">{t.n}</p>
                <p className="mt-0.5 text-[9px] text-muted-foreground">{t.t}</p>
              </div>
              <span className="text-[11px] font-bold">{t.a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Meditate Home (lime, mood) */
export function PhoneMeditateHome() {
  const moods = [
    { e: "😄", c: "bg-lime-400" },
    { e: "😠", c: "bg-rose-400" },
    { e: "🙂", c: "bg-sky-300" },
    { e: "😌", c: "bg-pink-300" },
    { e: "😋", c: "bg-amber-400" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <div className="flex items-center gap-2.5">
          <span className="size-9 rounded-full bg-gradient-to-br from-pink-300 to-amber-300" />
          <div>
            <p className="text-[13px] font-bold leading-none">For you</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">Good evening Max!</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 text-foreground">
          <Crown className="size-4" />
          <Bell className="size-4" />
        </div>
      </div>

      {/* Search */}
      <div className="mx-5 mt-3 flex items-center gap-2 rounded-full bg-muted px-3 py-2.5">
        <Search className="size-4 text-muted-foreground" />
        <span className="flex-1 text-[11px] text-muted-foreground">Search</span>
        <span className="grid size-6 place-items-center rounded-full bg-lime-300 text-stone-800"><SlidersHorizontal className="size-3" /></span>
      </div>

      {/* Mood */}
      <p className="mt-4 px-5 text-[14px] font-bold">How are you feeling today?</p>
      <div className="mt-3 flex justify-between px-5">
        {moods.map((m, i) => (
          <span key={i} className={`grid size-10 place-items-center rounded-full ${m.c} text-[18px]`}>{m.e}</span>
        ))}
      </div>
      <p className="mt-2 px-5 text-[10px] text-muted-foreground">This is used to curate your daily plan.</p>

      {/* Morning */}
      <p className="mt-4 px-5 text-[14px] font-bold">Morning</p>
      <p className="px-5 text-[10px] text-muted-foreground">Start your morning with meditation.</p>
      <div className="mx-5 mt-3 rounded-2xl bg-lime-200 p-3 dark:bg-lime-900/40">
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-stone-900 text-white">🧠</span>
          <div className="flex-1">
            <p className="text-[12px] font-bold leading-none">Mental Wellness</p>
            <p className="mt-0.5 text-[9px] text-muted-foreground">Cory Muscara</p>
          </div>
          <Lock className="size-3.5 text-muted-foreground" />
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-stone-900/10 pt-2">
          <span className="text-[10px] font-medium">Coaching</span>
          <span className="grid size-5 place-items-center rounded-full border border-stone-900/30">▶</span>
        </div>
      </div>
      <div className="mx-5 mt-2 flex items-center gap-2.5 rounded-2xl border bg-card p-3">
        <span className="grid size-9 place-items-center rounded-xl bg-stone-800 text-white">🌀</span>
        <div className="flex-1">
          <p className="text-[12px] font-bold leading-none">Anxiety Isn&apos;t the Enemy</p>
          <p className="mt-0.5 text-[9px] text-muted-foreground">Melli O&apos;Brien</p>
        </div>
        <Lock className="size-3.5 text-muted-foreground" />
      </div>

      {/* Bottom nav */}
      <div className="mt-auto flex items-center justify-around border-t px-4 py-2.5 text-muted-foreground">
        <span className="grid size-8 place-items-center rounded-lg bg-lime-300 text-stone-800"><Home className="size-4" /></span>
        <span className="text-[14px]">☀️</span>
        <span className="text-[14px]">🧠</span>
        <Moon className="size-4" />
        <span className="text-[14px]">🎵</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Meditate Browse (lime, tabs+grid) */
export function PhoneMeditateBrowse() {
  const finds = [
    { t: "Pick for me", s: "Shuffle", c: "bg-purple-200", i: "🔀" },
    { t: "Gratitude", s: "Collection", c: "bg-pink-200", i: "✨" },
    { t: "Stressed out", s: "Collection", c: "bg-amber-200", i: "🌙" },
    { t: "Felling Sad", s: "Collection", c: "bg-rose-200", i: "❤️" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <p className="text-[18px] font-extrabold">Meditate</p>
        <div className="flex items-center gap-2.5">
          <Crown className="size-4" />
          <Bell className="size-4" />
        </div>
      </div>

      {/* Search */}
      <div className="mx-5 mt-3 flex items-center gap-2 rounded-full bg-muted px-3 py-2.5">
        <Search className="size-4 text-muted-foreground" />
        <span className="flex-1 text-[11px] text-muted-foreground">Search</span>
        <span className="grid size-6 place-items-center rounded-full bg-lime-300 text-stone-800"><SlidersHorizontal className="size-3" /></span>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex gap-2 overflow-x-hidden px-5 text-[11px]">
        {["Browse", "Coaching", "Programs", "Short/I"].map((t, i) => (
          <span key={t} className={`rounded-full px-3 py-1.5 ${i === 0 ? "border-2 border-lime-400 font-semibold" : "text-muted-foreground"}`}>{t}</span>
        ))}
      </div>

      {/* Find a meditation */}
      <div className="mt-4 flex items-center justify-between px-5">
        <p className="text-[13px] font-bold">Find a meditation</p>
        <span className="text-[10px] text-muted-foreground">See all</span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2.5 px-5">
        {finds.map((f) => (
          <div key={f.t} className={`flex items-center gap-2 rounded-xl ${f.c} p-2.5`}>
            <span className="grid size-7 place-items-center rounded-full bg-white/70 text-[12px]">{f.i}</span>
            <div>
              <p className="text-[11px] font-bold leading-none text-stone-800">{f.t}</p>
              <p className="mt-0.5 text-[8px] text-stone-600">{f.s}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Programs */}
      <div className="mt-4 flex items-center justify-between px-5">
        <p className="text-[13px] font-bold">Mindfulness programs</p>
        <span className="text-[10px] text-muted-foreground">See all</span>
      </div>
      <div className="mt-2 space-y-2 px-5">
        {[
          { t: "Emotional resilience in adversity", s: "Course . 16 Sessions", c: "from-amber-300 to-orange-400" },
          { t: "Managing pain and illness", s: "Course . 16 Sessions", c: "from-yellow-300 to-amber-400" },
        ].map((p) => (
          <div key={p.t} className="flex items-center gap-3 rounded-xl border bg-card p-2.5">
            <div className="flex-1">
              <p className="text-[11px] font-bold leading-snug">{p.t}</p>
              <p className="mt-0.5 text-[9px] text-muted-foreground">{p.s}</p>
            </div>
            <div className={`size-12 shrink-0 rounded-lg bg-gradient-to-br ${p.c}`} />
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="mt-auto flex items-center justify-around border-t px-4 py-2.5 text-muted-foreground">
        <span className="text-[14px]">🏠</span>
        <span className="text-[14px]">☀️</span>
        <span className="grid size-9 place-items-center rounded-full bg-lime-300 text-stone-800">🧠</span>
        <Moon className="size-4" />
        <span className="text-[14px]">🎵</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Meditate Paywall (lime+pink Pro) */
export function PhoneMeditatePaywall() {
  const plans = [
    { l: "Weekly", p: "$9.99", u: "Per week", best: false },
    { l: "Annual", p: "$99.99", u: "Per year", best: true },
    { l: "Monthly", p: "$19.99", u: "Per month", best: false },
  ];
  const perks = ["Working labels", "Session tracking", "Course Formats", "Draft sharing"];
  return (
    <div className="flex h-full w-full flex-col bg-background px-5 text-left text-foreground">
      <StatusBar />
      <div className="flex justify-end pt-2">
        <X className="size-5" />
      </div>

      {/* Welcome offer chip */}
      <div className="mt-2 flex justify-center">
        <span className="flex items-center gap-2 rounded-full bg-lime-200 px-3 py-1 text-[10px] font-semibold text-stone-800 dark:bg-lime-900/40 dark:text-lime-200">
          Welcome offer
          <span className="rounded-full bg-stone-900 px-1.5 py-0.5 text-[8px] text-white">23H 59M</span>
        </span>
      </div>

      <p className="mt-4 text-center text-[24px] font-extrabold leading-tight tracking-tight">
        Enjoy premium tools on every plan
      </p>

      {/* Plans */}
      <div className="mt-5 flex items-end gap-2">
        {plans.map((pl) => (
          <div key={pl.l} className={`relative flex-1 rounded-2xl p-3 text-center ${pl.best ? "bg-lime-300 dark:bg-lime-600" : "border bg-card"}`}>
            {pl.best && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-stone-900 px-2 py-0.5 text-[7px] font-bold text-white">Best Deal</span>
            )}
            <p className={`text-[10px] ${pl.best ? "text-stone-800" : "text-muted-foreground"}`}>{pl.l}</p>
            <p className={`mt-1 text-[15px] font-extrabold ${pl.best ? "text-stone-900" : ""}`}>{pl.p}</p>
            <p className={`text-[8px] ${pl.best ? "text-stone-700" : "text-muted-foreground"}`}>{pl.u}</p>
          </div>
        ))}
      </div>

      {/* Pro plan card */}
      <div className="mt-4 rounded-2xl bg-pink-200 p-4 text-center dark:bg-pink-900/40">
        <span className="mx-auto grid size-10 place-items-center rounded-full bg-stone-900 text-white">🪷</span>
        <p className="mt-2 text-[16px] font-extrabold">Pro Plan</p>
        <p className="mt-1 text-[10px] leading-snug text-stone-600 dark:text-pink-100/70">
          Explore advanced tools for mindfulness and meditation
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1.5 text-[9px] font-medium text-stone-800 dark:bg-stone-900/40 dark:text-pink-100">
              <Check className="size-3 text-emerald-600" /> {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Crypto Account (lime mesh) */
export function PhoneCryptoAccount() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-2">
        <button type="button" className="flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-[12px] font-semibold">
          <span className="size-2.5 rounded-full bg-lime-400" />
          Account
          <ChevronDown className="size-3.5" />
        </button>
        <div className="flex items-center gap-2.5 text-muted-foreground">
          <FileText className="size-4" />
          <Globe className="size-4" />
        </div>
      </div>

      {/* Mesh balance card */}
      <div className="relative mx-4 mt-3 h-44 overflow-hidden rounded-3xl bg-gradient-to-br from-lime-200 via-lime-100 to-lime-400/60 dark:from-stone-800 dark:via-stone-900 dark:to-lime-700/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,theme(colors.lime.400/0.5),transparent_60%)]" />
        <div className="absolute bottom-4 left-5">
          <p className="text-[30px] font-extrabold tracking-tight">
            <span className="text-muted-foreground">$</span>12,847.35
          </p>
          <p className="text-[11px] text-muted-foreground">3 assets</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-4 mt-4 flex rounded-full bg-muted p-1 text-[12px]">
        <span className="flex-1 rounded-full bg-background py-1.5 text-center font-semibold shadow-sm">All</span>
        <span className="flex-1 py-1.5 text-center text-muted-foreground">Public</span>
        <span className="flex-1 py-1.5 text-center text-muted-foreground">Private</span>
      </div>

      {/* Asset row */}
      <div className="mx-4 mt-4 flex items-center gap-3 rounded-2xl border bg-card p-3.5">
        <span className="grid size-9 place-items-center rounded-full bg-blue-500 text-white"><DollarSign className="size-4" /></span>
        <div className="flex-1">
          <p className="text-[14px] font-bold leading-none">$8,450.22</p>
          <p className="mt-1 text-[10px] text-muted-foreground">8,450 USDC</p>
        </div>
      </div>

      {/* Send / Receive */}
      <div className="mt-auto flex gap-3 px-4 pb-3">
        <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-lime-400 py-3 text-[13px] font-semibold text-stone-900">
          <ArrowUpRight className="size-4" /> Send
        </button>
        <button type="button" className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-lime-400 py-3 text-[13px] font-semibold text-stone-900">
          <ArrowDownLeft className="size-4" /> Receive
        </button>
      </div>

      {/* Bottom nav */}
      <div className="mx-4 mb-3 flex items-center justify-around rounded-full border bg-card py-2.5 text-muted-foreground">
        <Sparkles className="size-4" />
        <RefreshCw className="size-4" />
        <span className="grid size-8 place-items-center rounded-full bg-stone-900 text-lime-400 dark:bg-lime-400 dark:text-stone-900"><Shield className="size-4" /></span>
        <DollarSign className="size-4" />
        <Settings className="size-4" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Wallet James (blue→violet) */
export function PhoneWalletJames() {
  const tx = [
    { n: "Sketch", t: "Monthly payment", d: "2024.02.03", a: "-$12", c: "bg-amber-400", e: "◆" },
    { n: "Spotify", t: "Monthly payment", d: "2024.02.03", a: "-$10", c: "bg-emerald-500", e: "♪" },
    { n: "Youtube", t: "Monthly payment", d: "2024.02.03", a: "-$8", c: "bg-red-500", e: "▶" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      {/* Gradient header */}
      <div className="bg-gradient-to-br from-blue-500 to-violet-600 px-5 pb-5 pt-9 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[18px] font-extrabold leading-tight">Hello, James!</p>
            <p className="text-[11px] text-white/70">Active your new card</p>
          </div>
          <span className="grid size-10 place-items-center rounded-2xl bg-white/20 text-lg">🧑</span>
        </div>
        <p className="mt-4 text-[12px] text-white/80">Wallet(USD)</p>
        <div className="flex items-center gap-2">
          <p className="text-[30px] font-extrabold tracking-tight">
            $8,502<span className="text-[16px] align-top">.00</span>
          </p>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold">+8.56 %</span>
        </div>
        <div className="mt-3 flex items-center gap-2.5">
          <button type="button" className="flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-[12px] font-semibold">
            Add <Plus className="size-3.5" />
          </button>
          <span className="grid size-9 place-items-center rounded-full bg-white/15"><ArrowUpRight className="size-4" /></span>
          <span className="grid size-9 place-items-center rounded-full bg-white/15"><ArrowDown className="size-4" /></span>
          <span className="grid size-9 place-items-center rounded-full bg-white/15"><CreditCard className="size-4" /></span>
        </div>
      </div>

      {/* Transactions */}
      <div className="flex items-center justify-between px-5 pt-4">
        <p className="text-[14px] font-bold">Latest transaction</p>
        <MoreHorizontal className="size-4 text-muted-foreground" />
      </div>
      <div className="mt-2 space-y-2 px-4">
        {tx.map((t) => (
          <div key={t.n} className="flex items-center gap-3 rounded-2xl border bg-card p-3">
            <span className={`grid size-9 place-items-center rounded-xl ${t.c} text-[13px] text-white`}>{t.e}</span>
            <div className="flex-1">
              <p className="text-[12px] font-bold leading-none">{t.n}</p>
              <p className="mt-1 text-[10px] text-muted-foreground">{t.t}</p>
              <p className="text-[9px] text-muted-foreground">{t.d}</p>
            </div>
            <span className="text-[13px] font-bold">{t.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Spending Statistic (dark blue) */
export function PhoneSpendingStatistic() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0b1020] text-left text-white">
      <StatusBar dark />
      <div className="flex items-center justify-between px-5 pt-2">
        <span className="grid size-8 place-items-center rounded-full bg-white/10"><ArrowLeft className="size-4" /></span>
        <p className="text-[15px] font-bold">Statistic</p>
        <span className="grid size-8 place-items-center rounded-full bg-white/10">▦</span>
      </div>

      {/* Month tabs */}
      <div className="mt-4 flex gap-4 overflow-x-hidden px-5 text-[12px]">
        {["December", "January", "February", "Mar"].map((m, i) => (
          <span key={m} className={i === 1 ? "font-semibold text-white" : "text-white/40"}>{m}</span>
        ))}
      </div>

      {/* Chart */}
      <div className="mt-4 px-5">
        <p className="text-[11px] text-white/60">Subscription &amp; Phone</p>
        <p className="text-[10px] text-blue-400">Average level</p>
        <div className="relative mt-3 h-28">
          <span className="absolute right-10 top-0 rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold">$ 452</span>
          <svg viewBox="0 0 300 90" className="h-full w-full" preserveAspectRatio="none">
            <path d="M0 70 C 30 60, 50 40, 80 50 S 130 75, 160 55 S 220 20, 250 35 S 290 50, 300 30" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
            <circle cx="250" cy="35" r="4" fill="#3b82f6" />
          </svg>
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-white/40">
          {[["11", "Mon"], ["12", "Tue"], ["13", "Wed"], ["14", "Thu"], ["15", "Fri"], ["16", "Sat"]].map(([d, w]) => (
            <div key={d} className="text-center">
              <p className={d === "14" ? "font-semibold text-white" : ""}>{d}</p>
              <p>{w}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spending categories */}
      <div className="mt-5 flex items-center justify-between px-5">
        <p className="text-[13px] font-bold">Spending categories</p>
        <ChevronRight className="size-4 text-white/50" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 px-5">
        {[
          { i: <Phone className="size-4" />, t: "Subscription & Phone" },
          { i: <Home className="size-4" />, t: "Housing & energy" },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl bg-white/5 p-3">
            <span className="grid size-9 place-items-center rounded-full bg-white/10 text-blue-300">{c.i}</span>
            <p className="mt-2 text-[11px] font-medium leading-snug">{c.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Search Services (light blue) */
export function PhoneSearchServices() {
  const items = [
    { i: "🎂", t: "Birthday" },
    { i: "💍", t: "Anniversary" },
    { i: "🎓", t: "Graduation" },
    { i: "🎉", t: "Promotion" },
    { i: "⏱️", t: "Countdowns" },
    { i: "📋", t: "Metting" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pt-2">
        <span className="grid size-8 place-items-center rounded-full border"><ChevronLeft className="size-4" /></span>
        <p className="flex-1 text-center text-[15px] font-bold">Search</p>
        <span className="size-8" />
      </div>

      {/* Search field */}
      <div className="mx-5 mt-4 flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
        <Search className="size-4 text-muted-foreground" />
        <span className="flex-1 text-[12px] text-muted-foreground">Search Services</span>
        <span className="grid size-6 place-items-center rounded-md border"><SlidersHorizontal className="size-3" /></span>
      </div>

      <p className="mt-4 px-5 text-[13px] font-bold">Suggestions</p>
      <div className="mt-2 px-5">
        {items.map((it) => (
          <div key={it.t} className="flex items-center gap-3 border-b py-3">
            <span className="text-[15px]">{it.i}</span>
            <span className="flex-1 text-[12px] font-medium">{it.t}</span>
            <ArrowUpRight className="size-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Subscription Premium (blue) */
export function PhoneSubscriptionPremium() {
  const features = [
    "Your AI coach for focus progress.",
    "Powerful insights to performance",
    "1000+ workouts fitness goal.",
    "Enjoy an uninterrupted,",
    "Offline access",
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background px-5 text-left text-foreground">
      <StatusBar />
      <div className="flex items-center justify-between pt-2">
        <span className="grid size-8 place-items-center rounded-full border"><ChevronLeft className="size-4" /></span>
        <p className="text-[14px] font-semibold">Subscription Plan</p>
        <span className="grid size-8 place-items-center rounded-full border"><X className="size-4" /></span>
      </div>

      <p className="mt-4 text-center text-[24px] font-extrabold leading-tight tracking-tight">
        Unlock More. Go Premium
      </p>
      <p className="mt-2 text-center text-[11px] leading-snug text-muted-foreground">
        Unlock exclusive perks with a faster, smoother gaming experience.
      </p>

      {/* Monthly / Yearly toggle */}
      <div className="mt-3 flex justify-center gap-2">
        <span className="rounded-full bg-blue-600 px-4 py-1.5 text-[11px] font-semibold text-white">Monthly</span>
        <span className="rounded-full px-4 py-1.5 text-[11px] font-medium text-muted-foreground">Yearly</span>
      </div>

      {/* Plan card */}
      <div className="mt-4 rounded-2xl border-2 border-blue-300 bg-blue-50/50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
        <p className="text-[20px] font-extrabold">$18.99 <span className="text-[12px] font-medium text-muted-foreground">/month</span></p>
        <p className="mt-1 text-[11px] text-muted-foreground">Unlock Skliight Premium and take full control of your productivity.</p>
        <div className="my-3 flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="h-px flex-1 bg-border" /> Features <span className="h-px flex-1 bg-border" />
        </div>
        <div className="space-y-2">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-[11px]">
              <Sparkles className="size-3.5 text-blue-500" /> {f}
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-[13px] font-semibold text-white">
        Upgrade to Plan
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ Profile Settings (light) */
export function PhoneProfileSettings() {
  const account = [
    { i: <User className="size-4" />, l: "Personal Information" },
    { i: <Lock className="size-4" />, l: "Change Password" },
    { i: <MapPin className="size-4" />, l: "Delivery Address" },
  ];
  const general = [
    { i: <Calendar className="size-4" />, l: "Synced Calendars" },
    { i: <Settings className="size-4" />, l: "App Settings" },
    { i: <Bell className="size-4" />, l: "Activity" },
    { i: <UserPlus className="size-4" />, l: "Invite Others" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-background text-left text-foreground">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <span className="grid size-8 place-items-center rounded-full border"><ChevronLeft className="size-4" /></span>
        <p className="text-[15px] font-bold">Profile</p>
        <span className="grid size-8 place-items-center rounded-full border"><Pencil className="size-3.5" /></span>
      </div>

      {/* Profile */}
      <div className="mt-3 flex flex-col items-center">
        <div className="size-16 rounded-full bg-gradient-to-br from-amber-200 to-stone-400" />
        <p className="mt-2 text-[14px] font-bold">Marie T Wiedman</p>
        <p className="text-[10px] text-muted-foreground">marie@gmail.con</p>
      </div>

      {/* Account settings */}
      <p className="mt-4 px-5 text-[12px] font-bold">Account Setting</p>
      <div className="mt-1 px-5">
        {account.map((r) => (
          <div key={r.l} className="flex items-center gap-3 border-b py-3">
            <span className="text-muted-foreground">{r.i}</span>
            <span className="flex-1 text-[12px]">{r.l}</span>
          </div>
        ))}
      </div>

      {/* General settings */}
      <p className="mt-4 px-5 text-[12px] font-bold">General settings</p>
      <div className="mt-1 px-5">
        {general.map((r) => (
          <div key={r.l} className="flex items-center gap-3 border-b py-3">
            <span className="text-muted-foreground">{r.i}</span>
            <span className="flex-1 text-[12px]">{r.l}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav with FAB */}
      <div className="mt-auto flex items-center justify-around border-t px-4 py-2.5 text-muted-foreground">
        <Home className="size-5" />
        <Calendar className="size-5" />
        <FileText className="size-5" />
        <span className="grid size-9 place-items-center rounded-full bg-blue-600 text-white"><User className="size-4" /></span>
        <span className="grid size-9 place-items-center rounded-full border"><Plus className="size-4" /></span>
      </div>
    </div>
  );
}
