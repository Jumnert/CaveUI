import type { Variant } from "./types";

/**
 * Premium, copy-worthy animated icons — the "uiverse for Jetpack" bar: each one is a real
 * micro-interaction (morph, draw-on, sequenced reveal, physics pop), not a one-line
 * spin/pulse. Previews are CSS/SVG approximations; the `code` is the real Compose source.
 *
 * Each animation is built on Material 3 / plain Compose (Canvas, animate*AsState,
 * AnimatedVector, Material icons) — customized on top, never bespoke `Cave*` wrappers.
 */
const icon = (
  id: string,
  name: string,
  description: string,
  code: string,
  node: React.ReactNode,
): Variant => ({
  id,
  name,
  category: "icons",
  description,
  tags: ["animated"],
  code,
  preview: <div className="text-primary">{node}</div>,
});

export const icons: Variant[] = [
  icon(
    "icon-success-check",
    "Success check",
    "A success state that draws its ring and checkmark stroke-by-stroke on completion.",
    `@Composable
fun SuccessCheck(visible: Boolean, modifier = Modifier) {
    val p by animateFloatAsState(
        targetValue = if (visible) 1f else 0f,
        animationSpec = tween(700, easing = EaseOutCubic),
        label = "check",
    )
    val color = MaterialTheme.colorScheme.primary
    Canvas(modifier.size(40.dp)) {
        val stroke = Stroke(width = 3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round)
        // Ring draws first (0..0.6), then the tick (0.4..1).
        drawArc(
            color = color,
            startAngle = -90f,
            sweepAngle = 360f * (p / 0.6f).coerceIn(0f, 1f),
            useCenter = false,
            style = stroke,
        )
        val tick = Path().apply {
            moveTo(size.width * 0.30f, size.height * 0.52f)
            lineTo(size.width * 0.45f, size.height * 0.67f)
            lineTo(size.width * 0.72f, size.height * 0.34f)
        }
        val measure = PathMeasure().apply { setPath(tick, false) }
        val tickP = ((p - 0.4f) / 0.6f).coerceIn(0f, 1f)
        drawPath(
            path = Path().also { measure.getSegment(0f, measure.length * tickP, it, true) },
            color = color,
            style = stroke,
        )
    }
}`,
    <svg
      viewBox="0 0 40 40"
      className="size-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="20"
        cy="20"
        r="17"
        style={{ strokeDasharray: 108, strokeDashoffset: 108, animation: "icon-draw 1.5s ease-in-out infinite alternate" }}
      />
      <path
        d="M12 21 l6 6 l11-13"
        style={{ strokeDasharray: 30, strokeDashoffset: 30, animation: "icon-draw 1.5s ease-in-out 0.25s infinite alternate" }}
      />
    </svg>,
  ),

  icon(
    "icon-menu-close",
    "Menu ↔ Close",
    "A hamburger menu whose three lines morph into a close (X) — the canonical nav toggle.",
    `@Composable
fun MenuToClose(open: Boolean, onClick: () -> Unit) {
    val p by animateFloatAsState(if (open) 1f else 0f, spring(stiffness = 300f), label = "menu")
    val color = LocalContentColor.current
    Canvas(Modifier.size(40.dp).clickable(onClick = onClick)) {
        val w = size.width; val cx = w / 2; val cy = size.height / 2
        val len = w * 0.55f; val gap = 7.dp.toPx()
        val stroke = 3.dp.toPx()
        fun line(offsetY: Float, angle: Float) {
            rotate(angle * p, pivot = Offset(cx, cy)) {
                drawLine(
                    color, Offset(cx - len / 2, cy + offsetY * (1 - p)),
                    Offset(cx + len / 2, cy + offsetY * (1 - p)),
                    strokeWidth = stroke, cap = StrokeCap.Round,
                )
            }
        }
        line(-gap, 45f)                 // top  -> "\\"
        if (p < 0.5f) line(0f, 0f)      // middle fades out
        line(gap, -45f)                 // bottom -> "/"
    }
}`,
    <svg viewBox="0 0 40 40" className="size-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <line x1="11" y1="13" x2="29" y2="13" style={{ transformOrigin: "20px 20px", animation: "icon-menu-top 1.6s ease-in-out infinite alternate" }} />
      <line x1="11" y1="20" x2="29" y2="20" style={{ transformOrigin: "20px 20px", animation: "icon-menu-mid 1.6s ease-in-out infinite alternate" }} />
      <line x1="11" y1="27" x2="29" y2="27" style={{ transformOrigin: "20px 20px", animation: "icon-menu-bot 1.6s ease-in-out infinite alternate" }} />
    </svg>,
  ),

  icon(
    "icon-heart-like",
    "Like heart",
    "A like button that springs and bursts a ring + sparks when favourited.",
    `@Composable
fun LikeHeart(liked: Boolean, onClick: () -> Unit) {
    val scale by animateFloatAsState(
        if (liked) 1f else 0.9f,
        spring(dampingRatio = Spring.DampingRatioMediumBouncy, stiffness = 500f),
        label = "like",
    )
    val burst by animateFloatAsState(if (liked) 1f else 0f, tween(450), label = "burst")
    Box(Modifier.size(40.dp).clickable(onClick = onClick), contentAlignment = Alignment.Center) {
        if (burst > 0f && burst < 1f) {
            Canvas(Modifier.matchParentSize()) {
                drawCircle(
                    color = Color(0xFFE11D48).copy(alpha = 1f - burst),
                    radius = size.minDimension / 2 * burst,
                    style = Stroke(2.dp.toPx()),
                )
            }
        }
        Icon(
            if (liked) Icons.Filled.Favorite else Icons.Outlined.FavoriteBorder,
            contentDescription = "Like",
            tint = if (liked) Color(0xFFE11D48) else LocalContentColor.current,
            modifier = Modifier.scale(scale),
        )
    }
}`,
    <span className="relative inline-flex size-10 items-center justify-center">
      <span className="absolute size-7 rounded-full border-2 border-rose-500" style={{ animation: "icon-ring 1.4s ease-out infinite" }} />
      <svg viewBox="0 0 24 24" className="size-7 fill-rose-500 text-rose-500" style={{ animation: "icon-pop 1.4s ease-in-out infinite" }}>
        <path d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 5 5.2 5c2 0 3.3 1.1 4 2.2C9.9 6.1 11.2 5 13.2 5 16.4 5 18 8.3 16.4 11.7 14.5 16.4 12 21 12 21z" />
      </svg>
    </span>,
  ),

  icon(
    "icon-bell-ring",
    "Notification bell",
    "A bell that swings on its pivot and emits expanding sound waves when a notification lands.",
    `@Composable
fun RingingBell(ringing: Boolean) {
    val swing by rememberInfiniteTransition(label = "bell").animateFloat(
        initialValue = -14f, targetValue = 14f,
        animationSpec = infiniteRepeatable(tween(180, easing = EaseInOut), RepeatMode.Reverse),
        label = "swing",
    )
    val wave by rememberInfiniteTransition(label = "wave").animateFloat(
        0f, 1f, infiniteRepeatable(tween(1200), RepeatMode.Restart), label = "w",
    )
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        if (ringing) Canvas(Modifier.matchParentSize()) {
            drawArc(
                LocalContentColor.current.copy(alpha = 1f - wave), 300f, 60f, false,
                topLeft = Offset(size.width * wave * 0.1f, 0f),
                style = Stroke(2.dp.toPx()),
            )
        }
        Icon(
            Icons.Filled.Notifications, "Notifications",
            modifier = Modifier.graphicsLayer { rotationZ = if (ringing) swing else 0f; transformOrigin = TransformOrigin(0.5f, 0f) },
        )
    }
}`,
    <span className="relative inline-flex size-10 items-center justify-center">
      <span className="absolute right-1.5 top-1 size-5 rounded-full border-2 border-primary/70" style={{ animation: "icon-ring 1.6s ease-out infinite" }} />
      <svg viewBox="0 0 24 24" className="size-8 fill-current" style={{ transformOrigin: "12px 3px", animation: "icon-swing 0.4s ease-in-out infinite" }}>
        <path d="M12 2a2 2 0 0 1 2 2v.3A7 7 0 0 1 19 11v4l1.5 2.5a1 1 0 0 1-.86 1.5H4.36a1 1 0 0 1-.86-1.5L5 15v-4a7 7 0 0 1 5-6.7V4a2 2 0 0 1 2-2zm0 20a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 12 22z" />
      </svg>
    </span>,
  ),

  icon(
    "icon-wifi-connect",
    "Wi‑Fi connecting",
    "Signal arcs that fill in sequence while a connection is being established.",
    `@Composable
fun WifiConnecting() {
    val t = rememberInfiniteTransition(label = "wifi")
    val color = LocalContentColor.current
    Canvas(Modifier.size(40.dp)) {
        val center = Offset(size.width / 2, size.height * 0.78f)
        listOf(0.30f, 0.58f, 0.86f).forEachIndexed { i, r ->
            val alpha by t.animateFloat(
                0.2f, 1f,
                infiniteRepeatable(tween(900, delayMillis = i * 220, easing = EaseInOut), RepeatMode.Reverse),
                label = "arc$i",
            )
            drawArc(
                color.copy(alpha = alpha), 225f, 90f, false,
                topLeft = Offset(center.x - size.width * r, center.y - size.width * r),
                size = Size(size.width * 2 * r, size.width * 2 * r),
                style = Stroke(3.dp.toPx(), cap = StrokeCap.Round),
            )
        }
        drawCircle(color, 2.5.dp.toPx(), center)
    }
}`,
    <svg viewBox="0 0 40 40" className="size-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M6 18 a20 20 0 0 1 28 0" style={{ animation: "icon-step 1.6s ease-in-out 0.4s infinite" }} />
      <path d="M11 24 a13 13 0 0 1 18 0" style={{ animation: "icon-step 1.6s ease-in-out 0.2s infinite" }} />
      <path d="M16 30 a6 6 0 0 1 8 0" style={{ animation: "icon-step 1.6s ease-in-out 0s infinite" }} />
      <circle cx="20" cy="33.5" r="1.6" fill="currentColor" stroke="none" />
    </svg>,
  ),

  icon(
    "icon-mic-listening",
    "Mic listening",
    "A microphone with a live equalizer that reacts while it's recording.",
    `@Composable
fun MicListening(recording: Boolean) {
    val t = rememberInfiniteTransition(label = "mic")
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.Mic, "Recording", tint = if (recording) Color(0xFFE11D48) else LocalContentColor.current)
        if (recording) Row(
            Modifier.padding(start = 6.dp).height(20.dp),
            horizontalArrangement = Arrangement.spacedBy(3.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            repeat(4) { i ->
                val h by t.animateFloat(
                    0.3f, 1f,
                    infiniteRepeatable(tween(400, delayMillis = i * 120, easing = EaseInOut), RepeatMode.Reverse),
                    label = "bar$i",
                )
                Box(Modifier.width(3.dp).fillMaxHeight(h).background(LocalContentColor.current, CircleShape))
            }
        }
    }
}`,
    <span className="inline-flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="size-7 fill-current">
        <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11h-2z" />
      </svg>
      <span className="flex h-5 items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="w-0.5 flex-1 rounded-full bg-current"
            style={{ height: "100%", transformOrigin: "center", animation: `icon-eq 0.8s ease-in-out ${i * 0.12}s infinite` }}
          />
        ))}
      </span>
    </span>,
  ),

  icon(
    "icon-download-tray",
    "Download to tray",
    "An arrow that drops into a tray, which then fills to confirm the download.",
    `@Composable
fun DownloadToTray(progress: Float) { // 0f..1f
    val color = LocalContentColor.current
    Canvas(Modifier.size(40.dp)) {
        val cx = size.width / 2
        val drop = (progress / 0.5f).coerceIn(0f, 1f)
        // Arrow descends in the first half.
        translate(top = lerp(0f, size.height * 0.18f, drop)) {
            drawLine(color, Offset(cx, size.height * 0.18f), Offset(cx, size.height * 0.55f), 3.dp.toPx(), StrokeCap.Round)
            drawPath(
                Path().apply {
                    moveTo(cx - 6.dp.toPx(), size.height * 0.42f)
                    lineTo(cx, size.height * 0.58f); lineTo(cx + 6.dp.toPx(), size.height * 0.42f)
                },
                color, style = Stroke(3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round),
            )
        }
        // Tray fills in the second half.
        val fill = ((progress - 0.5f) / 0.5f).coerceIn(0f, 1f)
        val trayTop = size.height * 0.72f
        drawRect(color.copy(alpha = 0.25f), Offset(size.width * 0.2f, trayTop), Size(size.width * 0.6f, size.height * 0.18f * fill))
        drawLine(color, Offset(size.width * 0.2f, size.height * 0.9f), Offset(size.width * 0.8f, size.height * 0.9f), 3.dp.toPx(), StrokeCap.Round)
    }
}`,
    <svg viewBox="0 0 40 40" className="size-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <g style={{ animation: "icon-drop 1.4s ease-in-out infinite" }}>
        <line x1="20" y1="7" x2="20" y2="22" />
        <path d="M14 17 l6 6 l6 -6" />
      </g>
      <path d="M9 31 h22" />
    </svg>,
  ),

  icon(
    "icon-battery-charging",
    "Battery charging",
    "A battery that fills up with a charging bolt punched through it.",
    `@Composable
fun ChargingBattery() {
    val level by rememberInfiniteTransition(label = "batt").animateFloat(
        0f, 1f, infiniteRepeatable(tween(2000, easing = EaseInOut), RepeatMode.Restart), label = "lvl",
    )
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val body = Rect(8.dp.toPx(), 12.dp.toPx(), 32.dp.toPx(), 28.dp.toPx())
        drawRoundRect(color, body.topLeft, body.size, CornerRadius(4.dp.toPx()), style = Stroke(2.5.dp.toPx()))
        drawRoundRect(color, Offset(body.right, body.center.y - 3.dp.toPx()), Size(2.5.dp.toPx(), 6.dp.toPx()), CornerRadius(1.dp.toPx()))
        clipRect(body.left, body.bottom - body.height * level, body.right, body.bottom) {
            drawRect(color.copy(alpha = 0.3f), body.topLeft, body.size)
        }
        // Bolt
        drawPath(boltPath(body), color)
    }
}`,
    <svg viewBox="0 0 40 40" className="size-10" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="8" y="13" width="22" height="14" rx="3" />
      <rect x="31" y="17" width="3" height="6" rx="1" fill="currentColor" stroke="none" />
      <rect x="8" y="13" width="22" height="14" rx="3" className="origin-bottom" style={{ fill: "currentColor", opacity: 0.25, stroke: "none", transformBox: "fill-box", animation: "icon-fill-up 2s ease-in-out infinite" }} />
      <path d="M20 15 l-4 6 h3 l-1 5 l4 -6 h-3 z" fill="currentColor" stroke="none" />
    </svg>,
  ),

  icon(
    "icon-copy-check",
    "Copy → done",
    "A copy icon that confirms by morphing into a checkmark for a moment after copying.",
    `@Composable
fun CopyButton(clipboard: ClipboardManager, text: String) {
    var copied by remember { mutableStateOf(false) }
    IconButton(onClick = {
        clipboard.setText(AnnotatedString(text)); copied = true
    }) {
        AnimatedContent(
            targetState = copied,
            transitionSpec = { (scaleIn() + fadeIn()) togetherWith (scaleOut() + fadeOut()) },
            label = "copy",
        ) { done ->
            Icon(
                if (done) Icons.Filled.Check else Icons.Filled.ContentCopy,
                contentDescription = if (done) "Copied" else "Copy",
                tint = if (done) Color(0xFF16A34A) else LocalContentColor.current,
            )
        }
    }
    LaunchedEffect(copied) { if (copied) { delay(1200); copied = false } }
}`,
    <span className="relative inline-flex size-9 items-center justify-center">
      <svg viewBox="0 0 24 24" className="absolute size-7 fill-current" style={{ animation: "icon-crossfade 2s ease-in-out infinite" }}>
        <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z" />
      </svg>
      <svg viewBox="0 0 24 24" className="absolute size-7 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "icon-crossfade-in 2s ease-in-out infinite" }}>
        <path d="M4 12 l5 5 L20 6" />
      </svg>
    </span>,
  ),

  icon(
    "icon-theme-toggle",
    "Theme sun ↔ moon",
    "A sun whose rays retract as a crescel mask slides in to form a moon — for light/dark toggles.",
    `@Composable
fun ThemeToggle(dark: Boolean, onToggle: () -> Unit) {
    val p by animateFloatAsState(if (dark) 1f else 0f, tween(450, easing = EaseInOut), label = "theme")
    val color = LocalContentColor.current
    Canvas(Modifier.size(40.dp).clickable(onClick = onToggle)) {
        val c = center; val r = 7.dp.toPx()
        // Rays shrink as we approach the moon.
        repeat(8) { i ->
            val a = (i * 45f) * PI.toFloat() / 180f
            val inner = r + 3.dp.toPx(); val outer = inner + 4.dp.toPx() * (1f - p)
            drawLine(
                color.copy(alpha = 1f - p), Offset(c.x + cos(a) * inner, c.y + sin(a) * inner),
                Offset(c.x + cos(a) * outer, c.y + sin(a) * outer), 2.dp.toPx(), StrokeCap.Round,
            )
        }
        drawCircle(color, r, c)
        // A background-coloured circle slides in to carve the crescent.
        drawCircle(MaterialTheme.colorScheme.background, r, Offset(c.x + r * p, c.y - r * 0.5f * p))
    }
}`,
    <span className="relative inline-flex size-10 items-center justify-center">
      <svg viewBox="0 0 24 24" className="absolute size-8 fill-current" style={{ animation: "icon-crossfade 2.4s ease-in-out infinite" }}>
        <circle cx="12" cy="12" r="5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
          <line key={d} x1="12" y1="1.5" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform={`rotate(${d} 12 12)`} />
        ))}
      </svg>
      <svg viewBox="0 0 24 24" className="absolute size-8 fill-current" style={{ animation: "icon-crossfade-in 2.4s ease-in-out infinite" }}>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </span>,
  ),

  icon(
    "icon-play-pause",
    "Play ↔ Pause",
    "A play triangle that smoothly morphs into a pause icon and back.",
    `@Composable
fun PlayPause(playing: Boolean, onClick: () -> Unit) {
    val p by animateFloatAsState(if (playing) 1f else 0f, tween(300, easing = EaseInOut), label = "pp")
    val color = LocalContentColor.current
    Canvas(Modifier.size(40.dp).clickable(onClick = onClick)) {
        // Two trapezoids: as p->1 the triangle splits into two pause bars.
        fun bar(side: Int) {
            val path = Path().apply {
                val x0 = lerp(size.width * 0.32f, size.width * (if (side < 0) 0.30f else 0.56f), p)
                val w = lerp(size.width * 0.36f, size.width * 0.14f, p)
                val topInset = lerp(if (side < 0) 0f else size.height * 0.5f, 0f, p) * 0f
                moveTo(x0, size.height * 0.25f + topInset)
                lineTo(x0 + w, lerp(size.height * 0.5f, size.height * 0.25f, p))
                lineTo(x0 + w, lerp(size.height * 0.5f, size.height * 0.75f, p))
                lineTo(x0, size.height * 0.75f); close()
            }
            drawPath(path, color)
        }
        bar(-1); bar(1)
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center">
      <svg viewBox="0 0 24 24" className="absolute size-7 fill-current" style={{ animation: "icon-crossfade 2s ease-in-out infinite" }}>
        <path d="M8 5v14l11-7z" />
      </svg>
      <svg viewBox="0 0 24 24" className="absolute size-7 fill-current" style={{ animation: "icon-crossfade-in 2s ease-in-out infinite" }}>
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
    </span>,
  ),

  icon(
    "icon-bookmark-save",
    "Bookmark save",
    "An outlined bookmark that fills from the bottom with a little ribbon flick when saved.",
    `@Composable
fun BookmarkSave(saved: Boolean, onClick: () -> Unit) {
    val fill by animateFloatAsState(if (saved) 1f else 0f, spring(stiffness = 260f), label = "fill")
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp).clickable(onClick = onClick)) {
        val path = Path().apply {
            moveTo(size.width * 0.28f, size.height * 0.2f)
            lineTo(size.width * 0.72f, size.height * 0.2f)
            lineTo(size.width * 0.72f, size.height * 0.82f)
            lineTo(size.width * 0.5f, size.height * 0.66f)
            lineTo(size.width * 0.28f, size.height * 0.82f); close()
        }
        drawPath(path, color, style = Stroke(2.5.dp.toPx(), join = StrokeJoin.Round))
        clipPath(path) {
            drawRect(color, Offset(0f, size.height * (1f - fill)), Size(size.width, size.height))
        }
    }
}`,
    <svg viewBox="0 0 40 40" className="size-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
      <path id="bm" d="M11 8 h18 v25 l-9 -6 l-9 6 z" />
      <path d="M11 8 h18 v25 l-9 -6 l-9 6 z" style={{ fill: "currentColor", stroke: "none", transformBox: "fill-box", transformOrigin: "bottom", animation: "icon-fill-up 1.8s ease-in-out infinite" }} />
    </svg>,
  ),
  icon(
    "icon-orbit-spinner",
    "Orbit",
    "An indeterminate loader: a comet arc sweeps a faint track with a trailing head dot.",
    `@Composable
