import {
  Calendar,
  Check,
  DollarSign,
  Eye,
  Mail,
  Minus,
  Plus,
  Search,
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
];
