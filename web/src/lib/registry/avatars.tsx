import type { Variant } from "./types";

export const avatars: Variant[] = [
  {
    id: "avatar-story-ring",
    name: "Story ring",
    category: "avatars",
    description: "An avatar wrapped in a tappable two-tone gradient story ring.",
    tags: ["animated"],
    code: `@Composable
fun StoryAvatar(initials: String, hasStory: Boolean = true) {
    val ring = Brush.linearGradient(
        listOf(Color(0xFFF59E0B), Color(0xFFE11D48)),
    )
    val bg = MaterialTheme.colorScheme.background
    Box(
        modifier = Modifier
            .size(64.dp)
            .clip(CircleShape)
            .then(if (hasStory) Modifier.background(ring) else Modifier)
            .padding(2.5.dp)
            .clip(CircleShape)
            .background(bg)
            .padding(2.dp),
        contentAlignment = Alignment.Center,
    ) {
        Box(
            Modifier
                .fillMaxSize()
                .clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(initials, style = MaterialTheme.typography.titleMedium)
        }
    }
}`,
    preview: (
      <div className="rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 p-[2.5px]">
        <div className="rounded-full bg-background p-0.5">
          <div className="grid size-12 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
            LR
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "avatar-status",
    name: "Presence dot",
    category: "avatars",
    description: "An avatar with a live presence dot that reads online or away.",
    tags: [],
    code: `@Composable
fun StatusAvatar(initials: String, online: Boolean) {
    val dot = if (online) Color(0xFF22C55E)
        else MaterialTheme.colorScheme.outline
    Box(Modifier.size(48.dp)) {
        Box(
            Modifier
                .fillMaxSize()
                .clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(initials, style = MaterialTheme.typography.titleSmall)
        }
        Box(
            Modifier
                .align(Alignment.BottomEnd)
                .size(14.dp)
                .clip(CircleShape)
                .background(MaterialTheme.colorScheme.background)
                .padding(2.dp)
                .clip(CircleShape)
                .background(dot),
        )
    }
}`,
    preview: (
      <div className="relative">
        <div className="grid size-12 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
          MK
        </div>
        <span className="absolute bottom-0 right-0 block size-3.5 rounded-full border-2 border-background bg-emerald-500" />
      </div>
    ),
  },
  {
    id: "avatar-stack",
    name: "Stacked group",
    category: "avatars",
    description: "Overlapping avatars that collapse a group into a +N overflow badge.",
    tags: [],
    code: `@Composable
fun AvatarStack(initials: List<String>, max: Int = 3) {
    Row(horizontalArrangement = Arrangement.spacedBy((-12).dp)) {
        initials.take(max).forEach { label ->
            Box(
                Modifier
                    .size(40.dp)
                    .clip(CircleShape)
                    .background(MaterialTheme.colorScheme.background)
                    .padding(2.dp)
                    .clip(CircleShape)
                    .background(MaterialTheme.colorScheme.surfaceVariant),
                contentAlignment = Alignment.Center,
            ) {
                Text(label, style = MaterialTheme.typography.labelMedium)
            }
        }
        val extra = initials.size - max
        if (extra > 0) {
            Box(
                Modifier
                    .size(40.dp)
                    .clip(CircleShape)
                    .background(MaterialTheme.colorScheme.background)
                    .padding(2.dp)
                    .clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primary),
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    "+$extra",
                    color = MaterialTheme.colorScheme.onPrimary,
                    style = MaterialTheme.typography.labelMedium,
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex -space-x-3">
        {["AL", "TR", "JS"].map((s) => (
          <div
            key={s}
            className="grid size-10 place-items-center rounded-full border-2 border-background bg-muted text-xs font-semibold text-foreground"
          >
            {s}
          </div>
        ))}
        <div className="grid size-10 place-items-center rounded-full border-2 border-background bg-primary text-xs font-semibold text-primary-foreground">
          +5
        </div>
      </div>
    ),
  },
  {
    id: "avatar-initials",
    name: "Initials fallback",
    category: "avatars",
    description: "A fallback avatar that derives initials and a stable color from a name.",
    tags: [],
    code: `@Composable
fun InitialsAvatar(name: String) {
    val palette = listOf(
        Color(0xFF6366F1), Color(0xFF0EA5E9), Color(0xFF10B981),
        Color(0xFFF59E0B), Color(0xFFEF4444), Color(0xFFEC4899),
    )
    val color = remember(name) {
        palette[name.hashCode().absoluteValue % palette.size]
    }
    val initials = remember(name) {
        name.trim().split(" ")
            .mapNotNull { it.firstOrNull()?.uppercase() }
            .take(2)
            .joinToString("")
    }
    Box(
        Modifier.size(48.dp).clip(CircleShape).background(color),
        contentAlignment = Alignment.Center,
    ) {
        Text(initials, color = Color.White, style = MaterialTheme.typography.titleSmall)
    }
}`,
    preview: (
      <div className="flex gap-2">
        <div className="grid size-10 place-items-center rounded-full bg-indigo-500 text-xs font-semibold text-white">
          DK
        </div>
        <div className="grid size-10 place-items-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
          RP
        </div>
        <div className="grid size-10 place-items-center rounded-full bg-sky-500 text-xs font-semibold text-white">
          MN
        </div>
      </div>
    ),
  },
  {
    id: "avatar-live-pulse",
    name: "Live pulse",
    category: "avatars",
    description: "An avatar with concentric pulse rings that signal a live or broadcasting state.",
    tags: ["animated"],
    code: `@Composable
fun LivePulseAvatar(initials: String) {
    val accent = Color(0xFFE11D48)
    val transition = rememberInfiniteTransition(label = "pulse")
    val scale by transition.animateFloat(
        initialValue = 1f,
        targetValue = 1.7f,
        animationSpec = infiniteRepeatable(tween(1400), RepeatMode.Restart),
        label = "scale",
    )
    val alpha by transition.animateFloat(
        initialValue = 0.5f,
        targetValue = 0f,
        animationSpec = infiniteRepeatable(tween(1400), RepeatMode.Restart),
        label = "alpha",
    )
    Box(contentAlignment = Alignment.Center) {
        Box(
            Modifier
                .size(48.dp)
                .graphicsLayer {
                    scaleX = scale; scaleY = scale; this.alpha = alpha
                }
                .clip(CircleShape)
                .background(accent),
        )
        Box(
            Modifier.size(48.dp).clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(initials, style = MaterialTheme.typography.titleSmall)
        }
    }
}`,
    preview: (
      <div className="relative grid place-items-center">
        <span className="absolute size-12 animate-ping rounded-full bg-rose-500/40" />
        <div className="relative grid size-12 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
          AV
        </div>
      </div>
    ),
  },
  {
    id: "avatar-progress-ring",
    name: "Progress ring",
    category: "avatars",
    description: "An avatar framed by a circular arc that tracks profile completion progress.",
    tags: ["animated"],
    code: `@Composable
fun ProgressRingAvatar(initials: String, progress: Float) {
    val accent = Color(0xFF10B981)
    val track = MaterialTheme.colorScheme.surfaceVariant
    val animated by animateFloatAsState(progress, tween(900), label = "ring")
    Box(contentAlignment = Alignment.Center, modifier = Modifier.size(60.dp)) {
        Canvas(Modifier.fillMaxSize()) {
            val stroke = 5.dp.toPx()
            drawArc(
                color = track, startAngle = 0f, sweepAngle = 360f,
                useCenter = false, style = Stroke(stroke, cap = StrokeCap.Round),
            )
            drawArc(
                color = accent, startAngle = -90f, sweepAngle = 360f * animated,
                useCenter = false, style = Stroke(stroke, cap = StrokeCap.Round),
            )
        }
        Box(
            Modifier.size(44.dp).clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(initials, style = MaterialTheme.typography.titleSmall)
        }
    }
}`,
    preview: (
      <div className="relative grid size-[60px] place-items-center">
        <svg viewBox="0 0 60 60" className="absolute size-full -rotate-90">
          <circle cx="30" cy="30" r="27" fill="none" strokeWidth="5" className="stroke-muted" />
          <circle
            cx="30"
            cy="30"
            r="27"
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="170"
            strokeDashoffset="55"
            className="stroke-emerald-500"
          />
        </svg>
        <div className="grid size-11 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
          NP
        </div>
      </div>
    ),
  },
  {
    id: "avatar-verified",
    name: "Verified notch",
    category: "avatars",
    description: "An avatar with a cut-out notch cradling a verified check badge.",
    tags: [],
    code: `@Composable
fun VerifiedAvatar(initials: String) {
    val badge = Color(0xFF3B82F6)
    val bg = MaterialTheme.colorScheme.background
    Box(Modifier.size(52.dp)) {
        Box(
            Modifier.fillMaxSize().clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(initials, style = MaterialTheme.typography.titleSmall)
        }
        Box(
            Modifier.align(Alignment.BottomEnd).size(20.dp)
                .clip(CircleShape).background(bg).padding(2.dp)
                .clip(CircleShape).background(badge),
            contentAlignment = Alignment.Center,
        ) {
            Icon(
                Icons.Filled.Check, contentDescription = "Verified",
                tint = Color.White, modifier = Modifier.size(12.dp),
            )
        }
    }
}`,
    preview: (
      <div className="relative">
        <div className="grid size-12 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
          EV
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 grid size-5 place-items-center rounded-full border-2 border-background bg-blue-500 text-white">
          <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
    ),
  },
  {
    id: "avatar-squircle",
    name: "Squircle monogram",
    category: "avatars",
    description: "A Material-You squircle avatar with a monogram on a stable derived tint.",
    tags: [],
    code: `@Composable
fun SquircleAvatar(name: String) {
    val palette = listOf(
        Color(0xFF6366F1), Color(0xFF0EA5E9),
        Color(0xFF10B981), Color(0xFFF59E0B),
    )
    val tint = remember(name) {
        palette[name.hashCode().absoluteValue % palette.size]
    }
    val initials = remember(name) {
        name.split(" ").mapNotNull { it.firstOrNull() }
            .take(2).joinToString("").uppercase()
    }
    Box(
        Modifier.size(52.dp)
            .clip(RoundedCornerShape(percent = 38))
            .background(tint.copy(alpha = 0.18f)),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            initials, color = tint,
            style = MaterialTheme.typography.titleMedium,
            fontWeight = FontWeight.Bold,
        )
    }
}`,
    preview: (
      <div className="flex gap-2">
        <div className="grid size-12 place-items-center rounded-[38%] bg-indigo-500/20 text-sm font-bold text-indigo-500">JW</div>
        <div className="grid size-12 place-items-center rounded-[38%] bg-emerald-500/20 text-sm font-bold text-emerald-600 dark:text-emerald-400">RA</div>
      </div>
    ),
  },
  {
    id: "avatar-count-badge",
    name: "Count badge",
    category: "avatars",
    description: "An avatar with an unread count badge that clamps large values to 9 plus.",
    tags: [],
    code: `@Composable
fun CountAvatar(initials: String, count: Int) {
    val badge = Color(0xFFEF4444)
    Box(Modifier.size(48.dp)) {
        Box(
            Modifier.fillMaxSize().clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(initials, style = MaterialTheme.typography.titleSmall)
        }
        if (count > 0) {
            Box(
                Modifier.align(Alignment.TopEnd)
                    .defaultMinSize(18.dp, 18.dp)
                    .clip(CircleShape).background(MaterialTheme.colorScheme.background)
                    .padding(2.dp).clip(CircleShape).background(badge)
                    .padding(horizontal = 5.dp),
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    if (count > 9) "9+" else "$count",
                    color = Color.White,
                    style = MaterialTheme.typography.labelSmall,
                )
            }
        }
    }
}`,
    preview: (
      <div className="relative">
        <div className="grid size-12 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
          TS
        </div>
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full border-2 border-background bg-red-500 px-1 text-[10px] font-bold text-white">
          9+
        </span>
      </div>
    ),
  },
  {
    id: "avatar-live-sweep",
    name: "Live sweep",
    category: "avatars",
    description: "An avatar in a slowly rotating conic gradient ring for an active broadcast.",
    tags: ["animated"],
    code: `@Composable
fun LiveSweepAvatar(initials: String) {
    val rotation by rememberInfiniteTransition(label = "sweep")
        .animateFloat(
            initialValue = 0f, targetValue = 360f,
            animationSpec = infiniteRepeatable(tween(2600, easing = LinearEasing)),
            label = "rot",
        )
    val sweep = Brush.sweepGradient(
        listOf(Color(0xFFF59E0B), Color(0xFFE11D48), Color(0xFF8B5CF6), Color(0xFFF59E0B)),
    )
    val bg = MaterialTheme.colorScheme.background
    Box(
        Modifier.size(60.dp).graphicsLayer { rotationZ = rotation }
            .clip(CircleShape).background(sweep),
        contentAlignment = Alignment.Center,
    ) {
        Box(
            Modifier.size(54.dp).graphicsLayer { rotationZ = -rotation }
                .clip(CircleShape).background(bg).padding(3.dp)
                .clip(CircleShape).background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(initials, style = MaterialTheme.typography.titleMedium)
        }
    }
}`,
    preview: (
      <div className="grid size-[60px] place-items-center rounded-full bg-[conic-gradient(from_0deg,#f59e0b,#e11d48,#8b5cf6,#f59e0b)] p-[3px] [animation:spin_2.6s_linear_infinite]">
        <div className="grid size-full place-items-center rounded-full bg-background p-0.5">
          <div className="grid size-full place-items-center rounded-full bg-muted text-sm font-semibold text-foreground">
            ON
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "avatar-image-fallback",
    name: "Image with fallback",
    category: "avatars",
    description: "A photo avatar that crossfades to initials when the image fails to load.",
    tags: ["animated"],
    code: `@Composable
fun PhotoAvatar(url: String?, initials: String) {
    var loaded by remember { mutableStateOf(false) }
    Box(
        Modifier.size(48.dp).clip(CircleShape)
            .background(MaterialTheme.colorScheme.surfaceVariant),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            initials,
            style = MaterialTheme.typography.titleSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        AsyncImage(
            model = url,
            contentDescription = null,
            contentScale = ContentScale.Crop,
            onSuccess = { loaded = true },
            modifier = Modifier
                .matchParentSize()
                .clip(CircleShape)
                .graphicsLayer { alpha = if (loaded) 1f else 0f },
        )
    }
}`,
    preview: (
      <div className="flex gap-2">
        <div className="size-12 overflow-hidden rounded-full bg-gradient-to-br from-stone-300 to-stone-500 dark:from-stone-600 dark:to-stone-800" />
        <div className="grid size-12 place-items-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
          MB
        </div>
      </div>
    ),
  },
  {
    id: "avatar-tap-scale",
    name: "Press scale",
    category: "avatars",
    description: "An avatar that springs down on press for tactile selection feedback.",
    tags: ["animated"],
    code: `@Composable
fun PressAvatar(initials: String, onClick: () -> Unit) {
    val interaction = remember { MutableInteractionSource() }
    val pressed by interaction.collectIsPressedAsState()
    val scale by animateFloatAsState(
        if (pressed) 0.9f else 1f,
        spring(dampingRatio = Spring.DampingRatioMediumBouncy),
        label = "press",
    )
    Box(
        Modifier
            .size(48.dp)
            .graphicsLayer { scaleX = scale; scaleY = scale }
            .clip(CircleShape)
            .background(MaterialTheme.colorScheme.surfaceVariant)
            .clickable(interaction, indication = null, onClick = onClick),
        contentAlignment = Alignment.Center,
    ) {
        Text(initials, style = MaterialTheme.typography.titleSmall)
    }
}`,
    preview: (
      <div className="grid size-12 place-items-center rounded-full bg-muted text-sm font-semibold text-foreground transition-transform duration-200 hover:scale-90">
        PR
      </div>
    ),
  },
];
