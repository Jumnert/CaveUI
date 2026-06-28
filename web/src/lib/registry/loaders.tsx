import { Heart } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Variant } from "./types";

export const loaders: Variant[] = [
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
  {
    id: "loader-equalizer",
    name: "Equalizer",
    category: "loaders",
    description: "Five vertical bars that scale up and down like an audio meter.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "eq")
Row(
    verticalAlignment = Alignment.Bottom,
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    repeat(5) { i ->
        val h by t.animateFloat(
            initialValue = 0.35f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(900, delayMillis = i * 120),
                RepeatMode.Reverse,
            ),
            label = "h",
        )
        Box(
            Modifier
                .width(6.dp)
                .height(28.dp)
                .graphicsLayer {
                    scaleY = h
                    transformOrigin = TransformOrigin(0.5f, 1f)
                }
                .background(MaterialTheme.colorScheme.primary, RoundedCornerShape(50)),
        )
    }
}`,
    preview: (
      <div className="flex h-8 items-end gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-full w-1.5 origin-bottom rounded-full bg-primary animate-[icon-eq_0.9s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-clock",
    name: "Clock",
    category: "loaders",
    description: "A bordered circle with a single hand sweeping a full rotation.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "clock")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(2000, easing = LinearEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
val track = MaterialTheme.colorScheme.surfaceVariant
Canvas(Modifier.size(32.dp)) {
    drawCircle(color = track, style = Stroke(width = 2.dp.toPx()))
    rotate(angle) {
        drawLine(
            color = primary,
            start = center,
            end = Offset(center.x, center.y - size.minDimension * 0.32f),
            strokeWidth = 2.dp.toPx(),
            cap = StrokeCap.Round,
        )
    }
}`,
    preview: (
      <div className="relative grid size-8 place-items-center rounded-full border-2 border-muted">
        <span
          className="absolute h-3 w-0.5 origin-bottom rounded-full bg-primary animate-[spin_2s_linear_infinite]"
          style={{ bottom: "50%" }}
        />
        <span className="size-1.5 rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-heartbeat",
    name: "Heartbeat",
    category: "loaders",
    description: "A heart icon that scales in a steady, lifelike pulse.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "beat")
val scale by t.animateFloat(
    initialValue = 0.85f,
    targetValue = 1.1f,
    animationSpec = infiniteRepeatable(
        tween(600, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "scale",
)
Icon(
    imageVector = Icons.Filled.Favorite,
    contentDescription = "Loading",
    tint = Color(0xFFF43F5E),
    modifier = Modifier.size(28.dp).scale(scale),
)`,
    preview: <Heart className="size-7 animate-pulse fill-rose-500 text-rose-500" />,
  },
  {
    id: "loader-comet",
    name: "Comet",
    category: "loaders",
    description: "A bright head dragging a fading tail around a circular track.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "comet")
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
        sweepAngle = 320f,
        useCenter = false,
        style = Stroke(width = 3.dp.toPx(), cap = StrokeCap.Round),
    )
    drawCircle(
        color = primary,
        radius = 2.dp.toPx(),
        center = Offset(size.width, size.height / 2f),
    )
}`,
    preview: (
      <div className="relative size-8 animate-spin">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 60%, var(--primary))",
            WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
          }}
        />
        <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-bouncing-ball",
    name: "Bouncing ball",
    category: "loaders",
    description: "A single ball bouncing over a soft shadow that pulses in time.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "ball")
val y by t.animateFloat(
    initialValue = 0f,
    targetValue = -16f,
    animationSpec = infiniteRepeatable(
        tween(450, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "y",
)
Column(
    horizontalAlignment = Alignment.CenterHorizontally,
    verticalArrangement = Arrangement.spacedBy(4.dp),
) {
    Box(
        Modifier
            .offset(y = y.dp)
            .size(16.dp)
            .background(MaterialTheme.colorScheme.primary, CircleShape),
    )
    Box(
        Modifier
            .width(16.dp)
            .height(4.dp)
            .background(MaterialTheme.colorScheme.surfaceVariant, CircleShape),
    )
}`,
    preview: (
      <div className="flex flex-col items-center gap-1">
        <span className="size-4 animate-bounce rounded-full bg-primary" />
        <span className="h-1 w-4 animate-pulse rounded-full bg-muted" />
      </div>
    ),
  },
  {
    id: "loader-folding-grid",
    name: "Folding grid",
    category: "loaders",
    description: "A two-by-two grid of squares fading in a clockwise sequence.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "fold")
val order = listOf(0, 1, 3, 2)
Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
    repeat(2) { row ->
        Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
            repeat(2) { col ->
                val i = order.indexOf(row * 2 + col)
                val alpha by t.animateFloat(
                    initialValue = 0.2f,
                    targetValue = 1f,
                    animationSpec = infiniteRepeatable(
                        tween(600, delayMillis = i * 150),
                        RepeatMode.Reverse,
                    ),
                    label = "alpha",
                )
                Box(
                    Modifier
                        .size(12.dp)
                        .graphicsLayer { this.alpha = alpha }
                        .background(MaterialTheme.colorScheme.primary, RoundedCornerShape(3.dp)),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-cols-2 gap-1">
        {[0, 1, 3, 2].map((d, i) => (
          <span
            key={i}
            className="size-3 animate-pulse rounded-sm bg-primary"
            style={{ animationDelay: `${d * 150}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-dot-spinner",
    name: "Dot spinner",
    category: "loaders",
    description: "Eight dots arranged in a ring, fading around as it rotates.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "dotspin")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1000, easing = LinearEasing)),
    label = "angle",
)
val color = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(32.dp).rotate(angle)) {
    val count = 8
    val r = size.minDimension / 2f - 3.dp.toPx()
    repeat(count) { i ->
        val rad = Math.toRadians((i * 360.0 / count))
        drawCircle(
            color = color.copy(alpha = (i + 1) / count.toFloat()),
            radius = 2.5.dp.toPx(),
            center = center + Offset((r * cos(rad)).toFloat(), (r * sin(rad)).toFloat()),
        )
    }
}`,
    preview: (
      <div className="relative size-8 animate-spin">
        {[...Array(8).keys()].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-full bg-primary"
            style={{
              transformOrigin: "1.5px 16px",
              transform: `rotate(${i * 45}deg)`,
              opacity: (i + 1) / 8,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-pendulum",
    name: "Pendulum",
    category: "loaders",
    description: "A weighted dot on a thread swinging back and forth from a pivot.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "pendulum")
val angle by t.animateFloat(
    initialValue = -16f,
    targetValue = 16f,
    animationSpec = infiniteRepeatable(
        tween(700, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "angle",
)
val thread = MaterialTheme.colorScheme.outline
val bob = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(32.dp)) {
    rotate(angle, pivot = Offset(size.width / 2f, 0f)) {
        drawLine(
            color = thread,
            start = Offset(size.width / 2f, 0f),
            end = Offset(size.width / 2f, size.height - 5.dp.toPx()),
            strokeWidth = 1.5.dp.toPx(),
        )
        drawCircle(
            color = bob,
            radius = 5.dp.toPx(),
            center = Offset(size.width / 2f, size.height - 5.dp.toPx()),
        )
    }
}`,
    preview: (
      <div className="flex h-8 w-8 justify-center">
        <div className="origin-top animate-[icon-swing_1.2s_ease-in-out_infinite]">
          <div className="mx-auto h-5 w-px bg-muted-foreground/50" />
          <div className="size-2.5 rounded-full bg-primary" />
        </div>
      </div>
    ),
  },
  {
    id: "loader-wifi",
    name: "Wifi",
    category: "loaders",
    description: "Concentric arcs rising from a dot like a broadcasting signal.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "wifi")
val color = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(32.dp)) {
    val dot = Offset(size.width / 2f, size.height)
    drawCircle(color = color, radius = 3.dp.toPx(), center = dot)
    repeat(2) { i ->
        val alpha by t.animateFloat(
            initialValue = 0.2f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(800, delayMillis = i * 250),
                RepeatMode.Reverse,
            ),
            label = "alpha",
        )
        val r = (i + 1) * 9.dp.toPx()
        drawArc(
            color = color.copy(alpha = alpha),
            startAngle = 200f,
            sweepAngle = 140f,
            useCenter = false,
            topLeft = Offset(dot.x - r, dot.y - r),
            size = Size(r * 2, r * 2),
            style = Stroke(width = 2.dp.toPx(), cap = StrokeCap.Round),
        )
    }
}`,
    preview: (
      <div className="relative grid size-8 place-items-end justify-items-center">
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="absolute bottom-0 size-4 animate-pulse rounded-t-full border-2 border-b-0 border-primary [animation-delay:150ms]" />
        <span className="absolute bottom-0 size-7 animate-pulse rounded-t-full border-2 border-b-0 border-primary [animation-delay:300ms]" />
      </div>
    ),
  },
  {
    id: "loader-dual-square",
    name: "Dual square",
    category: "loaders",
    description: "Two rounded squares rotating in opposite directions, nested.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "dualsq")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1400, easing = LinearEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
Box(Modifier.size(32.dp), contentAlignment = Alignment.Center) {
    Box(
        Modifier
            .fillMaxSize()
            .rotate(angle)
            .border(2.dp, primary, RoundedCornerShape(6.dp)),
    )
    Box(
        Modifier
            .fillMaxSize(0.6f)
            .rotate(-angle)
            .border(2.dp, primary.copy(alpha = 0.5f), RoundedCornerShape(4.dp)),
    )
}`,
    preview: (
      <div className="relative size-7">
        <span className="absolute inset-0 animate-spin rounded-md border-2 border-primary" />
        <span className="absolute inset-1.5 animate-[spin_1.5s_linear_infinite_reverse] rounded border-2 border-primary/50" />
      </div>
    ),
  },
  {
    id: "loader-gradient-bar",
    name: "Gradient bar",
    category: "loaders",
    description: "A track filled with a gradient that scrolls endlessly sideways.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "gradbar")
val shift by t.animateFloat(
    initialValue = 0f,
    targetValue = 200f,
    animationSpec = infiniteRepeatable(tween(1800, easing = LinearEasing)),
    label = "shift",
)
val c1 = MaterialTheme.colorScheme.primary
val c2 = MaterialTheme.colorScheme.tertiary
Box(
    Modifier
        .width(160.dp)
        .height(6.dp)
        .clip(RoundedCornerShape(50))
        .background(
            Brush.linearGradient(
                colors = listOf(c1, c2, c1),
                start = Offset(shift, 0f),
                end = Offset(shift + 200f, 0f),
                tileMode = TileMode.Mirror,
            ),
        ),
)`,
    preview: (
      <div className="h-1.5 w-40 overflow-hidden rounded-full">
        <div className="h-full w-full animate-[gradient-shift_2s_linear_infinite] rounded-full bg-[linear-gradient(90deg,var(--primary),var(--accent),var(--primary))] bg-[length:200%_100%]" />
      </div>
    ),
  },
  {
    id: "loader-dashed-ring",
    name: "Dashed ring",
    category: "loaders",
    description: "A dashed circular outline rotating at a steady pace.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "dashed")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1600, easing = LinearEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(32.dp).rotate(angle)) {
    drawCircle(
        color = primary,
        radius = size.minDimension / 2f - 1.dp.toPx(),
        style = Stroke(
            width = 2.dp.toPx(),
            pathEffect = PathEffect.dashPathEffect(floatArrayOf(8f, 8f)),
        ),
    )
}`,
    preview: <div className="size-8 animate-spin rounded-full border-2 border-dashed border-primary" />,
  },
  {
    id: "loader-text-dots",
    name: "Loading text",
    category: "loaders",
    description: "The word Loading followed by three dots bouncing in sequence.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "textdots")
Row(verticalAlignment = Alignment.Bottom) {
    Text("Loading", style = MaterialTheme.typography.bodyMedium)
    repeat(3) { i ->
        val y by t.animateFloat(
            initialValue = 0f,
            targetValue = -4f,
            animationSpec = infiniteRepeatable(
                tween(400, delayMillis = i * 150),
                RepeatMode.Reverse,
            ),
            label = "y",
        )
        Text(".", Modifier.offset(y = y.dp), style = MaterialTheme.typography.bodyMedium)
    }
}`,
    preview: (
      <div className="flex items-end gap-0.5 text-sm font-medium text-muted-foreground">
        <span>Loading</span>
        <span className="animate-bounce [animation-delay:0ms]">.</span>
        <span className="animate-bounce [animation-delay:150ms]">.</span>
        <span className="animate-bounce [animation-delay:300ms]">.</span>
      </div>
    ),
  },
  {
    id: "loader-segments",
    name: "Segmented bar",
    category: "loaders",
    description: "Three rounded segments that brighten in a left-to-right cycle.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "segments")
Row(
    modifier = Modifier.width(160.dp),
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    repeat(3) { i ->
        val alpha by t.animateFloat(
            initialValue = 0.25f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(500, delayMillis = i * 250),
                RepeatMode.Reverse,
            ),
            label = "alpha",
        )
        Box(
            Modifier
                .weight(1f)
                .height(6.dp)
                .graphicsLayer { this.alpha = alpha }
                .background(MaterialTheme.colorScheme.primary, RoundedCornerShape(50)),
        )
    }
}`,
    preview: (
      <div className="flex w-40 gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 flex-1 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: `${i * 250}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-radar",
    name: "Radar",
    category: "loaders",
    description: "A sweeping wedge of color rotating inside a bordered dish.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "radar")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1200, easing = LinearEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
val track = MaterialTheme.colorScheme.surfaceVariant
Canvas(Modifier.size(36.dp)) {
    drawCircle(color = track, style = Stroke(width = 1.dp.toPx()))
    rotate(angle) {
        drawArc(
            brush = Brush.sweepGradient(listOf(primary, Color.Transparent)),
            startAngle = 0f,
            sweepAngle = 90f,
            useCenter = true,
        )
    }
}`,
    preview: (
      <div className="relative size-9 overflow-hidden rounded-full border border-muted">
        <div
          className="absolute inset-0 animate-spin"
          style={{ background: "conic-gradient(from 0deg, var(--primary), transparent 25%)" }}
        />
      </div>
    ),
  },
  {
    id: "loader-triangle",
    name: "Triangle",
    category: "loaders",
    description: "A solid triangle tumbling end over end as it spins.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "triangle")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1100, easing = FastOutSlowInEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(30.dp).rotate(angle)) {
    val path = Path().apply {
        moveTo(size.width / 2f, 0f)
        lineTo(size.width, size.height)
        lineTo(0f, size.height)
        close()
    }
    drawPath(path, color = primary)
}`,
    preview: (
      <div className="size-0 animate-spin border-x-8 border-b-[14px] border-x-transparent border-b-primary" />
    ),
  },
  {
    id: "loader-pinwheel",
    name: "Pinwheel",
    category: "loaders",
    description: "Two opposing quadrants forming a pinwheel that spins on its axis.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "pinwheel")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1000, easing = LinearEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(32.dp).rotate(angle)) {
    drawArc(color = primary, startAngle = 0f, sweepAngle = 90f, useCenter = true)
    drawArc(color = primary, startAngle = 180f, sweepAngle = 90f, useCenter = true)
}`,
    preview: (
      <div
        className="size-8 animate-spin rounded-full"
        style={{
          background:
            "conic-gradient(var(--primary) 0 25%, transparent 0 50%, var(--primary) 0 75%, transparent 0)",
        }}
      />
    ),
  },
  {
    id: "loader-morph",
    name: "Morphing blob",
    category: "loaders",
    description: "A gradient blob that slowly morphs its corners while rotating.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "morph")
val p by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(
        tween(2400, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "p",
)
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 180f,
    animationSpec = infiniteRepeatable(tween(2400), RepeatMode.Reverse),
    label = "angle",
)
val shape = RoundedCornerShape(
    topStart = (42 + 16 * p).dp,
    topEnd = (58 - 16 * p).dp,
    bottomStart = (58 - 16 * p).dp,
    bottomEnd = (42 + 16 * p).dp,
)
Box(
    Modifier
        .size(32.dp)
        .rotate(angle)
        .clip(shape)
        .background(
            Brush.linearGradient(
                listOf(MaterialTheme.colorScheme.primary, MaterialTheme.colorScheme.tertiary),
            ),
        ),
)`,
    preview: (
      <div className="size-8 animate-[blob_2.4s_ease-in-out_infinite] bg-gradient-to-br from-primary to-accent" />
    ),
  },
  {
    id: "loader-skeleton-list",
    name: "Skeleton list",
    category: "loaders",
    description: "Three list rows with avatar and two text lines pulsing as placeholders.",
    tags: ["animated"],
    code: `Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
    repeat(3) {
        Row(
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                Modifier
                    .size(40.dp)
                    .clip(CircleShape)
                    .shimmer(),
            )
            Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
                Box(
                    Modifier
                        .width(120.dp)
                        .height(10.dp)
                        .clip(RoundedCornerShape(4.dp))
                        .shimmer(),
                )
                Box(
                    Modifier
                        .width(80.dp)
                        .height(10.dp)
                        .clip(RoundedCornerShape(4.dp))
                        .shimmer(),
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-48 space-y-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-9 rounded-full" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-2.5 w-3/4" />
              <Skeleton className="h-2.5 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "loader-skeleton-profile",
    name: "Skeleton profile",
    category: "loaders",
    description: "A centered avatar with name and bio placeholder lines while loading.",
    tags: ["animated"],
    code: `Column(
    modifier = Modifier.width(180.dp),
    horizontalAlignment = Alignment.CenterHorizontally,
    verticalArrangement = Arrangement.spacedBy(10.dp),
) {
    Box(
        Modifier
            .size(56.dp)
            .clip(CircleShape)
            .shimmer(),
    )
    Box(
        Modifier
            .width(120.dp)
            .height(12.dp)
            .clip(RoundedCornerShape(4.dp))
            .shimmer(),
    )
    Box(
        Modifier
            .width(160.dp)
            .height(10.dp)
            .clip(RoundedCornerShape(4.dp))
            .shimmer(),
    )
}`,
    preview: (
      <div className="flex w-44 flex-col items-center gap-2.5">
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-2.5 w-40" />
      </div>
    ),
  },
  {
    id: "loader-skeleton-feed",
    name: "Skeleton feed",
    category: "loaders",
    description: "A social post placeholder with header, media block and caption lines.",
    tags: ["animated"],
    code: `Column(
    modifier = Modifier.width(200.dp),
    verticalArrangement = Arrangement.spacedBy(10.dp),
) {
    Row(
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Box(Modifier.size(32.dp).clip(CircleShape).shimmer())
        Box(
            Modifier
                .width(100.dp)
                .height(10.dp)
                .clip(RoundedCornerShape(4.dp))
                .shimmer(),
        )
    }
    Box(
        Modifier
            .fillMaxWidth()
            .height(96.dp)
            .clip(RoundedCornerShape(12.dp))
            .shimmer(),
    )
    Box(
        Modifier
            .fillMaxWidth(0.7f)
            .height(10.dp)
            .clip(RoundedCornerShape(4.dp))
            .shimmer(),
    )
}`,
    preview: (
      <div className="w-52 space-y-2.5">
        <div className="flex items-center gap-2.5">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-2.5 w-24" />
        </div>
        <Skeleton className="h-24 w-full rounded-xl" />
        <Skeleton className="h-2.5 w-2/3" />
      </div>
    ),
  },
  {
    id: "loader-skeleton-table",
    name: "Skeleton table",
    category: "loaders",
    description: "Header row plus striped data rows standing in for a loading table.",
    tags: ["animated"],
    code: `Column(
    modifier = Modifier.width(200.dp),
    verticalArrangement = Arrangement.spacedBy(8.dp),
) {
    repeat(4) { row ->
        Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
            Box(
                Modifier
                    .weight(2f)
                    .height(if (row == 0) 12.dp else 10.dp)
                    .clip(RoundedCornerShape(4.dp))
                    .shimmer(),
            )
            Box(
                Modifier
                    .weight(1f)
                    .height(if (row == 0) 12.dp else 10.dp)
                    .clip(RoundedCornerShape(4.dp))
                    .shimmer(),
            )
        }
    }
}`,
    preview: (
      <div className="w-52 space-y-2">
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="flex gap-2.5">
            <Skeleton className={`flex-[2] ${r === 0 ? "h-3" : "h-2.5"}`} />
            <Skeleton className={`flex-1 ${r === 0 ? "h-3" : "h-2.5"}`} />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "loader-percent-ring",
    name: "Percent ring",
    category: "loaders",
    description: "A circular track with an animated arc and a percentage label centered.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "pct")
val sweep by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(
        tween(2000, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "sweep",
)
val primary = MaterialTheme.colorScheme.primary
val track = MaterialTheme.colorScheme.surfaceVariant
Box(Modifier.size(56.dp), contentAlignment = Alignment.Center) {
    Canvas(Modifier.fillMaxSize()) {
        val stroke = Stroke(width = 5.dp.toPx(), cap = StrokeCap.Round)
        drawArc(track, 0f, 360f, false, style = stroke)
        drawArc(primary, -90f, sweep, false, style = stroke)
    }
    Text(
        "\${(sweep / 3.6f).toInt()}%",
        style = MaterialTheme.typography.labelMedium,
        color = primary,
    )
}`,
    preview: (
      <div className="relative grid size-14 place-items-center">
        <span className="absolute inset-0 animate-spin rounded-full border-[5px] border-muted border-t-primary" />
        <span className="text-xs font-semibold text-primary">64%</span>
      </div>
    ),
  },
  {
    id: "loader-step-tracker",
    name: "Step tracker",
    category: "loaders",
    description: "A horizontal stepper whose active node pulses along connecting rails.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "steps")
val active by t.animateFloat(
    initialValue = 0f,
    targetValue = 2.99f,
    animationSpec = infiniteRepeatable(tween(2400, easing = LinearEasing)),
    label = "active",
)
val primary = MaterialTheme.colorScheme.primary
val track = MaterialTheme.colorScheme.surfaceVariant
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    repeat(3) { i ->
        val on = i <= active.toInt()
        Box(
            Modifier
                .size(if (on) 14.dp else 10.dp)
                .background(if (on) primary else track, CircleShape),
        )
        if (i < 2) {
            Box(
                Modifier
                    .width(28.dp)
                    .height(3.dp)
                    .background(if (i < active.toInt()) primary else track),
            )
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-1">
        <span className="size-3.5 rounded-full bg-primary" />
        <span className="h-0.5 w-7 bg-primary" />
        <span className="size-3.5 animate-pulse rounded-full bg-primary" />
        <span className="h-0.5 w-7 bg-muted" />
        <span className="size-2.5 rounded-full bg-muted" />
      </div>
    ),
  },
  {
    id: "loader-bar-chart",
    name: "Bar chart",
    category: "loaders",
    description: "Four columns rising to staggered heights like a chart populating data.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "barchart")
val targets = listOf(0.5f, 0.9f, 0.65f, 1f)
Row(
    modifier = Modifier.height(40.dp),
    verticalAlignment = Alignment.Bottom,
    horizontalArrangement = Arrangement.spacedBy(5.dp),
) {
    targets.forEachIndexed { i, target ->
        val h by t.animateFloat(
            initialValue = 0.15f,
            targetValue = target,
            animationSpec = infiniteRepeatable(
                tween(800, delayMillis = i * 120),
                RepeatMode.Reverse,
            ),
            label = "h",
        )
        Box(
            Modifier
                .width(8.dp)
                .fillMaxHeight(h)
                .background(
                    MaterialTheme.colorScheme.primary,
                    RoundedCornerShape(topStart = 3.dp, topEnd = 3.dp),
                ),
        )
    }
}`,
    preview: (
      <div className="flex h-10 items-end gap-1.5">
        {[40, 75, 55, 95].map((h, i) => (
          <span
            key={i}
            className="w-2 animate-pulse rounded-t bg-primary"
            style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-gradient-sweep",
    name: "Gradient sweep",
    category: "loaders",
    description: "A thick sweep-gradient arc rotating to suggest continuous activity.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "sweep")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1100, easing = LinearEasing)),
    label = "angle",
)
val c1 = MaterialTheme.colorScheme.primary
val c2 = MaterialTheme.colorScheme.tertiary
Canvas(Modifier.size(36.dp).rotate(angle)) {
    drawArc(
        brush = Brush.sweepGradient(listOf(c1, c2, c1)),
        startAngle = 0f,
        sweepAngle = 300f,
        useCenter = false,
        style = Stroke(width = 5.dp.toPx(), cap = StrokeCap.Round),
    )
}`,
    preview: (
      <div
        className="size-9 animate-spin rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, var(--primary), var(--accent), var(--primary) 83%, transparent 83%)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 0)",
        }}
      />
    ),
  },
  {
    id: "loader-pulsing-avatar",
    name: "Pulsing avatar",
    category: "loaders",
    description: "An avatar circle haloed by an expanding ring while content loads.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "avatar")
val scale by t.animateFloat(
    initialValue = 1f,
    targetValue = 1.6f,
    animationSpec = infiniteRepeatable(tween(1200, easing = LinearEasing)),
    label = "scale",
)
val primary = MaterialTheme.colorScheme.primary
Box(Modifier.size(48.dp), contentAlignment = Alignment.Center) {
    Box(
        Modifier
            .size(40.dp)
            .scale(scale)
            .graphicsLayer { alpha = 2f - scale }
            .border(2.dp, primary, CircleShape),
    )
    Box(
        Modifier
            .size(36.dp)
            .background(primary.copy(alpha = 0.18f), CircleShape),
        contentAlignment = Alignment.Center,
    ) {
        Icon(
            Icons.Filled.Person,
            contentDescription = "Loading user",
            tint = primary,
        )
    }
}`,
    preview: (
      <div className="relative grid size-12 place-items-center">
        <span className="absolute size-10 animate-ping rounded-full border-2 border-primary" />
        <span className="size-9 rounded-full bg-primary/20" />
      </div>
    ),
  },
  {
    id: "loader-success-check",
    name: "Success check",
    category: "loaders",
    description: "A spinner that resolves into a filled checkmark when work completes.",
    tags: ["animated"],
    code: `var done by remember { mutableStateOf(false) }
LaunchedEffect(Unit) {
    delay(1600)
    done = true
}
val green = Color(0xFF16A34A)
Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
    AnimatedContent(targetState = done, label = "check") { finished ->
        if (finished) {
            Box(
                Modifier.size(40.dp).background(green, CircleShape),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    Icons.Filled.Check,
                    contentDescription = "Done",
                    tint = Color.White,
                )
            }
        } else {
            CircularProgressIndicator(
                modifier = Modifier.size(36.dp),
                color = green,
                strokeWidth = 3.dp,
            )
        }
    }
}`,
    preview: (
      <div className="relative grid size-10 place-items-center">
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-emerald-600/25 border-t-emerald-600" />
        <span className="size-2 rounded-full bg-emerald-600" />
      </div>
    ),
  },
  {
    id: "loader-cube-grid",
    name: "Cube grid",
    category: "loaders",
    description: "A three-by-three grid of cubes scaling in a diagonal travelling wave.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "cubegrid")
Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
    repeat(3) { row ->
        Row(horizontalArrangement = Arrangement.spacedBy(4.dp)) {
            repeat(3) { col ->
                val delay = (row + col) * 100
                val s by t.animateFloat(
                    initialValue = 0.3f,
                    targetValue = 1f,
                    animationSpec = infiniteRepeatable(
                        tween(600, delayMillis = delay),
                        RepeatMode.Reverse,
                    ),
                    label = "s",
                )
                Box(
                    Modifier
                        .size(10.dp)
                        .scale(s)
                        .background(
                            MaterialTheme.colorScheme.primary,
                            RoundedCornerShape(2.dp),
                        ),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-cols-3 gap-1">
        {[0, 1, 2, 1, 2, 3, 2, 3, 4].map((d, i) => (
          <span
            key={i}
            className="size-2.5 animate-pulse rounded-sm bg-primary"
            style={{ animationDelay: `${d * 100}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-spiral",
    name: "Spiral",
    category: "loaders",
    description: "Dots set along a spiral arm, fading outward as the whole shape turns.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "spiral")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1400, easing = LinearEasing)),
    label = "angle",
)
val color = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(36.dp).rotate(angle)) {
    val count = 7
    repeat(count) { i ->
        val frac = i / count.toFloat()
        val rad = Math.toRadians((i * 60).toDouble())
        val dist = (size.minDimension / 2f) * (0.3f + 0.7f * frac)
        drawCircle(
            color = color.copy(alpha = 1f - frac * 0.8f),
            radius = (1.5f + 2f * (1f - frac)).dp.toPx(),
            center = center + Offset(
                (dist * cos(rad)).toFloat(),
                (dist * sin(rad)).toFloat(),
            ),
        )
    }
}`,
    preview: (
      <div className="relative size-9 animate-spin">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full bg-primary"
            style={{
              width: `${6 - i * 0.6}px`,
              height: `${6 - i * 0.6}px`,
              opacity: 1 - i * 0.12,
              transform: `rotate(${i * 60}deg) translateX(${4 + i * 1.8}px)`,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-dna-helix",
    name: "DNA helix",
    category: "loaders",
    description: "Two dot strands weaving past each other like a rotating double helix.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "dna")
val phase by t.animateFloat(
    initialValue = 0f,
    targetValue = (2 * Math.PI).toFloat(),
    animationSpec = infiniteRepeatable(tween(1400, easing = LinearEasing)),
    label = "phase",
)
val c1 = MaterialTheme.colorScheme.primary
val c2 = MaterialTheme.colorScheme.tertiary
Canvas(Modifier.size(width = 48.dp, height = 28.dp)) {
    val n = 6
    repeat(n) { i ->
        val x = size.width * i / (n - 1)
        val s = sin(phase + i * 0.9f)
        val y1 = size.height / 2f + s * size.height / 2.4f
        val y2 = size.height / 2f - s * size.height / 2.4f
        drawCircle(c1, 3.dp.toPx(), Offset(x, y1))
        drawCircle(c2, 3.dp.toPx(), Offset(x, y2))
    }
}`,
    preview: (
      <div className="flex h-7 w-12 items-center justify-between">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="size-1.5 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: `${i * 130}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-upload",
    name: "Upload",
    category: "loaders",
    description: "An upward arrow above a determinate bar filling to show upload progress.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "upload")
val progress by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(1800, easing = LinearEasing)),
    label = "progress",
)
val primary = MaterialTheme.colorScheme.primary
Column(
    horizontalAlignment = Alignment.CenterHorizontally,
    verticalArrangement = Arrangement.spacedBy(8.dp),
) {
    Icon(
        Icons.Filled.CloudUpload,
        contentDescription = "Uploading",
        tint = primary,
        modifier = Modifier.size(24.dp),
    )
    LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier.width(120.dp),
        color = primary,
        trackColor = MaterialTheme.colorScheme.surfaceVariant,
    )
}`,
    preview: (
      <div className="flex flex-col items-center gap-2">
        <svg viewBox="0 0 24 24" className="size-6 animate-bounce fill-none stroke-primary" strokeWidth="2">
          <path d="M12 19V6M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-muted">
          <div className="h-full animate-[progress_1.8s_linear_infinite] rounded-full bg-primary" />
        </div>
      </div>
    ),
  },
  {
    id: "loader-download",
    name: "Download",
    category: "loaders",
    description: "A downward arrow over a bar sweeping left to right as bytes arrive.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "download")
val progress by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(1600, easing = LinearEasing)),
    label = "progress",
)
val tone = Color(0xFF0EA5E9)
Column(
    horizontalAlignment = Alignment.CenterHorizontally,
    verticalArrangement = Arrangement.spacedBy(8.dp),
) {
    Icon(
        Icons.Filled.Download,
        contentDescription = "Downloading",
        tint = tone,
        modifier = Modifier.size(24.dp),
    )
    LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier.width(120.dp),
        color = tone,
        trackColor = MaterialTheme.colorScheme.surfaceVariant,
    )
}`,
    preview: (
      <div className="flex flex-col items-center gap-2">
        <svg viewBox="0 0 24 24" className="size-6 animate-bounce fill-none stroke-sky-500" strokeWidth="2">
          <path d="M12 5v13M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-muted">
          <div className="h-full animate-[progress_1.6s_linear_infinite] rounded-full bg-sky-500" />
        </div>
      </div>
    ),
  },
  {
    id: "loader-rainbow-ring",
    name: "Rainbow ring",
    category: "loaders",
    description: "A multi-hue conic ring rotating smoothly through the full spectrum.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "rainbow")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1500, easing = LinearEasing)),
    label = "angle",
)
val colors = listOf(
    Color(0xFFF43F5E), Color(0xFFF59E0B), Color(0xFF10B981),
    Color(0xFF0EA5E9), Color(0xFF8B5CF6), Color(0xFFF43F5E),
)
Canvas(Modifier.size(36.dp).rotate(angle)) {
    drawCircle(
        brush = Brush.sweepGradient(colors),
        radius = size.minDimension / 2f - 2.dp.toPx(),
        style = Stroke(width = 4.dp.toPx()),
    )
}`,
    preview: (
      <div
        className="size-9 animate-spin rounded-full"
        style={{
          background:
            "conic-gradient(#f43f5e, #f59e0b, #10b981, #0ea5e9, #8b5cf6, #f43f5e)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 0)",
        }}
      />
    ),
  },
  {
    id: "loader-blob-duo",
    name: "Blob duo",
    category: "loaders",
    description: "Two gradient blobs overlapping and morphing in a slow gooey rotation.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "blobduo")
val p by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(
        tween(2200, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "p",
)
fun blob(flip: Boolean) = RoundedCornerShape(
    topStart = (40 + 20 * if (flip) 1 - p else p).dp,
    topEnd = (60 - 20 * p).dp,
    bottomStart = (60 - 20 * p).dp,
    bottomEnd = (40 + 20 * p).dp,
)
Box(Modifier.size(40.dp)) {
    Box(
        Modifier
            .size(28.dp)
            .clip(blob(false))
            .background(MaterialTheme.colorScheme.primary.copy(alpha = 0.7f)),
    )
    Box(
        Modifier
            .align(Alignment.BottomEnd)
            .size(28.dp)
            .clip(blob(true))
            .background(MaterialTheme.colorScheme.tertiary.copy(alpha = 0.7f)),
    )
}`,
    preview: (
      <div className="relative size-10">
        <span className="absolute left-0 top-0 size-7 animate-[blob_2.2s_ease-in-out_infinite] bg-primary/70" />
        <span className="absolute bottom-0 right-0 size-7 animate-[blob_2.2s_ease-in-out_infinite_reverse] bg-accent/70" />
      </div>
    ),
  },
  {
    id: "loader-wave-line",
    name: "Wave line",
    category: "loaders",
    description: "A row of dots tracing a travelling sine wave from left to right.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "waveline")
val phase by t.animateFloat(
    initialValue = 0f,
    targetValue = (2 * Math.PI).toFloat(),
    animationSpec = infiniteRepeatable(tween(1100, easing = LinearEasing)),
    label = "phase",
)
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(4.dp),
) {
    repeat(7) { i ->
        val y = sin(phase + i * 0.7f) * 8f
        Box(
            Modifier
                .offset(y = y.dp)
                .size(6.dp)
                .background(MaterialTheme.colorScheme.primary, CircleShape),
        )
    }
}`,
    preview: (
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <span
            key={i}
            className="size-1.5 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: `${i * 90}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-pulse-grid",
    name: "Pulse grid",
    category: "loaders",
    description: "A four-by-four matrix of squares brightening in random-feeling waves.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "pulsegrid")
