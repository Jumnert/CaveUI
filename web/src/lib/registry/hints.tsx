import { Check, Copy, Info, Link2 } from "lucide-react";
import type { Variant } from "./types";

export const hints: Variant[] = [
  {
    id: "hint-plain",
    name: "Plain tooltip",
    category: "hints",
    description: "A Material 3 plain tooltip that fades and scales in above its anchor.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PlainHint(text: String, content: @Composable () -> Unit) {
    TooltipBox(
        positionProvider = TooltipDefaults.rememberPlainTooltipPositionProvider(),
        tooltip = { PlainTooltip { Text(text) } },
        state = rememberTooltipState(),
    ) {
        content()
    }
}`,
    preview: (
      <div className="flex flex-col items-center gap-2">
        <span
          className="rounded-md bg-foreground px-2.5 py-1 text-[11px] font-medium text-background shadow"
          style={{ transformOrigin: "bottom", animation: "icon-crossfade-in 2.2s ease-in-out infinite alternate" }}
        >
          Copy link
        </span>
        <span className="flex size-8 items-center justify-center rounded-md border bg-card text-muted-foreground">
          <Link2 className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "hint-caret",
    name: "Caret tooltip",
    category: "hints",
    description: "A dark tooltip with a pointing caret that springs up from its anchor.",
    tags: ["animated"],
    code: `@Composable
fun CaretTooltip(text: String) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Surface(
            color = MaterialTheme.colorScheme.inverseSurface,
            contentColor = MaterialTheme.colorScheme.inverseOnSurface,
            shape = RoundedCornerShape(8.dp),
            shadowElevation = 3.dp,
        ) {
            Text(
                text,
                Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                style = MaterialTheme.typography.labelMedium,
            )
        }
        Canvas(Modifier.size(12.dp, 6.dp)) {
            val path = Path().apply {
                moveTo(0f, 0f); lineTo(size.width, 0f)
                lineTo(size.width / 2, size.height); close()
            }
            drawPath(path, color = Color(0xFF1C1B1F))
        }
    }
}`,
    preview: (
      <div className="flex flex-col items-center" style={{ animation: "fade-up 2.4s ease-in-out infinite alternate" }}>
        <span className="rounded-lg bg-foreground px-2.5 py-1.5 text-[11px] font-medium text-background shadow">
          Save to library
        </span>
        <span className="-mt-px size-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-foreground" />
      </div>
    ),
  },
  {
    id: "hint-copied",
    name: "Copy confirm",
    category: "hints",
    description: "A copy control that swaps its label to a confirmation with a check on tap.",
    tags: ["animated"],
    code: `@Composable
