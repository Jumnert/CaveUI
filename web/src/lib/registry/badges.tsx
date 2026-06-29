import {
  Bell,
  Check,
  Clock,
  Coins,
  Flame,
  Gift,
  Heart,
  Lock,
  LockOpen,
  MapPin,
  Music,
  RefreshCw,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Upload,
  Wifi,
  Zap,
} from "lucide-react";
import type { Variant } from "./types";

/**
 * Badges, curated, copy-worthy micro-interactions (not color re-skins).
 * Each entry is a distinct concept + motion: a live radar, a rolling counter,
 * a draw-on verified check, a charging battery, etc. Previews are CSS/SVG
 * approximations; `code` is the real Material 3 / Compose source.
 */
export const badges: Variant[] = [
  {
    id: "badge-live-radar",
    name: "Live radar",
    category: "badges",
    description: "A live pill whose dot emits staggered radar rings that expand and fade.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "radar")
val p by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(1600, easing = LinearEasing)),
    label = "p",
)
val red = Color(0xFFEF4444)
Surface(
    shape = RoundedCornerShape(50),
    color = red.copy(alpha = 0.12f),
    contentColor = Color(0xFFDC2626),
) {
    Row(
        Modifier.padding(start = 8.dp, end = 12.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Box(Modifier.size(8.dp), contentAlignment = Alignment.Center) {
            listOf(0f, 0.5f).forEach { off ->
                val f = (p + off) % 1f
                Box(
                    Modifier
                        .size(8.dp)
                        .graphicsLayer {
                            val s = 1f + f * 2.4f
                            scaleX = s
                            scaleY = s
                            alpha = 1f - f
                        }
                        .background(red, CircleShape),
                )
            }
            Box(Modifier.size(8.dp).background(red, CircleShape))
        }
        Text("LIVE", fontWeight = FontWeight.SemiBold, fontSize = 12.sp)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-2 rounded-full bg-red-500/12 py-1 pl-2 pr-3 text-xs font-semibold text-red-600 dark:bg-red-500/15 dark:text-red-400">
        <span className="relative flex size-2 items-center justify-center">
          <span
            className="absolute size-2 rounded-full bg-red-500"
            style={{ animation: "icon-ring 1.6s ease-out infinite" }}
          />
          <span
            className="absolute size-2 rounded-full bg-red-500"
            style={{ animation: "icon-ring 1.6s ease-out infinite", animationDelay: "0.8s" }}
          />
          <span className="relative size-2 rounded-full bg-red-500" />
        </span>
        LIVE
      </span>
    ),
  },
  {
    id: "badge-count-roll",
    name: "Count roll",
    category: "badges",
    description: "A notification count that rolls the old digit out and the new one in.",
    tags: ["animated"],
    code: `var count by remember { mutableIntStateOf(8) }
LaunchedEffect(Unit) {
    while (true) {
        delay(1500)
        count = count % 12 + 1
    }
}
Badge(containerColor = Color(0xFFEF4444), contentColor = Color.White) {
    AnimatedContent(
        targetState = count,
        transitionSpec = {
            (slideInVertically { it } + fadeIn()) togetherWith
                (slideOutVertically { -it } + fadeOut())
        },
        label = "count",
    ) { value ->
        Text("$value", fontSize = 11.sp)
    }
}`,
    preview: (
      <span className="inline-flex h-5 min-w-5 items-center justify-center overflow-hidden rounded-full bg-red-500 px-1.5 text-xs font-semibold text-white">
        <span
          className="flex flex-col leading-5"
          style={{ animation: "badge-tick 1.6s ease-in-out infinite" }}
        >
          <span className="h-5">8</span>
          <span className="h-5">9</span>
        </span>
      </span>
    ),
  },
  {
    id: "badge-notif-shake",
    name: "Notification ring",
    category: "badges",
    description: "A bell that swings like a ringer while its unread count pops.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "ring")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 0f,
    animationSpec = infiniteRepeatable(
        keyframes {
            durationMillis = 1800
            0f at 0
            (-12f) at 700
            12f at 800
            (-9f) at 900
            6f at 1000
            0f at 1100
        },
    ),
    label = "angle",
)
BadgedBox(
    badge = {
        Badge(containerColor = Color(0xFFEF4444), contentColor = Color.White) {
            Text("3", fontSize = 10.sp)
        }
    },
) {
    Icon(
        Icons.Outlined.Notifications,
        contentDescription = "Alerts",
        modifier = Modifier.graphicsLayer {
            rotationZ = angle
            transformOrigin = TransformOrigin(0.5f, 0.15f)
        },
    )
}`,
    preview: (
      <span className="relative inline-flex">
        <Bell
          className="size-6 text-foreground"
          style={{ transformOrigin: "50% 15%", animation: "icon-sway 1.8s ease-in-out infinite" }}
        />
        <span
          className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white"
          style={{ animation: "icon-pop 1.8s ease-in-out infinite" }}
        >
          3
        </span>
      </span>
    ),
  },
  {
    id: "badge-streak-flame",
    name: "Streak flame",
    category: "badges",
    description: "A day-streak pill with a flame that flickers over a warm gradient.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "flame")
val sy by t.animateFloat(
    initialValue = 0.92f,
    targetValue = 1.12f,
    animationSpec = infiniteRepeatable(tween(420), RepeatMode.Reverse),
    label = "sy",
)
val skew by t.animateFloat(
    initialValue = -4f,
    targetValue = 4f,
    animationSpec = infiniteRepeatable(tween(300), RepeatMode.Reverse),
    label = "skew",
)
Surface(
    shape = RoundedCornerShape(50),
    color = Color.Transparent,
    contentColor = Color.White,
) {
    Row(
        Modifier
            .background(
                Brush.horizontalGradient(
                    listOf(Color(0xFFF97316), Color(0xFFEF4444)),
                ),
            )
            .padding(horizontal = 10.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        Icon(
            Icons.Filled.LocalFireDepartment,
            contentDescription = null,
            modifier = Modifier
                .size(14.dp)
                .graphicsLayer {
                    scaleY = sy
                    rotationZ = skew
                    transformOrigin = TransformOrigin(0.5f, 1f)
                },
        )
        Text("12 day streak", fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-2.5 py-1 text-xs font-semibold text-white">
        <Flame
          className="size-3.5 fill-amber-300 text-amber-200"
          style={{ transformOrigin: "50% 100%", animation: "icon-flicker 0.6s ease-in-out infinite" }}
        />
        12 day streak
      </span>
    ),
  },
  {
    id: "badge-shine-sweep",
    name: "Shine sweep",
    category: "badges",
    description: "A NEW badge with a glint of light that sweeps diagonally across it.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "shine")
val x by t.animateFloat(
    initialValue = -1f,
    targetValue = 2f,
    animationSpec = infiniteRepeatable(
        tween(2200, easing = LinearEasing),
    ),
    label = "x",
)
Box(
    Modifier
        .clip(RoundedCornerShape(50))
        .background(Color(0xFF7C3AED))
        .drawWithContent {
            drawContent()
            val w = size.width * 0.4f
            drawRect(
                brush = Brush.horizontalGradient(
                    0f to Color.Transparent,
                    0.5f to Color.White.copy(alpha = 0.55f),
                    1f to Color.Transparent,
                ),
                topLeft = Offset(size.width * x, 0f),
                size = Size(w, size.height),
            )
        }
        .padding(horizontal = 12.dp, vertical = 4.dp),
) {
    Text("NEW", color = Color.White, fontWeight = FontWeight.Bold, fontSize = 12.sp)
}`,
    preview: (
      <span className="relative inline-flex overflow-hidden rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white">
        <span
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/55 to-transparent"
          style={{ animation: "icon-shine 2.2s linear infinite" }}
        />
        <span className="relative">NEW</span>
      </span>
    ),
  },
  {
    id: "badge-verified-draw",
    name: "Verified draw",
    category: "badges",
    description: "A verified badge whose ring and checkmark draw themselves stroke by stroke.",
    tags: ["animated"],
    code: `var done by remember { mutableStateOf(false) }
LaunchedEffect(Unit) { done = true }
val p by animateFloatAsState(
    targetValue = if (done) 1f else 0f,
    animationSpec = tween(800, easing = EaseOutCubic),
    label = "draw",
)
val sky = Color(0xFF0EA5E9)
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(6.dp),
) {
    Canvas(Modifier.size(18.dp)) {
        val s = Stroke(2.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round)
        drawArc(
            color = sky,
            startAngle = -90f,
            sweepAngle = 360f * (p / 0.6f).coerceIn(0f, 1f),
            useCenter = false,
            style = s,
        )
        val tick = Path().apply {
            moveTo(size.width * 0.28f, size.height * 0.52f)
            lineTo(size.width * 0.44f, size.height * 0.68f)
            lineTo(size.width * 0.74f, size.height * 0.34f)
        }
        val m = PathMeasure().apply { setPath(tick, false) }
        val tp = ((p - 0.4f) / 0.6f).coerceIn(0f, 1f)
        drawPath(
            Path().also { m.getSegment(0f, m.length * tp, it, true) },
            color = sky,
            style = s,
        )
    }
    Text("Verified", color = sky, fontWeight = FontWeight.SemiBold, fontSize = 13.sp)
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle
            cx="12"
            cy="12"
            r="10"
            style={{ strokeDasharray: 63, strokeDashoffset: 63, animation: "icon-draw 0.9s ease-out infinite alternate" }}
          />
          <path
            d="M7 12.5 l3 3 l7-8"
            style={{ strokeDasharray: 20, strokeDashoffset: 20, animation: "icon-draw 0.9s ease-out 0.35s infinite alternate" }}
          />
        </svg>
        Verified
      </span>
    ),
  },
  {
    id: "badge-progress-ring",
    name: "Progress ring",
    category: "badges",
    description: "An upload chip with a sweeping arc that tracks completion around the percent.",
    tags: ["animated"],
    code: `var progress by remember { mutableFloatStateOf(0f) }
val p by animateFloatAsState(
    targetValue = progress,
    animationSpec = tween(1400, easing = EaseInOutCubic),
    label = "p",
)
LaunchedEffect(Unit) { progress = 0.72f }
val sky = Color(0xFF0EA5E9)
Surface(
    shape = RoundedCornerShape(50),
    color = MaterialTheme.colorScheme.surfaceVariant,
    contentColor = MaterialTheme.colorScheme.onSurfaceVariant,
) {
    Row(
        Modifier.padding(start = 6.dp, end = 12.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Box(Modifier.size(18.dp), contentAlignment = Alignment.Center) {
            Canvas(Modifier.fillMaxSize()) {
                val s = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round)
                drawArc(sky.copy(alpha = 0.2f), 0f, 360f, false, style = s)
                drawArc(sky, -90f, 360f * p, false, style = s)
            }
            Icon(Icons.Filled.ArrowUpward, null, Modifier.size(9.dp), tint = sky)
        }
        Text("Uploading 72%", fontSize = 12.sp)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted py-1 pl-1.5 pr-3 text-xs font-medium text-foreground">
        <span className="relative inline-flex size-[18px] items-center justify-center">
          <svg viewBox="0 0 36 36" className="size-[18px] -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="4" className="text-sky-500/20" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              className="text-sky-500"
              style={{ strokeDasharray: 94, strokeDashoffset: 94, animation: "icon-sweep-arc 1.6s ease-out infinite alternate", ["--len" as string]: "26px" } as React.CSSProperties}
            />
          </svg>
          <Upload className="absolute size-2 text-sky-500" />
        </span>
        Uploading 72%
      </span>
    ),
  },
  {
    id: "badge-typing",
    name: "Typing",
    category: "badges",
    description: "A chat presence pill with three dots that wave in a staggered loop.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "typing")
Surface(
    shape = RoundedCornerShape(50),
    color = MaterialTheme.colorScheme.surfaceVariant,
    contentColor = MaterialTheme.colorScheme.onSurfaceVariant,
) {
    Row(
        Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
        horizontalArrangement = Arrangement.spacedBy(5.dp),
    ) {
        repeat(3) { i ->
            val y by t.animateFloat(
                initialValue = 0f,
                targetValue = -5f,
                animationSpec = infiniteRepeatable(
                    tween(500, delayMillis = i * 140),
                    RepeatMode.Reverse,
                ),
                label = "dot",
            )
            Box(
                Modifier
                    .offset(y = y.dp)
                    .size(6.dp)
                    .background(LocalContentColor.current, CircleShape),
            )
        }
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-2 text-foreground">
        {[0, 140, 280].map((d) => (
          <span
            key={d}
            className="size-1.5 rounded-full bg-foreground/70"
            style={{ animation: "badge-bob 1s ease-in-out infinite", animationDelay: `${d}ms` }}
          />
        ))}
      </span>
    ),
  },
  {
    id: "badge-trend-spark",
    name: "Trend spark",
    category: "badges",
    description: "A growth chip whose sparkline draws on next to a rising percentage.",
    tags: ["animated"],
    code: `var shown by remember { mutableStateOf(false) }
LaunchedEffect(Unit) { shown = true }
val p by animateFloatAsState(
    targetValue = if (shown) 1f else 0f,
    animationSpec = tween(1100, easing = EaseOutCubic),
    label = "line",
)
val green = Color(0xFF16A34A)
Surface(
    shape = RoundedCornerShape(50),
    color = green.copy(alpha = 0.12f),
    contentColor = green,
) {
    Row(
        Modifier.padding(start = 8.dp, end = 10.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Canvas(Modifier.size(width = 24.dp, height = 12.dp)) {
            val pts = listOf(0f to 0.8f, 0.3f to 0.55f, 0.55f to 0.7f, 1f to 0.1f)
            val path = Path()
            pts.forEachIndexed { i, (fx, fy) ->
                val x = size.width * fx
                val y = size.height * fy
                if (i == 0) path.moveTo(x, y) else path.lineTo(x, y)
            }
            val m = PathMeasure().apply { setPath(path, false) }
            drawPath(
                Path().also { m.getSegment(0f, m.length * p, it, true) },
                color = green,
                style = Stroke(2.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round),
            )
        }
        Text("+12.4%", fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/12 py-1 pl-2 pr-2.5 text-xs font-semibold text-green-600 dark:bg-green-500/15 dark:text-green-400">
        <svg viewBox="0 0 24 12" className="h-3 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M1 10 L8 6.5 L13 8.4 L23 1"
            style={{ strokeDasharray: 28, strokeDashoffset: 28, animation: "icon-draw 1.3s ease-out infinite alternate" }}
          />
        </svg>
        +12.4%
      </span>
    ),
  },
  {
    id: "badge-battery",
    name: "Battery charge",
    category: "badges",
    description: "A status chip with a battery that fills and a bolt marking it charging.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "charge")
val fill by t.animateFloat(
    initialValue = 0.15f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(2000), RepeatMode.Restart),
    label = "fill",
)
val green = Color(0xFF22C55E)
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(6.dp),
) {
    Box(contentAlignment = Alignment.CenterStart) {
        Canvas(Modifier.size(width = 26.dp, height = 13.dp)) {
            val r = 3.dp.toPx()
            drawRoundRect(
                color = green.copy(alpha = 0.35f),
                cornerRadius = CornerRadius(r, r),
                style = Stroke(1.5.dp.toPx()),
            )
            val pad = 2.5.dp.toPx()
            drawRoundRect(
                color = green,
                topLeft = Offset(pad, pad),
                size = Size((size.width - pad * 2) * fill, size.height - pad * 2),
                cornerRadius = CornerRadius(r / 2, r / 2),
            )
        }
        Icon(Icons.Filled.Bolt, null, Modifier.size(10.dp), tint = Color.White)
    }
    Text("Charging", color = green, fontSize = 12.sp, fontWeight = FontWeight.Medium)
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
        <span className="relative inline-flex h-3.5 w-7 items-center rounded-[3px] border-2 border-green-500/40 p-px">
          <span
            className="block h-full origin-left rounded-[1px] bg-green-500"
            style={{ width: "100%", animation: "badge-fillx 2s ease-in-out infinite" }}
          />
          <Zap className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 fill-white text-white" />
        </span>
        Charging
      </span>
    ),
  },
  {
    id: "badge-countdown",
    name: "Countdown ring",
    category: "badges",
    description: "A deadline chip whose ring drains clockwise as the time remaining ticks down.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "countdown")
val left by t.animateFloat(
    initialValue = 1f,
    targetValue = 0f,
    animationSpec = infiniteRepeatable(tween(4000, easing = LinearEasing)),
    label = "left",
)
val amber = Color(0xFFD97706)
Surface(
    shape = RoundedCornerShape(50),
    color = amber.copy(alpha = 0.12f),
    contentColor = amber,
) {
    Row(
        Modifier.padding(start = 6.dp, end = 12.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Canvas(Modifier.size(16.dp)) {
            val s = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round)
            drawArc(amber.copy(alpha = 0.2f), 0f, 360f, false, style = s)
            drawArc(amber, -90f, 360f * left, false, style = s)
        }
        Text("Ends in 3d", fontSize = 12.sp, fontWeight = FontWeight.Medium)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/12 py-1 pl-1.5 pr-3 text-xs font-medium text-amber-600 dark:bg-amber-500/15 dark:text-amber-400">
        <svg viewBox="0 0 36 36" className="size-4 -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="4" className="text-amber-500/20" />
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-amber-500"
            style={{ strokeDasharray: 94, animation: "badge-deplete 4s linear infinite", ["--len" as string]: "94px" } as React.CSSProperties}
          />
        </svg>
        Ends in 3d
      </span>
    ),
  },
  {
    id: "badge-like-burst",
    name: "Like burst",
    category: "badges",
    description: "A like chip whose heart springs and scatters a burst of particles on tap.",
    tags: ["animated"],
    code: `var liked by remember { mutableStateOf(false) }
val scale = remember { Animatable(1f) }
LaunchedEffect(liked) {
    if (liked) {
        scale.animateTo(1.4f, spring(0.35f, 600f))
        scale.animateTo(1f, spring(0.5f, 300f))
    }
}
val rose = Color(0xFFF43F5E)
Row(
    Modifier
        .clip(RoundedCornerShape(50))
        .background(if (liked) rose.copy(alpha = 0.12f) else Color.Transparent)
        .clickable { liked = !liked }
        .padding(horizontal = 10.dp, vertical = 4.dp),
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(6.dp),
) {
    Box(contentAlignment = Alignment.Center) {
        if (liked) {
            repeat(6) { i ->
                val a = remember { Animatable(0f) }
                LaunchedEffect(Unit) { a.animateTo(1f, tween(500)) }
                val ang = (i * 60).toFloat()
                Box(
                    Modifier
                        .size(3.dp)
                        .graphicsLayer {
                            val d = a.value * 12f
                            translationX = (cos(ang * PI / 180) * d).toFloat()
                            translationY = (sin(ang * PI / 180) * d).toFloat()
                            alpha = 1f - a.value
                        }
                        .background(rose, CircleShape),
                )
            }
        }
        Icon(
            if (liked) Icons.Filled.Favorite else Icons.Outlined.FavoriteBorder,
            contentDescription = "Like",
            tint = rose,
            modifier = Modifier.size(16.dp).scale(scale.value),
        )
    }
    Text("2.4k", color = if (liked) rose else LocalContentColor.current, fontSize = 12.sp)
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/12 px-2.5 py-1 text-xs font-medium text-rose-600 dark:bg-rose-500/15 dark:text-rose-400">
        <span className="relative inline-flex size-4 items-center justify-center">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <span
              key={a}
              className="absolute size-1 rounded-full bg-rose-500"
              style={{ animation: "icon-confetti 1.2s ease-out infinite", ["--tx" as string]: `${Math.cos((a * Math.PI) / 180) * 11}px`, ["--ty" as string]: `${Math.sin((a * Math.PI) / 180) * 11}px`, ["--r" as string]: "0deg" } as React.CSSProperties}
            />
          ))}
          <Heart className="relative size-4 fill-rose-500 text-rose-500" style={{ animation: "icon-pop 1.2s ease-in-out infinite" }} />
        </span>
        2.4k
      </span>
    ),
  },
  {
    id: "badge-stock-tick",
    name: "Stock tick",
    category: "badges",
    description: "A market chip where the arrow and percentage slide as the value updates.",
    tags: ["animated"],
    code: `var up by remember { mutableStateOf(true) }
LaunchedEffect(Unit) {
    while (true) { delay(2000); up = !up }
}
val color = if (up) Color(0xFF16A34A) else Color(0xFFDC2626)
Surface(
    shape = RoundedCornerShape(50),
    color = color.copy(alpha = 0.12f),
    contentColor = color,
) {
    Row(
        Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        AnimatedContent(
            targetState = up,
            transitionSpec = {
                (slideInVertically { if (up) it else -it } + fadeIn()) togetherWith
                    (slideOutVertically { if (up) -it else it } + fadeOut())
            },
            label = "tick",
        ) { isUp ->
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    if (isUp) Icons.Filled.ArrowDropUp else Icons.Filled.ArrowDropDown,
                    contentDescription = null,
                    modifier = Modifier.size(16.dp),
                )
                Text(
                    if (isUp) "+2.4%" else "-1.1%",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.SemiBold,
                )
            }
        }
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-0.5 overflow-hidden rounded-full bg-green-500/12 px-2.5 py-1 text-xs font-semibold text-green-600 dark:bg-green-500/15 dark:text-green-400">
        <TrendingUp className="size-3.5" />
        <span className="inline-flex h-4 flex-col leading-4" style={{ animation: "badge-tick 2s ease-in-out infinite" }}>
          <span className="h-4">+2.4%</span>
          <span className="h-4">+2.4%</span>
        </span>
      </span>
    ),
  },
  {
    id: "badge-presence",
    name: "Presence",
    category: "badges",
    description: "An avatar with an online dot that softly breathes inside a status ring.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "presence")
val pulse by t.animateFloat(
    initialValue = 0.8f,
    targetValue = 1.6f,
    animationSpec = infiniteRepeatable(tween(1400, easing = EaseOutQuad)),
    label = "pulse",
)
val green = Color(0xFF22C55E)
Box(contentAlignment = Alignment.BottomEnd) {
    Box(
        Modifier
            .size(40.dp)
            .clip(CircleShape)
            .background(MaterialTheme.colorScheme.primaryContainer),
    )
    Box(Modifier.size(14.dp), contentAlignment = Alignment.Center) {
        Box(
            Modifier
                .size(10.dp)
                .graphicsLayer {
                    scaleX = pulse
                    scaleY = pulse
                    alpha = 2f - pulse
                }
                .background(green, CircleShape),
        )
        Box(
            Modifier
                .size(10.dp)
                .border(2.dp, MaterialTheme.colorScheme.surface, CircleShape)
                .background(green, CircleShape),
        )
    }
}`,
    preview: (
      <span className="relative inline-flex">
        <span className="size-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
        <span className="absolute -bottom-0.5 -right-0.5 inline-flex size-3.5 items-center justify-center">
          <span className="absolute size-2.5 rounded-full bg-emerald-500" style={{ animation: "badge-breathe 1.4s ease-out infinite" }} />
          <span className="relative size-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
        </span>
      </span>
    ),
  },
  {
    id: "badge-rec",
    name: "Recording",
    category: "badges",
    description: "A recording pill with a blinking dot and a monospaced running timer.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "rec")
val blink by t.animateFloat(
    initialValue = 1f,
    targetValue = 0.15f,
    animationSpec = infiniteRepeatable(tween(700), RepeatMode.Reverse),
    label = "blink",
)
Surface(
    shape = RoundedCornerShape(6.dp),
    color = Color(0xFF18181B),
    contentColor = Color.White,
) {
    Row(
        Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Box(
            Modifier
                .size(8.dp)
                .graphicsLayer { alpha = blink }
                .background(Color(0xFFEF4444), CircleShape),
        )
        Text("REC", fontSize = 11.sp, fontWeight = FontWeight.Bold)
        Text("00:42", fontFamily = FontFamily.Monospace, fontSize = 11.sp)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-bold text-white">
        <span className="size-2 rounded-full bg-red-500" style={{ animation: "icon-blink 1.4s steps(1) infinite" }} />
        REC
        <span className="font-mono font-normal tabular-nums">00:42</span>
      </span>
    ),
  },
  {
    id: "badge-skeleton",
    name: "Loading skeleton",
    category: "badges",
    description: "A placeholder badge that shimmers while the real label is loading.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "shimmer")
val x by t.animateFloat(
    initialValue = -200f,
    targetValue = 200f,
    animationSpec = infiniteRepeatable(tween(1400, easing = LinearEasing)),
    label = "x",
)
Box(
    Modifier
        .clip(RoundedCornerShape(50))
        .background(MaterialTheme.colorScheme.surfaceVariant)
        .drawWithContent {
            drawContent()
            drawRect(
                Brush.linearGradient(
                    colors = listOf(
                        Color.Transparent,
                        Color.White.copy(0.4f),
                        Color.Transparent,
                    ),
                    start = Offset(x, 0f),
                    end = Offset(x + 120f, 0f),
                ),
            )
        }
        .size(width = 64.dp, height = 20.dp),
)`,
    preview: (
      <span
        className="inline-block h-5 w-16 overflow-hidden rounded-full"
        style={{
          background: "linear-gradient(90deg,var(--muted),var(--accent),var(--muted))",
          backgroundSize: "400px 100%",
          animation: "shimmer 1.4s linear infinite",
        }}
      />
    ),
  },
  {
    id: "badge-gradient-flow",
    name: "Gradient flow",
    category: "badges",
    description: "A premium pill whose multi-stop gradient drifts continuously across the fill.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "flow")
val shift by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(4000, easing = LinearEasing)),
    label = "shift",
)
val colors = listOf(
    Color(0xFFD946EF), Color(0xFF8B5CF6),
    Color(0xFF3B82F6), Color(0xFFD946EF),
)
Box(
    Modifier
        .clip(RoundedCornerShape(50))
        .drawBehind {
            val w = size.width
            drawRect(
                Brush.linearGradient(
                    colors = colors,
                    start = Offset(-w + shift * 2 * w, 0f),
                    end = Offset(shift * 2 * w, 0f),
                ),
            )
        }
        .padding(horizontal = 12.dp, vertical = 4.dp),
) {
    Text("PRO", color = Color.White, fontWeight = FontWeight.Bold, fontSize = 12.sp)
}`,
    preview: (
      <span
        className="inline-flex rounded-full px-3 py-1 text-xs font-bold text-white"
        style={{
          backgroundImage: "linear-gradient(90deg,#d946ef,#8b5cf6,#3b82f6,#d946ef)",
          backgroundSize: "300% 100%",
          animation: "gradient-shift 4s linear infinite",
        }}
      >
        PRO
      </span>
    ),
  },
  {
    id: "badge-confetti",
    name: "Confetti win",
    category: "badges",
    description: "An achievement chip that bursts confetti from behind a trophy on unlock.",
    tags: ["animated"],
    code: `var won by remember { mutableStateOf(false) }
LaunchedEffect(Unit) { won = true }
val pieces = remember {
    List(8) {
        Triple(
            (it * 45).toFloat(),
            listOf(
                Color(0xFFF59E0B), Color(0xFFEF4444),
                Color(0xFF3B82F6), Color(0xFF22C55E),
            ).random(),
            (8..16).random().toFloat(),
        )
    }
}
Surface(
    shape = RoundedCornerShape(50),
    color = Color(0xFFFEF3C7),
    contentColor = Color(0xFFB45309),
) {
    Row(
        Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Box(contentAlignment = Alignment.Center) {
            pieces.forEach { (ang, c, dist) ->
                val a = remember { Animatable(0f) }
                LaunchedEffect(won) { if (won) a.animateTo(1f, tween(700)) }
                Box(
                    Modifier
                        .size(4.dp)
                        .graphicsLayer {
                            translationX = (cos(ang * PI / 180) * dist * a.value).toFloat()
                            translationY = (sin(ang * PI / 180) * dist * a.value).toFloat()
                            alpha = 1f - a.value
                            rotationZ = a.value * 180
                        }
                        .background(c),
                )
            }
            Icon(Icons.Filled.EmojiEvents, null, Modifier.size(16.dp))
        }
        Text("Winner", fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
        <span className="relative inline-flex size-4 items-center justify-center">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
            <span
              key={a}
              className="absolute size-1 rounded-[1px]"
              style={{ backgroundColor: ["#f59e0b", "#ef4444", "#3b82f6", "#22c55e"][i % 4], animation: "icon-confetti 1.4s ease-out infinite", ["--tx" as string]: `${Math.cos((a * Math.PI) / 180) * 13}px`, ["--ty" as string]: `${Math.sin((a * Math.PI) / 180) * 13}px`, ["--r" as string]: "180deg" } as React.CSSProperties}
            />
          ))}
          <Trophy className="relative size-4" />
        </span>
        Winner
      </span>
    ),
  },
  {
    id: "badge-sync",
    name: "Sync status",
    category: "badges",
    description: "A sync chip whose arrows spin while saving, then morph to a check when synced.",
    tags: ["animated"],
    code: `var synced by remember { mutableStateOf(false) }
LaunchedEffect(Unit) {
    while (true) { synced = false; delay(1600); synced = true; delay(1400) }
}
val t = rememberInfiniteTransition(label = "sync")
val angle by t.animateFloat(
    0f, 360f,
    infiniteRepeatable(tween(900, easing = LinearEasing)),
    label = "angle",
)
val color = if (synced) Color(0xFF16A34A)
    else MaterialTheme.colorScheme.onSurfaceVariant
Surface(
    shape = RoundedCornerShape(50),
    color = MaterialTheme.colorScheme.surfaceVariant,
    contentColor = color,
) {
    Row(
        Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        AnimatedContent(synced, label = "icon") { done ->
            if (done) {
                Icon(Icons.Filled.Check, null, Modifier.size(14.dp))
            } else {
                Icon(Icons.Filled.Sync, null, Modifier.size(14.dp).rotate(angle))
            }
        }
        Text(if (synced) "Synced" else "Syncing", fontSize = 12.sp)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
        <RefreshCw className="size-3.5" style={{ animation: "icon-spin 0.9s linear infinite" }} />
        Syncing
      </span>
    ),
  },
  {
    id: "badge-step",
    name: "Step progress",
    category: "badges",
    description: "A wizard chip whose active segment fills left-to-right as the step advances.",
    tags: ["animated"],
    code: `var step by remember { mutableIntStateOf(2) }
LaunchedEffect(Unit) {
    while (true) { delay(1200); step = step % 4 + 1 }
}
Surface(
    shape = RoundedCornerShape(50),
    color = MaterialTheme.colorScheme.surfaceVariant,
    contentColor = MaterialTheme.colorScheme.onSurfaceVariant,
) {
    Row(
        Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        Text("Step $step", fontSize = 11.sp, fontWeight = FontWeight.Medium)
        Spacer(Modifier.width(2.dp))
        repeat(4) { i ->
            val active = i < step
            val w by animateDpAsState(if (active) 16.dp else 6.dp, label = "w")
            Box(
                Modifier
                    .width(w)
                    .height(4.dp)
                    .background(
                        if (active) MaterialTheme.colorScheme.primary
                        else MaterialTheme.colorScheme.outlineVariant,
                        RoundedCornerShape(50),
                    ),
            )
        }
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground">
        Step 2
        <span className="ml-1 inline-flex items-center gap-1">
          <span className="h-1 w-4 rounded-full bg-primary" />
          <span className="h-1 w-4 origin-left rounded-full bg-primary" style={{ animation: "badge-fillx 1.4s ease-in-out infinite" }} />
          <span className="h-1 w-1.5 rounded-full bg-muted-foreground/30" />
          <span className="h-1 w-1.5 rounded-full bg-muted-foreground/30" />
        </span>
      </span>
    ),
  },
  {
    id: "badge-signal",
    name: "Signal strength",
    category: "badges",
    description: "A connectivity chip whose bars rise in sequence beside a Wi-Fi glyph.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "signal")
val green = Color(0xFF16A34A)
Surface(
    shape = RoundedCornerShape(50),
    color = green.copy(alpha = 0.12f),
    contentColor = green,
) {
    Row(
        Modifier.padding(start = 8.dp, end = 10.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.Bottom,
        horizontalArrangement = Arrangement.spacedBy(2.dp),
    ) {
        repeat(4) { i ->
            val h by t.animateFloat(
                initialValue = 0.3f,
                targetValue = 1f,
                animationSpec = infiniteRepeatable(
                    tween(900, delayMillis = i * 150),
                    RepeatMode.Reverse,
                ),
                label = "bar",
            )
            Box(
                Modifier
                    .width(3.dp)
                    .height((4 + i * 3).dp)
                    .graphicsLayer { scaleY = h; transformOrigin = TransformOrigin(0.5f, 1f) }
                    .background(green, RoundedCornerShape(2.dp)),
            )
        }
        Spacer(Modifier.width(4.dp))
        Text("Connected", fontSize = 12.sp, fontWeight = FontWeight.Medium)
    }
}`,
    preview: (
      <span className="inline-flex items-end gap-0.5 rounded-full bg-green-500/12 py-1 pl-2 pr-2.5 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-400">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="w-[3px] origin-bottom rounded-sm bg-green-500"
            style={{ height: `${4 + i * 3}px`, animation: "icon-grow-y 0.9s ease-in-out infinite", animationDelay: `${i * 150}ms` }}
          />
        ))}
        <Wifi className="ml-1 size-3.5" />
        <span className="ml-1 self-center leading-none">Connected</span>
      </span>
    ),
  },
  {
    id: "badge-unlock",
    name: "Unlock",
    category: "badges",
    description: "An access chip that morphs from a closed lock to an open one when granted.",
    tags: ["animated"],
    code: `var unlocked by remember { mutableStateOf(false) }
LaunchedEffect(Unit) {
    while (true) { unlocked = false; delay(1400); unlocked = true; delay(1400) }
}
val color = if (unlocked) Color(0xFF16A34A)
    else MaterialTheme.colorScheme.onSurfaceVariant
Surface(
    shape = RoundedCornerShape(50),
    color = MaterialTheme.colorScheme.surfaceVariant,
    contentColor = color,
) {
    Row(
        Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        AnimatedContent(
            targetState = unlocked,
            transitionSpec = { scaleIn() + fadeIn() togetherWith scaleOut() + fadeOut() },
            label = "lock",
        ) { open ->
            Icon(
                if (open) Icons.Filled.LockOpen else Icons.Filled.Lock,
                contentDescription = null,
                modifier = Modifier.size(14.dp),
            )
        }
        Text(if (unlocked) "Unlocked" else "Locked", fontSize = 12.sp)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
        <span className="relative inline-flex size-3.5 items-center justify-center">
          <Lock className="absolute size-3.5" style={{ animation: "icon-crossfade 2.8s ease-in-out infinite" }} />
          <LockOpen className="absolute size-3.5 text-green-600 dark:text-green-400" style={{ animation: "icon-crossfade-in 2.8s ease-in-out infinite" }} />
        </span>
        <span className="relative w-14">
          <span className="absolute left-0" style={{ animation: "icon-crossfade 2.8s ease-in-out infinite" }}>Locked</span>
          <span className="absolute left-0 text-green-600 dark:text-green-400" style={{ animation: "icon-crossfade-in 2.8s ease-in-out infinite" }}>Unlocked</span>
        </span>
      </span>
    ),
  },
  {
    id: "badge-coin",
    name: "Coin flip",
    category: "badges",
    description: "A reward chip with a coin that flips in 3D beside the points earned.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "coin")
val rot by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(
        tween(1600, easing = FastOutSlowInEasing),
    ),
    label = "rot",
)
Surface(
    shape = RoundedCornerShape(50),
    color = Color(0xFFFEF3C7),
    contentColor = Color(0xFFB45309),
) {
    Row(
        Modifier.padding(start = 6.dp, end = 10.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Box(
            Modifier
                .size(16.dp)
                .graphicsLayer {
                    rotationY = rot
                    cameraDistance = 12f * density
                }
                .background(
                    Brush.linearGradient(
                        listOf(Color(0xFFFCD34D), Color(0xFFF59E0B)),
                    ),
                    CircleShape,
                ),
            contentAlignment = Alignment.Center,
        ) {
            Text("$", color = Color.White, fontSize = 9.sp, fontWeight = FontWeight.Bold)
        }
        Text("+50", fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 py-1 pl-1.5 pr-2.5 text-xs font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
        <span
          className="inline-flex size-4 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-[9px] font-bold text-white"
          style={{ animation: "badge-coin 1.6s ease-in-out infinite", transformStyle: "preserve-3d" }}
        >
          <Coins className="size-2.5" />
        </span>
        +50
      </span>
    ),
  },
  {
    id: "badge-star-rating",
    name: "Star rating",
    category: "badges",
    description: "A rating chip where a gold layer wipes across the stars to reveal the score.",
    tags: ["animated"],
    code: `var shown by remember { mutableStateOf(false) }
LaunchedEffect(Unit) { shown = true }
val fill by animateFloatAsState(
    targetValue = if (shown) 0.94f else 0f,
    animationSpec = tween(1000, easing = EaseOutCubic),
    label = "fill",
)
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(6.dp),
) {
    Box {
        Row(horizontalArrangement = Arrangement.spacedBy(1.dp)) {
            repeat(5) { Icon(Icons.Filled.Star, null, Modifier.size(13.dp), tint = Color(0xFFE5E7EB)) }
        }
        Row(
            Modifier
                .matchParentSize()
                .clipToBounds()
                .drawWithContent {
                    clipRect(right = size.width * fill) { this@drawWithContent.drawContent() }
                },
            horizontalArrangement = Arrangement.spacedBy(1.dp),
        ) {
            repeat(5) { Icon(Icons.Filled.Star, null, Modifier.size(13.dp), tint = Color(0xFFF59E0B)) }
        }
    }
    Text("4.9", fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
        <span className="relative inline-flex">
          <span className="flex gap-px text-zinc-300 dark:text-zinc-600">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </span>
          <span
            className="absolute inset-0 flex origin-left gap-px overflow-hidden text-amber-500"
            style={{ animation: "badge-fillx 1.2s ease-out infinite alternate" }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </span>
        </span>
        4.9
      </span>
    ),
  },
  {
    id: "badge-eq",
    name: "Now playing",
    category: "badges",
    description: "A playback chip with an equalizer that dances next to a music note.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "eq")
Surface(
    shape = RoundedCornerShape(50),
    color = Color(0xFF8B5CF6).copy(alpha = 0.14f),
    contentColor = Color(0xFF7C3AED),
) {
    Row(
        Modifier.padding(start = 8.dp, end = 10.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Row(
            verticalAlignment = Alignment.Bottom,
            horizontalArrangement = Arrangement.spacedBy(2.dp),
        ) {
            repeat(4) { i ->
                val h by t.animateFloat(
                    initialValue = 0.3f,
                    targetValue = 1f,
                    animationSpec = infiniteRepeatable(
                        tween(420 + i * 90),
                        RepeatMode.Reverse,
                    ),
                    label = "bar",
                )
                Box(
                    Modifier
                        .width(2.5.dp)
                        .height(12.dp)
                        .graphicsLayer { scaleY = h; transformOrigin = TransformOrigin(0.5f, 1f) }
                        .background(Color(0xFF7C3AED), RoundedCornerShape(2.dp)),
                )
            }
        }
        Text("Now playing", fontSize = 12.sp, fontWeight = FontWeight.Medium)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/14 py-1 pl-2 pr-2.5 text-xs font-medium text-violet-700 dark:text-violet-300">
        <span className="flex items-end gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-3 w-[2.5px] origin-bottom rounded-sm bg-violet-600 dark:bg-violet-400"
              style={{ animation: "icon-eq 0.7s ease-in-out infinite", animationDelay: `${i * 110}ms` }}
            />
          ))}
        </span>
        <Music className="size-3" />
        Now playing
      </span>
    ),
  },
  {
    id: "badge-pin-drop",
    name: "Pin drop",
    category: "badges",
    description: "A location chip whose map pin drops in and settles with a small bounce.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "drop")
val y by t.animateFloat(
    initialValue = 0f,
    targetValue = 0f,
    animationSpec = infiniteRepeatable(
        keyframes {
            durationMillis = 2000
            (-10f) at 0
            0f at 500 using EaseOutBounce
            0f at 2000
        },
    ),
    label = "y",
)
val rose = Color(0xFFE11D48)
Surface(
    shape = RoundedCornerShape(50),
    color = rose.copy(alpha = 0.12f),
    contentColor = rose,
) {
    Row(
        Modifier.padding(start = 6.dp, end = 10.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        Icon(
            Icons.Filled.LocationOn,
            contentDescription = null,
            modifier = Modifier.size(15.dp).offset(y = y.dp),
        )
        Text("Nearby", fontSize = 12.sp, fontWeight = FontWeight.Medium)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/12 py-1 pl-1.5 pr-2.5 text-xs font-medium text-rose-600 dark:bg-rose-500/15 dark:text-rose-400">
        <MapPin className="size-3.5 fill-current" style={{ animation: "icon-pin-drop 2s ease-in-out infinite" }} />
        Nearby
      </span>
    ),
  },
  {
    id: "badge-sparkle",
    name: "Sparkle new",
    category: "badges",
    description: "A NEW chip framed by little stars that twinkle in and out of phase.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "sparkle")
Box {
    Surface(
        shape = RoundedCornerShape(50),
        color = Color(0xFFD946EF),
        contentColor = Color.White,
    ) {
        Text(
            "NEW",
            Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
            fontSize = 12.sp,
            fontWeight = FontWeight.Bold,
        )
    }
    listOf(
        Offset(-4f, -4f) to 0,
        Offset(48f, 2f) to 400,
        Offset(40f, 20f) to 800,
    ).forEach { (o, delay) ->
        val a by t.animateFloat(
            initialValue = 0.2f,
            targetValue = 1f,
            animationSpec = infiniteRepeatable(
                tween(900, delayMillis = delay),
                RepeatMode.Reverse,
            ),
            label = "tw",
        )
        Icon(
            Icons.Filled.AutoAwesome,
            contentDescription = null,
            tint = Color(0xFFF0ABFC),
            modifier = Modifier
                .size(10.dp)
                .offset(o.x.dp, o.y.dp)
                .graphicsLayer { alpha = a; scaleX = a; scaleY = a },
        )
    }
}`,
    preview: (
      <span className="relative inline-flex">
        <span className="rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-bold text-white">NEW</span>
        <Sparkles className="absolute -left-1.5 -top-1.5 size-3 text-fuchsia-300" style={{ animation: "icon-twinkle 0.9s ease-in-out infinite" }} />
        <Sparkles className="absolute -right-1 -top-1 size-2.5 text-fuchsia-300" style={{ animation: "icon-twinkle 0.9s ease-in-out 0.4s infinite" }} />
        <Sparkles className="absolute -bottom-1 right-2 size-2 text-fuchsia-300" style={{ animation: "icon-twinkle 0.9s ease-in-out 0.8s infinite" }} />
      </span>
    ),
  },
  {
    id: "badge-gift-shake",
    name: "Gift shake",
    category: "badges",
    description: "A reward chip whose gift box rattles, then pops a sparkle to claim.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "gift")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 0f,
    animationSpec = infiniteRepeatable(
        keyframes {
            durationMillis = 2200
            0f at 0
            (-8f) at 1500
            8f at 1620
            (-6f) at 1740
            0f at 1880
        },
    ),
    label = "angle",
)
Surface(
    shape = RoundedCornerShape(50),
    color = Color(0xFFEC4899).copy(alpha = 0.14f),
    contentColor = Color(0xFFBE185D),
) {
    Row(
        Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        Icon(
            Icons.Filled.CardGiftcard,
            contentDescription = null,
            modifier = Modifier.size(15.dp).graphicsLayer { rotationZ = angle },
        )
        Text("Claim reward", fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/14 px-2.5 py-1 text-xs font-semibold text-pink-700 dark:text-pink-300">
        <Gift className="size-3.5" style={{ animation: "icon-shake 2.2s ease-in-out infinite" }} />
        Claim reward
      </span>
    ),
  },
  {
    id: "badge-status-morph",
    name: "Status morph",
    category: "badges",
    description: "A task chip that crossfades from a pending clock to a green done check.",
    tags: ["animated"],
    code: `var done by remember { mutableStateOf(false) }
LaunchedEffect(Unit) {
    while (true) { done = false; delay(1500); done = true; delay(1500) }
}
val container by animateColorAsState(
    if (done) Color(0xFFDCFCE7) else Color(0xFFFEF3C7),
    label = "bg",
)
val content by animateColorAsState(
    if (done) Color(0xFF15803D) else Color(0xFFB45309),
    label = "fg",
)
Surface(shape = RoundedCornerShape(50), color = container, contentColor = content) {
    Row(
        Modifier.padding(horizontal = 10.dp, vertical = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(6.dp),
    ) {
        AnimatedContent(
            targetState = done,
            transitionSpec = { scaleIn() + fadeIn() togetherWith scaleOut() + fadeOut() },
            label = "icon",
        ) { d ->
            Icon(
                if (d) Icons.Filled.CheckCircle else Icons.Filled.Schedule,
                contentDescription = null,
                modifier = Modifier.size(14.dp),
            )
        }
        Text(if (done) "Done" else "Pending", fontSize = 12.sp, fontWeight = FontWeight.Medium)
    }
}`,
    preview: (
      <span className="relative inline-flex">
        <span
          className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
          style={{ animation: "icon-crossfade 3s ease-in-out infinite" }}
        >
          <Clock className="size-3.5" />
          Pending
        </span>
        <span
          className="absolute inset-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
          style={{ animation: "icon-crossfade-in 3s ease-in-out infinite" }}
        >
          <Check className="size-3.5" />
          Done
        </span>
      </span>
    ),
  },
  {
    id: "badge-marquee",
    name: "Ticker",
    category: "badges",
    description: "A breaking-news chip whose text scrolls continuously inside a fixed width.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "ticker")
val x by t.animateFloat(
    initialValue = 0f,
    targetValue = -1f,
    animationSpec = infiniteRepeatable(tween(4000, easing = LinearEasing)),
    label = "x",
)
Surface(
    shape = RoundedCornerShape(50),
    color = Color(0xFFDC2626),
    contentColor = Color.White,
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text(
            "LIVE",
            Modifier
                .background(Color.Black.copy(0.18f))
                .padding(horizontal = 8.dp, vertical = 4.dp),
            fontSize = 10.sp,
            fontWeight = FontWeight.Bold,
        )
        Box(
            Modifier
                .width(96.dp)
                .clipToBounds()
                .padding(vertical = 4.dp),
        ) {
            val msg = "Breaking, markets rally as tech leads gains  •  "
            Text(
                msg + msg,
                Modifier.layout { m, c ->
                    val p = m.measure(c)
                    layout(p.width, p.height) {
                        p.place((x * p.width / 2).roundToInt(), 0)
                    }
                },
                maxLines = 1,
                fontSize = 11.sp,
            )
        }
    }
}`,
    preview: (
      <span className="inline-flex items-center overflow-hidden rounded-full bg-red-600 text-white">
        <span className="bg-black/20 px-2 py-1 text-[10px] font-bold">LIVE</span>
        <span className="relative w-24 overflow-hidden py-1">
          <span
            className="inline-block whitespace-nowrap pl-2 text-[11px]"
            style={{ animation: "marquee 5s linear infinite" }}
          >
            Breaking, markets rally as tech leads gains&nbsp;&nbsp;•&nbsp;&nbsp;Breaking, markets rally&nbsp;&nbsp;
          </span>
        </span>
      </span>
    ),
  },
  {
    id: "badge-rankup",
    name: "Rank up",
    category: "badges",
    description: "A level chip with chevrons that rise and fade to signal a promotion.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "rankup")
val emerald = Color(0xFF059669)
Surface(
    shape = RoundedCornerShape(50),
    color = emerald.copy(alpha = 0.12f),
    contentColor = emerald,
) {
    Row(
        Modifier.padding(start = 6.dp, end = 10.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        Box(Modifier.size(14.dp)) {
            repeat(3) { i ->
                val a by t.animateFloat(
                    initialValue = 0f,
                    targetValue = 1f,
                    animationSpec = infiniteRepeatable(
                        tween(1200, delayMillis = i * 200, easing = LinearEasing),
                    ),
                    label = "chev",
                )
                Icon(
                    Icons.Filled.KeyboardArrowUp,
                    contentDescription = null,
                    modifier = Modifier
                        .size(14.dp)
                        .graphicsLayer {
                            translationY = (1f - a) * 6.dp.toPx() - 3.dp.toPx()
                            alpha = if (a < 0.5f) a * 2 else (1f - a) * 2
                        },
                )
            }
        }
        Text("Level 5", fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/12 py-1 pl-2 pr-2.5 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
        <span className="relative inline-flex size-3.5 items-center justify-center">
          {[0, 200, 400].map((d) => (
            <svg
              key={d}
              viewBox="0 0 24 24"
              className="absolute size-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: "icon-rise 1.2s linear infinite", animationDelay: `${d}ms` }}
            >
              <path d="M6 14 l6 -6 l6 6" />
            </svg>
          ))}
        </span>
        Level 5
      </span>
    ),
  },
  {
    id: "badge-discount-stamp",
    name: "Discount stamp",
    category: "badges",
    description: "A deal badge that slams in like an ink stamp, overshooting then settling.",
    tags: ["animated"],
    code: `var stamped by remember { mutableStateOf(false) }
LaunchedEffect(Unit) { stamped = true }
val scale by animateFloatAsState(
    targetValue = if (stamped) 1f else 1.8f,
    animationSpec = spring(dampingRatio = 0.45f, stiffness = 500f),
    label = "scale",
)
val alpha by animateFloatAsState(
    targetValue = if (stamped) 1f else 0f,
    animationSpec = tween(180),
    label = "alpha",
)
Surface(
    shape = RoundedCornerShape(8.dp),
    color = Color.Transparent,
    contentColor = Color(0xFFE11D48),
    border = BorderStroke(2.dp, Color(0xFFE11D48)),
    modifier = Modifier.graphicsLayer {
        scaleX = scale
        scaleY = scale
        this.alpha = alpha
        rotationZ = -11f
    },
) {
    Text(
        "-50% OFF",
        Modifier.padding(horizontal = 10.dp, vertical = 3.dp),
        fontWeight = FontWeight.Bold,
        fontSize = 13.sp,
    )
}`,
    preview: (
      <span
        className="inline-flex -rotate-[11deg] rounded-lg border-2 border-rose-600 px-2.5 py-0.5 text-sm font-bold text-rose-600 dark:border-rose-400 dark:text-rose-400"
        style={{ animation: "badge-stamp 2.4s ease-out infinite" }}
      >
        -50% OFF
      </span>
    ),
  },
  {
    id: "badge-wave-text",
    name: "Wave text",
    category: "badges",
    description: "A sale chip whose letters bob in a left-to-right wave like a stadium crowd.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "wave")
val word = "SALE"
Surface(
    shape = RoundedCornerShape(50),
    color = Color(0xFFF59E0B),
    contentColor = Color(0xFF7C2D12),
) {
    Row(Modifier.padding(horizontal = 12.dp, vertical = 4.dp)) {
        word.forEachIndexed { i, ch ->
            val y by t.animateFloat(
                initialValue = 0f,
                targetValue = -4f,
                animationSpec = infiniteRepeatable(
                    tween(600, delayMillis = i * 90),
                    RepeatMode.Reverse,
                ),
                label = "ch",
            )
            Text(
                ch.toString(),
                Modifier.offset(y = y.dp),
                fontWeight = FontWeight.Bold,
                fontSize = 13.sp,
            )
        }
    }
}`,
    preview: (
      <span className="inline-flex rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-amber-950">
        {"SALE".split("").map((ch, i) => (
          <span
            key={i}
            className="inline-block"
            style={{ animation: "badge-bob 1.2s ease-in-out infinite", animationDelay: `${i * 90}ms` }}
          >
            {ch}
          </span>
        ))}
      </span>
    ),
  },
  {
    id: "badge-orbit",
    name: "Orbit",
    category: "badges",
    description: "A processing chip with a satellite dot orbiting a steady label.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "orbit")
val angle by t.animateFloat(
    initialValue = 0f,
    targetValue = 360f,
    animationSpec = infiniteRepeatable(tween(1400, easing = LinearEasing)),
    label = "angle",
)
Surface(
    shape = RoundedCornerShape(50),
    color = MaterialTheme.colorScheme.surfaceVariant,
    contentColor = MaterialTheme.colorScheme.onSurfaceVariant,
) {
    Row(
        Modifier.padding(start = 8.dp, end = 12.dp, top = 4.dp, bottom = 4.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Box(Modifier.size(12.dp), contentAlignment = Alignment.Center) {
            Box(Modifier.size(4.dp).background(MaterialTheme.colorScheme.outline, CircleShape))
            Box(
                Modifier
                    .graphicsLayer { rotationZ = angle }
                    .size(12.dp),
                contentAlignment = Alignment.TopCenter,
            ) {
                Box(
                    Modifier
                        .size(4.dp)
                        .background(MaterialTheme.colorScheme.primary, CircleShape),
                )
            }
        }
        Text("Processing", fontSize = 12.sp)
    }
}`,
    preview: (
      <span className="inline-flex items-center gap-2 rounded-full bg-muted py-1 pl-2 pr-3 text-xs font-medium text-muted-foreground">
        <span className="relative inline-flex size-3 items-center justify-center">
          <span className="size-1 rounded-full bg-muted-foreground/50" />
          <span className="absolute inset-0" style={{ animation: "icon-spin 1.4s linear infinite" }}>
            <span className="absolute left-1/2 top-0 size-1 -translate-x-1/2 rounded-full bg-primary" />
          </span>
        </span>
        Processing
      </span>
    ),
  },
  {
    id: "badge-tap-ripple",
    name: "Tap ripple",
    category: "badges",
    description: "An interactive chip that emits a Material ripple ring outward on press.",
    tags: ["animated"],
    code: `var pressed by remember { mutableStateOf(false) }
val ripple = remember { Animatable(0f) }
LaunchedEffect(pressed) {
    if (pressed) {
        ripple.snapTo(0f)
        ripple.animateTo(1f, tween(500))
        pressed = false
    }
}
Surface(
    shape = RoundedCornerShape(50),
    color = MaterialTheme.colorScheme.primaryContainer,
    contentColor = MaterialTheme.colorScheme.onPrimaryContainer,
    modifier = Modifier.clickable { pressed = true },
) {
    Box(
        Modifier
            .drawBehind {
                if (ripple.value > 0f) {
                    drawCircle(
                        color = Color.White.copy(alpha = 0.4f * (1f - ripple.value)),
                        radius = size.maxDimension * ripple.value,
                        center = Offset(size.width / 2, size.height / 2),
                    )
                }
            }
            .padding(horizontal = 14.dp, vertical = 4.dp),
    ) {
        Text("Tap me", fontSize = 12.sp, fontWeight = FontWeight.Medium)
    }
}`,
    preview: (
      <span className="relative inline-flex overflow-hidden rounded-full bg-primary/15 px-3.5 py-1 text-xs font-medium text-primary">
        <span
          className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30"
          style={{ animation: "badge-ripple 1.6s ease-out infinite" }}
        />
        <span className="relative">Tap me</span>
      </span>
    ),
  },
  {
    id: "badge-scan",
    name: "Scanning",
    category: "badges",
    description: "A verification chip with a bright line that scans vertically across it.",
    tags: ["animated"],
    code: `val t = rememberInfiniteTransition(label = "scan")
val y by t.animateFloat(
    initialValue = -1f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(1400, easing = LinearEasing)),
    label = "y",
)
val cyan = Color(0xFF06B6D4)
Box(
    Modifier
        .clip(RoundedCornerShape(8.dp))
        .background(Color(0xFF0E1B22))
        .drawWithContent {
            drawContent()
            val cy = size.height / 2 + y * size.height / 2
            drawRect(
                brush = Brush.verticalGradient(
                    0f to Color.Transparent,
                    0.5f to cyan.copy(alpha = 0.7f),
                    1f to Color.Transparent,
                ),
                topLeft = Offset(0f, cy - 6f),
                size = Size(size.width, 12f),
            )
        },
) {
    Text(
        "Scanning…",
        Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
        color = cyan,
        fontSize = 12.sp,
        fontFamily = FontFamily.Monospace,
    )
}`,
    preview: (
      <span className="relative inline-flex overflow-hidden rounded-lg bg-[#0e1b22] px-3 py-1 font-mono text-xs text-cyan-400">
        <span
          className="absolute inset-x-0 h-2 bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent"
          style={{ animation: "badge-scan 1.4s linear infinite" }}
        />
        <span className="relative">Scanning…</span>
      </span>
    ),
  },
  {
    id: "badge-avatar-stack",
    name: "Avatar stack",
    category: "badges",
    description: "An overlapping avatar group whose remaining-member count rolls upward.",
    tags: ["animated"],
    code: `var extra by remember { mutableIntStateOf(5) }
LaunchedEffect(Unit) {
    while (true) { delay(1800); extra = extra % 9 + 1 }
}
val colors = listOf(Color(0xFF6366F1), Color(0xFF22C55E), Color(0xFFF59E0B))
Row(horizontalArrangement = Arrangement.spacedBy((-8).dp)) {
    colors.forEach { c ->
        Box(
            Modifier
                .size(26.dp)
                .border(2.dp, MaterialTheme.colorScheme.surface, CircleShape)
                .clip(CircleShape)
                .background(c),
        )
    }
    Box(
        Modifier
            .size(26.dp)
            .border(2.dp, MaterialTheme.colorScheme.surface, CircleShape)
            .clip(CircleShape)
            .background(MaterialTheme.colorScheme.surfaceVariant),
        contentAlignment = Alignment.Center,
    ) {
        AnimatedContent(
            targetState = extra,
            transitionSpec = {
                (slideInVertically { it } + fadeIn()) togetherWith
                    (slideOutVertically { -it } + fadeOut())
            },
            label = "extra",
        ) { n ->
            Text("+$n", fontSize = 10.sp, fontWeight = FontWeight.SemiBold)
        }
    }
}`,
    preview: (
      <span className="inline-flex items-center -space-x-2">
        <span className="size-6 rounded-full bg-indigo-500 ring-2 ring-background" />
        <span className="size-6 rounded-full bg-emerald-500 ring-2 ring-background" />
        <span className="size-6 rounded-full bg-amber-500 ring-2 ring-background" />
        <span className="inline-flex size-6 items-center justify-center overflow-hidden rounded-full bg-muted text-[10px] font-semibold text-muted-foreground ring-2 ring-background">
          <span className="flex flex-col leading-6" style={{ animation: "badge-tick 1.9s ease-in-out infinite" }}>
            <span className="h-6">+5</span>
            <span className="h-6">+6</span>
          </span>
        </span>
      </span>
    ),
  },
];