Column(verticalArrangement = Arrangement.spacedBy(3.dp)) {
    repeat(4) { row ->
        Row(horizontalArrangement = Arrangement.spacedBy(3.dp)) {
            repeat(4) { col ->
                val delay = ((row * col + row + col) * 90) % 720
                val a by t.animateFloat(
                    initialValue = 0.15f,
                    targetValue = 1f,
                    animationSpec = infiniteRepeatable(
                        tween(700, delayMillis = delay),
                        RepeatMode.Reverse,
                    ),
                    label = "a",
                )
                Box(
                    Modifier
                        .size(8.dp)
                        .graphicsLayer { alpha = a }
                        .background(
                            MaterialTheme.colorScheme.primary,
                            RoundedCornerShape(2.dp),
                        ),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-cols-4 gap-1">
        {[...Array(16).keys()].map((i) => (
          <span
            key={i}
            className="size-2 animate-pulse rounded-sm bg-primary"
            style={{ animationDelay: `${(i * 90) % 720}ms` }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "loader-fan-arcs",
    name: "Fan arcs",
    category: "loaders",
    description: "Three concentric arcs of growing radius rotating as a layered fan.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "fan")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1300, easing = LinearEasing)),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
Canvas(Modifier.size(40.dp)) {
    repeat(3) { i ->
        val inset = i * 5.dp.toPx()
        val r = size.minDimension / 2f - inset
        rotate(angle + i * 40f) {
            drawArc(
                color = primary.copy(alpha = 1f - i * 0.25f),
                startAngle = 0f,
                sweepAngle = 90f,
                useCenter = false,
                topLeft = Offset(center.x - r, center.y - r),
                size = Size(r * 2, r * 2),
                style = Stroke(width = 3.dp.toPx(), cap = StrokeCap.Round),
            )
        }
    }
}`,
    preview: (
      <div className="relative size-10 animate-spin">
        <span className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary" />
        <span className="absolute inset-1.5 rounded-full border-[3px] border-transparent border-t-primary/75" />
        <span className="absolute inset-3 rounded-full border-[3px] border-transparent border-t-primary/50" />
      </div>
    ),
  },
  {
    id: "loader-coin",
    name: "Coin flip",
    category: "loaders",
    description: "A disc flipping on its vertical axis like a tumbling spinning coin.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "coin")
val rotation by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1100, easing = FastOutSlowInEasing)),
    label = "rotation",
)
Box(
    Modifier
        .size(32.dp)
        .graphicsLayer {
            rotationY = rotation
            cameraDistance = 12f * density
        }
        .background(
            Brush.linearGradient(
                listOf(Color(0xFFFBBF24), Color(0xFFF59E0B)),
            ),
            CircleShape,
        ),
)`,
    preview: (
      <div className="size-8 animate-[blob_1.1s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-amber-400 to-amber-500" />
    ),
  },
  {
    id: "loader-track-gap",
    name: "Track gap",
    category: "loaders",
    description: "A Material indicator with a visible track and rounded indeterminate cap.",
    tags: ["animated"],
    code: `CircularProgressIndicator(
    modifier = Modifier.size(36.dp),
    color = MaterialTheme.colorScheme.primary,
    trackColor = MaterialTheme.colorScheme.surfaceVariant,
    strokeWidth = 4.dp,
    strokeCap = StrokeCap.Round,
)`,
    preview: (
      <div className="size-9 animate-spin rounded-full border-4 border-muted border-t-primary" />
    ),
  },
  {
    id: "loader-galaxy",
    name: "Galaxy",
    category: "loaders",
    description: "Nested rings spinning at different speeds around a glowing core.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "galaxy")
val a1 by t.animateFloat(
    0f, 360f,
    infiniteRepeatable(tween(1000, easing = LinearEasing)),
    label = "a1",
)
val a2 by t.animateFloat(
    0f, 360f,
    infiniteRepeatable(tween(1600, easing = LinearEasing)),
    label = "a2",
)
val primary = MaterialTheme.colorScheme.primary
val tertiary = MaterialTheme.colorScheme.tertiary
Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
    Box(
        Modifier
            .fillMaxSize()
            .rotate(a1)
            .border(2.dp, primary.copy(alpha = 0.4f), CircleShape),
    )
    Box(
        Modifier
            .fillMaxSize(0.6f)
            .rotate(-a2)
            .border(2.dp, tertiary.copy(alpha = 0.6f), CircleShape),
    )
    Box(Modifier.size(8.dp).background(primary, CircleShape))
}`,
    preview: (
      <div className="relative grid size-10 place-items-center">
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-primary/40" />
        <span className="absolute inset-2 animate-[spin_1.6s_linear_infinite_reverse] rounded-full border-2 border-accent/60" />
        <span className="size-2 rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-progress-label",
    name: "Labeled progress",
    category: "loaders",
    description: "A linear bar auto-cycling beneath a Loading caption and percent value.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "labeled")
val progress by t.animateFloat(
    initialValue = 0.05f,
    targetValue = 0.95f,
    animationSpec = infiniteRepeatable(
        tween(2200, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "progress",
)
Column(
    modifier = Modifier.width(160.dp),
    verticalArrangement = Arrangement.spacedBy(6.dp),
) {
    Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
    ) {
        Text("Loading", style = MaterialTheme.typography.labelSmall)
        Text(
            "\${(progress * 100).toInt()}%",
            style = MaterialTheme.typography.labelSmall,
        )
    }
    LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier.fillMaxWidth(),
        color = MaterialTheme.colorScheme.primary,
        trackColor = MaterialTheme.colorScheme.surfaceVariant,
    )
}`,
    preview: (
      <div className="w-40 space-y-1.5">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Loading</span>
          <span>72%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full animate-[progress_2.2s_ease-in-out_infinite] rounded-full bg-primary" />
        </div>
      </div>
    ),
  },
  {
    id: "loader-step-dots",
    name: "Step dots",
    category: "loaders",
    description: "Five dots filling one after another like a sequential step indicator.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "stepdots")
val head by t.animateFloat(
    initialValue = 0f,
    targetValue = 4.99f,
    animationSpec = infiniteRepeatable(tween(2000, easing = LinearEasing)),
    label = "head",
)
val primary = MaterialTheme.colorScheme.primary
val track = MaterialTheme.colorScheme.surfaceVariant
Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
    repeat(5) { i ->
        val on = i <= head.toInt()
        Box(
            Modifier
                .size(if (on) 10.dp else 8.dp)
                .background(if (on) primary else track, CircleShape),
        )
    }
}`,
    preview: (
      <div className="flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-primary" />
        <span className="size-2.5 rounded-full bg-primary" />
        <span className="size-2.5 animate-pulse rounded-full bg-primary" />
        <span className="size-2 rounded-full bg-muted" />
        <span className="size-2 rounded-full bg-muted" />
      </div>
    ),
  },
  {
    id: "loader-chat-bubbles",
    name: "Chat bubbles",
    category: "loaders",
    description: "Stacked message bubbles with typing dots, like a conversation loading.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "chat")
Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
    Box(
        Modifier
            .width(80.dp)
            .height(20.dp)
            .clip(RoundedCornerShape(10.dp))
            .background(MaterialTheme.colorScheme.surfaceVariant),
    )
    Box(
        Modifier
            .align(Alignment.End)
            .clip(RoundedCornerShape(10.dp))
            .background(MaterialTheme.colorScheme.primary)
            .padding(horizontal = 10.dp, vertical = 6.dp),
    ) {
        Row(horizontalArrangement = Arrangement.spacedBy(3.dp)) {
            repeat(3) { i ->
                val y by t.animateFloat(
                    initialValue = 0f,
                    targetValue = -4f,
                    animationSpec = infiniteRepeatable(
                        tween(400, delayMillis = i * 150),
                        RepeatMode.Reverse,
                    ),
                    label = "y",
                )
                Box(
                    Modifier
                        .offset(y = y.dp)
                        .size(5.dp)
                        .background(Color.White, CircleShape),
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex w-28 flex-col gap-1.5">
        <span className="h-5 w-20 rounded-full bg-muted" />
        <div className="flex items-center gap-1 self-end rounded-full bg-primary px-2.5 py-1.5">
          <span className="size-1.5 animate-bounce rounded-full bg-primary-foreground [animation-delay:0ms]" />
          <span className="size-1.5 animate-bounce rounded-full bg-primary-foreground [animation-delay:150ms]" />
          <span className="size-1.5 animate-bounce rounded-full bg-primary-foreground [animation-delay:300ms]" />
        </div>
      </div>
    ),
  },
  {
    id: "loader-meter",
    name: "Gauge meter",
    category: "loaders",
    description: "A semicircular gauge whose needle sweeps back and forth across the dial.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "meter")
val angle by t.animateFloat(
    initialValue = -80f,
    targetValue = 80f,
    animationSpec = infiniteRepeatable(
        tween(1200, easing = FastOutSlowInEasing),
        RepeatMode.Reverse,
    ),
    label = "angle",
)
val primary = MaterialTheme.colorScheme.primary
val track = MaterialTheme.colorScheme.surfaceVariant
Canvas(Modifier.size(width = 44.dp, height = 26.dp)) {
    val pivot = Offset(size.width / 2f, size.height)
    drawArc(
        color = track,
        startAngle = 180f,
        sweepAngle = 180f,
        useCenter = false,
        style = Stroke(width = 3.dp.toPx(), cap = StrokeCap.Round),
    )
    rotate(angle, pivot = pivot) {
        drawLine(
            color = primary,
            start = pivot,
            end = Offset(pivot.x, pivot.y - size.height * 0.8f),
            strokeWidth = 2.5.dp.toPx(),
            cap = StrokeCap.Round,
        )
    }
}`,
    preview: (
      <div className="relative flex h-6 w-11 items-end justify-center">
        <span className="absolute bottom-0 h-3 w-11 rounded-t-full border-[3px] border-b-0 border-muted" />
        <span className="h-5 w-0.5 origin-bottom animate-[icon-swing_1.2s_ease-in-out_infinite] rounded-full bg-primary" />
      </div>
    ),
  },
  {
    id: "loader-ripple-grid",
    name: "Ripple square",
    category: "loaders",
    description: "Concentric rounded squares expanding outward like a square ripple.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "ripplesq")
val primary = MaterialTheme.colorScheme.primary
Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
    repeat(3) { i ->
        val p by t.animateFloat(
            initialValue = 0f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(1500, delayMillis = i * 500, easing = LinearEasing),
            ),
            label = "p",
        )
        Box(
            Modifier
                .size(40.dp)
                .scale(p)
                .border(
                    2.dp,
                    primary.copy(alpha = 1f - p),
                    RoundedCornerShape(8.dp),
                ),
        )
    }
}`,
    preview: (
      <div className="relative grid size-10 place-items-center">
        <span className="absolute size-10 animate-ping rounded-lg border-2 border-primary" />
        <span className="absolute size-10 animate-ping rounded-lg border-2 border-primary [animation-delay:-0.5s]" />
        <span className="absolute size-10 animate-ping rounded-lg border-2 border-primary [animation-delay:-1s]" />
      </div>
    ),
  },
  {
    id: "loader-arc-duo",
    name: "Arc duo",
    category: "loaders",
    description: "Two opposing quarter arcs spinning to form a balanced counter-rotor.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "arcduo")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(900, easing = LinearEasing)),
    label = "angle",
)
val c1 = MaterialTheme.colorScheme.primary
val c2 = MaterialTheme.colorScheme.tertiary
Canvas(Modifier.size(34.dp).rotate(angle)) {
    val stroke = Stroke(width = 4.dp.toPx(), cap = StrokeCap.Round)
    drawArc(c1, -45f, 90f, false, style = stroke)
    drawArc(c2, 135f, 90f, false, style = stroke)
}`,
    preview: (
      <div className="relative size-8 animate-spin">
        <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary" />
        <span className="absolute inset-0 rounded-full border-4 border-transparent border-b-accent" />
      </div>
    ),
  },
];
