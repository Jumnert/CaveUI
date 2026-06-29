import { Check, ChevronRight, Image as ImageIcon, Link2, MessageSquare, Trash2, X } from "lucide-react";
import type { Variant } from "./types";

export const overlays: Variant[] = [
  {
    id: "overlay-dialog",
    name: "Confirm dialog",
    category: "overlays",
    description: "An alert dialog for a destructive action with an error-tinted confirm.",
    tags: [],
    code: `@Composable
fun ConfirmDialog(onConfirm: () -> Unit, onDismiss: () -> Unit) {
    AlertDialog(
        onDismissRequest = onDismiss,
        icon = { Icon(Icons.Outlined.DeleteOutline, contentDescription = null) },
        title = { Text("Delete project?") },
        text = { Text("This permanently removes the project and its files.") },
        confirmButton = {
            Button(
                onClick = onConfirm,
                colors = ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.error,
                ),
            ) { Text("Delete") }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) { Text("Cancel") }
        },
    )
}`,
    preview: (
      <div className="w-56 rounded-2xl border bg-card p-5 text-center shadow-lg">
        <div className="mx-auto grid size-10 place-items-center rounded-full bg-destructive/10 text-destructive">
          <Trash2 className="size-5" />
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground">Delete project?</p>
        <p className="mt-1 text-xs text-muted-foreground">
          This permanently removes the project and its files.
        </p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-lg border py-1.5 text-xs font-medium text-foreground">
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-destructive py-1.5 text-xs font-medium text-white">
            Delete
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "overlay-sheet",
    name: "Bottom sheet",
    category: "overlays",
    description: "A modal bottom sheet with a drag handle and a short action list.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ShareSheet(onDismiss: () -> Unit) {
    val state = rememberModalBottomSheetState()
    ModalBottomSheet(onDismissRequest = onDismiss, sheetState = state) {
        Column(Modifier.padding(horizontal = 8.dp).padding(bottom = 24.dp)) {
            Text(
                "Share to",
                modifier = Modifier.padding(16.dp),
                style = MaterialTheme.typography.titleLarge,
            )
            listOf(
                "Copy link" to Icons.Filled.Link,
                "Messages" to Icons.Filled.Chat,
                "Mail" to Icons.Filled.MailOutline,
            ).forEach { (label, icon) ->
                ListItem(
                    headlineContent = { Text(label) },
                    leadingContent = { Icon(icon, contentDescription = null) },
                    modifier = Modifier.clickable { },
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-t-2xl border bg-card pt-2">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-muted-foreground/30" />
        <p className="px-4 text-sm font-semibold text-foreground">Share to</p>
        <div className="mt-2 pb-2">
          <div className="flex items-center gap-2 px-4 py-2 text-xs text-foreground">
            <Link2 className="size-3.5 text-muted-foreground" />
            Copy link
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-xs text-foreground">
            <MessageSquare className="size-3.5 text-muted-foreground" />
            Messages
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "overlay-drawer",
    name: "Navigation drawer",
    category: "overlays",
    description: "A modal navigation drawer that slides in from the leading edge.",
    tags: [],
    code: `@Composable
fun AppDrawer(content: @Composable () -> Unit) {
    val drawerState = rememberDrawerState(DrawerValue.Closed)
    ModalNavigationDrawer(
        drawerState = drawerState,
        drawerContent = {
            ModalDrawerSheet {
                Spacer(Modifier.height(12.dp))
                listOf("Home", "Library", "Settings").forEach { item ->
                    NavigationDrawerItem(
                        label = { Text(item) },
                        selected = item == "Home",
                        onClick = {},
                        modifier = Modifier.padding(horizontal = 12.dp),
                    )
                }
            }
        },
    ) { content() }
}`,
    preview: (
      <div className="flex w-56 overflow-hidden rounded-xl border">
        <div className="w-2/3 space-y-1 bg-card p-3">
          <div className="rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
            Home
          </div>
          <div className="px-3 py-2 text-xs text-muted-foreground">Library</div>
          <div className="px-3 py-2 text-xs text-muted-foreground">Settings</div>
        </div>
        <div className="w-1/3 bg-foreground/5" />
      </div>
    ),
  },
  {
    id: "overlay-fullscreen",
    name: "Full-screen dialog",
    category: "overlays",
    description: "A full-screen dialog with a close and save app bar over a scrolling form.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FullScreenDialog(onClose: () -> Unit, onSave: () -> Unit) {
    Dialog(
        onDismissRequest = onClose,
        properties = DialogProperties(usePlatformDefaultWidth = false),
    ) {
        Surface(Modifier.fillMaxSize()) {
            Scaffold(
                topBar = {
                    TopAppBar(
                        title = { Text("New event") },
                        navigationIcon = {
                            IconButton(onClick = onClose) {
                                Icon(Icons.Filled.Close, "Close")
                            }
                        },
                        actions = { TextButton(onClick = onSave) { Text("Save") } },
                    )
                },
            ) { padding ->
                Column(Modifier.padding(padding).padding(16.dp)) {
                    OutlinedTextField(
                        value = "", onValueChange = {},
                        label = { Text("Title") },
                        modifier = Modifier.fillMaxWidth(),
                    )
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 overflow-hidden rounded-xl border bg-card shadow-lg">
        <div className="flex items-center justify-between border-b px-3 py-2.5">
          <X className="size-4 text-foreground" />
          <span className="text-xs font-semibold text-foreground">New event</span>
          <span className="text-xs font-semibold text-primary">Save</span>
        </div>
        <div className="space-y-2 p-3">
          <div className="rounded-lg border bg-background px-3 py-2 text-[11px] text-muted-foreground">Title</div>
          <div className="h-12 rounded-lg border bg-background" />
        </div>
      </div>
    ),
  },
  {
    id: "overlay-lightbox",
    name: "Image lightbox",
    category: "overlays",
    description: "A dimmed lightbox that frames a photo with a close control and a position counter.",
    tags: [],
    code: `@Composable
fun Lightbox(index: Int, total: Int, onClose: () -> Unit) {
    Dialog(
        onDismissRequest = onClose,
        properties = DialogProperties(usePlatformDefaultWidth = false),
    ) {
        Box(Modifier.fillMaxSize().background(Color(0xF20A0A0A))) {
            Box(
                Modifier.align(Alignment.Center).fillMaxWidth(0.86f)
                    .aspectRatio(1f)
                    .clip(MaterialTheme.shapes.large)
                    .background(Color(0xFF1F2937)),
            )
            IconButton(
                onClick = onClose,
                modifier = Modifier.align(Alignment.TopEnd).padding(8.dp),
            ) { Icon(Icons.Filled.Close, "Close", tint = Color.White) }
            Text(
                "\${index + 1} / $total",
                Modifier.align(Alignment.BottomCenter).padding(24.dp),
                color = Color.White,
                style = MaterialTheme.typography.labelMedium,
            )
        }
    }
}`,
    preview: (
      <div className="relative grid h-32 w-52 place-items-center rounded-xl bg-stone-900">
        <X className="absolute right-2 top-2 size-4 text-white/80" />
        <div className="size-20 rounded-lg bg-gradient-to-br from-stone-600 to-stone-800" />
        <span className="absolute bottom-2 text-[10px] font-medium text-white/70">2 / 6</span>
      </div>
    ),
  },
  {
    id: "overlay-action-sheet",
    name: "Action sheet",
    category: "overlays",
    description: "A grouped action sheet with a destructive option and a separated cancel button.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ActionSheet(onDismiss: () -> Unit) {
    ModalBottomSheet(onDismissRequest = onDismiss) {
        Column(Modifier.padding(16.dp).padding(bottom = 16.dp)) {
            Surface(
                shape = MaterialTheme.shapes.large,
                color = MaterialTheme.colorScheme.surfaceVariant,
            ) {
                Column {
                    ListItem(headlineContent = { Text("Edit") },
                        modifier = Modifier.clickable {})
                    HorizontalDivider()
                    ListItem(
                        headlineContent = {
                            Text("Delete", color = MaterialTheme.colorScheme.error)
                        },
                        modifier = Modifier.clickable {},
                    )
                }
            }
            Spacer(Modifier.height(8.dp))
            Button(
                onClick = onDismiss,
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant,
                    contentColor = MaterialTheme.colorScheme.onSurface,
                ),
            ) { Text("Cancel") }
        }
    }
}`,
    preview: (
      <div className="w-52 space-y-2">
        <div className="divide-y overflow-hidden rounded-xl bg-muted text-center text-xs font-medium">
          <div className="py-2.5 text-foreground">Edit</div>
          <div className="py-2.5 text-destructive">Delete</div>
        </div>
        <div className="rounded-xl bg-muted py-2.5 text-center text-xs font-semibold text-foreground">Cancel</div>
      </div>
    ),
  },
  {
    id: "overlay-consent",
    name: "Consent banner",
    category: "overlays",
    description: "A bottom consent banner explaining cookies with accept and manage actions.",
    tags: [],
    code: `@Composable
fun ConsentBanner(onAccept: () -> Unit, onManage: () -> Unit) {
    Surface(
        shape = RoundedCornerShape(16.dp),
        color = MaterialTheme.colorScheme.inverseSurface,
        contentColor = MaterialTheme.colorScheme.inverseOnSurface,
        modifier = Modifier.fillMaxWidth().padding(16.dp),
    ) {
        Column(Modifier.padding(16.dp)) {
            Text(
                "We use cookies to improve your experience and analyze traffic.",
                style = MaterialTheme.typography.bodyMedium,
            )
            Row(
                Modifier.fillMaxWidth().padding(top = 12.dp),
                horizontalArrangement = Arrangement.End,
            ) {
                TextButton(onClick = onManage) { Text("Manage") }
                Spacer(Modifier.width(8.dp))
                Button(onClick = onAccept) { Text("Accept all") }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 rounded-2xl bg-foreground p-3.5 text-background shadow-lg">
        <p className="text-[11px] leading-snug">
          We use cookies to improve your experience and analyze traffic.
        </p>
        <div className="mt-3 flex justify-end gap-2 text-[11px] font-semibold">
          <span className="px-2 py-1 opacity-80">Manage</span>
          <span className="rounded-lg bg-background px-3 py-1 text-foreground">Accept all</span>
        </div>
      </div>
    ),
  },
  {
    id: "overlay-side-sheet",
    name: "Side sheet",
    category: "overlays",
    description: "A trailing detail sheet that slides in to show context beside the main view.",
    tags: [],
    code: `@Composable
fun SideSheet(onClose: () -> Unit) {
    Row(Modifier.fillMaxSize()) {
        Box(Modifier.weight(1f).fillMaxHeight()
            .background(MaterialTheme.colorScheme.scrim.copy(alpha = 0.3f)))
        Surface(
            Modifier.fillMaxHeight().width(300.dp),
            tonalElevation = 2.dp,
        ) {
            Column(Modifier.padding(16.dp)) {
                Row(
                    Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text("Details", style = MaterialTheme.typography.titleLarge)
                    IconButton(onClick = onClose) {
                        Icon(Icons.Filled.Close, "Close")
                    }
                }
                Spacer(Modifier.height(12.dp))
                Text("Selected item properties appear here.",
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    style = MaterialTheme.typography.bodyMedium)
            }
        }
    }
}`,
    preview: (
      <div className="flex h-32 w-56 overflow-hidden rounded-xl border">
        <div className="flex-1 bg-foreground/5" />
        <div className="w-2/3 border-l bg-card p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">Details</span>
            <X className="size-3.5 text-muted-foreground" />
          </div>
          <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
            Selected item properties appear here.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "overlay-loading-scrim",
    name: "Loading scrim",
    category: "overlays",
    description: "A blocking scrim with a centered progress indicator and a status label.",
    tags: ["animated"],
    code: `@Composable
fun LoadingScrim(message: String, visible: Boolean) {
    AnimatedVisibility(visible, enter = fadeIn(), exit = fadeOut()) {
        Box(
            Modifier.fillMaxSize()
                .background(MaterialTheme.colorScheme.scrim.copy(alpha = 0.5f)),
            contentAlignment = Alignment.Center,
        ) {
            Surface(shape = MaterialTheme.shapes.large, tonalElevation = 4.dp) {
                Column(
                    Modifier.padding(24.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    CircularProgressIndicator()
                    Text(message, Modifier.padding(top = 12.dp),
                        style = MaterialTheme.typography.bodyMedium)
                }
            }
        }
    }
}`,
    preview: (
      <div className="grid h-32 w-52 place-items-center rounded-xl bg-foreground/30">
        <div className="flex flex-col items-center gap-2 rounded-2xl bg-card px-6 py-5 shadow-lg">
          <span className="size-7 animate-spin rounded-full border-[3px] border-muted border-t-primary" />
          <span className="text-[11px] font-medium text-foreground">Uploading…</span>
        </div>
      </div>
    ),
  },
  {
    id: "overlay-success",
    name: "Success dialog",
    category: "overlays",
    description: "A celebratory dialog with a springing check badge confirming a completed action.",
    tags: ["animated"],
    code: `@Composable
fun SuccessDialog(onDone: () -> Unit) {
    Dialog(onDismissRequest = onDone) {
        Surface(shape = MaterialTheme.shapes.extraLarge) {
            Column(
                Modifier.padding(24.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                val scale = remember { Animatable(0f) }
                LaunchedEffect(Unit) {
                    scale.animateTo(1f, spring(Spring.DampingRatioMediumBouncy))
                }
                Box(
                    Modifier.size(56.dp)
                        .graphicsLayer { scaleX = scale.value; scaleY = scale.value }
                        .clip(CircleShape).background(Color(0xFF16A34A)),
                    contentAlignment = Alignment.Center,
                ) {
                    Icon(Icons.Filled.Check, null, tint = Color.White)
                }
                Text("Payment sent", Modifier.padding(top = 16.dp),
                    style = MaterialTheme.typography.titleMedium)
                Text("Your transfer is on its way.",
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    style = MaterialTheme.typography.bodySmall)
                Button(onClick = onDone, Modifier.padding(top = 16.dp).fillMaxWidth()) {
                    Text("Done")
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 rounded-2xl border bg-card p-5 text-center shadow-lg">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-emerald-600 text-white" style={{ animation: "badge-stamp 2.4s ease-in-out infinite" }}>
          <Check className="size-6" />
        </div>
        <p className="mt-3 text-sm font-semibold text-foreground">Payment sent</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">Your transfer is on its way.</p>
        <div className="mt-4 rounded-lg bg-primary py-1.5 text-xs font-semibold text-primary-foreground">Done</div>
      </div>
    ),
  },
  {
    id: "overlay-quick-add",
    name: "Quick add modal",
    category: "overlays",
    description: "A compact centered modal with a single input for fast item creation.",
    tags: [],
    code: `@Composable
fun QuickAddModal(onCreate: (String) -> Unit, onDismiss: () -> Unit) {
    var text by remember { mutableStateOf("") }
    Dialog(onDismissRequest = onDismiss) {
        Surface(shape = MaterialTheme.shapes.extraLarge, tonalElevation = 4.dp) {
            Column(Modifier.padding(20.dp)) {
                Text("Add a task", style = MaterialTheme.typography.titleMedium)
                OutlinedTextField(
                    value = text,
                    onValueChange = { text = it },
                    placeholder = { Text("What needs doing?") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth().padding(top = 12.dp),
                )
                Row(
                    Modifier.fillMaxWidth().padding(top = 12.dp),
                    horizontalArrangement = Arrangement.End,
                ) {
                    TextButton(onClick = onDismiss) { Text("Cancel") }
                    Spacer(Modifier.width(4.dp))
                    Button(onClick = { onCreate(text) }, enabled = text.isNotBlank()) {
                        Text("Create")
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 rounded-2xl border bg-card p-4 shadow-lg">
        <p className="text-sm font-semibold text-foreground">Add a task</p>
        <div className="mt-3 rounded-lg border bg-background px-3 py-2 text-[11px] text-muted-foreground">
          What needs doing?
        </div>
        <div className="mt-3 flex justify-end gap-2 text-[11px] font-semibold">
          <span className="px-2 py-1 text-muted-foreground">Cancel</span>
          <span className="rounded-md bg-primary px-3 py-1 text-primary-foreground">Create</span>
        </div>
      </div>
    ),
  },
];
