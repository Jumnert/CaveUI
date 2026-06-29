import { Check, ChevronRight, Copy, Download, LogOut, Pencil, Plus, Settings, Share2, Star, Trash2, User } from "lucide-react";
import type { Variant } from "./types";

export const menus: Variant[] = [
  {
    id: "menu-dropdown",
    name: "Dropdown menu",
    category: "menus",
    description: "A button-anchored dropdown with a divided destructive action.",
    tags: [],
    code: `@Composable
fun OptionsMenu() {
    var expanded by remember { mutableStateOf(false) }
    Box {
        TextButton(onClick = { expanded = true }) {
            Text("Options")
            Icon(Icons.Filled.ArrowDropDown, contentDescription = null)
        }
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
        ) {
            DropdownMenuItem(
                text = { Text("Profile") },
                onClick = { expanded = false },
            )
            DropdownMenuItem(
                text = { Text("Billing") },
                onClick = { expanded = false },
            )
            HorizontalDivider()
            DropdownMenuItem(
                text = { Text("Sign out") },
                onClick = { expanded = false },
            )
        }
    }
}`,
    preview: (
      <div className="w-44 overflow-hidden rounded-xl border bg-popover py-1 text-left shadow-md">
        <div className="bg-accent px-3 py-2 text-xs text-foreground">Profile</div>
        <div className="px-3 py-2 text-xs text-foreground">Billing</div>
        <div className="my-1 border-t" />
        <div className="px-3 py-2 text-xs text-destructive">Sign out</div>
      </div>
    ),
  },
  {
    id: "menu-shortcuts",
    name: "Icons and shortcuts",
    category: "menus",
    description: "Menu items with leading icons and trailing keyboard shortcuts.",
    tags: [],
    code: `@Composable
fun ActionsMenu() {
    var expanded by remember { mutableStateOf(false) }
    Box {
        IconButton(onClick = { expanded = true }) {
            Icon(Icons.Filled.MoreVert, contentDescription = "More")
        }
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
        ) {
            DropdownMenuItem(
                text = { Text("Edit") },
                leadingIcon = { Icon(Icons.Filled.Edit, null) },
                trailingIcon = {
                    Text("Cmd E", style = MaterialTheme.typography.labelMedium)
                },
                onClick = { expanded = false },
            )
            DropdownMenuItem(
                text = { Text("Duplicate") },
                leadingIcon = { Icon(Icons.Filled.ContentCopy, null) },
                trailingIcon = {
                    Text("Cmd D", style = MaterialTheme.typography.labelMedium)
                },
                onClick = { expanded = false },
            )
        }
    }
}`,
    preview: (
      <div className="w-48 overflow-hidden rounded-xl border bg-popover py-1 text-left shadow-md">
        <div className="flex items-center justify-between px-3 py-2 text-xs text-foreground">
          <span className="inline-flex items-center gap-2">
            <Pencil className="size-3.5 text-muted-foreground" />
            Edit
          </span>
          <span className="text-muted-foreground">⌘E</span>
        </div>
        <div className="flex items-center justify-between px-3 py-2 text-xs text-foreground">
          <span className="inline-flex items-center gap-2">
            <Copy className="size-3.5 text-muted-foreground" />
            Duplicate
          </span>
          <span className="text-muted-foreground">⌘D</span>
        </div>
      </div>
    ),
  },
  {
    id: "menu-context",
    name: "Context menu",
    category: "menus",
    description: "A long-press context menu anchored to the content it acts on.",
    tags: [],
    code: `@Composable
fun ContextMenu(content: @Composable () -> Unit) {
    var expanded by remember { mutableStateOf(false) }
    Box(
        Modifier.pointerInput(Unit) {
            detectTapGestures(onLongPress = { expanded = true })
        },
    ) {
        content()
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
        ) {
            DropdownMenuItem(text = { Text("Copy") }, onClick = { expanded = false })
            DropdownMenuItem(text = { Text("Share") }, onClick = { expanded = false })
            DropdownMenuItem(text = { Text("Delete") }, onClick = { expanded = false })
        }
    }
}`,
    preview: (
      <div className="w-40 overflow-hidden rounded-xl border bg-popover py-1 text-left shadow-md">
        <div className="px-3 py-2 text-xs text-foreground">Copy</div>
        <div className="px-3 py-2 text-xs text-foreground">Share</div>
        <div className="px-3 py-2 text-xs text-destructive">Delete</div>
      </div>
    ),
  },
  {
    id: "menu-account",
    name: "Account menu",
    category: "menus",
    description: "A profile menu led by an account header above settings and a sign-out row.",
    tags: [],
    code: `@Composable
fun AccountMenu(name: String, email: String) {
    var open by remember { mutableStateOf(false) }
    Box {
        IconButton(onClick = { open = true }) {
            Icon(Icons.Filled.AccountCircle, "Account")
        }
        DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
            Row(Modifier.padding(12.dp), verticalAlignment = Alignment.CenterVertically) {
                Surface(shape = CircleShape, color = Color(0xFF6366F1),
                    modifier = Modifier.size(36.dp)) {}
                Spacer(Modifier.width(10.dp))
                Column {
                    Text(name, style = MaterialTheme.typography.titleSmall)
                    Text(email, style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant)
                }
            }
            HorizontalDivider()
            DropdownMenuItem(text = { Text("Settings") },
                leadingIcon = { Icon(Icons.Filled.Settings, null) },
                onClick = { open = false })
            DropdownMenuItem(text = { Text("Sign out") },
                leadingIcon = { Icon(Icons.AutoMirrored.Filled.Logout, null) },
                onClick = { open = false })
        }
    }
}`,
    preview: (
      <div className="w-52 overflow-hidden rounded-xl border bg-popover text-left shadow-md">
        <div className="flex items-center gap-2.5 p-3">
          <span className="size-9 rounded-full bg-indigo-500" />
          <div>
            <p className="text-xs font-semibold text-foreground">Priya Anand</p>
            <p className="text-[10px] text-muted-foreground">priya@studio.dev</p>
          </div>
        </div>
        <div className="border-t py-1">
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-foreground"><Settings className="size-3.5 text-muted-foreground" /> Settings</div>
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-foreground"><LogOut className="size-3.5 text-muted-foreground" /> Sign out</div>
        </div>
      </div>
    ),
  },
  {
    id: "menu-checkable",
    name: "Checkable menu",
    category: "menus",
    description: "A menu of toggleable rows for showing and hiding columns without closing.",
    tags: [],
    code: `@Composable
fun ColumnsMenu() {
    var open by remember { mutableStateOf(false) }
    val cols = remember {
        mutableStateMapOf("Name" to true, "Status" to true, "Owner" to false)
    }
    Box {
        OutlinedButton(onClick = { open = true }) { Text("Columns") }
        DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
            cols.forEach { (label, on) ->
                DropdownMenuItem(
                    text = { Text(label) },
                    leadingIcon = {
                        Checkbox(checked = on, onCheckedChange = { cols[label] = it })
                    },
                    onClick = { cols[label] = !on },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-44 overflow-hidden rounded-xl border bg-popover py-1 text-left shadow-md text-xs text-foreground">
        {[["Name", true], ["Status", true], ["Owner", false]].map(([l, on]) => (
          <div key={l as string} className="flex items-center gap-2.5 px-3 py-2">
            <span className={`grid size-4 place-items-center rounded ${on ? "bg-primary text-primary-foreground" : "border border-muted-foreground/40"}`}>
              {on ? <Check className="size-3" /> : null}
            </span>
            {l as string}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "menu-submenu",
    name: "Cascading submenu",
    category: "menus",
    description: "A menu item that opens a nested submenu from a trailing chevron.",
    tags: [],
    code: `@Composable
fun ShareSubmenu() {
    var open by remember { mutableStateOf(false) }
    var sub by remember { mutableStateOf(false) }
    Box {
        TextButton(onClick = { open = true }) { Text("Actions") }
        DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
            DropdownMenuItem(text = { Text("Rename") }, onClick = {})
            DropdownMenuItem(
                text = { Text("Share to") },
                trailingIcon = { Icon(Icons.Filled.ChevronRight, null) },
                onClick = { sub = true },
            )
        }
        DropdownMenu(expanded = sub, onDismissRequest = { sub = false },
            offset = DpOffset(160.dp, 0.dp)) {
            listOf("Messages", "Mail", "Copy link").forEach {
                DropdownMenuItem(text = { Text(it) }, onClick = { sub = false; open = false })
            }
        }
    }
}`,
    preview: (
      <div className="flex items-start gap-1.5 text-left">
        <div className="w-36 overflow-hidden rounded-xl border bg-popover py-1 text-xs text-foreground shadow-md">
          <div className="px-3 py-2">Rename</div>
          <div className="flex items-center justify-between bg-accent px-3 py-2">Share to <ChevronRight className="size-3.5 text-muted-foreground" /></div>
        </div>
        <div className="mt-7 w-32 overflow-hidden rounded-xl border bg-popover py-1 text-xs text-foreground shadow-md">
          <div className="px-3 py-2">Messages</div>
          <div className="px-3 py-2">Mail</div>
          <div className="px-3 py-2">Copy link</div>
        </div>
      </div>
    ),
  },
  {
    id: "menu-grouped",
    name: "Grouped sections",
    category: "menus",
    description: "A menu split into labelled sections so dense actions stay scannable.",
    tags: [],
    code: `@Composable
fun GroupedMenu() {
    var open by remember { mutableStateOf(false) }
    Box {
        IconButton(onClick = { open = true }) {
            Icon(Icons.Filled.MoreVert, "More")
        }
        DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
            Text("Edit", Modifier.padding(start = 12.dp, top = 8.dp, bottom = 4.dp),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
            DropdownMenuItem(text = { Text("Cut") }, onClick = {})
            DropdownMenuItem(text = { Text("Copy") }, onClick = {})
            HorizontalDivider()
            Text("Danger", Modifier.padding(start = 12.dp, top = 8.dp, bottom = 4.dp),
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.error)
            DropdownMenuItem(
                text = { Text("Delete", color = MaterialTheme.colorScheme.error) },
                onClick = {})
        }
    }
}`,
    preview: (
      <div className="w-40 overflow-hidden rounded-xl border bg-popover py-1 text-left text-xs shadow-md">
        <p className="px-3 pb-1 pt-2 text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">Edit</p>
        <div className="px-3 py-1.5 text-foreground">Cut</div>
        <div className="px-3 py-1.5 text-foreground">Copy</div>
        <div className="my-1 border-t" />
        <p className="px-3 pb-1 text-[9px] font-semibold uppercase tracking-wide text-destructive">Danger</p>
        <div className="px-3 py-1.5 text-destructive">Delete</div>
      </div>
    ),
  },
  {
    id: "menu-speed-dial",
    name: "Speed dial",
    category: "menus",
    description: "A FAB that fans out a stack of labelled mini actions when expanded.",
    tags: ["animated"],
    code: `@Composable
fun SpeedDial() {
    var open by remember { mutableStateOf(false) }
    val rotation by animateFloatAsState(if (open) 45f else 0f, label = "fab")
    val actions = listOf(
        "Note" to Icons.Filled.Edit,
        "Photo" to Icons.Filled.Star,
        "Upload" to Icons.Filled.FileUpload,
    )
    Column(horizontalAlignment = Alignment.End,
        verticalArrangement = Arrangement.spacedBy(12.dp)) {
        actions.forEachIndexed { i, (label, icon) ->
            AnimatedVisibility(open,
                enter = fadeIn() + slideInVertically { it / 2 },
                exit = fadeOut()) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Surface(shape = MaterialTheme.shapes.small, tonalElevation = 2.dp) {
                        Text(label, Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
                            style = MaterialTheme.typography.labelMedium)
                    }
                    Spacer(Modifier.width(8.dp))
                    SmallFloatingActionButton(onClick = {}) { Icon(icon, label) }
                }
            }
        }
        FloatingActionButton(onClick = { open = !open }) {
            Icon(Icons.Filled.Add, "Toggle", Modifier.rotate(rotation))
        }
    }
}`,
    preview: (
      <div className="flex flex-col items-end gap-2.5">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">Note</span>
          <span className="grid size-8 place-items-center rounded-full bg-secondary text-secondary-foreground"><Pencil className="size-3.5" /></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">Upload</span>
          <span className="grid size-8 place-items-center rounded-full bg-secondary text-secondary-foreground"><Download className="size-3.5" /></span>
        </div>
        <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg"><Plus className="size-5 rotate-45" /></span>
      </div>
    ),
  },
  {
    id: "menu-descriptive",
    name: "Descriptive items",
    category: "menus",
    description: "A menu whose rows pair a title with a secondary description line.",
    tags: [],
    code: `@Composable
