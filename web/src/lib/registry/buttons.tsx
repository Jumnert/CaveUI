import {
  ArrowRight,
  Bell,
  Check,
  Download,
  Heart,
  Loader2,
  Plus,
  Settings,
  Share2,
  ShoppingCart,
  Sparkles,
  Trash2,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/site/github-icon";
import { Button } from "@/components/ui/button";
import type { Variant } from "./types";

export const buttons: Variant[] = [
  {
    id: "button-primary",
    name: "Primary",
    category: "buttons",
    description: "The default high-emphasis action.",
    code: `Button(onClick = {}) {
    Text("Continue")
}`,
    preview: <Button>Continue</Button>,
  },
  {
    id: "button-secondary",
    name: "Secondary",
    category: "buttons",
    code: `FilledTonalButton(onClick = {}) {
    Text("Continue")
}`,
    preview: <Button variant="secondary">Continue</Button>,
  },
  {
    id: "button-outline",
    name: "Outline",
    category: "buttons",
    code: `OutlinedButton(onClick = {}) {
    Text("Continue")
}`,
    preview: <Button variant="outline">Continue</Button>,
  },
  {
    id: "button-ghost",
    name: "Ghost",
    category: "buttons",
    code: `TextButton(onClick = {}) {
    Text("Continue")
}`,
    preview: <Button variant="ghost">Continue</Button>,
  },
  {
    id: "button-icon-leading",
    name: "Icon + label",
    category: "buttons",
    code: `Button(onClick = {}) {
    Icon(Icons.Filled.Download, contentDescription = null, modifier = Modifier.size(18.dp))
    Spacer(Modifier.width(8.dp))
    Text("Download")
}`,
    preview: (
      <Button>
        <Download className="size-4" />
        Download
      </Button>
    ),
  },
  {
    id: "button-loading",
    name: "Loading",
    category: "buttons",
    description: "Spinner that also blocks input.",
    code: `Button(onClick = {}, enabled = false) {
    CircularProgressIndicator(
        modifier = Modifier.size(18.dp),
        strokeWidth = 2.dp,
        color = LocalContentColor.current,
    )
    Spacer(Modifier.width(8.dp))
    Text("Please wait")
}`,
    preview: (
      <Button disabled>
        <Loader2 className="size-4 animate-spin" />
        Please wait
      </Button>
    ),
  },
  {
    id: "button-success",
    name: "Success",
    category: "buttons",
    code: `Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF16A34A)),
) {
    Icon(Icons.Filled.Check, contentDescription = null, modifier = Modifier.size(18.dp))
    Spacer(Modifier.width(8.dp))
    Text("Saved")
}`,
    preview: (
      <Button className="bg-emerald-600 text-white hover:bg-emerald-600/90">
        <Check className="size-4" />
        Saved
      </Button>
    ),
  },
  {
    id: "button-gradient",
    name: "Gradient",
    category: "buttons",
    tags: ["animated"],
    code: `Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent),
    contentPadding = PaddingValues(0.dp),
) {
    Box(
        Modifier
            .background(Brush.horizontalGradient(listOf(Color(0xFFF59E0B), Color(0xFFEA580C))))
            .padding(horizontal = 24.dp, vertical = 10.dp),
        contentAlignment = Alignment.Center,
    ) { Text("Get caveui Pro") }
}`,
    preview: (
      <Button className="border-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-500 hover:to-orange-600">
        Get caveui Pro
      </Button>
    ),
  },
  {
    id: "button-github",
    name: "GitHub",
    category: "buttons",
    code: `OutlinedButton(onClick = {}) {
    Icon(Icons.Filled.Code, contentDescription = null, modifier = Modifier.size(18.dp))
    Spacer(Modifier.width(8.dp))
    Text("Continue with GitHub")
}`,
    preview: (
      <Button variant="outline">
        <GithubIcon className="size-4" />
        Continue with GitHub
      </Button>
    ),
  },
  {
    id: "button-shimmer",
    name: "Shimmer",
    category: "buttons",
    tags: ["animated"],
    code: `// Animated sheen sweeping across the button
Box(
    Modifier
        .clip(RoundedCornerShape(8.dp))
        .background(MaterialTheme.colorScheme.primary)
        .shimmer(),
) { Text("Shimmer", Modifier.padding(16.dp, 10.dp)) }`,
    preview: (
      <Button className="relative overflow-hidden">
        <span className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        Shimmer
      </Button>
    ),
  },
  {
    id: "button-arrow",
    name: "Arrow slide",
    category: "buttons",
    tags: ["animated"],
    code: `FilledTonalButton(onClick = {}) {
    Text("Learn more")
    Spacer(Modifier.width(8.dp))
    // Animate the offset on press for the slide effect.
    Icon(Icons.Filled.ArrowForward, contentDescription = null, modifier = Modifier.size(18.dp))
}`,
    preview: (
      <Button variant="secondary" className="group">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Button>
    ),
  },
  {
    id: "button-pill",
    name: "Pill",
    category: "buttons",
    code: `Button(onClick = {}, shape = RoundedCornerShape(50)) {
    Text("Follow")
}`,
    preview: <Button className="rounded-full px-6">Follow</Button>,
  },
  {
    id: "button-small",
    name: "Small",
    category: "buttons",
    description: "Compact size for dense toolbars.",
    code: `Button(
    onClick = {},
    contentPadding = PaddingValues(horizontal = 12.dp, vertical = 6.dp),
) {
    Text("Small", style = MaterialTheme.typography.labelMedium)
}`,
    preview: <Button size="sm">Small</Button>,
  },
  {
    id: "button-large",
    name: "Large",
    category: "buttons",
    description: "High-emphasis hero call to action.",
    code: `Button(
    onClick = {},
    contentPadding = PaddingValues(horizontal = 24.dp, vertical = 14.dp),
) {
    Text("Get started")
    Spacer(Modifier.width(8.dp))
    Icon(Icons.Filled.ArrowForward, contentDescription = null)
}`,
    preview: (
      <Button size="lg">
        Get started
        <ArrowRight className="size-4" />
      </Button>
    ),
  },
  {
    id: "button-icon-only",
    name: "Icon only",
    category: "buttons",
    description: "Square button for a single glyph.",
    code: `OutlinedIconButton(onClick = {}) {
    Icon(Icons.Filled.Settings, contentDescription = "Settings")
}`,
    preview: (
      <Button size="icon" variant="outline" aria-label="Settings">
        <Settings className="size-4" />
      </Button>
    ),
  },
  {
    id: "button-link",
    name: "Link",
    category: "buttons",
    tags: ["animated"],
    description: "Looks like an inline text link.",
    code: `TextButton(onClick = {}, contentPadding = PaddingValues(0.dp)) {
    Text("View docs")
    Spacer(Modifier.width(4.dp))
    Icon(Icons.Filled.ArrowForward, contentDescription = null, modifier = Modifier.size(16.dp))
}`,
    preview: (
      <Button variant="link" className="group px-0">
        View docs
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Button>
    ),
  },
  {
    id: "button-destructive",
    name: "Destructive",
    category: "buttons",
    description: "Irreversible or dangerous actions.",
    code: `Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(
        containerColor = MaterialTheme.colorScheme.error,
        contentColor = MaterialTheme.colorScheme.onError,
    ),
) {
    Icon(Icons.Filled.Delete, contentDescription = null, modifier = Modifier.size(18.dp))
    Spacer(Modifier.width(8.dp))
    Text("Delete")
}`,
    preview: (
      <Button variant="destructive">
        <Trash2 className="size-4" />
        Delete
      </Button>
    ),
  },
  {
    id: "button-soft",
    name: "Soft tinted",
    category: "buttons",
    description: "Low-emphasis tint of the brand color.",
    code: `Button(
    onClick = {},
    elevation = null,
    colors = ButtonDefaults.buttonColors(
        containerColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.1f),
        contentColor = MaterialTheme.colorScheme.primary,
    ),
) {
    Text("Upgrade")
}`,
    preview: (
      <Button className="bg-primary/10 text-primary shadow-none hover:bg-primary/20">
        Upgrade
      </Button>
    ),
  },
  {
    id: "button-dashed",
    name: "Dashed outline",
    category: "buttons",
    description: "Dashed border for add or placeholder actions.",
    code: `// Dashed stroke via a PathEffect on the border
OutlinedButton(
    onClick = {},
    border = BorderStroke(1.dp, MaterialTheme.colorScheme.outline),
) {
    Icon(Icons.Filled.Add, contentDescription = null)
    Spacer(Modifier.width(8.dp))
    Text("Add item")
}`,
    preview: (
      <Button variant="outline" className="border-dashed">
        <Plus className="size-4" />
        Add item
      </Button>
    ),
  },
  {
    id: "button-block",
    name: "Full width",
    category: "buttons",
    description: "Stretches to fill its container — great on mobile.",
    code: `Button(onClick = {}, modifier = Modifier.fillMaxWidth()) {
    Text("Continue")
}`,
    preview: (
      <div className="w-full max-w-[240px]">
        <Button className="w-full">Continue</Button>
      </div>
    ),
  },
  {
    id: "button-uppercase",
    name: "Uppercase",
    category: "buttons",
    description: "Tracked, all-caps label for a bold tone.",
    code: `Button(onClick = {}) {
    Text(
        "CHECKOUT",
        letterSpacing = 1.5.sp,
        fontWeight = FontWeight.SemiBold,
    )
}`,
    preview: (
      <Button className="text-xs font-semibold uppercase tracking-[0.15em]">
        Checkout
      </Button>
    ),
  },
  {
    id: "button-neon",
    name: "Neon",
    category: "buttons",
    tags: ["animated"],
    description: "Glowing ring that pulses with light.",
    code: `// Neon glow via a colored shadow + border
Button(
    onClick = {},
    border = BorderStroke(1.dp, Color(0xFF22D3EE)),
    colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent),
    modifier = Modifier.shadow(
        elevation = 16.dp,
        shape = RoundedCornerShape(8.dp),
        spotColor = Color(0xFF22D3EE),
    ),
) {
    Icon(Icons.Filled.Bolt, null, tint = Color(0xFF22D3EE))
    Spacer(Modifier.width(8.dp))
    Text("Power up", color = Color(0xFF22D3EE))
}`,
    preview: (
      <button
        type="button"
        className="inline-flex animate-pulse items-center gap-2 rounded-md border border-cyan-400 bg-transparent px-4 py-2 text-sm font-medium text-cyan-300 ring-1 ring-cyan-400/40 shadow-[0_0_14px_rgba(34,211,238,0.6)] transition-shadow hover:shadow-[0_0_22px_rgba(34,211,238,0.9)]"
      >
        <Zap className="size-4" />
        Power up
      </button>
    ),
  },
  {
    id: "button-pulse",
    name: "Pulse glow",
    category: "buttons",
    tags: ["animated"],
    description: "Breathing shadow that draws the eye.",
    code: `// Infinite alpha breathing on a glowing shadow
val alpha by rememberInfiniteTransition().animateFloat(
    initialValue = 0.5f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(900), RepeatMode.Reverse),
)
Button(
    onClick = {},
    modifier = Modifier
        .graphicsLayer { this.alpha = alpha }
        .shadow(12.dp, spotColor = MaterialTheme.colorScheme.primary),
) {
    Text("Live")
}`,
    preview: (
      <Button className="animate-pulse shadow-lg shadow-primary/50">
        <span className="size-2 rounded-full bg-white/90" />
        Live
      </Button>
    ),
  },
  {
    id: "button-loading-dots",
    name: "Loading dots",
    category: "buttons",
    tags: ["animated"],
    description: "Three bouncing dots in place of a spinner.",
    code: `// Sequenced dot bounce instead of a spinner
Button(onClick = {}, enabled = false) {
    Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
        repeat(3) { i ->
            val scale by rememberInfiniteTransition().animateFloat(
                initialValue = 0.4f,
                targetValue = 1f,
                animationSpec = infiniteRepeatable(
                    tween(600, delayMillis = i * 150),
                    RepeatMode.Reverse,
                ),
            )
            Box(
                Modifier
                    .size(6.dp)
                    .scale(scale)
                    .background(Color.White, CircleShape),
            )
        }
    }
}`,
    preview: (
      <Button disabled className="gap-1.5">
        <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
        <span className="size-1.5 animate-bounce rounded-full bg-current" />
      </Button>
    ),
  },
  {
    id: "button-badge",
    name: "Badge on button",
    category: "buttons",
    description: "Notification count anchored to the corner.",
    code: `Box {
    OutlinedIconButton(onClick = {}) {
        Icon(Icons.Filled.Notifications, contentDescription = "Notifications")
    }
    Badge(Modifier.align(Alignment.TopEnd)) { Text("3") }
}`,
    preview: (
      <div className="relative inline-flex">
        <Button variant="outline" size="icon" aria-label="Notifications">
          <Bell className="size-4" />
        </Button>
        <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
          3
        </span>
      </div>
    ),
  },
  {
    id: "button-cart",
    name: "Add to cart",
    category: "buttons",
    description: "Commerce action with a leading cart glyph.",
    code: `Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF4F46E5)),
) {
    Icon(Icons.Filled.ShoppingCart, contentDescription = null, modifier = Modifier.size(18.dp))
    Spacer(Modifier.width(8.dp))
    Text("Add to cart")
}`,
    preview: (
      <Button className="bg-indigo-600 text-white hover:bg-indigo-600/90">
        <ShoppingCart className="size-4" />
        Add to cart
      </Button>
    ),
  },
  {
    id: "button-favorite",
    name: "Favorite",
    category: "buttons",
    tags: ["animated"],
    description: "Heart that fills and grows on hover.",
    code: `OutlinedButton(
    onClick = {},
    colors = ButtonDefaults.outlinedButtonColors(contentColor = Color(0xFFE11D48)),
) {
    Icon(Icons.Filled.Favorite, contentDescription = null, modifier = Modifier.size(18.dp))
    Spacer(Modifier.width(8.dp))
    Text("Like")
}`,
    preview: (
      <Button variant="outline" className="group text-rose-600 hover:text-rose-600">
        <Heart className="size-4 transition-transform group-hover:scale-110 group-hover:fill-rose-600" />
        Like
      </Button>
    ),
  },
  {
    id: "button-share",
    name: "Share",
    category: "buttons",
    code: `FilledTonalButton(onClick = {}) {
    Icon(Icons.Filled.Share, contentDescription = null, modifier = Modifier.size(18.dp))
    Spacer(Modifier.width(8.dp))
    Text("Share")
}`,
    preview: (
      <Button variant="secondary">
        <Share2 className="size-4" />
        Share
      </Button>
    ),
  },
  {
    id: "button-3d",
    name: "3D press",
    category: "buttons",
    tags: ["animated"],
    description: "Tactile bottom edge that depresses on tap.",
    code: `// Bottom edge + press offset for a tactile 3D feel
val source = remember { MutableInteractionSource() }
val pressed by source.collectIsPressedAsState()
Button(
    onClick = {},
    interactionSource = source,
    modifier = Modifier.offset(y = if (pressed) 3.dp else 0.dp),
) {
    Text("Press me")
}`,
    preview: (
      <button
        type="button"
        className="rounded-md border-b-4 border-emerald-800 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 active:translate-y-0.5 active:border-b-2"
      >
        Press me
      </button>
    ),
  },
  {
    id: "button-sparkle",
    name: "AI sparkle",
    category: "buttons",
    tags: ["animated"],
    description: "Gradient action with a shimmering AI sparkle.",
    code: `Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent),
    modifier = Modifier.background(
        Brush.horizontalGradient(listOf(Color(0xFF8B5CF6), Color(0xFFEC4899))),
        RoundedCornerShape(8.dp),
    ),
) {
    Icon(Icons.Filled.AutoAwesome, null)
    Spacer(Modifier.width(8.dp))
    Text("Ask AI")
}`,
    preview: (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
      >
        <Sparkles className="size-4 animate-pulse" />
        Ask AI
      </button>
    ),
  },
];
