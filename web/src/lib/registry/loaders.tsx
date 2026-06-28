import { Loader2, RefreshCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Variant } from "./types";

export const loaders: Variant[] = [
  {
    id: "loader-spinner",
    name: "Spinner",
    category: "loaders",
    tags: ["animated"],
    code: `CircularProgressIndicator(strokeWidth = 2.dp)`,
    preview: <Loader2 className="size-8 animate-spin text-primary" />,
  },
  {
    id: "loader-ring",
    name: "Ring",
    category: "loaders",
    tags: ["animated"],
    code: `CircularProgressIndicator(
    modifier = Modifier.size(32.dp),
    color = MaterialTheme.colorScheme.primary,
    trackColor = MaterialTheme.colorScheme.surfaceVariant,
)`,
    preview: <div className="size-8 animate-spin rounded-full border-2 border-muted border-t-primary" />,
  },
  {
    id: "loader-dots",
    name: "Bouncing dots",
    category: "loaders",
    tags: ["animated"],
    code: `Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
    repeat(3) { i ->
        val y by rememberInfiniteTransition().animateFloat(
            0f, -8f, infiniteRepeatable(tween(400, delayMillis = i * 120), RepeatMode.Reverse),
        )
        Box(Modifier.offset(y = y.dp).size(10.dp).background(primary, CircleShape))
    }
}`,
    preview: (
      <div className="flex gap-1.5">
        <span className="size-2.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
        <span className="size-2.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
        <span className="size-2.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
      </div>
    ),
  },
  {
    id: "loader-bar",
    name: "Indeterminate bar",
    category: "loaders",
    tags: ["animated"],
    code: `LinearProgressIndicator(modifier = Modifier.width(160.dp))`,
    preview: (
      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-1/2 animate-[indeterminate_1.4s_infinite_linear] rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-progress",
    name: "Progress 65%",
    category: "loaders",
    code: `LinearProgressIndicator(progress = { 0.65f }, modifier = Modifier.width(160.dp))`,
    preview: (
      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-[65%] rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-skeleton",
    name: "Skeleton",
    category: "loaders",
    tags: ["animated"],
    code: `Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
    Box(Modifier.size(40.dp).clip(CircleShape).shimmer())
    Box(Modifier.height(12.dp).fillMaxWidth(0.8f).shimmer())
    Box(Modifier.height(12.dp).fillMaxWidth(0.5f).shimmer())
}`,
    preview: (
      <div className="flex w-44 items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
    ),
  },
  {
    id: "loader-shimmer",
    name: "Shimmer bar",
    category: "loaders",
    tags: ["animated"],
    code: `Box(Modifier.height(16.dp).width(160.dp).clip(RoundedCornerShape(8.dp)).shimmer())`,
    preview: (
      <div className="h-4 w-40 overflow-hidden rounded-md bg-[linear-gradient(90deg,var(--muted),var(--accent),var(--muted))] bg-[length:400px_100%] animate-[shimmer_1.6s_infinite_linear]" />
    ),
  },
  {
    id: "loader-gradient-ring",
    name: "Gradient ring",
    category: "loaders",
    tags: ["animated"],
    code: `// Conic-gradient ring spun with an infinite rotation
Box(Modifier.size(32.dp).rotating().drawWithCache { /* sweep gradient */ })`,
    preview: (
      <div
        className="size-8 animate-spin rounded-full"
        style={{
          background: "conic-gradient(from 0deg, transparent, #f59e0b)",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
        }}
      />
    ),
  },
  {
    id: "loader-dual-ring",
    name: "Dual ring",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "dual")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(900, easing = LinearEasing)),
    label = "angle",
)
Box(Modifier.size(32.dp), contentAlignment = Alignment.Center) {
    CircularProgressIndicator(
        modifier = Modifier.fillMaxSize().rotate(angle),
        color = Color(0xFF0EA5E9),
        strokeWidth = 2.dp,
    )
    CircularProgressIndicator(
        modifier = Modifier.fillMaxSize(0.62f).rotate(-angle),
        color = Color(0xFF38BDF8),
        strokeWidth = 2.dp,
    )
}`,
    preview: (
      <div className="relative size-9">
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-sky-500" />
        <span className="absolute inset-1.5 animate-[spin_0.8s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-sky-400" />
      </div>
    ),
  },
  {
    id: "loader-pulse-dots",
    name: "Pulse dots",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "pulse")
Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
    repeat(3) { i ->
        val alpha by t.animateFloat(
            initialValue = 0.3f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(600, delayMillis = i * 200),
                RepeatMode.Reverse,
            ),
            label = "alpha",
        )
        Box(
            Modifier
                .size(10.dp)
                .graphicsLayer { this.alpha = alpha }
                .background(Color(0xFF10B981), CircleShape),
        )
    }
}`,
    preview: (
      <div className="flex gap-1.5">
        <span className="size-2.5 animate-pulse rounded-full bg-emerald-500 [animation-delay:0ms]" />
        <span className="size-2.5 animate-pulse rounded-full bg-emerald-500 [animation-delay:200ms]" />
        <span className="size-2.5 animate-pulse rounded-full bg-emerald-500 [animation-delay:400ms]" />
      </div>
    ),
  },
  {
    id: "loader-ping",
    name: "Ping",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "ping")
