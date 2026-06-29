import { AlertTriangle, Check, CheckCircle2, Inbox, RotateCcw, Star, WifiOff, X } from "lucide-react";
import type { Variant } from "./types";

export const feedback: Variant[] = [
  {
    id: "feedback-alert",
    name: "Inline alert",
    category: "feedback",
    description: "A tinted inline banner that pairs a status icon with a message.",
    tags: [],
    code: `@Composable
fun InlineAlert(message: String) {
    val accent = Color(0xFF16A34A)
    Surface(
        color = accent.copy(alpha = 0.12f),
        shape = MaterialTheme.shapes.medium,
    ) {
        Row(
            Modifier.padding(12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Icon(Icons.Filled.CheckCircle, contentDescription = null, tint = accent)
            Text(
                message,
                color = MaterialTheme.colorScheme.onSurface,
                style = MaterialTheme.typography.bodyMedium,
            )
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-2 rounded-lg bg-emerald-500/15 p-3">
        <CheckCircle2 className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
        <span className="text-xs font-medium text-foreground">Changes saved successfully.</span>
      </div>
    ),
  },
  {
    id: "feedback-snackbar",
    name: "Undo snackbar",
    category: "feedback",
    description: "A snackbar that slides up from the bottom with an undo action.",
    tags: ["animated"],
    code: `@Composable
fun UndoSnackbar(visible: Boolean, onUndo: () -> Unit) {
    AnimatedVisibility(
        visible = visible,
        enter = slideInVertically { it } + fadeIn(),
        exit = slideOutVertically { it } + fadeOut(),
    ) {
        Snackbar(
            action = {
                TextButton(onClick = onUndo) { Text("Undo") }
            },
        ) { Text("Message archived") }
    }
}`,
    preview: (
      <div className="flex w-56 items-center justify-between gap-3 rounded-xl bg-foreground px-4 py-3">
        <span className="text-xs text-background">Message archived</span>
        <span className="text-xs font-bold text-background underline underline-offset-2">
          Undo
        </span>
      </div>
    ),
  },
  {
    id: "feedback-progress",
    name: "Labeled progress",
    category: "feedback",
    description: "A linear progress bar with a caption and a live percentage.",
    tags: ["animated"],
    code: `@Composable
fun LabeledProgress(progress: Float) {
    Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
        Row(
            Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Text("Uploading", style = MaterialTheme.typography.labelLarge)
            Text(
                "\${(progress * 100).roundToInt()}%",
                style = MaterialTheme.typography.labelLarge,
            )
        }
        LinearProgressIndicator(
            progress = { progress },
            modifier = Modifier.fillMaxWidth(),
        )
    }
}`,
    preview: (
      <div className="w-56">
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="font-medium text-foreground">Uploading</span>
          <span className="text-muted-foreground">64%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[64%] rounded-full bg-primary" />
        </div>
      </div>
    ),
  },
  {
    id: "feedback-empty",
    name: "Empty state",
    category: "feedback",
    description: "A centered empty state with an icon, guidance and a primary action.",
    tags: [],
    code: `@Composable
fun EmptyState(onCreate: () -> Unit) {
    Column(
        Modifier.fillMaxWidth().padding(32.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Icon(
            Icons.Outlined.Inbox,
            contentDescription = null,
            modifier = Modifier.size(48.dp),
            tint = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Text("No messages yet", style = MaterialTheme.typography.titleMedium)
        Text(
            "Your inbox is empty. Start a conversation to see it here.",
            textAlign = TextAlign.Center,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            style = MaterialTheme.typography.bodyMedium,
        )
        Button(onClick = onCreate) { Text("New message") }
    }
}`,
    preview: (
      <div className="flex w-56 flex-col items-center gap-2 p-4 text-center">
        <Inbox className="size-9 text-muted-foreground" />
        <p className="text-sm font-semibold text-foreground">No messages yet</p>
        <p className="text-[11px] text-muted-foreground">
          Start a conversation to see it here.
        </p>
        <span className="mt-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
          New message
        </span>
      </div>
    ),
  },
  {
    id: "feedback-toast",
    name: "Toast",
    category: "feedback",
    description: "A floating toast that drops in from the top with an icon, message and dismiss.",
    tags: ["animated"],
    code: `@Composable
fun Toast(visible: Boolean, message: String, onDismiss: () -> Unit) {
    AnimatedVisibility(
        visible,
        enter = slideInVertically { -it } + fadeIn(),
        exit = slideOutVertically { -it } + fadeOut(),
    ) {
        Surface(
            shape = MaterialTheme.shapes.large,
            tonalElevation = 3.dp,
            shadowElevation = 6.dp,
            modifier = Modifier.fillMaxWidth(),
        ) {
            Row(
                Modifier.padding(12.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(Icons.Filled.CheckCircle, null, tint = Color(0xFF16A34A))
                Spacer(Modifier.width(10.dp))
                Text(message, Modifier.weight(1f),
                    style = MaterialTheme.typography.bodyMedium)
                IconButton(onClick = onDismiss) {
                    Icon(Icons.Filled.Close, "Dismiss", Modifier.size(18.dp))
                }
            }
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-2.5 rounded-2xl border bg-card p-3 shadow-md" style={{ animation: "fade-up 2.6s ease-in-out infinite alternate" }}>
        <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
        <span className="flex-1 text-xs font-medium text-foreground">Profile updated</span>
        <X className="size-3.5 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "feedback-skeleton",
    name: "Skeleton loader",
    category: "feedback",
    description: "A content-shaped placeholder with a shimmer sweep while data loads.",
    tags: ["animated"],
    code: `@Composable
fun SkeletonRow() {
    val shimmer by rememberInfiniteTransition(label = "sk").animateFloat(
        initialValue = 0f, targetValue = 1f,
        animationSpec = infiniteRepeatable(tween(1100)), label = "x",
    )
    fun Modifier.shimmer() = drawWithCache {
        val brush = Brush.linearGradient(
            colors = listOf(Color(0x22888888), Color(0x55888888), Color(0x22888888)),
            start = Offset(size.width * (shimmer - 0.3f), 0f),
            end = Offset(size.width * (shimmer + 0.3f), 0f),
        )
        onDrawBehind { drawRect(brush) }
    }
    Row(verticalAlignment = Alignment.CenterVertically) {
        Box(Modifier.size(40.dp).clip(CircleShape)
            .background(MaterialTheme.colorScheme.surfaceVariant).shimmer())
        Spacer(Modifier.width(12.dp))
        Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            Box(Modifier.height(10.dp).width(120.dp).clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant).shimmer())
            Box(Modifier.height(10.dp).width(80.dp).clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant).shimmer())
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-3">
        <div className="size-10 animate-pulse rounded-full bg-muted" />
        <div className="flex-1 space-y-2">
          <div className="h-2.5 w-3/4 animate-pulse rounded-full bg-muted" />
          <div className="h-2.5 w-1/2 animate-pulse rounded-full bg-muted" />
        </div>
      </div>
    ),
  },
  {
    id: "feedback-circular",
    name: "Circular progress",
    category: "feedback",
    description: "A determinate ring that animates its sweep with the percentage centered.",
    tags: ["animated"],
    code: `@Composable
fun CircularPercent(progress: Float) {
    val animated by animateFloatAsState(progress, tween(800), label = "cp")
    Box(Modifier.size(72.dp), contentAlignment = Alignment.Center) {
        Canvas(Modifier.fillMaxSize()) {
            val stroke = 7.dp.toPx()
            drawArc(Color.LightGray.copy(alpha = 0.3f), 0f, 360f, false,
                style = Stroke(stroke))
            drawArc(Color(0xFF6366F1), -90f, 360f * animated, false,
                style = Stroke(stroke, cap = StrokeCap.Round))
        }
        Text("\${(animated * 100).roundToInt()}%",
            style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
    }
}`,
    preview: (
      <div className="relative grid size-[72px] place-items-center">
        <svg viewBox="0 0 72 72" className="absolute size-full -rotate-90">
          <circle cx="36" cy="36" r="31" fill="none" strokeWidth="7" className="stroke-muted" />
          <circle cx="36" cy="36" r="31" fill="none" strokeWidth="7" strokeLinecap="round" strokeDasharray="195" strokeDashoffset="60" className="stroke-indigo-500" />
        </svg>
        <span className="text-sm font-bold text-foreground">69%</span>
      </div>
    ),
  },
  {
    id: "feedback-rating-prompt",
    name: "Rating prompt",
    category: "feedback",
    description: "A satisfaction card that fills the star row up to the hovered position.",
    tags: ["animated"],
    code: `@Composable
fun RatingPrompt(onRate: (Int) -> Unit) {
    var rating by remember { mutableStateOf(0) }
    Surface(shape = MaterialTheme.shapes.large, tonalElevation = 1.dp) {
        Column(
            Modifier.padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text("How was your experience?",
                style = MaterialTheme.typography.titleSmall)
            Row(Modifier.padding(top = 10.dp)) {
                (1..5).forEach { i ->
                    IconButton(onClick = { rating = i; onRate(i) }) {
                        Icon(
                            if (i <= rating) Icons.Filled.Star
                            else Icons.Filled.StarBorder,
                            contentDescription = "$i stars",
                            tint = Color(0xFFF59E0B),
                        )
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 rounded-2xl border bg-card p-4 text-center">
        <p className="text-xs font-semibold text-foreground">How was your experience?</p>
        <div className="mt-2 flex justify-center gap-1 text-amber-500">
          {[1, 2, 3, 4].map((i) => <Star key={i} className="size-6 fill-current" />)}
          <Star className="size-6 text-muted-foreground" />
        </div>
      </div>
    ),
  },
  {
    id: "feedback-warning-banner",
    name: "Warning banner",
    category: "feedback",
    description: "An amber banner that surfaces a caution with an action and a dismiss control.",
    tags: [],
    code: `@Composable
fun WarningBanner(message: String, onFix: () -> Unit, onDismiss: () -> Unit) {
    val amber = Color(0xFFD97706)
    Surface(color = amber.copy(alpha = 0.12f), shape = MaterialTheme.shapes.medium) {
        Row(Modifier.padding(12.dp), verticalAlignment = Alignment.CenterVertically) {
            Icon(Icons.Filled.WarningAmber, null, tint = amber)
            Spacer(Modifier.width(10.dp))
            Text(message, Modifier.weight(1f),
                style = MaterialTheme.typography.bodySmall)
            TextButton(onClick = onFix) { Text("Fix", color = amber) }
            IconButton(onClick = onDismiss) {
                Icon(Icons.Filled.Close, "Dismiss", Modifier.size(16.dp))
            }
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-2 rounded-lg bg-amber-500/15 p-2.5">
        <AlertTriangle className="size-4 shrink-0 text-amber-600 dark:text-amber-500" />
        <span className="flex-1 text-[11px] font-medium text-foreground">Card expires soon</span>
        <span className="text-[11px] font-bold text-amber-600 dark:text-amber-500">Fix</span>
        <X className="size-3.5 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "feedback-checklist",
    name: "Checklist progress",
    category: "feedback",
    description: "A setup checklist with a completion bar and ticked-off steps.",
    tags: ["animated"],
    code: `@Composable
fun ChecklistProgress(steps: List<Pair<String, Boolean>>) {
    val done = steps.count { it.second }
    val pct = done.toFloat() / steps.size
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Row(Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween) {
            Text("Get started", style = MaterialTheme.typography.titleSmall)
            Text("$done of \${steps.size}",
                style = MaterialTheme.typography.labelMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
        LinearProgressIndicator(progress = { pct }, modifier = Modifier.fillMaxWidth())
        steps.forEach { (label, complete) ->
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    if (complete) Icons.Filled.CheckCircle
                    else Icons.Outlined.RadioButtonUnchecked,
                    null, Modifier.size(18.dp),
                    tint = if (complete) Color(0xFF16A34A)
                        else MaterialTheme.colorScheme.outline,
                )
                Spacer(Modifier.width(8.dp))
                Text(label, style = MaterialTheme.typography.bodyMedium)
            }
        }
    }
}`,
    preview: (
      <div className="w-56">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-foreground">Get started</span>
          <span className="text-muted-foreground">2 of 3</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-2/3 rounded-full bg-primary" />
        </div>
        <div className="mt-2 space-y-1.5 text-[11px] text-foreground">
          <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" /> Verify email</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" /> Add a photo</div>
          <div className="flex items-center gap-2"><span className="size-4 rounded-full border-2 border-muted-foreground/40" /> Invite a teammate</div>
        </div>
      </div>
    ),
  },
  {
    id: "feedback-segments",
    name: "Segmented progress",
    category: "feedback",
    description: "A story-style segmented bar that fills the active segment across steps.",
    tags: ["animated"],
    code: `@Composable
fun SegmentedProgress(total: Int, current: Int, fill: Float) {
    Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        repeat(total) { i ->
            val amount = when {
                i < current -> 1f
                i == current -> fill
                else -> 0f
            }
            Box(
                Modifier.weight(1f).height(4.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.surfaceVariant),
            ) {
                Box(
                    Modifier.fillMaxHeight().fillMaxWidth(amount)
                        .clip(CircleShape)
                        .background(MaterialTheme.colorScheme.primary),
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex w-56 gap-1">
        <span className="h-1 flex-1 rounded-full bg-primary" />
        <span className="h-1 flex-1 overflow-hidden rounded-full bg-muted"><span className="block h-full w-1/2 rounded-full bg-primary" /></span>
        <span className="h-1 flex-1 rounded-full bg-muted" />
        <span className="h-1 flex-1 rounded-full bg-muted" />
      </div>
    ),
  },
];
