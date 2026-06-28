import { Bell, Check, CheckCircle, Heart, Moon, Star, Sun } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { Variant } from "./types";

export const toggles: Variant[] = [
  {
    id: "toggle-switch",
    name: "Switch",
    category: "toggles",
    code: `var checked by remember { mutableStateOf(false) }
CaveSwitch(checked = checked, onCheckedChange = { checked = it })`,
    preview: <Switch />,
  },
  {
    id: "toggle-switch-on",
    name: "Switch (on)",
    category: "toggles",
    code: `var checked by remember { mutableStateOf(true) }
CaveSwitch(checked = checked, onCheckedChange = { checked = it })`,
    preview: <Switch defaultChecked />,
  },
  {
    id: "toggle-labeled",
    name: "Labeled row",
    category: "toggles",
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    Text("Dark mode", Modifier.weight(1f))
    CaveSwitch(checked = checked, onCheckedChange = { checked = it })
}`,
    preview: (
      <div className="flex w-48 items-center justify-between">
        <Label htmlFor="dm">Dark mode</Label>
        <Switch id="dm" defaultChecked />
      </div>
    ),
  },
  {
    id: "toggle-disabled",
    name: "Disabled",
    category: "toggles",
    code: `CaveSwitch(checked = false, onCheckedChange = {}, enabled = false)`,
    preview: <Switch disabled />,
  },
  {
    id: "toggle-segmented",
    name: "Segmented",
    category: "toggles",
    code: `CaveSegmented(
    options = listOf("Day", "Week", "Month"),
    selected = 0,
    onSelect = {},
)`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1 text-sm">
        <span className="rounded-md bg-background px-3 py-1 font-medium shadow-sm">Day</span>
        <span className="px-3 py-1 text-muted-foreground">Week</span>
        <span className="px-3 py-1 text-muted-foreground">Month</span>
      </div>
    ),
  },
  {
    id: "toggle-ios",
    name: "iOS style",
    category: "toggles",
    tags: ["animated"],
    code: `// Custom track + animated knob
CaveIosSwitch(checked = true, onCheckedChange = {})`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-emerald-500 px-0.5">
        <span className="size-6 translate-x-5 rounded-full bg-white shadow transition-transform" />
      </span>
    ),
  },
  {
    id: "toggle-sizes",
    name: "Sizes",
    category: "toggles",
    code: `Row(horizontalArrangement = Arrangement.spacedBy(20.dp)) {
    CaveSwitch(checked = true, onCheckedChange = {}, size = CaveSwitchSize.Small)
    CaveSwitch(checked = true, onCheckedChange = {})
    CaveSwitch(checked = true, onCheckedChange = {}, size = CaveSwitchSize.Large)
}`,
    preview: (
      <div className="flex items-center gap-5">
        <Switch size="sm" defaultChecked />
        <Switch defaultChecked />
        <Switch className="scale-125" defaultChecked />
      </div>
    ),
  },
  {
    id: "toggle-emerald",
    name: "Colored track",
    category: "toggles",
    code: `CaveSwitch(
    checked = checked,
    onCheckedChange = { checked = it },
    colors = CaveSwitchDefaults.colors(checkedTrack = Color(0xFF10B981)),
)`,
    preview: (
      <div className="flex items-center gap-3">
        <span className="inline-flex h-6 w-11 items-center rounded-full bg-input px-0.5">
          <span className="size-5 rounded-full bg-background shadow" />
        </span>
        <span className="inline-flex h-6 w-11 items-center rounded-full bg-emerald-500 px-0.5">
          <span className="size-5 translate-x-5 rounded-full bg-white shadow transition-transform" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-notification",
    name: "Notification row",
    category: "toggles",
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    Icon(Icons.Filled.Notifications, contentDescription = null)
    Spacer(Modifier.width(12.dp))
    Text("Notifications", Modifier.weight(1f))
    CaveSwitch(checked = checked, onCheckedChange = { checked = it })
}`,
    preview: (
      <div className="flex w-56 items-center gap-3">
        <Bell className="size-4 text-muted-foreground" />
        <Label htmlFor="notif" className="flex-1">Notifications</Label>
        <Switch id="notif" defaultChecked />
      </div>
    ),
  },
  {
    id: "toggle-setting-desc",
    name: "Setting with description",
    category: "toggles",
    code: `Row(verticalAlignment = Alignment.CenterVertically) {
    Column(Modifier.weight(1f)) {
        Text("Auto-update", style = MaterialTheme.typography.bodyMedium)
        Text(
            "Download updates automatically",
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
    }
    CaveSwitch(checked = checked, onCheckedChange = { checked = it })
}`,
    preview: (
      <div className="flex w-64 items-center justify-between gap-4">
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Auto-update</p>
          <p className="text-xs text-muted-foreground">Download updates automatically</p>
        </div>
        <Switch defaultChecked />
      </div>
    ),
  },
  {
    id: "toggle-segmented-2",
    name: "Segmented (2)",
    category: "toggles",
    code: `CaveSegmented(
    options = listOf("List", "Grid"),
    selected = 0,
    onSelect = {},
)`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1 text-sm">
        <span className="rounded-md bg-primary px-4 py-1 font-medium text-primary-foreground">List</span>
        <span className="px-4 py-1 text-muted-foreground">Grid</span>
      </div>
    ),
  },
  {
    id: "toggle-segmented-4",
    name: "Segmented (4)",
    category: "toggles",
    code: `CaveSegmented(
    options = listOf("XS", "S", "M", "L"),
    selected = 0,
    onSelect = {},
)`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1 text-xs">
        <span className="rounded-md bg-primary px-3 py-1 font-medium text-primary-foreground">XS</span>
        <span className="px-3 py-1 text-muted-foreground">S</span>
        <span className="px-3 py-1 text-muted-foreground">M</span>
        <span className="px-3 py-1 text-muted-foreground">L</span>
      </div>
    ),
  },
  {
    id: "toggle-yes-no",
    name: "Yes / No",
    category: "toggles",
    code: `CaveSegmented(
    options = listOf("Yes", "No"),
    selected = 0,
    onSelect = {},
)`,
    preview: (
      <div className="inline-flex overflow-hidden rounded-lg border text-sm">
        <span className="bg-primary px-5 py-1.5 font-medium text-primary-foreground">Yes</span>
        <span className="border-l px-5 py-1.5 text-muted-foreground">No</span>
      </div>
    ),
  },
  {
    id: "toggle-pill-tabs",
    name: "Pill tabs",
    category: "toggles",
    code: `CavePillTabs(
    tabs = listOf("All", "Active", "Done"),
    selected = 0,
    onSelect = {},
)`,
    preview: (
      <div className="inline-flex rounded-full bg-muted p-1 text-sm">
        <span className="rounded-full bg-primary px-4 py-1 font-medium text-primary-foreground">All</span>
        <span className="rounded-full px-4 py-1 text-muted-foreground">Active</span>
        <span className="rounded-full px-4 py-1 text-muted-foreground">Done</span>
      </div>
    ),
  },
  {
    id: "toggle-checkbox",
    name: "Checkbox",
    category: "toggles",
    code: `var checked by remember { mutableStateOf(true) }
Row(verticalAlignment = Alignment.CenterVertically) {
    CaveCheckbox(checked = checked, onCheckedChange = { checked = it })
    Spacer(Modifier.width(8.dp))
    Text("Accept terms")
}`,
    preview: (
      <div className="flex items-center gap-2">
        <span className="flex size-5 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
        <span className="text-sm">Accept terms</span>
      </div>
    ),
  },
  {
    id: "toggle-checkbox-group",
    name: "Checkbox group",
    category: "toggles",
    code: `Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
    channels.forEach { channel ->
        Row(verticalAlignment = Alignment.CenterVertically) {
            CaveCheckbox(
                checked = channel in selected,
                onCheckedChange = { toggle(channel) },
            )
            Spacer(Modifier.width(8.dp))
            Text(channel)
        }
    }
}`,
    preview: (
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <span>Email</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
            <Check className="size-3.5" strokeWidth={3} />
          </span>
          <span>SMS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-5 rounded-[6px] border-2 border-input" />
          <span className="text-muted-foreground">Push</span>
        </div>
      </div>
    ),
  },
  {
    id: "toggle-radio",
    name: "Radio group",
    category: "toggles",
    code: `var selected by remember { mutableStateOf("Standard") }
Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
    listOf("Standard", "Express", "Overnight").forEach { option ->
        Row(verticalAlignment = Alignment.CenterVertically) {
            CaveRadioButton(
                selected = option == selected,
                onClick = { selected = option },
            )
            Spacer(Modifier.width(8.dp))
            Text(option)
        }
    }
}`,
    preview: (
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-full border-2 border-primary">
            <span className="size-2.5 rounded-full bg-primary" />
          </span>
          <span>Standard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-5 rounded-full border-2 border-input" />
          <span className="text-muted-foreground">Express</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-5 rounded-full border-2 border-input" />
          <span className="text-muted-foreground">Overnight</span>
        </div>
      </div>
    ),
  },
  {
    id: "toggle-heart",
    name: "Like",
    category: "toggles",
    tags: ["animated"],
    code: `var liked by remember { mutableStateOf(true) }
IconToggleButton(checked = liked, onCheckedChange = { liked = it }) {
    Icon(
        imageVector = if (liked) Icons.Filled.Favorite else Icons.Outlined.FavoriteBorder,
        contentDescription = "Like",
        tint = Color(0xFFF43F5E),
    )
}`,
    preview: (
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-500/10">
        <Heart className="size-5 fill-rose-500 text-rose-500 transition-transform" />
      </span>
    ),
  },
  {
    id: "toggle-stars",
    name: "Star rating",
    category: "toggles",
    code: `var rating by remember { mutableStateOf(3) }
Row {
    (1..5).forEach { index ->
        IconToggleButton(
            checked = index <= rating,
            onCheckedChange = { rating = index },
        ) {
            Icon(
                imageVector = if (index <= rating) Icons.Filled.Star else Icons.Outlined.StarBorder,
                contentDescription = null,
                tint = Color(0xFFFBBF24),
            )
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={
              i <= 3 ? "size-5 fill-amber-400 text-amber-400" : "size-5 text-muted-foreground/40"
            }
          />
        ))}
      </div>
    ),
  },
  {
    id: "toggle-theme",
    name: "Theme toggle",
    category: "toggles",
    tags: ["animated"],
    code: `var dark by remember { mutableStateOf(false) }
IconToggleButton(checked = dark, onCheckedChange = { dark = it }) {
    Icon(
        imageVector = if (dark) Icons.Filled.DarkMode else Icons.Filled.LightMode,
        contentDescription = "Toggle theme",
    )
}`,
    preview: (
      <div className="inline-flex items-center rounded-full border bg-muted p-1">
        <span className="flex size-7 items-center justify-center rounded-full bg-background text-foreground shadow-sm">
          <Sun className="size-4" />
        </span>
        <span className="flex size-7 items-center justify-center rounded-full text-muted-foreground">
          <Moon className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-card-select",
    name: "Selectable card",
    category: "toggles",
    code: `var selected by remember { mutableStateOf(true) }
CaveSelectableCard(
    selected = selected,
    onSelectedChange = { selected = it },
    title = "Pro plan",
    subtitle = "Billed monthly",
)`,
    preview: (
      <div className="flex w-44 items-center justify-between rounded-lg border-2 border-primary bg-primary/5 px-3 py-2">
        <div>
          <p className="text-sm font-medium">Pro plan</p>
          <p className="text-xs text-muted-foreground">$12 / mo</p>
        </div>
        <CheckCircle className="size-5 text-primary" />
      </div>
    ),
  },
  {
    id: "toggle-icon-button",
    name: "Icon toggle",
    category: "toggles",
    code: `var enabled by remember { mutableStateOf(true) }
IconToggleButton(checked = enabled, onCheckedChange = { enabled = it }) {
    Icon(Icons.Filled.Notifications, contentDescription = "Notifications")
}`,
    preview: (
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Bell className="size-4" />
        </span>
        <span className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground">
          <Bell className="size-4" />
        </span>
      </div>
    ),
  },
];
