import {
  ArrowRight,
  AtSign,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Command,
  Copy,
  CornerDownLeft,
  CreditCard,
  DollarSign,
  Eye,
  Hash,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Mic,
  Minus,
  Palette,
  Pencil,
  Percent,
  Plus,
  Ruler,
  Search,
  Smile,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Variant } from "./types";

export const inputs: Variant[] = [
  {
    id: "input-default",
    name: "Default",
    category: "inputs",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    placeholder = { Text("Email") },
)`,
    preview: <Input placeholder="Email" className="w-56" />,
  },
  {
    id: "input-labeled",
    name: "With label",
    category: "inputs",
    code: `Column {
    Text("Email", style = MaterialTheme.typography.labelLarge)
    OutlinedTextField(value = value, onValueChange = { value = it })
}`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <Label htmlFor="e">Email</Label>
        <Input id="e" placeholder="you@example.com" />
      </div>
    ),
  },
  {
    id: "input-leading-icon",
    name: "Leading icon",
    category: "inputs",
    tags: ["icon"],
    code: `OutlinedTextField(
    value = email,
    onValueChange = { email = it },
    leadingIcon = { Icon(Icons.Filled.Email, contentDescription = null) },
    placeholder = { Text("you@example.com") },
)`,
    preview: (
      <div className="relative w-56">
        <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="you@example.com" className="pl-9" />
      </div>
    ),
  },
  {
    id: "input-trailing-icon",
    name: "Trailing icon",
    category: "inputs",
    tags: ["icon"],
    code: `OutlinedTextField(
    value = date,
    onValueChange = { date = it },
    trailingIcon = { Icon(Icons.Filled.CalendarMonth, contentDescription = null) },
    placeholder = { Text("Pick a date") },
)`,
    preview: (
      <div className="relative w-56">
        <Input placeholder="Pick a date" className="pr-9" />
        <Calendar className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-search",
    name: "Search",
    category: "inputs",
    code: `OutlinedTextField(
    value = q,
    onValueChange = { q = it },
    leadingIcon = { Icon(Icons.Filled.Search, contentDescription = null) },
    placeholder = { Text("Search…") },
    shape = RoundedCornerShape(50),
)`,
    preview: (
      <div className="relative w-56">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search…" className="rounded-full pl-9" />
      </div>
    ),
  },
  {
    id: "input-password",
    name: "Password",
    category: "inputs",
    code: `OutlinedTextField(
    value = pw,
    onValueChange = { pw = it },
    visualTransformation = PasswordVisualTransformation(),
    trailingIcon = { Icon(Icons.Filled.Visibility, contentDescription = null) },
)`,
    preview: (
      <div className="relative w-56">
        <Input type="password" defaultValue="secret" className="pr-9" />
        <Eye className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-disabled",
    name: "Disabled",
    category: "inputs",
    code: `OutlinedTextField(
    value = "",
    onValueChange = {},
    enabled = false,
    placeholder = { Text("Disabled") },
)`,
    preview: <Input placeholder="Disabled" disabled className="w-56" />,
  },
  {
    id: "input-error",
    name: "Error",
    category: "inputs",
    tags: ["validation"],
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    isError = true,
    supportingText = { Text("Required") },
)`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <Input aria-invalid defaultValue="bad@" className="border-destructive ring-destructive/30" />
        <span className="text-xs text-destructive">Enter a valid email</span>
      </div>
    ),
  },
  {
    id: "input-success",
    name: "Success",
    category: "inputs",
    tags: ["validation"],
    description: "Positive validation state.",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    trailingIcon = { Icon(Icons.Filled.Check, contentDescription = null) },
    colors = OutlinedTextFieldDefaults.colors(
        focusedBorderColor = Color(0xFF10B981),
        unfocusedBorderColor = Color(0xFF10B981),
    ),
    supportingText = { Text("Looks good!") },
)`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <div className="relative">
          <Input
            aria-label="Email"
            defaultValue="you@example.com"
            className="border-emerald-500 pr-9 focus-visible:border-emerald-500 focus-visible:ring-emerald-500/30"
          />
          <Check className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-emerald-500" />
        </div>
        <span className="text-xs text-emerald-600">Looks good!</span>
      </div>
    ),
  },
  {
    id: "input-helper",
    name: "Helper text",
    category: "inputs",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    label = { Text("Username") },
    supportingText = { Text("This will be your public handle.") },
)`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <Label htmlFor="u">Username</Label>
        <Input id="u" placeholder="cavefan" />
        <span className="text-xs text-muted-foreground">This will be your public handle.</span>
      </div>
    ),
  },
  {
    id: "input-prefix",
    name: "Prefix",
    category: "inputs",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    prefix = { Text("https://") },
    placeholder = { Text("your-site") },
)`,
    preview: (
      <div className="flex w-60">
        <span className="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-muted px-2.5 text-sm text-muted-foreground">
          https://
        </span>
        <Input placeholder="your-site" className="rounded-l-none" />
      </div>
    ),
  },
  {
    id: "input-suffix",
    name: "Suffix",
    category: "inputs",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    suffix = { Text(".com") },
    placeholder = { Text("acme") },
)`,
    preview: (
      <div className="flex w-60">
        <Input placeholder="acme" className="rounded-r-none" />
        <span className="inline-flex items-center rounded-r-lg border border-l-0 border-input bg-muted px-2.5 text-sm text-muted-foreground">
          .com
        </span>
      </div>
    ),
  },
  {
    id: "input-stepper",
    name: "Number stepper",
    category: "inputs",
    tags: ["number"],
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    IconButton(onClick = { count-- }) {
        Icon(Icons.Filled.Remove, contentDescription = "Decrease")
    }
    OutlinedTextField(
        value = count.toString(),
        onValueChange = {},
        modifier = Modifier.width(56.dp),
    )
    IconButton(onClick = { count++ }) {
        Icon(Icons.Filled.Add, contentDescription = "Increase")
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-2">
        <Button variant="outline" size="icon" aria-label="Decrease">
          <Minus className="size-4" />
        </Button>
        <Input aria-label="Quantity" defaultValue="1" inputMode="numeric" className="text-center" />
        <Button variant="outline" size="icon" aria-label="Increase">
          <Plus className="size-4" />
        </Button>
      </div>
    ),
  },
  {
    id: "input-textarea",
    name: "Textarea",
    category: "inputs",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    placeholder = { Text("Write a message…") },
    singleLine = false,
    minLines = 3,
)`,
    preview: (
      <textarea
        placeholder="Write a message…"
        rows={3}
        className="flex min-h-16 w-56 rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
      />
    ),
  },
  {
    id: "input-otp",
    name: "OTP",
    category: "inputs",
    code: `Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
    repeat(4) { CaveOtpBox(value = it) }
}`,
    preview: (
      <div className="flex gap-2">
        {["2", "4", "8", ""].map((d, i) => (
          <div
            key={i}
            className={`flex size-11 items-center justify-center rounded-md border text-lg font-medium ${
              i === 3 ? "border-primary ring-2 ring-primary/30" : ""
            }`}
          >
            {d}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "input-file",
    name: "File",
    category: "inputs",
    code: `CaveFilePickerField(
    label = "Resume",
    buttonText = "Choose file",
    fileName = fileName,
    onPick = { fileName = it },
)`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <Label htmlFor="file">Resume</Label>
        <Input id="file" type="file" />
      </div>
    ),
  },
  {
    id: "input-pill",
    name: "Pill",
    category: "inputs",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    placeholder = { Text("Pill shaped") },
    shape = RoundedCornerShape(50),
)`,
    preview: <Input placeholder="Pill shaped" className="w-56 rounded-full px-4" />,
  },
  {
    id: "input-clearable",
    name: "Clearable",
    category: "inputs",
    code: `OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    trailingIcon = {
        IconButton(onClick = { value = "" }) {
            Icon(Icons.Filled.Close, contentDescription = "Clear")
        }
    },
)`,
    preview: (
      <div className="relative w-56">
        <Input aria-label="Username" defaultValue="caveui" className="pr-9" />
        <button
          type="button"
          aria-label="Clear"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <X className="size-4" />
        </button>
      </div>
    ),
  },
  {
    id: "input-inline",
    name: "Inline action",
    category: "inputs",
    code: `Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
    OutlinedTextField(
        value = email,
        onValueChange = { email = it },
        placeholder = { Text("Email") },
        modifier = Modifier.weight(1f),
    )
    Button(onClick = {}) { Text("Subscribe") }
}`,
    preview: (
      <div className="flex w-60 items-center gap-2">
        <Input placeholder="Email" className="flex-1" />
        <Button>Subscribe</Button>
      </div>
    ),
  },
  {
    id: "input-tags",
    name: "Tags input",
    category: "inputs",
    tags: ["chips"],
    description: "Token field for multiple values.",
    code: `CaveTagsField(
    tags = tags,
    onAdd = { tags = tags + it },
    onRemove = { tags = tags - it },
    placeholder = "Add tag…",
)`,
    preview: (
      <div className="flex w-60 flex-wrap items-center gap-1.5 rounded-lg border border-input px-2 py-1.5">
        {["compose", "ui"].map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
          >
            {t}
            <X className="size-3 text-muted-foreground" />
          </span>
        ))}
        <input
          aria-label="Add tag"
          placeholder="Add tag…"
          className="flex-1 bg-transparent px-1 py-0.5 text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
    ),
  },
  {
    id: "input-floating",
    name: "Floating label",
    category: "inputs",
    description: "Notched label resting on the border.",
    code: `// Material 3 floats the label onto the border automatically.
OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    label = { Text("Email") },
)`,
    preview: (
      <div className="relative w-56">
        <Input id="fl" defaultValue="you@example.com" />
        <label
          htmlFor="fl"
          className="absolute -top-2 left-2.5 bg-background px-1 text-xs text-muted-foreground"
        >
          Email
        </label>
      </div>
    ),
  },
  {
    id: "input-amount",
    name: "Amount",
    category: "inputs",
    tags: ["number"],
    code: `OutlinedTextField(
    value = amount,
    onValueChange = { amount = it },
    prefix = { Text("$") },
    placeholder = { Text("0.00") },
    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
)`,
    preview: (
      <div className="relative w-56">
        <DollarSign className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input aria-label="Amount" defaultValue="0.00" inputMode="decimal" className="pl-9" />
      </div>
    ),
  },
  {
    id: "input-phone",
    name: "Phone with country",
    category: "inputs",
    description:
      "Phone field with a tappable country-code selector in the leading slot.",
    tags: ["icon"],
    code: `var phone by remember { mutableStateOf("") }
OutlinedTextField(
    value = phone,
    onValueChange = { phone = it.filter(Char::isDigit) },
    leadingIcon = {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.padding(start = 12.dp),
        ) {
            Text("🇺🇸 +1", style = MaterialTheme.typography.bodyMedium)
            Icon(
                Icons.Filled.ArrowDropDown,
                contentDescription = "Change country",
            )
        }
    },
    placeholder = { Text("(555) 000-0000") },
    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Phone),
    singleLine = true,
)`,
    preview: (
      <div className="flex w-60">
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-l-lg border border-r-0 border-input bg-muted px-2.5 text-sm text-foreground"
        >
          🇺🇸 +1
          <ChevronDown className="size-3.5 text-muted-foreground" />
        </button>
        <Input
          aria-label="Phone"
          placeholder="(555) 000-0000"
          inputMode="tel"
          className="rounded-l-none"
        />
      </div>
    ),
  },
  {
    id: "input-currency",
    name: "Currency select",
    category: "inputs",
    description:
      "Amount field with an attached currency selector for multi-currency entry.",
    tags: ["number"],
    code: `var amount by remember { mutableStateOf("") }
OutlinedTextField(
    value = amount,
    onValueChange = { amount = it },
    placeholder = { Text("0.00") },
    trailingIcon = {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier.padding(end = 12.dp),
        ) {
            Text("USD", style = MaterialTheme.typography.labelLarge)
            Icon(
                Icons.Filled.ArrowDropDown,
                contentDescription = "Currency",
            )
        }
    },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Decimal,
    ),
    singleLine = true,
)`,
    preview: (
      <div className="relative w-60">
        <Input aria-label="Amount" defaultValue="0.00" inputMode="decimal" />
        <button
          type="button"
          className="absolute right-1.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground"
        >
          USD
          <ChevronDown className="size-3 text-muted-foreground" />
        </button>
      </div>
    ),
  },
  {
    id: "input-date-picker",
    name: "Date picker",
    category: "inputs",
    description:
      "Read-only date field that opens a calendar from a trailing icon button.",
    tags: ["icon"],
    code: `var date by remember { mutableStateOf("") }
var open by remember { mutableStateOf(false) }
OutlinedTextField(
    value = date,
    onValueChange = {},
    readOnly = true,
    placeholder = { Text("Select date") },
    trailingIcon = {
        IconButton(onClick = { open = true }) {
            Icon(
                Icons.Filled.CalendarMonth,
                contentDescription = "Open calendar",
            )
        }
    },
)`,
    preview: (
      <div className="relative w-56">
        <Input aria-label="Date" defaultValue="2026-06-28" readOnly className="pr-9" />
        <button
          type="button"
          aria-label="Open calendar"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Calendar className="size-4" />
        </button>
      </div>
    ),
  },
  {
    id: "input-time",
    name: "Time",
    category: "inputs",
    description:
      "Time-of-day field with a clock affordance and 24-hour numeric keyboard.",
    tags: ["icon"],
    code: `var time by remember { mutableStateOf("") }
OutlinedTextField(
    value = time,
    onValueChange = { time = it },
    leadingIcon = {
        Icon(Icons.Filled.Schedule, contentDescription = null)
    },
    placeholder = { Text("HH:mm") },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Number,
    ),
    singleLine = true,
)`,
    preview: (
      <div className="relative w-56">
        <Clock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input aria-label="Time" defaultValue="09:30" className="pl-9" />
      </div>
    ),
  },
  {
    id: "input-date-range",
    name: "Date range",
    category: "inputs",
    description:
      "Paired start and end date fields joined by an arrow for range selection.",
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    OutlinedTextField(
        value = start,
        onValueChange = { start = it },
        placeholder = { Text("Start") },
        modifier = Modifier.weight(1f),
    )
    Icon(
        Icons.Filled.ArrowForward,
        contentDescription = "to",
        modifier = Modifier.padding(horizontal = 8.dp),
    )
    OutlinedTextField(
        value = end,
        onValueChange = { end = it },
        placeholder = { Text("End") },
        modifier = Modifier.weight(1f),
    )
}`,
    preview: (
      <div className="flex w-64 items-center gap-2">
        <Input aria-label="Start date" defaultValue="Jun 1" className="flex-1" />
        <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
        <Input aria-label="End date" defaultValue="Jun 28" className="flex-1" />
      </div>
    ),
  },
  {
    id: "input-slider",
    name: "Slider field",
    category: "inputs",
    description:
      "A slider kept in sync with a compact numeric field for precise values.",
    tags: ["number"],
    code: `var value by remember { mutableFloatStateOf(40f) }
