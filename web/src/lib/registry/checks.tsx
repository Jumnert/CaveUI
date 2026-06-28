import type { Variant } from "./types";

export const checks: Variant[] = [
  {
    id: "check-draw",
    name: "Draw check",
    category: "checks",
    description: "A checkbox whose tick strokes in as the box fills with color.",
    tags: ["animated"],
    code: `@Composable
fun DrawCheckbox(checked: Boolean, onCheckedChange: (Boolean) -> Unit) {
    val p by animateFloatAsState(
        targetValue = if (checked) 1f else 0f,
        animationSpec = tween(280, easing = EaseOutCubic),
        label = "check",
    )
    val accent = MaterialTheme.colorScheme.primary
    Box(
        modifier = Modifier
            .size(24.dp)
            .clip(RoundedCornerShape(6.dp))
            .border(2.dp, accent, RoundedCornerShape(6.dp))
            .clickable { onCheckedChange(!checked) },
    ) {
        Canvas(Modifier.fillMaxSize()) {
            drawRoundRect(accent.copy(alpha = p), cornerRadius = CornerRadius(6.dp.toPx()))
            val tick = Path().apply {
                moveTo(size.width * 0.24f, size.height * 0.52f)
                lineTo(size.width * 0.43f, size.height * 0.70f)
                lineTo(size.width * 0.76f, size.height * 0.30f)
            }
            val measure = PathMeasure().apply { setPath(tick, false) }
            val drawn = Path().also { measure.getSegment(0f, measure.length * p, it, true) }
            drawPath(
                path = drawn,
                color = Color.White,
                style = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round),
            )
        }
    }
}`,
    preview: (
      <span className="relative inline-flex size-9 items-center justify-center text-primary">
        <span className="absolute inset-1 rounded-md border-2 border-current" />
        <span
          className="absolute inset-1 rounded-md bg-current"
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
    ),
  },
  {
    id: "check-spring",
    name: "Spring check",
    category: "checks",
    description: "A checkbox that springs with a bouncy scale and a ripple ring when ticked.",
    tags: ["animated"],
    code: `@Composable
fun SpringCheckbox(checked: Boolean, onCheckedChange: (Boolean) -> Unit) {
    val scale by animateFloatAsState(
        targetValue = if (checked) 1f else 0.85f,
        animationSpec = spring(Spring.DampingRatioMediumBouncy, Spring.StiffnessMedium),
        label = "spring",
    )
    Checkbox(
        checked = checked,
        onCheckedChange = onCheckedChange,
        modifier = Modifier.scale(scale),
        colors = CheckboxDefaults.colors(checkedColor = MaterialTheme.colorScheme.primary),
    )
}`,
    preview: (
      <span className="relative inline-flex size-9 items-center justify-center">
        <span
          className="absolute size-7 rounded-md border-2 border-primary/60"
          style={{ animation: "icon-ring 1.6s ease-out infinite" }}
        />
        <span
          className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground"
          style={{ animation: "icon-pop 1.6s ease-in-out infinite" }}
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 l5 5 L19 7" />
          </svg>
        </span>
      </span>
    ),
  },
  {
    id: "check-card",
    name: "Selectable card",
    category: "checks",
    description: "An option card that lifts its border and reveals a corner check when selected.",
    tags: [],
    code: `@Composable
fun SelectableCard(selected: Boolean, onToggle: () -> Unit) {
    val border by animateColorAsState(
        if (selected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.outlineVariant,
        label = "border",
    )
    OutlinedCard(
        onClick = onToggle,
        border = BorderStroke(if (selected) 2.dp else 1.dp, border),
    ) {
        Box(Modifier.padding(16.dp)) {
            Text("Pro plan", style = MaterialTheme.typography.titleSmall)
            androidx.compose.animation.AnimatedVisibility(
                visible = selected,
                enter = scaleIn() + fadeIn(),
                exit = scaleOut() + fadeOut(),
                modifier = Modifier.align(Alignment.TopEnd),
            ) {
                Icon(Icons.Filled.CheckCircle, null, tint = MaterialTheme.colorScheme.primary)
            }
        }
    }
}`,
    preview: (
      <div className="relative w-40 rounded-xl border-2 border-primary bg-card p-3 text-left">
        <p className="text-xs font-semibold">Pro plan</p>
        <p className="mt-0.5 text-[10px] text-muted-foreground">$19 / month</p>
        <span
          className="absolute right-2 top-2 flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground"
          style={{ animation: "icon-crossfade-in 2s ease-in-out infinite alternate" }}
        >
          <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 l5 5 L19 7" />
          </svg>
        </span>
      </div>
    ),
  },
];
