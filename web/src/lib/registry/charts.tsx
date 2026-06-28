import type { Variant } from "./types";

/**
 * Charts — Compose Canvas data-viz, customized on Material 3 surfaces.
 * Previews are SVG/Tailwind approximations; `code` is the real Compose source.
 * Bars grow, lines draw-on, arcs sweep — every entry is a composition, not a re-skin.
 */
export const charts: Variant[] = [
  {
    id: "chart-gradient-bars",
    name: "Gradient bars",
    category: "charts",
    description: "A vertical bar chart with gradient fills that grow in, staggered left to right.",
    tags: ["animated"],
    code: `@Composable
fun GradientBars(
    values: List<Float> = listOf(0.45f, 0.72f, 0.58f, 0.9f, 0.64f, 0.81f, 0.52f),
    modifier: Modifier = Modifier,
) {
    val grow = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
        grow.animateTo(1f, tween(900, easing = EaseOutCubic))
    }
    val top = Color(0xFF6366F1)
    val bottom = Color(0xFF22D3EE)
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val gap = 10.dp.toPx()
        val bw = (size.width - gap * (values.size - 1)) / values.size
        values.forEachIndexed { i, v ->
            val h = size.height * v * grow.value
            val x = i * (bw + gap)
            drawRoundRect(
                brush = Brush.verticalGradient(listOf(top, bottom)),
                topLeft = Offset(x, size.height - h),
                size = Size(bw, h),
                cornerRadius = CornerRadius(6.dp.toPx()),
            )
        }
    }
}`,
    preview: (
      <div className="flex h-32 w-full max-w-[240px] items-end justify-center gap-2.5">
        {[45, 72, 58, 90, 64, 81, 52].map((h, i) => (
          <div
            key={i}
            className="w-6 origin-bottom rounded-t-md bg-gradient-to-t from-cyan-400 to-indigo-500"
            style={{
              height: `${h}%`,
              animation: "icon-grow-y 2.6s ease-in-out infinite",
              animationDelay: `${i * 110}ms`,
            }}
          />
        ))}
      </div>
    ),
  },
  {
    id: "chart-multi-line",
    name: "Multi-line",
    category: "charts",
    description: "Two smoothed line series that draw themselves on with rounded joins.",
    tags: ["animated"],
    code: `@Composable
fun MultiLine(
    a: List<Float> = listOf(0.6f, 0.5f, 0.55f, 0.35f, 0.42f, 0.22f, 0.3f),
    b: List<Float> = listOf(0.8f, 0.78f, 0.62f, 0.66f, 0.5f, 0.54f, 0.38f),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
        draw.animateTo(1f, tween(1100, easing = EaseInOutCubic))
    }
    fun DrawScope.series(pts: List<Float>, color: Color) {
        val step = size.width / (pts.size - 1)
        val path = Path().apply {
            pts.forEachIndexed { i, v ->
                val x = i * step
                val y = size.height * v
                if (i == 0) moveTo(x, y) else lineTo(x, y)
            }
        }
        val measure = PathMeasure().apply { setPath(path, false) }
        val shown = Path().also {
            measure.getSegment(0f, measure.length * draw.value, it, true)
        }
        drawPath(
            shown,
            color,
            style = Stroke(3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round),
        )
    }
    Canvas(modifier.fillMaxWidth().height(110.dp)) {
        series(a, Color(0xFF6366F1))
        series(b, Color(0xFF10B981))
    }
}`,
    preview: (
      <svg viewBox="0 0 240 110" className="w-full max-w-[260px]" fill="none">
        <polyline
          points="0,66 40,55 80,60 120,38 160,46 200,24 240,33"
          className="text-indigo-500"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 420, strokeDashoffset: 420, animation: "icon-draw 2.8s ease-in-out infinite alternate" }}
        />
        <polyline
          points="0,88 40,86 80,68 120,72 160,55 200,59 240,42"
          className="text-emerald-500"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 420, strokeDashoffset: 420, animation: "icon-draw 2.8s ease-in-out 0.3s infinite alternate" }}
        />
      </svg>
    ),
  },
  {
    id: "chart-area-gradient",
    name: "Area gradient",
    category: "charts",
    description: "A single-series area chart with a soft gradient fill under a draw-on line.",
    tags: ["animated"],
    code: `@Composable
fun AreaGradient(
    values: List<Float> = listOf(0.7f, 0.55f, 0.6f, 0.38f, 0.46f, 0.28f, 0.34f),
    accent: Color = Color(0xFF8B5CF6),
    modifier: Modifier = Modifier,
) {
    val reveal = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
        reveal.animateTo(1f, tween(1000, easing = EaseOutCubic))
    }
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val step = size.width / (values.size - 1)
        val line = Path().apply {
            values.forEachIndexed { i, v ->
                val x = i * step
                val y = size.height * v
                if (i == 0) moveTo(x, y) else lineTo(x, y)
            }
        }
        val area = Path().apply {
            addPath(line)
            lineTo(size.width, size.height)
            lineTo(0f, size.height)
            close()
        }
        clipRect(right = size.width * reveal.value) {
            drawPath(
                area,
                brush = Brush.verticalGradient(
                    listOf(accent.copy(alpha = 0.35f), Color.Transparent),
                ),
            )
            drawPath(line, accent, style = Stroke(3.dp.toPx(), cap = StrokeCap.Round))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 120" className="w-full max-w-[260px]">
        <defs>
          <linearGradient id="cg-area-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="text-violet-500">
          <path
            d="M0,84 L40,66 L80,72 L120,46 L160,55 L200,34 L240,41 L240,120 L0,120 Z"
            fill="url(#cg-area-gradient)"
          />
          <polyline
            points="0,84 40,66 80,72 120,46 160,55 200,34 240,41"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 420, strokeDashoffset: 420, animation: "icon-draw 2.6s ease-in-out infinite alternate" }}
          />
        </g>
      </svg>
    ),
  },
  {
    id: "chart-progress-donut",
    name: "Progress donut",
    category: "charts",
    description: "A donut gauge whose colored arc sweeps to its value over a neutral track.",
    tags: ["animated"],
    code: `@Composable
fun ProgressDonut(
    target: Float = 0.72f,
    accent: Color = Color(0xFF10B981),
    modifier: Modifier = Modifier,
) {
    val sweep by animateFloatAsState(
        targetValue = target,
        animationSpec = tween(1100, easing = EaseOutCubic),
        label = "sweep",
    )
    val track = MaterialTheme.colorScheme.surfaceVariant
    Box(modifier.size(128.dp), contentAlignment = Alignment.Center) {
        Canvas(Modifier.fillMaxSize()) {
            val stroke = Stroke(12.dp.toPx(), cap = StrokeCap.Round)
            drawArc(track, 0f, 360f, false, style = stroke)
            drawArc(accent, -90f, 360f * sweep, false, style = stroke)
        }
        Text(
            text = "\${(sweep * 100).toInt()}%",
            style = MaterialTheme.typography.titleLarge,
            fontWeight = FontWeight.SemiBold,
        )
    }
}`,
    preview: (
      <div className="relative grid size-32 place-items-center">
        <svg viewBox="0 0 48 48" className="size-32 -rotate-90">
          <circle cx="24" cy="24" r="20" fill="none" className="text-muted" stroke="currentColor" strokeWidth="5" />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            className="text-emerald-500"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            pathLength={100}
            style={{ strokeDasharray: "72 28", strokeDashoffset: 72, animation: "icon-draw 2.4s ease-in-out infinite alternate" }}
          />
        </svg>
        <span className="absolute text-2xl font-semibold text-foreground">72%</span>
      </div>
    ),
  },
  {
    id: "chart-activity-rings",
    name: "Activity rings",
    category: "charts",
    description: "Three concentric goal rings that sweep to their progress, fitness-tracker style.",
    tags: ["animated"],
    code: `@Composable
fun ActivityRings(
    move: Float = 0.82f,
    exercise: Float = 0.66f,
    stand: Float = 0.5f,
    modifier: Modifier = Modifier,
) {
    val p by animateFloatAsState(1f, tween(1200, easing = EaseOutCubic), label = "rings")
    val track = MaterialTheme.colorScheme.surfaceVariant
    val specs = listOf(
        20.dp to (Color(0xFFFB1D5B) to move),
        14.dp to (Color(0xFFA3E635) to exercise),
        8.dp to (Color(0xFF22D3EE) to stand),
    )
    Canvas(modifier.size(120.dp)) {
        val w = 9.dp.toPx()
        specs.forEach { (r, pair) ->
            val (color, value) = pair
            val d = r.toPx() * 2
            val tl = Offset(center.x - r.toPx(), center.y - r.toPx())
            drawArc(track, 0f, 360f, false, tl, Size(d, d), style = Stroke(w, cap = StrokeCap.Round))
            drawArc(
                color, -90f, 360f * value * p, false, tl, Size(d, d),
                style = Stroke(w, cap = StrokeCap.Round),
            )
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 48 48" className="size-28 -rotate-90">
        {[
          { r: 20, cls: "text-rose-500", dash: "82 18", off: 82 },
          { r: 14, cls: "text-lime-400", dash: "66 34", off: 66 },
          { r: 8, cls: "text-cyan-400", dash: "50 50", off: 50 },
        ].map((ring, i) => (
          <g key={i}>
            <circle cx="24" cy="24" r={ring.r} fill="none" className="text-muted" stroke="currentColor" strokeWidth="4" />
            <circle
              cx="24"
              cy="24"
              r={ring.r}
              fill="none"
              className={ring.cls}
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={100}
              style={{ strokeDasharray: ring.dash, strokeDashoffset: ring.off, animation: `icon-draw 2.4s ease-in-out ${i * 0.15}s infinite alternate` }}
            />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "chart-trend-tile",
    name: "Trend tile",
    category: "charts",
    description: "A KPI tile pairing a headline metric and delta with an inline area sparkline.",
    tags: ["animated"],
    code: `@Composable
fun TrendTile(
    label: String = "Revenue",
    value: String = "$48.2k",
    delta: String = "+12%",
    spark: List<Float> = listOf(0.7f, 0.66f, 0.72f, 0.5f, 0.58f, 0.36f, 0.44f, 0.2f),
    modifier: Modifier = Modifier,
) {
    val accent = Color(0xFF10B981)
    Card(modifier.width(176.dp), shape = RoundedCornerShape(16.dp)) {
        Column(Modifier.padding(14.dp)) {
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(label, style = MaterialTheme.typography.labelMedium)
                Text(delta, color = accent, style = MaterialTheme.typography.labelSmall)
            }
            Text(value, style = MaterialTheme.typography.headlineSmall)
            Spacer(Modifier.height(8.dp))
            Canvas(Modifier.fillMaxWidth().height(36.dp)) {
                val step = size.width / (spark.size - 1)
                val path = Path().apply {
                    spark.forEachIndexed { i, v ->
                        val x = i * step
                        val y = size.height * v
                        if (i == 0) moveTo(x, y) else lineTo(x, y)
                    }
                }
                drawPath(path, accent, style = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round))
            }
        }
    }
}`,
    preview: (
      <div className="w-44 rounded-2xl border bg-card p-3.5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Revenue</span>
          <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600">+12%</span>
        </div>
        <div className="mt-1 text-xl font-semibold text-foreground">$48.2k</div>
        <svg viewBox="0 0 160 40" className="mt-2 h-9 w-full" fill="none">
          <polyline
            points="0,28 20,26 40,30 60,18 80,22 100,12 120,16 140,6 160,10"
            className="text-emerald-500"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: "icon-draw 2.4s ease-in-out infinite alternate" }}
          />
        </svg>
      </div>
    ),
  },
  {
    id: "chart-bubble-scatter",
    name: "Bubble scatter",
    category: "charts",
    description: "A scatter plot of variable-radius bubbles that twinkle in over faint axes.",
    tags: ["animated"],
    code: `@Composable
fun BubbleScatter(
    points: List<Triple<Float, Float, Float>> = listOf(
        Triple(0.15f, 0.7f, 7f), Triple(0.35f, 0.4f, 12f),
        Triple(0.55f, 0.62f, 9f), Triple(0.7f, 0.28f, 15f),
        Triple(0.85f, 0.5f, 8f),
    ),
    accent: Color = Color(0xFF6366F1),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, spring(stiffness = 120f), label = "grow")
    val axis = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.size(180.dp, 120.dp)) {
        drawLine(axis, Offset(0f, size.height), Offset(size.width, size.height))
        drawLine(axis, Offset(0f, 0f), Offset(0f, size.height))
        points.forEach { (x, y, r) ->
            drawCircle(
                accent.copy(alpha = 0.65f),
                radius = r * grow,
                center = Offset(x * size.width, y * size.height),
            )
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 180 120" className="w-full max-w-[220px]">
        <line x1="0" y1="118" x2="180" y2="118" className="stroke-border" strokeWidth="2" />
        <line x1="2" y1="0" x2="2" y2="118" className="stroke-border" strokeWidth="2" />
        {[
          { x: 28, y: 80, r: 9 },
          { x: 64, y: 46, r: 14 },
          { x: 98, y: 72, r: 11 },
          { x: 128, y: 32, r: 18 },
          { x: 156, y: 58, r: 10 },
        ].map((b, i) => (
          <circle
            key={i}
            cx={b.x}
            cy={b.y}
            r={b.r}
            className="fill-indigo-500/60"
            style={{ transformOrigin: `${b.x}px ${b.y}px`, animation: `icon-twinkle 2.6s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </svg>
    ),
  },
  {
    id: "chart-radar-stats",
    name: "Radar stats",
    category: "charts",
    description: "A five-axis radar chart with a translucent data polygon and twinkling vertices.",
    tags: ["animated"],
    code: `@Composable
fun RadarStats(
    values: List<Float> = listOf(0.9f, 0.6f, 0.75f, 0.45f, 0.8f),
    accent: Color = Color(0xFF8B5CF6),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(900, easing = EaseOutBack), label = "grow")
    val grid = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.size(160.dp)) {
        val r = size.minDimension / 2f * 0.82f
        val n = values.size
        fun vertex(i: Int, radius: Float): Offset {
            val a = -PI / 2 + i * 2 * PI / n
            return center + Offset(cos(a).toFloat() * radius, sin(a).toFloat() * radius)
        }
        for (ring in 1..3) {
            val rr = r * ring / 3f
            val grpath = Path().apply {
                repeat(n) { i ->
                    val p = vertex(i, rr)
                    if (i == 0) moveTo(p.x, p.y) else lineTo(p.x, p.y)
                }
                close()
            }
            drawPath(grpath, grid, style = Stroke(1.dp.toPx()))
        }
        val data = Path().apply {
            repeat(n) { i ->
                val p = vertex(i, r * values[i] * grow)
                if (i == 0) moveTo(p.x, p.y) else lineTo(p.x, p.y)
            }
            close()
        }
        drawPath(data, accent.copy(alpha = 0.25f))
        drawPath(data, accent, style = Stroke(2.dp.toPx()))
    }
}`,
    preview: (
      <svg viewBox="0 0 160 160" className="size-36 text-violet-500">
        <polygon points="80,18 139,61 116,130 44,130 21,61" className="fill-none stroke-border" strokeWidth="1.5" />
        <polygon points="80,38 121,68 105,114 55,114 38,68" className="fill-none stroke-border" strokeWidth="1.5" />
        <polygon
          points="80,24 132,63 102,122 52,116 30,62"
          className="fill-violet-500/25 stroke-violet-500"
          strokeWidth="2.5"
          strokeLinejoin="round"
          style={{ transformOrigin: "80px 80px", animation: "icon-twinkle 3s ease-in-out infinite" }}
        />
      </svg>
    ),
  },
  {
    id: "chart-contribution-heat",
    name: "Contribution heat",
    category: "charts",
    description: "A GitHub-style contribution heatmap whose cells fade in column by column.",
    tags: ["animated"],
    code: `@Composable
fun ContributionHeat(
    weeks: Int = 12,
    levels: List<List<Int>> = remember { sampleContribLevels(weeks) },
    modifier: Modifier = Modifier,
) {
    val palette = listOf(
        MaterialTheme.colorScheme.surfaceVariant,
        Color(0xFF9BE9A8), Color(0xFF40C463),
        Color(0xFF30A14E), Color(0xFF216E39),
    )
    val reveal by animateFloatAsState(1f, tween(900), label = "reveal")
    Canvas(modifier.fillMaxWidth().height(98.dp)) {
        val gap = 3.dp.toPx()
        val cell = (size.height - gap * 6) / 7f
        levels.forEachIndexed { w, col ->
            col.forEachIndexed { d, lvl ->
                val a = ((reveal * weeks) - w).coerceIn(0f, 1f)
                drawRoundRect(
                    color = palette[lvl].copy(alpha = a),
                    topLeft = Offset(w * (cell + gap), d * (cell + gap)),
                    size = Size(cell, cell),
                    cornerRadius = CornerRadius(2.dp.toPx()),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {Array.from({ length: 7 * 12 }).map((_, i) => {
          const lv = [0, 1, 0, 2, 3, 1, 4, 2, 0, 3, 1, 2][i % 12];
          const shades = ["bg-muted", "bg-emerald-500/30", "bg-emerald-500/55", "bg-emerald-500/75", "bg-emerald-500"];
          return (
            <span
              key={i}
              className={`size-2.5 rounded-[2px] ${shades[lv]}`}
              style={{ animation: `icon-twinkle 3s ease-in-out ${(i % 12) * 0.12}s infinite` }}
            />
          );
        })}
      </div>
    ),
  },
  {
    id: "chart-candlesticks",
    name: "Candlesticks",
    category: "charts",
    description: "A financial candlestick series with wicks and green/red bodies that rise in.",
    tags: ["animated"],
    code: `data class Candle(val open: Float, val close: Float, val high: Float, val low: Float)

@Composable
fun Candlesticks(
    candles: List<Candle> = sampleCandles(),
    modifier: Modifier = Modifier,
) {
    val rise by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "rise")
    val up = Color(0xFF16A34A)
    val down = Color(0xFFDC2626)
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val slot = size.width / candles.size
        val bw = slot * 0.5f
        fun y(v: Float) = size.height * (1f - v) * rise
        candles.forEachIndexed { i, c ->
            val cx = i * slot + slot / 2
            val color = if (c.close >= c.open) up else down
            drawLine(color, Offset(cx, y(c.high)), Offset(cx, y(c.low)), 1.5.dp.toPx())
            val top = y(maxOf(c.open, c.close))
            val bot = y(minOf(c.open, c.close))
            drawRoundRect(
                color = color,
                topLeft = Offset(cx - bw / 2, top),
                size = Size(bw, (bot - top).coerceAtLeast(2f)),
                cornerRadius = CornerRadius(2.dp.toPx()),
            )
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 200 120" className="w-full max-w-[240px]">
        {[
          { x: 16, hi: 18, lo: 70, o: 34, c: 58, up: false },
          { x: 44, hi: 30, lo: 84, o: 70, c: 44, up: true },
          { x: 72, hi: 24, lo: 66, o: 40, c: 30, up: true },
          { x: 100, hi: 14, lo: 60, o: 24, c: 50, up: false },
          { x: 128, hi: 28, lo: 78, o: 64, c: 38, up: true },
          { x: 156, hi: 20, lo: 56, o: 34, c: 26, up: true },
          { x: 184, hi: 10, lo: 48, o: 40, c: 18, up: true },
        ].map((k, i) => {
          const top = Math.min(k.o, k.c);
          const h = Math.abs(k.o - k.c);
          const color = k.up ? "text-emerald-600" : "text-rose-600";
          return (
            <g
              key={i}
              className={color}
              style={{ transformOrigin: "center bottom", animation: `icon-grow-y 3s ease-in-out ${i * 0.12}s infinite` }}
            >
              <line x1={k.x} y1={k.hi} x2={k.x} y2={k.lo} stroke="currentColor" strokeWidth="1.5" />
              <rect x={k.x - 6} y={top} width="12" height={Math.max(h, 3)} rx="2" fill="currentColor" />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    id: "chart-horizontal-bars",
    name: "Horizontal bars",
    category: "charts",
    description: "A ranked horizontal bar chart whose bars wipe out from the left in sequence.",
    tags: ["animated"],
    code: `@Composable
fun HorizontalBars(
    values: List<Float> = listOf(0.9f, 0.74f, 0.6f, 0.42f, 0.28f),
    accent: Color = Color(0xFF6366F1),
    modifier: Modifier = Modifier,
) {
    val grow = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
        grow.animateTo(1f, tween(900, easing = EaseOutCubic))
    }
    val track = MaterialTheme.colorScheme.surfaceVariant
    Canvas(modifier.fillMaxWidth().height(132.dp)) {
        val gap = 12.dp.toPx()
        val bh = (size.height - gap * (values.size - 1)) / values.size
        values.forEachIndexed { i, v ->
            val y = i * (bh + gap)
            val r = CornerRadius(bh / 2)
            drawRoundRect(track, Offset(0f, y), Size(size.width, bh), r)
            drawRoundRect(
                accent,
                Offset(0f, y),
                Size(size.width * v * grow.value, bh),
                r,
            )
        }
    }
}`,
    preview: (
      <div className="flex w-full max-w-[240px] flex-col gap-2.5">
        {[90, 74, 60, 42, 28].map((w, i) => (
          <div key={i} className="h-4 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full origin-left rounded-full bg-indigo-500"
              style={{ width: `${w}%`, animation: "badge-fillx 2.6s ease-in-out infinite", animationDelay: `${i * 120}ms` }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-stacked-bars",
    name: "Stacked bars",
    category: "charts",
    description: "A stacked column chart where each category's segments grow up in layers.",
    tags: ["animated"],
    code: `@Composable
fun StackedBars(
    cols: List<List<Float>> = listOf(
        listOf(0.3f, 0.25f, 0.2f), listOf(0.4f, 0.2f, 0.15f),
        listOf(0.25f, 0.35f, 0.18f), listOf(0.45f, 0.22f, 0.2f),
        listOf(0.3f, 0.3f, 0.25f),
    ),
    palette: List<Color> = listOf(Color(0xFF6366F1), Color(0xFF22D3EE), Color(0xFFA78BFA)),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "g")
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val gap = 12.dp.toPx()
        val bw = (size.width - gap * (cols.size - 1)) / cols.size
        cols.forEachIndexed { i, segs ->
            val x = i * (bw + gap)
            var yBottom = size.height
            segs.forEachIndexed { s, frac ->
                val h = size.height * frac * grow
                drawRect(palette[s], Offset(x, yBottom - h), Size(bw, h))
                yBottom -= h
            }
        }
    }
}`,
    preview: (
      <div className="flex h-32 w-full max-w-[240px] items-end justify-center gap-3">
        {[[30, 25, 20], [40, 20, 15], [25, 35, 18], [45, 22, 20], [30, 30, 25]].map((segs, i) => (
          <div
            key={i}
            className="flex w-7 origin-bottom flex-col-reverse overflow-hidden rounded-md"
            style={{ animation: "icon-grow-y 3s ease-in-out infinite", animationDelay: `${i * 120}ms` }}
          >
            {segs.map((h, s) => (
              <div key={s} className={["bg-indigo-500", "bg-cyan-400", "bg-violet-400"][s]} style={{ height: `${h * 1.1}px` }} />
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-grouped-bars",
    name: "Grouped bars",
    category: "charts",
    description: "A clustered bar chart comparing two series side by side per category.",
    tags: ["animated"],
    code: `@Composable
fun GroupedBars(
    a: List<Float> = listOf(0.6f, 0.8f, 0.45f, 0.7f),
    b: List<Float> = listOf(0.45f, 0.55f, 0.7f, 0.5f),
    colorA: Color = Color(0xFF6366F1),
    colorB: Color = Color(0xFF34D399),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "g")
    Canvas(modifier.fillMaxWidth().height(126.dp)) {
        val groupGap = 16.dp.toPx()
        val gw = (size.width - groupGap * (a.size - 1)) / a.size
        val bw = (gw - 4.dp.toPx()) / 2
        fun bar(x: Float, v: Float, c: Color) {
            val h = size.height * v * grow
            drawRoundRect(
                c, Offset(x, size.height - h), Size(bw, h),
                CornerRadius(3.dp.toPx()),
            )
        }
        a.indices.forEach { i ->
            val gx = i * (gw + groupGap)
            bar(gx, a[i], colorA)
            bar(gx + bw + 4.dp.toPx(), b[i], colorB)
        }
    }
}`,
    preview: (
      <div className="flex h-32 w-full max-w-[240px] items-end justify-center gap-4">
        {[[60, 45], [80, 55], [45, 70], [70, 50]].map((pair, i) => (
          <div key={i} className="flex items-end gap-1">
            {pair.map((h, s) => (
              <div
                key={s}
                className={`w-3.5 origin-bottom rounded-t-sm ${s === 0 ? "bg-indigo-500" : "bg-emerald-400"}`}
                style={{ height: `${h}%`, animation: "icon-grow-y 3s ease-in-out infinite", animationDelay: `${i * 100 + s * 60}ms` }}
              />
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-diverging-bars",
    name: "Diverging bars",
    category: "charts",
    description: "A diverging bar chart with positive and negative bars splitting from a center axis.",
    tags: ["animated"],
    code: `@Composable
fun DivergingBars(
    values: List<Float> = listOf(0.7f, -0.4f, 0.5f, -0.65f, 0.3f, -0.2f),
    pos: Color = Color(0xFF22C55E),
    neg: Color = Color(0xFFF43F5E),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "g")
    val axis = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val gap = 10.dp.toPx()
        val bw = (size.width - gap * (values.size - 1)) / values.size
        val mid = size.height / 2
        drawLine(axis, Offset(0f, mid), Offset(size.width, mid), 1.dp.toPx())
        values.forEachIndexed { i, v ->
            val x = i * (bw + gap)
            val h = mid * abs(v) * grow
            val y = if (v >= 0) mid - h else mid
            drawRoundRect(
                if (v >= 0) pos else neg,
                Offset(x, y), Size(bw, h),
                CornerRadius(3.dp.toPx()),
            )
        }
    }
}`,
    preview: (
      <div className="relative flex h-32 w-full max-w-[240px] items-center justify-center gap-2">
        <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
        {[70, -40, 50, -65, 30, -20].map((v, i) => (
          <div key={i} className="flex h-full w-6 flex-col justify-center">
            <div className="flex h-1/2 items-end">
              {v > 0 && (
                <div className="w-full origin-bottom rounded-t-sm bg-green-500" style={{ height: `${v}%`, animation: "icon-grow-y 3s ease-in-out infinite", animationDelay: `${i * 90}ms` }} />
              )}
            </div>
            <div className="flex h-1/2 items-start">
              {v < 0 && (
                <div className="w-full origin-top rounded-b-sm bg-rose-500" style={{ height: `${-v}%`, animation: "icon-grow-y 3s ease-in-out infinite", animationDelay: `${i * 90}ms` }} />
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-waterfall",
    name: "Waterfall",
    category: "charts",
    description: "A waterfall bridge chart showing running totals with connector steps.",
    tags: ["animated"],
    code: `@Composable
fun Waterfall(
    deltas: List<Float> = listOf(0.5f, 0.2f, -0.15f, 0.25f, -0.1f),
    up: Color = Color(0xFF22C55E),
    down: Color = Color(0xFFF43F5E),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "g")
    val connector = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.fillMaxWidth().height(128.dp)) {
        val gap = 14.dp.toPx()
        val bw = (size.width - gap * (deltas.size - 1)) / deltas.size
        var cum = 0f
        deltas.forEachIndexed { i, d ->
            val x = i * (bw + gap)
            val start = size.height * (1f - cum)
            val end = size.height * (1f - (cum + d) * grow)
            val top = minOf(start, end)
            val h = abs(start - end)
            drawRoundRect(
                if (d >= 0) up else down,
                Offset(x, top), Size(bw, h),
                CornerRadius(3.dp.toPx()),
            )
            if (i < deltas.lastIndex) {
                drawLine(connector, Offset(x + bw, end), Offset(x + bw + gap, end), 1.5.dp.toPx())
            }
            cum += d
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 128" className="w-full max-w-[250px]">
        {(() => {
          const deltas = [50, 20, -15, 25, -10];
          let cum = 0;
          const bw = 30, gap = 14;
          return deltas.map((d, i) => {
            const x = i * (bw + gap);
            const start = 128 - cum * 1.6;
            const end = 128 - (cum + d) * 1.6;
            const top = Math.min(start, end);
            const h = Math.abs(start - end);
            cum += d;
            return (
              <g key={i} style={{ transformOrigin: `${x}px 128px`, animation: "chart-wipe-up 3s ease-in-out infinite", animationDelay: `${i * 120}ms` }}>
                <rect x={x} y={top} width={bw} height={Math.max(h, 3)} rx="3" className={d >= 0 ? "fill-green-500" : "fill-rose-500"} />
                {i < deltas.length - 1 && <line x1={x + bw} y1={end} x2={x + bw + gap} y2={end} className="stroke-border" strokeWidth="1.5" strokeDasharray="2 2" />}
              </g>
            );
          });
        })()}
      </svg>
    ),
  },
  {
    id: "chart-bullet",
    name: "Bullet",
    category: "charts",
    description: "A compact bullet graph with qualitative bands, a measure bar and target marker.",
    tags: ["animated"],
    code: `@Composable
fun BulletGraph(
    measure: Float = 0.68f,
    target: Float = 0.8f,
    bands: List<Float> = listOf(0.4f, 0.7f, 1f),
    accent: Color = Color(0xFF111827),
    modifier: Modifier = Modifier,
) {
    val grow = remember { Animatable(0f) }
    LaunchedEffect(Unit) { grow.animateTo(1f, tween(900, easing = EaseOutCubic)) }
    val shades = listOf(0.18f, 0.30f, 0.45f)
    Canvas(modifier.fillMaxWidth().height(34.dp)) {
        val h = size.height
        var prev = 0f
        bands.forEachIndexed { i, b ->
            drawRect(
                Color.Gray.copy(alpha = shades[i]),
                Offset(size.width * prev, 0f),
                Size(size.width * (b - prev), h),
            )
            prev = b
        }
        drawRoundRect(
            accent,
            Offset(0f, h * 0.3f),
            Size(size.width * measure * grow.value, h * 0.4f),
            CornerRadius(2.dp.toPx()),
        )
        val tx = size.width * target
        drawLine(Color(0xFFF43F5E), Offset(tx, h * 0.12f), Offset(tx, h * 0.88f), 3.dp.toPx())
    }
}`,
    preview: (
      <div className="relative h-9 w-full max-w-[240px] overflow-hidden rounded-md">
        <div className="absolute inset-0 flex">
          <div className="h-full w-2/5 bg-foreground/15" />
          <div className="h-full w-[30%] bg-foreground/25" />
          <div className="h-full w-[30%] bg-foreground/40" />
        </div>
        <div className="absolute left-0 top-1/2 h-2.5 w-[68%] origin-left -translate-y-1/2 rounded-sm bg-foreground" style={{ animation: "badge-fillx 2.6s ease-in-out infinite" }} />
        <div className="absolute top-1/2 h-6 w-0.5 -translate-y-1/2 bg-rose-500" style={{ left: "80%" }} />
      </div>
    ),
  },
  {
    id: "chart-histogram",
    name: "Histogram",
    category: "charts",
    description: "A frequency histogram with a smooth distribution curve drawn over the bins.",
    tags: ["animated"],
    code: `@Composable
fun Histogram(
    bins: List<Float> = listOf(0.15f, 0.35f, 0.62f, 0.9f, 0.78f, 0.5f, 0.3f, 0.16f),
    accent: Color = Color(0xFF8B5CF6),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "g")
    val curve = remember { Animatable(0f) }
    LaunchedEffect(Unit) { curve.animateTo(1f, tween(1200, 300, EaseInOutCubic)) }
    Canvas(modifier.fillMaxWidth().height(124.dp)) {
        val bw = size.width / bins.size
        bins.forEachIndexed { i, v ->
            val h = size.height * v * grow
            drawRect(
                accent.copy(alpha = 0.35f),
                Offset(i * bw + 1.dp.toPx(), size.height - h),
                Size(bw - 2.dp.toPx(), h),
            )
        }
        val path = Path().apply {
            bins.forEachIndexed { i, v ->
                val x = i * bw + bw / 2
                val y = size.height * (1f - v)
                if (i == 0) moveTo(x, y) else lineTo(x, y)
            }
        }
        val m = PathMeasure().apply { setPath(path, false) }
        drawPath(
            Path().also { m.getSegment(0f, m.length * curve.value, it, true) },
            accent,
            style = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round),
        )
    }
}`,
    preview: (
      <div className="relative h-32 w-full max-w-[240px]">
        <div className="flex h-full items-end justify-center gap-0.5">
          {[15, 35, 62, 90, 78, 50, 30, 16].map((h, i) => (
            <div key={i} className="w-7 origin-bottom rounded-t-sm bg-violet-500/35" style={{ height: `${h}%`, animation: "icon-grow-y 3s ease-in-out infinite", animationDelay: `${i * 70}ms` }} />
          ))}
        </div>
        <svg viewBox="0 0 240 128" className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none">
          <polyline
            points="15,109 45,83 75,49 105,13 135,28 165,64 195,90 225,107"
            className="text-violet-500"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: "icon-draw 3s ease-in-out infinite alternate" }}
          />
        </svg>
      </div>
    ),
  },
  {
    id: "chart-lollipop",
    name: "Lollipop",
    category: "charts",
    description: "A lollipop chart with thin stems and dots that pop in along the baseline.",
    tags: ["animated"],
    code: `@Composable
fun Lollipop(
    values: List<Float> = listOf(0.5f, 0.78f, 0.62f, 0.9f, 0.46f, 0.7f),
    accent: Color = Color(0xFFEC4899),
    modifier: Modifier = Modifier,
) {
    val pop by animateFloatAsState(1f, spring(0.55f, 320f), label = "pop")
    val stem = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.fillMaxWidth().height(124.dp)) {
        val step = size.width / values.size
        values.forEachIndexed { i, v ->
            val x = step * i + step / 2
            val y = size.height * (1f - v)
            drawLine(stem, Offset(x, size.height), Offset(x, y), 2.dp.toPx())
            drawCircle(accent, 6.dp.toPx() * pop, Offset(x, y))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 124" className="w-full max-w-[250px]">
        {[50, 78, 62, 90, 46, 70].map((v, i) => {
          const x = 20 + i * 40;
          const y = 124 - v * 1.1;
          return (
            <g key={i}>
              <line x1={x} y1="124" x2={x} y2={y} className="stroke-border" strokeWidth="2" />
              <circle cx={x} cy={y} r="6" className="fill-pink-500" style={{ transformOrigin: `${x}px ${y}px`, animation: "chart-grow 3s ease-out infinite", animationDelay: `${i * 110}ms` }} />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    id: "chart-range-bars",
    name: "Range bars",
    category: "charts",
    description: "A floating bar chart of min–max ranges that expand from their midpoints.",
    tags: ["animated"],
    code: `@Composable
fun RangeBars(
    ranges: List<Pair<Float, Float>> = listOf(
        0.2f to 0.6f, 0.35f to 0.8f, 0.15f to 0.5f,
        0.45f to 0.92f, 0.3f to 0.7f,
    ),
    accent: Color = Color(0xFF0EA5E9),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "g")
    Canvas(modifier.fillMaxWidth().height(126.dp)) {
        val gap = 16.dp.toPx()
        val bw = (size.width - gap * (ranges.size - 1)) / ranges.size
        ranges.forEachIndexed { i, (lo, hi) ->
            val mid = (lo + hi) / 2
            val half = (hi - lo) / 2 * grow
            val yTop = size.height * (1f - (mid + half))
            val h = size.height * (half * 2)
            drawRoundRect(
                accent,
                Offset(i * (bw + gap), yTop),
                Size(bw, h),
                CornerRadius(bw / 2),
            )
        }
    }
}`,
    preview: (
      <div className="relative flex h-32 w-full max-w-[240px] items-stretch justify-center gap-4">
        {[[20, 60], [35, 80], [15, 50], [45, 92], [30, 70]].map(([lo, hi], i) => (
          <div key={i} className="relative w-5">
            <div
              className="absolute w-full rounded-full bg-sky-500"
              style={{ bottom: `${lo}%`, height: `${hi - lo}%`, transformOrigin: "center", animation: "chart-grow 3s ease-in-out infinite", animationDelay: `${i * 110}ms` }}
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-stepped-line",
    name: "Stepped line",
    category: "charts",
    description: "A step-interpolated line chart that draws on through right-angle transitions.",
    tags: ["animated"],
    code: `@Composable
fun SteppedLine(
    values: List<Float> = listOf(0.35f, 0.35f, 0.6f, 0.6f, 0.45f, 0.8f, 0.8f, 0.65f),
    accent: Color = Color(0xFF06B6D4),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1100, easing = EaseInOutCubic)) }
    Canvas(modifier.fillMaxWidth().height(116.dp)) {
        val step = size.width / (values.size - 1)
        val path = Path()
        var prevY = size.height * (1f - values[0])
        values.forEachIndexed { i, v ->
            val x = i * step
            val y = size.height * (1f - v)
            if (i == 0) {
                path.moveTo(x, y)
            } else {
                path.lineTo(x, prevY)
                path.lineTo(x, y)
            }
            prevY = y
        }
        val m = PathMeasure().apply { setPath(path, false) }
        drawPath(
            Path().also { m.getSegment(0f, m.length * draw.value, it, true) },
            accent,
            style = Stroke(3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round),
        )
    }
}`,
    preview: (
      <svg viewBox="0 0 240 116" className="w-full max-w-[250px]" fill="none">
        <polyline
          points="0,75 34,75 34,46 68,46 68,46 102,46 102,64 137,64 137,23 171,23 171,23 205,23 205,40 240,40"
          className="text-cyan-500"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ strokeDasharray: 520, strokeDashoffset: 520, animation: "icon-draw 3s ease-in-out infinite alternate" }}
        />
      </svg>
    ),
  },
  {
    id: "chart-sparkline-grid",
    name: "Sparkline grid",
    category: "charts",
    description: "A 2×2 grid of KPI sparklines, each a mini metric with a draw-on trend.",
    tags: ["animated"],
    code: `@Composable
fun SparklineGrid(
    metrics: List<Pair<String, List<Float>>> = listOf(
        "Users" to listOf(0.3f, 0.5f, 0.4f, 0.7f, 0.9f),
        "Revenue" to listOf(0.6f, 0.55f, 0.7f, 0.5f, 0.8f),
        "Churn" to listOf(0.8f, 0.7f, 0.75f, 0.5f, 0.4f),
        "Sessions" to listOf(0.4f, 0.6f, 0.5f, 0.65f, 0.85f),
    ),
    accent: Color = Color(0xFF6366F1),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1000, easing = EaseOutCubic)) }
    val grid = MaterialTheme.colorScheme.outlineVariant
    Column(modifier, verticalArrangement = Arrangement.spacedBy(10.dp)) {
        metrics.chunked(2).forEach { row ->
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                row.forEach { (label, pts) ->
                    Card(Modifier.width(82.dp), border = BorderStroke(1.dp, grid)) {
                        Column(Modifier.padding(8.dp)) {
                            Text(label, style = MaterialTheme.typography.labelSmall)
                            Canvas(Modifier.fillMaxWidth().height(24.dp)) {
                                val s = size.width / (pts.size - 1)
                                val p = Path()
                                pts.forEachIndexed { i, v ->
                                    val x = i * s
                                    val y = size.height * (1f - v)
                                    if (i == 0) p.moveTo(x, y) else p.lineTo(x, y)
                                }
                                val m = PathMeasure().apply { setPath(p, false) }
                                drawPath(
                                    Path().also { m.getSegment(0f, m.length * draw.value, it, true) },
                                    accent,
                                    style = Stroke(2.dp.toPx(), cap = StrokeCap.Round),
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { l: "Users", p: "0,22 14,12 28,16 42,5 56,2", c: "text-indigo-500" },
          { l: "Revenue", p: "0,10 14,12 28,6 42,14 56,3", c: "text-emerald-500" },
          { l: "Churn", p: "0,4 14,8 28,7 42,16 56,20", c: "text-rose-500" },
          { l: "Sessions", p: "0,16 14,9 28,13 42,7 56,2", c: "text-sky-500" },
        ].map((m, i) => (
          <div key={i} className="w-[88px] rounded-lg border bg-card p-2">
            <div className="text-[10px] text-muted-foreground">{m.l}</div>
            <svg viewBox="0 0 56 24" className="mt-1 h-6 w-full" fill="none">
              <polyline points={m.p} className={m.c} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 90, strokeDashoffset: 90, animation: "icon-draw 2.6s ease-in-out infinite alternate", animationDelay: `${i * 120}ms` }} />
            </svg>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-slope",
    name: "Slope",
    category: "charts",
    description: "A slope chart connecting before/after values across two axes with endpoint dots.",
    tags: ["animated"],
    code: `@Composable
fun SlopeChart(
    pairs: List<Triple<String, Float, Float>> = listOf(
        Triple("A", 0.3f, 0.7f), Triple("B", 0.6f, 0.5f),
        Triple("C", 0.8f, 0.9f), Triple("D", 0.45f, 0.2f),
    ),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(900, easing = EaseOutCubic)) }
    val axis = MaterialTheme.colorScheme.outlineVariant
    val palette = listOf(Color(0xFF6366F1), Color(0xFF10B981), Color(0xFFF59E0B), Color(0xFFF43F5E))
    Canvas(modifier.size(180.dp, 120.dp)) {
        val pad = 8.dp.toPx()
        val lx = pad
        val rx = size.width - pad
        drawLine(axis, Offset(lx, 0f), Offset(lx, size.height))
        drawLine(axis, Offset(rx, 0f), Offset(rx, size.height))
        pairs.forEachIndexed { i, (_, l, r) ->
            val ly = size.height * (1f - l)
            val ry = size.height * (1f - r)
            val c = palette[i % palette.size]
            drawLine(c, Offset(lx, ly), Offset(lx + (rx - lx) * draw.value, ly + (ry - ly) * draw.value), 2.5.dp.toPx())
            drawCircle(c, 4.dp.toPx(), Offset(lx, ly))
            if (draw.value > 0.98f) drawCircle(c, 4.dp.toPx(), Offset(rx, ry))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 180 120" className="w-full max-w-[220px]">
        <line x1="10" y1="0" x2="10" y2="120" className="stroke-border" strokeWidth="1.5" />
        <line x1="170" y1="0" x2="170" y2="120" className="stroke-border" strokeWidth="1.5" />
        {[
          { l: 84, r: 36, c: "text-indigo-500" },
          { l: 48, r: 60, c: "text-emerald-500" },
          { l: 24, r: 12, c: "text-amber-500" },
          { l: 66, r: 96, c: "text-rose-500" },
        ].map((s, i) => (
          <g key={i} className={s.c}>
            <line x1="10" y1={s.l} x2="170" y2={s.r} stroke="currentColor" strokeWidth="2.5" style={{ strokeDasharray: 165, strokeDashoffset: 165, animation: "icon-draw 3s ease-in-out infinite alternate", animationDelay: `${i * 90}ms` }} />
            <circle cx="10" cy={s.l} r="4" fill="currentColor" />
            <circle cx="170" cy={s.r} r="4" fill="currentColor" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "chart-threshold-line",
    name: "Threshold line",
    category: "charts",
    description: "A line chart that turns red above a dashed limit and green below it.",
    tags: ["animated"],
    code: `@Composable
fun ThresholdLine(
    values: List<Float> = listOf(0.4f, 0.55f, 0.7f, 0.85f, 0.62f, 0.5f, 0.75f),
    threshold: Float = 0.65f,
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1100, easing = EaseInOutCubic)) }
    val over = Color(0xFFF43F5E)
    val under = Color(0xFF22C55E)
    val limit = MaterialTheme.colorScheme.outline
    Canvas(modifier.fillMaxWidth().height(118.dp)) {
        val ty = size.height * (1f - threshold)
        drawLine(
            limit, Offset(0f, ty), Offset(size.width, ty), 1.5.dp.toPx(),
            pathEffect = PathEffect.dashPathEffect(floatArrayOf(8f, 8f)),
        )
        val step = size.width / (values.size - 1)
        val path = Path()
        values.forEachIndexed { i, v ->
            val x = i * step
            val y = size.height * (1f - v)
            if (i == 0) path.moveTo(x, y) else path.lineTo(x, y)
        }
        val m = PathMeasure().apply { setPath(path, false) }
        val shown = Path().also { m.getSegment(0f, m.length * draw.value, it, true) }
        clipRect(top = 0f, bottom = ty) { drawPath(shown, over, style = Stroke(3.dp.toPx(), cap = StrokeCap.Round)) }
        clipRect(top = ty, bottom = size.height) { drawPath(shown, under, style = Stroke(3.dp.toPx(), cap = StrokeCap.Round)) }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 118" className="w-full max-w-[250px]" fill="none">
        <line x1="0" y1="41" x2="240" y2="41" className="stroke-muted-foreground/50" strokeWidth="1.5" strokeDasharray="6 6" />
        <clipPath id="cg-th-over"><rect x="0" y="0" width="240" height="41" /></clipPath>
        <clipPath id="cg-th-under"><rect x="0" y="41" width="240" height="77" /></clipPath>
        <polyline points="0,71 40,53 80,35 120,18 160,45 200,59 240,30" className="text-rose-500" clipPath="url(#cg-th-over)" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: "icon-draw 3s ease-in-out infinite alternate" }} />
        <polyline points="0,71 40,53 80,35 120,18 160,45 200,59 240,30" className="text-green-500" clipPath="url(#cg-th-under)" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 320, strokeDashoffset: 320, animation: "icon-draw 3s ease-in-out infinite alternate" }} />
      </svg>
    ),
  },
  {
    id: "chart-confidence-band",
    name: "Confidence band",
    category: "charts",
    description: "A forecast line with a shaded confidence interval that fades in behind it.",
    tags: ["animated"],
    code: `@Composable
fun ConfidenceBand(
    mean: List<Float> = listOf(0.5f, 0.55f, 0.6f, 0.58f, 0.66f, 0.72f, 0.7f),
    spread: Float = 0.12f,
    accent: Color = Color(0xFF3B82F6),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "r")
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val step = size.width / (mean.size - 1)
        fun pt(i: Int, off: Float) = Offset(i * step, size.height * (1f - (mean[i] + off)))
        val band = Path().apply {
            mean.indices.forEach { i -> if (i == 0) moveTo(pt(i, spread).x, pt(i, spread).y) else lineTo(pt(i, spread).x, pt(i, spread).y) }
            for (i in mean.indices.reversed()) lineTo(pt(i, -spread).x, pt(i, -spread).y)
            close()
        }
        clipRect(right = size.width * reveal) {
            drawPath(band, accent.copy(alpha = 0.18f))
            val line = Path().apply {
                mean.indices.forEach { i -> if (i == 0) moveTo(pt(i, 0f).x, pt(i, 0f).y) else lineTo(pt(i, 0f).x, pt(i, 0f).y) }
            }
            drawPath(line, accent, style = Stroke(3.dp.toPx(), cap = StrokeCap.Round))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 120" className="w-full max-w-[250px]" fill="none">
        <g className="text-blue-500" style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
          <path d="M0,46 40,40 80,34 120,38 160,26 200,17 240,21 240,50 200,46 160,55 120,67 80,63 40,69 0,74 Z" fill="currentColor" fillOpacity="0.18" />
          <polyline points="0,60 40,55 80,48 120,52 160,40 200,31 240,35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
  {
    id: "chart-combo",
    name: "Combo",
    category: "charts",
    description: "A dual-axis combo chart pairing grow-in volume bars with a draw-on trend line.",
    tags: ["animated"],
    code: `@Composable
fun ComboChart(
    bars: List<Float> = listOf(0.4f, 0.65f, 0.5f, 0.8f, 0.6f, 0.9f),
    line: List<Float> = listOf(0.3f, 0.45f, 0.5f, 0.62f, 0.7f, 0.85f),
    barColor: Color = Color(0xFFC7D2FE),
    lineColor: Color = Color(0xFF4F46E5),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(800, easing = EaseOutCubic), label = "g")
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1100, 300, EaseInOutCubic)) }
    Canvas(modifier.fillMaxWidth().height(124.dp)) {
        val slot = size.width / bars.size
        val bw = slot * 0.55f
        bars.forEachIndexed { i, v ->
            val h = size.height * v * grow
            drawRoundRect(
                barColor,
                Offset(i * slot + (slot - bw) / 2, size.height - h),
                Size(bw, h), CornerRadius(3.dp.toPx()),
            )
        }
        val path = Path()
        line.forEachIndexed { i, v ->
            val x = i * slot + slot / 2
            val y = size.height * (1f - v)
            if (i == 0) path.moveTo(x, y) else path.lineTo(x, y)
        }
        val m = PathMeasure().apply { setPath(path, false) }
        drawPath(
            Path().also { m.getSegment(0f, m.length * draw.value, it, true) },
            lineColor, style = Stroke(3.dp.toPx(), cap = StrokeCap.Round),
        )
    }
}`,
    preview: (
      <div className="relative h-32 w-full max-w-[240px]">
        <div className="flex h-full items-end justify-center gap-3">
          {[40, 65, 50, 80, 60, 90].map((h, i) => (
            <div key={i} className="w-6 origin-bottom rounded-t-sm bg-indigo-200 dark:bg-indigo-500/40" style={{ height: `${h}%`, animation: "icon-grow-y 3s ease-in-out infinite", animationDelay: `${i * 90}ms` }} />
          ))}
        </div>
        <svg viewBox="0 0 240 128" className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none">
          <polyline points="20,90 60,70 100,64 140,49 180,38 220,19" className="text-indigo-600" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 280, strokeDashoffset: 280, animation: "icon-draw 3s ease-in-out infinite alternate" }} />
        </svg>
      </div>
    ),
  },
  {
    id: "chart-stacked-area",
    name: "Stacked area",
    category: "charts",
    description: "Three translucent series stacked into bands that wipe in left to right.",
    tags: ["animated"],
    code: `@Composable
fun StackedArea(
    series: List<List<Float>> = listOf(
        listOf(0.2f, 0.25f, 0.18f, 0.3f, 0.22f, 0.28f),
        listOf(0.18f, 0.2f, 0.28f, 0.16f, 0.26f, 0.2f),
        listOf(0.22f, 0.18f, 0.2f, 0.24f, 0.18f, 0.26f),
    ),
    palette: List<Color> = listOf(Color(0xFF6366F1), Color(0xFF22D3EE), Color(0xFFA78BFA)),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "r")
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val step = size.width / (series[0].size - 1)
        val cum = FloatArray(series[0].size)
        clipRect(right = size.width * reveal) {
            series.forEachIndexed { s, ser ->
                val top = Path()
                ser.forEachIndexed { i, v ->
                    val x = i * step
                    val yTop = size.height * (1f - (cum[i] + v))
                    if (i == 0) top.moveTo(x, yTop) else top.lineTo(x, yTop)
                }
                for (i in ser.indices.reversed()) {
                    top.lineTo(i * step, size.height * (1f - cum[i]))
                }
                top.close()
                drawPath(top, palette[s].copy(alpha = 0.55f))
                ser.forEachIndexed { i, v -> cum[i] += v }
            }
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 120" className="w-full max-w-[250px]" preserveAspectRatio="none">
        <g style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
          <path d="M0,120 0,86 48,82 96,90 144,78 192,84 240,80 240,120 Z" className="fill-indigo-500/55" />
          <path d="M0,86 48,82 96,90 144,78 192,84 240,80 240,56 192,52 144,46 96,58 48,50 0,54 Z" className="fill-cyan-400/55" />
          <path d="M0,54 48,50 96,58 144,46 192,52 240,56 240,30 192,28 144,24 96,34 48,30 0,32 Z" className="fill-violet-400/55" />
        </g>
      </svg>
    ),
  },
  {
    id: "chart-streamgraph",
    name: "Streamgraph",
    category: "charts",
    description: "A center-baseline streamgraph whose organic bands flow in symmetrically.",
    tags: ["animated"],
    code: `@Composable
fun Streamgraph(
    series: List<List<Float>> = listOf(
        listOf(0.12f, 0.18f, 0.14f, 0.22f, 0.16f, 0.2f),
        listOf(0.2f, 0.16f, 0.24f, 0.18f, 0.26f, 0.2f),
        listOf(0.14f, 0.2f, 0.16f, 0.22f, 0.18f, 0.24f),
    ),
    palette: List<Color> = listOf(Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFF8B5CF6)),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "r")
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val n = series[0].size
        val step = size.width / (n - 1)
        val totals = FloatArray(n) { i -> series.sumOf { it[i].toDouble() }.toFloat() }
        val lower = FloatArray(n) { i -> 0.5f - totals[i] / 2 }
        clipRect(right = size.width * reveal) {
            series.forEachIndexed { s, ser ->
                val p = Path()
                ser.forEachIndexed { i, v -> val x = i * step; val y = size.height * (lower[i]); if (i == 0) p.moveTo(x, y) else p.lineTo(x, y) }
                for (i in ser.indices.reversed()) p.lineTo(i * step, size.height * (lower[i] + ser[i]))
                p.close()
                drawPath(p, palette[s])
                ser.forEachIndexed { i, v -> lower[i] += v }
            }
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 120" className="w-full max-w-[250px]" preserveAspectRatio="none">
        <g style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
          <path d="M0,33 48,30 96,28 144,24 192,30 240,28 240,44 192,46 144,40 96,46 48,46 0,47 Z" className="fill-amber-500" />
          <path d="M0,47 48,46 96,46 144,40 192,46 240,44 240,72 192,70 144,68 96,76 48,70 0,71 Z" className="fill-pink-500" />
          <path d="M0,71 48,70 96,76 144,68 192,70 240,72 240,90 192,92 144,86 96,92 48,92 0,89 Z" className="fill-violet-500" />
        </g>
      </svg>
    ),
  },
  {
    id: "chart-stepped-area",
    name: "Stepped area",
    category: "charts",
    description: "A stepped area chart with a crisp staircase top and a soft gradient fill.",
    tags: ["animated"],
    code: `@Composable
fun SteppedArea(
    values: List<Float> = listOf(0.3f, 0.5f, 0.42f, 0.7f, 0.6f, 0.82f),
    accent: Color = Color(0xFF14B8A6),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "r")
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val step = size.width / values.size
        val top = Path().apply {
            moveTo(0f, size.height * (1f - values[0]))
            values.forEachIndexed { i, v ->
                val y = size.height * (1f - v)
                lineTo(i * step, y)
                lineTo((i + 1) * step, y)
            }
        }
        val area = Path().apply { addPath(top); lineTo(size.width, size.height); lineTo(0f, size.height); close() }
        clipRect(right = size.width * reveal) {
            drawPath(area, Brush.verticalGradient(listOf(accent.copy(alpha = 0.35f), Color.Transparent)))
            drawPath(top, accent, style = Stroke(2.5.dp.toPx(), join = StrokeJoin.Round))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 120" className="w-full max-w-[250px]">
        <defs>
          <linearGradient id="cg-step-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="text-teal-500" style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
          <path d="M0,84 40,84 40,60 80,60 80,70 120,70 120,36 160,36 160,48 200,48 200,22 240,22 240,120 0,120 Z" fill="url(#cg-step-area)" />
          <path d="M0,84 40,84 40,60 80,60 80,70 120,70 120,36 160,36 160,48 200,48 200,22 240,22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
  {
    id: "chart-pie",
    name: "Pie",
    category: "charts",
    description: "A classic pie chart whose slices reveal with an iris wipe from the center.",
    tags: ["animated"],
    code: `@Composable
fun PieChart(
    slices: List<Pair<Float, Color>> = listOf(
        0.35f to Color(0xFF6366F1), 0.25f to Color(0xFF22D3EE),
        0.22f to Color(0xFFF59E0B), 0.18f to Color(0xFFF43F5E),
    ),
    modifier: Modifier = Modifier,
) {
    val sweep by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "s")
    Canvas(modifier.size(140.dp)) {
        var start = -90f
        slices.forEach { (frac, color) ->
            val deg = 360f * frac
            drawArc(color, start, deg * sweep, useCenter = true)
            start += deg
        }
    }
}`,
    preview: (
      <div
        className="size-32 rounded-full"
        style={{
          background: "conic-gradient(#6366f1 0 35%, #22d3ee 35% 60%, #f59e0b 60% 82%, #f43f5e 82% 100%)",
          animation: "chart-iris 3s ease-out infinite",
        }}
      />
    ),
  },
  {
    id: "chart-half-gauge",
    name: "Half gauge",
    category: "charts",
    description: "A semicircular gauge whose colored arc sweeps to a value over a soft track.",
    tags: ["animated"],
    code: `@Composable
fun HalfGauge(
    value: Float = 0.64f,
    accent: Color = Color(0xFFF59E0B),
    modifier: Modifier = Modifier,
) {
    val sweep by animateFloatAsState(value, tween(1100, easing = EaseOutCubic), label = "s")
    val track = MaterialTheme.colorScheme.surfaceVariant
    Box(modifier.size(160.dp, 92.dp), contentAlignment = Alignment.BottomCenter) {
        Canvas(Modifier.fillMaxSize()) {
            val stroke = Stroke(14.dp.toPx(), cap = StrokeCap.Round)
            val arc = Size(size.width, size.width)
            drawArc(track, 180f, 180f, false, size = arc, style = stroke)
            drawArc(accent, 180f, 180f * sweep, false, size = arc, style = stroke)
        }
        Text(
            "\${(sweep * 100).toInt()}",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold,
        )
    }
}`,
    preview: (
      <div className="relative w-40">
        <svg viewBox="0 0 160 84" className="w-full">
          <path d="M12,80 A68,68 0 0 1 148,80" fill="none" className="text-muted" stroke="currentColor" strokeWidth="13" strokeLinecap="round" />
          <path d="M12,80 A68,68 0 0 1 148,80" fill="none" className="text-amber-500" stroke="currentColor" strokeWidth="13" strokeLinecap="round" pathLength={100} style={{ strokeDasharray: "64 100", strokeDashoffset: 64, animation: "icon-draw 2.6s ease-out infinite alternate" }} />
        </svg>
        <span className="absolute inset-x-0 bottom-1 text-center text-3xl font-bold text-foreground">64</span>
      </div>
    ),
  },
  {
    id: "chart-radial-bars",
    name: "Radial bars",
    category: "charts",
    description: "A circular bar chart whose spokes draw outward from a shared center hub.",
    tags: ["animated"],
    code: `@Composable
fun RadialBars(
    values: List<Float> = listOf(0.9f, 0.7f, 0.85f, 0.5f, 0.75f, 0.6f, 0.95f, 0.55f),
    accent: Color = Color(0xFF8B5CF6),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "g")
    Canvas(modifier.size(150.dp)) {
        val n = values.size
        val inner = size.minDimension * 0.16f
        val maxLen = size.minDimension * 0.34f
        values.forEachIndexed { i, v ->
            val a = (-PI / 2 + i * 2 * PI / n).toFloat()
            val dir = Offset(cos(a), sin(a))
            val s = center + dir * inner
            val e = center + dir * (inner + maxLen * v * grow)
            drawLine(accent, s, e, 7.dp.toPx(), cap = StrokeCap.Round)
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 150 150" className="size-36 text-violet-500">
        {[0.9, 0.7, 0.85, 0.5, 0.75, 0.6, 0.95, 0.55].map((v, i, arr) => {
          const a = -Math.PI / 2 + (i * 2 * Math.PI) / arr.length;
          const inner = 24, max = 48;
          const sx = 75 + Math.cos(a) * inner;
          const sy = 75 + Math.sin(a) * inner;
          const ex = 75 + Math.cos(a) * (inner + max * v);
          const ey = 75 + Math.sin(a) * (inner + max * v);
          const len = Math.hypot(ex - sx, ey - sy);
          return (
            <line key={i} x1={sx} y1={sy} x2={ex} y2={ey} stroke="currentColor" strokeWidth="7" strokeLinecap="round" style={{ strokeDasharray: len, strokeDashoffset: len, animation: "icon-draw 2.8s ease-out infinite alternate", animationDelay: `${i * 70}ms` }} />
          );
        })}
        <circle cx="75" cy="75" r="14" className="fill-violet-500/20" />
      </svg>
    ),
  },
  {
    id: "chart-polar-area",
    name: "Polar area",
    category: "charts",
    description: "A polar area rose where each equal-angle wedge's radius encodes its value.",
    tags: ["animated"],
    code: `@Composable
fun PolarArea(
    values: List<Float> = listOf(0.9f, 0.6f, 0.75f, 0.5f, 0.85f, 0.65f),
    accent: Color = Color(0xFF0EA5E9),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "g")
    Canvas(modifier.size(150.dp)) {
        val n = values.size
        val seg = 360f / n
        val maxR = size.minDimension / 2 * 0.9f
        values.forEachIndexed { i, v ->
            val r = maxR * v * grow
            drawArc(
                accent.copy(alpha = 0.35f + 0.1f * (i % 3)),
                -90f + i * seg, seg, useCenter = true,
                topLeft = Offset(center.x - r, center.y - r),
                size = Size(r * 2, r * 2),
            )
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 150 150" className="size-36 text-sky-500" style={{ animation: "chart-iris 3s ease-out infinite" }}>
        {[0.9, 0.6, 0.75, 0.5, 0.85, 0.65].map((v, i, arr) => {
          const seg = (2 * Math.PI) / arr.length;
          const a0 = -Math.PI / 2 + i * seg;
          const a1 = a0 + seg;
          const r = 66 * v;
          const x0 = 75 + Math.cos(a0) * r;
          const y0 = 75 + Math.sin(a0) * r;
          const x1 = 75 + Math.cos(a1) * r;
          const y1 = 75 + Math.sin(a1) * r;
          return <path key={i} d={`M75,75 L${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1} Z`} fill="currentColor" fillOpacity={0.35 + 0.12 * (i % 3)} />;
        })}
      </svg>
    ),
  },
  {
    id: "chart-needle-gauge",
    name: "Needle gauge",
    category: "charts",
    description: "A speedometer with tick marks and a needle that swings to its reading.",
    tags: ["animated"],
    code: `@Composable
fun NeedleGauge(
    value: Float = 0.7f,
    modifier: Modifier = Modifier,
) {
    val angle by animateFloatAsState(
        targetValue = 180f * value,
        animationSpec = spring(0.6f, 120f),
        label = "angle",
    )
    val tickColor = MaterialTheme.colorScheme.outline
    val zones = listOf(Color(0xFF22C55E), Color(0xFFF59E0B), Color(0xFFF43F5E))
    Canvas(modifier.size(170.dp, 100.dp)) {
        val arc = Size(size.width, size.width)
        zones.forEachIndexed { i, c ->
            drawArc(c, 180f + i * 60f, 60f, false, size = arc, style = Stroke(10.dp.toPx(), cap = StrokeCap.Butt))
        }
        repeat(11) { i ->
            val a = (180f + i * 18f) * PI.toFloat() / 180f
            val outer = center.copy(y = size.height) + Offset(cos(a), sin(a)) * (size.width / 2 - 14.dp.toPx())
            val inner = center.copy(y = size.height) + Offset(cos(a), sin(a)) * (size.width / 2 - 22.dp.toPx())
            drawLine(tickColor, inner, outer, 1.5.dp.toPx())
        }
        val pivot = center.copy(y = size.height)
        val na = (180f + angle) * PI.toFloat() / 180f
        drawLine(Color(0xFF111827), pivot, pivot + Offset(cos(na), sin(na)) * (size.width / 2 - 26.dp.toPx()), 3.dp.toPx(), cap = StrokeCap.Round)
        drawCircle(Color(0xFF111827), 6.dp.toPx(), pivot)
    }
}`,
    preview: (
      <div className="relative w-44">
        <svg viewBox="0 0 170 96" className="w-full">
          <path d="M14,90 A71,71 0 0 1 41,35" fill="none" className="text-green-500" stroke="currentColor" strokeWidth="9" />
          <path d="M44,32 A71,71 0 0 1 126,32" fill="none" className="text-amber-500" stroke="currentColor" strokeWidth="9" />
          <path d="M129,35 A71,71 0 0 1 156,90" fill="none" className="text-rose-500" stroke="currentColor" strokeWidth="9" />
          <g style={{ transformOrigin: "85px 90px", animation: "chart-needle 3s cubic-bezier(0.16,1,0.3,1) infinite", ["--from" as string]: "-90deg", ["--to" as string]: "36deg" } as React.CSSProperties}>
            <line x1="85" y1="90" x2="85" y2="32" className="stroke-foreground" strokeWidth="3" strokeLinecap="round" />
          </g>
          <circle cx="85" cy="90" r="6" className="fill-foreground" />
        </svg>
      </div>
    ),
  },
  {
    id: "chart-sunburst",
    name: "Sunburst",
    category: "charts",
    description: "A two-level sunburst whose inner categories fan out into child segments.",
    tags: ["animated"],
    code: `@Composable
fun Sunburst(
    inner: List<Pair<Float, Color>> = listOf(
        0.4f to Color(0xFF6366F1), 0.35f to Color(0xFF10B981), 0.25f to Color(0xFFF59E0B),
    ),
    outer: List<Float> = listOf(0.22f, 0.18f, 0.2f, 0.15f, 0.13f, 0.12f),
    modifier: Modifier = Modifier,
) {
    val sweep by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "s")
    val hub = MaterialTheme.colorScheme.surface
    Canvas(modifier.size(150.dp)) {
        val rIn = size.minDimension * 0.28f
        val rOut = size.minDimension * 0.46f
        var a = -90f
        inner.forEach { (f, c) ->
            val deg = 360f * f
            drawArc(c, a, deg * sweep, true, topLeft = center - Offset(rIn, rIn), size = Size(rIn * 2, rIn * 2))
            a += deg
        }
        a = -90f
        outer.forEachIndexed { i, f ->
            val deg = 360f * f
            drawArc(
                inner[i % inner.size].second.copy(alpha = 0.55f),
                a, deg * sweep, true,
                topLeft = center - Offset(rOut, rOut), size = Size(rOut * 2, rOut * 2),
            )
            a += deg
        }
        drawCircle(hub, rIn * 0.45f, center)
    }
}`,
    preview: (
      <div className="relative grid size-36 place-items-center" style={{ animation: "chart-iris 3s ease-out infinite" }}>
        <div className="absolute size-36 rounded-full" style={{ background: "conic-gradient(#6366f1aa 0 79deg, #10b981aa 79deg 144deg, #f59e0baa 144deg 216deg, #6366f1aa 216deg 270deg, #10b981aa 270deg 317deg, #f59e0baa 317deg 360deg)" }} />
        <div className="absolute size-24 rounded-full" style={{ background: "conic-gradient(#6366f1 0 144deg, #10b981 144deg 270deg, #f59e0b 270deg 360deg)" }} />
        <div className="absolute size-9 rounded-full bg-card" />
      </div>
    ),
  },
  {
    id: "chart-spiral",
    name: "Spiral",
    category: "charts",
    description: "An Archimedean spiral plot whose path draws on to map a cyclical series.",
    tags: ["animated"],
    code: `@Composable
fun SpiralChart(
    turns: Int = 4,
    accent: Color = Color(0xFFEC4899),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1600, easing = EaseInOutCubic)) }
    Canvas(modifier.size(150.dp)) {
        val maxR = size.minDimension / 2 * 0.9f
        val path = Path()
        val steps = turns * 60
        for (i in 0..steps) {
            val t = i / steps.toFloat()
            val a = t * turns * 2 * PI.toFloat() - PI.toFloat() / 2
            val r = maxR * t
            val p = center + Offset(cos(a), sin(a)) * r
            if (i == 0) path.moveTo(p.x, p.y) else path.lineTo(p.x, p.y)
        }
        val m = PathMeasure().apply { setPath(path, false) }
        drawPath(
            Path().also { m.getSegment(0f, m.length * draw.value, it, true) },
            Brush.sweepGradient(listOf(accent, Color(0xFF8B5CF6), accent), center),
            style = Stroke(3.dp.toPx(), cap = StrokeCap.Round),
        )
    }
}`,
    preview: (
      <svg viewBox="0 0 150 150" className="size-36 text-pink-500" fill="none">
        <path
          d="M75,75 Q80,70 80,66 Q80,55 69,55 Q52,55 52,72 Q52,95 80,95 Q113,95 113,62 Q113,25 70,25 Q22,25 22,72 Q22,124 80,124"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ strokeDasharray: 520, strokeDashoffset: 520, animation: "icon-draw 3.4s ease-in-out infinite alternate" }}
        />
      </svg>
    ),
  },
  {
    id: "chart-gauge-cluster",
    name: "Gauge cluster",
    category: "charts",
    description: "A trio of mini ring gauges whose arcs sweep to three side-by-side KPIs.",
    tags: ["animated"],
    code: `@Composable
fun GaugeCluster(
    gauges: List<Triple<String, Float, Color>> = listOf(
        Triple("CPU", 0.62f, Color(0xFF6366F1)),
        Triple("RAM", 0.81f, Color(0xFFF59E0B)),
        Triple("Disk", 0.45f, Color(0xFF10B981)),
    ),
    modifier: Modifier = Modifier,
) {
    val track = MaterialTheme.colorScheme.surfaceVariant
    Row(modifier, horizontalArrangement = Arrangement.spacedBy(14.dp)) {
        gauges.forEach { (label, value, color) ->
            val sweep by animateFloatAsState(value, tween(1000, easing = EaseOutCubic), label = label)
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Box(Modifier.size(56.dp), contentAlignment = Alignment.Center) {
                    Canvas(Modifier.fillMaxSize()) {
                        val st = Stroke(6.dp.toPx(), cap = StrokeCap.Round)
                        drawArc(track, -90f, 360f, false, style = st)
                        drawArc(color, -90f, 360f * sweep, false, style = st)
                    }
                    Text("\${(sweep * 100).toInt()}", style = MaterialTheme.typography.labelMedium)
                }
                Text(label, style = MaterialTheme.typography.labelSmall)
            }
        }
    }
}`,
    preview: (
      <div className="flex gap-4">
        {[
          { l: "CPU", v: 62, c: "text-indigo-500", d: "62 100" },
          { l: "RAM", v: 81, c: "text-amber-500", d: "81 100" },
          { l: "Disk", v: 45, c: "text-emerald-500", d: "45 100" },
        ].map((g, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="relative grid size-14 place-items-center">
              <svg viewBox="0 0 48 48" className="size-14 -rotate-90">
                <circle cx="24" cy="24" r="20" fill="none" className="text-muted" stroke="currentColor" strokeWidth="5" />
                <circle cx="24" cy="24" r="20" fill="none" className={g.c} stroke="currentColor" strokeWidth="5" strokeLinecap="round" pathLength={100} style={{ strokeDasharray: g.d, strokeDashoffset: g.v, animation: "icon-draw 2.6s ease-out infinite alternate", animationDelay: `${i * 120}ms` }} />
              </svg>
              <span className="absolute text-xs font-semibold text-foreground">{g.v}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">{g.l}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-segmented-ring",
    name: "Segmented ring",
    category: "charts",
    description: "A circular meter of discrete segment ticks that light up around the ring.",
    tags: ["animated"],
    code: `@Composable
fun SegmentedRing(
    total: Int = 24,
    filled: Int = 17,
    accent: Color = Color(0xFF14B8A6),
    modifier: Modifier = Modifier,
) {
    val progress = remember { Animatable(0f) }
    LaunchedEffect(Unit) { progress.animateTo(filled.toFloat(), tween(1100, easing = EaseOutCubic)) }
    val track = MaterialTheme.colorScheme.surfaceVariant
    Box(modifier.size(140.dp), contentAlignment = Alignment.Center) {
        Canvas(Modifier.fillMaxSize()) {
            val seg = 360f / total
            val r = size.minDimension / 2 - 8.dp.toPx()
            repeat(total) { i ->
                val lit = i < progress.value.toInt()
                drawArc(
                    if (lit) accent else track,
                    -90f + i * seg + 2f, seg - 4f, false,
                    topLeft = center - Offset(r, r), size = Size(r * 2, r * 2),
                    style = Stroke(10.dp.toPx(), cap = StrokeCap.Round),
                )
            }
        }
        Text("71%", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.SemiBold)
    }
}`,
    preview: (
      <div className="relative grid size-32 place-items-center">
        <svg viewBox="0 0 100 100" className="size-32 -rotate-90">
          {Array.from({ length: 24 }).map((_, i) => {
            const seg = 360 / 24;
            const a0 = ((i * seg + 2) * Math.PI) / 180;
            const a1 = (((i + 1) * seg - 2) * Math.PI) / 180;
            const r = 44;
            const x0 = 50 + r * Math.cos(a0), y0 = 50 + r * Math.sin(a0);
            const x1 = 50 + r * Math.cos(a1), y1 = 50 + r * Math.sin(a1);
            const lit = i < 17;
            return <path key={i} d={`M${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1}`} fill="none" strokeWidth="9" strokeLinecap="round" className={lit ? "text-teal-500" : "text-muted"} stroke="currentColor" style={{ animation: lit ? "chart-blip 2.8s ease-out infinite" : undefined, animationDelay: `${i * 45}ms` }} />;
          })}
        </svg>
        <span className="absolute text-lg font-semibold text-foreground">71%</span>
      </div>
    ),
  },
  {
    id: "chart-box-plot",
    name: "Box plot",
    category: "charts",
    description: "A box-and-whisker plot of quartiles and medians that wipes in across categories.",
    tags: ["animated"],
    code: `data class BoxStat(val min: Float, val q1: Float, val med: Float, val q3: Float, val max: Float)

@Composable
fun BoxPlot(
    boxes: List<BoxStat> = listOf(
        BoxStat(0.2f, 0.35f, 0.5f, 0.65f, 0.85f),
        BoxStat(0.3f, 0.45f, 0.55f, 0.7f, 0.9f),
        BoxStat(0.15f, 0.3f, 0.42f, 0.55f, 0.75f),
        BoxStat(0.35f, 0.5f, 0.62f, 0.78f, 0.95f),
    ),
    accent: Color = Color(0xFF6366F1),
    modifier: Modifier = Modifier,
) {
    val reveal = remember { Animatable(0f) }
    LaunchedEffect(Unit) { reveal.animateTo(1f, tween(900, easing = EaseOutCubic)) }
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val slot = size.width / boxes.size
        val bw = slot * 0.46f
        fun y(v: Float) = size.height * (1f - v)
        clipRect(right = size.width * reveal.value) {
            boxes.forEachIndexed { i, b ->
                val cx = i * slot + slot / 2
                drawLine(accent, Offset(cx, y(b.max)), Offset(cx, y(b.min)), 1.5.dp.toPx())
                drawLine(accent, Offset(cx - bw / 3, y(b.max)), Offset(cx + bw / 3, y(b.max)), 1.5.dp.toPx())
                drawLine(accent, Offset(cx - bw / 3, y(b.min)), Offset(cx + bw / 3, y(b.min)), 1.5.dp.toPx())
                val top = y(b.q3)
                val h = y(b.q1) - top
                drawRoundRect(accent.copy(alpha = 0.22f), Offset(cx - bw / 2, top), Size(bw, h), CornerRadius(3.dp.toPx()))
                drawRoundRect(accent, Offset(cx - bw / 2, top), Size(bw, h), CornerRadius(3.dp.toPx()), style = Stroke(1.5.dp.toPx()))
                drawLine(accent, Offset(cx - bw / 2, y(b.med)), Offset(cx + bw / 2, y(b.med)), 2.dp.toPx())
            }
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 130" className="w-full max-w-[250px]" style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
        {[
          { min: 110, q1: 85, med: 65, q3: 45, max: 20 },
          { min: 91, q1: 72, med: 59, q3: 39, max: 13 },
          { min: 111, q1: 91, med: 75, q3: 59, max: 33 },
          { min: 85, q1: 65, med: 49, q3: 29, max: 7 },
        ].map((b, i) => {
          const cx = 36 + i * 56;
          const bw = 26;
          return (
            <g key={i} className="text-indigo-500">
              <line x1={cx} y1={b.max} x2={cx} y2={b.min} stroke="currentColor" strokeWidth="1.5" />
              <line x1={cx - 8} y1={b.max} x2={cx + 8} y2={b.max} stroke="currentColor" strokeWidth="1.5" />
              <line x1={cx - 8} y1={b.min} x2={cx + 8} y2={b.min} stroke="currentColor" strokeWidth="1.5" />
              <rect x={cx - bw / 2} y={b.q3} width={bw} height={b.q1 - b.q3} rx="3" className="fill-indigo-500/20 stroke-indigo-500" strokeWidth="1.5" />
              <line x1={cx - bw / 2} y1={b.med} x2={cx + bw / 2} y2={b.med} stroke="currentColor" strokeWidth="2" />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    id: "chart-violin",
    name: "Violin",
    category: "charts",
    description: "A violin plot of mirrored density curves that bloom open from their center axes.",
    tags: ["animated"],
    code: `@Composable
fun ViolinPlot(
    densities: List<List<Float>> = listOf(
        listOf(0.1f, 0.3f, 0.7f, 1f, 0.6f, 0.25f, 0.08f),
        listOf(0.08f, 0.2f, 0.5f, 0.9f, 1f, 0.4f, 0.12f),
        listOf(0.12f, 0.4f, 0.9f, 0.7f, 0.5f, 0.3f, 0.1f),
    ),
    accent: Color = Color(0xFFA855F7),
    modifier: Modifier = Modifier,
) {
    val open by animateFloatAsState(1f, tween(900, easing = EaseOutBack), label = "o")
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val slot = size.width / densities.size
        val maxW = slot * 0.42f
        densities.forEachIndexed { i, d ->
            val cx = i * slot + slot / 2
            val stepY = size.height / (d.size - 1)
            val path = Path()
            d.forEachIndexed { j, v ->
                val x = cx + maxW * v * open
                val y = j * stepY
                if (j == 0) path.moveTo(x, y) else path.lineTo(x, y)
            }
            for (j in d.indices.reversed()) {
                path.lineTo(cx - maxW * d[j] * open, j * stepY)
            }
            path.close()
            drawPath(path, accent.copy(alpha = 0.7f))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 130" className="w-full max-w-[250px] text-purple-500">
        {[
          [0.1, 0.3, 0.7, 1, 0.6, 0.25, 0.08],
          [0.08, 0.2, 0.5, 0.9, 1, 0.4, 0.12],
          [0.12, 0.4, 0.9, 0.7, 0.5, 0.3, 0.1],
        ].map((d, i) => {
          const cx = 40 + i * 80;
          const maxW = 32;
          const sy = 130 / (d.length - 1);
          const right = d.map((v, j) => `${cx + maxW * v},${(j * sy).toFixed(1)}`);
          const left = [...d].map((v, j) => `${cx - maxW * v},${(j * sy).toFixed(1)}`).reverse();
          return <polygon key={i} points={[...right, ...left].join(" ")} className="fill-purple-500/70" style={{ transformOrigin: `${cx}px 65px`, animation: "chart-grow 3s ease-out infinite", animationDelay: `${i * 120}ms` }} />;
        })}
      </svg>
    ),
  },
  {
    id: "chart-beeswarm",
    name: "Beeswarm",
    category: "charts",
    description: "A beeswarm of jittered dots along an axis that twinkle into their positions.",
    tags: ["animated"],
    code: `@Composable
fun Beeswarm(
    points: List<Pair<Float, Float>> = remember { sampleSwarm(40) },
    accent: Color = Color(0xFF0EA5E9),
    modifier: Modifier = Modifier,
) {
    val pop by animateFloatAsState(1f, spring(0.6f, 180f), label = "pop")
    val axis = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.fillMaxWidth().height(110.dp)) {
        val mid = size.height / 2
        drawLine(axis, Offset(0f, mid), Offset(size.width, mid), 1.5.dp.toPx())
        points.forEach { (x, jitter) ->
            drawCircle(
                accent.copy(alpha = 0.75f),
                4.dp.toPx() * pop,
                Offset(x * size.width, mid + jitter * mid * 0.8f),
            )
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 110" className="w-full max-w-[250px]">
        <line x1="0" y1="55" x2="240" y2="55" className="stroke-border" strokeWidth="1.5" />
        {Array.from({ length: 40 }).map((_, i) => {
          const x = 8 + (i * 224) / 40 + ((i * 53) % 11) - 5;
          const jitter = (((i * 37) % 100) / 100 - 0.5) * 80;
          return <circle key={i} cx={x} cy={55 + jitter} r="4" className="fill-sky-500/75" style={{ transformOrigin: `${x}px ${55 + jitter}px`, animation: "chart-grow 3s ease-out infinite", animationDelay: `${(i % 12) * 90}ms` }} />;
        })}
      </svg>
    ),
  },
  {
    id: "chart-funnel",
    name: "Funnel",
    category: "charts",
    description: "A conversion funnel of stacked trapezoids that narrow and wipe in top to bottom.",
    tags: ["animated"],
    code: `@Composable
fun Funnel(
    stages: List<Pair<String, Float>> = listOf(
        "Visits" to 1f, "Signups" to 0.62f,
        "Trials" to 0.4f, "Paid" to 0.22f,
    ),
    accent: Color = Color(0xFF6366F1),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "r")
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val gap = 6.dp.toPx()
        val rowH = (size.height - gap * (stages.size - 1)) / stages.size
        stages.forEachIndexed { i, (_, w) ->
            val nextW = stages.getOrNull(i + 1)?.second ?: w
            val y = i * (rowH + gap)
            val topHalf = w * size.width / 2 * reveal
            val botHalf = nextW * size.width / 2 * reveal
            val path = Path().apply {
                moveTo(center.x - topHalf, y)
                lineTo(center.x + topHalf, y)
                lineTo(center.x + botHalf, y + rowH)
                lineTo(center.x - botHalf, y + rowH)
                close()
            }
            drawPath(path, accent.copy(alpha = 0.55f + 0.12f * i))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 130" className="w-full max-w-[240px] text-indigo-500" style={{ animation: "chart-wipe-up 3s ease-in-out infinite" }}>
        {[[1, 0.62], [0.62, 0.4], [0.4, 0.22], [0.22, 0.22]].map(([t, b], i) => {
          const y = i * 33;
          const tw = (t * 220) / 2, bw = (b * 220) / 2;
          return <path key={i} d={`M${120 - tw},${y} ${120 + tw},${y} ${120 + bw},${y + 30} ${120 - bw},${y + 30} Z`} fill="currentColor" fillOpacity={0.55 + 0.12 * i} />;
        })}
      </svg>
    ),
  },
  {
    id: "chart-pyramid",
    name: "Population pyramid",
    category: "charts",
    description: "A back-to-back age pyramid whose male and female bars grow out from the spine.",
    tags: ["animated"],
    code: `@Composable
fun PopulationPyramid(
    left: List<Float> = listOf(0.8f, 0.7f, 0.62f, 0.5f, 0.36f, 0.22f),
    right: List<Float> = listOf(0.74f, 0.68f, 0.58f, 0.46f, 0.3f, 0.18f),
    leftColor: Color = Color(0xFF3B82F6),
    rightColor: Color = Color(0xFFF472B6),
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "g")
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val gap = 5.dp.toPx()
        val rowH = (size.height - gap * (left.size - 1)) / left.size
        val half = size.width / 2 - 8.dp.toPx()
        left.indices.forEach { i ->
            val y = i * (rowH + gap)
            drawRoundRect(leftColor, Offset(center.x - 6.dp.toPx() - half * left[i] * grow, y), Size(half * left[i] * grow, rowH), CornerRadius(3.dp.toPx()))
            drawRoundRect(rightColor, Offset(center.x + 6.dp.toPx(), y), Size(half * right[i] * grow, rowH), CornerRadius(3.dp.toPx()))
        }
    }
}`,
    preview: (
      <div className="flex w-full max-w-[240px] flex-col gap-1.5">
        {[[80, 74], [70, 68], [62, 58], [50, 46], [36, 30], [22, 18]].map(([l, r], i) => (
          <div key={i} className="flex h-4 items-center justify-center gap-1.5">
            <div className="flex flex-1 justify-end">
              <div className="h-full origin-right rounded-l-sm bg-blue-500" style={{ width: `${l}%`, animation: "badge-fillx 3s ease-in-out infinite", animationDelay: `${i * 80}ms` }} />
            </div>
            <div className="flex flex-1 justify-start">
              <div className="h-full origin-left rounded-r-sm bg-pink-400" style={{ width: `${r}%`, animation: "badge-fillx 3s ease-in-out infinite", animationDelay: `${i * 80}ms` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-heatmap-matrix",
    name: "Heatmap matrix",
    category: "charts",
    description: "A labelled intensity matrix whose cells fade in diagonally by intensity.",
    tags: ["animated"],
    code: `@Composable
fun HeatmapMatrix(
    grid: List<List<Float>> = remember { sampleMatrix(6, 6) },
    accent: Color = Color(0xFFF97316),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000), label = "r")
    Canvas(modifier.size(150.dp)) {
        val rows = grid.size
        val cols = grid[0].size
        val gap = 3.dp.toPx()
        val cw = (size.width - gap * (cols - 1)) / cols
        val ch = (size.height - gap * (rows - 1)) / rows
        grid.forEachIndexed { r, row ->
            row.forEachIndexed { c, v ->
                val a = (reveal * (rows + cols) - (r + c)).coerceIn(0f, 1f)
                drawRoundRect(
                    accent.copy(alpha = (0.12f + 0.85f * v) * a),
                    Offset(c * (cw + gap), r * (ch + gap)),
                    Size(cw, ch), CornerRadius(3.dp.toPx()),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: 36 }).map((_, i) => {
          const v = [0.2, 0.5, 0.8, 0.3, 0.6, 0.9, 0.4, 0.7, 0.15, 0.55, 0.85, 0.35][i % 12];
          return <span key={i} className="size-5 rounded-[3px] bg-orange-500" style={{ opacity: 0.12 + 0.85 * v, animation: "chart-blip 3s ease-out infinite", animationDelay: `${((i % 6) + Math.floor(i / 6)) * 70}ms` }} />;
        })}
      </div>
    ),
  },
  {
    id: "chart-correlation",
    name: "Correlation matrix",
    category: "charts",
    description: "A correlation heatmap with diverging blue–red cells and inline coefficients.",
    tags: ["animated"],
    code: `@Composable
fun CorrelationMatrix(
    grid: List<List<Float>> = remember { sampleCorr(5) },
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(900), label = "r")
    val pos = Color(0xFFEF4444)
    val neg = Color(0xFF3B82F6)
    Canvas(modifier.size(150.dp)) {
        val n = grid.size
        val gap = 3.dp.toPx()
        val cell = (size.width - gap * (n - 1)) / n
        grid.forEachIndexed { r, row ->
            row.forEachIndexed { c, v ->
                val color = if (v >= 0) pos else neg
                drawRoundRect(
                    color.copy(alpha = abs(v) * reveal),
                    Offset(c * (cell + gap), r * (cell + gap)),
                    Size(cell, cell), CornerRadius(3.dp.toPx()),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, i) => {
          const r = Math.floor(i / 5), c = i % 5;
          const v = r === c ? 1 : [(0.7), -0.4, 0.5, -0.2, 0.3, 0.8, -0.6, 0.45, -0.15][(r * 5 + c) % 9];
          const pos = v >= 0;
          return (
            <span key={i} className={`grid size-6 place-items-center rounded-[3px] text-[7px] font-semibold ${pos ? "bg-red-500" : "bg-blue-500"} text-white`} style={{ opacity: Math.abs(v), animation: "chart-blip 3s ease-out infinite", animationDelay: `${(r + c) * 60}ms` }}>
              {v.toFixed(1)}
            </span>
          );
        })}
      </div>
    ),
  },
  {
    id: "chart-punchcard",
    name: "Punch card",
    category: "charts",
    description: "A day-by-hour punch card where dot radius encodes activity, popping in by row.",
    tags: ["animated"],
    code: `@Composable
fun PunchCard(
    grid: List<List<Float>> = remember { samplePunch(5, 8) },
    accent: Color = Color(0xFF10B981),
    modifier: Modifier = Modifier,
) {
    val pop by animateFloatAsState(1f, spring(0.6f, 160f), label = "pop")
    Canvas(modifier.size(180.dp, 116.dp)) {
        val rows = grid.size
        val cols = grid[0].size
        val cw = size.width / cols
        val ch = size.height / rows
        grid.forEachIndexed { r, row ->
            row.forEachIndexed { c, v ->
                drawCircle(
                    accent.copy(alpha = 0.85f),
                    (ch / 2 * 0.85f) * v * pop,
                    Offset(c * cw + cw / 2, r * ch + ch / 2),
                )
            }
        }
    }
}`,
    preview: (
      <div className="grid grid-rows-5 gap-1.5">
        {Array.from({ length: 5 }).map((_, r) => (
          <div key={r} className="flex gap-1.5">
            {Array.from({ length: 8 }).map((_, c) => {
              const v = (((r * 7 + c * 3) % 10) + 1) / 10;
              return (
                <span key={c} className="grid size-4 place-items-center">
                  <span className="rounded-full bg-emerald-500/85" style={{ width: `${v * 16}px`, height: `${v * 16}px`, animation: "chart-grow 3s ease-out infinite", animationDelay: `${r * 110}ms` }} />
                </span>
              );
            })}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-treemap",
    name: "Treemap",
    category: "charts",
    description: "A treemap of proportional tiles that scale in to map a hierarchy's weights.",
    tags: ["animated"],
    code: `@Composable
fun Treemap(
    tiles: List<Pair<Rect, Color>> = remember { sampleTreemap() },
    modifier: Modifier = Modifier,
) {
    val grow by animateFloatAsState(1f, tween(800, easing = EaseOutBack), label = "g")
    Canvas(modifier.size(180.dp, 130.dp)) {
        tiles.forEach { (rect, color) ->
            val cx = rect.center.x * size.width
            val cy = rect.center.y * size.height
            val w = rect.width * size.width * grow
            val h = rect.height * size.height * grow
            drawRoundRect(
                color,
                Offset(cx - w / 2, cy - h / 2),
                Size(w, h),
                CornerRadius(4.dp.toPx()),
            )
        }
    }
}`,
    preview: (
      <div className="grid h-32 w-44 grid-cols-3 grid-rows-3 gap-1">
        {[
          { cls: "col-span-2 row-span-2 bg-indigo-500", },
          { cls: "row-span-1 bg-cyan-400" },
          { cls: "row-span-1 bg-violet-400" },
          { cls: "bg-emerald-400" },
          { cls: "bg-amber-400" },
          { cls: "bg-rose-400" },
        ].map((t, i) => (
          <div key={i} className={`rounded-md ${t.cls}`} style={{ transformOrigin: "center", animation: "chart-grow 3s ease-out infinite", animationDelay: `${i * 90}ms` }} />
        ))}
      </div>
    ),
  },
  {
    id: "chart-marimekko",
    name: "Marimekko",
    category: "charts",
    description: "A Marimekko chart of variable-width columns, each a 100% stacked segment set.",
    tags: ["animated"],
    code: `@Composable
fun Marimekko(
    widths: List<Float> = listOf(0.34f, 0.26f, 0.22f, 0.18f),
    stacks: List<List<Float>> = listOf(
        listOf(0.5f, 0.3f, 0.2f), listOf(0.35f, 0.4f, 0.25f),
        listOf(0.6f, 0.25f, 0.15f), listOf(0.3f, 0.45f, 0.25f),
    ),
    palette: List<Color> = listOf(Color(0xFF6366F1), Color(0xFF22D3EE), Color(0xFFA78BFA)),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "r")
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val gap = 3.dp.toPx()
        var x = 0f
        widths.forEachIndexed { i, w ->
            val colW = (size.width - gap * (widths.size - 1)) * w
            var y = size.height
            stacks[i].forEachIndexed { s, frac ->
                val h = size.height * frac
                drawRect(palette[s], Offset(x, (y - h)), Size(colW * reveal, h))
                y -= h
            }
            x += colW + gap
        }
    }
}`,
    preview: (
      <div className="flex h-32 w-full max-w-[240px] gap-1" style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
        {[
          { w: 34, s: [50, 30, 20] },
          { w: 26, s: [35, 40, 25] },
          { w: 22, s: [60, 25, 15] },
          { w: 18, s: [30, 45, 25] },
        ].map((col, i) => (
          <div key={i} className="flex flex-col-reverse overflow-hidden rounded-sm" style={{ width: `${col.w}%` }}>
            {col.s.map((h, s) => (
              <div key={s} className={["bg-indigo-500", "bg-cyan-400", "bg-violet-400"][s]} style={{ height: `${h}%` }} />
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-sankey",
    name: "Sankey",
    category: "charts",
    description: "A Sankey diagram whose weighted flow ribbons stream between two node columns.",
    tags: ["animated"],
    code: `@Composable
fun Sankey(
    flows: List<Triple<Int, Int, Float>> = listOf(
        Triple(0, 0, 0.5f), Triple(0, 1, 0.3f),
        Triple(1, 1, 0.4f), Triple(1, 2, 0.25f),
    ),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "r")
    val palette = listOf(Color(0xFF6366F1), Color(0xFF10B981))
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val lx = 12.dp.toPx()
        val rx = size.width - 12.dp.toPx()
        clipRect(right = lx + (rx - lx) * reveal) {
            flows.forEachIndexed { i, (src, dst, w) ->
                val y0 = size.height * (0.25f + src * 0.3f)
                val y1 = size.height * (0.2f + dst * 0.28f)
                val ribbon = Path().apply {
                    moveTo(lx, y0)
                    cubicTo((lx + rx) / 2, y0, (lx + rx) / 2, y1, rx, y1)
                    lineTo(rx, y1 + size.height * w * 0.4f)
                    cubicTo((lx + rx) / 2, y1 + size.height * w * 0.4f, (lx + rx) / 2, y0 + size.height * w * 0.4f, lx, y0 + size.height * w * 0.4f)
                    close()
                }
                drawPath(ribbon, palette[src % 2].copy(alpha = 0.4f))
            }
        }
        listOf(lx, rx).forEach { x ->
            drawRoundRect(Color(0xFF111827), Offset(x - 5.dp.toPx(), 0f), Size(10.dp.toPx(), size.height), CornerRadius(3.dp.toPx()))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 130" className="w-full max-w-[250px]" style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
        <path d="M14,30 C120,30 120,24 226,24 L226,52 C120,52 120,58 14,58 Z" className="fill-indigo-500/40" />
        <path d="M14,66 C120,66 120,70 226,70 L226,92 C120,92 120,88 14,88 Z" className="fill-emerald-500/40" />
        <path d="M14,92 C120,92 120,100 226,100 L226,118 C120,118 120,110 14,110 Z" className="fill-indigo-500/40" />
        <rect x="9" y="20" width="10" height="92" rx="3" className="fill-foreground" />
        <rect x="221" y="20" width="10" height="100" rx="3" className="fill-foreground" />
      </svg>
    ),
  },
  {
    id: "chart-chord",
    name: "Chord",
    category: "charts",
    description: "A chord diagram with an arc ring and relationship ribbons revealed by an iris wipe.",
    tags: ["animated"],
    code: `@Composable
fun ChordDiagram(
    chords: List<Pair<Float, Float>> = listOf(
        0f to 0.45f, 0.2f to 0.7f, 0.55f to 0.9f, 0.35f to 0.8f,
    ),
    palette: List<Color> = listOf(Color(0xFF6366F1), Color(0xFF10B981), Color(0xFFF59E0B), Color(0xFFEC4899)),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "r")
    Canvas(modifier.size(150.dp)) {
        val r = size.minDimension / 2 * 0.82f
        fun onCircle(t: Float) = center + Offset(cos(t * 2 * PI.toFloat() - PI.toFloat() / 2) * r, sin(t * 2 * PI.toFloat() - PI.toFloat() / 2) * r)
        repeat(4) { i ->
            drawArc(
                palette[i], -90f + i * 90f + 4f, 82f, false,
                topLeft = center - Offset(r, r), size = Size(r * 2, r * 2),
                style = Stroke(8.dp.toPx(), cap = StrokeCap.Round),
            )
        }
        chords.forEachIndexed { i, (a, b) ->
            val pa = onCircle(a)
            val pb = onCircle(b)
            val path = Path().apply { moveTo(pa.x, pa.y); quadraticBezierTo(center.x, center.y, pb.x, pb.y) }
            drawPath(path, palette[i % palette.size].copy(alpha = 0.45f * reveal), style = Stroke(2.dp.toPx()))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 150 150" className="size-36" style={{ animation: "chart-iris 3s ease-out infinite" }}>
        {[0, 1, 2, 3].map((i) => {
          const a0 = ((-90 + i * 90 + 5) * Math.PI) / 180;
          const a1 = ((-90 + i * 90 + 85) * Math.PI) / 180;
          const r = 60;
          const x0 = 75 + r * Math.cos(a0), y0 = 75 + r * Math.sin(a0);
          const x1 = 75 + r * Math.cos(a1), y1 = 75 + r * Math.sin(a1);
          return <path key={i} d={`M${x0},${y0} A${r},${r} 0 0 1 ${x1},${y1}`} fill="none" strokeWidth="7" strokeLinecap="round" className={["text-indigo-500", "text-emerald-500", "text-amber-500", "text-pink-500"][i]} stroke="currentColor" />;
        })}
        <path d="M75,15 Q75,75 25,95" fill="none" className="stroke-indigo-500/50" strokeWidth="2" />
        <path d="M135,55 Q75,75 95,133" fill="none" className="stroke-amber-500/50" strokeWidth="2" />
        <path d="M110,28 Q75,75 40,120" fill="none" className="stroke-pink-500/50" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "chart-network",
    name: "Network",
    category: "charts",
    description: "A node-link graph whose edges draw on and nodes pop into a force layout.",
    tags: ["animated"],
    code: `@Composable
fun NetworkGraph(
    nodes: List<Offset> = listOf(
        Offset(0.5f, 0.2f), Offset(0.22f, 0.5f), Offset(0.78f, 0.45f),
        Offset(0.38f, 0.82f), Offset(0.68f, 0.8f),
    ),
    edges: List<Pair<Int, Int>> = listOf(0 to 1, 0 to 2, 1 to 3, 2 to 4, 3 to 4, 1 to 2),
    accent: Color = Color(0xFF6366F1),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    val pop by animateFloatAsState(if (draw.value > 0.6f) 1f else 0f, spring(0.5f, 200f), label = "pop")
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(900, easing = EaseOutCubic)) }
    val edgeColor = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.size(160.dp, 130.dp)) {
        fun pos(i: Int) = Offset(nodes[i].first * size.width, nodes[i].second * size.height)
        edges.forEach { (a, b) ->
            val pa = pos(a)
            val pb = pos(a) + (pos(b) - pos(a)) * draw.value
            drawLine(edgeColor, pa, pb, 1.5.dp.toPx())
        }
        nodes.indices.forEach { i ->
            drawCircle(accent, 7.dp.toPx() * pop, pos(i))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 160 130" className="w-full max-w-[200px]">
        {[[0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2]].map(([a, b], i) => {
          const n = [[80, 26], [35, 65], [125, 59], [61, 107], [109, 104]];
          return <line key={i} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} className="stroke-border" strokeWidth="1.5" style={{ strokeDasharray: 120, strokeDashoffset: 120, animation: "icon-draw 3s ease-out infinite alternate", animationDelay: `${i * 70}ms` }} />;
        })}
        {[[80, 26], [35, 65], [125, 59], [61, 107], [109, 104]].map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="7" className="fill-indigo-500" style={{ transformOrigin: `${p[0]}px ${p[1]}px`, animation: "chart-grow 3s ease-out infinite", animationDelay: `${500 + i * 90}ms` }} />
        ))}
      </svg>
    ),
  },
  {
    id: "chart-arc-diagram",
    name: "Arc diagram",
    category: "charts",
    description: "Nodes on a baseline linked by semicircular arcs that draw on in sequence.",
    tags: ["animated"],
    code: `@Composable
fun ArcDiagram(
    count: Int = 6,
    links: List<Pair<Int, Int>> = listOf(0 to 2, 1 to 4, 2 to 5, 0 to 3, 3 to 5),
    accent: Color = Color(0xFF8B5CF6),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1100, easing = EaseInOutCubic)) }
    Canvas(modifier.fillMaxWidth().height(110.dp)) {
        val baseline = size.height - 14.dp.toPx()
        val step = size.width / count
        fun x(i: Int) = step * i + step / 2
        links.forEachIndexed { idx, (a, b) ->
            val r = abs(x(b) - x(a)) / 2
            val cx = (x(a) + x(b)) / 2
            val path = Path().apply {
                moveTo(x(a), baseline)
                arcTo(Rect(cx - r, baseline - r, cx + r, baseline + r), 180f, 180f, false)
            }
            val m = PathMeasure().apply { setPath(path, false) }
            drawPath(
                Path().also { m.getSegment(0f, m.length * draw.value, it, true) },
                accent.copy(alpha = 0.7f),
                style = Stroke(2.dp.toPx(), cap = StrokeCap.Round),
            )
        }
        repeat(count) { i -> drawCircle(accent, 4.dp.toPx(), Offset(x(i), baseline)) }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 110" className="w-full max-w-[250px]" fill="none">
        {[[0, 2], [1, 4], [2, 5], [0, 3], [3, 5]].map(([a, b], i) => {
          const x = (n: number) => 20 + n * 40;
          const r = Math.abs(x(b) - x(a)) / 2;
          const len = Math.PI * r;
          return <path key={i} d={`M${x(a)},96 A${r},${r} 0 0 1 ${x(b)},96`} className="text-violet-500" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ strokeDasharray: len, strokeDashoffset: len, animation: "icon-draw 3s ease-in-out infinite alternate", animationDelay: `${i * 120}ms` }} />;
        })}
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={i} cx={20 + i * 40} cy="96" r="4" className="fill-violet-500" />
        ))}
      </svg>
    ),
  },
  {
    id: "chart-gantt",
    name: "Gantt",
    category: "charts",
    description: "A project Gantt chart whose task bars wipe in along a shared timeline.",
    tags: ["animated"],
    code: `@Composable
fun Gantt(
    tasks: List<Triple<String, Float, Float>> = listOf(
        Triple("Design", 0f, 0.4f), Triple("Build", 0.25f, 0.75f),
        Triple("Test", 0.6f, 0.9f), Triple("Ship", 0.85f, 1f),
    ),
    palette: List<Color> = listOf(Color(0xFF6366F1), Color(0xFF10B981), Color(0xFFF59E0B), Color(0xFFEC4899)),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "r")
    val grid = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val gap = 10.dp.toPx()
        val rowH = (size.height - gap * (tasks.size - 1)) / tasks.size
        repeat(5) { g -> drawLine(grid, Offset(size.width * g / 4, 0f), Offset(size.width * g / 4, size.height), 1f) }
        tasks.forEachIndexed { i, (_, start, end) ->
            val y = i * (rowH + gap)
            val x = start * size.width
            val w = (end - start) * size.width * reveal
            drawRoundRect(palette[i], Offset(x, y), Size(w, rowH), CornerRadius(rowH / 2))
        }
    }
}`,
    preview: (
      <div className="relative flex w-full max-w-[240px] flex-col gap-2.5">
        <div className="pointer-events-none absolute inset-0 flex justify-between">
          {Array.from({ length: 5 }).map((_, i) => <div key={i} className="w-px bg-border" />)}
        </div>
        {[
          { l: 0, w: 40, c: "bg-indigo-500" },
          { l: 25, w: 50, c: "bg-emerald-500" },
          { l: 60, w: 30, c: "bg-amber-500" },
          { l: 85, w: 15, c: "bg-pink-500" },
        ].map((t, i) => (
          <div key={i} className="h-5">
            <div className={`h-full origin-left rounded-full ${t.c}`} style={{ marginLeft: `${t.l}%`, width: `${t.w}%`, animation: "badge-fillx 3s ease-in-out infinite", animationDelay: `${i * 110}ms` }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "chart-timeline",
    name: "Timeline",
    category: "charts",
    description: "A milestone timeline whose nodes pop along a line that draws itself in.",
    tags: ["animated"],
    code: `@Composable
fun Timeline(
    milestones: List<Float> = listOf(0.1f, 0.35f, 0.6f, 0.85f),
    accent: Color = Color(0xFF0EA5E9),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1000, easing = EaseOutCubic)) }
    val line = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.fillMaxWidth().height(70.dp)) {
        val y = size.height / 2
        drawLine(line, Offset(0f, y), Offset(size.width * draw.value, y), 2.dp.toPx())
        milestones.forEach { m ->
            val appear = ((draw.value - m) * 6f).coerceIn(0f, 1f)
            if (appear > 0f) {
                drawCircle(accent, 7.dp.toPx() * appear, Offset(m * size.width, y))
                drawCircle(Color.White, 3.dp.toPx() * appear, Offset(m * size.width, y))
            }
        }
    }
}`,
    preview: (
      <div className="relative flex h-16 w-full max-w-[240px] items-center">
        <div className="h-0.5 w-full origin-left bg-border" style={{ animation: "badge-fillx 3s ease-out infinite" }} />
        {[10, 35, 60, 85].map((m, i) => (
          <span key={i} className="absolute grid size-3.5 -translate-x-1/2 place-items-center rounded-full bg-sky-500" style={{ left: `${m}%`, transformOrigin: "center", animation: "chart-grow 3s ease-out infinite", animationDelay: `${i * 180}ms` }}>
            <span className="size-1.5 rounded-full bg-white" />
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "chart-ecg",
    name: "ECG monitor",
    category: "charts",
    description: "A live heart-rate monitor whose ECG trace scrolls continuously across the grid.",
    tags: ["animated"],
    code: `@Composable
fun EcgMonitor(
    accent: Color = Color(0xFF22C55E),
    modifier: Modifier = Modifier,
) {
    val t = rememberInfiniteTransition(label = "ecg")
    val shift by t.animateFloat(
        0f, 1f, infiniteRepeatable(tween(1800, easing = LinearEasing)), label = "s",
    )
    Canvas(modifier.fillMaxWidth().height(110.dp)) {
        val w = size.width
        val midY = size.height / 2
        fun beat(x0: Float) = Path().apply {
            moveTo(x0, midY)
            lineTo(x0 + w * 0.14f, midY)
            lineTo(x0 + w * 0.18f, midY - size.height * 0.08f)
            lineTo(x0 + w * 0.22f, midY + size.height * 0.34f)
            lineTo(x0 + w * 0.26f, midY - size.height * 0.46f)
            lineTo(x0 + w * 0.3f, midY + size.height * 0.12f)
            lineTo(x0 + w * 0.36f, midY)
            lineTo(x0 + w * 0.5f, midY)
        }
        val style = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round)
        translate(left = -shift * w * 0.5f) {
            listOf(0f, 0.5f, 1f).forEach { f -> drawPath(beat(w * f), accent, style = style) }
        }
    }
}`,
    preview: (
      <div className="w-full max-w-[250px] overflow-hidden rounded-lg bg-[#0b1411] p-2">
        <svg viewBox="0 0 240 90" className="h-[90px] w-[480px]" fill="none" style={{ animation: "marquee 1.8s linear infinite", width: "200%" }}>
          {[0, 120, 240, 360].map((x) => (
            <polyline key={x} points={`${x},45 ${x + 17},45 ${x + 22},38 ${x + 27},76 ${x + 32},12 ${x + 37},56 ${x + 43},45 ${x + 60},45`} className="text-green-500" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          ))}
        </svg>
      </div>
    ),
  },
  {
    id: "chart-pictograph",
    name: "Pictograph",
    category: "charts",
    description: "An isotype pictograph where filled person glyphs encode a proportion.",
    tags: ["animated"],
    code: `@Composable
fun Pictograph(
    total: Int = 10,
    filled: Int = 7,
    accent: Color = Color(0xFF6366F1),
    modifier: Modifier = Modifier,
) {
    val progress = remember { Animatable(0f) }
    LaunchedEffect(Unit) { progress.animateTo(filled.toFloat(), tween(1000, easing = EaseOutCubic)) }
    val empty = MaterialTheme.colorScheme.surfaceVariant
    Row(modifier, horizontalArrangement = Arrangement.spacedBy(6.dp)) {
        repeat(total) { i ->
            val on = i < progress.value
            Icon(
                Icons.Filled.Person,
                contentDescription = null,
                tint = if (on) accent else empty,
                modifier = Modifier.size(22.dp),
            )
        }
    }
}`,
    preview: (
      <div className="flex max-w-[240px] flex-wrap gap-1.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className={`size-6 ${i < 7 ? "text-indigo-500" : "text-muted"}`} fill="currentColor" style={{ animation: i < 7 ? "chart-blip 3s ease-out infinite" : undefined, animationDelay: `${i * 90}ms` }}>
            <circle cx="12" cy="7" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
          </svg>
        ))}
      </div>
    ),
  },
  {
    id: "chart-ridgeline",
    name: "Ridgeline",
    category: "charts",
    description: "Overlapping ridgeline densities that stack and draw on for a joyplot effect.",
    tags: ["animated"],
    code: `@Composable
fun Ridgeline(
    rows: List<List<Float>> = remember { sampleRidges(4) },
    accent: Color = Color(0xFFEC4899),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1200, easing = EaseInOutCubic)) }
    val surface = MaterialTheme.colorScheme.surface
    Canvas(modifier.fillMaxWidth().height(130.dp)) {
        val rowGap = size.height / (rows.size + 1)
        rows.forEachIndexed { r, density ->
            val baseY = rowGap * (r + 1.4f)
            val step = size.width / (density.size - 1)
            val line = Path().apply {
                density.forEachIndexed { i, v ->
                    val x = i * step
                    val y = baseY - v * rowGap * 1.6f
                    if (i == 0) moveTo(x, y) else lineTo(x, y)
                }
            }
            val fill = Path().apply { addPath(line); lineTo(size.width, baseY); lineTo(0f, baseY); close() }
            drawPath(fill, surface)
            val m = PathMeasure().apply { setPath(line, false) }
            drawPath(
                Path().also { m.getSegment(0f, m.length * draw.value, it, true) },
                accent.copy(alpha = 0.85f),
                style = Stroke(2.dp.toPx(), cap = StrokeCap.Round),
            )
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 130" className="w-full max-w-[250px] text-pink-500" fill="none">
        {[0, 1, 2, 3].map((r) => {
          const baseY = 34 + r * 26;
          const pts = [0.2, 0.6, 1, 0.5, 0.7, 0.3, 0.15].map((v, i) => `${i * 40},${(baseY - v * 30).toFixed(0)}`);
          return (
            <g key={r}>
              <polygon points={`0,${baseY} ${pts.join(" ")} 240,${baseY}`} className="fill-background" />
              <polyline points={pts.join(" ")} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: "icon-draw 3s ease-in-out infinite alternate", animationDelay: `${r * 120}ms` }} />
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    id: "chart-bump",
    name: "Bump",
    category: "charts",
    description: "A bump chart tracking rank changes over time with crossing, draw-on lines.",
    tags: ["animated"],
    code: `@Composable
fun BumpChart(
    series: List<List<Int>> = listOf(
        listOf(1, 2, 1, 3), listOf(2, 1, 3, 1),
        listOf(3, 3, 2, 2), listOf(4, 4, 4, 4),
    ),
    palette: List<Color> = listOf(Color(0xFF6366F1), Color(0xFF10B981), Color(0xFFF59E0B), Color(0xFFEC4899)),
    modifier: Modifier = Modifier,
) {
    val draw = remember { Animatable(0f) }
    LaunchedEffect(Unit) { draw.animateTo(1f, tween(1100, easing = EaseInOutCubic)) }
    Canvas(modifier.fillMaxWidth().height(120.dp)) {
        val cols = series[0].size
        val ranks = 4
        val stepX = size.width / (cols - 1)
        val stepY = size.height / (ranks + 1)
        series.forEachIndexed { s, ranksList ->
            val path = Path().apply {
                ranksList.forEachIndexed { i, rank ->
                    val x = i * stepX
                    val y = stepY * rank
                    if (i == 0) moveTo(x, y) else lineTo(x, y)
                }
            }
            val m = PathMeasure().apply { setPath(path, false) }
            drawPath(
                Path().also { m.getSegment(0f, m.length * draw.value, it, true) },
                palette[s], style = Stroke(3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round),
            )
            ranksList.forEachIndexed { i, rank ->
                if (i / (cols - 1f) <= draw.value) drawCircle(palette[s], 4.dp.toPx(), Offset(i * stepX, stepY * rank))
            }
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 240 120" className="w-full max-w-[250px]" fill="none">
        {[
          { p: "0,24 80,48 160,24 240,72", c: "text-indigo-500" },
          { p: "0,48 80,24 160,72 240,24", c: "text-emerald-500" },
          { p: "0,72 80,72 160,48 240,48", c: "text-amber-500" },
          { p: "0,96 80,96 160,96 240,96", c: "text-pink-500" },
        ].map((s, i) => (
          <g key={i} className={s.c}>
            <polyline points={s.p} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ strokeDasharray: 280, strokeDashoffset: 280, animation: "icon-draw 3s ease-in-out infinite alternate", animationDelay: `${i * 80}ms` }} />
            {s.p.split(" ").map((pt, j) => {
              const [x, y] = pt.split(",");
              return <circle key={j} cx={x} cy={y} r="4" fill="currentColor" />;
            })}
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "chart-segmented-progress",
    name: "Segmented progress",
    category: "charts",
    description: "A single 100% bar split into labelled category segments that wipe in together.",
    tags: ["animated"],
    code: `@Composable
fun SegmentedProgress(
    segments: List<Triple<String, Float, Color>> = listOf(
        Triple("Direct", 0.42f, Color(0xFF6366F1)),
        Triple("Social", 0.28f, Color(0xFF22D3EE)),
        Triple("Email", 0.18f, Color(0xFFF59E0B)),
        Triple("Other", 0.12f, Color(0xFFF43F5E)),
    ),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(900, easing = EaseOutCubic), label = "r")
    Column(modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Canvas(Modifier.fillMaxWidth().height(16.dp).clip(RoundedCornerShape(50))) {
            var x = 0f
            segments.forEach { (_, frac, color) ->
                val w = size.width * frac
                drawRect(color, Offset(x * 1f, 0f), Size(w, size.height), alpha = reveal)
                x += w
            }
        }
        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            segments.forEach { (label, _, color) ->
                Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                    Box(Modifier.size(8.dp).background(color, CircleShape))
                    Text(label, style = MaterialTheme.typography.labelSmall)
                }
            }
        }
    }
}`,
    preview: (
      <div className="flex w-full max-w-[240px] flex-col gap-2.5">
        <div className="flex h-4 w-full overflow-hidden rounded-full" style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
          {[
            { w: 42, c: "bg-indigo-500" },
            { w: 28, c: "bg-cyan-400" },
            { w: 18, c: "bg-amber-500" },
            { w: 12, c: "bg-rose-500" },
          ].map((s, i) => <div key={i} className={s.c} style={{ width: `${s.w}%` }} />)}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {[
            { l: "Direct", c: "bg-indigo-500" },
            { l: "Social", c: "bg-cyan-400" },
            { l: "Email", c: "bg-amber-500" },
            { l: "Other", c: "bg-rose-500" },
          ].map((s, i) => (
            <span key={i} className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <span className={`size-2 rounded-full ${s.c}`} />
              {s.l}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "chart-hexbin",
    name: "Hexbin",
    category: "charts",
    description: "A hexbin density map whose honeycomb cells pop in by their bin counts.",
    tags: ["animated"],
    code: `@Composable
fun Hexbin(
    bins: List<Triple<Int, Int, Float>> = remember { sampleHexbins() },
    accent: Color = Color(0xFF14B8A6),
    modifier: Modifier = Modifier,
) {
    val pop by animateFloatAsState(1f, spring(0.6f, 150f), label = "pop")
    Canvas(modifier.size(170.dp, 130.dp)) {
        val r = 14.dp.toPx()
        val w = r * 1.732f
        val h = r * 1.5f
        fun hex(cx: Float, cy: Float, rad: Float) = Path().apply {
            for (k in 0..5) {
                val a = PI.toFloat() / 180f * (60 * k - 30)
                val px = cx + rad * cos(a)
                val py = cy + rad * sin(a)
                if (k == 0) moveTo(px, py) else lineTo(px, py)
            }
            close()
        }
        bins.forEach { (col, row, v) ->
            val cx = col * w + (if (row % 2 == 1) w / 2 else 0f) + r
            val cy = row * h + r
            drawPath(hex(cx, cy, r * 0.92f * pop), accent.copy(alpha = 0.2f + 0.75f * v))
        }
    }
}`,
    preview: (
      <svg viewBox="0 0 170 130" className="w-full max-w-[210px] text-teal-500">
        {(() => {
          const out = [];
          const r = 15, w = r * 1.732, h = r * 1.5;
          let idx = 0;
          for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 5; col++) {
              const cx = col * w + (row % 2 ? w / 2 : 0) + r;
              const cy = row * h + r;
              const v = (((row * 5 + col) * 37) % 100) / 100;
              const pts = Array.from({ length: 6 }).map((_, k) => {
                const a = (Math.PI / 180) * (60 * k - 30);
                return `${(cx + r * 0.9 * Math.cos(a)).toFixed(1)},${(cy + r * 0.9 * Math.sin(a)).toFixed(1)}`;
              }).join(" ");
              out.push(<polygon key={idx} points={pts} fill="currentColor" fillOpacity={0.2 + 0.75 * v} style={{ transformOrigin: `${cx}px ${cy}px`, animation: "chart-grow 3s ease-out infinite", animationDelay: `${(idx++ % 9) * 80}ms` }} />);
            }
          }
          return out;
        })()}
      </svg>
    ),
  },
  {
    id: "chart-crosshair-area",
    name: "Crosshair area",
    category: "charts",
    description: "An area chart with a tracking crosshair and a floating value tag at the focus point.",
    tags: ["animated"],
    code: `@Composable
fun CrosshairArea(
    values: List<Float> = listOf(0.4f, 0.55f, 0.5f, 0.7f, 0.62f, 0.82f, 0.74f),
    focus: Int = 5,
    accent: Color = Color(0xFF3B82F6),
    modifier: Modifier = Modifier,
) {
    val reveal by animateFloatAsState(1f, tween(1000, easing = EaseOutCubic), label = "r")
    val guide = MaterialTheme.colorScheme.outlineVariant
    Canvas(modifier.fillMaxWidth().height(124.dp)) {
        val step = size.width / (values.size - 1)
        val line = Path()
        values.forEachIndexed { i, v ->
            val x = i * step
            val y = size.height * (1f - v)
            if (i == 0) line.moveTo(x, y) else line.lineTo(x, y)
        }
        val area = Path().apply { addPath(line); lineTo(size.width, size.height); lineTo(0f, size.height); close() }
        clipRect(right = size.width * reveal) {
            drawPath(area, Brush.verticalGradient(listOf(accent.copy(alpha = 0.3f), Color.Transparent)))
            drawPath(line, accent, style = Stroke(3.dp.toPx(), cap = StrokeCap.Round))
        }
        val fx = focus * step
        val fy = size.height * (1f - values[focus])
        drawLine(guide, Offset(fx, 0f), Offset(fx, size.height), 1.dp.toPx(), pathEffect = PathEffect.dashPathEffect(floatArrayOf(6f, 6f)))
        drawCircle(accent, 5.dp.toPx(), Offset(fx, fy))
        drawCircle(Color.White, 2.dp.toPx(), Offset(fx, fy))
    }
}`,
    preview: (
      <div className="relative w-full max-w-[250px]">
        <svg viewBox="0 0 240 124" className="w-full">
          <defs>
            <linearGradient id="cg-cross" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="text-blue-500" style={{ animation: "chart-wipe 3s ease-in-out infinite" }}>
            <path d="M0,74 40,56 80,62 120,37 160,47 200,22 240,32 240,124 0,124 Z" fill="url(#cg-cross)" />
            <polyline points="0,74 40,56 80,62 120,37 160,47 200,22 240,32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <line x1="200" y1="0" x2="200" y2="124" className="stroke-border" strokeWidth="1" strokeDasharray="5 5" />
          <circle cx="200" cy="22" r="5" className="fill-blue-500" />
          <circle cx="200" cy="22" r="2" className="fill-white" />
        </svg>
        <span className="absolute -translate-x-1/2 rounded-md bg-foreground px-1.5 py-0.5 text-[10px] font-semibold text-background" style={{ left: "83%", top: "2px" }}>
          82%
        </span>
      </div>
    ),
  },
];