Row(verticalAlignment = Alignment.CenterVertically) {
    Slider(
        value = value,
        onValueChange = { value = it },
        valueRange = 0f..100f,
        modifier = Modifier.weight(1f),
    )
    OutlinedTextField(
        value = value.toInt().toString(),
        onValueChange = {
            it.toIntOrNull()?.let { n -> value = n.toFloat() }
        },
        modifier = Modifier.width(72.dp),
        singleLine = true,
    )
}`,
    preview: (
      <div className="flex w-64 items-center gap-3">
        <div className="relative h-1.5 flex-1 rounded-full bg-muted">
          <div className="absolute inset-y-0 left-0 w-[40%] rounded-full bg-primary" />
          <div className="absolute left-[40%] top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background" />
        </div>
        <Input aria-label="Value" defaultValue="40" className="w-16 text-center" />
      </div>
    ),
  },
  {
    id: "input-segmented",
    name: "Segmented field",
    category: "inputs",
    description:
      "A segmented unit toggle attached to the field so values stay unambiguous.",
    code: `var value by remember { mutableStateOf("") }
var unit by remember { mutableStateOf(0) }
Column {
    OutlinedTextField(
        value = value,
        onValueChange = { value = it },
        placeholder = { Text("Distance") },
    )
    SingleChoiceSegmentedButtonRow {
        listOf("km", "mi").forEachIndexed { i, label ->
            SegmentedButton(
                selected = unit == i,
                onClick = { unit = i },
                shape = SegmentedButtonDefaults.itemShape(i, 2),
            ) { Text(label) }
        }
    }
}`,
    preview: (
      <div className="grid w-56 gap-2">
        <Input aria-label="Distance" placeholder="Distance" />
        <div className="inline-flex w-fit rounded-lg border border-input p-0.5 text-sm">
          <button type="button" className="rounded-md bg-primary px-3 py-1 text-primary-foreground">
            km
          </button>
          <button type="button" className="rounded-md px-3 py-1 text-muted-foreground">
            mi
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "input-password-strength",
    name: "Password strength",
    category: "inputs",
    description:
      "Password field with a live strength meter that fills as the rule set is met.",
    tags: ["validation"],
    code: `var pw by remember { mutableStateOf("") }