val scale by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(1000, easing = LinearEasing)),
    label = "scale",
)
Box(Modifier.size(32.dp), contentAlignment = Alignment.Center) {
    Box(
        Modifier
            .size(28.dp)
            .scale(scale)
            .graphicsLayer { alpha = 1f - scale }
            .background(MaterialTheme.colorScheme.primary, CircleShape),
    )
    Box(Modifier.size(12.dp).background(MaterialTheme.colorScheme.primary, CircleShape))
}`,
    preview: (
      <div className="relative grid size-8 place-items-center">
        <span className="absolute size-6 animate-ping rounded-full bg-primary/40" />
        <span className="size-3 rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-ripple",
    name: "Ripple",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "ripple")
Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
    repeat(2) { i ->
        val p by t.animateFloat(
            initialValue = 0f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(1400, delayMillis = i * 700, easing = LinearEasing),
            ),
            label = "p",
        )
        Box(
            Modifier
                .size(40.dp)
                .scale(p)
                .border(2.dp, Color(0xFF0EA5E9).copy(alpha = 1f - p), CircleShape),
        )
    }
}`,
    preview: (
      <div className="relative grid size-10 place-items-center">
        <span className="absolute size-10 animate-ping rounded-full border-2 border-sky-500" />
        <span className="absolute size-10 animate-ping rounded-full border-2 border-sky-500 [animation-delay:-0.7s]" />
      </div>
    ),
  },
  {
    id: "loader-conic",
    name: "Conic spinner",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "conic")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(900, easing = LinearEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(32.dp).rotate(angle)) {
    drawArc(
        brush = Brush.sweepGradient(listOf(Color.Transparent, primary)),
        startAngle = 0f,
        sweepAngle = 360f,
        useCenter = false,
        style = Stroke(width = 3.dp.toPx(), cap = StrokeCap.Round),
    )
}`,
    preview: (
      <div
        className="size-8 animate-spin rounded-full"
        style={{
          background: "conic-gradient(from 0deg, transparent, var(--primary))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
        }}
      />
    ),
  },
  {
    id: "loader-bars",
    name: "Spinner bars",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "bars")
val head by t.animateFloat(
    initialValue = 0f,
    targetValue = 12f,
    animationSpec = infiniteRepeatable(tween(1000, easing = LinearEasing)),
    label = "head",
)
val color = MaterialTheme.colorScheme.onSurface
Canvas(Modifier.size(32.dp)) {
    val count = 12
    repeat(count) { i ->
        rotate(degrees = i * 30f) {
            val fade = ((i + head.toInt()) % count) / count.toFloat()
            drawRoundRect(
                color = color.copy(alpha = 0.2f + 0.8f * fade),
                topLeft = Offset(size.width / 2f - 1.5.dp.toPx(), 2.dp.toPx()),
                size = Size(3.dp.toPx(), 8.dp.toPx()),
                cornerRadius = CornerRadius(2.dp.toPx()),
            )
        }
    }
}`,
    preview: (
      <div className="relative size-8 animate-spin">
        {[...Array(12).keys()].map((i) => (
          <span
            key={i}
            className="absolute left-[calc(50%-1.5px)] top-0 h-2 w-[3px] rounded-full bg-foreground"
            style={{
              transformOrigin: "1.5px 16px",
              transform: `rotate(${i * 30}deg)`,
              opacity: (i + 1) / 12,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-grow-square",
    name: "Growing square",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "grow")
val scale by t.animateFloat(
    initialValue = 0.4f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(700), RepeatMode.Reverse),
    label = "scale",
)
Box(
    Modifier
        .size(28.dp)
        .scale(scale)
        .clip(RoundedCornerShape(6.dp))
        .background(Color(0xFFF59E0B)),
)`,
    preview: (
      <div className="relative grid size-8 place-items-center">
        <span className="absolute size-5 animate-ping rounded-sm bg-amber-500/50" />
        <span className="size-3 rounded-sm bg-amber-500" />
      </div>
    ),
  },
  {
    id: "loader-flip-square",
    name: "Flip square",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "flip")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1200, easing = FastOutSlowInEasing)),
    label = "angle",
)
Box(
    Modifier
        .size(28.dp)
        .rotate(angle)
        .clip(RoundedCornerShape(6.dp))
        .background(Brush.linearGradient(listOf(Color(0xFF38BDF8), Color(0xFF0284C7)))),
)`,
    preview: (
      <div className="size-7 animate-spin rounded-md bg-gradient-to-br from-sky-400 to-sky-600" />
    ),
  },
  {
    id: "loader-stripes",
    name: "Striped progress",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "stripes")
val shift by t.animateFloat(
    initialValue = 0f,
    targetValue = 28f,
    animationSpec = infiniteRepeatable(tween(500, easing = LinearEasing)),
    label = "shift",
)
val primary = MaterialTheme.colorScheme.primary
Box(
    Modifier
        .width(176.dp)
        .height(12.dp)
        .clip(RoundedCornerShape(50))
        .background(MaterialTheme.colorScheme.surfaceVariant),
) {
    Canvas(Modifier.fillMaxHeight().fillMaxWidth(0.66f)) {
        drawRect(primary)
        var x = -28f + shift
        while (x < size.width) {
            drawLine(
                color = Color.White.copy(alpha = 0.3f),
                start = Offset(x, size.height),
                end = Offset(x + 14f, 0f),
                strokeWidth = 8f,
            )
            x += 28f
        }
    }
}`,
    preview: (
      <div className="h-3 w-44 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full w-2/3 animate-[shimmer_10s_infinite_linear] rounded-full bg-primary"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0 10px, transparent 10px 20px)",
            backgroundSize: "400px 100%",
          }}
        />
      </div>
    ),
  },
  {
    id: "loader-wave",
    name: "Dots wave",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "wave")
Row(
    verticalAlignment = Alignment.Bottom,
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    repeat(5) { i ->
        val y by t.animateFloat(
            initialValue = 0f,
            targetValue = -10f,
            animationSpec = infiniteRepeatable(
                tween(500, delayMillis = i * 120),
                RepeatMode.Reverse,
            ),
            label = "y",
        )
        Box(
            Modifier
                .offset(y = y.dp)
                .size(8.dp)
                .background(MaterialTheme.colorScheme.primary, CircleShape),
        )
    }
}`,
    preview: (
      <div className="flex items-end gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="size-2 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-orbit",
    name: "Orbit",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "orbit")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1000, easing = LinearEasing)),
    label = "angle",
)
Box(Modifier.size(32.dp), contentAlignment = Alignment.Center) {
    Box(Modifier.size(8.dp).background(Color(0xFF10B981).copy(alpha = 0.4f), CircleShape))
    Box(Modifier.fillMaxSize().rotate(angle), contentAlignment = Alignment.TopCenter) {
        Box(Modifier.size(8.dp).background(Color(0xFF10B981), CircleShape))
    }
}`,
    preview: (
      <div className="relative grid size-8 place-items-center">
        <span className="size-2 rounded-full bg-emerald-500/40" />
        <div className="absolute inset-0 animate-spin">
          <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-emerald-500" />
        </div>
      </div>
    ),
  },
  {
    id: "loader-orbit-trio",
    name: "Orbit trio",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "trio")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1200, easing = LinearEasing)),
    label = "angle",
)
val color = Color(0xFF0EA5E9)
Canvas(Modifier.size(32.dp).rotate(angle)) {
    val r = size.minDimension / 2f - 6f
    repeat(3) { i ->
        val rad = Math.toRadians((i * 120).toDouble())
        drawCircle(
            color = color,
            radius = 4.dp.toPx(),
            center = center + Offset((r * cos(rad)).toFloat(), (r * sin(rad)).toFloat()),
        )
    }
}`,
    preview: (
      <div className="relative size-8 animate-spin">
        {[0, 120, 240].map((deg) => (
          <div key={deg} className="absolute inset-0" style={{ transform: `rotate(${deg}deg)` }}>
            <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-sky-500" />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "loader-skeleton-card",
    name: "Skeleton card",
    category: "loaders",
    tags: ["animated"],
    code: `Column(
    modifier = Modifier.width(176.dp),
    verticalArrangement = Arrangement.spacedBy(8.dp),
) {
    Box(Modifier.fillMaxWidth().height(64.dp).clip(RoundedCornerShape(8.dp)).shimmer())
    Box(Modifier.fillMaxWidth(0.8f).height(12.dp).clip(RoundedCornerShape(4.dp)).shimmer())
    Box(Modifier.fillMaxWidth(0.5f).height(12.dp).clip(RoundedCornerShape(4.dp)).shimmer())
}`,
    preview: (
      <div className="w-44 space-y-2">
        <Skeleton className="h-16 w-full rounded-md" />
        <Skeleton className="h-3 w-4/5" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    ),
  },
  {
    id: "loader-skeleton-text",
    name: "Skeleton text",
    category: "loaders",
    tags: ["animated"],
    code: `Column(
    modifier = Modifier.width(176.dp),
    verticalArrangement = Arrangement.spacedBy(8.dp),
) {
    repeat(3) { i ->
        Box(
            Modifier
                .fillMaxWidth(if (i == 2) 0.6f else 1f)
                .height(12.dp)
                .clip(RoundedCornerShape(4.dp))
                .shimmer(),
        )
    }
}`,
    preview: (
      <div className="w-44 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/5" />
      </div>
    ),
  },
  {
    id: "loader-determinate",
    name: "Determinate 40%",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "det")
val alpha by t.animateFloat(
    initialValue = 0.5f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(800), RepeatMode.Reverse),
    label = "alpha",
)
LinearProgressIndicator(
    progress = { 0.4f },
    modifier = Modifier.width(176.dp).graphicsLayer { this.alpha = alpha },
    color = Color(0xFF10B981),
    trackColor = MaterialTheme.colorScheme.surfaceVariant,
)`,
    preview: (
      <div className="h-2 w-44 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-2/5 animate-pulse rounded-full bg-emerald-500" />
      </div>
    ),
  },
  {
    id: "loader-progress-pulse",
    name: "Auto progress",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "auto")
val progress by t.animateFloat(
    initialValue = 0.08f,
    targetValue = 0.92f,
    animationSpec = infiniteRepeatable(
        tween(2000, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "progress",
)
LinearProgressIndicator(
    progress = { progress },
    modifier = Modifier.width(176.dp),
    color = MaterialTheme.colorScheme.primary,
    trackColor = MaterialTheme.colorScheme.surfaceVariant,
)`,
    preview: (
      <div className="h-1.5 w-44 overflow-hidden rounded-full bg-muted">
        <div className="h-full animate-[progress_2s_ease-in-out_infinite] rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-shimmer-card",
    name: "Shimmer card",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "shimmer")
val x by t.animateFloat(
    initialValue = -400f,
    targetValue = 400f,
    animationSpec = infiniteRepeatable(tween(1600, easing = LinearEasing)),
    label = "x",
)
val base = MaterialTheme.colorScheme.surfaceVariant
val highlight = MaterialTheme.colorScheme.surface
val brush = Brush.linearGradient(
    colors = listOf(base, highlight, base),
    start = Offset(x, 0f),
    end = Offset(x + 200f, 0f),
)
Column(
    modifier = Modifier.width(176.dp),
    verticalArrangement = Arrangement.spacedBy(8.dp),
) {
    Box(Modifier.fillMaxWidth().height(64.dp).clip(RoundedCornerShape(8.dp)).background(brush))
    Box(Modifier.fillMaxWidth(0.75f).height(12.dp).clip(RoundedCornerShape(4.dp)).background(brush))
}`,
    preview: (
      <div className="w-44 space-y-2">
        <div className="h-16 w-full overflow-hidden rounded-md bg-[linear-gradient(90deg,var(--muted),var(--accent),var(--muted))] bg-[length:400px_100%] animate-[shimmer_1.6s_infinite_linear]" />
        <div className="h-3 w-3/4 overflow-hidden rounded bg-[linear-gradient(90deg,var(--muted),var(--accent),var(--muted))] bg-[length:400px_100%] animate-[shimmer_1.6s_infinite_linear]" />
      </div>
    ),
  },
  {
    id: "loader-refresh",
    name: "Refresh",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "refresh")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1400, easing = LinearEasing)),
    label = "angle",
)
Icon(
    imageVector = Icons.Filled.Refresh,
    contentDescription = "Loading",
    tint = MaterialTheme.colorScheme.primary,
    modifier = Modifier.size(28.dp).rotate(angle),
)`,
    preview: <RefreshCw className="size-7 animate-spin text-primary" />,
  },
  {
    id: "loader-tri-color",
    name: "Tri-color rings",
    category: "loaders",
    tags: ["animated"],
    code: `Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
    CircularProgressIndicator(Modifier.size(20.dp), color = Color(0xFFF59E0B), strokeWidth = 2.dp)
    CircularProgressIndicator(Modifier.size(20.dp), color = Color(0xFF10B981), strokeWidth = 2.dp)
    CircularProgressIndicator(Modifier.size(20.dp), color = Color(0xFF0EA5E9), strokeWidth = 2.dp)
}`,
    preview: (
      <div className="flex gap-2">
        <span className="size-5 animate-spin rounded-full border-2 border-muted border-t-amber-500" />
        <span className="size-5 animate-[spin_0.7s_linear_infinite] rounded-full border-2 border-muted border-t-emerald-500" />
        <span className="size-5 animate-[spin_1.3s_linear_infinite] rounded-full border-2 border-muted border-t-sky-500" />
      </div>
    ),
  },
  {
    id: "loader-pulse-ring",
    name: "Pulse ring",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "pulsering")
val alpha by t.animateFloat(
    initialValue = 0.3f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(800), RepeatMode.Reverse),
    label = "alpha",
)
Box(
    Modifier
        .size(32.dp)
        .graphicsLayer { this.alpha = alpha }
        .border(4.dp, Color(0xFF0EA5E9), CircleShape),
)`,
    preview: <div className="size-8 animate-pulse rounded-full border-4 border-sky-500" />,
  },
  {
    id: "loader-typing",
    name: "Typing",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "typing")
Row(
    modifier = Modifier
        .clip(RoundedCornerShape(50))
        .background(MaterialTheme.colorScheme.surfaceVariant)
        .padding(horizontal = 12.dp, vertical = 8.dp),
    horizontalArrangement = Arrangement.spacedBy(4.dp),
    verticalAlignment = Alignment.CenterVertically,
) {
    repeat(3) { i ->
        val y by t.animateFloat(
            initialValue = 0f,
            targetValue = -5f,
            animationSpec = infiniteRepeatable(
                tween(400, delayMillis = i * 150),
                RepeatMode.Reverse,
            ),
            label = "y",
        )
        Box(
            Modifier
                .offset(y = y.dp)
                .size(6.dp)
                .background(MaterialTheme.colorScheme.onSurfaceVariant, CircleShape),
        )
    }
}`,
    preview: (
      <div className="flex items-center gap-1 rounded-full bg-muted px-3 py-2">
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0ms]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:150ms]" />
        <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:300ms]" />
      </div>
    ),
  },
  {
    id: "loader-double-bounce",
    name: "Double bounce",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "double")
