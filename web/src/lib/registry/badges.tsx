import { Bell, Check, CheckCircle, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Variant } from "./types";

export const badges: Variant[] = [
  {
    id: "badge-default",
    name: "Default",
    category: "badges",
    code: `CaveBadge(text = "Default")`,
    preview: <Badge>Default</Badge>,
  },
  {
    id: "badge-secondary",
    name: "Secondary",
    category: "badges",
    code: `CaveBadge(text = "Secondary", variant = CaveBadgeVariant.Secondary)`,
    preview: <Badge variant="secondary">Secondary</Badge>,
  },
  {
    id: "badge-outline",
    name: "Outline",
    category: "badges",
    code: `CaveBadge(text = "Outline", variant = CaveBadgeVariant.Outline)`,
    preview: <Badge variant="outline">Outline</Badge>,
  },
  {
    id: "badge-destructive",
    name: "Destructive",
    category: "badges",
    code: `CaveBadge(text = "Error", variant = CaveBadgeVariant.Destructive)`,
    preview: <Badge variant="destructive">Error</Badge>,
  },
  {
    id: "badge-soft-emerald",
    name: "Soft emerald",
    category: "badges",
    code: `CaveBadge(
    text = "Active",
    container = Color(0xFFD1FAE5),
    contentColor = Color(0xFF047857),
)`,
    preview: (
      <Badge className="border-0 bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
        Active
      </Badge>
    ),
  },
  {
    id: "badge-soft-sky",
    name: "Soft sky",
    category: "badges",
    code: `CaveBadge(
    text = "Info",
    container = Color(0xFFE0F2FE),
    contentColor = Color(0xFF0369A1),
)`,
    preview: (
      <Badge className="border-0 bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400">
        Info
      </Badge>
    ),
  },
  {
    id: "badge-soft-amber",
    name: "Soft amber",
    category: "badges",
    code: `CaveBadge(
    text = "Pending",
    container = Color(0xFFFEF3C7),
    contentColor = Color(0xFFB45309),
)`,
    preview: (
      <Badge className="border-0 bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
        Pending
      </Badge>
    ),
  },
  {
    id: "badge-soft-rose",
    name: "Soft rose",
    category: "badges",
    code: `CaveBadge(
    text = "Hot",
    container = Color(0xFFFFE4E6),
    contentColor = Color(0xFFBE123C),
)`,
    preview: (
      <Badge className="border-0 bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400">
        Hot
      </Badge>
    ),
  },
  {
    id: "badge-soft-violet",
    name: "Soft violet",
    category: "badges",
    code: `CaveBadge(
    text = "Premium",
    container = Color(0xFFEDE9FE),
    contentColor = Color(0xFF6D28D9),
)`,
    preview: (
      <Badge className="border-0 bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400">
        Premium
      </Badge>
    ),
  },
  {
    id: "badge-success",
    name: "Success",
    category: "badges",
    code: `CaveBadge(
    text = "Active",
    container = Color(0xFF16A34A),
    leadingIcon = Icons.Filled.Check,
)`,
    preview: (
      <Badge className="border-0 bg-emerald-600 text-white">
        <Check className="size-3" />
        Active
      </Badge>
    ),
  },
  {
    id: "badge-verified",
    name: "Verified",
    category: "badges",
    code: `CaveBadge(
    text = "Verified",
    container = Color(0xFF0EA5E9),
    contentColor = Color.White,
    leadingIcon = Icons.Filled.CheckCircle,
)`,
    preview: (
      <Badge className="border-0 bg-sky-500 text-white">
        <CheckCircle className="size-3" />
        Verified
      </Badge>
    ),
  },
  {
    id: "badge-beta",
    name: "Beta",
    category: "badges",
    code: `CaveBadge(
    text = "Beta",
    container = Color(0xFF6366F1),
    contentColor = Color.White,
    leadingIcon = Icons.Filled.Bolt,
)`,
    preview: (
      <Badge className="border-0 bg-indigo-500 text-white">
        <Zap className="size-3" />
        Beta
      </Badge>
    ),
  },
  {
    id: "badge-trending",
    name: "Trending",
    category: "badges",
    code: `CaveBadge(
    text = "Trending",
    variant = CaveBadgeVariant.Secondary,
    leadingIcon = Icons.Filled.TrendingUp,
)`,
    preview: (
      <Badge variant="secondary">
        <TrendingUp className="size-3" />
        Trending
      </Badge>
    ),
  },
  {
    id: "badge-dot",
    name: "Status dot",
    category: "badges",
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    Box(Modifier.size(8.dp).background(Color(0xFF16A34A), CircleShape))
    Spacer(Modifier.width(6.dp))
    Text("Online")
}`,
    preview: (
      <span className="inline-flex items-center gap-2 text-sm">
        <span className="size-2 rounded-full bg-emerald-500" />
        Online
      </span>
    ),
  },
  {
    id: "badge-dot-away",
    name: "Away dot",
    category: "badges",
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    Box(Modifier.size(8.dp).background(Color(0xFFF59E0B), CircleShape))
    Spacer(Modifier.width(6.dp))
    Text("Away")
}`,
    preview: (
      <span className="inline-flex items-center gap-2 text-sm">
        <span className="size-2 rounded-full bg-amber-500" />
        Away
      </span>
    ),
  },
  {
    id: "badge-dot-busy",
    name: "Busy dot",
    category: "badges",
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    Box(Modifier.size(8.dp).background(Color(0xFFEF4444), CircleShape))
    Spacer(Modifier.width(6.dp))
    Text("Busy")
}`,
    preview: (
      <span className="inline-flex items-center gap-2 text-sm">
        <span className="size-2 rounded-full bg-red-500" />
        Busy
      </span>
    ),
  },
  {
    id: "badge-count",
    name: "Count",
    category: "badges",
    code: `CaveBadge(text = "8", shape = CircleShape)`,
    preview: <Badge className="rounded-full px-2">8</Badge>,
  },
  {
    id: "badge-notification",
    name: "Notification",
    category: "badges",
    code: `// Count bubble pinned to the top-end of an icon