val score = listOf(
    pw.length >= 8,
    pw.any(Char::isDigit),
    pw.any { !it.isLetterOrDigit() },
).count { it }
Column {
    OutlinedTextField(
        value = pw,
        onValueChange = { pw = it },
        leadingIcon = { Icon(Icons.Filled.Lock, null) },
        visualTransformation = PasswordVisualTransformation(),
    )
    LinearProgressIndicator(
        progress = { score / 3f },
        color = when (score) {
            3 -> Color(0xFF16A34A)
            2 -> Color(0xFFF59E0B)
            else -> Color(0xFFEF4444)
        },
        modifier = Modifier.fillMaxWidth(),
    )
}`,
    preview: (
      <div className="grid w-56 gap-2">
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input aria-label="Password" type="password" defaultValue="secret9!" className="pl-9" />
        </div>
        <div className="flex gap-1">
          <span className="h-1 flex-1 rounded-full bg-emerald-500" />
          <span className="h-1 flex-1 rounded-full bg-emerald-500" />
          <span className="h-1 flex-1 rounded-full bg-muted" />
        </div>
        <span className="text-xs text-muted-foreground">Add a symbol for a strong password</span>
      </div>
    ),
  },
  {
    id: "input-counter",
    name: "Character counter",
    category: "inputs",
    description:
      "Single-line field showing a live remaining-character count in the support row.",
    code: `var value by remember { mutableStateOf("") }
val max = 30
OutlinedTextField(
    value = value,
    onValueChange = { if (it.length <= max) value = it },
    placeholder = { Text("Display name") },
    supportingText = {
        Text(
            "\${value.length} / \$max",
            modifier = Modifier.fillMaxWidth(),
            textAlign = TextAlign.End,
        )
    },
    singleLine = true,
)`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <Input aria-label="Display name" defaultValue="caveui" />
        <span className="self-end text-xs tabular-nums text-muted-foreground">6 / 30</span>
      </div>
    ),
  },
  {
    id: "input-autosize",
    name: "Autosize textarea",
    category: "inputs",
    description:
      "Multiline field that grows with its content between a min and max line count.",
    code: `var value by remember { mutableStateOf("") }
OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    placeholder = { Text("Type as much as you like…") },
    minLines = 2,
    maxLines = 6,
    modifier = Modifier.fillMaxWidth(),
)`,
    preview: (
      <textarea
        aria-label="Notes"
        defaultValue={"Type as much as you like,\nthis box grows with you."}
        rows={3}
        className="flex field-sizing-content min-h-16 w-56 resize-none rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
      />
    ),
  },
  {
    id: "input-inline-edit",
    name: "Inline edit",
    category: "inputs",
    description:
      "Text reads as a label until tapped, then morphs into an editable field.",
    tags: ["icon"],
    code: `var editing by remember { mutableStateOf(false) }