val scale by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(
        tween(1000, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "scale",
)
Box(Modifier.size(32.dp)) {
    Box(
        Modifier
            .fillMaxSize()
            .scale(scale)
            .background(Color(0xFFF59E0B).copy(alpha = 0.6f), CircleShape),
    )
    Box(
        Modifier
            .fillMaxSize()
            .scale(1f - scale)
            .background(Color(0xFF10B981).copy(alpha = 0.6f), CircleShape),
    )
}`,
    preview: (
      <div className="relative size-8">
        <span className="absolute inset-0 animate-ping rounded-full bg-amber-500/60" />
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60 [animation-delay:-0.5s]" />
      </div>
    ),
  },
  {
    id: "loader-spinner-thick",
    name: "Thick arc",
    category: "loaders",
    tags: ["animated"],
    code: `CircularProgressIndicator(
    modifier = Modifier.size(32.dp),
    color = MaterialTheme.colorScheme.primary,
    strokeWidth = 4.dp,
    trackColor = Color.Transparent,
)`,
    preview: (
      <div className="size-8 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary" />
    ),
  },
  {
    id: "loader-dots-grid",
    name: "Dots grid",
    category: "loaders",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "grid")
Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
    repeat(3) { row ->
        Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
            repeat(3) { col ->
                val i = row * 3 + col
                val alpha by t.animateFloat(
                    initialValue = 0.2f,
                    targetValue = 1f,
                    animationSpec = infiniteRepeatable(
                        tween(600, delayMillis = i * 100),
                        RepeatMode.Reverse,
                    ),
                    label = "alpha",
                )
                Box(
                    Modifier
                        .size(8.dp)
                        .graphicsLayer { this.alpha = alpha }
                        .background(MaterialTheme.colorScheme.primary, CircleShape),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-cols-3 gap-1.5">
        {[...Array(9).keys()].map((i) => (
          <span
            key={i}
            className="size-2 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    ),
  },
];