Box {
    Icon(Icons.Filled.Notifications, contentDescription = "Notifications")
    CaveBadge(
        text = "3",
        shape = CircleShape,
        container = Color(0xFFEF4444),
        contentColor = Color.White,
        modifier = Modifier
            .align(Alignment.TopEnd)
            .offset(x = 6.dp, y = (-6).dp),
    )
}`,
    preview: (
      <span className="relative inline-flex">
        <Bell className="size-6 text-foreground" />
        <span className="absolute -right-1 -top-1 flex size-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
          3
        </span>
      </span>
    ),
  },
  {
    id: "badge-gradient",
    name: "Gradient PRO",
    category: "badges",
    tags: ["animated"],
    code: `CaveBadge(
    text = "PRO",
    brush = Brush.horizontalGradient(listOf(Color(0xFFF59E0B), Color(0xFFEA580C))),
)`,
    preview: (
      <Badge className="border-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white">PRO</Badge>
    ),
  },
  {
    id: "badge-gradient-new",
    name: "Gradient NEW",
    category: "badges",
    code: `CaveBadge(
    text = "NEW",
    brush = Brush.horizontalGradient(listOf(Color(0xFFD946EF), Color(0xFF7C3AED))),
    leadingIcon = Icons.Filled.AutoAwesome,
)`,
    preview: (
      <Badge className="border-0 bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white">
        <Sparkles className="size-3" />
        NEW
      </Badge>
    ),
  },
  {
    id: "badge-new-pulse",
    name: "New (pulse)",
    category: "badges",
    tags: ["animated"],
    code: `// Pulsing attention badge
CaveBadge(text = "NEW", modifier = Modifier.pulse())`,
    preview: <Badge className="animate-pulse">NEW</Badge>,
  },
  {
    id: "badge-live-pulse",
    name: "Live (pulse)",
    category: "badges",
    tags: ["animated"],
    code: `// Live pill — the leading dot pulses
CaveBadge(
    text = "LIVE",
    container = Color(0x1AEF4444),
    contentColor = Color(0xFFDC2626),
    leadingContent = {
        Box(
            Modifier
                .size(6.dp)
                .background(Color(0xFFEF4444), CircleShape)
                .pulse(),
        )
    },
)`,
    preview: (
      <Badge className="border-0 bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-400">
        <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
        LIVE
      </Badge>
    ),
  },
  {
    id: "badge-live-ping",
    name: "Live (ping)",
    category: "badges",
    tags: ["animated"],
    code: `// Live pill — the leading dot emits a ping ring
CaveBadge(
    text = "LIVE",
    container = Color(0x1AEF4444),
    contentColor = Color(0xFFDC2626),
    leadingContent = {
        Box(Modifier.size(6.dp), contentAlignment = Alignment.Center) {
            Box(Modifier.matchParentSize().background(Color(0xFFEF4444), CircleShape).ping())
            Box(Modifier.size(6.dp).background(Color(0xFFEF4444), CircleShape))
        }
    },
)`,
    preview: (
      <Badge className="border-0 bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-400">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-red-500" />
        </span>
        LIVE
      </Badge>
    ),
  },
  {
    id: "badge-outline-dashed",
    name: "Outline dashed",
    category: "badges",
    code: `CaveBadge(
    text = "Draft",
    variant = CaveBadgeVariant.Outline,
    modifier = Modifier.dashedBorder(),
)`,
    preview: (
      <Badge variant="outline" className="border-dashed">
        Draft
      </Badge>
    ),
  },
  {
    id: "badge-large",
    name: "Large",
    category: "badges",
    code: `CaveBadge(text = "Large", size = CaveBadgeSize.Large)`,
    preview: <Badge className="h-7 px-3 text-sm">Large</Badge>,
  },
  {
    id: "badge-small",
    name: "Small",
    category: "badges",
    code: `CaveBadge(text = "Small", size = CaveBadgeSize.Small)`,
    preview: <Badge className="h-4 px-1.5 text-[10px]">Small</Badge>,
  },
];
