import { ChevronDown, ChevronRight, Eye, Folder, ListFilter, Plus } from "lucide-react";
import type { Variant } from "./types";

export const disclosures: Variant[] = [
  {
    id: "disclosure-accordion",
    name: "Accordion",
    category: "disclosures",
    description: "A card-style accordion whose chevron rotates as the panel expands.",
    tags: ["animated"],
    code: `@Composable
fun Accordion(title: String, body: String) {
    var open by remember { mutableStateOf(false) }
    val rotation by animateFloatAsState(
        targetValue = if (open) 180f else 0f,
        animationSpec = tween(250, easing = EaseOutCubic),
        label = "chevron",
    )
    OutlinedCard(onClick = { open = !open }) {
        Column(Modifier.padding(16.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    title,
                    modifier = Modifier.weight(1f),
                    style = MaterialTheme.typography.titleSmall,
                )
                Icon(
                    Icons.Filled.ExpandMore,
                    contentDescription = if (open) "Collapse" else "Expand",
                    modifier = Modifier.rotate(rotation),
                )
            }
            AnimatedVisibility(visible = open) {
                Text(
                    body,
                    modifier = Modifier.padding(top = 8.dp),
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    style = MaterialTheme.typography.bodyMedium,
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-56 rounded-xl border bg-card p-4 text-left">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">Is it free?</span>
          <ChevronDown className="size-4 rotate-180 text-muted-foreground transition-transform" />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Yes. Copy any component and ship it, no attribution required.
        </p>
      </div>
    ),
  },
  {
    id: "disclosure-faq",
    name: "FAQ list",
    category: "disclosures",
    description: "A single-open FAQ list where each plus icon twists into a close.",
    tags: ["animated"],
    code: `@Composable
fun FaqList(items: List<Pair<String, String>>) {
    var openIndex by remember { mutableStateOf(-1) }
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        items.forEachIndexed { i, (q, a) ->
            val open = i == openIndex
            val rotation by animateFloatAsState(
                if (open) 45f else 0f, label = "plus",
            )
            Surface(
                onClick = { openIndex = if (open) -1 else i },
                shape = MaterialTheme.shapes.medium,
                color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f),
            ) {
                Column(Modifier.padding(16.dp)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            q,
                            modifier = Modifier.weight(1f),
                            style = MaterialTheme.typography.titleSmall,
                        )
                        Icon(Icons.Filled.Add, null, Modifier.rotate(rotation))
                    }
                    AnimatedVisibility(open) {
                        Text(
                            a,
                            modifier = Modifier.padding(top = 8.dp),
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            style = MaterialTheme.typography.bodyMedium,
                        )
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-56 space-y-2 text-left">
        <div className="rounded-lg bg-muted/50 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">Shipping</span>
            <Plus className="size-3.5 rotate-45 text-muted-foreground" />
          </div>
          <p className="mt-1.5 text-[11px] text-muted-foreground">
            Free over 50, arrives in 2 to 4 business days.
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <span className="text-xs font-semibold text-foreground">Returns</span>
          <Plus className="size-3.5 text-muted-foreground" />
        </div>
      </div>
    ),
  },
  {
    id: "disclosure-read-more",
    name: "Read more",
    category: "disclosures",
    description: "A clamped paragraph that expands past a fade with a read more toggle.",
    tags: ["animated"],
    code: `@Composable
fun ReadMore(text: String, minimizedLines: Int = 3) {
    var expanded by remember { mutableStateOf(false) }
    Column {
        Box {
            Text(
                text,
                maxLines = if (expanded) Int.MAX_VALUE else minimizedLines,
                overflow = TextOverflow.Ellipsis,
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.animateContentSize(),
            )
            if (!expanded) {
                Box(
                    Modifier
                        .align(Alignment.BottomCenter)
                        .fillMaxWidth()
                        .height(24.dp)
                        .background(
                            Brush.verticalGradient(
                                listOf(Color.Transparent,
                                    MaterialTheme.colorScheme.surface),
                            ),
                        ),
                )
            }
        }
        TextButton(onClick = { expanded = !expanded }) {
            Text(if (expanded) "Read less" else "Read more")
        }
    }
}`,
    preview: (
      <div className="w-56 text-left">
        <div className="relative">
          <p className="line-clamp-3 text-xs leading-relaxed text-foreground">
            The trail climbs through old-growth cedar before opening onto a ridge with views across the whole valley, switchbacks easing the final push to the summit cairn.
          </p>
          <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-card to-transparent" />
        </div>
        <button type="button" className="mt-1 text-[11px] font-semibold text-primary">Read more</button>
      </div>
    ),
  },
  {
    id: "disclosure-tree",
    name: "Tree view",
    category: "disclosures",
    description: "A nested file tree whose folders rotate open to reveal indented children.",
    tags: ["animated"],
    code: `@Composable
fun TreeNode(label: String, children: List<String>) {
    var open by remember { mutableStateOf(true) }
    val rotation by animateFloatAsState(if (open) 90f else 0f, label = "tw")
    Column {
        Row(
            Modifier.fillMaxWidth().clickable { open = !open }.padding(vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Icon(
                Icons.Filled.ChevronRight, null,
                Modifier.size(16.dp).rotate(rotation),
                tint = MaterialTheme.colorScheme.onSurfaceVariant,
            )
            Spacer(Modifier.width(4.dp))
            Icon(Icons.Filled.Folder, null, Modifier.size(16.dp),
                tint = Color(0xFF3B82F6))
            Spacer(Modifier.width(6.dp))
            Text(label, style = MaterialTheme.typography.bodyMedium)
        }
        AnimatedVisibility(open) {
            Column(Modifier.padding(start = 26.dp)) {
                children.forEach { c ->
                    Row(Modifier.padding(vertical = 5.dp),
                        verticalAlignment = Alignment.CenterVertically) {
                        Icon(Icons.AutoMirrored.Filled.InsertDriveFile, null,
                            Modifier.size(14.dp),
                            tint = MaterialTheme.colorScheme.onSurfaceVariant)
                        Spacer(Modifier.width(6.dp))
                        Text(c, style = MaterialTheme.typography.bodySmall)
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-48 text-left text-foreground">
        <div className="flex items-center gap-1.5 py-1">
          <ChevronRight className="size-3.5 rotate-90 text-muted-foreground" />
          <Folder className="size-3.5 text-blue-500" />
          <span className="text-xs">components</span>
        </div>
        <div className="ml-6 space-y-1 text-[11px] text-muted-foreground">
          <p>button.kt</p>
          <p>card.kt</p>
          <p>avatar.kt</p>
        </div>
      </div>
    ),
  },
  {
    id: "disclosure-spoiler",
    name: "Spoiler reveal",
    category: "disclosures",
    description: "Blurred text that sharpens into view when the reader taps to reveal it.",
    tags: ["animated"],
    code: `@Composable
fun Spoiler(text: String) {
    var revealed by remember { mutableStateOf(false) }
    val blur by animateDpAsState(if (revealed) 0.dp else 8.dp, label = "blur")
    Surface(
        onClick = { revealed = true },
        shape = MaterialTheme.shapes.small,
        color = MaterialTheme.colorScheme.surfaceVariant,
    ) {
        Text(
            text,
            Modifier.padding(12.dp).blur(blur),
            style = MaterialTheme.typography.bodyMedium,
        )
    }
}`,
    preview: (
      <div className="w-48 rounded-lg bg-muted p-3 text-left">
        <p className="text-xs text-foreground blur-[5px] select-none">
          The killer was the lighthouse keeper all along.
        </p>
        <p className="mt-2 text-[10px] font-medium text-muted-foreground">Tap to reveal</p>
      </div>
    ),
  },
  {
    id: "disclosure-filter-group",
    name: "Filter group",
    category: "disclosures",
    description: "A collapsible filter section showing an applied-count badge when closed.",
    tags: ["animated"],
    code: `@Composable
fun FilterGroup(title: String, applied: Int, options: List<String>) {
    var open by remember { mutableStateOf(false) }
    val rotation by animateFloatAsState(if (open) 180f else 0f, label = "fg")
    Column {
        Row(
            Modifier.fillMaxWidth().clickable { open = !open }.padding(vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(title, Modifier.weight(1f), style = MaterialTheme.typography.titleSmall)
            if (applied > 0 && !open) {
                Badge { Text("$applied") }
                Spacer(Modifier.width(8.dp))
            }
            Icon(Icons.Filled.ExpandMore, null, Modifier.rotate(rotation))
        }
        AnimatedVisibility(open) {
            Column {
                options.forEach { o ->
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Checkbox(checked = false, onCheckedChange = {})
                        Text(o, style = MaterialTheme.typography.bodyMedium)
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 text-left">
        <div className="flex items-center justify-between border-b py-2.5">
          <span className="text-sm font-semibold text-foreground">Brand</span>
          <div className="flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">2</span>
            <ListFilter className="size-4 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center justify-between py-2.5">
          <span className="text-sm font-semibold text-foreground">Price</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </div>
      </div>
    ),
  },
  {
    id: "disclosure-step",
    name: "Collapsible step",
    category: "disclosures",
    description: "A numbered onboarding step that expands its body while others stay collapsed.",
    tags: ["animated"],
    code: `@Composable
fun StepSection(index: Int, title: String, body: String, open: Boolean, onToggle: () -> Unit) {
    val accent = Color(0xFF6366F1)
    Row(Modifier.fillMaxWidth().clickable { onToggle() }.padding(vertical = 8.dp)) {
        Box(
            Modifier.size(26.dp).clip(CircleShape)
                .background(if (open) accent
                    else MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center,
        ) {
            Text(
                "$index",
                color = if (open) Color.White
                    else MaterialTheme.colorScheme.onSurfaceVariant,
                style = MaterialTheme.typography.labelMedium,
            )
        }
        Spacer(Modifier.width(12.dp))
        Column(Modifier.weight(1f)) {
            Text(title, style = MaterialTheme.typography.titleSmall)
            AnimatedVisibility(open) {
                Text(body, Modifier.padding(top = 4.dp),
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
    }
}`,
    preview: (
      <div className="w-56 text-left">
        <div className="flex gap-3">
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-indigo-500 text-[11px] font-semibold text-white">1</span>
          <div>
            <p className="text-xs font-semibold text-foreground">Connect your bank</p>
            <p className="mt-1 text-[11px] text-muted-foreground">Securely link an account in seconds with read-only access.</p>
          </div>
        </div>
        <div className="mt-2 flex gap-3">
          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground">2</span>
          <p className="pt-0.5 text-xs font-semibold text-foreground">Set a budget</p>
        </div>
      </div>
    ),
  },
  {
    id: "disclosure-details-code",
    name: "Details block",
    category: "disclosures",
    description: "A view-details toggle that unfolds a monospace payload for inspection.",
    tags: ["animated"],
    code: `@Composable
fun DetailsBlock(summary: String, payload: String) {
    var open by remember { mutableStateOf(false) }
    val rotation by animateFloatAsState(if (open) 90f else 0f, label = "db")
    Column {
        Row(
            Modifier.fillMaxWidth().clickable { open = !open },
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Icon(Icons.Filled.ChevronRight, null, Modifier.rotate(rotation).size(18.dp))
            Spacer(Modifier.width(6.dp))
            Text(summary, style = MaterialTheme.typography.labelLarge)
        }
        AnimatedVisibility(open) {
            Surface(
                color = MaterialTheme.colorScheme.surfaceVariant,
                shape = MaterialTheme.shapes.small,
                modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
            ) {
                Text(
                    payload,
                    Modifier.padding(12.dp),
                    fontFamily = FontFamily.Monospace,
                    style = MaterialTheme.typography.bodySmall,
                )
            }
        }
    }
}`,
    preview: (
      <div className="w-52 text-left">
        <div className="flex items-center gap-1.5">
          <ChevronRight className="size-4 rotate-90 text-foreground" />
          <span className="text-xs font-medium text-foreground">View response</span>
        </div>
        <pre className="mt-2 rounded-md bg-muted p-2.5 font-mono text-[10px] leading-relaxed text-foreground">{`{ "status": 200,
  "ok": true }`}</pre>
      </div>
    ),
  },
  {
    id: "disclosure-media",
    name: "Media expander",
    category: "disclosures",
    description: "A compact list row that expands to reveal a media thumbnail and caption.",
    tags: ["animated"],
    code: `@Composable
fun MediaExpander(title: String, caption: String) {
    var open by remember { mutableStateOf(false) }
    OutlinedCard(onClick = { open = !open }, Modifier.animateContentSize()) {
        Column(Modifier.padding(12.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(Icons.Outlined.Image, null, tint = Color(0xFF8B5CF6))
                Spacer(Modifier.width(10.dp))
                Text(title, Modifier.weight(1f),
                    style = MaterialTheme.typography.titleSmall)
                Icon(
                    Icons.Filled.ExpandMore, null,
                    Modifier.rotate(if (open) 180f else 0f),
                )
            }
            AnimatedVisibility(open) {
                Column(Modifier.padding(top = 10.dp)) {
                    Box(
                        Modifier.fillMaxWidth().height(80.dp)
                            .clip(MaterialTheme.shapes.medium)
                            .background(MaterialTheme.colorScheme.surfaceVariant),
                    )
                    Text(caption, Modifier.padding(top = 6.dp),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant)
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 rounded-xl border bg-card p-3 text-left">
        <div className="flex items-center gap-2.5">
          <Eye className="size-4 text-violet-500" />
          <span className="flex-1 text-xs font-semibold text-foreground">Trip recap</span>
          <ChevronDown className="size-4 rotate-180 text-muted-foreground" />
        </div>
        <div className="mt-2.5 h-16 rounded-lg bg-gradient-to-br from-violet-300 to-violet-500 dark:from-violet-700 dark:to-violet-900" />
        <p className="mt-1.5 text-[11px] text-muted-foreground">Sunrise over the north ridge.</p>
      </div>
    ),
  },
  {
    id: "disclosure-bordered-group",
    name: "Bordered group",
    category: "disclosures",
    description: "A single bordered card holding a divided group of independently toggling rows.",
    tags: ["animated"],
    code: `@Composable
fun DisclosureGroup(items: List<Pair<String, String>>) {
    OutlinedCard {
        Column {
            items.forEachIndexed { i, (title, body) ->
                var open by remember { mutableStateOf(false) }
                Column(Modifier.clickable { open = !open }.padding(14.dp)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(title, Modifier.weight(1f),
                            style = MaterialTheme.typography.titleSmall)
                        Icon(Icons.Filled.ExpandMore, null,
                            Modifier.rotate(if (open) 180f else 0f))
                    }
                    AnimatedVisibility(open) {
                        Text(body, Modifier.padding(top = 6.dp),
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant)
                    }
                }
                if (i < items.lastIndex) HorizontalDivider()
            }
        }
    }
}`,
    preview: (
      <div className="w-52 divide-y overflow-hidden rounded-xl border bg-card text-left">
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground">Account</span>
            <ChevronDown className="size-4 rotate-180 text-muted-foreground" />
          </div>
          <p className="mt-1.5 text-[11px] text-muted-foreground">Manage email, password and sessions.</p>
        </div>
        <div className="flex items-center justify-between p-3">
          <span className="text-xs font-semibold text-foreground">Billing</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </div>
      </div>
    ),
  },
  {
    id: "disclosure-included",
    name: "What's included",
    category: "disclosures",
    description: "A plan row that drops down a checked list of everything the tier includes.",
    tags: ["animated"],
    code: `@Composable
fun IncludedList(plan: String, perks: List<String>) {
    var open by remember { mutableStateOf(true) }
    Column {
        Row(
            Modifier.fillMaxWidth().clickable { open = !open }.padding(vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text("What's included in $plan", Modifier.weight(1f),
                style = MaterialTheme.typography.titleSmall)
            Icon(Icons.Filled.ExpandMore, null,
                Modifier.rotate(if (open) 180f else 0f))
        }
        AnimatedVisibility(open) {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                perks.forEach { p ->
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(Icons.Filled.CheckCircle, null,
                            Modifier.size(16.dp), tint = Color(0xFF16A34A))
                        Spacer(Modifier.width(8.dp))
                        Text(p, style = MaterialTheme.typography.bodyMedium)
                    }
                }
            }
        }
    }
}`,
    preview: (
      <div className="w-52 text-left">
        <div className="flex items-center justify-between py-1.5">
          <span className="text-xs font-semibold text-foreground">What&apos;s in Pro</span>
          <ChevronDown className="size-4 rotate-180 text-muted-foreground" />
        </div>
        <div className="mt-1 space-y-1.5 text-[11px] text-foreground">
          {["Unlimited projects", "Priority support", "Custom domains"].map((p) => (
            <div key={p} className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="size-3.5 text-emerald-600 dark:text-emerald-400" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10z" /></svg>
              {p}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];