fun OrbitSpinner() {
    val angle by rememberInfiniteTransition(label = "orbit").animateFloat(
        0f, 360f, infiniteRepeatable(tween(1000, easing = LinearEasing)), label = "a",
    )
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val s = Stroke(3.dp.toPx(), cap = StrokeCap.Round)
        drawCircle(color.copy(alpha = 0.18f), style = s)
        rotate(angle) {
            drawArc(color, -90f, 120f, false, style = s)
            drawCircle(color, 2.5.dp.toPx(), Offset(size.width / 2, s.width / 2))
        }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" className="opacity-20" />
      <g style={{ transformOrigin: "12px 12px", animation: "icon-spin 1s linear infinite" }}>
        <path d="M12 3 a9 9 0 0 1 8.5 6" />
        <circle cx="12" cy="3" r="1.4" fill="currentColor" stroke="none" />
      </g>
    </svg>,
  ),

  icon(
    "icon-dual-ring",
    "Dual ring",
    "Two concentric arcs counter-rotating at different speeds for a refined busy state.",
    `@Composable
fun DualRing() {
    val t = rememberInfiniteTransition(label = "dual")
    val a by t.animateFloat(0f, 360f, infiniteRepeatable(tween(1100, easing = LinearEasing)), label = "a")
    val b by t.animateFloat(0f, -360f, infiniteRepeatable(tween(1500, easing = LinearEasing)), label = "b")
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val s = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round)
        rotate(a) { drawArc(color, -90f, 110f, false, style = s) }
        rotate(b) {
            val inset = 5.dp.toPx()
            drawArc(color.copy(alpha = 0.6f), 90f, 110f, false, style = s,
                topLeft = Offset(inset, inset), size = Size(size.width - inset * 2, size.height - inset * 2))
        }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <g style={{ transformOrigin: "12px 12px", animation: "icon-spin 1.1s linear infinite" }}>
        <path d="M12 3.5 a8.5 8.5 0 0 1 8 6" />
      </g>
      <g className="opacity-60" style={{ transformOrigin: "12px 12px", animation: "icon-spin-rev 1.5s linear infinite" }}>
        <path d="M12 19 a7 7 0 0 1 -6.5 -4.5" />
      </g>
    </svg>,
  ),

  icon(
    "icon-progress-ring",
    "Progress ring",
    "A determinate ring that sweeps from empty to full, ideal for upload or task progress.",
    `@Composable
fun ProgressRing(progress: Float) { // 0f..1f
    val p by animateFloatAsState(progress, tween(600, easing = EaseInOutCubic), label = "p")
    val track = MaterialTheme.colorScheme.surfaceVariant
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val s = Stroke(4.dp.toPx(), cap = StrokeCap.Round)
        drawCircle(track, style = s)
        drawArc(color, -90f, 360f * p, false, style = s)
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" className="opacity-20" />
      <circle
        cx="12"
        cy="12"
        r="9"
        transform="rotate(-90 12 12)"
        style={{ strokeDasharray: 57, strokeDashoffset: 57, animation: "icon-sweep-arc 1.9s ease-in-out infinite", ["--len" as string]: "57px" } as React.CSSProperties}
      />
    </svg>,
  ),

  icon(
    "icon-sync",
    "Sync",
    "Paired arrows that rotate with momentum — overshooting then settling — between syncs.",
    `@Composable
fun SyncIcon(syncing: Boolean) {
    val angle by animateFloatAsState(
        if (syncing) 360f else 0f,
        spring(dampingRatio = Spring.DampingRatioMediumBouncy, stiffness = 120f),
        label = "sync",
    )
    Icon(
        Icons.Filled.Sync, "Sync",
        tint = MaterialTheme.colorScheme.primary,
        modifier = Modifier.size(32.dp).graphicsLayer { rotationZ = angle },
    )
}`,
    <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "12px 12px", animation: "icon-spin-momentum 1.9s ease-in-out infinite" }}>
      <path d="M21 12a9 9 0 0 1-15.5 6.2" />
      <path d="M3 12a9 9 0 0 1 15.5-6.2" />
      <path d="M18 2.5v4h-4" />
      <path d="M6 21.5v-4h4" />
    </svg>,
  ),

  icon(
    "icon-cloud-sync",
    "Cloud sync",
    "A cloud with sync arrows spinning inside it while data is reconciled with the server.",
    `@Composable
fun CloudSync() {
    val angle by rememberInfiniteTransition(label = "cs").animateFloat(
        0f, 360f, infiniteRepeatable(tween(1300, easing = FastOutSlowInEasing)), label = "a",
    )
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Cloud, null, tint = MaterialTheme.colorScheme.primary.copy(alpha = 0.9f), modifier = Modifier.size(34.dp))
        Icon(Icons.Filled.Sync, "Syncing", tint = MaterialTheme.colorScheme.surface,
            modifier = Modifier.size(15.dp).offset(y = 2.dp).graphicsLayer { rotationZ = angle })
    }
}`,
    <span className="relative inline-flex size-10 items-center justify-center text-primary">
      <svg viewBox="0 0 24 24" className="size-9 fill-current opacity-90"><path d="M6.5 18a4.5 4.5 0 0 1-.5-8.96A6 6 0 0 1 17.7 8.5 3.75 3.75 0 0 1 18 16H6.5z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute size-4 translate-y-0.5 fill-none stroke-background" strokeWidth="2.5" strokeLinecap="round" style={{ transformOrigin: "12px 12px", animation: "icon-spin 1.3s linear infinite" }}>
        <path d="M20 11a8 8 0 0 1-13.7 5.5" /><path d="M4 13a8 8 0 0 1 13.7-5.5" />
      </svg>
    </span>,
  ),

  icon(
    "icon-upload-cloud",
    "Upload",
    "A cloud-upload control whose arrow lifts up into the cloud and fades, looping the transfer.",
    `@Composable
fun UploadCloud(uploading: Boolean) {
    val t = rememberInfiniteTransition(label = "up")
    val y by t.animateFloat(3f, -3f, infiniteRepeatable(tween(900), RepeatMode.Reverse), label = "y")
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Cloud, null, tint = MaterialTheme.colorScheme.primary.copy(alpha = 0.9f), modifier = Modifier.size(34.dp))
        if (uploading) Icon(Icons.Filled.ArrowUpward, "Uploading", tint = MaterialTheme.colorScheme.surface,
            modifier = Modifier.size(15.dp).offset(y = y.dp))
    }
}`,
    <span className="relative inline-flex size-10 items-center justify-center text-primary">
      <svg viewBox="0 0 24 24" className="size-9 fill-current opacity-90"><path d="M6.5 18a4.5 4.5 0 0 1-.5-8.96A6 6 0 0 1 17.7 8.5 3.75 3.75 0 0 1 18 16H6.5z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute size-4 fill-none stroke-background" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "icon-rise 1.4s ease-in-out infinite" }}>
        <path d="M12 20V9" /><path d="M8 13l4-4 4 4" />
      </svg>
    </span>,
  ),

  icon(
    "icon-share-nodes",
    "Share",
    "Three nodes that pop in as connecting links draw between them — the share graph.",
    `@Composable
fun ShareNodes(visible: Boolean) {
    val p by animateFloatAsState(if (visible) 1f else 0f, tween(700, easing = EaseOutBack), label = "share")
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val a = Offset(size.width * 0.78f, size.height * 0.2f)
        val b = Offset(size.width * 0.22f, size.height * 0.5f)
        val c = Offset(size.width * 0.78f, size.height * 0.8f)
        val line = ((p) ).coerceIn(0f, 1f)
        drawLine(color.copy(alpha = 0.7f), b, lerp(b, a, line), 2.dp.toPx())
        drawLine(color.copy(alpha = 0.7f), b, lerp(b, c, line), 2.dp.toPx())
        listOf(a, b, c).forEach { drawCircle(color, 4.dp.toPx() * p, it) }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M8 12 L17 6.5" style={{ strokeDasharray: 11, strokeDashoffset: 11, animation: "icon-draw 1.8s ease-in-out infinite alternate" }} />
      <path d="M8 12 L17 17.5" style={{ strokeDasharray: 11, strokeDashoffset: 11, animation: "icon-draw 1.8s ease-in-out 0.15s infinite alternate" }} />
      {[[18, 6], [6, 12], [18, 18]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill="currentColor" stroke="none" style={{ transformOrigin: `${x}px ${y}px`, animation: `icon-pop 1.8s ease-in-out ${i * 0.12}s infinite` }} />
      ))}
    </svg>,
  ),

  icon(
    "icon-settings-gears",
    "Settings",
    "Two meshed gears turning in opposite directions — a richer take on the settings cog.",
    `@Composable
fun MeshedGears() {
    val t = rememberInfiniteTransition(label = "gears")
    val a by t.animateFloat(0f, 360f, infiniteRepeatable(tween(4000, easing = LinearEasing)), label = "a")
    val b by t.animateFloat(0f, -360f, infiniteRepeatable(tween(4000, easing = LinearEasing)), label = "b")
    val color = LocalContentColor.current
    Box(Modifier.size(40.dp)) {
        Icon(Icons.Filled.Settings, null, tint = color, modifier = Modifier.size(26.dp).align(Alignment.TopStart).graphicsLayer { rotationZ = a })
        Icon(Icons.Filled.Settings, null, tint = color.copy(alpha = 0.7f), modifier = Modifier.size(18.dp).align(Alignment.BottomEnd).graphicsLayer { rotationZ = b })
    }
}`,
    <span className="relative inline-flex size-10 text-primary">
      <svg viewBox="0 0 24 24" className="absolute left-0 top-0 size-7 fill-current" style={{ transformOrigin: "12px 12px", animation: "icon-spin 4s linear infinite" }}><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9 4l-2-1 1-2-2-2-2 1-1-2h-2l-1 2-2-1-2 2 1 2-2 1v2l2 1-1 2 2 2 2-1 1 2h2l1-2 2 1 2-2-1-2 2-1z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute bottom-0 right-0 size-5 fill-current opacity-70" style={{ transformOrigin: "12px 12px", animation: "icon-spin-rev 4s linear infinite" }}><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9 4l-2-1 1-2-2-2-2 1-1-2h-2l-1 2-2-1-2 2 1 2-2 1v2l2 1-1 2 2 2 2-1 1 2h2l1-2 2 1 2-2-1-2 2-1z" /></svg>
    </span>,
  ),

  icon(
    "icon-search-scan",
    "Search scan",
    "A magnifier that drifts across the surface while a scan line passes through its lens.",
    `@Composable
fun SearchScan() {
    val t = rememberInfiniteTransition(label = "scan")
    val scan by t.animateFloat(0f, 1f, infiniteRepeatable(tween(1200), RepeatMode.Reverse), label = "s")
    val color = LocalContentColor.current
    val accent = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Search, "Search", tint = color, modifier = Modifier.size(32.dp))
        Canvas(Modifier.size(32.dp)) {
            val r = size.width * 0.28f
            val y = lerp(center.y - r, center.y + r, scan)
            drawLine(accent, Offset(center.x - r, y), Offset(center.x + r, y), 2.5.dp.toPx(), StrokeCap.Round)
        }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary" style={{ animation: "icon-sway 2.6s ease-in-out infinite" }}>
      <svg viewBox="0 0 24 24" className="size-8 fill-none stroke-current" strokeWidth="2"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" strokeLinecap="round" /></svg>
      <span className="absolute" style={{ left: "6px", top: "10.5px", width: "9px", height: "2px", borderRadius: "2px", background: "currentColor", animation: "icon-wave-y 1.2s ease-in-out infinite" }} />
    </span>,
  ),

  icon(
    "icon-location-pin",
    "Location",
    "A map pin that drops onto the surface and casts an expanding ripple where it lands.",
    `@Composable
fun LocationDrop(active: Boolean) {
    val y by animateFloatAsState(if (active) 0f else -16f,
        spring(dampingRatio = Spring.DampingRatioMediumBouncy, stiffness = 400f), label = "drop")
    val ripple by rememberInfiniteTransition(label = "r").animateFloat(
        0f, 1f, infiniteRepeatable(tween(1400), RepeatMode.Restart), label = "rp")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp), contentAlignment = Alignment.BottomCenter) {
        Canvas(Modifier.matchParentSize()) {
            drawCircle(color.copy(alpha = (1f - ripple) * 0.5f), size.width * 0.3f * ripple,
                Offset(center.x, size.height * 0.86f), style = Stroke(2.dp.toPx()))
        }
        Icon(Icons.Filled.LocationOn, "Location", tint = color, modifier = Modifier.size(26.dp).offset(y = y.dp))
    }
}`,
    <span className="relative inline-flex size-10 items-end justify-center text-primary">
      <span className="absolute bottom-1 size-5 rounded-full border-2 border-primary/60" style={{ animation: "icon-ring 1.4s ease-out infinite" }} />
      <svg viewBox="0 0 24 24" className="size-7 fill-current" style={{ animation: "icon-pin-drop 1.6s ease-in-out infinite" }}><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
    </span>,
  ),

  icon(
    "icon-trash-lid",
    "Delete",
    "A trash can whose lid tilts open on hover, signalling a destructive action up front.",
    `@Composable
fun TrashOpen(armed: Boolean) {
    val lid by animateFloatAsState(if (armed) -28f else 0f, spring(stiffness = 300f), label = "lid")
    val color = MaterialTheme.colorScheme.error
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Delete, "Delete", tint = color, modifier = Modifier.size(30.dp))
        Icon(Icons.Filled.HorizontalRule, null, tint = color,
            modifier = Modifier.size(18.dp).offset(y = (-9).dp)
                .graphicsLayer { rotationZ = lid; transformOrigin = TransformOrigin(0.1f, 0.5f) })
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8 h12 l-1 12 a2 2 0 0 1 -2 2 H9 a2 2 0 0 1 -2 -2 z" />
      <path d="M10 11v7M14 11v7" />
      <g style={{ transformOrigin: "5px 6px", animation: "icon-lid 2s ease-in-out infinite" }}>
        <path d="M4 6 h16" /><path d="M9.5 6 l.5-2 h4 l.5 2" />
      </g>
    </svg>,
  ),

  icon(
    "icon-eye-toggle",
    "Visibility",
    "A show/hide control where the eye and a struck-through eye cross-fade for password fields.",
    `@Composable
fun VisibilityToggle(visible: Boolean, onToggle: () -> Unit) {
    IconButton(onClick = onToggle) {
        AnimatedContent(visible, transitionSpec = { fadeIn() togetherWith fadeOut() }, label = "vis") { v ->
            Icon(
                if (v) Icons.Filled.Visibility else Icons.Filled.VisibilityOff,
                contentDescription = if (v) "Hide" else "Show",
                tint = LocalContentColor.current,
            )
        }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center fill-current text-primary">
      <svg viewBox="0 0 24 24" className="absolute size-8" style={{ animation: "icon-crossfade 2.2s ease-in-out infinite" }}><path d="M12 5C5 5 1 12 1 12s4 7 11 7 11-7 11-7-4-7-11-7zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute size-8" style={{ animation: "icon-crossfade-in 2.2s ease-in-out infinite" }}><path d="M2 4.3L3.3 3 21 20.7 19.7 22l-3-3A11.6 11.6 0 0 1 12 20C5 20 1 13 1 13a18 18 0 0 1 4.2-5L2 4.3zM12 8a4 4 0 0 1 4 4l-4-4z" /></svg>
    </span>,
  ),

  icon(
    "icon-lock-toggle",
    "Lock",
    "A padlock whose shackle lifts and re-seats as it locks and unlocks, with a subtle bounce.",
    `@Composable
fun LockToggle(locked: Boolean, onToggle: () -> Unit) {
    val lift by animateFloatAsState(if (locked) 0f else -4f, spring(stiffness = 400f), label = "lift")
    val rot by animateFloatAsState(if (locked) 0f else -18f, spring(stiffness = 400f), label = "rot")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp).clickable(onClick = onToggle), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Lock, null, tint = color, modifier = Modifier.size(28.dp))
        // shackle redrawn on top so it can lift independently
        Canvas(Modifier.size(28.dp)) {
            translate(top = lift.dp.toPx()) {
                rotate(rot, pivot = Offset(size.width * 0.32f, size.height * 0.42f)) {
                    drawArc(color, 180f, 180f, false,
                        topLeft = Offset(size.width * 0.32f, size.height * 0.18f),
                        size = Size(size.width * 0.36f, size.height * 0.36f),
                        style = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round))
                }
            }
        }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" fill="currentColor" stroke="none" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" style={{ transformOrigin: "12px 11px", animation: "icon-lid-pop 2s ease-in-out infinite" }} />
    </svg>,
  ),
  icon(
    "icon-star-rate",
    "Rate",
    "A rating star that fills from the bottom and throws a quick sparkle when selected.",
    `@Composable
fun RateStar(selected: Boolean, onClick: () -> Unit) {
    val fill by animateFloatAsState(if (selected) 1f else 0f, spring(stiffness = 300f), label = "fill")
    val color = Color(0xFFF59E0B)
    Canvas(Modifier.size(40.dp).clickable(onClick = onClick)) {
        val star = starPath(center, size.minDimension * 0.42f)
        drawPath(star, color, style = Stroke(2.5.dp.toPx(), join = StrokeJoin.Round))
        clipPath(star) { drawRect(color, Offset(0f, size.height * (1f - fill)), Size(size.width, size.height)) }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-amber-400">
      <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 17.8 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8z" />
        <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 17.8 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8z" style={{ fill: "currentColor", stroke: "none", transformBox: "fill-box", transformOrigin: "bottom", animation: "icon-fill-up 1.8s ease-in-out infinite" }} />
      </svg>
      <span className="absolute right-0 top-0 size-2 text-amber-300" style={{ animation: "icon-twinkle 1.8s ease-in-out 0.6s infinite" }}>
        <svg viewBox="0 0 24 24" className="size-2 fill-current"><path d="M12 2l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z" /></svg>
      </span>
    </span>,
  ),

  icon(
    "icon-trophy-shine",
    "Trophy",
    "An award trophy with a glint of light sweeping across it to celebrate an achievement.",
    `@Composable
fun TrophyShine() {
    val x by rememberInfiniteTransition(label = "tr").animateFloat(
        -1f, 1f, infiniteRepeatable(tween(1600, delayMillis = 600), RepeatMode.Restart), label = "x")
    val gold = Color(0xFFF59E0B)
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.EmojiEvents, "Trophy", tint = gold, modifier = Modifier.size(32.dp)
            .drawWithContent {
                drawContent()
                clipRect {
                    drawLine(Color.White.copy(alpha = 0.7f),
                        Offset(size.width * x, 0f), Offset(size.width * x + 8f, size.height), 6f)
                }
            })
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center overflow-hidden text-amber-500">
      <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M7 4h10v2h3v3a4 4 0 0 1-4 4h-.3A5 5 0 0 1 13 15.9V18h3v2H8v-2h3v-2.1A5 5 0 0 1 8.3 13H8a4 4 0 0 1-4-4V6h3V4zm0 4H6v1a2 2 0 0 0 1 1.7V8zm10 0v2.7A2 2 0 0 0 18 9V8h-1z" /></svg>
      <span className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-white/60" style={{ animation: "icon-shine 1.8s ease-in-out infinite" }} />
    </span>,
  ),

  icon(
    "icon-gift-open",
    "Gift",
    "A wrapped gift whose lid lifts with a sparkle — perfect for rewards and unlock moments.",
    `@Composable
fun GiftOpen(opened: Boolean) {
    val lift by animateFloatAsState(if (opened) -6f else 0f, spring(stiffness = 350f), label = "lift")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.CardGiftcard, "Gift", tint = color, modifier = Modifier.size(30.dp))
        Icon(Icons.Filled.HorizontalRule, null, tint = color,
            modifier = Modifier.size(22.dp).offset(y = (-8 + lift).dp))
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="1" fill="currentColor" stroke="none" opacity="0.9" />
      <path d="M12 11v9M9 8a2 2 0 1 1 3-2 2 2 0 1 1 3 2" />
      <g style={{ transformOrigin: "12px 11px", animation: "icon-lid-pop 1.9s ease-in-out infinite" }}>
        <rect x="3" y="7.5" width="18" height="3.5" rx="1" fill="currentColor" stroke="none" />
      </g>
    </svg>,
  ),

  icon(
    "icon-confetti",
    "Confetti",
    "A celebratory burst of confetti pieces flying outward — for success and milestone moments.",
    `@Composable
fun ConfettiBurst(play: Boolean) {
    val t by animateFloatAsState(if (play) 1f else 0f, tween(900, easing = EaseOutCubic), label = "burst")
    val colors = listOf(Color(0xFFF59E0B), Color(0xFFE11D48), Color(0xFF3B82F6), Color(0xFF16A34A))
    Canvas(Modifier.size(40.dp)) {
        repeat(10) { i ->
            val a = (i / 10f) * 2f * PI.toFloat()
            val d = size.minDimension * 0.42f * t
            rotate(i * 36f + t * 90f, pivot = center + Offset(cos(a) * d, sin(a) * d)) {
                drawRect(colors[i % 4].copy(alpha = 1f - t),
                    topLeft = center + Offset(cos(a) * d, sin(a) * d), size = Size(4f, 6f))
            }
        }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center">
      {[
        { tx: "-12px", ty: "-13px", r: "120deg", c: "bg-amber-400" },
        { tx: "12px", ty: "-12px", r: "-90deg", c: "bg-rose-500" },
        { tx: "14px", ty: "4px", r: "140deg", c: "bg-sky-500" },
        { tx: "-13px", ty: "6px", r: "-120deg", c: "bg-emerald-500" },
        { tx: "0px", ty: "-16px", r: "80deg", c: "bg-violet-500" },
        { tx: "6px", ty: "13px", r: "-60deg", c: "bg-amber-500" },
        { tx: "-7px", ty: "13px", r: "100deg", c: "bg-rose-400" },
      ].map((p, i) => (
        <span
          key={i}
          className={`absolute size-1.5 rounded-[1px] ${p.c}`}
          style={{ ["--tx" as string]: p.tx, ["--ty" as string]: p.ty, ["--r" as string]: p.r, animation: `icon-confetti 1.3s ease-out ${i * 0.04}s infinite` } as React.CSSProperties}
        />
      ))}
    </span>,
  ),

  icon(
    "icon-rocket-launch",
    "Rocket",
    "A rocket that hovers with a flickering exhaust plume — for launches, deploys and boosts.",
    `@Composable
fun RocketLaunch() {
    val t = rememberInfiniteTransition(label = "rkt")
    val bob by t.animateFloat(-1.5f, 1.5f, infiniteRepeatable(tween(700), RepeatMode.Reverse), label = "bob")
    val flame by t.animateFloat(0.7f, 1.3f, infiniteRepeatable(tween(140), RepeatMode.Reverse), label = "f")
    val color = LocalContentColor.current
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Rocket, "Launch", tint = color, modifier = Modifier.size(30.dp).offset(y = bob.dp))
        Canvas(Modifier.size(30.dp)) {
            drawPath(flamePath(center, flame), Brush.verticalGradient(listOf(Color(0xFFF59E0B), Color(0xFFE11D48))))
        }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary" style={{ animation: "icon-drop 1.4s ease-in-out infinite" }}>
      <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M12 2c3.5 2 5 5.5 5 9 0 2-.6 3.6-1.5 5h-7C7.6 14.6 7 13 7 11c0-3.5 1.5-7 5-9zm0 6a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 12 8zM8.5 17l-1.5 4 3-1.5M15.5 17l1.5 4-3-1.5" /></svg>
      <span className="absolute bottom-0 size-2 rounded-full bg-gradient-to-b from-amber-400 to-rose-500" style={{ animation: "icon-flicker 0.25s ease-in-out infinite", transformOrigin: "top" }} />
    </span>,
  ),

  icon(
    "icon-paper-plane",
    "Send",
    "A paper plane that lifts off and flies away on send, then loops back to its rest pose.",
    `@Composable
fun SendPlane(onSend: () -> Unit) {
    var sending by remember { mutableStateOf(false) }
    val offset by animateFloatAsState(if (sending) 1f else 0f, tween(500, easing = EaseInCubic), label = "send")
    IconButton(onClick = { sending = true; onSend() }) {
        Icon(Icons.Filled.Send, "Send", tint = MaterialTheme.colorScheme.primary,
            modifier = Modifier.graphicsLayer { translationX = offset * 24f; translationY = -offset * 24f; alpha = 1f - offset })
    }
    LaunchedEffect(sending) { if (sending) { delay(550); sending = false } }
}`,
    <svg viewBox="0 0 24 24" className="size-8 fill-current text-primary" style={{ animation: "icon-fly 1.5s ease-in-out infinite" }}>
      <path d="M3 11l18-8-8 18-2-7-8-3z" />
    </svg>,
  ),

  icon(
    "icon-fingerprint",
    "Fingerprint",
    "Concentric fingerprint ridges that trace themselves in, resolving into an auth prompt.",
    `@Composable
fun FingerprintScan(progress: Float) { // 0f..1f
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val s = Stroke(2.dp.toPx(), cap = StrokeCap.Round)
        listOf(0.9f, 0.65f, 0.4f).forEachIndexed { i, r ->
            val p = ((progress - i * 0.15f) / 0.55f).coerceIn(0f, 1f)
            drawArc(color, 200f, 200f * p, false, style = s,
                topLeft = center - Offset(size.width * r / 2, size.height * r / 2),
                size = Size(size.width * r, size.height * r))
        }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 12 a8 8 0 0 1 16 0" style={{ strokeDasharray: 26, strokeDashoffset: 26, animation: "icon-draw 2s ease-in-out infinite alternate" }} />
      <path d="M7 13 a5 5 0 0 1 10 0" style={{ strokeDasharray: 17, strokeDashoffset: 17, animation: "icon-draw 2s ease-in-out 0.2s infinite alternate" }} />
      <path d="M10 14 a2.2 2.2 0 0 1 4 0" style={{ strokeDasharray: 8, strokeDashoffset: 8, animation: "icon-draw 2s ease-in-out 0.4s infinite alternate" }} />
      <path d="M12 14 v5" style={{ strokeDasharray: 6, strokeDashoffset: 6, animation: "icon-draw 2s ease-in-out 0.55s infinite alternate" }} />
    </svg>,
  ),

  icon(
    "icon-shield-check",
    "Verified",
    "A security shield whose checkmark draws in to confirm a verified or protected state.",
    `@Composable
fun ShieldVerified(verified: Boolean) {
    val p by animateFloatAsState(if (verified) 1f else 0f, tween(500, easing = EaseOutCubic), label = "v")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Shield, null, tint = color.copy(alpha = 0.25f), modifier = Modifier.size(34.dp))
        Canvas(Modifier.size(34.dp)) {
            val tick = Path().apply {
                moveTo(size.width * 0.36f, size.height * 0.5f)
                lineTo(size.width * 0.46f, size.height * 0.6f)
                lineTo(size.width * 0.66f, size.height * 0.38f)
            }
            val m = PathMeasure().apply { setPath(tick, false) }
            drawPath(Path().also { m.getSegment(0f, m.length * p, it, true) }, color,
                style = Stroke(3.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round))
        }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary">
      <svg viewBox="0 0 24 24" className="size-9 fill-current opacity-20"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute size-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 12l2.3 2.3 4.7-4.8" style={{ strokeDasharray: 12, strokeDashoffset: 12, animation: "icon-draw 2s ease-in-out infinite alternate" }} />
      </svg>
    </span>,
  ),

  icon(
    "icon-edit-pencil",
    "Edit",
    "A pencil that strokes an underline beneath it, signalling inline editing or rename.",
    `@Composable
fun EditPencil() {
    val t = rememberInfiniteTransition(label = "edit")
    val p by t.animateFloat(0f, 1f, infiniteRepeatable(tween(1400), RepeatMode.Restart), label = "p")
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val y = size.height * 0.78f
        drawLine(color, Offset(size.width * 0.2f, y), Offset(size.width * (0.2f + 0.6f * p), y), 2.5.dp.toPx(), StrokeCap.Round)
        translate(size.width * 0.6f * p, 0f) {
            drawPath(pencilPath(size), color)
        }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <g style={{ animation: "icon-slide-x 1.8s ease-in-out infinite" }}>
        <path d="M14 4l6 6L8 22H2v-6L14 4z" fill="currentColor" stroke="none" />
      </g>
      <path d="M3 21h18" style={{ strokeDasharray: 18, strokeDashoffset: 18, animation: "icon-draw 1.8s ease-in-out infinite alternate" }} />
    </svg>,
  ),

  icon(
    "icon-clock-sweep",
    "Clock",
    "A clock whose second hand sweeps continuously while the hour hand stays put.",
    `@Composable
fun SweepingClock() {
    val angle by rememberInfiniteTransition(label = "clock").animateFloat(
        0f, 360f, infiniteRepeatable(tween(2000, easing = LinearEasing)), label = "a")
    val color = LocalContentColor.current
    Canvas(Modifier.size(40.dp)) {
        drawCircle(color, style = Stroke(2.dp.toPx()), radius = size.minDimension / 2 - 2.dp.toPx())
        drawLine(color, center, center + Offset(0f, -size.height * 0.22f), 2.5.dp.toPx(), StrokeCap.Round) // hour
        rotate(angle) { drawLine(color, center, center + Offset(0f, -size.height * 0.34f), 1.5.dp.toPx(), StrokeCap.Round) }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12V8" />
      <path d="M12 12V6.5" strokeWidth="1.5" style={{ transformOrigin: "12px 12px", animation: "icon-spin 2s linear infinite" }} />
    </svg>,
  ),

  icon(
    "icon-alarm-ring",
    "Alarm",
    "An alarm clock that rattles side to side as it rings, with twin bells shaking on top.",
    `@Composable
fun AlarmRinging(ringing: Boolean) {
    val shake by rememberInfiniteTransition(label = "al").animateFloat(
        -8f, 8f, infiniteRepeatable(tween(90, easing = LinearEasing), RepeatMode.Reverse), label = "s")
    Icon(Icons.Filled.Alarm, "Alarm", tint = MaterialTheme.colorScheme.primary,
        modifier = Modifier.size(32.dp).graphicsLayer { rotationZ = if (ringing) shake else 0f })
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary fill-current" style={{ transformOrigin: "12px 13px", animation: "icon-swing 0.16s ease-in-out infinite" }}>
      <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 8.6l3 1.7-1 1.7-4-2.3V7h2v5.6zM5 2.5L1.5 5 3 7l3.5-2.5L5 2.5zM19 2.5L17.5 4.5 21 7l1.5-2L19 2.5z" />
    </svg>,
  ),

  icon(
    "icon-timer-ring",
    "Timer",
    "A countdown timer whose ring empties as the remaining time runs down to zero.",
    `@Composable
fun CountdownTimer(remaining: Float) { // 1f -> 0f
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val s = Stroke(4.dp.toPx(), cap = StrokeCap.Round)
        drawCircle(color.copy(alpha = 0.2f), style = s)
        drawArc(color, -90f, 360f * remaining, false, style = s)
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" className="opacity-20" />
      <circle cx="12" cy="12" r="9" transform="rotate(-90 12 12)" style={{ strokeDasharray: 57, strokeDashoffset: 0, animation: "icon-sweep-arc 3s linear infinite reverse", ["--len" as string]: "57px" } as React.CSSProperties} />
    </svg>,
  ),

  icon(
    "icon-hourglass",
    "Hourglass",
    "An hourglass with sand draining through the neck, looping while a task is pending.",
    `@Composable
fun Hourglass() {
    val t = rememberInfiniteTransition(label = "hg")
    val drain by t.animateFloat(0f, 1f, infiniteRepeatable(tween(1600), RepeatMode.Restart), label = "d")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.HourglassEmpty, "Loading", tint = color, modifier = Modifier.size(30.dp))
        Canvas(Modifier.size(30.dp)) {
            drawLine(color, Offset(center.x, center.y), Offset(center.x, lerp(center.y, size.height * 0.7f, drain)), 2f)
        }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary">
      <svg viewBox="0 0 24 24" className="size-8 fill-current"><path d="M6 2h12v2l-5 8 5 8v2H6v-2l5-8-5-8V2zm2.5 2L12 9.5 15.5 4h-7z" /></svg>
      <span className="absolute" style={{ top: "11px", width: "2px", borderRadius: "1px", background: "currentColor", animation: "icon-fall 1.6s linear infinite" }} />
    </span>,
  ),
  icon(
    "icon-sunrise",
    "Sunrise",
    "A sun that rises above the horizon line, its rays growing — for morning or onboarding states.",
    `@Composable
fun Sunrise() {
    val t = rememberInfiniteTransition(label = "sun")
    val rise by t.animateFloat(4f, -2f, infiniteRepeatable(tween(1600, easing = EaseInOut), RepeatMode.Reverse), label = "r")
    val color = Color(0xFFF59E0B)
    Box(Modifier.size(40.dp), contentAlignment = Alignment.BottomCenter) {
        Icon(Icons.Filled.WbSunny, "Sunrise", tint = color, modifier = Modifier.size(24.dp).offset(y = rise.dp))
        Canvas(Modifier.matchParentSize()) { drawLine(color, Offset(4f, size.height * 0.8f), Offset(size.width - 4f, size.height * 0.8f), 3f, StrokeCap.Round) }
    }
}`,
    <span className="relative inline-flex size-9 items-end justify-center overflow-hidden text-amber-500">
      <svg viewBox="0 0 24 24" className="size-6 fill-current" style={{ animation: "icon-rise 1.8s ease-in-out infinite" }}><path d="M12 5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12H4m16 0h-1M7 7L6 6m11 1l1-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
      <span className="absolute bottom-1.5 h-0.5 w-7 rounded-full bg-current" />
    </span>,
  ),

  icon(
    "icon-rain",
    "Rain",
    "A cloud with raindrops falling in staggered streaks beneath it for weather and sync states.",
    `@Composable
fun RainCloud() {
    val t = rememberInfiniteTransition(label = "rain")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp)) {
        Icon(Icons.Filled.Cloud, null, tint = color, modifier = Modifier.size(28.dp).align(Alignment.TopCenter))
        Canvas(Modifier.matchParentSize()) {
            repeat(3) { i ->
                val phase by t.animateFloat(0f, 1f, infiniteRepeatable(tween(800, delayMillis = i * 160)), label = "d$i")
                val x = size.width * (0.3f + i * 0.2f)
                drawLine(color.copy(alpha = 1f - phase), Offset(x, size.height * (0.55f + phase * 0.3f)),
                    Offset(x, size.height * (0.62f + phase * 0.3f)), 2.dp.toPx(), StrokeCap.Round)
            }
        }
    }
}`,
    <span className="relative inline-flex size-9 items-start justify-center text-primary">
      <svg viewBox="0 0 24 24" className="mt-0.5 size-7 fill-current"><path d="M6.5 16a4.5 4.5 0 0 1-.5-8.96A6 6 0 0 1 17.7 6.5 3.75 3.75 0 0 1 18 14H6.5z" /></svg>
      {[0, 1, 2].map((i) => (
        <span key={i} className="absolute h-1.5 w-0.5 rounded-full bg-current" style={{ left: `${9 + i * 6}px`, top: "18px", animation: `icon-fall 0.9s linear ${i * 0.18}s infinite` }} />
      ))}
    </span>,
  ),

  icon(
    "icon-snow",
    "Snow",
    "A snowflake that drifts gently downward while slowly rotating — a calm weather indicator.",
    `@Composable
fun Snowfall() {
    val t = rememberInfiniteTransition(label = "snow")
    val y by t.animateFloat(-6f, 8f, infiniteRepeatable(tween(2200, easing = LinearEasing)), label = "y")
    val spin by t.animateFloat(0f, 360f, infiniteRepeatable(tween(4000, easing = LinearEasing)), label = "s")
    Icon(Icons.Filled.AcUnit, "Snow", tint = MaterialTheme.colorScheme.primary,
        modifier = Modifier.size(28.dp).graphicsLayer { translationY = y.dp.toPx(); rotationZ = spin })
}`,
    <span className="relative inline-flex size-9 items-start justify-center text-sky-400">
      <span style={{ animation: "icon-fall 2.4s linear infinite" }}>
        <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" style={{ transformOrigin: "12px 12px", animation: "icon-spin 4s linear infinite" }}><path d="M12 2v20M4 6l16 12M20 6L4 18M2 12h20" /></svg>
      </span>
    </span>,
  ),

  icon(
    "icon-thunder",
    "Storm",
    "A storm cloud with a lightning bolt that double-flashes, for severe weather or power events.",
    `@Composable
fun ThunderCloud() {
    val flash by rememberInfiniteTransition(label = "th").animateFloat(
        0.15f, 1f, infiniteRepeatable(keyframes {
            durationMillis = 2000; 0.15f at 0; 1f at 120; 0.3f at 240; 1f at 360; 0.15f at 600
        }), label = "f")
    Box(Modifier.size(40.dp)) {
        Icon(Icons.Filled.Cloud, null, tint = LocalContentColor.current, modifier = Modifier.size(28.dp).align(Alignment.TopCenter))
        Icon(Icons.Filled.Bolt, "Lightning", tint = Color(0xFFF59E0B).copy(alpha = flash),
            modifier = Modifier.size(18.dp).align(Alignment.BottomCenter))
    }
}`,
    <span className="relative inline-flex size-9 items-start justify-center">
      <svg viewBox="0 0 24 24" className="mt-0.5 size-7 fill-current text-muted-foreground"><path d="M6.5 15a4.5 4.5 0 0 1-.5-8.96A6 6 0 0 1 17.7 5.5 3.75 3.75 0 0 1 18 13H6.5z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute bottom-0 size-4 fill-current text-amber-400" style={{ animation: "icon-flash 2s linear infinite" }}><path d="M13 2L4 14h6l-1 8 9-12h-6z" /></svg>
    </span>,
  ),

  icon(
    "icon-wind",
    "Wind",
    "Gusts of wind drifting across the frame in sequence — for breezy weather or airflow.",
    `@Composable
fun WindGust() {
    val t = rememberInfiniteTransition(label = "wind")
    val color = LocalContentColor.current
    Canvas(Modifier.size(40.dp)) {
        repeat(3) { i ->
            val x by t.animateFloat(-1f, 1f, infiniteRepeatable(tween(1400, delayMillis = i * 180, easing = EaseInOut), RepeatMode.Restart), label = "g$i")
            val y = size.height * (0.35f + i * 0.18f)
            drawLine(color.copy(alpha = 1f - kotlin.math.abs(x)), Offset(size.width * 0.2f + x * 6, y),
                Offset(size.width * (0.7f + i * 0.05f) + x * 6, y), 2.dp.toPx(), StrokeCap.Round)
        }
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {[
        { d: "M3 8h11a3 3 0 1 0-3-3", delay: 0 },
        { d: "M3 12h15a3 3 0 1 1-3 3", delay: 0.2 },
        { d: "M3 16h8a2.5 2.5 0 1 1-2 4", delay: 0.4 },
      ].map((p, i) => (
        <path key={i} d={p.d} style={{ animation: `icon-slide-x 1.8s ease-in-out ${p.delay}s infinite` }} />
      ))}
    </svg>,
  ),

  icon(
    "icon-flame",
    "Flame",
    "A fire that flickers organically with scale and shear — for streaks, trends and hot items.",
    `@Composable
fun Flame() {
    val t = rememberInfiniteTransition(label = "fire")
    val s by t.animateFloat(0.9f, 1.12f, infiniteRepeatable(tween(220, easing = EaseInOut), RepeatMode.Reverse), label = "s")
    val skew by t.animateFloat(-3f, 3f, infiniteRepeatable(tween(300, easing = EaseInOut), RepeatMode.Reverse), label = "k")
    Icon(Icons.Filled.LocalFireDepartment, "Hot",
        tint = Color(0xFFF59E0B),
        modifier = Modifier.size(30.dp).graphicsLayer { scaleY = s; rotationZ = skew; transformOrigin = TransformOrigin(0.5f, 1f) })
}`,
    <svg viewBox="0 0 24 24" className="size-8 fill-current text-amber-500" style={{ transformOrigin: "12px 22px", animation: "icon-flicker 0.5s ease-in-out infinite" }}>
      <path d="M12 2c1 4 5 5 5 9a5 5 0 0 1-10 0c0-1.5.5-2.5 1.5-3.5C9 9 9 7 9 6c1 1 2 1.5 2.5 2C12 6 12 4 12 2z" />
    </svg>,
  ),

  icon(
    "icon-moon-stars",
    "Night",
    "A crescent moon with stars twinkling beside it — a polished light/dark or night mode mark.",
    `@Composable
fun MoonStars() {
    val t = rememberInfiniteTransition(label = "night")
    val tw by t.animateFloat(0.3f, 1f, infiniteRepeatable(tween(900), RepeatMode.Reverse), label = "tw")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp)) {
        Icon(Icons.Filled.DarkMode, "Night", tint = color, modifier = Modifier.size(28.dp))
        Icon(Icons.Filled.Star, null, tint = color.copy(alpha = tw), modifier = Modifier.size(8.dp).align(Alignment.TopEnd))
        Icon(Icons.Filled.Star, null, tint = color.copy(alpha = 1.3f - tw), modifier = Modifier.size(6.dp).offset(x = 22.dp, y = 14.dp))
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary">
      <svg viewBox="0 0 24 24" className="size-7 fill-current"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
      <span className="absolute right-0 top-0 size-2" style={{ animation: "icon-twinkle 1.4s ease-in-out infinite" }}><svg viewBox="0 0 24 24" className="fill-current"><path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" /></svg></span>
      <span className="absolute bottom-1 right-2 size-1.5" style={{ animation: "icon-twinkle 1.4s ease-in-out 0.5s infinite" }}><svg viewBox="0 0 24 24" className="fill-current"><path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" /></svg></span>
    </span>,
  ),

  icon(
    "icon-droplet",
    "Droplet",
    "A water drop that swells and releases a ripple — for hydration, liquids and freshness.",
    `@Composable
fun Droplet() {
    val t = rememberInfiniteTransition(label = "drop")
    val ripple by t.animateFloat(0f, 1f, infiniteRepeatable(tween(1500), RepeatMode.Restart), label = "r")
    val color = Color(0xFF3B82F6)
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Canvas(Modifier.matchParentSize()) {
            drawCircle(color.copy(alpha = (1f - ripple) * 0.5f), size.width * 0.3f * ripple,
                Offset(center.x, size.height * 0.8f), style = Stroke(2.dp.toPx()))
        }
        Icon(Icons.Filled.WaterDrop, "Water", tint = color, modifier = Modifier.size(26.dp).offset(y = (-3).dp))
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-sky-500">
      <span className="absolute bottom-1 size-4 rounded-full border-2 border-sky-500/60" style={{ animation: "icon-ring 1.5s ease-out infinite" }} />
      <svg viewBox="0 0 24 24" className="size-7 fill-current" style={{ animation: "icon-drop 1.5s ease-in-out infinite" }}><path d="M12 2C8 8 5 11 5 15a7 7 0 0 0 14 0c0-4-3-7-7-13z" /></svg>
    </span>,
  ),

  icon(
    "icon-leaf",
    "Leaf",
    "A leaf swaying in the breeze — an eco, nature or sustainability accent with gentle motion.",
    `@Composable
fun SwayingLeaf() {
    val sway by rememberInfiniteTransition(label = "leaf").animateFloat(
        -9f, 9f, infiniteRepeatable(tween(900, easing = EaseInOut), RepeatMode.Reverse), label = "s")
    Icon(Icons.Filled.Eco, "Eco", tint = Color(0xFF16A34A),
        modifier = Modifier.size(30.dp).graphicsLayer { rotationZ = sway; transformOrigin = TransformOrigin(0.2f, 0.9f) })
}`,
    <svg viewBox="0 0 24 24" className="size-8 fill-current text-emerald-600" style={{ transformOrigin: "5px 20px", animation: "icon-sway 1.8s ease-in-out infinite" }}>
      <path d="M20 4C9 4 4 9 4 18c0 1 0 1 1 2 6-1 11-4 13-9-3 1-6 2-8 5 1-5 5-9 10-12z" />
    </svg>,
  ),

  icon(
    "icon-logout",
    "Logout",
    "A door with an arrow sliding out through it — a clear, animated sign-out affordance.",
    `@Composable
fun LogoutIcon(onClick: () -> Unit) {
    val t = rememberInfiniteTransition(label = "out")
    val x by t.animateFloat(0f, 4f, infiniteRepeatable(tween(800, easing = EaseInOut), RepeatMode.Reverse), label = "x")
    Box(Modifier.size(40.dp).clickable(onClick = onClick), contentAlignment = Alignment.Center) {
        Icon(Icons.AutoMirrored.Filled.Logout, "Logout", tint = MaterialTheme.colorScheme.error, modifier = Modifier.graphicsLayer { translationX = x.dp.toPx() })
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <g style={{ animation: "icon-slide-x 1.6s ease-in-out infinite" }}>
        <path d="M14 17l5-5-5-5M19 12H9" />
      </g>
    </svg>,
  ),

  icon(
    "icon-login",
    "Login",
    "A door with an arrow sliding inward — the sign-in counterpart to the logout control.",
    `@Composable
fun LoginIcon(onClick: () -> Unit) {
    val t = rememberInfiniteTransition(label = "in")
    val x by t.animateFloat(-4f, 0f, infiniteRepeatable(tween(800, easing = EaseInOut), RepeatMode.Reverse), label = "x")
    Box(Modifier.size(40.dp).clickable(onClick = onClick), contentAlignment = Alignment.Center) {
        Icon(Icons.AutoMirrored.Filled.Login, "Login", tint = MaterialTheme.colorScheme.primary, modifier = Modifier.graphicsLayer { translationX = x.dp.toPx() })
    }
}`,
    <svg viewBox="0 0 24 24" className="size-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <g style={{ animation: "icon-slide-x-rev 1.6s ease-in-out infinite" }}>
        <path d="M10 17l5-5-5-5M15 12H3" />
      </g>
    </svg>,
  ),

  icon(
    "icon-cart-add",
    "Add to cart",
    "A shopping cart that bumps as an item drops into it — confirming a product was added.",
    `@Composable
fun AddToCart(onAdd: () -> Unit) {
    var added by remember { mutableStateOf(false) }
    val drop by animateFloatAsState(if (added) 1f else 0f, tween(400, easing = EaseInCubic), label = "drop")
    val bump by animateFloatAsState(if (added) 1f else 0f, spring(Spring.DampingRatioMediumBouncy), label = "bump")
    Box(Modifier.size(40.dp).clickable { added = true; onAdd() }, contentAlignment = Alignment.Center) {
        if (drop < 1f) Box(Modifier.size(6.dp).offset(y = lerp((-12).dp, (-2).dp, drop)).background(MaterialTheme.colorScheme.primary, CircleShape).alpha(1f - drop))
        Icon(Icons.Filled.ShoppingCart, "Add to cart", tint = MaterialTheme.colorScheme.primary, modifier = Modifier.scale(1f + bump * 0.12f))
    }
    LaunchedEffect(added) { if (added) { delay(450); added = false } }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary">
      <span className="absolute size-1.5 rounded-full bg-current" style={{ top: "2px", animation: "icon-fall 1.4s ease-in infinite" }} />
      <svg viewBox="0 0 24 24" className="size-7 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transformOrigin: "12px 18px", animation: "icon-pop 1.4s ease-in-out infinite" }}>
        <circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h2l2.5 12h11l2-8H6" />
      </svg>
    </span>,
  ),

  icon(
    "icon-power",
    "Power",
    "A power button whose ring sweeps closed around the stem with a soft glow when energised.",
    `@Composable
fun PowerToggle(on: Boolean, onToggle: () -> Unit) {
    val p by animateFloatAsState(if (on) 1f else 0f, tween(500, easing = EaseInOutCubic), label = "pwr")
    val color = if (on) Color(0xFF16A34A) else LocalContentColor.current
    Canvas(Modifier.size(40.dp).clickable(onClick = onToggle)) {
        val s = Stroke(3.dp.toPx(), cap = StrokeCap.Round)
        drawArc(color, -60f, 300f * p, false, style = s,
            topLeft = Offset(size.width * 0.18f, size.height * 0.18f), size = Size(size.width * 0.64f, size.height * 0.64f))
        drawLine(color, Offset(center.x, size.height * 0.18f), Offset(center.x, size.height * 0.42f), s.width, StrokeCap.Round)
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-emerald-500">
      <span className="absolute size-7 rounded-full bg-emerald-500/30 blur-[3px]" style={{ animation: "icon-pop 2s ease-in-out infinite" }} />
      <svg viewBox="0 0 24 24" className="relative size-7 fill-none stroke-current" strokeWidth="2.4" strokeLinecap="round">
        <path d="M5.5 7.5a8 8 0 1 0 13 0" style={{ strokeDasharray: 38, strokeDashoffset: 38, animation: "icon-draw 2s ease-in-out infinite alternate" }} />
        <path d="M12 3v8" />
      </svg>
    </span>,
  ),
  icon(
    "icon-bluetooth",
    "Bluetooth",
    "A Bluetooth glyph emitting pulse rings while it searches for and pairs with a device.",
    `@Composable
fun BluetoothPairing(pairing: Boolean) {
    val pulse by rememberInfiniteTransition(label = "bt").animateFloat(
        0f, 1f, infiniteRepeatable(tween(1400), RepeatMode.Restart), label = "p")
    val color = Color(0xFF3B82F6)
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        if (pairing) Canvas(Modifier.matchParentSize()) {
            drawCircle(color.copy(alpha = (1f - pulse) * 0.5f), size.minDimension / 2 * pulse, style = Stroke(2.dp.toPx()))
        }
        Icon(Icons.Filled.Bluetooth, "Bluetooth", tint = color, modifier = Modifier.size(26.dp))
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-sky-500">
      <span className="absolute size-6 rounded-full border-2 border-sky-500/50" style={{ animation: "icon-ring 1.4s ease-out infinite" }} />
      <svg viewBox="0 0 24 24" className="relative size-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7l10 10-5 4V3l5 4L7 17" /></svg>
    </span>,
  ),

  icon(
    "icon-signal-bars",
    "Signal",
    "Cellular signal bars that rise in sequence as connection strength is acquired.",
    `@Composable
fun SignalBars() {
    val t = rememberInfiniteTransition(label = "sig")
    val color = MaterialTheme.colorScheme.primary
    Row(Modifier.size(40.dp).padding(8.dp), verticalAlignment = Alignment.Bottom, horizontalArrangement = Arrangement.spacedBy(3.dp)) {
        repeat(4) { i ->
            val h by t.animateFloat(0.2f, 1f, infiniteRepeatable(tween(700, delayMillis = i * 160, easing = EaseInOut), RepeatMode.Reverse), label = "b$i")
            Box(Modifier.width(4.dp).fillMaxHeight((0.3f + i * 0.23f) * h).background(color, RoundedCornerShape(2.dp)))
        }
    }
}`,
    <span className="inline-flex h-8 items-end gap-1 text-primary">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="w-1 rounded-sm bg-current" style={{ height: `${30 + i * 22}%`, transformOrigin: "bottom", animation: `icon-grow-y 1.2s ease-in-out ${i * 0.16}s infinite` }} />
      ))}
    </span>,
  ),

  icon(
    "icon-checkbox",
    "Checkbox",
    "A checkbox whose rounded box settles and the tick strokes in when toggled on.",
    `@Composable
fun AnimatedCheckbox(checked: Boolean, onChange: (Boolean) -> Unit) {
    val p by animateFloatAsState(if (checked) 1f else 0f, spring(stiffness = 400f), label = "chk")
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(34.dp).clickable { onChange(!checked) }) {
        drawRoundRect(color.copy(alpha = 0.2f + 0.8f * p), style = if (p < 1f) Stroke(2.5.dp.toPx()) else Fill,
            cornerRadius = CornerRadius(7f), size = size * 0.8f, topLeft = size.center / 5f)
        val tick = Path().apply { moveTo(size.width*0.32f, size.height*0.5f); lineTo(size.width*0.44f, size.height*0.62f); lineTo(size.width*0.66f, size.height*0.38f) }
        val m = PathMeasure().apply { setPath(tick, false) }
        drawPath(Path().also { m.getSegment(0f, m.length * p, it, true) }, MaterialTheme.colorScheme.onPrimary,
            style = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round))
    }
}`,
    <svg viewBox="0 0 24 24" className="size-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M7.5 12.2l3 3 6-6.5" style={{ strokeDasharray: 14, strokeDashoffset: 14, animation: "icon-draw 1.6s ease-in-out infinite alternate" }} />
    </svg>,
  ),

  icon(
    "icon-toggle-switch",
    "Switch",
    "A switch whose knob slides across as the track colour fills — the canonical on/off control.",
    `@Composable
fun LabeledSwitch(on: Boolean, onChange: (Boolean) -> Unit) {
    // Material 3 Switch, customized colors via theme.
    Switch(
        checked = on, onCheckedChange = onChange,
        colors = SwitchDefaults.colors(
            checkedTrackColor = MaterialTheme.colorScheme.primary,
            checkedThumbColor = MaterialTheme.colorScheme.onPrimary,
        ),
    )
}`,
    <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary/30 px-1">
      <span className="size-5 rounded-full bg-primary shadow-sm" style={{ animation: "icon-knob 1.6s ease-in-out infinite alternate" }} />
    </span>,
  ),

  icon(
    "icon-radio-select",
    "Radio",
    "A radio option whose inner dot springs in with a ripple as the selection is made.",
    `@Composable
fun RadioPulse(selected: Boolean, onSelect: () -> Unit) {
    val p by animateFloatAsState(if (selected) 1f else 0f, spring(Spring.DampingRatioMediumBouncy, 350f), label = "r")
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(34.dp).clickable(onClick = onSelect)) {
        drawCircle(color, style = Stroke(2.5.dp.toPx()), radius = size.minDimension / 2 - 4.dp.toPx())
        drawCircle(color, radius = (size.minDimension / 2 - 8.dp.toPx()) * p)
    }
}`,
    <span className="relative inline-flex size-8 items-center justify-center text-primary">
      <span className="absolute size-7 rounded-full border-2 border-primary/50" style={{ animation: "icon-ring 1.5s ease-out infinite" }} />
      <svg viewBox="0 0 24 24" className="relative size-7 fill-none stroke-current" strokeWidth="2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none" style={{ transformOrigin: "12px 12px", animation: "icon-pop 1.5s ease-in-out infinite" }} /></svg>
    </span>,
  ),

  icon(
    "icon-typing",
    "Typing",
    "A chat bubble with three dots rippling up and down to show someone is typing.",
    `@Composable
fun TypingIndicator() {
    val t = rememberInfiniteTransition(label = "type")
    Surface(shape = RoundedCornerShape(16.dp), color = MaterialTheme.colorScheme.surfaceVariant) {
        Row(Modifier.padding(horizontal = 12.dp, vertical = 8.dp), horizontalArrangement = Arrangement.spacedBy(4.dp)) {
            repeat(3) { i ->
                val y by t.animateFloat(0f, -5f, infiniteRepeatable(tween(400, delayMillis = i * 140, easing = EaseInOut), RepeatMode.Reverse), label = "d$i")
                Box(Modifier.size(6.dp).offset(y = y.dp).background(MaterialTheme.colorScheme.onSurfaceVariant, CircleShape))
            }
        }
    }
}`,
    <span className="inline-flex items-center gap-1.5 rounded-2xl bg-muted px-3 py-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-1.5 rounded-full bg-foreground/70" style={{ animation: `icon-drop 0.9s ease-in-out ${i * 0.16}s infinite` }} />
      ))}
    </span>,
  ),

  icon(
    "icon-chat-pop",
    "Chat",
    "Two message bubbles that pop in one after the other, suggesting a lively conversation.",
    `@Composable
fun ChatBubbles() {
    val t = rememberInfiniteTransition(label = "chat")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp)) {
        val a by t.animateFloat(0f, 1f, infiniteRepeatable(tween(1400, easing = EaseOutBack), RepeatMode.Reverse), label = "a")
        val b by t.animateFloat(0f, 1f, infiniteRepeatable(tween(1400, delayMillis = 200, easing = EaseOutBack), RepeatMode.Reverse), label = "b")
        Icon(Icons.Filled.ChatBubble, null, tint = color, modifier = Modifier.size(20.dp).align(Alignment.TopStart).scale(a))
        Icon(Icons.Filled.ChatBubble, null, tint = color.copy(alpha = 0.6f), modifier = Modifier.size(16.dp).align(Alignment.BottomEnd).scale(b))
    }
}`,
    <span className="relative inline-flex size-9 text-primary">
      <svg viewBox="0 0 24 24" className="absolute left-0 top-0 size-6 fill-current" style={{ transformOrigin: "center", animation: "icon-pop 1.5s ease-in-out infinite" }}><path d="M4 4h16v12H8l-4 4z" /></svg>
      <svg viewBox="0 0 24 24" className="absolute bottom-0 right-0 size-4 fill-current opacity-60" style={{ transformOrigin: "center", animation: "icon-pop 1.5s ease-in-out 0.25s infinite" }}><path d="M4 4h16v12H8l-4 4z" /></svg>
    </span>,
  ),

  icon(
    "icon-error-shake",
    "Error",
    "An error badge whose X strokes in and the whole mark shakes to demand attention.",
    `@Composable
fun ErrorShake(error: Boolean) {
    val shake = remember { Animatable(0f) }
    LaunchedEffect(error) { if (error) shake.animateTo(0f, keyframes {
        durationMillis = 400; 0f at 0; -6f at 80; 6f at 160; -4f at 240; 0f at 400 }) }
    val color = MaterialTheme.colorScheme.error
    Box(Modifier.size(40.dp).graphicsLayer { translationX = shake.value.dp.toPx() }, contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.Error, "Error", tint = color, modifier = Modifier.size(30.dp))
    }
}`,
    <span className="inline-flex size-9 items-center justify-center text-rose-500" style={{ animation: "icon-shake 1.6s ease-in-out infinite" }}>
      <svg viewBox="0 0 24 24" className="size-8 fill-none stroke-current" strokeWidth="2.4" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" style={{ strokeDasharray: 57, strokeDashoffset: 57, animation: "icon-draw 1.6s ease-in-out infinite alternate" }} />
        <path d="M9 9l6 6M15 9l-6 6" style={{ strokeDasharray: 9, strokeDashoffset: 9, animation: "icon-draw 1.6s ease-in-out 0.2s infinite alternate" }} />
      </svg>
    </span>,
  ),

  icon(
    "icon-thumbs-up",
    "Thumbs up",
    "A thumbs-up that springs up with an approving pop ring — for upvotes and approvals.",
    `@Composable
fun ThumbsUp(liked: Boolean, onClick: () -> Unit) {
    val scale by animateFloatAsState(if (liked) 1f else 0.9f,
        spring(Spring.DampingRatioMediumBouncy, 500f), label = "t")
    val burst by animateFloatAsState(if (liked) 1f else 0f, tween(450), label = "b")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp).clickable(onClick = onClick), contentAlignment = Alignment.Center) {
        if (burst in 0f..1f) Canvas(Modifier.matchParentSize()) {
            drawCircle(color.copy(alpha = 1f - burst), size.minDimension / 2 * burst, style = Stroke(2.dp.toPx()))
        }
        Icon(Icons.Filled.ThumbUp, "Like", tint = color, modifier = Modifier.scale(scale))
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary">
      <span className="absolute size-7 rounded-full border-2 border-primary/50" style={{ animation: "icon-ring 1.4s ease-out infinite" }} />
      <svg viewBox="0 0 24 24" className="relative size-7 fill-current" style={{ transformOrigin: "12px 16px", animation: "icon-pop 1.4s ease-in-out infinite" }}><path d="M2 10h4v11H2zM8 21V10l5-8c1.5 0 2.5 1 2.2 2.5L14.5 9H21a2 2 0 0 1 2 2.3l-1.3 7A2 2 0 0 1 19.7 21z" /></svg>
    </span>,
  ),

  icon(
    "icon-calendar-check",
    "Calendar",
    "A calendar whose date cell pops and a check strokes in to confirm a scheduled event.",
    `@Composable
fun CalendarConfirm(done: Boolean) {
    val p by animateFloatAsState(if (done) 1f else 0f, tween(500, easing = EaseOutCubic), label = "cal")
    val color = MaterialTheme.colorScheme.primary
    Box(Modifier.size(40.dp), contentAlignment = Alignment.Center) {
        Icon(Icons.Filled.CalendarToday, null, tint = color.copy(alpha = 0.3f), modifier = Modifier.size(30.dp))
        Canvas(Modifier.size(30.dp)) {
            val tick = Path().apply { moveTo(size.width*0.36f, size.height*0.62f); lineTo(size.width*0.46f, size.height*0.72f); lineTo(size.width*0.66f, size.height*0.5f) }
            val m = PathMeasure().apply { setPath(tick, false) }
            drawPath(Path().also { m.getSegment(0f, m.length * p, it, true) }, color, style = Stroke(2.5.dp.toPx(), cap = StrokeCap.Round, join = StrokeJoin.Round))
        }
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center text-primary">
      <svg viewBox="0 0 24 24" className="size-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4.5" width="18" height="17" rx="2.5" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></svg>
      <svg viewBox="0 0 24 24" className="absolute size-8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5l2.3 2.3 4.7-4.8" style={{ strokeDasharray: 12, strokeDashoffset: 12, animation: "icon-draw 1.8s ease-in-out infinite alternate" }} /></svg>
    </span>,
  ),

  icon(
    "icon-qr-scan",
    "QR scan",
    "A QR frame with a laser line sweeping top to bottom as it scans for a code.",
    `@Composable
fun QrScan() {
    val y by rememberInfiniteTransition(label = "qr").animateFloat(
        0f, 1f, infiniteRepeatable(tween(1400, easing = EaseInOut), RepeatMode.Reverse), label = "y")
    val color = MaterialTheme.colorScheme.primary
    Canvas(Modifier.size(40.dp)) {
        val c = 6.dp.toPx()
        listOf(0f to 0f, size.width to 0f, 0f to size.height, size.width to size.height).forEach { (x, yy) ->
            val sx = if (x == 0f) 1 else -1; val sy = if (yy == 0f) 1 else -1
            drawLine(color, Offset(x, yy), Offset(x + sx * c, yy), 3f); drawLine(color, Offset(x, yy), Offset(x, yy + sy * c), 3f)
        }
        drawLine(color, Offset(4f, size.height * y), Offset(size.width - 4f, size.height * y), 2.dp.toPx(), StrokeCap.Round)
    }
}`,
    <span className="relative inline-flex size-9 items-center justify-center overflow-hidden text-primary">
      <svg viewBox="0 0 24 24" className="size-8 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /></svg>
      <span className="absolute h-0.5 w-6 rounded-full bg-current" style={{ animation: "icon-wave-y 1.4s ease-in-out infinite" }} />
    </span>,
  ),
];
