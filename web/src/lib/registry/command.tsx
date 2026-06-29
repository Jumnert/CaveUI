import { ArrowRight, ChevronRight, Clock, FileText, Search, Settings, Sparkles, User, Zap } from "lucide-react";
import type { Variant } from "./types";

export const command: Variant[] = [
  {
    id: "command-palette",
    name: "Command palette",
    category: "command",
    description: "A search field over a filtered, scrollable list of actions.",
    tags: [],
    code: `@Composable
fun CommandPalette(actions: List<String>) {
    var query by remember { mutableStateOf("") }
    val results = remember(query) {
        actions.filter { it.contains(query, ignoreCase = true) }
    }
    Card(shape = RoundedCornerShape(16.dp)) {
        Column {
            Row(
                Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(Icons.Filled.Search, contentDescription = null)
                Spacer(Modifier.width(12.dp))
                BasicTextField(
                    value = query,
                    onValueChange = { query = it },
                    singleLine = true,
                    modifier = Modifier.weight(1f),
                    textStyle = LocalTextStyle.current.copy(
                        color = MaterialTheme.colorScheme.onSurface,
                    ),
                    decorationBox = { inner ->
                        if (query.isEmpty()) {
                            Text(
                                "Type a command",
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                            )
                        }
                        inner()
                    },
                )
            }
            HorizontalDivider()
            LazyColumn(Modifier.heightIn(max = 220.dp)) {
                items(results) { action ->
                    ListItem(
                        headlineContent = { Text(action) },
                        leadingContent = {
                            Icon(Icons.Outlined.Bolt, contentDescription = null)
                        },
                        modifier = Modifier.clickable { },
                    )
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-2xl border bg-popover text-left shadow-lg">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <Search className="size-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Type a command</span>
        </div>
        <div className="py-1">
          <div className="flex items-center gap-2 bg-accent px-4 py-2 text-xs text-foreground">
            <Zap className="size-3.5 text-primary" />
            New file
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-xs text-foreground">
            <Zap className="size-3.5 text-muted-foreground" />
            Open settings
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "command-recents",
    name: "Recents and suggestions",
    category: "command",
    description: "A quick-search sheet that groups recent items above suggestions.",
    tags: [],
    code: `@Composable
fun QuickSearch() {
    Card(shape = RoundedCornerShape(16.dp)) {
        Column(Modifier.padding(vertical = 8.dp)) {
            SectionLabel("Recent")
            listOf("Invoices", "Team settings").forEach { item ->
                SearchRow(Icons.Filled.History, item)
            }
            SectionLabel("Suggestions")
            listOf("Create invoice", "Invite teammate").forEach { item ->
                SearchRow(Icons.Filled.Bolt, item)
            }
        }
    }
}

@Composable
private fun SectionLabel(text: String) {
    Text(
        text,
        modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp),
        color = MaterialTheme.colorScheme.onSurfaceVariant,
        style = MaterialTheme.typography.labelSmall,
    )
}

@Composable
private fun SearchRow(icon: ImageVector, label: String) {
    ListItem(
        headlineContent = { Text(label) },
        leadingContent = { Icon(icon, contentDescription = null) },
        modifier = Modifier.clickable { },
    )
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-2xl border bg-popover py-2 text-left shadow-lg">
        <p className="px-4 py-1 text-[10px] font-medium text-muted-foreground">Recent</p>
        <div className="flex items-center gap-2 px-4 py-1.5 text-xs text-foreground">
          <Clock className="size-3.5 text-muted-foreground" />
          Invoices
        </div>
        <p className="px-4 py-1 text-[10px] font-medium text-muted-foreground">Suggestions</p>
        <div className="flex items-center gap-2 px-4 py-1.5 text-xs text-foreground">
          <Zap className="size-3.5 text-muted-foreground" />
          Create invoice
        </div>
      </div>
    ),
  },
  {
    id: "command-key-hints",
    name: "Key hints footer",
    category: "command",
    description: "A palette footer listing keyboard hints for navigate, open and close.",
    tags: [],
    code: `@Composable
fun PaletteFooter() {
    Surface(color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)) {
        Row(
            Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            KeyHint("Tab", "Navigate")
            KeyHint("Enter", "Open")
            KeyHint("Esc", "Close")
        }
    }
}

@Composable
private fun KeyHint(keys: String, label: String) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Surface(
            color = MaterialTheme.colorScheme.surface,
            shape = RoundedCornerShape(4.dp),
            border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant),
        ) {
            Text(
                keys,
                Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
                style = MaterialTheme.typography.labelSmall,
            )
        }
        Spacer(Modifier.width(6.dp))
        Text(
            label,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            style = MaterialTheme.typography.labelSmall,
        )
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-3 rounded-lg bg-muted/50 px-3 py-2 text-[10px] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <kbd className="rounded border bg-background px-1">↑</kbd>
          <kbd className="rounded border bg-background px-1">↓</kbd>
          Navigate
        </span>
        <span className="inline-flex items-center gap-1">
          <kbd className="rounded border bg-background px-1">↵</kbd>
          Open
        </span>
        <span className="inline-flex items-center gap-1">
          <kbd className="rounded border bg-background px-1">esc</kbd>
          Close
        </span>
      </div>
    ),
  },
  {
    id: "command-trigger",
    name: "Search trigger",
    category: "command",
    description: "The entry-point search button that shows the shortcut and opens the palette.",
    tags: [],
    code: `@Composable
fun CommandTrigger(onOpen: () -> Unit) {
    Surface(
        onClick = onOpen,
        shape = CircleShape,
        color = MaterialTheme.colorScheme.surfaceVariant,
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant),
    ) {
        Row(
            Modifier.padding(start = 14.dp, end = 8.dp, top = 8.dp, bottom = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Icon(Icons.Filled.Search, null, Modifier.size(16.dp),
                tint = MaterialTheme.colorScheme.onSurfaceVariant)
            Spacer(Modifier.width(8.dp))
            Text("Search", Modifier.weight(1f),
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                style = MaterialTheme.typography.bodyMedium)
            Spacer(Modifier.width(24.dp))
            Surface(color = MaterialTheme.colorScheme.surface,
                shape = RoundedCornerShape(6.dp)) {
                Text("\u2318K", Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
                    style = MaterialTheme.typography.labelSmall)
            }
        }
    }
}`,
    preview: (
      <div className="flex w-52 items-center gap-2 rounded-full border bg-muted px-3.5 py-2">
        <Search className="size-4 text-muted-foreground" />
        <span className="flex-1 text-xs text-muted-foreground">Search</span>
        <kbd className="rounded-md border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">⌘K</kbd>
      </div>
    ),
  },
  {
    id: "command-grouped",
    name: "Grouped results",
    category: "command",
    description: "A palette that splits results into labelled groups with trailing shortcuts.",
    tags: [],
    code: `@Composable
fun GroupedPalette() {
    Card(shape = RoundedCornerShape(16.dp)) {
        Column(Modifier.padding(vertical = 8.dp)) {
            Text("Actions", Modifier.padding(horizontal = 16.dp, vertical = 6.dp),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
            CommandRow(Icons.Filled.Add, "New document", "\u2318N")
            CommandRow(Icons.Filled.Upload, "Import", "\u2318I")
            Text("Navigation", Modifier.padding(horizontal = 16.dp, vertical = 6.dp),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
            CommandRow(Icons.Filled.Settings, "Settings", "\u2318,")
        }
    }
}

@Composable
private fun CommandRow(icon: ImageVector, label: String, shortcut: String) {
    ListItem(
        leadingContent = { Icon(icon, null) },
        headlineContent = { Text(label) },
        trailingContent = {
            Text(shortcut, style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
        },
        modifier = Modifier.clickable {},
    )
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-2xl border bg-popover py-2 text-left shadow-lg text-xs">
        <p className="px-4 pb-1 text-[10px] font-medium text-muted-foreground">Actions</p>
        <div className="flex items-center gap-2 px-4 py-1.5 text-foreground"><FileText className="size-3.5 text-muted-foreground" /> New document <kbd className="ml-auto rounded border bg-background px-1 text-[9px]">⌘N</kbd></div>
        <p className="px-4 pb-1 pt-1.5 text-[10px] font-medium text-muted-foreground">Navigation</p>
        <div className="flex items-center gap-2 px-4 py-1.5 text-foreground"><Settings className="size-3.5 text-muted-foreground" /> Settings <kbd className="ml-auto rounded border bg-background px-1 text-[9px]">⌘,</kbd></div>
      </div>
    ),
  },
  {
    id: "command-empty",
    name: "No results",
    category: "command",
    description: "A palette empty state that echoes the query and offers a fallback action.",
    tags: [],
    code: `@Composable
fun CommandEmpty(query: String) {
    Column(
        Modifier.fillMaxWidth().padding(28.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Icon(Icons.Filled.SearchOff, null, Modifier.size(36.dp),
            tint = MaterialTheme.colorScheme.onSurfaceVariant)
        Text("No results for \\"$query\\"", Modifier.padding(top = 8.dp),
            style = MaterialTheme.typography.bodyMedium)
        TextButton(onClick = {}, modifier = Modifier.padding(top = 4.dp)) {
            Icon(Icons.Filled.Add, null, Modifier.size(16.dp))
            Spacer(Modifier.width(6.dp))
            Text("Create \\"$query\\"")
        }
    }
}`,
    preview: (
      <div className="flex w-56 flex-col items-center gap-2 rounded-2xl border bg-popover p-6 text-center shadow-lg">
        <Search className="size-7 text-muted-foreground" />
        <p className="text-xs text-foreground">No results for &quot;reprt&quot;</p>
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
          <ArrowRight className="size-3.5" /> Create &quot;reprt&quot;
        </span>
      </div>
    ),
  },
  {
    id: "command-ask-ai",
    name: "Ask AI",
    category: "command",
    description: "A palette row that hands the typed query to an assistant with a send affordance.",
    tags: [],
    code: `@Composable
fun AskAiRow(query: String, onAsk: () -> Unit) {
    val accent = Color(0xFF8B5CF6)
    Surface(
        onClick = onAsk,
        color = accent.copy(alpha = 0.08f),
        shape = RoundedCornerShape(12.dp),
    ) {
        Row(
            Modifier.fillMaxWidth().padding(12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Icon(Icons.Filled.AutoAwesome, null, tint = accent)
            Spacer(Modifier.width(10.dp))
            Column(Modifier.weight(1f)) {
                Text("Ask AI", style = MaterialTheme.typography.labelSmall,
                    color = accent)
                Text(query.ifEmpty { "Anything..." },
                    style = MaterialTheme.typography.bodyMedium)
            }
            Icon(Icons.AutoMirrored.Filled.Send, null, Modifier.size(18.dp),
                tint = accent)
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-2.5 rounded-xl bg-violet-500/10 p-3">
        <Sparkles className="size-4 text-violet-500" />
        <div className="flex-1">
          <p className="text-[10px] font-medium text-violet-500">Ask AI</p>
          <p className="text-xs text-foreground">summarize this thread</p>
        </div>
        <ArrowRight className="size-4 text-violet-500" />
      </div>
    ),
  },
  {
    id: "command-scoped",
    name: "Scoped search",
    category: "command",
    description: "A palette input prefixed with a removable scope chip narrowing the search.",
    tags: [],
    code: `@Composable
fun ScopedSearch(scope: String, onClearScope: () -> Unit) {
    var query by remember { mutableStateOf("") }
    Card(shape = RoundedCornerShape(16.dp)) {
        Row(Modifier.padding(12.dp), verticalAlignment = Alignment.CenterVertically) {
            InputChip(
                selected = true,
                onClick = onClearScope,
                label = { Text(scope) },
                trailingIcon = { Icon(Icons.Filled.Close, null, Modifier.size(16.dp)) },
            )
            Spacer(Modifier.width(8.dp))
            BasicTextField(
                value = query,
                onValueChange = { query = it },
                singleLine = true,
                modifier = Modifier.weight(1f),
                decorationBox = { inner ->
                    if (query.isEmpty()) Text("Search in $scope",
                        color = MaterialTheme.colorScheme.onSurfaceVariant)
                    inner()
                },
            )
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center gap-2 rounded-2xl border bg-popover p-3 shadow-lg">
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-[10px] font-medium text-secondary-foreground">
          Settings <span className="text-muted-foreground">×</span>
        </span>
        <span className="text-xs text-muted-foreground">Search in Settings</span>
      </div>
    ),
  },
  {
    id: "command-people",
    name: "Jump to person",
    category: "command",
    description: "A people-search section that lists teammates with avatars to jump to.",
    tags: [],
    code: `@Composable
fun PeopleJump(people: List<Pair<String, String>>) {
    Card(shape = RoundedCornerShape(16.dp)) {
        Column(Modifier.padding(vertical = 8.dp)) {
            Text("People", Modifier.padding(horizontal = 16.dp, vertical = 6.dp),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
            people.forEach { (name, role) ->
                ListItem(
                    leadingContent = {
                        Surface(shape = CircleShape, color = Color(0xFF6366F1),
                            modifier = Modifier.size(28.dp)) {}
                    },
                    headlineContent = { Text(name) },
                    supportingContent = { Text(role) },
                    modifier = Modifier.clickable {},
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-2xl border bg-popover py-2 text-left shadow-lg">
        <p className="px-4 pb-1 text-[10px] font-medium text-muted-foreground">People</p>
        {[["Priya Anand", "Design"], ["Diego Klein", "Engineering"]].map(([n, r]) => (
          <div key={n} className="flex items-center gap-2.5 px-4 py-1.5">
            <span className="size-7 rounded-full bg-indigo-500" />
            <div>
              <p className="text-xs font-medium text-foreground">{n}</p>
              <p className="text-[10px] text-muted-foreground">{r}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "command-loading",
    name: "Searching state",
    category: "command",
    description: "A palette showing a spinner and status line while results are being fetched.",
    tags: ["animated"],
    code: `@Composable
fun SearchingState(query: String) {
    Card(shape = RoundedCornerShape(16.dp)) {
        Column {
            Row(
                Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(Icons.Filled.Search, null)
                Spacer(Modifier.width(12.dp))
                Text(query, Modifier.weight(1f))
            }
            HorizontalDivider()
            Row(
                Modifier.fillMaxWidth().padding(24.dp),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                CircularProgressIndicator(Modifier.size(18.dp), strokeWidth = 2.dp)
                Spacer(Modifier.width(10.dp))
                Text("Searching\u2026",
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    style = MaterialTheme.typography.bodySmall)
            }
        }
    }
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-2xl border bg-popover text-left shadow-lg">
        <div className="flex items-center gap-2 border-b px-4 py-3 text-xs text-foreground">
          <Search className="size-4 text-muted-foreground" /> quarterly report
        </div>
        <div className="flex items-center justify-center gap-2 py-6 text-[11px] text-muted-foreground">
          <span className="size-4 animate-spin rounded-full border-2 border-muted border-t-primary" />
          Searching…
        </div>
      </div>
    ),
  },
  {
    id: "command-subpage",
    name: "Command subpage",
    category: "command",
    description: "A drilled-in command page with a back scope breadcrumb above its sub-actions.",
    tags: [],
    code: `@Composable
fun CommandSubpage(onBack: () -> Unit) {
    Card(shape = RoundedCornerShape(16.dp)) {
        Column(Modifier.padding(vertical = 8.dp)) {
            Row(
                Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back",
                        Modifier.size(18.dp))
                }
                Text("Change theme", style = MaterialTheme.typography.labelMedium)
            }
            HorizontalDivider()
            listOf("Light", "Dark", "System").forEach { opt ->
                ListItem(
                    headlineContent = { Text(opt) },
                    leadingContent = { Icon(Icons.Outlined.Circle, null,
                        Modifier.size(18.dp)) },
                    modifier = Modifier.clickable {},
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-2xl border bg-popover py-1 text-left shadow-lg text-xs">
        <div className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] text-muted-foreground">
          <ChevronRight className="size-3.5 rotate-180" /> Change theme
        </div>
        <div className="border-t py-1">
          <div className="bg-accent px-4 py-1.5 text-foreground">Light</div>
          <div className="px-4 py-1.5 text-foreground">Dark</div>
          <div className="px-4 py-1.5 text-foreground">System</div>
        </div>
      </div>
    ),
  },
];