var value by remember { mutableStateOf("Project Atlas") }
if (editing) {
    OutlinedTextField(
        value = value,
        onValueChange = { value = it },
        trailingIcon = {
            IconButton(onClick = { editing = false }) {
                Icon(Icons.Filled.Check, contentDescription = "Save")
            }
        },
        singleLine = true,
    )
} else {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Text(value, style = MaterialTheme.typography.titleMedium)
        IconButton(onClick = { editing = true }) {
            Icon(Icons.Filled.Edit, contentDescription = "Edit")
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/60">
        <span className="flex-1 font-medium text-foreground">Project Atlas</span>
        <Pencil className="size-4 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-copy",
    name: "Copy field",
    category: "inputs",
    description:
      "Read-only value field with a trailing button that copies it to the clipboard.",
    tags: ["icon"],
    code: `val clipboard = LocalClipboardManager.current
var copied by remember { mutableStateOf(false) }
val token = "cv_live_8f2a91"
OutlinedTextField(
    value = token,
    onValueChange = {},
    readOnly = true,
    trailingIcon = {
        IconButton(onClick = {
            clipboard.setText(AnnotatedString(token))
            copied = true
        }) {
            Icon(
                if (copied) Icons.Filled.Check else Icons.Filled.ContentCopy,
                contentDescription = "Copy",
            )
        }
    },
)`,
    preview: (
      <div className="relative w-60">
        <Input aria-label="API token" readOnly defaultValue="cv_live_8f2a91" className="pr-9 font-mono text-sm" />
        <button
          type="button"
          aria-label="Copy"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Copy className="size-4" />
        </button>
      </div>
    ),
  },
  {
    id: "input-suggestions",
    name: "Search suggestions",
    category: "inputs",
    description:
      "Search field with a dropdown of matching suggestions that fades in below it.",
    tags: ["icon"],
    code: `var q by remember { mutableStateOf("") }
val matches = remember(q) {
    listOf("Compose", "Coroutines", "Coil").filter {
        q.isNotEmpty() && it.startsWith(q, ignoreCase = true)
    }
}
Column {
    OutlinedTextField(
        value = q,
        onValueChange = { q = it },
        leadingIcon = { Icon(Icons.Filled.Search, null) },
        placeholder = { Text("Search docs…") },
        singleLine = true,
    )
    AnimatedVisibility(matches.isNotEmpty()) {
        Surface(tonalElevation = 2.dp) {
            Column { matches.forEach { ListItem(headlineContent = { Text(it) }) } }
        }
    }
}`,
    preview: (
      <div className="w-56">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input aria-label="Search" defaultValue="Co" className="pl-9" />
        </div>
        <div className="animate-fade-in mt-1 overflow-hidden rounded-lg border border-input bg-popover text-sm shadow-sm">
          {["Compose", "Coroutines", "Coil"].map((s) => (
            <div key={s} className="px-3 py-2 hover:bg-muted">
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "input-shake",
    name: "Validation shake",
    category: "inputs",
    description:
      "Field nudges with a horizontal shake animation when a submit fails validation.",
    tags: ["validation", "animated"],
    code: `var value by remember { mutableStateOf("") }
var error by remember { mutableStateOf(false) }
val offset by animateFloatAsState(
    targetValue = 0f,
    animationSpec = if (error) keyframes {
        durationMillis = 300
        (-8f) at 50; 8f at 100; (-6f) at 150; 6f at 200; 0f at 300
    } else spring(),
    label = "shake",
)
OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    isError = error,
    placeholder = { Text("Coupon code") },
    modifier = Modifier.graphicsLayer { translationX = offset },
)`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <Input
          aria-invalid
          defaultValue="WRONG"
          className="animate-bounce border-destructive ring-destructive/30"
        />
        <span className="text-xs text-destructive">That code isn’t valid</span>
      </div>
    ),
  },
  {
    id: "input-pin",
    name: "Secure PIN",
    category: "inputs",
    description:
      "Four masked cells for a numeric PIN, the active cell highlighted with a ring.",
    code: `var pin by remember { mutableStateOf("") }
Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
    repeat(4) { i ->
        Box(
            contentAlignment = Alignment.Center,
            modifier = Modifier
                .size(48.dp)
                .border(
                    width = if (i == pin.length) 2.dp else 1.dp,
                    color = if (i == pin.length)
                        MaterialTheme.colorScheme.primary
                    else MaterialTheme.colorScheme.outline,
                    shape = MaterialTheme.shapes.medium,
                ),
        ) {
            if (i < pin.length) {
                Box(
                    Modifier
                        .size(10.dp)
                        .background(LocalContentColor.current, CircleShape),
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex gap-2.5">
        {[true, true, false, false].map((filled, i) => (
          <div
            key={i}
            className={`flex size-12 items-center justify-center rounded-md border ${
              i === 2 ? "border-2 border-primary ring-2 ring-primary/30" : "border-input"
            }`}
          >
            {filled && <span className="size-2.5 rounded-full bg-foreground" />}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "input-mention",
    name: "Mention field",
    category: "inputs",
    description:
      "Composer that surfaces a people picker when the user types an @ mention.",
    tags: ["icon"],
    code: `var text by remember { mutableStateOf("") }
val showPeople = text.endsWith("@")
Column {
    OutlinedTextField(
        value = text,
        onValueChange = { text = it },
        leadingIcon = { Icon(Icons.Filled.AlternateEmail, null) },
        placeholder = { Text("Mention a teammate…") },
        singleLine = true,
    )
    AnimatedVisibility(showPeople) {
        Surface(tonalElevation = 2.dp) {
            Column {
                listOf("@ada", "@linus", "@grace").forEach {
                    ListItem(headlineContent = { Text(it) })
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56">
        <div className="relative">
          <AtSign className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input aria-label="Mention" defaultValue="Ping @" className="pl-9" />
        </div>
        <div className="animate-scale-in mt-1 overflow-hidden rounded-lg border border-input bg-popover text-sm shadow-sm">
          {["@ada", "@linus", "@grace"].map((p) => (
            <div key={p} className="px-3 py-2 hover:bg-muted">
              {p}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "input-color",
    name: "Color field",
    category: "inputs",
    description:
      "Hex color field with a live swatch in the leading slot that tracks the value.",
    tags: ["icon"],
    code: `var hex by remember { mutableStateOf("#F59E0B") }
val swatch = runCatching {
    Color(android.graphics.Color.parseColor(hex))
}.getOrDefault(Color.Gray)
OutlinedTextField(
    value = hex,
    onValueChange = { hex = it.uppercase() },
    leadingIcon = {
        Box(
            Modifier
                .padding(start = 12.dp)
                .size(20.dp)
                .background(swatch, MaterialTheme.shapes.small),
        )
    },
    placeholder = { Text("#RRGGBB") },
    singleLine = true,
)`,
    preview: (
      <div className="relative w-56">
        <span className="absolute left-3 top-1/2 size-5 -translate-y-1/2 rounded bg-amber-500" />
        <Input aria-label="Color" defaultValue="#F59E0B" className="pl-10 font-mono text-sm" />
        <Palette className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-credit-card",
    name: "Credit card",
    category: "inputs",
    description:
      "Card number field that auto-groups digits and shows the detected brand icon.",
    tags: ["icon"],
    code: `var card by remember { mutableStateOf("") }
val grouped = card.chunked(4).joinToString(" ")
OutlinedTextField(
    value = grouped,
    onValueChange = {
        card = it.filter(Char::isDigit).take(16)
    },
    leadingIcon = {
        Icon(Icons.Filled.CreditCard, contentDescription = null)
    },
    placeholder = { Text("0000 0000 0000 0000") },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Number,
    ),
    singleLine = true,
)`,
    preview: (
      <div className="relative w-64">
        <CreditCard className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          aria-label="Card number"
          defaultValue="4242 4242 4242 4242"
          inputMode="numeric"
          className="pl-9 font-mono tracking-wider"
        />
      </div>
    ),
  },
  {
    id: "input-expiry",
    name: "Card expiry",
    category: "inputs",
    description:
      "Compact MM/YY expiry field that inserts the slash separator automatically.",
    code: `var exp by remember { mutableStateOf("") }
OutlinedTextField(
    value = exp,
    onValueChange = { raw ->
        val d = raw.filter(Char::isDigit).take(4)
        exp = if (d.length > 2) "\${d.take(2)}/\${d.drop(2)}" else d
    },
    placeholder = { Text("MM/YY") },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Number,
    ),
    singleLine = true,
    modifier = Modifier.width(96.dp),
)`,
    preview: (
      <Input
        aria-label="Expiry"
        defaultValue="08/27"
        inputMode="numeric"
        className="w-24 text-center font-mono"
      />
    ),
  },
  {
    id: "input-cvc",
    name: "Security code",
    category: "inputs",
    description:
      "Masked CVC field with a lock affordance and a supporting hint about its location.",
    tags: ["validation"],
    code: `var cvc by remember { mutableStateOf("") }
OutlinedTextField(
    value = cvc,
    onValueChange = { cvc = it.filter(Char::isDigit).take(4) },
    leadingIcon = { Icon(Icons.Filled.Lock, contentDescription = null) },
    visualTransformation = PasswordVisualTransformation(),
    placeholder = { Text("CVC") },
    supportingText = { Text("3 digits on the back") },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.NumberPassword,
    ),
    singleLine = true,
    modifier = Modifier.width(120.dp),
)`,
    preview: (
      <div className="grid w-32 gap-1.5">
        <div className="relative">
          <Lock className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input aria-label="CVC" type="password" defaultValue="123" className="pl-8 text-center" />
        </div>
        <span className="text-xs text-muted-foreground">On the back</span>
      </div>
    ),
  },
  {
    id: "input-percentage",
    name: "Percentage",
    category: "inputs",
    description:
      "Numeric field clamped to 0-100 with a trailing percent sign suffix.",
    tags: ["number"],
    code: `var value by remember { mutableStateOf("") }
OutlinedTextField(
    value = value,
    onValueChange = { raw ->
        val n = raw.filter(Char::isDigit).toIntOrNull() ?: 0
        value = n.coerceIn(0, 100).toString()
    },
    suffix = { Text("%") },
    placeholder = { Text("0") },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Number,
    ),
    singleLine = true,
    modifier = Modifier.width(120.dp),
)`,
    preview: (
      <div className="relative w-28">
        <Input aria-label="Percentage" defaultValue="75" inputMode="numeric" className="pr-8" />
        <Percent className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-rating",
    name: "Star rating",
    category: "inputs",
    description:
      "Tap-to-rate row of stars that fill up to the selected value as input.",
    tags: ["icon"],
    code: `var rating by remember { mutableIntStateOf(0) }
Row {
    repeat(5) { i ->
        IconButton(onClick = { rating = i + 1 }) {
            Icon(
                imageVector = if (i < rating)
                    Icons.Filled.Star else Icons.Outlined.StarBorder,
                contentDescription = "Rate \${i + 1}",
                tint = if (i < rating)
                    Color(0xFFF59E0B)
                else MaterialTheme.colorScheme.outline,
            )
        }
    }
}`,
    preview: (
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className={`size-6 ${i < 3 ? "fill-amber-500 text-amber-500" : "text-muted-foreground/40"}`}
          />
        ))}
      </div>
    ),
  },
  {
    id: "input-voice",
    name: "Voice search",
    category: "inputs",
    description:
      "Search field with a trailing mic button that pulses while it is listening.",
    tags: ["icon", "animated"],
    code: `var q by remember { mutableStateOf("") }
var listening by remember { mutableStateOf(false) }
val scale by animateFloatAsState(
    if (listening) 1.2f else 1f, label = "mic",
)
OutlinedTextField(
    value = q,
    onValueChange = { q = it },
    leadingIcon = { Icon(Icons.Filled.Search, null) },
    trailingIcon = {
        IconButton(onClick = { listening = !listening }) {
            Icon(
                Icons.Filled.Mic,
                contentDescription = "Voice search",
                modifier = Modifier.graphicsLayer {
                    scaleX = scale; scaleY = scale
                },
                tint = if (listening)
                    MaterialTheme.colorScheme.primary
                else LocalContentColor.current,
            )
        }
    },
    placeholder = { Text("Search…") },
    shape = RoundedCornerShape(50),
)`,
    preview: (
      <div className="relative w-56">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input aria-label="Voice search" placeholder="Search…" className="rounded-full px-9" />
        <Mic className="animate-pulse absolute right-3 top-1/2 size-4 -translate-y-1/2 text-primary" />
      </div>
    ),
  },
  {
    id: "input-loading",
    name: "Async validating",
    category: "inputs",
    description:
      "Field showing a spinner in the trailing slot while a value is checked remotely.",
    tags: ["icon", "animated"],
    code: `var value by remember { mutableStateOf("") }
var checking by remember { mutableStateOf(false) }
OutlinedTextField(
    value = value,
    onValueChange = { value = it; checking = true },
    trailingIcon = {
        if (checking) {
            CircularProgressIndicator(
                strokeWidth = 2.dp,
                modifier = Modifier.size(18.dp),
            )
        }
    },
    placeholder = { Text("Checking availability…") },
    singleLine = true,
)`,
    preview: (
      <div className="relative w-60">
        <Input aria-label="Slug" defaultValue="my-handle" className="pr-9" />
        <Loader2 className="absolute right-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-skeleton",
    name: "Loading skeleton",
    category: "inputs",
    description:
      "Placeholder field with a shimmering skeleton shown while the form hydrates.",
    tags: ["animated"],
    code: `val transition = rememberInfiniteTransition(label = "shimmer")
val x by transition.animateFloat(
    initialValue = -200f,
    targetValue = 200f,
    animationSpec = infiniteRepeatable(tween(1200)),
    label = "x",
)
Box(
    Modifier
        .fillMaxWidth()
        .height(56.dp)
        .clip(MaterialTheme.shapes.medium)
        .background(MaterialTheme.colorScheme.surfaceVariant)
        .drawWithContent {
            drawContent()
            drawRect(
                brush = Brush.horizontalGradient(
                    listOf(Color.Transparent, Color.White.copy(0.3f),
                        Color.Transparent),
                    startX = x, endX = x + 200f,
                ),
            )
        },
)`,
    preview: (
      <div className="w-56 overflow-hidden rounded-lg border border-input">
        <div className="animate-shimmer h-10 w-full bg-[linear-gradient(90deg,var(--muted),var(--accent),var(--muted))] bg-[length:400px_100%]" />
      </div>
    ),
  },
  {
    id: "input-gradient-border",
    name: "Gradient border",
    category: "inputs",
    description:
      "Field framed by a slowly shifting gradient border for a premium, focused feel.",
    tags: ["animated"],
    code: `val transition = rememberInfiniteTransition(label = "grad")
val shift by transition.animateFloat(
    initialValue = 0f, targetValue = 1f,
    animationSpec = infiniteRepeatable(tween(4000)),
    label = "shift",
)
val brush = Brush.linearGradient(
    colors = listOf(
        Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFF6366F1),
    ),
    start = Offset(shift * 300f, 0f),
    end = Offset(shift * 300f + 300f, 0f),
)
OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    placeholder = { Text("Premium field") },
    modifier = Modifier.border(2.dp, brush, MaterialTheme.shapes.medium),
    colors = OutlinedTextFieldDefaults.colors(
        focusedBorderColor = Color.Transparent,
        unfocusedBorderColor = Color.Transparent,
    ),
)`,
    preview: (
      <div className="animate-gradient w-56 rounded-lg bg-[linear-gradient(110deg,#f59e0b,#ec4899,#6366f1,#f59e0b)] bg-[length:200%_100%] p-0.5">
        <Input aria-label="Premium" placeholder="Premium field" className="border-0 bg-background" />
      </div>
    ),
  },
  {
    id: "input-glow",
    name: "Focus glow",
    category: "inputs",
    description:
      "Field that lifts a soft neon glow around itself the moment it gains focus.",
    tags: ["animated"],
    code: `var focused by remember { mutableStateOf(false) }
val glow by animateDpAsState(
    if (focused) 16.dp else 0.dp, label = "glow",
)
OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    placeholder = { Text("Focus me") },
    modifier = Modifier
        .onFocusChanged { focused = it.isFocused }
        .shadow(glow, MaterialTheme.shapes.medium, spotColor = Color(0xFF6366F1)),
    colors = OutlinedTextFieldDefaults.colors(
        focusedBorderColor = Color(0xFF6366F1),
    ),
)`,
    preview: (
      <Input
        aria-label="Glow"
        placeholder="Focus me"
        className="w-56 border-indigo-500 shadow-[0_0_18px_-2px] shadow-indigo-500/60 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/30"
      />
    ),
  },
  {
    id: "input-handle",
    name: "Handle availability",
    category: "inputs",
    description:
      "Username field with an @ prefix and an inline check confirming availability.",
    tags: ["icon", "validation"],
    code: `var handle by remember { mutableStateOf("") }
val available = handle.length >= 3
OutlinedTextField(
    value = handle,
    onValueChange = { handle = it.lowercase() },
    prefix = { Text("@") },
    trailingIcon = {
        if (available) Icon(
            Icons.Filled.CheckCircle,
            contentDescription = "Available",
            tint = Color(0xFF16A34A),
        )
    },
    placeholder = { Text("handle") },
    supportingText = {
        Text(if (available) "Available" else "At least 3 characters")
    },
    singleLine = true,
)`,
    preview: (
      <div className="grid w-56 gap-1.5">
        <div className="flex">
          <span className="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-muted px-2.5 text-sm text-muted-foreground">
            @
          </span>
          <div className="relative flex-1">
            <Input aria-label="Handle" defaultValue="caveui" className="rounded-l-none pr-9" />
            <Check className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-emerald-500" />
          </div>
        </div>
        <span className="text-xs text-emerald-600">Available</span>
      </div>
    ),
  },
  {
    id: "input-emoji",
    name: "Emoji composer",
    category: "inputs",
    description:
      "Message field with a trailing emoji button that toggles a quick reaction row.",
    tags: ["icon"],
    code: `var text by remember { mutableStateOf("") }
var picker by remember { mutableStateOf(false) }
Column {
    OutlinedTextField(
        value = text,
        onValueChange = { text = it },
        trailingIcon = {
            IconButton(onClick = { picker = !picker }) {
                Icon(
                    Icons.Outlined.Mood,
                    contentDescription = "Emoji",
                )
            }
        },
        placeholder = { Text("Message") },
        shape = RoundedCornerShape(50),
    )
    AnimatedVisibility(picker) {
        Row {
            listOf("😀", "🎉", "🔥", "❤️").forEach {
                TextButton(onClick = { text += it }) { Text(it) }
            }
        }
    }
}`,
    preview: (
      <div className="w-56">
        <div className="relative">
          <Input aria-label="Message" placeholder="Message" className="rounded-full pr-9" />
          <Smile className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        <div className="animate-fade-in mt-1.5 flex gap-1 text-lg">
          {["😀", "🎉", "🔥", "❤️"].map((e) => (
            <button key={e} type="button" className="rounded-md px-1.5 hover:bg-muted">
              {e}
            </button>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "input-filter",
    name: "Filter chips",
    category: "inputs",
    description:
      "Search field with removable active-filter chips rendered inside the leading area.",
    tags: ["chips", "icon"],
    code: `var q by remember { mutableStateOf("") }
var filters by remember { mutableStateOf(listOf("Open", "Mine")) }
Row(
    verticalAlignment = Alignment.CenterVertically,
    modifier = Modifier
        .border(1.dp, MaterialTheme.colorScheme.outline,
            MaterialTheme.shapes.medium)
        .padding(horizontal = 8.dp),
) {
    Icon(Icons.Filled.Search, contentDescription = null)
    filters.forEach { f ->
        InputChip(
            selected = true,
            onClick = { filters = filters - f },
            label = { Text(f) },
            trailingIcon = { Icon(Icons.Filled.Close, null) },
        )
    }
    BasicTextField(
        value = q, onValueChange = { q = it },
        modifier = Modifier.weight(1f),
    )
}`,
    preview: (
      <div className="flex w-64 items-center gap-1.5 rounded-lg border border-input px-2.5 py-1.5">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        {["Open", "Mine"].map((f) => (
          <span
            key={f}
            className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
          >
            {f}
            <X className="size-3" />
          </span>
        ))}
        <input
          aria-label="Filter search"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          placeholder="Filter…"
        />
      </div>
    ),
  },
  {
    id: "input-numeric-format",
    name: "Grouped number",
    category: "inputs",
    description:
      "Large number field that formats digits with thousands separators as you type.",
    tags: ["number"],
    code: `var raw by remember { mutableStateOf("") }
val formatted = raw.reversed().chunked(3)
    .joinToString(",").reversed()
OutlinedTextField(
    value = formatted,
    onValueChange = { raw = it.filter(Char::isDigit) },
    leadingIcon = { Icon(Icons.Filled.Tag, contentDescription = null) },
    placeholder = { Text("0") },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Number,
    ),
    singleLine = true,
)`,
    preview: (
      <div className="relative w-56">
        <Hash className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          aria-label="Amount"
          defaultValue="1,250,000"
          inputMode="numeric"
          className="pl-9 tabular-nums"
        />
      </div>
    ),
  },
  {
    id: "input-iban",
    name: "IBAN",
    category: "inputs",
    description:
      "Bank account field that upper-cases and groups the IBAN into blocks of four.",
    code: `var iban by remember { mutableStateOf("") }
val grouped = iban.chunked(4).joinToString(" ")
OutlinedTextField(
    value = grouped,
    onValueChange = {
        iban = it.filter(Char::isLetterOrDigit).uppercase().take(34)
    },
    placeholder = { Text("DE00 0000 0000 0000 0000 00") },
    singleLine = true,
    textStyle = LocalTextStyle.current.copy(
        fontFamily = FontFamily.Monospace,
    ),
)`,
    preview: (
      <Input
        aria-label="IBAN"
        defaultValue="DE89 3704 0044 0532 0130 00"
        className="w-64 font-mono text-sm tracking-wide"
      />
    ),
  },
  {
    id: "input-otp-underline",
    name: "Underline OTP",
    category: "inputs",
    description:
      "Borderless OTP cells marked only by an underline that thickens when active.",
    code: `var code by remember { mutableStateOf("") }
Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
    repeat(5) { i ->
        Box(
            contentAlignment = Alignment.Center,
            modifier = Modifier
                .width(36.dp)
                .drawBehind {
                    val active = i == code.length
                    drawLine(
                        color = if (active) Color(0xFFF59E0B)
                        else Color.Gray,
                        start = Offset(0f, size.height),
                        end = Offset(size.width, size.height),
                        strokeWidth = if (active) 3f else 1.5f,
                    )
                },
        ) {
            Text(code.getOrNull(i)?.toString() ?: "")
        }
    }
}`,
    preview: (
      <div className="flex gap-3">
        {["1", "9", "4", "", ""].map((d, i) => (
          <div
            key={i}
            className={`flex h-10 w-8 items-center justify-center text-lg font-medium ${
              i === 3 ? "border-b-2 border-primary" : "border-b border-input"
            }`}
          >
            {d}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "input-textarea-toolbar",
    name: "Rich textarea",
    category: "inputs",
    description:
      "Multiline composer topped by a formatting toolbar in a single bordered surface.",
    code: `var value by remember { mutableStateOf("") }
Column(
    Modifier.border(
        1.dp, MaterialTheme.colorScheme.outline,
        MaterialTheme.shapes.medium,
    ),
) {
    Row(Modifier.padding(4.dp)) {
        listOf("B", "I", "U").forEach {
            TextButton(onClick = {}) {
                Text(it, fontWeight = FontWeight.Bold)
            }
        }
    }
    HorizontalDivider()
    BasicTextField(
        value = value,
        onValueChange = { value = it },
        modifier = Modifier.fillMaxWidth().padding(12.dp),
        minLines = 3,
    )
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-lg border border-input">
        <div className="flex items-center gap-1 border-b border-input bg-muted/40 px-1.5 py-1 text-sm">
          <button type="button" className="rounded px-2 py-0.5 font-bold hover:bg-muted">
            B
          </button>
          <button type="button" className="rounded px-2 py-0.5 italic hover:bg-muted">
            I
          </button>
          <button type="button" className="rounded px-2 py-0.5 underline hover:bg-muted">
            U
          </button>
        </div>
        <textarea
          aria-label="Body"
          rows={3}
          placeholder="Write something…"
          className="block w-full resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
    ),
  },
  {
    id: "input-combo",
    name: "Combobox",
    category: "inputs",
    description:
      "Editable field paired with a dropdown menu of selectable matching options.",
    tags: ["icon"],
    code: `var value by remember { mutableStateOf("") }
var expanded by remember { mutableStateOf(false) }
ExposedDropdownMenuBox(
    expanded = expanded,
    onExpandedChange = { expanded = it },
) {
    OutlinedTextField(
        value = value,
        onValueChange = { value = it },
        trailingIcon = {
            ExposedDropdownMenuDefaults.TrailingIcon(expanded)
        },
        modifier = Modifier.menuAnchor(),
    )
    ExposedDropdownMenu(
        expanded = expanded,
        onDismissRequest = { expanded = false },
    ) {
        listOf("Kotlin", "Swift", "Dart").forEach {
            DropdownMenuItem(
                text = { Text(it) },
                onClick = { value = it; expanded = false },
            )
        }
    }
}`,
    preview: (
      <div className="relative w-56">
        <Input aria-label="Language" defaultValue="Kotlin" className="pr-9" />
        <ChevronDown className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-quantity-unit",
    name: "Quantity unit",
    category: "inputs",
    description:
      "Quantity field with an attached unit selector for entering measured amounts.",
    tags: ["number"],
    code: `var qty by remember { mutableStateOf("") }
var unit by remember { mutableStateOf("g") }
OutlinedTextField(
    value = qty,
    onValueChange = { qty = it.filter(Char::isDigit) },
    trailingIcon = {
        TextButton(onClick = {
            unit = if (unit == "g") "kg" else "g"
        }) { Text(unit) }
    },
    placeholder = { Text("0") },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Number,
    ),
    singleLine = true,
)`,
    preview: (
      <div className="relative w-56">
        <Input aria-label="Quantity" defaultValue="250" inputMode="numeric" className="pr-12" />
        <button
          type="button"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md bg-muted px-2 py-1 text-xs font-medium"
        >
          g
        </button>
      </div>
    ),
  },
  {
    id: "input-search-scope",
    name: "Scoped search",
    category: "inputs",
    description:
      "Search field led by a scope selector so queries target a chosen category.",
    tags: ["icon"],
    code: `var q by remember { mutableStateOf("") }
var scope by remember { mutableStateOf("All") }
OutlinedTextField(
    value = q,
    onValueChange = { q = it },
    leadingIcon = {
        TextButton(onClick = {
            scope = if (scope == "All") "Docs" else "All"
        }) {
            Text(scope)
            Icon(Icons.Filled.ArrowDropDown, contentDescription = null)
        }
    },
    placeholder = { Text("Search…") },
    shape = RoundedCornerShape(50),
    singleLine = true,
)`,
    preview: (
      <div className="flex w-64 items-center rounded-full border border-input pl-1.5">
        <button
          type="button"
          className="inline-flex items-center gap-0.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium"
        >
          Docs
          <ChevronDown className="size-3 text-muted-foreground" />
        </button>
        <Search className="ml-2 size-4 text-muted-foreground" />
        <input
          aria-label="Search"
          placeholder="Search…"
          className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
    ),
  },
  {
    id: "input-passcode-reveal",
    name: "Passcode reveal",
    category: "inputs",
    description:
      "Password field whose masking dots cross-fade to plain text on a reveal toggle.",
    tags: ["icon", "animated"],
    code: `var pw by remember { mutableStateOf("hunter2") }
var visible by remember { mutableStateOf(false) }
OutlinedTextField(
    value = pw,
    onValueChange = { pw = it },
    leadingIcon = { Icon(Icons.Filled.Lock, contentDescription = null) },
    visualTransformation = if (visible)
        VisualTransformation.None
    else PasswordVisualTransformation(),
    trailingIcon = {
        IconButton(onClick = { visible = !visible }) {
            Icon(
                if (visible) Icons.Filled.VisibilityOff
                else Icons.Filled.Visibility,
                contentDescription = "Toggle",
            )
        }
    },
    singleLine = true,
)`,
    preview: (
      <div className="relative w-56">
        <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input aria-label="Password" defaultValue="hunter2" className="px-9" />
        <Eye className="animate-fade-in absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "input-coupon",
    name: "Coupon apply",
    category: "inputs",
    description:
      "Promo-code field with an inline Apply button that flips to a success state.",
    tags: ["validation"],
    code: `var code by remember { mutableStateOf("") }
var applied by remember { mutableStateOf(false) }
OutlinedTextField(
    value = code,
    onValueChange = { code = it.uppercase() },
    placeholder = { Text("Promo code") },
    trailingIcon = {
        if (applied) {
            Icon(
                Icons.Filled.CheckCircle,
                contentDescription = "Applied",
                tint = Color(0xFF16A34A),
            )
        } else {
            TextButton(onClick = { applied = true }) { Text("Apply") }
        }
    },
    singleLine = true,
)`,
    preview: (
      <div className="relative w-56">
        <Input aria-label="Promo code" defaultValue="CAVE20" className="pr-20 uppercase" />
        <button
          type="button"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-md px-2.5 py-1 text-sm font-medium text-primary hover:bg-primary/10"
        >
          Apply
        </button>
      </div>
    ),
  },
  {
    id: "input-weight",
    name: "Measurement toggle",
    category: "inputs",
    description:
      "Measurement field with a leading icon and a unit toggle between metric and imperial.",
    tags: ["icon", "number"],
    code: `var value by remember { mutableStateOf("") }
var metric by remember { mutableStateOf(true) }
OutlinedTextField(
    value = value,
    onValueChange = { value = it },
    leadingIcon = {
        Icon(Icons.Filled.Straighten, contentDescription = null)
    },
    suffix = { Text(if (metric) "kg" else "lb") },
    trailingIcon = {
        IconButton(onClick = { metric = !metric }) {
            Icon(Icons.Filled.SwapHoriz, contentDescription = "Unit")
        }
    },
    keyboardOptions = KeyboardOptions(
        keyboardType = KeyboardType.Decimal,
    ),
    singleLine = true,
)`,
    preview: (
      <div className="relative w-56">
        <Ruler className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input aria-label="Weight" defaultValue="72.5" inputMode="decimal" className="pl-9 pr-12" />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
          kg
        </span>
      </div>
    ),
  },
  {
    id: "input-bio",
    name: "Bio with counter",
    category: "inputs",
    description:
      "Labeled bio textarea pairing helper text with a right-aligned character counter.",
    code: `var bio by remember { mutableStateOf("") }
val max = 160
Column {
    OutlinedTextField(
        value = bio,
        onValueChange = { if (it.length <= max) bio = it },
        label = { Text("Bio") },
        minLines = 3,
        supportingText = {
            Row(Modifier.fillMaxWidth()) {
                Text("Tell people about yourself")
                Spacer(Modifier.weight(1f))
                Text("\${bio.length}/\$max")
            }
        },
    )
}`,
    preview: (
      <div className="grid w-60 gap-1.5">
        <Label htmlFor="bio">Bio</Label>
        <textarea
          id="bio"
          rows={3}
          defaultValue="Android dev who loves Compose."
          className="resize-none rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Tell people about yourself</span>
          <span className="tabular-nums">30/160</span>
        </div>
      </div>
    ),
  },
  {
    id: "input-location",
    name: "Location",
    category: "inputs",
    description:
      "Address field with a pin icon and a trailing detect-my-location action.",
    tags: ["icon"],
    code: `var address by remember { mutableStateOf("") }
OutlinedTextField(
    value = address,
    onValueChange = { address = it },
    leadingIcon = {
        Icon(Icons.Filled.LocationOn, contentDescription = null)
    },
    trailingIcon = {
        IconButton(onClick = { /* detect */ }) {
            Icon(
                Icons.Filled.MyLocation,
                contentDescription = "Use my location",
            )
        }
    },
    placeholder = { Text("Search address…") },
    singleLine = true,
)`,
    preview: (
      <div className="relative w-60">
        <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input aria-label="Location" placeholder="Search address…" className="px-9" />
        <button
          type="button"
          aria-label="Use my location"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80"
        >
          <MapPin className="size-4" />
        </button>
      </div>
    ),
  },
  {
    id: "input-price-range",
    name: "Price range",
    category: "inputs",
    description:
      "Min and max currency fields with dollar prefixes for filtering by price.",
    tags: ["number"],
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    OutlinedTextField(
        value = min,
        onValueChange = { min = it },
        prefix = { Text("$") },
        placeholder = { Text("Min") },
        modifier = Modifier.weight(1f),
        singleLine = true,
    )
    Text("-", modifier = Modifier.padding(horizontal = 8.dp))
    OutlinedTextField(
        value = max,
        onValueChange = { max = it },
        prefix = { Text("$") },
        placeholder = { Text("Max") },
        modifier = Modifier.weight(1f),
        singleLine = true,
    )
}`,
    preview: (
      <div className="flex w-64 items-center gap-2">
        <div className="relative flex-1">
          <DollarSign className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input aria-label="Min price" defaultValue="20" inputMode="numeric" className="pl-7" />
        </div>
        <span className="text-muted-foreground">-</span>
        <div className="relative flex-1">
          <DollarSign className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input aria-label="Max price" defaultValue="80" inputMode="numeric" className="pl-7" />
        </div>
      </div>
    ),
  },
  {
    id: "input-feedback",
    name: "Rated feedback",
    category: "inputs",
    description:
      "Combined star rating and comment field for capturing a review in one block.",
    tags: ["icon"],
    code: `var rating by remember { mutableIntStateOf(4) }
var comment by remember { mutableStateOf("") }
Column {
    Row {
        repeat(5) { i ->
            IconButton(onClick = { rating = i + 1 }) {
                Icon(
                    Icons.Filled.Star,
                    contentDescription = null,
                    tint = if (i < rating) Color(0xFFF59E0B)
                    else MaterialTheme.colorScheme.outline,
                )
            }
        }
    }
    OutlinedTextField(
        value = comment,
        onValueChange = { comment = it },
        placeholder = { Text("Tell us more…") },
        minLines = 2,
    )
}`,
    preview: (
      <div className="grid w-60 gap-2">
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className={`size-5 ${i < 4 ? "fill-amber-500 text-amber-500" : "text-muted-foreground/40"}`}
            />
          ))}
        </div>
        <textarea
          aria-label="Comment"
          rows={2}
          placeholder="Tell us more…"
          className="resize-none rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
        />
      </div>
    ),
  },
  {
    id: "input-command",
    name: "Command field",
    category: "inputs",
    description:
      "Command-palette style field with a leading glyph and a keyboard return hint.",
    tags: ["icon"],
    code: `var cmd by remember { mutableStateOf("") }
OutlinedTextField(
    value = cmd,
    onValueChange = { cmd = it },
    leadingIcon = {
        Icon(Icons.Filled.Bolt, contentDescription = null)
    },
    trailingIcon = {
        Surface(
            shape = MaterialTheme.shapes.small,
            color = MaterialTheme.colorScheme.surfaceVariant,
        ) {
            Text(
                "↵",
                modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
            )
        }
    },
    placeholder = { Text("Type a command…") },
    singleLine = true,
)`,
    preview: (
      <div className="relative w-60">
        <Command className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input aria-label="Command" placeholder="Type a command…" className="pl-9 pr-10" />
        <kbd className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center rounded border border-input bg-muted px-1.5 text-xs text-muted-foreground">
          <CornerDownLeft className="size-3" />
        </kbd>
      </div>
    ),
  },
];