fun DescriptiveMenu() {
    var open by remember { mutableStateOf(false) }
    val items = listOf(
        Triple("Public", "Anyone with the link", Icons.Filled.Public),
        Triple("Team", "Only your workspace", Icons.Filled.Group),
        Triple("Private", "Only you", Icons.Filled.Lock),
    )
    Box {
        TextButton(onClick = { open = true }) { Text("Visibility") }
        DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
            items.forEach { (title, desc, icon) ->
                DropdownMenuItem(
                    leadingIcon = { Icon(icon, null) },
                    text = {
                        Column {
                            Text(title, style = MaterialTheme.typography.bodyMedium)
                            Text(desc, style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant)
                        }
                    },
                    onClick = { open = false },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-52 overflow-hidden rounded-xl border bg-popover py-1 text-left shadow-md">
        {[["Public", "Anyone with the link"], ["Team", "Only your workspace"]].map(([t, d]) => (
          <div key={t} className="flex items-center gap-2.5 px-3 py-2">
            <Share2 className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs font-medium text-foreground">{t}</p>
              <p className="text-[10px] text-muted-foreground">{d}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "menu-split-button",
    name: "Split button",
    category: "menus",
    description: "A primary action joined to a caret that opens alternative variants.",
    tags: [],
    code: `@Composable
fun SplitButton() {
    var open by remember { mutableStateOf(false) }
    Row {
        Button(
            onClick = {},
            shape = RoundedCornerShape(
                topStart = 50f, bottomStart = 50f,
                topEnd = 0f, bottomEnd = 0f,
            ),
        ) { Text("Save") }
        Box {
            Button(
                onClick = { open = true },
                shape = RoundedCornerShape(
                    topStart = 0f, bottomStart = 0f,
                    topEnd = 50f, bottomEnd = 50f,
                ),
                contentPadding = PaddingValues(horizontal = 8.dp),
            ) { Icon(Icons.Filled.ArrowDropDown, "More") }
            DropdownMenu(expanded = open, onDismissRequest = { open = false }) {
                DropdownMenuItem(text = { Text("Save as draft") }, onClick = {})
                DropdownMenuItem(text = { Text("Save and publish") }, onClick = {})
            }
        }
    }
}`,
    preview: (
      <div className="flex w-fit overflow-hidden rounded-full">
        <span className="bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">Save</span>
        <span className="border-l border-primary-foreground/20 bg-primary px-2 py-2 text-primary-foreground">▾</span>
      </div>
    ),
  },
  {
    id: "menu-grid",
    name: "Grid actions",
    category: "menus",
    description: "A share-style sheet of icon tiles laid out in a quick-action grid.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun GridActions(onDismiss: () -> Unit) {
    val actions = listOf(
        "Copy" to Icons.Filled.ContentCopy,
        "Share" to Icons.Filled.Share,
        "Save" to Icons.Filled.Download,
        "Delete" to Icons.Filled.DeleteOutline,
    )
    ModalBottomSheet(onDismissRequest = onDismiss) {
        LazyVerticalGrid(
            columns = GridCells.Fixed(4),
            modifier = Modifier.padding(16.dp),
        ) {
            items(actions) { (label, icon) ->
                Column(
                    Modifier.clickable { onDismiss() }.padding(8.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    Surface(shape = CircleShape,
                        color = MaterialTheme.colorScheme.surfaceVariant,
                        modifier = Modifier.size(48.dp)) {
                        Box(contentAlignment = Alignment.Center) { Icon(icon, label) }
                    }
                    Text(label, Modifier.padding(top = 6.dp),
                        style = MaterialTheme.typography.labelSmall)
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 rounded-2xl border bg-card p-4 shadow-md">
        <div className="grid grid-cols-4 gap-2 text-center text-[9px] text-muted-foreground">
          {[["Copy", Copy], ["Share", Share2], ["Save", Download], ["Delete", Trash2]].map(([l, Ic]) => {
            const I = Ic as typeof Copy;
            return (
              <div key={l as string} className="flex flex-col items-center gap-1">
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-secondary-foreground"><I className="size-4" /></span>
                {l as string}
              </div>
            );
          })}
        </div>
      </div>
    ),
  },
];
