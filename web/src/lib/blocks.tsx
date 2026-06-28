import type { ReactNode } from "react";
import {
  PhoneChat,
  PhoneDashboard,
  PhoneLogin,
  PhoneOnboarding,
  PhonePaywall,
  PhoneSettings,
} from "@/components/site/block-screens";

export type Block = {
  id: string;
  name: string;
  description: string;
  /** Full Jetpack Compose screen source. */
  code: string;
  /** Full-screen live preview, shown inside the Android device frame. */
  preview: ReactNode;
};

export const blocks: Block[] = [
  {
    id: "auth",
    name: "Auth",
    description: "A sign-in screen with email, password reveal, primary CTA and a GitHub option.",
    preview: <PhoneLogin />,
    code: `@Composable
fun LoginScreen(onSignIn: (String, String) -> Unit, onGitHub: () -> Unit) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var visible by remember { mutableStateOf(false) }

    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        Text("Welcome back", style = MaterialTheme.typography.headlineSmall)
        Text(
            "Sign in to continue to caveui.",
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            style = MaterialTheme.typography.bodyMedium,
        )
        Spacer(Modifier.height(8.dp))
        OutlinedTextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") },
            singleLine = true,
            modifier = Modifier.fillMaxWidth(),
        )
        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            singleLine = true,
            visualTransformation = if (visible) VisualTransformation.None
                else PasswordVisualTransformation(),
            trailingIcon = {
                IconButton(onClick = { visible = !visible }) {
                    Icon(Icons.Filled.Visibility, contentDescription = "Toggle password")
                }
            },
            modifier = Modifier.fillMaxWidth(),
        )
        Button(onClick = { onSignIn(email, password) }, modifier = Modifier.fillMaxWidth()) {
            Text("Sign in")
        }
        OutlinedButton(onClick = onGitHub, modifier = Modifier.fillMaxWidth()) {
            Icon(Icons.Filled.Code, contentDescription = null)
            Spacer(Modifier.width(8.dp))
            Text("Continue with GitHub")
        }
    }
}`,
  },
  {
    id: "chat",
    name: "Chat",
    description: "A messaging conversation with incoming/outgoing bubbles and a rounded composer.",
    preview: <PhoneChat />,
    code: `data class Message(val text: String, val mine: Boolean)

@Composable
fun ChatScreen(messages: List<Message>, onSend: (String) -> Unit) {
    var draft by remember { mutableStateOf("") }
    Scaffold(
        bottomBar = {
            Row(
                Modifier.fillMaxWidth().padding(12.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                OutlinedTextField(
                    value = draft,
                    onValueChange = { draft = it },
                    placeholder = { Text("Message…") },
                    shape = CircleShape,
                    modifier = Modifier.weight(1f),
                )
                Spacer(Modifier.width(8.dp))
                FilledIconButton(onClick = { onSend(draft); draft = "" }) {
                    Icon(Icons.Filled.Send, contentDescription = "Send")
                }
            }
        },
    ) { padding ->
        LazyColumn(
            modifier = Modifier.padding(padding).fillMaxSize(),
            contentPadding = PaddingValues(12.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            items(messages) { m ->
                Row(
                    Modifier.fillMaxWidth(),
                    horizontalArrangement = if (m.mine) Arrangement.End else Arrangement.Start,
                ) {
                    Surface(
                        color = if (m.mine) Color(0xFF2563EB)
                            else MaterialTheme.colorScheme.surfaceVariant,
                        contentColor = if (m.mine) Color.White
                            else MaterialTheme.colorScheme.onSurface,
                        shape = RoundedCornerShape(16.dp),
                    ) {
                        Text(m.text, Modifier.padding(horizontal = 12.dp, vertical = 8.dp))
                    }
                }
            }
        }
    }
}`,
  },
  {
    id: "onboarding",
    name: "Onboarding",
    description: "A welcome page with an illustration, progress dots and a primary call-to-action.",
    preview: <PhoneOnboarding />,
    code: `@Composable
fun OnboardingPage(page: Int, total: Int, onNext: () -> Unit, onSkip: () -> Unit) {
    Column(
        modifier = Modifier.fillMaxSize().padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Spacer(Modifier.height(32.dp))
        Box(
            Modifier
                .size(112.dp)
                .clip(RoundedCornerShape(28.dp))
                .background(
                    Brush.linearGradient(listOf(Color(0xFFF59E0B), Color(0xFFEA580C)))
                ),
            contentAlignment = Alignment.Center,
        ) { Icon(Icons.Filled.AutoAwesome, null, tint = Color.White, modifier = Modifier.size(48.dp)) }

        Spacer(Modifier.height(32.dp))
        Text("Build faster", style = MaterialTheme.typography.titleLarge)
        Text(
            "Copy beautiful, animated Compose components straight into your app.",
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(top = 8.dp),
        )
        Spacer(Modifier.height(24.dp))
        Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
            repeat(total) { i ->
                val active = i == page
                Box(
                    Modifier
                        .height(6.dp)
                        .width(if (active) 20.dp else 6.dp)
                        .clip(CircleShape)
                        .background(
                            if (active) MaterialTheme.colorScheme.primary
                            else MaterialTheme.colorScheme.outlineVariant
                        )
                )
            }
        }
        Spacer(Modifier.weight(1f))
        Button(onClick = onNext, modifier = Modifier.fillMaxWidth(), shape = CircleShape) {
            Text("Get started")
        }
        TextButton(onClick = onSkip, modifier = Modifier.padding(top = 4.dp)) { Text("Skip") }
    }
}`,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "An overview with stat cards, a weekly bar chart and a recent-activity row.",
    preview: <PhoneDashboard />,
    code: `@Composable
fun DashboardScreen(stats: List<Stat>, weekly: List<Float>) {
    Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp)) {
        Text("Dashboard", style = MaterialTheme.typography.titleLarge)
        Spacer(Modifier.height(12.dp))
        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            stats.forEach { s ->
                ElevatedCard(Modifier.weight(1f)) {
                    Column(Modifier.padding(12.dp)) {
                        Text(s.label, style = MaterialTheme.typography.labelSmall)
                        Text(s.value, style = MaterialTheme.typography.titleMedium)
                        Text("+\${s.deltaPct}%", color = Color(0xFF16A34A),
                            style = MaterialTheme.typography.labelSmall)
                    }
                }
            }
        }
        Spacer(Modifier.height(12.dp))
        ElevatedCard {
            Column(Modifier.padding(12.dp)) {
                Text("This week", style = MaterialTheme.typography.labelMedium)
                Row(
                    Modifier.fillMaxWidth().height(96.dp).padding(top = 8.dp),
                    horizontalArrangement = Arrangement.spacedBy(6.dp),
                    verticalAlignment = Alignment.Bottom,
                ) {
                    weekly.forEach { v ->
                        Box(
                            Modifier
                                .weight(1f)
                                .fillMaxHeight(v)
                                .clip(RoundedCornerShape(4.dp))
                                .background(MaterialTheme.colorScheme.primary)
                        )
                    }
                }
            }
        }
    }
}`,
  },
  {
    id: "settings",
    name: "Settings",
    description: "A settings screen with a profile row and a grouped list of labelled switches.",
    preview: <PhoneSettings />,
    code: `@Composable
fun SettingsScreen(prefs: SnapshotStateMap<String, Boolean>) {
    Column(Modifier.fillMaxSize().padding(16.dp)) {
        Text("Settings", style = MaterialTheme.typography.titleLarge)
        Spacer(Modifier.height(12.dp))
        ListItem(
            leadingContent = {
                Surface(color = MaterialTheme.colorScheme.primary, shape = CircleShape) {
                    Text("AS", Modifier.padding(10.dp), color = MaterialTheme.colorScheme.onPrimary)
                }
            },
            headlineContent = { Text("Ada S.") },
            supportingContent = { Text("ada@caveui.dev") },
        )
        Spacer(Modifier.height(12.dp))
        ElevatedCard {
            Column {
                prefs.forEach { (label, on) ->
                    ListItem(
                        headlineContent = { Text(label) },
                        trailingContent = {
                            Switch(checked = on, onCheckedChange = { prefs[label] = it })
                        },
                    )
                    HorizontalDivider()
                }
            }
        }
    }
}`,
  },
  {
    id: "paywall",
    name: "Paywall",
    description: "An upsell screen with a feature checklist and a gradient upgrade button.",
    preview: <PhonePaywall />,
    code: `@Composable
fun PaywallScreen(features: List<String>, onUpgrade: () -> Unit) {
    Column(
        Modifier.fillMaxSize().padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Spacer(Modifier.height(24.dp))
        Box(
            Modifier.size(56.dp).clip(RoundedCornerShape(16.dp)).background(
                Brush.linearGradient(listOf(Color(0xFFF59E0B), Color(0xFFEA580C)))
            ),
            contentAlignment = Alignment.Center,
        ) { Icon(Icons.Filled.AutoAwesome, null, tint = Color.White) }
        Text("caveui Pro", style = MaterialTheme.typography.titleLarge,
            modifier = Modifier.padding(top = 12.dp))
        Spacer(Modifier.height(16.dp))
        features.forEach { f ->
            ListItem(
                leadingContent = { Icon(Icons.Filled.Check, null, tint = Color(0xFF16A34A)) },
                headlineContent = { Text(f) },
            )
        }
        Spacer(Modifier.weight(1f))
        Button(
            onClick = onUpgrade,
            modifier = Modifier.fillMaxWidth(),
            colors = ButtonDefaults.buttonColors(containerColor = Color.Transparent),
            contentPadding = PaddingValues(),
        ) {
            Box(
                Modifier
                    .fillMaxWidth()
                    .background(Brush.horizontalGradient(listOf(Color(0xFFF59E0B), Color(0xFFEA580C))))
                    .padding(vertical = 12.dp),
                contentAlignment = Alignment.Center,
            ) { Text("Upgrade — $19/mo", color = Color.White) }
        }
    }
}`,
  },
];

export const getBlock = (id: string): Block | undefined => blocks.find((b) => b.id === id);

export const blockParams = (): { id: string }[] => blocks.map((b) => ({ id: b.id }));
