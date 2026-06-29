import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Bold,
  Bookmark,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Copy,
  CreditCard,
  Download,
  Filter,
  Fingerprint,
  Heart,
  Italic,
  Loader2,
  Mic,
  Minus,
  Pencil,
  Play,
  Plus,
  Settings,
  Share2,
  ShoppingCart,
  Smile,
  Sparkles,
  Star,
  ThumbsUp,
  Trash2,
  Underline,
  X,
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
    description: "Stretches to fill its container, great on mobile.",
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
  {
    id: "button-elevated",
    name: "Elevated",
    category: "buttons",
    description: "A low-emphasis button lifted off the surface by a soft shadow.",
    code: `ElevatedButton(
    onClick = {},
    elevation = ButtonDefaults.elevatedButtonElevation(
        defaultElevation = 3.dp,
        pressedElevation = 8.dp,
    ),
) {
    Text("Elevated")
}`,
    preview: (
      <Button className="bg-card text-foreground shadow-md hover:bg-card hover:shadow-lg">
        Elevated
      </Button>
    ),
  },
  {
    id: "button-tonal-icon",
    name: "Tonal Icon",
    category: "buttons",
    description: "A circular filled-tonal icon button for secondary glyph actions.",
    code: `FilledTonalIconButton(
    onClick = {},
    colors = IconButtonDefaults.filledTonalIconButtonColors(),
) {
    Icon(
        Icons.Filled.Notifications,
        contentDescription = "Alerts",
        modifier = Modifier.size(20.dp),
    )
}`,
    preview: (
      <Button
        size="icon"
        className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
        aria-label="Alerts"
      >
        <Bell className="size-4" />
      </Button>
    ),
  },
  {
    id: "button-fab",
    name: "FAB",
    category: "buttons",
    description: "The primary floating action button, a round, elevated accent action.",
    code: `FloatingActionButton(
    onClick = {},
    containerColor = MaterialTheme.colorScheme.primaryContainer,
    contentColor = MaterialTheme.colorScheme.onPrimaryContainer,
) {
    Icon(Icons.Filled.Add, contentDescription = "Create")
}`,
    preview: (
      <Button
        size="icon"
        className="size-14 rounded-2xl bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
        aria-label="Create"
      >
        <Plus className="size-6" />
      </Button>
    ),
  },
  {
    id: "button-fab-extended",
    name: "Extended FAB",
    category: "buttons",
    description: "A pill-shaped floating action button pairing an icon with a label.",
    code: `ExtendedFloatingActionButton(
    onClick = {},
    icon = { Icon(Icons.Filled.Edit, contentDescription = null) },
    text = { Text("Compose") },
    containerColor = MaterialTheme.colorScheme.tertiaryContainer,
)`,
    preview: (
      <Button className="h-12 gap-2 rounded-2xl px-5 shadow-lg">
        <Pencil className="size-5" />
        Compose
      </Button>
    ),
  },
  {
    id: "button-fab-small",
    name: "Small FAB",
    category: "buttons",
    description: "A compact floating action button for tighter, secondary surfaces.",
    code: `SmallFloatingActionButton(
    onClick = {},
    containerColor = MaterialTheme.colorScheme.secondaryContainer,
) {
    Icon(
        Icons.Filled.Add,
        contentDescription = "Add",
        modifier = Modifier.size(20.dp),
    )
}`,
    preview: (
      <Button
        size="icon"
        className="size-10 rounded-xl bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80"
        aria-label="Add"
      >
        <Plus className="size-5" />
      </Button>
    ),
  },
  {
    id: "button-speed-dial",
    name: "Speed Dial",
    category: "buttons",
    tags: ["animated"],
    description: "A FAB that fans out a stack of secondary actions when expanded.",
    code: `var open by remember { mutableStateOf(false) }
Column(horizontalAlignment = Alignment.CenterHorizontally) {
    AnimatedVisibility(open) {
        Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            SmallFloatingActionButton(onClick = {}) {
                Icon(Icons.Filled.PhotoCamera, contentDescription = "Camera")
            }
            SmallFloatingActionButton(onClick = {}) {
                Icon(Icons.Filled.Mic, contentDescription = "Voice")
            }
        }
    }
    Spacer(Modifier.height(12.dp))
    FloatingActionButton(onClick = { open = !open }) {
        Icon(Icons.Filled.Add, contentDescription = "More")
    }
}`,
    preview: (
      <div className="flex flex-col items-center gap-2.5">
        <Button
          size="icon"
          className="size-9 animate-[fade-up_0.3s_ease-out] rounded-full bg-secondary text-secondary-foreground shadow"
          aria-label="Camera"
        >
          <Camera className="size-4" />
        </Button>
        <Button
          size="icon"
          className="size-9 animate-[fade-up_0.4s_ease-out] rounded-full bg-secondary text-secondary-foreground shadow"
          aria-label="Voice"
        >
          <Mic className="size-4" />
        </Button>
        <Button
          size="icon"
          className="size-12 rounded-2xl bg-primary text-primary-foreground shadow-lg"
          aria-label="More"
        >
          <Plus className="size-6" />
        </Button>
      </div>
    ),
  },
  {
    id: "button-split",
    name: "Split",
    category: "buttons",
    description: "A primary action joined to a dropdown trigger by a thin divider.",
    code: `Row {
    Button(
        onClick = {},
        shape = RoundedCornerShape(
            topStart = 50f, bottomStart = 50f,
        ),
        contentPadding = PaddingValues(horizontal = 20.dp),
    ) { Text("Save") }
    Spacer(Modifier.width(1.dp))
    Button(
        onClick = {},
        shape = RoundedCornerShape(
            topEnd = 50f, bottomEnd = 50f,
        ),
        contentPadding = PaddingValues(horizontal = 10.dp),
    ) {
        Icon(Icons.Filled.ArrowDropDown, contentDescription = "More")
    }
}`,
    preview: (
      <div className="inline-flex items-center overflow-hidden rounded-full">
        <Button className="rounded-none rounded-l-full px-5">Save</Button>
        <span className="h-9 w-px bg-primary-foreground/30" />
        <Button className="rounded-none rounded-r-full px-2.5" aria-label="More">
          <ChevronDown className="size-4" />
        </Button>
      </div>
    ),
  },
  {
    id: "button-segmented",
    name: "Segmented",
    category: "buttons",
    description: "A single-select segmented control where the active option is filled.",
    code: `var selected by remember { mutableStateOf(0) }
SingleChoiceSegmentedButtonRow {
    listOf("Day", "Week", "Month").forEachIndexed { i, label ->
        SegmentedButton(
            selected = selected == i,
            onClick = { selected = i },
            shape = SegmentedButtonDefaults.itemShape(i, 3),
        ) { Text(label) }
    }
}`,
    preview: (
      <div className="inline-flex rounded-full border bg-card p-1 text-sm">
        <span className="rounded-full bg-primary px-3 py-1 font-medium text-primary-foreground">
          Day
        </span>
        <span className="px-3 py-1 text-muted-foreground">Week</span>
        <span className="px-3 py-1 text-muted-foreground">Month</span>
      </div>
    ),
  },
  {
    id: "button-toolbar",
    name: "Toolbar Group",
    category: "buttons",
    description: "A grouped row of icon toggles for inline text-formatting controls.",
    code: `Row(
    Modifier
        .clip(RoundedCornerShape(10.dp))
        .background(MaterialTheme.colorScheme.surfaceVariant),
) {
    listOf(
        Icons.Filled.FormatBold,
        Icons.Filled.FormatItalic,
        Icons.Filled.FormatUnderlined,
    ).forEach { icon ->
        IconButton(onClick = {}) {
            Icon(icon, contentDescription = null)
        }
    }
}`,
    preview: (
      <div className="inline-flex items-center gap-1 rounded-xl border bg-card p-1">
        <Button size="icon" variant="ghost" className="size-8 bg-accent" aria-label="Bold">
          <Bold className="size-4" />
        </Button>
        <Button size="icon" variant="ghost" className="size-8" aria-label="Italic">
          <Italic className="size-4" />
        </Button>
        <Button size="icon" variant="ghost" className="size-8" aria-label="Underline">
          <Underline className="size-4" />
        </Button>
      </div>
    ),
  },
  {
    id: "button-swipe",
    name: "Swipe to Confirm",
    category: "buttons",
    tags: ["animated"],
    description: "A draggable thumb that slides across a track to confirm an action.",
    code: `val width = 260.dp
val offset = remember { Animatable(0f) }
Box(
    Modifier
        .width(width)
        .height(52.dp)
        .clip(RoundedCornerShape(26.dp))
        .background(MaterialTheme.colorScheme.primaryContainer),
    contentAlignment = Alignment.CenterStart,
) {
    Text("Slide to pay", Modifier.align(Alignment.Center))
    Box(
        Modifier
            .offset { IntOffset(offset.value.toInt(), 0) }
            .padding(4.dp)
            .size(44.dp)
            .clip(CircleShape)
            .background(MaterialTheme.colorScheme.primary)
            .draggable(
                orientation = Orientation.Horizontal,
                state = rememberDraggableState { /* update offset */ },
            ),
        contentAlignment = Alignment.Center,
    ) {
        Icon(Icons.Filled.ChevronRight, contentDescription = "Confirm")
    }
}`,
    preview: (
      <div className="relative flex h-12 w-60 items-center rounded-full bg-secondary px-1">
        <span className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
          Slide to pay
        </span>
        <span className="z-10 flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
          <ChevronRight className="size-5" />
        </span>
      </div>
    ),
  },
  {
    id: "button-hold",
    name: "Hold to Confirm",
    category: "buttons",
    tags: ["animated"],
    description: "A press-and-hold button whose ring fills before the action fires.",
    code: `val progress = remember { Animatable(0f) }
val scope = rememberCoroutineScope()
Box(contentAlignment = Alignment.Center) {
    CircularProgressIndicator(
        progress = { progress.value },
        modifier = Modifier.size(64.dp),
        strokeWidth = 4.dp,
    )
    FilledIconButton(
        onClick = {},
        modifier = Modifier.pointerInput(Unit) {
            detectTapGestures(onPress = {
                scope.launch {
                    progress.animateTo(1f, tween(1200))
                }
            })
        },
    ) {
        Icon(Icons.Filled.Fingerprint, contentDescription = "Hold")
    }
}`,
    preview: (
      <div className="relative inline-flex items-center justify-center">
        <span className="absolute size-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
        <Button size="icon" className="size-12 rounded-full" aria-label="Hold to confirm">
          <Fingerprint className="size-5" />
        </Button>
      </div>
    ),
  },
  {
    id: "button-morph",
    name: "Morphing State",
    category: "buttons",
    tags: ["animated"],
    description: "A button that morphs from label to spinner to a success checkmark.",
    code: `var state by remember { mutableStateOf(0) }
Button(
    onClick = { state = 1 },
    colors = ButtonDefaults.buttonColors(
        containerColor = if (state == 2) Color(0xFF16A34A)
            else MaterialTheme.colorScheme.primary,
    ),
) {
    AnimatedContent(state, label = "morph") { s ->
        when (s) {
            0 -> Text("Submit")
            1 -> CircularProgressIndicator(
                Modifier.size(18.dp),
                strokeWidth = 2.dp,
                color = LocalContentColor.current,
            )
            else -> Icon(Icons.Filled.Check, contentDescription = "Done")
        }
    }
}`,
    preview: (
      <Button className="gap-2 bg-emerald-600 text-white hover:bg-emerald-600/90">
        <Check className="size-4 animate-[scale-in_0.3s_ease-out]" />
        Done
      </Button>
    ),
  },
  {
    id: "button-copy",
    name: "Copy",
    category: "buttons",
    tags: ["animated"],
    description: "A copy button that swaps its glyph to a checkmark after a tap.",
    code: `var copied by remember { mutableStateOf(false) }
OutlinedButton(onClick = { copied = true }) {
    AnimatedContent(copied, label = "copy") { done ->
        if (done) Icon(Icons.Filled.Check, contentDescription = "Copied")
        else Icon(Icons.Filled.ContentCopy, contentDescription = "Copy")
    }
    Spacer(Modifier.width(8.dp))
    Text(if (copied) "Copied" else "Copy")
}`,
    preview: (
      <Button variant="outline" className="gap-2">
        <Copy className="size-4" />
        Copy
      </Button>
    ),
  },
  {
    id: "button-download-progress",
    name: "Download Progress",
    category: "buttons",
    tags: ["animated"],
    description: "A download button with a fill bar that tracks transfer progress.",
    code: `val progress by animateFloatAsState(0.6f, label = "dl")
Box(
    Modifier
        .clip(RoundedCornerShape(10.dp))
        .background(MaterialTheme.colorScheme.surfaceVariant),
) {
    Box(
        Modifier
            .matchParentSize()
            .fillMaxWidth(progress)
            .background(MaterialTheme.colorScheme.primary),
    )
    Row(
        Modifier.padding(horizontal = 20.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(Icons.Filled.Download, contentDescription = null)
        Spacer(Modifier.width(8.dp))
        Text("Downloading 60%")
    }
}`,
    preview: (
      <div className="relative inline-flex overflow-hidden rounded-lg bg-secondary">
        <span className="absolute inset-y-0 left-0 w-[60%] bg-primary" />
        <span className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium">
          <Download className="size-4" />
          Downloading 60%
        </span>
      </div>
    ),
  },
  {
    id: "button-stepper",
    name: "Stepper",
    category: "buttons",
    description: "A numeric stepper pairing minus and plus controls around a value.",
    code: `var count by remember { mutableStateOf(1) }
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    FilledTonalIconButton(onClick = { count-- }) {
        Icon(Icons.Filled.Remove, contentDescription = "Less")
    }
    Text("$count", style = MaterialTheme.typography.titleMedium)
    FilledTonalIconButton(onClick = { count++ }) {
        Icon(Icons.Filled.Add, contentDescription = "More")
    }
}`,
    preview: (
      <div className="inline-flex items-center gap-2">
        <Button size="icon" variant="secondary" className="size-9 rounded-full" aria-label="Less">
          <Minus className="size-4" />
        </Button>
        <span className="w-6 text-center font-semibold tabular-nums">1</span>
        <Button size="icon" variant="secondary" className="size-9 rounded-full" aria-label="More">
          <Plus className="size-4" />
        </Button>
      </div>
    ),
  },
  {
    id: "button-rating",
    name: "Star Rating",
    category: "buttons",
    tags: ["animated"],
    description: "A row of star buttons that fill up to the selected rating value.",
    code: `var rating by remember { mutableStateOf(3) }
Row {
    repeat(5) { i ->
        IconButton(onClick = { rating = i + 1 }) {
            Icon(
                if (i < rating) Icons.Filled.Star
                else Icons.Outlined.StarBorder,
                contentDescription = "Star ${'$'}{i + 1}",
                tint = Color(0xFFF59E0B),
            )
        }
    }
}`,
    preview: (
      <div className="inline-flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={
              i < 3
                ? "size-6 fill-amber-400 text-amber-400"
                : "size-6 text-muted-foreground"
            }
          />
        ))}
      </div>
    ),
  },
  {
    id: "button-play-pause",
    name: "Play / Pause",
    category: "buttons",
    tags: ["animated"],
    description: "A circular transport button that toggles between play and pause icons.",
    code: `var playing by remember { mutableStateOf(false) }
FilledIconButton(
    onClick = { playing = !playing },
    modifier = Modifier.size(56.dp),
) {
    AnimatedContent(playing, label = "play") { on ->
        if (on) Icon(Icons.Filled.Pause, contentDescription = "Pause")
        else Icon(Icons.Filled.PlayArrow, contentDescription = "Play")
    }
}`,
    preview: (
      <Button
        size="icon"
        className="size-14 rounded-full bg-primary text-primary-foreground shadow-lg"
        aria-label="Play"
      >
        <Play className="size-6 fill-current" />
      </Button>
    ),
  },
  {
    id: "button-record",
    name: "Record",
    category: "buttons",
    tags: ["animated"],
    description: "A capture button whose pulsing dot signals an active recording.",
    code: `val scale by rememberInfiniteTransition().animateFloat(
    initialValue = 1f,
    targetValue = 1.2f,
    animationSpec = infiniteRepeatable(
        tween(800), RepeatMode.Reverse,
    ),
)
FilledIconButton(
    onClick = {},
    colors = IconButtonDefaults.filledIconButtonColors(
        containerColor = MaterialTheme.colorScheme.errorContainer,
    ),
) {
    Box(
        Modifier
            .size(16.dp)
            .scale(scale)
            .background(MaterialTheme.colorScheme.error, CircleShape),
    )
}`,
    preview: (
      <Button
        size="icon"
        className="size-12 rounded-full bg-red-500/15 hover:bg-red-500/25"
        aria-label="Record"
      >
        <CircleDot className="size-6 animate-pulse text-red-500" />
      </Button>
    ),
  },
  {
    id: "button-gradient-border",
    name: "Gradient Border",
    category: "buttons",
    tags: ["animated"],
    description: "A ghost button framed by an animated, sliding gradient border.",
    code: `Box(
    Modifier
        .background(
            Brush.linearGradient(
                listOf(Color(0xFF8B5CF6), Color(0xFF22D3EE)),
            ),
            RoundedCornerShape(10.dp),
        )
        .padding(1.5.dp),
) {
    Box(
        Modifier
            .clip(RoundedCornerShape(9.dp))
            .background(MaterialTheme.colorScheme.surface)
            .padding(horizontal = 20.dp, vertical = 10.dp),
    ) { Text("Explore") }
}`,
    preview: (
      <span className="inline-block rounded-lg bg-[linear-gradient(90deg,#8b5cf6,#22d3ee,#8b5cf6)] bg-[length:200%_100%] p-px animate-[gradient-shift_2s_linear_infinite]">
        <span className="block rounded-[7px] bg-card px-5 py-2 text-sm font-medium text-foreground">
          Explore
        </span>
      </span>
    ),
  },
  {
    id: "button-conic-glow",
    name: "Conic Glow",
    category: "buttons",
    tags: ["animated"],
    description: "A button wrapped by a rotating conic-gradient halo of light.",
    code: `val angle by rememberInfiniteTransition().animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(3000)),
)
Box(
    Modifier
        .drawBehind {
            rotate(angle) {
                drawCircle(
                    Brush.sweepGradient(
                        listOf(
                            Color(0xFFEC4899), Color(0xFF8B5CF6),
                            Color(0xFFEC4899),
                        ),
                    ),
                )
            }
        }
        .padding(2.dp),
) {
    Button(onClick = {}) {
        Icon(Icons.Filled.AutoAwesome, contentDescription = null)
        Spacer(Modifier.width(8.dp))
        Text("Generate")
    }
}`,
    preview: (
      <span className="relative inline-flex items-center justify-center rounded-full p-px">
        <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#ec4899,#8b5cf6,#ec4899)] animate-spin [animation-duration:3s]" />
        <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-card px-5 py-2 text-sm font-medium text-foreground">
          <Sparkles className="size-4" />
          Generate
        </span>
      </span>
    ),
  },
  {
    id: "button-glass",
    name: "Glass",
    category: "buttons",
    description: "A translucent glassmorphic button with a frosted, blurred backdrop.",
    code: `Box(
    Modifier
        .clip(RoundedCornerShape(14.dp))
        .background(Color.White.copy(alpha = 0.12f))
        .border(
            1.dp,
            Color.White.copy(alpha = 0.3f),
            RoundedCornerShape(14.dp),
        )
        .padding(horizontal = 22.dp, vertical = 12.dp),
) {
    Text("Continue", color = Color.White)
}`,
    preview: (
      <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-6">
        <button
          type="button"
          className="rounded-xl border border-white/30 bg-white/15 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
        >
          Continue
        </button>
      </div>
    ),
  },
  {
    id: "button-neumorph",
    name: "Neumorphic",
    category: "buttons",
    description: "A soft-UI button extruded from the surface with dual-tone shadows.",
    code: `Box(
    Modifier
        .shadow(6.dp, RoundedCornerShape(16.dp), spotColor = Color.Black)
        .clip(RoundedCornerShape(16.dp))
        .background(MaterialTheme.colorScheme.surfaceVariant)
        .padding(horizontal = 22.dp, vertical = 14.dp),
) {
    Icon(
        Icons.Filled.PlayArrow,
        contentDescription = "Play",
        tint = MaterialTheme.colorScheme.onSurfaceVariant,
    )
}`,
    preview: (
      <div className="rounded-2xl bg-secondary p-6">
        <button
          type="button"
          className="rounded-2xl bg-secondary p-4 text-secondary-foreground shadow-[6px_6px_12px_rgba(0,0,0,0.18),-6px_-6px_12px_rgba(255,255,255,0.12)] transition active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.18),inset_-4px_-4px_8px_rgba(255,255,255,0.12)]"
          aria-label="Play"
        >
          <Play className="size-5 fill-current" />
        </button>
      </div>
    ),
  },
  {
    id: "button-skew",
    name: "Skew",
    category: "buttons",
    description: "A slanted parallelogram button with a kinetic, italic-counter label.",
    code: `Box(
    Modifier
        .graphicsLayer { rotationZ = 0f; transformOrigin = TransformOrigin.Center }
        .clip(CutCornerShape(0.dp))
        .background(MaterialTheme.colorScheme.primary)
        .padding(horizontal = 26.dp, vertical = 12.dp),
) {
    Text(
        "Boost",
        color = MaterialTheme.colorScheme.onPrimary,
        fontStyle = FontStyle.Italic,
        fontWeight = FontWeight.Bold,
    )
}`,
    preview: (
      <button
        type="button"
        className="-skew-x-12 bg-primary px-7 py-2.5 text-sm font-bold text-primary-foreground transition hover:brightness-110"
      >
        <span className="inline-flex skew-x-12 items-center gap-2">
          <Zap className="size-4" />
          Boost
        </span>
      </button>
    ),
  },
  {
    id: "button-corner-cut",
    name: "Notched",
    category: "buttons",
    description: "An angular button with diagonally clipped corners for a techy edge.",
    code: `Button(
    onClick = {},
    shape = CutCornerShape(
        topStart = 10.dp,
        bottomEnd = 10.dp,
    ),
    colors = ButtonDefaults.buttonColors(
        containerColor = Color(0xFF0EA5E9),
    ),
) {
    Text("Deploy")
}`,
    preview: (
      <button
        type="button"
        className="bg-sky-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
      >
        Deploy
      </button>
    ),
  },
  {
    id: "button-flip",
    name: "Flip",
    category: "buttons",
    tags: ["animated"],
    description: "A button that rotates in 3D to reveal a confirmation on its back face.",
    code: `var flipped by remember { mutableStateOf(false) }
val rotation by animateFloatAsState(
    if (flipped) 180f else 0f,
    label = "flip",
)
Button(
    onClick = { flipped = !flipped },
    modifier = Modifier.graphicsLayer {
        rotationY = rotation
        cameraDistance = 12 * density
    },
) {
    if (rotation <= 90f) Text("Buy now")
    else Box(Modifier.graphicsLayer { rotationY = 180f }) {
        Text("Added")
    }
}`,
    preview: (
      <Button className="gap-2 [transform:perspective(400px)] transition-transform hover:[transform:perspective(400px)_rotateX(12deg)]">
        <ShoppingCart className="size-4" />
        Buy now
      </Button>
    ),
  },
  {
    id: "button-bookmark",
    name: "Bookmark",
    category: "buttons",
    tags: ["animated"],
    description: "A save toggle whose bookmark glyph fills when an item is stored.",
    code: `var saved by remember { mutableStateOf(false) }
FilledTonalButton(onClick = { saved = !saved }) {
    Icon(
        if (saved) Icons.Filled.Bookmark
        else Icons.Outlined.BookmarkBorder,
        contentDescription = null,
        modifier = Modifier.size(18.dp),
    )
    Spacer(Modifier.width(8.dp))
    Text(if (saved) "Saved" else "Save")
}`,
    preview: (
      <Button variant="secondary" className="group gap-2">
        <Bookmark className="size-4 transition group-hover:fill-current" />
        Save
      </Button>
    ),
  },
  {
    id: "button-subscribe",
    name: "Subscribe",
    category: "buttons",
    tags: ["animated"],
    description: "A subscribe button with a bell that rings on interaction.",
    code: `Button(
    onClick = {},
    colors = ButtonDefaults.buttonColors(
        containerColor = MaterialTheme.colorScheme.error,
    ),
) {
    Icon(
        Icons.Filled.Notifications,
        contentDescription = null,
        modifier = Modifier.size(18.dp),
    )
    Spacer(Modifier.width(8.dp))
    Text("Subscribe")
}`,
    preview: (
      <Button className="group gap-2 bg-red-600 text-white hover:bg-red-600/90">
        <Bell className="size-4 origin-top transition group-hover:animate-[float-y_0.5s_ease-in-out]" />
        Subscribe
      </Button>
    ),
  },
  {
    id: "button-voice",
    name: "Voice",
    category: "buttons",
    tags: ["animated"],
    description: "A microphone capture button ringed by an expanding listening pulse.",
    code: `FilledIconButton(
    onClick = {},
    modifier = Modifier.size(56.dp),
    colors = IconButtonDefaults.filledIconButtonColors(
        containerColor = MaterialTheme.colorScheme.primary,
    ),
) {
    Icon(
        Icons.Filled.Mic,
        contentDescription = "Record voice",
        modifier = Modifier.size(24.dp),
    )
}`,
    preview: (
      <span className="relative inline-flex">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
        <Button
          size="icon"
          className="relative size-14 rounded-full"
          aria-label="Record voice"
        >
          <Mic className="size-6" />
        </Button>
      </span>
    ),
  },
  {
    id: "button-emoji-bar",
    name: "Reaction Bar",
    category: "buttons",
    tags: ["animated"],
    description: "A floating row of reaction buttons that scale on hover like iMessage.",
    code: `Row(
    Modifier
        .clip(RoundedCornerShape(50))
        .background(MaterialTheme.colorScheme.surfaceVariant)
        .padding(horizontal = 8.dp, vertical = 4.dp),
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    listOf(
        Icons.Filled.ThumbUp,
        Icons.Filled.Favorite,
        Icons.Filled.EmojiEmotions,
    ).forEach { icon ->
        IconButton(onClick = {}) {
            Icon(icon, contentDescription = null)
        }
    }
}`,
    preview: (
      <div className="inline-flex items-center gap-1 rounded-full border bg-card p-1.5 shadow-md">
        {[ThumbsUp, Heart, Smile].map((Icon, i) => (
          <button
            key={i}
            type="button"
            className="rounded-full p-1.5 text-muted-foreground transition hover:scale-125 hover:bg-accent hover:text-foreground"
          >
            <Icon className="size-4" />
          </button>
        ))}
      </div>
    ),
  },
  {
    id: "button-countdown",
    name: "Countdown",
    category: "buttons",
    tags: ["animated"],
    description: "A resend button gated by a shrinking circular countdown indicator.",
    code: `var seconds by remember { mutableStateOf(5) }
LaunchedEffect(Unit) {
    while (seconds > 0) { delay(1000); seconds-- }
}
OutlinedButton(onClick = {}, enabled = seconds == 0) {
    if (seconds > 0) {
        CircularProgressIndicator(
            progress = { seconds / 5f },
            modifier = Modifier.size(16.dp),
            strokeWidth = 2.dp,
        )
        Spacer(Modifier.width(8.dp))
        Text("Resend in ${'$'}seconds" + "s")
    } else Text("Resend code")
}`,
    preview: (
      <Button variant="outline" disabled className="gap-2">
        <span className="size-4 rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground animate-spin" />
        Resend in 5s
      </Button>
    ),
  },
  {
    id: "button-progress-ring",
    name: "Progress Ring",
    category: "buttons",
    tags: ["animated"],
    description: "An icon button encircled by a determinate arc tracking task progress.",
    code: `val progress by animateFloatAsState(0.7f, label = "ring")
Box(contentAlignment = Alignment.Center) {
    CircularProgressIndicator(
        progress = { progress },
        modifier = Modifier.size(52.dp),
        strokeWidth = 3.dp,
        trackColor = MaterialTheme.colorScheme.surfaceVariant,
    )
    FilledIconButton(onClick = {}, modifier = Modifier.size(40.dp)) {
        Icon(Icons.Filled.Check, contentDescription = "Done")
    }
}`,
    preview: (
      <div className="relative inline-flex items-center justify-center">
        <svg className="size-14 -rotate-90" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="25" className="fill-none stroke-secondary" strokeWidth="3" />
          <circle
            cx="28"
            cy="28"
            r="25"
            className="fill-none stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="157"
            strokeDashoffset="47"
          />
        </svg>
        <Button
          size="icon"
          className="absolute size-9 rounded-full"
          aria-label="Done"
        >
          <Check className="size-4" />
        </Button>
      </div>
    ),
  },
  {
    id: "button-tag",
    name: "Removable Tag",
    category: "buttons",
    description: "An input chip carrying a label with a trailing dismiss control.",
    code: `InputChip(
    selected = false,
    onClick = {},
    label = { Text("Design") },
    trailingIcon = {
        Icon(
            Icons.Filled.Close,
            contentDescription = "Remove",
            modifier = Modifier.size(16.dp),
        )
    },
)`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full border bg-secondary py-1 pl-3 pr-1.5 text-sm text-secondary-foreground">
        Design
        <button
          type="button"
          className="rounded-full p-0.5 transition hover:bg-foreground/10"
          aria-label="Remove"
        >
          <X className="size-3.5" />
        </button>
      </span>
    ),
  },
  {
    id: "button-status",
    name: "Status",
    category: "buttons",
    tags: ["animated"],
    description: "A presence button with a live, pinging dot showing online status.",
    code: `OutlinedButton(onClick = {}) {
    Box(
        Modifier
            .size(8.dp)
            .background(Color(0xFF22C55E), CircleShape),
    )
    Spacer(Modifier.width(8.dp))
    Text("Online")
}`,
    preview: (
      <Button variant="outline" className="gap-2">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
        </span>
        Online
      </Button>
    ),
  },
  {
    id: "button-confirm-double",
    name: "Confirm Twice",
    category: "buttons",
    tags: ["animated"],
    description: "A destructive button that expands to a confirm state on first tap.",
    code: `var armed by remember { mutableStateOf(false) }
Button(
    onClick = { armed = !armed },
    colors = ButtonDefaults.buttonColors(
        containerColor = MaterialTheme.colorScheme.error,
    ),
) {
    Icon(Icons.Filled.Delete, contentDescription = null)
    AnimatedVisibility(armed) {
        Row {
            Spacer(Modifier.width(8.dp))
            Text("Tap to confirm")
        }
    }
}`,
    preview: (
      <Button variant="destructive" className="gap-2">
        <Trash2 className="size-4" />
        <span className="animate-[fade-in_0.3s_ease-out]">Tap to confirm</span>
      </Button>
    ),
  },
  {
    id: "button-icon-trailing",
    name: "Trailing Icon",
    category: "buttons",
    description: "A button with a trailing chevron that nudges forward on hover.",
    code: `Button(onClick = {}) {
    Text("Next step")
    Spacer(Modifier.width(8.dp))
    Icon(
        Icons.Filled.ChevronRight,
        contentDescription = null,
        modifier = Modifier.size(18.dp),
    )
}`,
    preview: (
      <Button className="group gap-1">
        Next step
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Button>
    ),
  },
  {
    id: "button-filter-chip",
    name: "Filter Chip",
    category: "buttons",
    description: "A selectable filter chip showing an active count in a trailing badge.",
    code: `var selected by remember { mutableStateOf(true) }
FilterChip(
    selected = selected,
    onClick = { selected = !selected },
    label = { Text("Filters") },
    leadingIcon = {
        Icon(
            Icons.Filled.FilterList,
            contentDescription = null,
            modifier = Modifier.size(18.dp),
        )
    },
)`,
    preview: (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-3 pr-2 text-sm font-medium text-primary-foreground"
      >
        <Filter className="size-4" />
        Filters
        <span className="rounded-full bg-primary-foreground/20 px-1.5 text-xs">2</span>
      </button>
    ),
  },
  {
    id: "button-back",
    name: "Back",
    category: "buttons",
    description: "A leading-chevron navigation button that recedes its arrow on hover.",
    code: `TextButton(onClick = {}) {
    Icon(
        Icons.Filled.ArrowBack,
        contentDescription = null,
        modifier = Modifier.size(18.dp),
    )
    Spacer(Modifier.width(6.dp))
    Text("Back")
}`,
    preview: (
      <Button variant="ghost" className="group gap-1.5">
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
        Back
      </Button>
    ),
  },
  {
    id: "button-pay",
    name: "Pay",
    category: "buttons",
    description: "A dark, full-width checkout button styled for wallet payments.",
    code: `Button(
    onClick = {},
    modifier = Modifier.fillMaxWidth(),
    colors = ButtonDefaults.buttonColors(
        containerColor = Color.Black,
        contentColor = Color.White,
    ),
    shape = RoundedCornerShape(12.dp),
) {
    Icon(Icons.Filled.CreditCard, contentDescription = null)
    Spacer(Modifier.width(8.dp))
    Text("Pay $48.00", fontWeight = FontWeight.SemiBold)
}`,
    preview: (
      <div className="w-full max-w-[240px]">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:opacity-90"
        >
          <CreditCard className="size-4" />
          Pay $48.00
        </button>
      </div>
    ),
  },
  {
    id: "button-underline",
    name: "Underline Grow",
    category: "buttons",
    tags: ["animated"],
    description: "A text button with an underline that sweeps in from the left.",
    code: `Box {
    TextButton(
        onClick = {},
        contentPadding = PaddingValues(0.dp),
    ) { Text("Read story") }
    // Animate width 0 -> full on hover/press
    Box(
        Modifier
            .align(Alignment.BottomStart)
            .height(2.dp)
            .fillMaxWidth()
            .background(MaterialTheme.colorScheme.primary),
    )
}`,
    preview: (
      <button
        type="button"
        className="group relative px-0 text-sm font-medium text-foreground"
      >
        Read story
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </button>
    ),
  },
  {
    id: "button-magnetic",
    name: "Magnetic",
    category: "buttons",
    tags: ["animated"],
    description: "A button whose label and arrow drift toward the cursor on hover.",
    code: `var offset by remember { mutableStateOf(Offset.Zero) }
Button(
    onClick = {},
    modifier = Modifier
        .offset { IntOffset(offset.x.toInt(), offset.y.toInt()) }
        .pointerInput(Unit) {
            detectDragGestures { _, drag ->
                offset += drag * 0.3f
            }
        },
) {
    Text("Drag me")
    Spacer(Modifier.width(8.dp))
    Icon(Icons.Filled.ArrowOutward, contentDescription = null)
}`,
    preview: (
      <Button className="group gap-2 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105">
        Drag me
        <ArrowRight className="size-4 -rotate-45 transition-transform group-hover:translate-x-0.5" />
      </Button>
    ),
  },
  {
    id: "button-toggle-pressed",
    name: "Toggle",
    category: "buttons",
    tags: ["animated"],
    description: "An icon toggle button that stays filled while in the selected state.",
    code: `var checked by remember { mutableStateOf(false) }
FilledIconToggleButton(
    checked = checked,
    onCheckedChange = { checked = it },
) {
    Icon(
        Icons.Filled.Check,
        contentDescription = if (checked) "On" else "Off",
    )
}`,
    preview: (
      <Button
        size="icon"
        className="rounded-xl bg-primary text-primary-foreground shadow-inner"
        aria-label="Toggle on"
      >
        <Check className="size-4 animate-[scale-in_0.2s_ease-out]" />
      </Button>
    ),
  },
  {
    id: "button-fab-menu",
    name: "FAB Menu",
    category: "buttons",
    tags: ["animated"],
    description: "A FAB whose plus icon rotates into a close icon when its menu opens.",
    code: `var open by remember { mutableStateOf(false) }
val rotation by animateFloatAsState(
    if (open) 135f else 0f,
    label = "fab",
)
FloatingActionButton(onClick = { open = !open }) {
    Icon(
        Icons.Filled.Add,
        contentDescription = if (open) "Close" else "Open",
        modifier = Modifier.graphicsLayer { rotationZ = rotation },
    )
}`,
    preview: (
      <Button
        size="icon"
        className="size-14 rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:rotate-[135deg]"
        aria-label="Open menu"
      >
        <Plus className="size-6" />
      </Button>
    ),
  },
  {
    id: "button-expand",
    name: "Expanding Action",
    category: "buttons",
    tags: ["animated"],
    description: "An icon button that widens to reveal its text label on hover.",
    code: `var expanded by remember { mutableStateOf(false) }
Button(
    onClick = {},
    modifier = Modifier.pointerInput(Unit) {
        detectTapGestures { expanded = !expanded }
    },
) {
    Icon(Icons.Filled.Add, contentDescription = null)
    AnimatedVisibility(expanded) {
        Row {
            Spacer(Modifier.width(8.dp))
            Text("New task")
        }
    }
}`,
    preview: (
      <Button className="group gap-0 transition-all">
        <Plus className="size-4" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[80px] group-hover:opacity-100">
          New task
        </span>
      </Button>
    ),
  },
  {
    id: "button-marquee",
    name: "Marquee Label",
    category: "buttons",
    tags: ["animated"],
    description: "A wide button whose long caption scrolls horizontally on a loop.",
    code: `Button(
    onClick = {},
    modifier = Modifier.width(160.dp),
    contentPadding = PaddingValues(vertical = 10.dp),
) {
    // basicMarquee scrolls overflowing text
    Text(
        "Limited offer, 50% off all plans this week",
        maxLines = 1,
        modifier = Modifier.basicMarquee(),
    )
}`,
    preview: (
      <Button className="w-40 overflow-hidden px-0">
        <span className="inline-block whitespace-nowrap animate-[marquee_6s_linear_infinite]">
          Limited offer, 50% off all plans this week&nbsp;&nbsp;
        </span>
      </Button>
    ),
  },
  {
    id: "button-ticket",
    name: "Ticket",
    category: "buttons",
    description: "A coupon-style button with notched sides and a dashed perforation.",
    code: `Box(
    Modifier
        .clip(RoundedCornerShape(10.dp))
        .background(MaterialTheme.colorScheme.primaryContainer)
        .padding(horizontal = 22.dp, vertical = 12.dp),
) {
    Text(
        "Redeem coupon",
        color = MaterialTheme.colorScheme.onPrimaryContainer,
        fontWeight = FontWeight.SemiBold,
    )
}`,
    preview: (
      <button
        type="button"
        className="relative rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:brightness-105"
      >
        <span className="absolute -left-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-card" />
        <span className="absolute -right-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-card" />
        Redeem coupon
      </button>
    ),
  },
];