fun CopyConfirm(value: String) {
    val clipboard = LocalClipboardManager.current
    var copied by remember { mutableStateOf(false) }
    LaunchedEffect(copied) {
        if (copied) { delay(1500); copied = false }
    }
    FilledTonalButton(
        onClick = {
            clipboard.setText(AnnotatedString(value))
            copied = true
        },
        shape = RoundedCornerShape(10.dp),
    ) {
        AnimatedContent(targetState = copied, label = "copy") { done ->
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    if (done) Icons.Filled.Check else Icons.Filled.ContentCopy,
                    contentDescription = null,
                    modifier = Modifier.size(16.dp),
                    tint = if (done) Color(0xFF16A34A) else LocalContentColor.current,
                )
                Spacer(Modifier.width(6.dp))
                Text(if (done) "Copied" else "Copy")
            }
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-[12px] font-medium text-secondary-foreground">
        <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
        Copied
      </div>
    ),
  },
  {
    id: "hint-coachmark",
    name: "Coachmark",
    category: "hints",
    description: "An onboarding callout with a title, body, step dots and a next action.",
    tags: [],
    code: `@Composable
fun Coachmark(step: Int, total: Int, title: String, body: String, onNext: () -> Unit) {
    val accent = Color(0xFF6366F1)
    Surface(
        shape = RoundedCornerShape(14.dp),
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 6.dp,
        modifier = Modifier.widthIn(max = 240.dp),
    ) {
        Column(Modifier.padding(14.dp)) {
            Text(title, style = MaterialTheme.typography.titleSmall)
            Text(
                body,
                Modifier.padding(top = 4.dp),
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
            Row(
                Modifier.fillMaxWidth().padding(top = 12.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                    repeat(total) { i ->
                        Box(
                            Modifier.size(if (i == step) 18.dp else 6.dp, 6.dp)
                                .clip(CircleShape)
                                .background(if (i == step) accent
                                    else MaterialTheme.colorScheme.outlineVariant),
                        )
                    }
                }
                FilledTonalButton(
                    onClick = onNext,
                    contentPadding = PaddingValues(horizontal = 14.dp, vertical = 4.dp),
                ) { Text("Next") }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 rounded-2xl border bg-card p-3.5 shadow-md">
        <p className="text-xs font-semibold">Filters live here</p>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
          Narrow results by date, type or owner without leaving the page.
        </p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-4 rounded-full bg-indigo-500" />
            <span className="size-1.5 rounded-full bg-muted-foreground/30" />
            <span className="size-1.5 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="rounded-md bg-secondary px-3 py-1 text-[11px] font-semibold">Next</span>
        </div>
      </div>
    ),
  },
  {
    id: "hint-reactions",
    name: "Reaction bar",
    category: "hints",
    description: "A popover of emoji reactions that pop in one after another on open.",
    tags: ["animated"],
    code: `@Composable
fun ReactionBar(onReact: (String) -> Unit) {
    val reactions = listOf("\uD83D\uDC4D", "\u2764\uFE0F", "\uD83D\uDE02", "\uD83D\uDE2E", "\uD83D\uDE22")
    Surface(
        shape = CircleShape,
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 6.dp,
    ) {
        Row(
            Modifier.padding(horizontal = 8.dp, vertical = 6.dp),
            horizontalArrangement = Arrangement.spacedBy(6.dp),
        ) {
            reactions.forEachIndexed { i, emoji ->
                val scale = remember { Animatable(0f) }
                LaunchedEffect(Unit) {
                    delay(i * 60L)
                    scale.animateTo(1f, spring(Spring.DampingRatioMediumBouncy))
                }
                Text(
                    emoji,
                    Modifier
                        .graphicsLayer { scaleX = scale.value; scaleY = scale.value }
                        .clickable { onReact(emoji) },
                    fontSize = 22.sp,
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex gap-1.5 rounded-full border bg-card px-2.5 py-1.5 shadow-md">
        {["👍", "❤️", "😂", "😮", "😢"].map((e, i) => (
          <span
            key={e}
            className="text-lg"
            style={{ animation: "badge-stamp 2.6s ease-in-out infinite", animationDelay: `${i * 0.12}s` }}
          >
            {e}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "hint-info-popover",
    name: "Info popover",
    category: "hints",
    description: "An info icon that reveals a dismissible explanation card anchored beside it.",
    tags: [],
    code: `@Composable
fun InfoPopover(text: String) {
    var open by remember { mutableStateOf(false) }
    Box {
        IconButton(onClick = { open = true }) {
            Icon(Icons.Outlined.Info, contentDescription = "More info")
        }
        if (open) {
            Popup(
                alignment = Alignment.TopStart,
                offset = IntOffset(0, 96),
                onDismissRequest = { open = false },
            ) {
                Surface(
                    shape = RoundedCornerShape(12.dp),
                    shadowElevation = 6.dp,
                    modifier = Modifier.widthIn(max = 220.dp),
                ) {
                    Text(
                        text,
                        Modifier.padding(12.dp),
                        style = MaterialTheme.typography.bodySmall,
                    )
                }
            }
        }
    }
}`,
    preview: (
      <div className="flex items-start gap-2">
        <span className="mt-1 grid size-6 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <Info className="size-3.5" />
        </span>
        <div className="w-44 rounded-xl border bg-card p-3 text-[11px] leading-snug text-muted-foreground shadow-sm">
          Your API key is stored encrypted and never shared with third parties.
        </div>
      </div>
    ),
  },
  {
    id: "hint-beacon",
    name: "Pulse beacon",
    category: "hints",
    description: "A pulsing beacon dot tied to a short callout that draws the eye to a new feature.",
    tags: ["animated"],
    code: `@Composable
fun Beacon(label: String) {
    val alpha by rememberInfiniteTransition(label = "beacon").animateFloat(
        initialValue = 0.6f, targetValue = 0f,
        animationSpec = infiniteRepeatable(tween(1300)), label = "a",
    )
    val scale by rememberInfiniteTransition(label = "beacon2").animateFloat(
        initialValue = 0.6f, targetValue = 2f,
        animationSpec = infiniteRepeatable(tween(1300)), label = "s",
    )
    Row(verticalAlignment = Alignment.CenterVertically) {
        Box(contentAlignment = Alignment.Center) {
            Box(
                Modifier.size(12.dp)
                    .graphicsLayer { scaleX = scale; scaleY = scale; this.alpha = alpha }
                    .clip(CircleShape).background(Color(0xFF6366F1)),
            )
            Box(Modifier.size(10.dp).clip(CircleShape).background(Color(0xFF6366F1)))
        }
        Spacer(Modifier.width(8.dp))
        Text(label, style = MaterialTheme.typography.labelMedium)
    }
}`,
    preview: (
      <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 shadow-sm">
        <span className="relative grid place-items-center">
          <span className="absolute size-3 animate-ping rounded-full bg-indigo-500/60" />
          <span className="size-2.5 rounded-full bg-indigo-500" />
        </span>
        <span className="text-[11px] font-medium">New: AI summaries</span>
      </div>
    ),
  },
  {
    id: "hint-shortcut",
    name: "Shortcut keys",
    category: "hints",
    description: "A tooltip that pairs a label with styled keyboard key caps for a shortcut.",
    tags: [],
    code: `@Composable
fun ShortcutHint(label: String, keys: List<String>) {
    Surface(
        color = MaterialTheme.colorScheme.inverseSurface,
        contentColor = MaterialTheme.colorScheme.inverseOnSurface,
        shape = RoundedCornerShape(8.dp),
        shadowElevation = 3.dp,
    ) {
        Row(
            Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(label, style = MaterialTheme.typography.labelMedium)
            Spacer(Modifier.width(8.dp))
            keys.forEach { k ->
                Surface(
                    color = MaterialTheme.colorScheme.inverseOnSurface.copy(alpha = 0.15f),
                    shape = RoundedCornerShape(4.dp),
                ) {
                    Text(
                        k,
                        Modifier.padding(horizontal = 5.dp, vertical = 1.dp),
                        style = MaterialTheme.typography.labelSmall,
                    )
                }
                Spacer(Modifier.width(3.dp))
            }
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-2 rounded-lg bg-foreground px-2.5 py-1.5 text-background shadow">
        <span className="text-[11px] font-medium">Command palette</span>
        <kbd className="rounded bg-background/15 px-1.5 py-0.5 font-mono text-[10px]">⌘</kbd>
        <kbd className="rounded bg-background/15 px-1.5 py-0.5 font-mono text-[10px]">K</kbd>
      </div>
    ),
  },
  {
    id: "hint-confirm-popover",
    name: "Confirm popover",
    category: "hints",
    description: "A compact confirmation popover with cancel and a destructive confirm action.",
    tags: [],
    code: `@Composable
fun ConfirmPopover(onConfirm: () -> Unit, onCancel: () -> Unit) {
    Surface(
        shape = RoundedCornerShape(12.dp),
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 6.dp,
        modifier = Modifier.widthIn(max = 220.dp),
    ) {
        Column(Modifier.padding(14.dp)) {
            Text("Delete this item?", style = MaterialTheme.typography.titleSmall)
            Text(
                "This cannot be undone.",
                Modifier.padding(top = 2.dp),
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
            Row(
                Modifier.fillMaxWidth().padding(top = 12.dp),
                horizontalArrangement = Arrangement.End,
            ) {
                TextButton(onClick = onCancel) { Text("Cancel") }
                Spacer(Modifier.width(4.dp))
                Button(
                    onClick = onConfirm,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.error,
                    ),
                ) { Text("Delete") }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 rounded-2xl border bg-card p-3.5 shadow-md">
        <p className="text-xs font-semibold">Delete this item?</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">This cannot be undone.</p>
        <div className="mt-3 flex justify-end gap-2 text-[11px] font-semibold">
          <span className="px-2 py-1 text-muted-foreground">Cancel</span>
          <span className="rounded-md bg-destructive px-3 py-1 text-white">Delete</span>
        </div>
      </div>
    ),
  },
  {
    id: "hint-hovercard",
    name: "Profile hovercard",
    category: "hints",
    description: "A profile preview card with avatar, bio and a follow action revealed on hover.",
    tags: [],
    code: `@Composable
fun ProfileHovercard(name: String, handle: String, bio: String) {
    Surface(
        shape = RoundedCornerShape(16.dp),
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 6.dp,
        modifier = Modifier.widthIn(max = 240.dp),
    ) {
        Column(Modifier.padding(14.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Surface(shape = CircleShape, color = Color(0xFF8B5CF6),
                    modifier = Modifier.size(40.dp)) {}
                Spacer(Modifier.width(10.dp))
                Column(Modifier.weight(1f)) {
                    Text(name, style = MaterialTheme.typography.titleSmall)
                    Text(handle, style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant)
                }
                FilledTonalButton(
                    onClick = {},
                    contentPadding = PaddingValues(horizontal = 14.dp, vertical = 4.dp),
                ) { Text("Follow") }
            }
            Text(bio, Modifier.padding(top = 10.dp),
                style = MaterialTheme.typography.bodySmall)
        }
    }
}`,
    preview: (
      <div className="w-56 rounded-2xl border bg-card p-3.5 shadow-md">
        <div className="flex items-center gap-2.5">
          <span className="size-9 rounded-full bg-violet-500" />
          <div className="flex-1">
            <p className="text-xs font-semibold leading-none">Priya Anand</p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">@priya.codes</p>
          </div>
          <span className="rounded-md bg-secondary px-3 py-1 text-[10px] font-semibold">Follow</span>
        </div>
        <p className="mt-2.5 text-[11px] leading-snug text-muted-foreground">
          Android engineer. Building tools for designers who code.
        </p>
      </div>
    ),
  },
  {
    id: "hint-field-error",
    name: "Field hint",
    category: "hints",
    description: "Inline supporting text under a field that animates into an error state.",
    tags: ["animated"],
    code: `@Composable
fun FieldHint(value: String, onValueChange: (String) -> Unit) {
    val valid = value.contains("@")
    val showError = value.isNotEmpty() && !valid
    Column {
        OutlinedTextField(
            value = value,
            onValueChange = onValueChange,
            label = { Text("Email") },
            isError = showError,
            singleLine = true,
        )
        AnimatedVisibility(showError) {
            Text(
                "Enter a valid email address.",
                Modifier.padding(start = 16.dp, top = 4.dp),
                color = MaterialTheme.colorScheme.error,
                style = MaterialTheme.typography.labelSmall,
            )
        }
    }
}`,
    preview: (
      <div className="w-48 text-left">
        <div className="rounded-lg border border-destructive bg-card px-3 py-2 text-[12px] text-foreground">
          priya.codes
        </div>
        <p className="mt-1.5 pl-1 text-[10px] font-medium text-destructive">
          Enter a valid email address.
        </p>
      </div>
    ),
  },
];
