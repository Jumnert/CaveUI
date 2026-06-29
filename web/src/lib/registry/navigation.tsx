import { Bell, Check, ChevronLeft, ChevronRight, Heart, Home, LayoutGrid, Plus, Search, Settings, User } from "lucide-react";
import type { Variant } from "./types";

export const navigation: Variant[] = [
  {
    id: "nav-bottom-bar",
    name: "Bottom bar",
    category: "navigation",
    description: "A Material 3 navigation bar with icon and label destinations.",
    tags: [],
    code: `@Composable
fun BottomBar() {
    var selected by remember { mutableStateOf(0) }
    val items = listOf(
        "Home" to Icons.Filled.Home,
        "Search" to Icons.Filled.Search,
        "Profile" to Icons.Filled.Person,
    )
    NavigationBar {
        items.forEachIndexed { i, (label, icon) ->
            NavigationBarItem(
                selected = selected == i,
                onClick = { selected = i },
                icon = { Icon(icon, contentDescription = label) },
                label = { Text(label) },
            )
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center justify-around rounded-2xl border bg-card py-2.5">
        <div className="flex flex-col items-center gap-0.5 text-primary">
          <Home className="size-5" />
          <span className="text-[9px] font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-muted-foreground">
          <Search className="size-5" />
          <span className="text-[9px]">Search</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-muted-foreground">
          <User className="size-5" />
          <span className="text-[9px]">Profile</span>
        </div>
      </div>
    ),
  },
  {
    id: "nav-tabs",
    name: "Underline tabs",
    category: "navigation",
    description: "A tab row whose indicator slides under the selected destination.",
    tags: ["animated"],
    code: `@Composable
fun UnderlineTabs() {
    var selected by remember { mutableStateOf(0) }
    val tabs = listOf("Overview", "Activity", "Settings")
    TabRow(
        selectedTabIndex = selected,
        indicator = { positions ->
            TabRowDefaults.SecondaryIndicator(
                Modifier.tabIndicatorOffset(positions[selected]),
                color = MaterialTheme.colorScheme.primary,
            )
        },
    ) {
        tabs.forEachIndexed { i, title ->
            Tab(
                selected = selected == i,
                onClick = { selected = i },
                text = { Text(title) },
            )
        }
    }
}`,
    preview: (
      <div className="w-56">
        <div className="flex border-b text-xs">
          <div className="flex-1 border-b-2 border-primary pb-2 text-center font-semibold text-foreground">
            Overview
          </div>
          <div className="flex-1 pb-2 text-center text-muted-foreground">Activity</div>
          <div className="flex-1 pb-2 text-center text-muted-foreground">Settings</div>
        </div>
      </div>
    ),
  },
  {
    id: "nav-breadcrumbs",
    name: "Breadcrumbs",
    category: "navigation",
    description: "A breadcrumb trail with chevron separators and an emphasized leaf.",
    tags: [],
    code: `@Composable
fun Breadcrumbs(crumbs: List<String>) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        crumbs.forEachIndexed { i, crumb ->
            val last = i == crumbs.lastIndex
            Text(
                crumb,
                color = if (last) MaterialTheme.colorScheme.onSurface
                    else MaterialTheme.colorScheme.onSurfaceVariant,
                style = MaterialTheme.typography.bodyMedium,
            )
            if (!last) {
                Icon(
                    Icons.Filled.ChevronRight,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.size(18.dp).padding(horizontal = 2.dp),
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-1 text-xs">
        <span className="text-muted-foreground">Home</span>
        <ChevronRight className="size-3.5 text-muted-foreground" />
        <span className="text-muted-foreground">Projects</span>
        <ChevronRight className="size-3.5 text-muted-foreground" />
        <span className="font-medium text-foreground">caveui</span>
      </div>
    ),
  },
  {
    id: "nav-pill-tabs",
    name: "Pill tabs",
    category: "navigation",
    description: "A scrollable row of pill tabs where the active filter fills with the accent.",
    tags: [],
    code: `@Composable
fun PillTabs(tabs: List<String>) {
    var selected by remember { mutableStateOf(0) }
    LazyRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        itemsIndexed(tabs) { i, label ->
            val on = i == selected
            Surface(
                onClick = { selected = i },
                shape = CircleShape,
                color = if (on) MaterialTheme.colorScheme.primary
                    else MaterialTheme.colorScheme.surfaceVariant,
                contentColor = if (on) MaterialTheme.colorScheme.onPrimary
                    else MaterialTheme.colorScheme.onSurfaceVariant,
            ) {
                Text(
                    label,
                    Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                    style = MaterialTheme.typography.labelLarge,
                )
            }
        }
    }
}`,
    preview: (
      <div className="flex w-56 gap-2 text-xs font-medium">
        <span className="rounded-full bg-primary px-3.5 py-1.5 text-primary-foreground">All</span>
        <span className="rounded-full bg-muted px-3.5 py-1.5 text-muted-foreground">Popular</span>
        <span className="rounded-full bg-muted px-3.5 py-1.5 text-muted-foreground">New</span>
      </div>
    ),
  },
  {
    id: "nav-fab-dock",
    name: "FAB dock bar",
    category: "navigation",
    description: "A bottom bar split around a raised center action button for the primary task.",
    tags: [],
    code: `@Composable
fun FabDockBar() {
    Box(contentAlignment = Alignment.TopCenter) {
        NavigationBar {
            NavigationBarItem(true, {},
                icon = { Icon(Icons.Filled.Home, "Home") })
            NavigationBarItem(false, {},
                icon = { Icon(Icons.Filled.Search, "Search") })
            NavigationBarItem(false, {}, icon = { Spacer(Modifier.size(24.dp)) },
                enabled = false)
            NavigationBarItem(false, {},
                icon = { Icon(Icons.Filled.FavoriteBorder, "Saved") })
            NavigationBarItem(false, {},
                icon = { Icon(Icons.Filled.Person, "Profile") })
        }
        FloatingActionButton(
            onClick = {},
            modifier = Modifier.offset(y = (-24).dp),
            shape = CircleShape,
        ) { Icon(Icons.Filled.Add, "Create") }
    }
}`,
    preview: (
      <div className="relative flex w-56 items-center justify-around rounded-2xl border bg-card py-2.5">
        <Home className="size-5 text-primary" />
        <Search className="size-5 text-muted-foreground" />
        <div className="w-8" />
        <Heart className="size-5 text-muted-foreground" />
        <User className="size-5 text-muted-foreground" />
        <span className="absolute -top-4 left-1/2 grid size-10 -translate-x-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <Plus className="size-5" />
        </span>
      </div>
    ),
  },
  {
    id: "nav-rail",
    name: "Navigation rail",
    category: "navigation",
    description: "A vertical rail of destinations with a tinted pill behind the active icon.",
    tags: [],
    code: `@Composable
fun Rail() {
    var selected by remember { mutableStateOf(0) }
    val items = listOf(
        Icons.Filled.Home to "Home",
        Icons.Filled.GridView to "Browse",
        Icons.Filled.Settings to "Settings",
    )
    NavigationRail {
        items.forEachIndexed { i, (icon, label) ->
            NavigationRailItem(
                selected = i == selected,
                onClick = { selected = i },
                icon = { Icon(icon, contentDescription = label) },
                label = { Text(label) },
            )
        }
    }
}`,
    preview: (
      <div className="flex w-16 flex-col items-center gap-4 rounded-2xl border bg-card py-4">
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="grid h-7 w-12 place-items-center rounded-full bg-primary/15"><Home className="size-5" /></span>
          <span className="text-[8px] font-medium">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-muted-foreground">
          <LayoutGrid className="size-5" />
          <span className="text-[8px]">Browse</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-muted-foreground">
          <Settings className="size-5" />
          <span className="text-[8px]">Settings</span>
        </div>
      </div>
    ),
  },
  {
    id: "nav-pagination",
    name: "Pagination",
    category: "navigation",
    description: "A numbered pager with previous and next controls and an ellipsis overflow.",
    tags: [],
    code: `@Composable
fun Pagination(page: Int, pageCount: Int, onPage: (Int) -> Unit) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        IconButton(onClick = { onPage(page - 1) }, enabled = page > 1) {
            Icon(Icons.Filled.ChevronLeft, "Previous")
        }
        listOf(1, 2, 3).forEach { n ->
            val on = n == page
            Surface(
                onClick = { onPage(n) },
                shape = CircleShape,
                color = if (on) MaterialTheme.colorScheme.primary
                    else Color.Transparent,
                contentColor = if (on) MaterialTheme.colorScheme.onPrimary
                    else MaterialTheme.colorScheme.onSurface,
            ) {
                Text("$n", Modifier.padding(10.dp),
                    style = MaterialTheme.typography.labelLarge)
            }
        }
        Text("\u2026")
        Text("$pageCount")
        IconButton(onClick = { onPage(page + 1) }, enabled = page < pageCount) {
            Icon(Icons.Filled.ChevronRight, "Next")
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-1 text-xs font-medium text-foreground">
        <ChevronLeft className="size-4 text-muted-foreground" />
        <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">1</span>
        <span className="grid size-7 place-items-center rounded-full">2</span>
        <span className="grid size-7 place-items-center rounded-full">3</span>
        <span className="px-1 text-muted-foreground">…</span>
        <span className="grid size-7 place-items-center rounded-full">9</span>
        <ChevronRight className="size-4" />
      </div>
    ),
  },
  {
    id: "nav-wizard",
    name: "Wizard steps",
    category: "navigation",
    description: "A horizontal step tracker with connectors and checks for completed stages.",
    tags: ["animated"],
    code: `@Composable
fun WizardSteps(current: Int, labels: List<String>) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        labels.forEachIndexed { i, label ->
            val done = i < current
            val active = i == current
            Box(
                Modifier.size(26.dp).clip(CircleShape)
                    .background(
                        when {
                            done -> Color(0xFF16A34A)
                            active -> MaterialTheme.colorScheme.primary
                            else -> MaterialTheme.colorScheme.surfaceVariant
                        },
                    ),
                contentAlignment = Alignment.Center,
            ) {
                if (done) Icon(Icons.Filled.Check, null, Modifier.size(15.dp),
                    tint = Color.White)
                else Text("\${i + 1}", style = MaterialTheme.typography.labelMedium,
                    color = if (active) MaterialTheme.colorScheme.onPrimary
                        else MaterialTheme.colorScheme.onSurfaceVariant)
            }
            if (i < labels.lastIndex) {
                Box(Modifier.weight(1f).height(2.dp)
                    .background(if (done) Color(0xFF16A34A)
                        else MaterialTheme.colorScheme.surfaceVariant))
            }
        }
    }
}`,
    preview: (
      <div className="flex w-56 items-center">
        <span className="grid size-6 place-items-center rounded-full bg-emerald-600 text-white"><Check className="size-3.5" /></span>
        <span className="h-0.5 flex-1 bg-emerald-600" />
        <span className="grid size-6 place-items-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">2</span>
        <span className="h-0.5 flex-1 bg-muted" />
        <span className="grid size-6 place-items-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">3</span>
      </div>
    ),
  },
  {
    id: "nav-floating-bar",
    name: "Floating pill bar",
    category: "navigation",
    description: "A floating rounded bar where the active item expands into a labelled pill.",
    tags: ["animated"],
    code: `@Composable
fun FloatingPillBar() {
    var selected by remember { mutableStateOf(0) }
    val items = listOf(
        Icons.Filled.Home to "Home",
        Icons.Filled.Search to "Search",
        Icons.Filled.FavoriteBorder to "Saved",
        Icons.Filled.Person to "Me",
    )
    Surface(shape = CircleShape, tonalElevation = 3.dp, shadowElevation = 6.dp) {
        Row(
            Modifier.padding(6.dp),
            horizontalArrangement = Arrangement.spacedBy(4.dp),
        ) {
            items.forEachIndexed { i, (icon, label) ->
                val on = i == selected
                Surface(
                    onClick = { selected = i },
                    shape = CircleShape,
                    color = if (on) MaterialTheme.colorScheme.primary
                        else Color.Transparent,
                    contentColor = if (on) MaterialTheme.colorScheme.onPrimary
                        else MaterialTheme.colorScheme.onSurfaceVariant,
                ) {
                    Row(
                        Modifier.padding(horizontal = 14.dp, vertical = 10.dp),
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        Icon(icon, null, Modifier.size(20.dp))
                        AnimatedVisibility(on) {
                            Text(label, Modifier.padding(start = 6.dp),
                                style = MaterialTheme.typography.labelMedium)
                        }
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="flex items-center gap-1.5 rounded-full border bg-card p-1.5 shadow-md">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-primary-foreground">
          <Home className="size-4" /> <span className="text-[11px] font-medium">Home</span>
        </span>
        <span className="grid size-9 place-items-center rounded-full text-muted-foreground"><Search className="size-4" /></span>
        <span className="grid size-9 place-items-center rounded-full text-muted-foreground"><Heart className="size-4" /></span>
        <span className="grid size-9 place-items-center rounded-full text-muted-foreground"><User className="size-4" /></span>
      </div>
    ),
  },
  {
    id: "nav-app-bar",
    name: "Top app bar",
    category: "navigation",
    description: "A center-aligned app bar with a back action, title and trailing icon buttons.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AppBar(onBack: () -> Unit) {
    CenterAlignedTopAppBar(
        title = { Text("Inbox") },
        navigationIcon = {
            IconButton(onClick = onBack) {
                Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back")
            }
        },
        actions = {
            IconButton(onClick = {}) {
                Icon(Icons.Filled.Search, "Search")
            }
            IconButton(onClick = {}) {
                Icon(Icons.Outlined.Notifications, "Alerts")
            }
        },
    )
}`,
    preview: (
      <div className="flex w-56 items-center gap-3 rounded-xl border bg-card px-3 py-3">
        <ChevronLeft className="size-4 text-foreground" />
        <span className="flex-1 text-center text-sm font-semibold text-foreground">Inbox</span>
        <Search className="size-4 text-muted-foreground" />
        <Bell className="size-4 text-muted-foreground" />
      </div>
    ),
  },
  {
    id: "nav-badged-tabs",
    name: "Badged tabs",
    category: "navigation",
    description: "A segmented tab set where each tab carries a small count badge.",
    tags: [],
    code: `@Composable
fun BadgedTabs() {
    var selected by remember { mutableStateOf(0) }
    val tabs = listOf("All" to 0, "Unread" to 4, "Flagged" to 2)
    TabRow(selectedTabIndex = selected) {
        tabs.forEachIndexed { i, (label, count) ->
            Tab(
                selected = i == selected,
                onClick = { selected = i },
                text = {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(label)
                        if (count > 0) {
                            Spacer(Modifier.width(6.dp))
                            Badge { Text("$count") }
                        }
                    }
                },
            )
        }
    }
}`,
    preview: (
      <div className="flex w-56 border-b text-xs">
        <div className="flex-1 border-b-2 border-primary pb-2 text-center font-semibold text-foreground">All</div>
        <div className="flex flex-1 items-center justify-center gap-1.5 pb-2 text-muted-foreground">
          Unread <span className="grid size-4 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">4</span>
        </div>
        <div className="flex flex-1 items-center justify-center gap-1.5 pb-2 text-muted-foreground">
          Flagged <span className="grid size-4 place-items-center rounded-full bg-muted text-[9px] font-bold text-foreground">2</span>
        </div>
      </div>
    ),
  },
];
