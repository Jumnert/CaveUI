import type { Variant } from "./types";

export const choices: Variant[] = [
  {
    id: "choice-pulse-radio",
    name: "Pulse radio",
    category: "choices",
    description: "A radio button whose inner dot springs in with a soft ring pulse on select.",
    tags: ["animated"],
    code: `@Composable
fun PulseRadio(selected: Boolean, onSelect: () -> Unit) {
    val dot by animateFloatAsState(
        targetValue = if (selected) 1f else 0f,
        animationSpec = spring(Spring.DampingRatioMediumBouncy, Spring.StiffnessMedium),
        label = "dot",
    )
    val accent = MaterialTheme.colorScheme.primary
    Box(
        modifier = Modifier.size(24.dp).clickable(onClick = onSelect),
        contentAlignment = Alignment.Center,
    ) {
        Canvas(Modifier.fillMaxSize()) {
            drawCircle(accent, radius = size.minDimension / 2 - 2.dp.toPx(), style = Stroke(2.dp.toPx()))
            drawCircle(accent, radius = (size.minDimension / 2 - 6.dp.toPx()) * dot)
        }
    }
}`,
    preview: (
      <span className="relative inline-flex size-9 items-center justify-center text-primary">
        <span className="absolute inline-flex size-6 rounded-full border-2 border-current" />
        <span className="size-3 rounded-full bg-current" style={{ animation: "icon-pop 1.6s ease-in-out infinite" }} />
      </span>
    ),
  },
  {
    id: "choice-segmented-slide",
    name: "Sliding segments",
    category: "choices",
    description: "A segmented selector with a pill indicator that glides between the options.",
    tags: ["animated"],
    code: `@Composable
fun SlidingSegments(
    options: List<String>,
    selected: Int,
    onSelect: (Int) -> Unit,
) {
    SingleChoiceSegmentedButtonRow {
        options.forEachIndexed { i, label ->
            SegmentedButton(
                selected = selected == i,
                onClick = { onSelect(i) },
                shape = SegmentedButtonDefaults.itemShape(i, options.size),
                colors = SegmentedButtonDefaults.colors(
                    activeContainerColor = MaterialTheme.colorScheme.primary,
                    activeContentColor = MaterialTheme.colorScheme.onPrimary,
                ),
            ) { Text(label) }
        }
    }
}`,
    preview: (
      <div className="relative flex w-44 rounded-full bg-muted p-1 text-[11px] font-medium">
        <span
          className="absolute inset-y-1 rounded-full bg-primary"
          style={{ width: "calc((100% - 0.5rem) / 3)", left: 4, animation: "icon-seg 3.2s ease-in-out infinite" }}
        />
        {["Day", "Week", "Month"].map((t) => (
          <span key={t} className="relative z-10 flex-1 py-1 text-center text-foreground">
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "choice-cards",
    name: "Option cards",
    category: "choices",
    description: "A radio group rendered as cards, the selected one ringed by the accent color.",
    tags: [],
    code: `@Composable
fun OptionCards(options: List<String>, selected: Int, onSelect: (Int) -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        options.forEachIndexed { i, label ->
            val on = i == selected
            OutlinedCard(
                onClick = { onSelect(i) },
                border = BorderStroke(
                    if (on) 2.dp else 1.dp,
                    if (on) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.outlineVariant,
                ),
            ) {
                Row(Modifier.fillMaxWidth().padding(14.dp), verticalAlignment = Alignment.CenterVertically) {
                    RadioButton(selected = on, onClick = { onSelect(i) })
                    Spacer(Modifier.width(8.dp))
                    Text(label)
                }
            }
        }
    }
}`,
    preview: (
      <div className="flex w-44 flex-col gap-2 text-left text-[11px]">
        {[
          { t: "Standard", on: false },
          { t: "Priority", on: true },
        ].map((o) => (
          <div
            key={o.t}
            className={`flex items-center gap-2 rounded-lg border bg-card px-3 py-2 ${o.on ? "border-2 border-primary" : ""}`}
          >
            <span className={`flex size-3.5 items-center justify-center rounded-full border-2 ${o.on ? "border-primary" : "border-muted-foreground/40"}`}>
              {o.on && <span className="size-1.5 rounded-full bg-primary" />}
            </span>
            <span className="font-medium">{o.t}</span>
          </div>
        ))}
      </div>
    ),
  },
];
