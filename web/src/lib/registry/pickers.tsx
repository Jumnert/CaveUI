import { Calendar, Check, ChevronLeft, ChevronRight, Clock, Minus, Plus } from "lucide-react";
import type { Variant } from "./types";

export const pickers: Variant[] = [
  {
    id: "picker-calendar",
    name: "Month calendar",
    category: "pickers",
    description: "A month grid where the selected day fills with the accent color.",
    tags: [],
    code: `@OptIn(ExperimentalLayoutApi::class)
@Composable
fun MonthCalendar(selected: Int) {
    Column(Modifier.padding(12.dp)) {
        Row(
            Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text("June", style = MaterialTheme.typography.titleMedium)
            Row {
                Icon(Icons.Filled.ChevronLeft, "Previous month")
                Spacer(Modifier.width(12.dp))
                Icon(Icons.Filled.ChevronRight, "Next month")
            }
        }
        Spacer(Modifier.height(8.dp))
        FlowRow(maxItemsInEachRow = 7) {
            (1..30).forEach { day ->
                val isSel = day == selected
                Box(
                    Modifier
                        .size(36.dp)
                        .clip(CircleShape)
                        .background(
                            if (isSel) MaterialTheme.colorScheme.primary
                            else Color.Transparent,
                        )
                        .clickable { },
                    contentAlignment = Alignment.Center,
                ) {
                    Text(
                        "$day",
                        color = if (isSel) MaterialTheme.colorScheme.onPrimary
                            else MaterialTheme.colorScheme.onSurface,
                        style = MaterialTheme.typography.bodyMedium,
                    )
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 rounded-xl border bg-card p-3 text-left">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">June</span>
          <div className="flex gap-2 text-muted-foreground">
            <ChevronLeft className="size-4" />
            <ChevronRight className="size-4" />
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i} className="text-muted-foreground">
              {d}
            </span>
          ))}
          {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
            <span
              key={n}
              className={`grid size-6 place-items-center rounded-full ${
                n === 14 ? "bg-primary font-semibold text-primary-foreground" : "text-foreground"
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "picker-date-field",
    name: "Date field",
    category: "pickers",
    description: "A read-only field that opens the Material 3 date picker dialog.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DateField() {
    var show by remember { mutableStateOf(false) }
    val state = rememberDatePickerState()
    OutlinedTextField(
        value = "Jun 14, 2026",
        onValueChange = {},
        readOnly = true,
        label = { Text("Date") },
        trailingIcon = {
            IconButton(onClick = { show = true }) {
                Icon(Icons.Filled.CalendarMonth, contentDescription = "Pick date")
            }
        },
    )
    if (show) {
        DatePickerDialog(
            onDismissRequest = { show = false },
            confirmButton = {
                TextButton(onClick = { show = false }) { Text("OK") }
            },
        ) {
            DatePicker(state = state)
        }
    }
}`,
    preview: (
      <div className="w-52">
        <div className="flex items-center justify-between rounded-lg border bg-card px-3 py-2.5">
          <div>
            <p className="text-[10px] text-muted-foreground">Date</p>
            <p className="text-sm font-medium text-foreground">Jun 14, 2026</p>
          </div>
          <Calendar className="size-4 text-muted-foreground" />
        </div>
      </div>
    ),
  },
  {
    id: "picker-time",
    name: "Time picker",
    category: "pickers",
    description: "A time picker card with the active hour segment highlighted.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TimePickerCard() {
    val state = rememberTimePickerState(initialHour = 9, initialMinute = 30)
    Card {
        Column(
            Modifier.padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text("Set alarm", style = MaterialTheme.typography.titleMedium)
            Spacer(Modifier.height(12.dp))
            TimePicker(state = state)
        }
    }
}`,
    preview: (
      <div className="w-44 rounded-xl border bg-card p-4 text-center">
        <p className="text-xs text-muted-foreground">Set alarm</p>
        <div className="mt-2 flex items-center justify-center gap-1">
          <span className="rounded-lg bg-primary/10 px-3 py-2 text-2xl font-semibold tabular-nums text-primary">
            09
          </span>
          <span className="text-2xl font-semibold text-foreground">:</span>
          <span className="rounded-lg bg-muted px-3 py-2 text-2xl font-semibold tabular-nums text-foreground">
            30
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "picker-wheel",
    name: "Wheel picker",
    category: "pickers",
    description: "A scrolling wheel that centers and emphasizes the selected value behind a fade.",
    tags: ["animated"],
    code: `@Composable
fun WheelPicker(values: List<String>) {
    val state = rememberLazyListState(initialFirstVisibleItemIndex = 1)
    Box(Modifier.height(120.dp), contentAlignment = Alignment.Center) {
        LazyColumn(
            state = state,
            horizontalAlignment = Alignment.CenterHorizontally,
            contentPadding = PaddingValues(vertical = 40.dp),
        ) {
            itemsIndexed(values) { _, v ->
                Text(v, Modifier.height(40.dp).wrapContentHeight(),
                    style = MaterialTheme.typography.titleLarge)
            }
        }
        // selection band
        Box(Modifier.fillMaxWidth().height(40.dp)
            .border(1.dp, MaterialTheme.colorScheme.outlineVariant,
                MaterialTheme.shapes.small))
    }
}`,
    preview: (
      <div className="relative grid h-28 w-24 place-items-center overflow-hidden rounded-xl border bg-card text-center">
        <div className="absolute inset-x-2 top-1/2 h-9 -translate-y-1/2 rounded-lg border" />
        <div className="space-y-1 leading-none">
          <p className="text-sm text-muted-foreground/40">08</p>
          <p className="text-xl font-bold text-foreground">09</p>
          <p className="text-sm text-muted-foreground/40">10</p>
        </div>
      </div>
    ),
  },
  {
    id: "picker-date-range",
    name: "Date range",
    category: "pickers",
    description: "A calendar row that tints the span between a chosen start and end day.",
    tags: [],
    code: `@Composable
fun DateRangeRow(start: Int, end: Int, days: List<Int>) {
    Row {
        days.forEach { d ->
            val inRange = d in start..end
            val isEnd = d == start || d == end
            Box(
                Modifier.weight(1f).height(40.dp)
                    .background(
                        if (inRange && !isEnd)
                            MaterialTheme.colorScheme.primary.copy(alpha = 0.15f)
                        else Color.Transparent,
                    ),
                contentAlignment = Alignment.Center,
            ) {
                Box(
                    Modifier.size(34.dp).clip(CircleShape)
                        .background(if (isEnd) MaterialTheme.colorScheme.primary
                            else Color.Transparent),
                    contentAlignment = Alignment.Center,
                ) {
                    Text("$d", color = if (isEnd)
                        MaterialTheme.colorScheme.onPrimary
                        else MaterialTheme.colorScheme.onSurface,
                        style = MaterialTheme.typography.bodyMedium)
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 rounded-xl border bg-card p-2">
        <div className="flex items-center">
          {[12, 13, 14, 15, 16, 17].map((n) => {
            const inRange = n > 13 && n < 16;
            const isEnd = n === 13 || n === 16;
            return (
              <div key={n} className={`flex flex-1 justify-center py-1 ${inRange ? "bg-primary/15" : ""} ${n === 13 ? "rounded-l-full bg-primary/15" : ""} ${n === 16 ? "rounded-r-full bg-primary/15" : ""}`}>
                <span className={`grid size-7 place-items-center rounded-full text-xs ${isEnd ? "bg-primary font-semibold text-primary-foreground" : "text-foreground"}`}>{n}</span>
              </div>
            );
          })}
        </div>
      </div>
    ),
  },
  {
    id: "picker-duration",
    name: "Duration picker",
    category: "pickers",
    description: "Hour and minute steppers for setting a duration with plus and minus controls.",
    tags: [],
    code: `@Composable
fun DurationPicker() {
    var hours by remember { mutableStateOf(1) }
    var minutes by remember { mutableStateOf(30) }
    Row(horizontalArrangement = Arrangement.spacedBy(24.dp)) {
        listOf("Hours" to hours, "Minutes" to minutes).forEach { (label, value) ->
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                FilledTonalIconButton(onClick = {
                    if (label == "Hours") hours++ else minutes = (minutes + 5) % 60
                }) { Icon(Icons.Filled.KeyboardArrowUp, "Increase") }
                Text("%02d".format(value),
                    style = MaterialTheme.typography.headlineSmall)
                Text(label, style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
                FilledTonalIconButton(onClick = {
                    if (label == "Hours") { if (hours > 0) hours-- }
                    else minutes = (minutes + 55) % 60
                }) { Icon(Icons.Filled.KeyboardArrowDown, "Decrease") }
            }
        }
    }
}`,
    preview: (
      <div className="flex gap-6">
        {[["Hours", "01"], ["Minutes", "30"]].map(([l, v]) => (
          <div key={l} className="flex flex-col items-center gap-1.5">
            <span className="grid size-7 place-items-center rounded-full bg-secondary text-secondary-foreground"><Plus className="size-3.5" /></span>
            <span className="text-2xl font-bold tabular-nums text-foreground">{v}</span>
            <span className="text-[10px] text-muted-foreground">{l}</span>
            <span className="grid size-7 place-items-center rounded-full bg-secondary text-secondary-foreground"><Minus className="size-3.5" /></span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "picker-color",
    name: "Color picker",
    category: "pickers",
    description: "A swatch grid that rings the active color and echoes its hex value.",
    tags: [],
    code: `@Composable
fun ColorPicker() {
    val swatches = listOf(
        Color(0xFFEF4444), Color(0xFFF97316), Color(0xFFF59E0B),
        Color(0xFF22C55E), Color(0xFF06B6D4), Color(0xFF3B82F6),
        Color(0xFF8B5CF6), Color(0xFFEC4899),
    )
    var selected by remember { mutableStateOf(5) }
    FlowRow(horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalArrangement = Arrangement.spacedBy(10.dp)) {
        swatches.forEachIndexed { i, c ->
            Box(
                Modifier.size(32.dp)
                    .border(if (i == selected) 2.dp else 0.dp, c, CircleShape)
                    .padding(4.dp).clip(CircleShape).background(c)
                    .clickable { selected = i },
            )
        }
    }
}`,
    preview: (
      <div className="grid w-44 grid-cols-4 gap-2.5">
        {["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-green-500", "bg-cyan-500", "bg-blue-500", "bg-violet-500", "bg-pink-500"].map((c, i) => (
          <span key={c} className={`grid size-8 place-items-center rounded-full ${i === 5 ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-background" : ""}`}>
            <span className={`size-6 rounded-full ${c}`} />
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "picker-year-grid",
    name: "Year grid",
    category: "pickers",
    description: "A scrollable grid of years with the current selection filled.",
    tags: [],
    code: `@Composable
fun YearGrid(selected: Int) {
    val years = (2021..2032).toList()
    LazyVerticalGrid(columns = GridCells.Fixed(3)) {
        items(years) { y ->
            Box(
                Modifier.padding(4.dp).height(40.dp).clip(CircleShape)
                    .background(if (y == selected) MaterialTheme.colorScheme.primary
                        else Color.Transparent)
                    .clickable { },
                contentAlignment = Alignment.Center,
            ) {
                Text("$y", color = if (y == selected)
                    MaterialTheme.colorScheme.onPrimary
                    else MaterialTheme.colorScheme.onSurface,
                    style = MaterialTheme.typography.bodyMedium)
            }
        }
    }
}`,
    preview: (
      <div className="grid w-48 grid-cols-3 gap-1.5 text-center text-xs">
        {[2024, 2025, 2026, 2027, 2028, 2029].map((y) => (
          <span key={y} className={`rounded-full py-2 ${y === 2026 ? "bg-primary font-semibold text-primary-foreground" : "text-foreground"}`}>{y}</span>
        ))}
      </div>
    ),
  },
  {
    id: "picker-quick-dates",
    name: "Quick dates",
    category: "pickers",
    description: "Relative quick-pick chips for common dates beside a custom calendar entry.",
    tags: [],
    code: `@Composable
fun QuickDates() {
    val quick = listOf("Today", "Tomorrow", "This weekend", "Next week")
    var selected by remember { mutableStateOf("Tomorrow") }
    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)) {
        quick.forEach { q ->
            FilterChip(
                selected = q == selected,
                onClick = { selected = q },
                label = { Text(q) },
            )
        }
        AssistChip(
            onClick = {},
            label = { Text("Pick date") },
            leadingIcon = { Icon(Icons.Filled.CalendarMonth, null,
                Modifier.size(18.dp)) },
        )
    }
}`,
    preview: (
      <div className="flex w-56 flex-wrap gap-2 text-xs font-medium">
        <span className="rounded-full bg-muted px-3 py-1.5 text-muted-foreground">Today</span>
        <span className="rounded-full bg-primary px-3 py-1.5 text-primary-foreground">Tomorrow</span>
        <span className="rounded-full bg-muted px-3 py-1.5 text-muted-foreground">This weekend</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-foreground">
          <Calendar className="size-3.5" /> Pick date
        </span>
      </div>
    ),
  },
  {
    id: "picker-time-slots",
    name: "Time slots",
    category: "pickers",
    description: "A grid of bookable time slots with unavailable ones rendered as disabled.",
    tags: [],
    code: `@Composable
fun TimeSlots() {
    val slots = listOf("9:00", "9:30", "10:00", "10:30", "11:00", "11:30")
    val taken = setOf("10:00")
    var selected by remember { mutableStateOf("9:30") }
    FlowRow(maxItemsInEachRow = 3,
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)) {
        slots.forEach { s ->
            val isTaken = s in taken
            val on = s == selected
            OutlinedButton(
                onClick = { if (!isTaken) selected = s },
                enabled = !isTaken,
                colors = ButtonDefaults.outlinedButtonColors(
                    containerColor = if (on) MaterialTheme.colorScheme.primary
                        else Color.Transparent,
                    contentColor = if (on) MaterialTheme.colorScheme.onPrimary
                        else MaterialTheme.colorScheme.onSurface,
                ),
            ) { Text(s) }
        }
    }
}`,
    preview: (
      <div className="grid w-52 grid-cols-3 gap-2 text-center text-xs font-medium">
        <span className="rounded-lg border py-2 text-foreground">9:00</span>
        <span className="rounded-lg border border-primary bg-primary py-2 text-primary-foreground">9:30</span>
        <span className="rounded-lg border py-2 text-muted-foreground/40 line-through">10:00</span>
        <span className="rounded-lg border py-2 text-foreground">10:30</span>
        <span className="rounded-lg border py-2 text-foreground">11:00</span>
        <span className="rounded-lg border py-2 text-foreground">11:30</span>
      </div>
    ),
  },
  {
    id: "picker-birthday",
    name: "Birthday columns",
    category: "pickers",
    description: "Three aligned wheels for day, month and year with a centered selection band.",
    tags: [],
    code: `@Composable
fun BirthdayPicker() {
    val days = (1..31).map { it.toString() }
    val months = listOf("Jan", "Feb", "Mar", "Apr", "May", "Jun")
    val years = (1990..2010).map { it.toString() }
    Box(contentAlignment = Alignment.Center) {
        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            listOf(days, months, years).forEach { column ->
                LazyColumn(
                    Modifier.height(120.dp),
                    contentPadding = PaddingValues(vertical = 44.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    items(column) { v ->
                        Text(v, Modifier.height(32.dp).wrapContentHeight(),
                            style = MaterialTheme.typography.bodyLarge)
                    }
                }
            }
        }
        Box(Modifier.fillMaxWidth().height(32.dp)
            .border(1.dp, MaterialTheme.colorScheme.outlineVariant,
                MaterialTheme.shapes.small))
    }
}`,
    preview: (
      <div className="relative grid h-28 w-48 place-items-center overflow-hidden rounded-xl border bg-card">
        <div className="absolute inset-x-2 top-1/2 h-8 -translate-y-1/2 rounded-lg border" />
        <div className="flex w-full justify-around text-center leading-none">
          {[["13", "14", "15"], ["May", "Jun", "Jul"], ["1997", "1998", "1999"]].map((col, i) => (
            <div key={i} className="space-y-1.5">
              <p className="text-xs text-muted-foreground/40">{col[0]}</p>
              <p className="text-sm font-bold text-foreground">{col[1]}</p>
              <p className="text-xs text-muted-foreground/40">{col[2]}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];
