import { Minus, Plus, Star, Sun, Volume2 } from "lucide-react";
import type { Variant } from "./types";

export const sliders: Variant[] = [
  {
    id: "slider-bubble",
    name: "Label bubble",
    category: "sliders",
    description: "A value slider with a label bubble that tracks the thumb.",
    tags: ["animated"],
    code: `@Composable
fun BubbleSlider() {
    var value by remember { mutableStateOf(0.4f) }
    Column {
        Box(Modifier.fillMaxWidth()) {
            val pct = (value * 100).roundToInt()
            Surface(
                color = MaterialTheme.colorScheme.primary,
                contentColor = MaterialTheme.colorScheme.onPrimary,
                shape = MaterialTheme.shapes.small,
                modifier = Modifier
                    .align(BiasAlignment(value * 2 - 1, 0f))
                    .padding(bottom = 4.dp),
            ) {
                Text(
                    "$pct%",
                    Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
                    style = MaterialTheme.typography.labelMedium,
                )
            }
        }
        Slider(value = value, onValueChange = { value = it })
    }
}`,
    preview: (
      <div className="w-52">
        <div className="relative mb-2 h-5">
          <span className="absolute left-[40%] -translate-x-1/2 rounded bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
            40%
          </span>
        </div>
        <div className="relative h-1.5 rounded-full bg-muted">
          <div className="absolute inset-y-0 left-0 w-[40%] rounded-full bg-primary" />
          <div className="absolute left-[40%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background" />
        </div>
      </div>
    ),
  },
  {
    id: "slider-range",
    name: "Range slider",
    category: "sliders",
    description: "A two-thumb range slider for choosing a minimum and maximum.",
    tags: [],
    code: `@Composable
fun PriceRange() {
    var range by remember { mutableStateOf(20f..80f) }
    val lo = range.start.roundToInt()
    val hi = range.endInclusive.roundToInt()
    Column {
        Text("Price: $lo to $hi", style = MaterialTheme.typography.titleSmall)
        RangeSlider(
            value = range,
            onValueChange = { range = it },
            valueRange = 0f..100f,
        )
    }
}`,
    preview: (
      <div className="w-52">
        <p className="mb-2 text-xs font-semibold text-foreground">Price: 20 to 80</p>
        <div className="relative h-1.5 rounded-full bg-muted">
          <div className="absolute inset-y-0 left-[20%] right-[20%] rounded-full bg-primary" />
          <div className="absolute left-[20%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background" />
          <div className="absolute left-[80%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background" />
        </div>
      </div>
    ),
  },
  {
    id: "slider-stepper",
    name: "Quantity stepper",
    category: "sliders",
    description: "A compact quantity stepper with tonal increment and decrement buttons.",
    tags: [],
    code: `@Composable
fun Stepper() {
    var count by remember { mutableStateOf(1) }
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        FilledTonalIconButton(
            onClick = { if (count > 0) count-- },
            enabled = count > 0,
        ) {
            Icon(Icons.Filled.Remove, contentDescription = "Decrease")
        }
        Text("$count", style = MaterialTheme.typography.titleMedium)
        FilledTonalIconButton(onClick = { count++ }) {
            Icon(Icons.Filled.Add, contentDescription = "Increase")
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-3">
        <button className="grid size-9 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <Minus className="size-4" />
        </button>
        <span className="w-6 text-center text-lg font-semibold text-foreground">1</span>
        <button className="grid size-9 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <Plus className="size-4" />
        </button>
      </div>
    ),
  },
  {
    id: "slider-equalizer",
    name: "Vertical EQ",
    category: "sliders",
    description: "A row of vertical faders for shaping an audio equalizer by band.",
    tags: [],
    code: `@Composable
fun Equalizer() {
    val bands = remember { mutableStateListOf(0.6f, 0.8f, 0.4f, 0.7f, 0.5f) }
    Row(
        horizontalArrangement = Arrangement.spacedBy(16.dp),
        verticalAlignment = Alignment.Bottom,
    ) {
        bands.forEachIndexed { i, v ->
            Slider(
                value = v,
                onValueChange = { bands[i] = it },
                modifier = Modifier
                    .graphicsLayer { rotationZ = 270f }
                    .width(120.dp),
            )
        }
    }
}`,
    preview: (
      <div className="flex h-28 items-end gap-3">
        {[0.6, 0.85, 0.4, 0.7, 0.5].map((v, i) => (
          <div key={i} className="relative h-full w-1.5 rounded-full bg-muted">
            <div className="absolute inset-x-0 bottom-0 rounded-full bg-primary" style={{ height: `${v * 100}%` }} />
            <div className="absolute left-1/2 size-3.5 -translate-x-1/2 rounded-full border-2 border-primary bg-background" style={{ bottom: `calc(${v * 100}% - 7px)` }} />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "slider-ticked",
    name: "Stepped ticks",
    category: "sliders",
    description: "A discrete slider that snaps across labelled tick stops.",
    tags: [],
    code: `@Composable
fun SteppedSlider() {
    var value by remember { mutableStateOf(2f) }
    Column {
        Slider(
            value = value,
            onValueChange = { value = it },
            valueRange = 0f..4f,
            steps = 3,
        )
        Row(
            Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            listOf("XS", "S", "M", "L", "XL").forEach {
                Text(it, style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
    }
}`,
    preview: (
      <div className="w-52">
        <div className="relative flex h-4 items-center">
          <div className="h-1.5 w-full rounded-full bg-muted">
            <div className="h-full w-1/2 rounded-full bg-primary" />
          </div>
          <div className="absolute inset-x-0 flex justify-between px-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`size-1.5 rounded-full ${i <= 2 ? "bg-primary-foreground" : "bg-foreground/30"}`} />
            ))}
          </div>
          <div className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
          {["XS", "S", "M", "L", "XL"].map((s) => <span key={s}>{s}</span>)}
        </div>
      </div>
    ),
  },
  {
    id: "slider-temperature",
    name: "Temperature",
    category: "sliders",
    description: "A thermostat slider whose track runs from cool blue to warm amber.",
    tags: [],
    code: `@Composable
fun TemperatureSlider() {
    var value by remember { mutableStateOf(0.55f) }
    val track = Brush.horizontalGradient(
        listOf(Color(0xFF38BDF8), Color(0xFFA3E635), Color(0xFFF59E0B)),
    )
    Column {
        Text("\${(16 + value * 14).roundToInt()}\u00B0C",
            style = MaterialTheme.typography.titleMedium)
        Box(Modifier.fillMaxWidth().padding(top = 8.dp)) {
            Box(Modifier.fillMaxWidth().height(6.dp)
                .clip(CircleShape).background(track))
            Slider(
                value = value,
                onValueChange = { value = it },
                colors = SliderDefaults.colors(
                    activeTrackColor = Color.Transparent,
                    inactiveTrackColor = Color.Transparent,
                ),
            )
        }
    }
}`,
    preview: (
      <div className="w-52">
        <p className="text-sm font-semibold text-foreground">23°C</p>
        <div className="relative mt-2 h-1.5 rounded-full bg-gradient-to-r from-sky-400 via-lime-400 to-amber-500">
          <div className="absolute left-[55%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-500 bg-background" />
        </div>
      </div>
    ),
  },
  {
    id: "slider-dial",
    name: "Rotary dial",
    category: "sliders",
    description: "A draggable circular dial that fills an arc as the value turns.",
    tags: ["animated"],
    code: `@Composable
fun RotaryDial() {
    var angle by remember { mutableStateOf(220f) }
    val accent = Color(0xFF8B5CF6)
    Box(
        Modifier.size(120.dp).pointerInput(Unit) {
            detectDragGestures { change, _ ->
                val center = Offset(size.width / 2f, size.height / 2f)
                val a = atan2(change.position.y - center.y,
                    change.position.x - center.x)
                angle = ((Math.toDegrees(a.toDouble()) + 90 + 360) % 360).toFloat()
            }
        },
        contentAlignment = Alignment.Center,
    ) {
        Canvas(Modifier.fillMaxSize()) {
            val stroke = 10.dp.toPx()
            drawArc(Color.LightGray.copy(alpha = 0.3f), 130f, 280f, false,
                style = Stroke(stroke, cap = StrokeCap.Round))
            drawArc(accent, 130f, 280f * (angle / 360f), false,
                style = Stroke(stroke, cap = StrokeCap.Round))
        }
        Text("\${(angle / 360f * 100).roundToInt()}",
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.Bold)
    }
}`,
    preview: (
      <div className="relative grid size-28 place-items-center">
        <svg viewBox="0 0 120 120" className="absolute size-full">
          <path d="M 25 95 A 45 45 0 1 1 95 95" fill="none" strokeWidth="10" strokeLinecap="round" className="stroke-muted" />
          <path d="M 25 95 A 45 45 0 0 1 92 40" fill="none" strokeWidth="10" strokeLinecap="round" className="stroke-violet-500" />
        </svg>
        <span className="text-xl font-bold text-foreground">61</span>
      </div>
    ),
  },
  {
    id: "slider-rating",
    name: "Rating drag",
    category: "sliders",
    description: "A star strip you drag across to set a half-step rating value.",
    tags: ["animated"],
    code: `@Composable
fun RatingSlider() {
    var rating by remember { mutableStateOf(3.5f) }
    Column {
        Row(
            Modifier.pointerInput(Unit) {
                detectHorizontalDragGestures { change, _ ->
                    val r = (change.position.x / size.width * 5)
                        .coerceIn(0f, 5f)
                    rating = (r * 2).roundToInt() / 2f
                }
            },
        ) {
            repeat(5) { i ->
                val fill = (rating - i).coerceIn(0f, 1f)
                Icon(
                    if (fill >= 1f) Icons.Filled.Star
                    else if (fill > 0f) Icons.AutoMirrored.Filled.StarHalf
                    else Icons.Filled.StarBorder,
                    contentDescription = null,
                    tint = Color(0xFFF59E0B),
                    modifier = Modifier.size(32.dp),
                )
            }
        }
        Text("$rating", style = MaterialTheme.typography.labelMedium)
    }
}`,
    preview: (
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-0.5 text-amber-500">
          {[1, 2, 3].map((i) => <Star key={i} className="size-6 fill-current" />)}
          <Star className="size-6 fill-current [clip-path:inset(0_50%_0_0)]" />
          <Star className="size-6 text-muted-foreground" />
        </div>
        <span className="text-xs font-medium text-muted-foreground">3.5</span>
      </div>
    ),
  },
  {
    id: "slider-compare",
    name: "Before / after",
    category: "sliders",
    description: "A draggable divider that wipes between a before and after image.",
    tags: ["animated"],
    code: `@Composable
fun CompareSlider() {
    var split by remember { mutableStateOf(0.5f) }
    BoxWithConstraints(
        Modifier.fillMaxWidth().height(120.dp)
            .clip(MaterialTheme.shapes.medium),
    ) {
        val w = constraints.maxWidth.toFloat()
        Box(Modifier.fillMaxSize().background(Color(0xFF334155)))
        Box(
            Modifier.fillMaxHeight()
                .width(with(LocalDensity.current) { (w * split).toDp() })
                .background(Color(0xFFF59E0B)),
        )
        Box(
            Modifier.fillMaxHeight().width(3.dp)
                .align(BiasAlignment(split * 2 - 1, 0f))
                .background(Color.White)
                .pointerInput(Unit) {
                    detectHorizontalDragGestures { change, _ ->
                        split = (change.position.x / w).coerceIn(0f, 1f)
                    }
                },
        )
    }
}`,
    preview: (
      <div className="relative h-20 w-52 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-slate-700" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-amber-500" />
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white" />
        <div className="absolute left-1/2 top-1/2 grid size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-background text-foreground">
          <span className="text-[8px]">↔</span>
        </div>
      </div>
    ),
  },
  {
    id: "slider-brightness",
    name: "Brightness",
    category: "sliders",
    description: "A brightness slider with a sun glyph that grows as the value rises.",
    tags: ["animated"],
    code: `@Composable
fun BrightnessSlider() {
    var value by remember { mutableStateOf(0.7f) }
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(
            Icons.Filled.LightMode, contentDescription = null,
            modifier = Modifier.size(16.dp + 14.dp * value),
            tint = Color(0xFFF59E0B),
        )
        Spacer(Modifier.width(12.dp))
        Slider(
            value = value, onValueChange = { value = it },
            colors = SliderDefaults.colors(
                thumbColor = Color(0xFFF59E0B),
                activeTrackColor = Color(0xFFF59E0B),
            ),
            modifier = Modifier.weight(1f),
        )
    }
}`,
    preview: (
      <div className="flex w-52 items-center gap-3">
        <Sun className="size-6 text-amber-500" />
        <div className="relative h-1.5 flex-1 rounded-full bg-muted">
          <div className="absolute inset-y-0 left-0 w-[70%] rounded-full bg-amber-500" />
          <div className="absolute left-[70%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-500 bg-background" />
        </div>
      </div>
    ),
  },
  {
    id: "slider-snap",
    name: "Snap segments",
    category: "sliders",
    description: "A three-stop slider that snaps the thumb between low, medium and high.",
    tags: ["animated"],
    code: `@Composable
fun SnapSlider() {
    val labels = listOf("Low", "Medium", "High")
    var index by remember { mutableStateOf(1) }
    val pos by animateFloatAsState(index / 2f, label = "snap")
    Column {
        Box(Modifier.fillMaxWidth().height(36.dp)) {
            Box(Modifier.fillMaxWidth().height(6.dp)
                .align(Alignment.CenterStart)
                .clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant))
            labels.forEachIndexed { i, _ ->
                Box(
                    Modifier.align(BiasAlignment(i / 2f * 2 - 1, 0f))
                        .size(10.dp).clip(CircleShape)
                        .background(MaterialTheme.colorScheme.outline)
                        .clickable { index = i },
                )
            }
            Box(
                Modifier.align(BiasAlignment(pos * 2 - 1, 0f))
                    .size(22.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primary),
            )
        }
        Text(labels[index], style = MaterialTheme.typography.labelLarge)
    }
}`,
    preview: (
      <div className="w-52">
        <div className="relative flex h-6 items-center">
          <div className="h-1.5 w-full rounded-full bg-muted" />
          <div className="absolute inset-x-0 flex justify-between">
            {[0, 1, 2].map((i) => <span key={i} className="size-2.5 rounded-full bg-foreground/30" />)}
          </div>
          <div className="absolute left-1/2 size-5 -translate-x-1/2 rounded-full bg-primary" />
        </div>
        <p className="mt-1 text-xs font-semibold text-foreground">Medium</p>
      </div>
    ),
  },
];
