import { Check, ChevronDown, ChevronLeft, ChevronRight, ListFilter, Search, X } from "lucide-react";
import type { Variant } from "./types";

export const selects: Variant[] = [
  {
    id: "select-dropdown",
    name: "Dropdown select",
    category: "selects",
    description: "A read-only field that opens a Material 3 exposed dropdown menu.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CountrySelect(options: List<String>) {
    var expanded by remember { mutableStateOf(false) }
    var selected by remember { mutableStateOf(options.first()) }
    ExposedDropdownMenuBox(
        expanded = expanded,
        onExpandedChange = { expanded = it },
    ) {
        OutlinedTextField(
            value = selected,
            onValueChange = {},
            readOnly = true,
            label = { Text("Country") },
            trailingIcon = {
                ExposedDropdownMenuDefaults.TrailingIcon(expanded = expanded)
            },
            modifier = Modifier.menuAnchor().fillMaxWidth(),
        )
        ExposedDropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
        ) {
            options.forEach { option ->
                DropdownMenuItem(
                    text = { Text(option) },
                    onClick = {
                        selected = option
                        expanded = false
                    },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-52">
        <div className="flex items-center justify-between rounded-lg border bg-card px-3 py-2.5">
          <div>
            <p className="text-[10px] text-muted-foreground">Country</p>
            <p className="text-sm font-medium text-foreground">United States</p>
          </div>
          <ChevronDown className="size-4 text-muted-foreground" />
        </div>
      </div>
    ),
  },
  {
    id: "select-combobox",
    name: "Combobox",
    category: "selects",
    description: "A text field that filters its dropdown options as you type.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Combobox(all: List<String>) {
    var query by remember { mutableStateOf("") }
    var expanded by remember { mutableStateOf(false) }
    val matches = remember(query) {
        all.filter { it.contains(query, ignoreCase = true) }
    }
    ExposedDropdownMenuBox(
        expanded = expanded,
        onExpandedChange = { expanded = it },
    ) {
        OutlinedTextField(
            value = query,
            onValueChange = { query = it; expanded = true },
            label = { Text("Search fruit") },
            modifier = Modifier.menuAnchor().fillMaxWidth(),
        )
        ExposedDropdownMenu(
            expanded = expanded && matches.isNotEmpty(),
            onDismissRequest = { expanded = false },
        ) {
            matches.forEach { item ->
                DropdownMenuItem(
                    text = { Text(item) },
                    onClick = { query = item; expanded = false },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-52 text-left">
        <div className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2">
          <Search className="size-3.5 text-muted-foreground" />
          <span className="text-sm text-foreground">ap</span>
        </div>
        <div className="mt-1 overflow-hidden rounded-lg border bg-popover">
          <div className="bg-accent px-3 py-1.5 text-xs text-foreground">Apple</div>
          <div className="px-3 py-1.5 text-xs text-muted-foreground">Apricot</div>
        </div>
      </div>
    ),
  },
  {
    id: "select-segmented",
    name: "Segmented control",
    category: "selects",
    description: "A single-choice segmented button row with a sliding selected segment.",
    tags: ["animated"],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SegmentedSelect() {
    val options = listOf("Day", "Week", "Month")
    var selected by remember { mutableStateOf(1) }
    SingleChoiceSegmentedButtonRow {
        options.forEachIndexed { i, label ->
            SegmentedButton(
                selected = i == selected,
                onClick = { selected = i },
                shape = SegmentedButtonDefaults.itemShape(i, options.size),
            ) { Text(label) }
        }
    }
}`,
    preview: (
      <div className="flex w-52 rounded-full border bg-card p-1 text-xs font-medium">
        <span className="flex-1 rounded-full py-1.5 text-center text-muted-foreground">Day</span>
        <span className="flex-1 rounded-full bg-secondary py-1.5 text-center text-secondary-foreground">Week</span>
        <span className="flex-1 rounded-full py-1.5 text-center text-muted-foreground">Month</span>
      </div>
    ),
  },
  {
    id: "select-bottom-sheet",
    name: "Bottom sheet picker",
    category: "selects",
    description: "A field that opens a modal bottom sheet listing options with a checked state.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SheetSelect(options: List<String>) {
    var open by remember { mutableStateOf(false) }
    var selected by remember { mutableStateOf(options.first()) }
    OutlinedTextField(
        value = selected, onValueChange = {}, readOnly = true,
        label = { Text("Category") },
        trailingIcon = { Icon(Icons.Filled.ExpandMore, null) },
        modifier = Modifier.fillMaxWidth().clickable { open = true },
    )
    if (open) {
        ModalBottomSheet(onDismissRequest = { open = false }) {
            options.forEach { o ->
                ListItem(
                    headlineContent = { Text(o) },
                    trailingContent = {
                        if (o == selected) Icon(Icons.Filled.Check, null,
                            tint = MaterialTheme.colorScheme.primary)
                    },
                    modifier = Modifier.clickable { selected = o; open = false },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-52 overflow-hidden rounded-t-2xl border bg-card">
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-muted-foreground/30" />
        <p className="px-4 pb-2 pt-3 text-xs font-semibold text-foreground">Category</p>
        <div className="flex items-center justify-between bg-accent/50 px-4 py-2 text-xs text-foreground">
          Design <Check className="size-4 text-primary" />
        </div>
        <div className="px-4 py-2 text-xs text-muted-foreground">Engineering</div>
        <div className="px-4 py-2 text-xs text-muted-foreground">Marketing</div>
      </div>
    ),
  },
  {
    id: "select-color-swatch",
    name: "Color swatch",
    category: "selects",
    description: "A row of color swatches that ring the active choice when selected.",
    tags: ["animated"],
    code: `@Composable
fun ColorSwatchSelect() {
    val colors = listOf(
        Color(0xFFEF4444), Color(0xFFF59E0B), Color(0xFF10B981),
        Color(0xFF3B82F6), Color(0xFF8B5CF6),
    )
    var selected by remember { mutableStateOf(3) }
    Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
        colors.forEachIndexed { i, c ->
            val ringWidth by animateDpAsState(
                if (i == selected) 2.dp else 0.dp, label = "ring",
            )
            Box(
                Modifier.size(32.dp)
                    .border(ringWidth, c, CircleShape)
                    .padding(4.dp)
                    .clip(CircleShape)
                    .background(c)
                    .clickable { selected = i },
            )
        }
    }
}`,
    preview: (
      <div className="flex gap-3">
        {["bg-red-500", "bg-amber-500", "bg-emerald-500", "bg-blue-500", "bg-violet-500"].map((c, i) => (
          <span key={c} className={`grid size-8 place-items-center rounded-full ${i === 3 ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-background" : ""}`}>
            <span className={`size-6 rounded-full ${c}`} />
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "select-size-grid",
    name: "Size grid",
    category: "selects",
    description: "A row of size tiles for a single choice with a disabled sold-out option.",
    tags: [],
    code: `@Composable
fun SizeSelect() {
    val sizes = listOf("XS", "S", "M", "L", "XL")
    val soldOut = setOf("XS")
    var selected by remember { mutableStateOf("M") }
    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        sizes.forEach { s ->
            val out = s in soldOut
            val on = s == selected
            Surface(
                onClick = { if (!out) selected = s },
                enabled = !out,
                shape = MaterialTheme.shapes.medium,
                color = if (on) MaterialTheme.colorScheme.primary
                    else MaterialTheme.colorScheme.surface,
                border = BorderStroke(1.dp,
                    if (on) MaterialTheme.colorScheme.primary
                    else MaterialTheme.colorScheme.outlineVariant),
            ) {
                Text(
                    s, Modifier.padding(horizontal = 14.dp, vertical = 10.dp),
                    color = when {
                        on -> MaterialTheme.colorScheme.onPrimary
                        out -> MaterialTheme.colorScheme.outline
                        else -> MaterialTheme.colorScheme.onSurface
                    },
                    style = MaterialTheme.typography.labelLarge,
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex gap-2 text-xs font-semibold">
        <span className="rounded-lg border px-3 py-2 text-muted-foreground/40 line-through">XS</span>
        <span className="rounded-lg border px-3 py-2 text-foreground">S</span>
        <span className="rounded-lg border border-primary bg-primary px-3 py-2 text-primary-foreground">M</span>
        <span className="rounded-lg border px-3 py-2 text-foreground">L</span>
        <span className="rounded-lg border px-3 py-2 text-foreground">XL</span>
      </div>
    ),
  },
  {
    id: "select-sort-menu",
    name: "Sort menu",
    category: "selects",
    description: "A compact sort control that drops a small menu of ordering options.",
    tags: [],
    code: `@Composable
fun SortMenu(options: List<String>) {
    var open by remember { mutableStateOf(false) }
    var selected by remember { mutableStateOf(options.first()) }
    Box {
        TextButton(onClick = { open = true }) {
            Icon(Icons.AutoMirrored.Filled.Sort, null, Modifier.size(16.dp))
            Spacer(Modifier.width(6.dp))
            Text("Sort: $selected")
            Icon(Icons.Filled.ExpandMore, null, Modifier.size(16.dp))
        }
        DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
            options.forEach { o ->
                DropdownMenuItem(
                    text = { Text(o) },
                    trailingIcon = {
                        if (o == selected) Icon(Icons.Filled.Check, null)
                    },
                    onClick = { selected = o; open = false },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-44 text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
          <ListFilter className="size-3.5" /> Sort: Newest <ChevronDown className="size-3.5" />
        </div>
        <div className="mt-1.5 overflow-hidden rounded-lg border bg-popover text-xs">
          <div className="flex items-center justify-between bg-accent/50 px-3 py-1.5 text-foreground">Newest <Check className="size-3.5 text-primary" /></div>
          <div className="px-3 py-1.5 text-muted-foreground">Oldest</div>
          <div className="px-3 py-1.5 text-muted-foreground">Top rated</div>
        </div>
      </div>
    ),
  },
  {
    id: "select-tag-input",
    name: "Tag input",
    category: "selects",
    description: "An input that collects typed values as removable chips inside the field.",
    tags: [],
    code: `@OptIn(ExperimentalLayoutApi::class)
@Composable
fun TagInput() {
    val tags = remember { mutableStateListOf("kotlin", "compose") }
    var draft by remember { mutableStateOf("") }
    OutlinedCard {
        FlowRow(
            Modifier.padding(8.dp),
            horizontalArrangement = Arrangement.spacedBy(6.dp),
        ) {
            tags.forEach { t ->
                InputChip(
                    selected = false,
                    onClick = { tags.remove(t) },
                    label = { Text(t) },
                    trailingIcon = { Icon(Icons.Filled.Close, null,
                        Modifier.size(16.dp)) },
                )
            }
            BasicTextField(
                value = draft,
                onValueChange = { draft = it },
                modifier = Modifier.widthIn(min = 60.dp).padding(8.dp),
            )
        }
    }
}`,
    preview: (
      <div className="flex w-52 flex-wrap items-center gap-1.5 rounded-lg border bg-card p-2">
        {["kotlin", "compose"].map((t) => (
          <span key={t} className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground">
            {t} <X className="size-3" />
          </span>
        ))}
        <span className="px-1 text-[11px] text-muted-foreground">type…</span>
      </div>
    ),
  },
  {
    id: "select-stepper",
    name: "Cycle select",
    category: "selects",
    description: "A labelled value flanked by arrows that cycle through options in place.",
    tags: [],
    code: `@Composable
fun CycleSelect(options: List<String>) {
    var index by remember { mutableStateOf(0) }
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        IconButton(onClick = {
            index = (index - 1 + options.size) % options.size
        }) { Icon(Icons.Filled.ChevronLeft, "Previous") }
        Text(
            options[index],
            Modifier.weight(1f),
            textAlign = TextAlign.Center,
            style = MaterialTheme.typography.titleMedium,
        )
        IconButton(onClick = {
            index = (index + 1) % options.size
        }) { Icon(Icons.Filled.ChevronRight, "Next") }
    }
}`,
    preview: (
      <div className="flex w-52 items-center justify-between rounded-lg border bg-card px-2 py-1.5">
        <ChevronLeft className="size-4 text-muted-foreground" />
        <span className="text-sm font-semibold text-foreground">Economy</span>
        <ChevronRight className="size-4 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "select-radio-list",
    name: "Radio list",
    category: "selects",
    description: "A grouped card of radio rows where the whole row is the tap target.",
    tags: [],
    code: `@Composable
fun RadioListSelect(options: List<String>) {
    var selected by remember { mutableStateOf(options.first()) }
    OutlinedCard {
        Column {
            options.forEach { o ->
                Row(
                    Modifier.fillMaxWidth()
                        .selectable(selected = o == selected,
                            onClick = { selected = o })
                        .padding(horizontal = 12.dp, vertical = 8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    RadioButton(selected = o == selected, onClick = null)
                    Spacer(Modifier.width(8.dp))
                    Text(o, style = MaterialTheme.typography.bodyMedium)
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 divide-y overflow-hidden rounded-xl border bg-card text-xs text-foreground">
        {[["Standard", true], ["Express", false], ["Overnight", false]].map(([l, on]) => (
          <div key={l as string} className="flex items-center gap-2.5 px-3 py-2.5">
            <span className={`grid size-4 place-items-center rounded-full border-2 ${on ? "border-primary" : "border-muted-foreground/40"}`}>
              {on ? <span className="size-2 rounded-full bg-primary" /> : null}
            </span>
            {l as string}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "select-assignee",
    name: "Assignee select",
    category: "selects",
    description: "A menu that picks a person, showing avatars and the current assignee inline.",
    tags: [],
    code: `@Composable
fun AssigneeSelect(people: List<String>) {
    var open by remember { mutableStateOf(false) }
    var assignee by remember { mutableStateOf(people.first()) }
    Box {
        AssistChip(
            onClick = { open = true },
            label = { Text(assignee) },
            leadingIcon = {
                Surface(shape = CircleShape, color = Color(0xFF6366F1),
                    modifier = Modifier.size(20.dp)) {}
            },
        )
        DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
            people.forEach { p ->
                DropdownMenuItem(
                    text = { Text(p) },
                    leadingIcon = {
                        Surface(shape = CircleShape,
                            color = MaterialTheme.colorScheme.secondaryContainer,
                            modifier = Modifier.size(24.dp)) {}
                    },
                    onClick = { assignee = p; open = false },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-44 text-left">
        <div className="inline-flex items-center gap-1.5 rounded-full border bg-card px-2 py-1 text-xs font-medium text-foreground">
          <span className="size-5 rounded-full bg-indigo-500" /> Priya A. <ChevronDown className="size-3.5 text-muted-foreground" />
        </div>
        <div className="mt-1.5 overflow-hidden rounded-lg border bg-popover text-xs">
          {["Mara Q.", "Diego K."].map((p) => (
            <div key={p} className="flex items-center gap-2 px-3 py-1.5 text-muted-foreground">
              <span className="size-5 rounded-full bg-muted" /> {p}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];
