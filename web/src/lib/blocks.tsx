import type { ReactNode } from "react";
import {
  PhoneAevumCars,
  PhoneAiChatPaywall,
  PhoneAppSettings,
  PhoneBListRegister,
  PhoneBListWelcome,
  PhoneCalculator,
  PhoneCardDetail,
  PhoneCircleUpOnboarding,
  PhoneCreativityLanding,
  PhoneCryptoAccount,
  PhoneCryptoSwap,
  PhoneEzFunds,
  PhoneFileStorage,
  PhoneFinanceDashboard,
  PhoneFinsterCards,
  PhoneIntegrationConnect,
  PhoneMeditateBrowse,
  PhoneMeditateHome,
  PhoneMeditatePaywall,
  PhoneMeditationTrial,
  PhoneMemrizzPaywall,
  PhoneNotificationsCenter,
  PhoneProfileSettings,
  PhoneSearchFilters,
  PhoneSearchServices,
  PhoneSleepAnalytics,
  PhoneSocialDiscover,
  PhoneSpendingStatistic,
  PhoneSubscriptionPremium,
  PhoneWalletHome,
  PhoneWalletJames,
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
    description: "A two-screen registration flow with a colorful mosaic splash, form fields, and social sign-up options.",
    preview: <PhoneBListWelcome />,
    code: `// ── Welcome screen ─────────────────────────────────────────────
@Composable
fun WelcomeScreen(onRegister: () -> Unit, onSignIn: () -> Unit) {
    val accent = Color(0xFF7C3AED) // violet-700
    Column(Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)) {
        MosaicPattern(Modifier.fillMaxWidth().height(260.dp))
        Column(
            Modifier
                .weight(1f)
                .padding(horizontal = 28.dp)
                .padding(bottom = 36.dp),
            verticalArrangement = Arrangement.Center,
        ) {
            Text(
                "Welcome to B-List",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.ExtraBold,
            )
            Text(
                "Record everything you need in one place " +
                    "in a few seconds and easily.",
                modifier = Modifier.padding(top = 12.dp),
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center,
            )
            Spacer(Modifier.height(28.dp))
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                Button(
                    onClick = onRegister,
                    modifier = Modifier.weight(1f),
                    shape = CircleShape,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = accent,
                    ),
                ) { Text("Register") }
                OutlinedButton(
                    onClick = onSignIn,
                    modifier = Modifier.weight(1f),
                    shape = CircleShape,
                    border = BorderStroke(1.5.dp, accent),
                    colors = ButtonDefaults.outlinedButtonColors(
                        contentColor = accent,
                    ),
                ) { Text("Sign in") }
            }
        }
    }
}

// ── Register screen ──────────────────────────────────────────────
@Composable
fun RegisterScreen(onBack: () -> Unit, onRegister: () -> Unit) {
    val accent = Color(0xFF7C3AED)
    var name by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var passwordVisible by remember { mutableStateOf(false) }

    Column(Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)) {
        // Mosaic header with back button
        Box {
            MosaicPattern(
                Modifier
                    .fillMaxWidth()
                    .height(140.dp)
                    .align(Alignment.TopEnd),
            )
            IconButton(
                onClick = onBack,
                modifier = Modifier.padding(top = 8.dp, start = 4.dp),
            ) {
                Icon(
                    Icons.AutoMirrored.Filled.ArrowBack,
                    contentDescription = "Back",
                )
            }
        }

        Column(
            Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp)
                .padding(bottom = 32.dp),
        ) {
            Text(
                "Create a new account",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.ExtraBold,
            )
            Text(
                "Please enter your information below to create an account.",
                modifier = Modifier.padding(top = 8.dp),
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
            Spacer(Modifier.height(20.dp))

            OutlinedTextField(
                value = name,
                onValueChange = { name = it },
                placeholder = { Text("Full name") },
                singleLine = true,
                shape = RoundedCornerShape(14.dp),
                modifier = Modifier.fillMaxWidth(),
            )
            Spacer(Modifier.height(12.dp))
            OutlinedTextField(
                value = email,
                onValueChange = { email = it },
                placeholder = { Text("Email") },
                singleLine = true,
                keyboardOptions = KeyboardOptions(
                    keyboardType = KeyboardType.Email,
                ),
                shape = RoundedCornerShape(14.dp),
                modifier = Modifier.fillMaxWidth(),
            )
            Spacer(Modifier.height(12.dp))
            OutlinedTextField(
                value = password,
                onValueChange = { password = it },
                placeholder = { Text("Password") },
                singleLine = true,
                visualTransformation = if (passwordVisible)
                    VisualTransformation.None
                else
                    PasswordVisualTransformation(),
                trailingIcon = {
                    IconButton(
                        onClick = { passwordVisible = !passwordVisible },
                    ) {
                        Icon(
                            if (passwordVisible) Icons.Filled.Visibility
                            else Icons.Filled.VisibilityOff,
                            contentDescription = "Toggle password",
                        )
                    }
                },
                shape = RoundedCornerShape(14.dp),
                modifier = Modifier.fillMaxWidth(),
            )
            Spacer(Modifier.height(20.dp))

            Button(
                onClick = onRegister,
                modifier = Modifier.fillMaxWidth(),
                shape = CircleShape,
                colors = ButtonDefaults.buttonColors(
                    containerColor = accent,
                ),
            ) { Text("Register now") }

            Spacer(Modifier.height(16.dp))
            Text(
                "or sign up with",
                modifier = Modifier.fillMaxWidth(),
                textAlign = TextAlign.Center,
                style = MaterialTheme.typography.labelMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
            Spacer(Modifier.height(12.dp))

            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center,
            ) {
                listOf("Facebook", "Google", "Apple").forEach { provider ->
                    OutlinedIconButton(
                        onClick = {},
                        modifier = Modifier.size(48.dp),
                        shape = CircleShape,
                    ) {
                        Icon(
                            when (provider) {
                                "Facebook" -> Icons.Filled.Facebook
                                "Google" -> Icons.Filled.Android
                                else -> Icons.Filled.Apple
                            },
                            contentDescription = provider,
                            modifier = Modifier.size(20.dp),
                        )
                    }
                    Spacer(Modifier.width(12.dp))
                }
            }

            Spacer(Modifier.height(16.dp))
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center,
            ) {
                Text(
                    "Already have an account? ",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Text(
                    "Sign In",
                    style = MaterialTheme.typography.bodySmall,
                    fontWeight = FontWeight.SemiBold,
                    color = accent,
                )
            }
        }
    }
}

// ── Mosaic composable (shared) ───────────────────────────────────
@Composable
private fun MosaicPattern(modifier: Modifier = Modifier) {
    val colors = listOf(
        Color(0xFFF97316), Color(0xFFA855F7),
        Color(0xFF14B8A6), Color(0xFFEC4899),
    )
    // 5 × 4 grid of quarter-circle tiles, 52dp each
    val tileSize = 52.dp
    val cols = 5
    val rows = 4
    Canvas(modifier.size(width = tileSize * cols, height = tileSize * rows)) {
        val px = tileSize.toPx()
        repeat(rows) { row ->
            repeat(cols) { col ->
                val idx = row * cols + col
                val color = colors[idx % colors.size]
                val rot = (idx % 4) * 90f
                withTransform({
                    translate(col * px, row * px)
                    rotate(rot, pivot = Offset(px / 2, px / 2))
                }) {
                    // A full 2×2 circle, offset so only the top-left quadrant shows
                    drawCircle(
                        color = color,
                        radius = px,
                        center = Offset(0f, 0f),
                    )
                }
            }
        }
    }
}`,
  },
  {
    id: "auth-register",
    name: "Auth Register",
    description: "The register form screen from the B-List flow: fields for name, email and password with social sign-up.",
    preview: <PhoneBListRegister />,
    code: `// See the "Auth" block for the full two-screen flow including WelcomeScreen,
// RegisterScreen, and the shared MosaicPattern composable.`,
  },
  {
    id: "finance-dashboard",
    name: "Finance Dashboard",
    description: "A personal-finance home screen with a teal balance card, quick-action row and live transaction list.",
    preview: <PhoneFinanceDashboard />,
    code: `data class Transaction(
    val name: String,
    val date: String,
    val amount: String,
    val positive: Boolean,
)

@Composable
fun FinanceDashboardScreen(
    userName: String,
    balance: String,
    transactions: List<Transaction>,
    onWithdraw: () -> Unit,
    onHistory: () -> Unit,
) {
    val teal = Color(0xFF3EADA0)
    val tealDark = Color(0xFF1A3A38)
    val actions = listOf("Scan", "Transfer", "Topup", "Partner", "Promo")

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color(0xFFF0F5F4))
            .verticalScroll(rememberScrollState()),
    ) {
        // Header
        Row(
            modifier = Modifier.fillMaxWidth().padding(20.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Surface(
                shape = CircleShape,
                color = teal.copy(alpha = 0.3f),
                modifier = Modifier.size(40.dp),
            ) {}
            Spacer(Modifier.width(12.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    "Good Morning,",
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Text(userName, style = MaterialTheme.typography.titleSmall)
            }
            IconButton(onClick = {}) {
                Icon(Icons.Outlined.Notifications, "Notifications")
            }
        }

        // Balance card
        Box(
            modifier = Modifier
                .padding(horizontal = 16.dp)
                .fillMaxWidth()
                .clip(RoundedCornerShape(24.dp))
                .background(
                    Brush.linearGradient(
                        listOf(Color(0xFF5AC8BE), Color(0xFF3EADA0), Color(0xFF2A7D74)),
                    ),
                )
                .padding(20.dp),
        ) {
            Column {
                Row(
                    Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(
                        "Available Balance",
                        color = Color.White.copy(alpha = 0.8f),
                        style = MaterialTheme.typography.labelMedium,
                    )
                    Spacer(Modifier.width(4.dp))
                    Icon(
                        Icons.Outlined.Visibility,
                        contentDescription = "Show balance",
                        tint = Color.White.copy(alpha = 0.8f),
                        modifier = Modifier.size(16.dp),
                    )
                    Spacer(Modifier.weight(1f))
                    Surface(
                        color = Color.White.copy(alpha = 0.2f),
                        shape = CircleShape,
                    ) {
                        Text(
                            "🇺🇸 US Dollar",
                            modifier = Modifier.padding(
                                horizontal = 10.dp, vertical = 4.dp
                            ),
                            color = Color.White,
                            style = MaterialTheme.typography.labelSmall,
                        )
                    }
                }
                Spacer(Modifier.height(12.dp))
                Text(
                    "$ $balance",
                    color = Color.White,
                    style = MaterialTheme.typography.headlineLarge,
                    fontWeight = FontWeight.ExtraBold,
                )
                Spacer(Modifier.height(16.dp))
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    Button(
                        onClick = onWithdraw,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = tealDark,
                        ),
                        shape = CircleShape,
                        contentPadding = PaddingValues(
                            horizontal = 16.dp, vertical = 8.dp
                        ),
                    ) {
                        Icon(
                            Icons.Filled.CallMade,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp),
                        )
                        Spacer(Modifier.width(4.dp))
                        Text("Withdraw")
                    }
                    OutlinedButton(
                        onClick = onHistory,
                        shape = CircleShape,
                        colors = ButtonDefaults.outlinedButtonColors(
                            containerColor = Color.White.copy(alpha = 0.9f),
                        ),
                        border = BorderStroke(0.dp, Color.Transparent),
                        contentPadding = PaddingValues(
                            horizontal = 16.dp, vertical = 8.dp
                        ),
                    ) {
                        Icon(
                            Icons.Outlined.History,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp),
                            tint = MaterialTheme.colorScheme.onSurface,
                        )
                        Spacer(Modifier.width(4.dp))
                        Text(
                            "History",
                            color = MaterialTheme.colorScheme.onSurface,
                        )
                    }
                }
            }
        }

        // Quick actions
        Card(
            modifier = Modifier
                .padding(horizontal = 16.dp)
                .padding(top = 12.dp)
                .fillMaxWidth(),
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surface,
            ),
            elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 12.dp),
                horizontalArrangement = Arrangement.SpaceAround,
            ) {
                actions.forEachIndexed { i, label ->
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Surface(
                            shape = CircleShape,
                            color = if (i == 1) tealDark
                                else MaterialTheme.colorScheme.surfaceVariant,
                            modifier = Modifier.size(44.dp),
                        ) {
                            Box(contentAlignment = Alignment.Center) {
                                Icon(
                                    when (i) {
                                        0 -> Icons.Outlined.QrCodeScanner
                                        1 -> Icons.Filled.SwapHoriz
                                        2 -> Icons.Filled.Add
                                        3 -> Icons.Outlined.Group
                                        else -> Icons.Outlined.Discount
                                    },
                                    contentDescription = label,
                                    modifier = Modifier.size(20.dp),
                                    tint = if (i == 1) Color.White
                                        else MaterialTheme.colorScheme.onSurfaceVariant,
                                )
                            }
                        }
                        Spacer(Modifier.height(4.dp))
                        Text(
                            label,
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                }
            }
        }

        // Transaction history
        Card(
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth(),
            shape = RoundedCornerShape(24.dp),
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.surface,
            ),
            elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
        ) {
            Column(Modifier.padding(16.dp)) {
                Row(
                    Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(
                        "Transaction history",
                        style = MaterialTheme.typography.titleSmall,
                        fontWeight = FontWeight.ExtraBold,
                    )
                    TextButton(onClick = {}) {
                        Text(
                            "View all",
                            color = teal,
                            style = MaterialTheme.typography.labelMedium,
                        )
                    }
                }
                Spacer(Modifier.height(8.dp))
                transactions.forEach { tx ->
                    ListItem(
                        leadingContent = {
                            Surface(
                                shape = CircleShape,
                                color = teal.copy(alpha = 0.15f),
                                modifier = Modifier.size(40.dp),
                            ) {
                                Box(contentAlignment = Alignment.Center) {
                                    Text(
                                        tx.name.take(2).uppercase(),
                                        style = MaterialTheme.typography.labelSmall,
                                        fontWeight = FontWeight.Bold,
                                        color = teal,
                                    )
                                }
                            }
                        },
                        headlineContent = {
                            Text(
                                tx.name,
                                style = MaterialTheme.typography.bodyMedium,
                                fontWeight = FontWeight.SemiBold,
                            )
                        },
                        supportingContent = {
                            Text(
                                tx.date,
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                            )
                        },
                        trailingContent = {
                            Text(
                                tx.amount,
                                style = MaterialTheme.typography.bodyMedium,
                                fontWeight = FontWeight.Bold,
                                color = if (tx.positive) teal
                                    else Color(0xFFE53935),
                            )
                        },
                        colors = ListItemDefaults.colors(
                            containerColor = Color.Transparent,
                        ),
                    )
                }
            }
        }
    }
}`,
  },
  {
    id: "social-discover",
    name: "Social Discover",
    description: "A warm-toned social feed with stories, full-bleed post cards, action counters and a floating compose button.",
    preview: <PhoneSocialDiscover />,
    code: `data class Story(
    val name: String,
    val isLive: Boolean,
)

data class Post(
    val authorName: String,
    val authorHandle: String,
    val caption: String,
    val likes: String,
    val shares: String,
    val comments: String,
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SocialDiscoverScreen(
    stories: List<Story>,
    posts: List<Post>,
    onAddStory: () -> Unit,
    onPost: () -> Unit,
) {
    val terracotta = Color(0xFFE8612C)
    val warmBg = MaterialTheme.colorScheme.background

    Scaffold(
        containerColor = warmBg,
        bottomBar = {
            Box(contentAlignment = Alignment.TopCenter) {
                NavigationBar(containerColor = warmBg) {
                    NavigationBarItem(
                        selected = true,
                        onClick = {},
                        icon = {
                            Icon(
                                Icons.Filled.Home,
                                contentDescription = "Home",
                                tint = terracotta,
                            )
                        },
                        label = {
                            Text(
                                "Home",
                                color = terracotta,
                                style = MaterialTheme.typography.labelSmall,
                            )
                        },
                    )
                    NavigationBarItem(
                        selected = false,
                        onClick = {},
                        icon = {
                            Icon(Icons.Filled.Search, contentDescription = "Search")
                        },
                        label = { Text("Search") },
                    )
                    // FAB spacer
                    NavigationBarItem(
                        selected = false,
                        onClick = {},
                        icon = { Spacer(Modifier.size(48.dp)) },
                        label = {},
                        enabled = false,
                    )
                    NavigationBarItem(
                        selected = false,
                        onClick = {},
                        icon = {
                            Icon(
                                Icons.Outlined.ChatBubbleOutline,
                                contentDescription = "Message",
                            )
                        },
                        label = { Text("Message") },
                    )
                    NavigationBarItem(
                        selected = false,
                        onClick = {},
                        icon = {
                            Icon(Icons.Outlined.Person, contentDescription = "Profile")
                        },
                        label = { Text("Profile") },
                    )
                }
                FloatingActionButton(
                    onClick = onPost,
                    modifier = Modifier.offset(y = (-24).dp),
                    containerColor = terracotta,
                    shape = CircleShape,
                ) {
                    Icon(Icons.Filled.Add, contentDescription = "New post", tint = Color.White)
                }
            }
        },
    ) { padding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(padding),
            contentPadding = PaddingValues(bottom = 16.dp),
        ) {
            // Top bar
            item {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                        .padding(top = 16.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Surface(shape = CircleShape, color = terracotta.copy(alpha = 0.2f)) {
                        Box(
                            Modifier.size(40.dp),
                            contentAlignment = Alignment.Center,
                        ) {
                            Text(
                                "Me",
                                color = terracotta,
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold,
                            )
                        }
                    }
                    IconButton(onClick = {}) {
                        Icon(Icons.Outlined.Notifications, contentDescription = "Notifications")
                    }
                }
            }

            // Title
            item {
                Text(
                    "Discover",
                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.ExtraBold,
                )
            }

            // Stories row
            item {
                LazyRow(
                    contentPadding = PaddingValues(horizontal = 16.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    item {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Surface(
                                onClick = onAddStory,
                                shape = CircleShape,
                                color = terracotta.copy(alpha = 0.08f),
                                border = BorderStroke(
                                    1.5.dp,
                                    MaterialTheme.colorScheme.outlineVariant,
                                ),
                                modifier = Modifier.size(56.dp),
                            ) {
                                Box(contentAlignment = Alignment.Center) {
                                    Icon(
                                        Icons.Filled.Add,
                                        contentDescription = "Add story",
                                        tint = terracotta,
                                    )
                                }
                            }
                            Text(
                                "Add story",
                                modifier = Modifier.padding(top = 4.dp),
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                            )
                        }
                    }
                    items(stories) { s ->
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Box {
                                Surface(
                                    shape = CircleShape,
                                    border = BorderStroke(2.dp, terracotta),
                                    modifier = Modifier
                                        .size(56.dp)
                                        .padding(2.dp),
                                ) {
                                    Box(
                                        Modifier
                                            .fillMaxSize()
                                            .background(
                                                MaterialTheme.colorScheme.surfaceVariant,
                                                CircleShape,
                                            ),
                                        contentAlignment = Alignment.Center,
                                    ) {
                                        Text(
                                            s.name.first().toString(),
                                            style = MaterialTheme.typography.labelMedium,
                                            fontWeight = FontWeight.Bold,
                                        )
                                    }
                                }
                                if (s.isLive) {
                                    Surface(
                                        modifier = Modifier
                                            .align(Alignment.BottomCenter)
                                            .offset(y = 4.dp),
                                        color = terracotta,
                                        shape = CircleShape,
                                    ) {
                                        Text(
                                            "LIVE",
                                            modifier = Modifier.padding(
                                                horizontal = 5.dp, vertical = 1.dp
                                            ),
                                            color = Color.White,
                                            style = MaterialTheme.typography.labelSmall,
                                            fontWeight = FontWeight.ExtraBold,
                                        )
                                    }
                                }
                            }
                            Text(
                                s.name,
                                modifier = Modifier.padding(top = 6.dp),
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                            )
                        }
                    }
                }
            }

            // Post cards
            items(posts) { post ->
                PostCard(post = post, accent = terracotta)
            }
        }
    }
}

@Composable
private fun PostCard(post: Post, accent: Color) {
    Box(
        modifier = Modifier
            .padding(horizontal = 12.dp)
            .padding(top = 12.dp)
            .fillMaxWidth()
            .height(240.dp)
            .clip(RoundedCornerShape(20.dp))
            .background(Color(0xFF4A3728)),
    ) {
        // Bottom gradient overlay
        Box(
            Modifier
                .fillMaxSize()
                .background(
                    Brush.verticalGradient(
                        listOf(Color.Transparent, Color(0xCC1a1208)),
                        startY = 80f,
                    ),
                ),
        )

        // Action column — right side
        Column(
            modifier = Modifier
                .align(Alignment.CenterEnd)
                .padding(end = 12.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            listOf(
                Triple(Icons.Filled.Favorite, post.likes, true),
                Triple(Icons.Outlined.Share, post.shares, false),
                Triple(Icons.Outlined.ChatBubbleOutline, post.comments, false),
            ).forEach { (icon, count, filled) ->
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Icon(
                        imageVector = icon,
                        contentDescription = null,
                        tint = if (filled) accent else Color.White,
                        modifier = Modifier.size(22.dp),
                    )
                    Text(
                        count,
                        color = Color.White,
                        style = MaterialTheme.typography.labelSmall,
                        fontWeight = FontWeight.SemiBold,
                    )
                }
            }
        }

        // Author + caption — bottom left
        Column(
            modifier = Modifier
                .align(Alignment.BottomStart)
                .padding(12.dp)
                .padding(end = 56.dp),
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Surface(
                    shape = CircleShape,
                    border = BorderStroke(2.dp, accent),
                    modifier = Modifier.size(32.dp),
                ) {
                    Box(
                        Modifier
                            .fillMaxSize()
                            .background(accent.copy(alpha = 0.3f)),
                        contentAlignment = Alignment.Center,
                    ) {
                        Text(
                            post.authorName.take(2).uppercase(),
                            color = Color.White,
                            style = MaterialTheme.typography.labelSmall,
                            fontWeight = FontWeight.Bold,
                        )
                    }
                }
                Spacer(Modifier.width(8.dp))
                Column {
                    Text(
                        post.authorName,
                        color = Color.White,
                        style = MaterialTheme.typography.labelLarge,
                        fontWeight = FontWeight.Bold,
                    )
                    Text(
                        post.authorHandle,
                        color = Color.White.copy(alpha = 0.7f),
                        style = MaterialTheme.typography.labelSmall,
                    )
                }
            }
            Text(
                post.caption,
                modifier = Modifier.padding(top = 6.dp),
                color = Color.White.copy(alpha = 0.9f),
                style = MaterialTheme.typography.bodySmall,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}`,
  },
  {
    id: "memrizz-paywall",
    name: "Memrizz Paywall",
    description: "A subscription paywall with a Lite/Pro toggle, feature list, three selectable billing plans and a subscribe CTA.",
    preview: <PhoneMemrizzPaywall />,
    code: `data class Plan(
    val label: String,
    val price: String,
    val unit: String,
    val originalPrice: String? = null,
)

@Composable
fun MemrizzPaywallScreen(
    plans: List<Plan>,
    selectedPlan: Int,
    onSelectPlan: (Int) -> Unit,
    onSubscribe: () -> Unit,
    onDismiss: () -> Unit,
) {
    val violet = Color(0xFF7C3AED)
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .verticalScroll(rememberScrollState())
            .padding(horizontal = 20.dp)
            .padding(bottom = 24.dp),
    ) {
        // Close
        Box(Modifier.fillMaxWidth().padding(top = 16.dp)) {
            IconButton(
                onClick = onDismiss,
                modifier = Modifier.align(Alignment.TopEnd).size(36.dp),
            ) {
                Icon(Icons.Filled.Close, contentDescription = "Close")
            }
        }
        // Headline
        Text(
            "Upgrade to",
            style = MaterialTheme.typography.headlineSmall,
            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f),
        )
        Text(
            "Memrizz Premium",
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.ExtraBold,
        )
        Spacer(Modifier.height(20.dp))

        // Lite / Pro segmented toggle
        Surface(
            shape = CircleShape,
            border = BorderStroke(1.dp, MaterialTheme.colorScheme.outline),
            modifier = Modifier.fillMaxWidth(),
        ) {
            Row(Modifier.padding(4.dp)) {
                Text(
                    "Lite",
                    modifier = Modifier.weight(1f).padding(vertical = 8.dp),
                    textAlign = TextAlign.Center,
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Surface(
                    color = MaterialTheme.colorScheme.onBackground,
                    shape = CircleShape,
                    modifier = Modifier.weight(1f),
                ) {
                    Text(
                        "Pro",
                        modifier = Modifier.padding(vertical = 8.dp),
                        textAlign = TextAlign.Center,
                        style = MaterialTheme.typography.bodyMedium,
                        fontWeight = FontWeight.SemiBold,
                        color = MaterialTheme.colorScheme.background,
                    )
                }
            }
        }
        Spacer(Modifier.height(20.dp))

        // Feature list
        val features = listOf(
            "Everything in Memrizz Lite",
            "Image Occlusion and Cloze decks",
            "Process documents of up to 50 Mb",
            "Generate cards in any language",
        )
        features.forEach { feature ->
            Row(
                modifier = Modifier.padding(vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Surface(
                    shape = RoundedCornerShape(10.dp),
                    border = BorderStroke(1.dp, MaterialTheme.colorScheme.outline),
                    modifier = Modifier.size(36.dp),
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Icon(
                            Icons.Outlined.Star,
                            contentDescription = null,
                            modifier = Modifier.size(18.dp),
                        )
                    }
                }
                Spacer(Modifier.width(12.dp))
                Text(feature, style = MaterialTheme.typography.bodyMedium)
            }
        }
        Spacer(Modifier.height(16.dp))

        // Plan cards
        plans.forEachIndexed { i, plan ->
            OutlinedCard(
                onClick = { onSelectPlan(i) },
                modifier = Modifier.fillMaxWidth().padding(bottom = 10.dp),
                border = if (i == selectedPlan)
                    BorderStroke(1.5.dp, violet)
                else
                    CardDefaults.outlinedCardBorder(),
                colors = CardDefaults.outlinedCardColors(
                    containerColor = if (i == selectedPlan)
                        violet.copy(alpha = 0.06f)
                    else
                        MaterialTheme.colorScheme.surface,
                ),
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(14.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(
                        plan.label,
                        style = MaterialTheme.typography.bodyLarge,
                        fontWeight = FontWeight.SemiBold,
                        color = if (i == selectedPlan) violet
                            else MaterialTheme.colorScheme.onSurface,
                    )
                    Row(verticalAlignment = Alignment.Baseline) {
                        plan.originalPrice?.let {
                            Text(
                                it,
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                                textDecoration = TextDecoration.LineThrough,
                                modifier = Modifier.padding(end = 4.dp),
                            )
                        }
                        Text(
                            plan.price,
                            style = MaterialTheme.typography.bodyLarge,
                            fontWeight = FontWeight.Bold,
                        )
                        Text(
                            " \${plan.unit}",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                }
            }
        }

        Text(
            "Cancel anytime on the App Store",
            modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp),
            textAlign = TextAlign.Center,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Button(
            onClick = onSubscribe,
            modifier = Modifier.fillMaxWidth(),
            shape = CircleShape,
            colors = ButtonDefaults.buttonColors(
                containerColor = MaterialTheme.colorScheme.onBackground,
                contentColor = MaterialTheme.colorScheme.background,
            ),
        ) {
            Text("Subscribe", fontWeight = FontWeight.SemiBold)
        }
    }
}`,
  },
  {
    id: "circleup-onboarding",
    name: "CircleUp Onboarding",
    description: "An AR social app onboarding slide with floating feature pills, progress dots and dual sign-up CTAs.",
    preview: <PhoneCircleUpOnboarding />,
    code: `@Composable
fun CircleUpOnboardingScreen(
    page: Int = 2,
    totalPages: Int = 4,
    onSignUp: () -> Unit,
    onLogIn: () -> Unit,
) {
    val indigo = Color(0xFF2D3282)
    val bg = Color(0xFF8B8FD4)

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(bg)
            .padding(horizontal = 20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Spacer(Modifier.height(28.dp))
        Text(
            "CircleUp",
            style = MaterialTheme.typography.titleLarge,
            fontWeight = FontWeight.Bold,
            color = Color.White,
        )
        Spacer(Modifier.height(16.dp))

        // Illustration card
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(220.dp)
                .clip(RoundedCornerShape(20.dp))
                .background(Color(0xFF6B6FC4)),
        ) {
            // Stars
            repeat(4) { i ->
                Text(
                    "✦",
                    color = Color.White.copy(alpha = 0.5f),
                    fontSize = if (i % 2 == 0) 10.sp else 7.sp,
                    modifier = Modifier.padding(
                        start = (16 + i * 40).dp,
                        top = (12 + i * 14).dp,
                    ),
                )
            }
            // Person silhouette
            Box(
                modifier = Modifier
                    .align(Alignment.BottomCenter)
                    .width(96.dp)
                    .height(140.dp)
                    .clip(
                        RoundedCornerShape(topStart = 48.dp, topEnd = 48.dp)
                    )
                    .background(Color.White.copy(alpha = 0.18f)),
            )
            // VR headset bar
            Box(
                modifier = Modifier
                    .align(Alignment.Center)
                    .width(72.dp)
                    .height(20.dp)
                    .offset(y = 8.dp)
                    .clip(RoundedCornerShape(6.dp))
                    .background(Color(0xFF1a1a2e).copy(alpha = 0.7f)),
            )
            // "Intuitive" pill
            Surface(
                color = Color.White,
                shape = RoundedCornerShape(12.dp),
                modifier = Modifier
                    .align(Alignment.TopStart)
                    .padding(start = 12.dp, top = 36.dp),
            ) {
                Text(
                    "Intuitive",
                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                    style = MaterialTheme.typography.labelLarge,
                    fontWeight = FontWeight.Bold,
                    color = Color(0xFF1a1a2e),
                )
            }
            // "Full integration" pill
            Surface(
                color = Color.White,
                shape = RoundedCornerShape(12.dp),
                modifier = Modifier
                    .align(Alignment.BottomEnd)
                    .padding(end = 10.dp, bottom = 36.dp),
            ) {
                Text(
                    "Full integration",
                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                    style = MaterialTheme.typography.labelLarge,
                    fontWeight = FontWeight.Bold,
                    color = Color(0xFF1a1a2e),
                )
            }
            // Emoji badge
            Surface(
                shape = CircleShape,
                color = Color.White,
                modifier = Modifier
                    .align(Alignment.TopEnd)
                    .padding(end = 20.dp, top = 56.dp)
                    .size(40.dp),
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text("😊", fontSize = 20.sp)
                }
            }
            // AR icon badge
            Surface(
                shape = CircleShape,
                color = Color.White,
                border = BorderStroke(2.dp, Color(0xFFE8612C)),
                modifier = Modifier
                    .align(Alignment.BottomStart)
                    .padding(start = 14.dp, bottom = 48.dp)
                    .size(40.dp),
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Icon(
                        Icons.Outlined.ViewInAr,
                        contentDescription = "AR",
                        tint = Color(0xFFE8612C),
                        modifier = Modifier.size(20.dp),
                    )
                }
            }
        }

        Spacer(Modifier.height(20.dp))
        // Progress dots
        Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
            repeat(totalPages) { i ->
                Box(
                    Modifier
                        .height(8.dp)
                        .width(if (i == page) 24.dp else 8.dp)
                        .clip(CircleShape)
                        .background(
                            if (i == page) Color.White
                            else Color.White.copy(alpha = 0.4f),
                        ),
                )
            }
        }

        Spacer(Modifier.height(16.dp))
        Text(
            "Easy to use",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.ExtraBold,
            color = Color.White,
        )
        Text(
            "Just select the AR button when interacting with posts, choose your desired effect or object, and watch as it magically appears on your screen",
            modifier = Modifier.padding(top = 8.dp),
            style = MaterialTheme.typography.bodyMedium,
            color = Color.White.copy(alpha = 0.8f),
            textAlign = TextAlign.Center,
        )

        Spacer(Modifier.height(24.dp))
        Button(
            onClick = onSignUp,
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(14.dp),
            colors = ButtonDefaults.buttonColors(containerColor = indigo),
        ) {
            Text(
                "Sign Up",
                style = MaterialTheme.typography.bodyLarge,
                fontWeight = FontWeight.Bold,
            )
        }
        TextButton(onClick = onLogIn, modifier = Modifier.padding(top = 4.dp)) {
            Text(
                "Log in",
                color = Color.White,
                style = MaterialTheme.typography.bodyMedium,
            )
        }
    }
}`,
  },
  {
    id: "app-settings",
    name: "App Settings",
    description: "A grouped settings screen with a profile row, preference toggles, and a red destructive account action.",
    preview: <PhoneAppSettings />,
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AppSettingsScreen(
    darkModeOn: Boolean,
    onDarkModeChange: (Boolean) -> Unit,
    onNavigate: (String) -> Unit,
    onDeactivate: () -> Unit,
    onBack: () -> Unit,
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        "Settings",
                        fontWeight = FontWeight.Bold,
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(
                            Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Back",
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.background,
                ),
            )
        },
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .background(MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f))
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 16.dp, vertical = 8.dp),
        ) {
            // Profile card
            ElevatedCard(
                onClick = { onNavigate("profile") },
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
            ) {
                ListItem(
                    leadingContent = {
                        Surface(
                            shape = CircleShape,
                            color = MaterialTheme.colorScheme.primaryContainer,
                            modifier = Modifier.size(44.dp),
                        ) {
                            Box(contentAlignment = Alignment.Center) {
                                Text("AD", fontWeight = FontWeight.Bold)
                            }
                        }
                    },
                    headlineContent = {
                        Text("Alfred Daniel", fontWeight = FontWeight.Bold)
                    },
                    supportingContent = {
                        Text("Product/UI Designer")
                    },
                    trailingContent = {
                        Icon(Icons.Filled.ChevronRight, contentDescription = null)
                    },
                )
            }

            Spacer(Modifier.height(20.dp))
            Text(
                "Other settings",
                modifier = Modifier.padding(start = 4.dp, bottom = 8.dp),
                style = MaterialTheme.typography.labelMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
            )

            // Main settings group
            ElevatedCard(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
            ) {
                Column {
                    listOf("Profile details", "Password", "Notifications").forEach { label ->
                        ListItem(
                            headlineContent = { Text(label) },
                            trailingContent = {
                                Icon(Icons.Filled.ChevronRight, contentDescription = null)
                            },
                            modifier = Modifier.clickable { onNavigate(label) },
                        )
                        HorizontalDivider(Modifier.padding(horizontal = 16.dp))
                    }
                    ListItem(
                        headlineContent = { Text("Dark mode") },
                        trailingContent = {
                            Switch(
                                checked = darkModeOn,
                                onCheckedChange = onDarkModeChange,
                            )
                        },
                    )
                }
            }

            Spacer(Modifier.height(12.dp))

            // Info / destructive group
            ElevatedCard(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
            ) {
                Column {
                    listOf("About application", "Help/FAQ").forEach { label ->
                        ListItem(
                            headlineContent = { Text(label) },
                            trailingContent = {
                                Icon(Icons.Filled.ChevronRight, contentDescription = null)
                            },
                            modifier = Modifier.clickable { onNavigate(label) },
                        )
                        HorizontalDivider(Modifier.padding(horizontal = 16.dp))
                    }
                    ListItem(
                        headlineContent = {
                            Text(
                                "Deactivate my account",
                                color = Color(0xFFDC2626),
                                fontWeight = FontWeight.Medium,
                            )
                        },
                        trailingContent = {
                            Icon(
                                Icons.Filled.ChevronRight,
                                contentDescription = null,
                                tint = Color(0xFFDC2626).copy(alpha = 0.7f),
                            )
                        },
                        modifier = Modifier.clickable { onDeactivate() },
                    )
                }
            }
        }
    }
}`,
  },
  {
    id: "ai-chat-paywall",
    name: "AI Chat Paywall",
    description: "A premium upsell with a glowing orb, social proof, feature checklist, two plan cards and a trial toggle.",
    preview: <PhoneAiChatPaywall />,
    code: `@Composable
fun AiChatPaywallScreen(onStartTrial: () -> Unit, onBack: () -> Unit) {
    val violet = Color(0xFF7C3AED)
    var updateOn by remember { mutableStateOf(true) }
    var selected by remember { mutableStateOf(0) }
    val features = listOf(
        "Higher message limits for Pro conversations",
        "Priority access to latest AI models anytime",
        "Use AI in integrated productivity tools",
        "Adjust AI response speed up to 4.5x",
    )
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background),
    ) {
        IconButton(onClick = onBack, modifier = Modifier.padding(8.dp)) {
            Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back")
        }
        Box(
            Modifier.size(96.dp).align(Alignment.CenterHorizontally)
                .clip(CircleShape)
                .background(Brush.linearGradient(listOf(violet, Color(0xFF6366F1)))),
        )
        Text(
            "Try our AI Chat Pro for free",
            Modifier.fillMaxWidth().padding(top = 16.dp),
            textAlign = TextAlign.Center,
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.ExtraBold,
        )
        Spacer(Modifier.height(20.dp))
        features.forEach { f ->
            Row(
                Modifier.fillMaxWidth().padding(horizontal = 28.dp, vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(Icons.Filled.Check, null, Modifier.size(18.dp), tint = violet)
                Spacer(Modifier.width(12.dp))
                Text(f, style = MaterialTheme.typography.bodyMedium)
            }
        }
        Spacer(Modifier.height(16.dp))
        Row(
            Modifier.padding(horizontal = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            listOf("Monthly" to "$9.05", "Annual" to "$97.88").forEachIndexed { i, (label, price) ->
                OutlinedCard(
                    onClick = { selected = i },
                    modifier = Modifier.weight(1f),
                    border = if (i == selected) BorderStroke(2.dp, violet)
                        else CardDefaults.outlinedCardBorder(),
                ) {
                    Column(Modifier.padding(12.dp)) {
                        Text(label, style = MaterialTheme.typography.labelMedium)
                        Text(price, style = MaterialTheme.typography.titleLarge,
                            fontWeight = FontWeight.ExtraBold)
                    }
                }
            }
        }
        Spacer(Modifier.weight(1f))
        Row(
            Modifier.fillMaxWidth().padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text("You'll receive an update on July 20",
                style = MaterialTheme.typography.bodyMedium)
            Switch(checked = updateOn, onCheckedChange = { updateOn = it })
        }
        Button(
            onClick = onStartTrial,
            modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 8.dp),
            shape = CircleShape,
            colors = ButtonDefaults.buttonColors(
                containerColor = MaterialTheme.colorScheme.onBackground,
                contentColor = MaterialTheme.colorScheme.background,
            ),
        ) { Text("Start 7 day free trial") }
    }
}`,
  },
  {
    id: "meditation-trial",
    name: "Meditation Trial",
    description: "A trial-explainer screen with a night-sky hero, plan toggle and a three-step timeline before billing.",
    preview: <PhoneMeditationTrial />,
    code: `data class TrialStep(val title: String, val body: String, val icon: ImageVector)

@Composable
fun TrialTimelineScreen(onStart: () -> Unit) {
    val purple = Color(0xFF9333EA)
    val steps = listOf(
        TrialStep("Today", "Unlock our library of meditations, sleep sounds, and more", Icons.Filled.Check),
        TrialStep("In 3 days", "We'll send you a reminder that your trial is ending soon", Icons.Filled.Notifications),
        TrialStep("In 5 days", "You'll be charged on December 15, cancel anytime before", Icons.Filled.Star),
    )
    Column(Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)) {
        Box(
            Modifier.fillMaxWidth().height(180.dp)
                .background(Brush.verticalGradient(listOf(Color(0xFF581C87), Color(0xFFA855F7)))),
            contentAlignment = Alignment.Center,
        ) {
            Box(Modifier.size(64.dp).clip(CircleShape).background(Color(0xFFE9D5FF)))
        }
        Text("How your trial works",
            Modifier.padding(start = 24.dp, top = 12.dp),
            style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.ExtraBold)
        Text("First 5 days free, then $9.99/month",
            Modifier.padding(start = 24.dp, top = 4.dp),
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        Spacer(Modifier.height(20.dp))
        steps.forEach { s ->
            Row(Modifier.padding(horizontal = 24.dp, vertical = 8.dp)) {
                Surface(color = purple, shape = CircleShape, modifier = Modifier.size(36.dp)) {
                    Box(contentAlignment = Alignment.Center) {
                        Icon(s.icon, null, tint = Color.White, modifier = Modifier.size(18.dp))
                    }
                }
                Spacer(Modifier.width(12.dp))
                Column {
                    Text(s.title, fontWeight = FontWeight.Bold)
                    Text(s.body, style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant)
                }
            }
        }
        Spacer(Modifier.weight(1f))
        Button(
            onClick = onStart,
            modifier = Modifier.fillMaxWidth().padding(16.dp),
            shape = CircleShape,
            colors = ButtonDefaults.buttonColors(containerColor = purple),
        ) {
            Text("Start free trial")
            Spacer(Modifier.width(8.dp))
            Icon(Icons.AutoMirrored.Filled.ArrowForward, null, Modifier.size(18.dp))
        }
    }
}`,
  },
  {
    id: "ezfunds-wallet",
    name: "EzFunds Wallet",
    description: "A sky-blue wallet home with a balance header, quick actions, a saving-goals bar and a transaction list.",
    preview: <PhoneEzFunds />,
    code: `data class Tx(val name: String, val type: String, val amount: String, val when: String)

@Composable
fun EzFundsScreen(balance: String, goalProgress: Float, transactions: List<Tx>) {
    val sky = Color(0xFF0EA5E9)
    Column(Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)) {
        Column(
            Modifier.fillMaxWidth()
                .background(Brush.verticalGradient(listOf(Color(0xFF38BDF8), sky)))
                .padding(20.dp),
        ) {
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                Text("EzFunds", color = Color.White, fontWeight = FontWeight.SemiBold)
                Row { Icon(Icons.Outlined.VisibilityOff, null, tint = Color.White)
                    Spacer(Modifier.width(12.dp))
                    Icon(Icons.Outlined.Notifications, null, tint = Color.White) }
            }
            Text("Wallet Balance", Modifier.fillMaxWidth().padding(top = 12.dp),
                textAlign = TextAlign.Center, color = Color.White.copy(alpha = 0.8f),
                style = MaterialTheme.typography.labelMedium)
            Text(balance, Modifier.fillMaxWidth(), textAlign = TextAlign.Center,
                color = Color.White, style = MaterialTheme.typography.displaySmall,
                fontWeight = FontWeight.ExtraBold)
            Row(Modifier.fillMaxWidth().padding(top = 12.dp),
                horizontalArrangement = Arrangement.SpaceBetween) {
                listOf("Transfer", "Withdraw", "Invest", "Top up").forEach {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Surface(color = Color.White.copy(alpha = 0.2f), shape = CircleShape,
                            modifier = Modifier.size(40.dp)) {}
                        Text(it, color = Color.White, style = MaterialTheme.typography.labelSmall)
                    }
                }
            }
            Surface(color = Color.White.copy(alpha = 0.15f), shape = RoundedCornerShape(16.dp),
                modifier = Modifier.fillMaxWidth().padding(top = 16.dp)) {
                Column(Modifier.padding(12.dp)) {
                    Text("Your saving goals", color = Color.White,
                        style = MaterialTheme.typography.labelSmall)
                    LinearProgressIndicator(progress = { goalProgress },
                        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                        color = Color.White, trackColor = Color.White.copy(alpha = 0.3f))
                }
            }
        }
        Text("Transaction history", Modifier.padding(16.dp),
            style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
        transactions.forEach { t ->
            ListItem(
                leadingContent = { Surface(shape = CircleShape,
                    color = MaterialTheme.colorScheme.surfaceVariant,
                    modifier = Modifier.size(36.dp)) {} },
                headlineContent = { Text(t.name) },
                supportingContent = { Text(t.type) },
                trailingContent = { Text(t.amount, fontWeight = FontWeight.Bold) },
            )
        }
    }
}`,
  },
  {
    id: "finster-cards",
    name: "Finster Cards",
    description: "A banking cards screen with a teal VISA card, masked balance, quick actions and revealable card details.",
    preview: <PhoneFinsterCards />,
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CardsScreen(cardName: String, last4: String, balance: String) {
    val teal = Color(0xFF115E59)
    Scaffold(topBar = {
        TopAppBar(title = { Text("Cards", fontWeight = FontWeight.Bold) })
    }) { padding ->
        Column(Modifier.fillMaxSize().padding(padding).padding(16.dp)) {
            Box(
                Modifier.fillMaxWidth().height(180.dp).clip(RoundedCornerShape(20.dp))
                    .background(Brush.linearGradient(listOf(teal, Color(0xFF064E3B))))
                    .padding(16.dp),
            ) {
                Text("finster", Modifier.align(Alignment.TopEnd),
                    color = Color.White, fontWeight = FontWeight.SemiBold)
                Text("**** **** **** \$last4", Modifier.align(Alignment.CenterStart),
                    color = Color.White, letterSpacing = 2.sp)
                Text(cardName, Modifier.align(Alignment.BottomStart),
                    color = Color.White.copy(alpha = 0.8f),
                    style = MaterialTheme.typography.labelMedium)
                Text("VISA", Modifier.align(Alignment.BottomEnd),
                    color = Color.White, fontWeight = FontWeight.Bold,
                    fontStyle = FontStyle.Italic)
            }
            Text("Total balance", Modifier.padding(top = 16.dp),
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                style = MaterialTheme.typography.labelMedium)
            Text(balance, style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.ExtraBold)
            Row(Modifier.fillMaxWidth().padding(top = 12.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                listOf("Transfer", "Top up", "Withdraw").forEach { label ->
                    Surface(color = MaterialTheme.colorScheme.surfaceVariant,
                        shape = RoundedCornerShape(16.dp), modifier = Modifier.weight(1f)) {
                        Column(Modifier.padding(vertical = 12.dp),
                            horizontalAlignment = Alignment.CenterHorizontally) {
                            Icon(Icons.Filled.SwapHoriz, null, tint = teal)
                            Text(label, style = MaterialTheme.typography.labelSmall)
                        }
                    }
                }
            }
        }
    }
}`,
  },
  {
    id: "notifications-center",
    name: "Notifications Center",
    description: "A grouped notifications inbox with an info banner, colored category avatars and per-section mark-as-read.",
    preview: <PhoneNotificationsCenter />,
    code: `data class Notif(val emoji: String, val title: String, val time: String, val tint: Color)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun NotificationsScreen(today: List<Notif>, onBack: () -> Unit) {
    val red = Color(0xFFEF4444)
    Scaffold(topBar = {
        TopAppBar(
            title = { Text("Notifications", fontWeight = FontWeight.Bold) },
            navigationIcon = {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back")
                }
            },
            actions = { IconButton(onClick = {}) { Icon(Icons.Filled.Settings, null) } },
        )
    }) { padding ->
        Column(Modifier.fillMaxSize().padding(padding)) {
            Surface(color = red.copy(alpha = 0.1f), shape = RoundedCornerShape(16.dp),
                modifier = Modifier.padding(16.dp).fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Icon(Icons.Filled.Notifications, null, tint = red,
                            modifier = Modifier.size(18.dp))
                        Spacer(Modifier.width(6.dp))
                        Text("Information!", color = red, fontWeight = FontWeight.Bold,
                            style = MaterialTheme.typography.labelMedium)
                    }
                    Text("There might be a brief delay while processing your ticket purchase.",
                        color = red.copy(alpha = 0.9f),
                        style = MaterialTheme.typography.bodySmall,
                        modifier = Modifier.padding(top = 6.dp))
                }
            }
            Row(Modifier.fillMaxWidth().padding(horizontal = 16.dp),
                horizontalArrangement = Arrangement.SpaceBetween) {
                Text("Today", fontWeight = FontWeight.SemiBold)
                Text("Mark all read", color = red, style = MaterialTheme.typography.labelMedium)
            }
            today.forEach { n ->
                ListItem(
                    leadingContent = {
                        Surface(color = n.tint, shape = CircleShape,
                            modifier = Modifier.size(36.dp)) {
                            Box(contentAlignment = Alignment.Center) { Text(n.emoji) }
                        }
                    },
                    headlineContent = { Text(n.title, style = MaterialTheme.typography.bodySmall) },
                    supportingContent = { Text(n.time) },
                )
            }
        }
    }
}`,
  },
  {
    id: "file-storage",
    name: "File Storage",
    description: "A cloud-storage home with a usage meter, horizontal folder cards and a recent-files list with type badges.",
    preview: <PhoneFileStorage />,
    code: `data class StoredFile(val ext: String, val name: String, val meta: String, val tint: Color)

@Composable
fun StorageScreen(used: String, available: String, progress: Float, recent: List<StoredFile>) {
    Column(Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)
        .padding(20.dp)) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Icon(Icons.Filled.Menu, "Menu")
            Icon(Icons.Filled.Search, "Search")
        }
        Text("Your storage", Modifier.padding(top = 12.dp),
            style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
        Surface(
            shape = RoundedCornerShape(16.dp),
            modifier = Modifier.fillMaxWidth().padding(top = 12.dp),
            color = Color(0xFFFBBF24),
        ) {
            Column(Modifier.padding(16.dp)) {
                Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                    Text(used, fontWeight = FontWeight.SemiBold, color = Color(0xFF1C1917))
                    Text("Available \$available", fontWeight = FontWeight.SemiBold,
                        color = Color(0xFF1C1917))
                }
                LinearProgressIndicator(progress = { progress },
                    modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                    color = Color(0xFF1C1917))
            }
        }
        Text("Recent files", Modifier.padding(top = 20.dp),
            style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
        recent.forEach { f ->
            OutlinedCard(Modifier.fillMaxWidth().padding(top = 8.dp)) {
                ListItem(
                    leadingContent = {
                        Surface(color = f.tint, shape = RoundedCornerShape(10.dp),
                            modifier = Modifier.size(36.dp)) {
                            Box(contentAlignment = Alignment.Center) {
                                Text(f.ext, color = Color.White,
                                    style = MaterialTheme.typography.labelSmall,
                                    fontWeight = FontWeight.Bold)
                            }
                        }
                    },
                    headlineContent = { Text(f.name) },
                    supportingContent = { Text(f.meta) },
                    trailingContent = { Icon(Icons.Filled.MoreVert, null) },
                )
            }
        }
    }
}`,
  },
  {
    id: "creativity-landing",
    name: "Creativity Landing",
    description: "A minimal monochrome landing with an uppercase headline, hero image, expert avatars and a pill CTA.",
    preview: <PhoneCreativityLanding />,
    code: `@Composable
fun CreativityLanding(onDetails: () -> Unit) {
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background).padding(24.dp),
    ) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            Text("Creativty", fontWeight = FontWeight.ExtraBold)
            Icon(Icons.Filled.Menu, "Menu")
        }
        Text(
            "WHERE CREATIVE & PRODUCTIVE MEET",
            Modifier.padding(top = 32.dp),
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.ExtraBold,
        )
        Box(
            Modifier.fillMaxWidth().height(128.dp).padding(top = 20.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(MaterialTheme.colorScheme.surfaceVariant),
        )
        Text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            Modifier.fillMaxWidth().padding(top = 20.dp),
            textAlign = TextAlign.Center,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Spacer(Modifier.weight(1f))
        Button(
            onClick = onDetails,
            modifier = Modifier.align(Alignment.CenterHorizontally),
            shape = CircleShape,
            colors = ButtonDefaults.buttonColors(
                containerColor = MaterialTheme.colorScheme.onBackground,
                contentColor = MaterialTheme.colorScheme.background,
            ),
        ) {
            Text("Detailed Spec")
            Spacer(Modifier.width(8.dp))
            Icon(Icons.AutoMirrored.Filled.ArrowForward, null, Modifier.size(16.dp))
        }
    }
}`,
  },
  {
    id: "sleep-analytics",
    name: "Sleep Analytics",
    description: "A dark health dashboard with semicircular sleep and strain gauges, deltas versus a 7-day average.",
    preview: <PhoneSleepAnalytics />,
    code: `@Composable
fun ArcGauge(value: Int, accent: Color, label: String) {
    Box(contentAlignment = Alignment.Center) {
        Canvas(Modifier.size(120.dp, 70.dp)) {
            val stroke = 10f
            drawArc(
                color = Color.White.copy(alpha = 0.1f),
                startAngle = 180f, sweepAngle = 180f, useCenter = false,
                style = Stroke(stroke, cap = StrokeCap.Round),
            )
            drawArc(
                color = accent,
                startAngle = 180f, sweepAngle = 180f * (value / 100f), useCenter = false,
                style = Stroke(stroke, cap = StrokeCap.Round),
            )
        }
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text("\$value", color = accent, style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.ExtraBold)
            Text(label, color = Color.White.copy(alpha = 0.5f),
                style = MaterialTheme.typography.labelSmall)
        }
    }
}

@Composable
fun SleepAnalyticsScreen() {
    Column(Modifier.fillMaxSize().background(Color(0xFF0A0A0A)).padding(16.dp)) {
        Text("Today, 27 January", color = Color.White.copy(alpha = 0.6f),
            style = MaterialTheme.typography.bodySmall)
        Surface(color = Color(0xFF141414), shape = RoundedCornerShape(16.dp),
            modifier = Modifier.fillMaxWidth().padding(top = 12.dp)) {
            Column(Modifier.padding(16.dp), horizontalAlignment = Alignment.CenterHorizontally) {
                ArcGauge(92, Color(0xFF34D399), "vs 7-day avg")
                Text("Optimal", color = Color(0xFF34D399), fontWeight = FontWeight.Bold)
                Text("Your sleep quality was excellent last night.",
                    color = Color.White.copy(alpha = 0.6f),
                    style = MaterialTheme.typography.bodySmall, textAlign = TextAlign.Center)
            }
        }
        Surface(color = Color(0xFF141414), shape = RoundedCornerShape(16.dp),
            modifier = Modifier.fillMaxWidth().padding(top = 12.dp)) {
            Column(Modifier.padding(16.dp), horizontalAlignment = Alignment.CenterHorizontally) {
                ArcGauge(36, Color(0xFFFB923C), "vs 7-day avg")
                Text("Poor", color = Color(0xFFFB923C), fontWeight = FontWeight.Bold)
            }
        }
    }
}`,
  },
  {
    id: "crypto-swap",
    name: "Crypto Swap",
    description: "A token-swap screen with pay and receive cards, a flip toggle, fee details and a slide-to-confirm action.",
    preview: <PhoneCryptoSwap />,
    code: `data class Token(val symbol: String, val amount: String, val usd: String)

@Composable
fun SwapScreen(pay: Token, receive: Token, fee: String, onSwap: () -> Unit) {
    Column(
        Modifier.fillMaxSize()
            .background(MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.3f))
            .padding(16.dp),
    ) {
        Text("Swap", Modifier.fillMaxWidth(), textAlign = TextAlign.Center,
            style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
        Spacer(Modifier.height(12.dp))
        TokenCard("You Pay", pay)
        Box(Modifier.fillMaxWidth(), contentAlignment = Alignment.Center) {
            Surface(shape = CircleShape, color = MaterialTheme.colorScheme.background,
                modifier = Modifier.size(36.dp).offset(y = (-8).dp)) {
                Box(contentAlignment = Alignment.Center) {
                    Icon(Icons.Filled.SwapVert, "Flip")
                }
            }
        }
        TokenCard("You Receive", receive)
        Spacer(Modifier.height(8.dp))
        Text("Fee: \$fee", Modifier.fillMaxWidth(), textAlign = TextAlign.Center,
            style = MaterialTheme.typography.labelMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        Spacer(Modifier.weight(1f))
        Surface(color = MaterialTheme.colorScheme.onBackground, shape = CircleShape,
            modifier = Modifier.fillMaxWidth().clickable { onSwap() }) {
            Row(Modifier.padding(6.dp), verticalAlignment = Alignment.CenterVertically) {
                Surface(shape = CircleShape, color = MaterialTheme.colorScheme.background,
                    modifier = Modifier.size(36.dp)) {
                    Box(contentAlignment = Alignment.Center) { Icon(Icons.Filled.Check, null) }
                }
                Text("Slide to Swap", Modifier.weight(1f), textAlign = TextAlign.Center,
                    color = MaterialTheme.colorScheme.background, fontWeight = FontWeight.SemiBold)
            }
        }
    }
}

@Composable
private fun TokenCard(label: String, token: Token) {
    Surface(color = MaterialTheme.colorScheme.background, shape = RoundedCornerShape(16.dp),
        modifier = Modifier.fillMaxWidth()) {
        Column(Modifier.padding(16.dp)) {
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                Text(label, style = MaterialTheme.typography.labelMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
                Text("\${token.amount} \${token.symbol}",
                    style = MaterialTheme.typography.labelMedium)
            }
            Text(token.usd, Modifier.padding(top = 8.dp),
                style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
        }
    }
}`,
  },
  {
    id: "calculator",
    name: "Calculator",
    description: "A bold calculator with a coral display panel, a dark rounded keypad and an accent equals key.",
    preview: <PhoneCalculator />,
    code: `@Composable
fun CalculatorScreen() {
    var display by remember { mutableStateOf("1000.324") }
    val coral = Color(0xFFE8531F)
    val keys = listOf(
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        ".", "0", "=", "+",
    )
    Column(Modifier.fillMaxSize().background(Color(0xFF1A1A1A))) {
        Box(
            Modifier.fillMaxWidth().weight(1f).background(coral).padding(24.dp),
            contentAlignment = Alignment.BottomEnd,
        ) {
            Text(display, color = Color.White, style = MaterialTheme.typography.displaySmall,
                fontWeight = FontWeight.Light)
        }
        LazyVerticalGrid(
            columns = GridCells.Fixed(4),
            modifier = Modifier.padding(16.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            items(keys) { k ->
                val isOp = k in listOf("/", "*", "-", "+", "=")
                Surface(
                    onClick = {},
                    shape = CircleShape,
                    color = when {
                        k == "=" -> coral
                        isOp -> Color(0xFF44403C)
                        else -> Color(0xFF292524)
                    },
                    modifier = Modifier.aspectRatio(1f),
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Text(k, color = if (isOp && k != "=") Color(0xFFFDBA74) else Color.White,
                            style = MaterialTheme.typography.titleLarge)
                    }
                }
            }
        }
    }
}`,
  },
  {
    id: "search-history",
    name: "Search History",
    description: "A search screen with recent queries grouped by day, chevron rows and a violet center compose button.",
    preview: <PhoneSearchFilters />,
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SearchHistoryScreen(today: List<String>, yesterday: List<String>) {
    var query by remember { mutableStateOf("") }
    val violet = Color(0xFF7C3AED)
    Scaffold(
        bottomBar = {
            Box(contentAlignment = Alignment.TopCenter) {
                NavigationBar {
                    NavigationBarItem(false, {}, { Icon(Icons.Filled.Home, null) })
                    NavigationBarItem(false, {}, { Icon(Icons.Outlined.ChatBubbleOutline, null) })
                    NavigationBarItem(false, {}, { Spacer(Modifier.size(48.dp)) }, enabled = false)
                    NavigationBarItem(false, {}, { Icon(Icons.Outlined.Circle, null) })
                    NavigationBarItem(false, {}, { Icon(Icons.Filled.Settings, null) })
                }
                FloatingActionButton(onClick = {}, containerColor = violet,
                    modifier = Modifier.offset(y = (-24).dp), shape = CircleShape) {
                    Icon(Icons.Filled.Add, "New", tint = Color.White)
                }
            }
        },
    ) { padding ->
        Column(Modifier.fillMaxSize().padding(padding).padding(16.dp)) {
            OutlinedTextField(
                value = query, onValueChange = { query = it },
                leadingIcon = { Icon(Icons.Filled.Search, null) },
                placeholder = { Text("Search...") },
                shape = RoundedCornerShape(14.dp),
                modifier = Modifier.fillMaxWidth(),
            )
            Text("Today", Modifier.padding(top = 16.dp, bottom = 4.dp),
                style = MaterialTheme.typography.labelMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
            today.forEach { Row(Modifier.fillMaxWidth().padding(vertical = 10.dp),
                horizontalArrangement = Arrangement.SpaceBetween) {
                Text(it); Icon(Icons.Filled.ChevronRight, null) } }
            Text("Yesterday", Modifier.padding(top = 12.dp, bottom = 4.dp),
                style = MaterialTheme.typography.labelMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant)
            yesterday.forEach { Row(Modifier.fillMaxWidth().padding(vertical = 10.dp),
                horizontalArrangement = Arrangement.SpaceBetween) {
                Text(it); Icon(Icons.Filled.ChevronRight, null) } }
        }
    }
}`,
  },
  {
    id: "integration-connect",
    name: "Integration Connect",
    description: "An OAuth-style connect sheet with paired logos, a permission checklist and documentation and source links.",
    preview: <PhoneIntegrationConnect />,
    code: `@Composable
fun IntegrationConnectScreen(
    appName: String,
    target: String,
    permissions: List<String>,
    onClose: () -> Unit,
) {
    val emerald = Color(0xFF10B981)
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background).padding(20.dp),
    ) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Surface(color = MaterialTheme.colorScheme.onBackground,
                    shape = RoundedCornerShape(10.dp), modifier = Modifier.size(36.dp)) {}
                Icon(Icons.AutoMirrored.Filled.ArrowForward, null,
                    Modifier.padding(horizontal = 8.dp).size(16.dp))
                Surface(color = MaterialTheme.colorScheme.onBackground,
                    shape = RoundedCornerShape(10.dp), modifier = Modifier.size(36.dp)) {}
            }
            IconButton(onClick = onClose) { Icon(Icons.Filled.Close, "Close") }
        }
        Text("Connect \$appName to \$target", Modifier.padding(top = 16.dp),
            style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
        Text("Generate stunning UIs with AI, then customize and deploy instantly.",
            Modifier.padding(top = 4.dp), style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        HorizontalDivider(Modifier.padding(vertical = 16.dp))
        Text("\$appName would like to", style = MaterialTheme.typography.labelMedium,
            fontWeight = FontWeight.SemiBold)
        permissions.forEach { p ->
            Row(Modifier.fillMaxWidth().padding(top = 12.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.Filled.Check, null, Modifier.size(16.dp), tint = emerald)
                    Spacer(Modifier.width(8.dp))
                    Text(p, style = MaterialTheme.typography.bodySmall)
                }
                Icon(Icons.Filled.ChevronRight, null, Modifier.size(14.dp))
            }
        }
        Spacer(Modifier.height(20.dp))
        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            OutlinedButton(onClick = {}, modifier = Modifier.weight(1f)) {
                Icon(Icons.Outlined.MenuBook, null, Modifier.size(14.dp))
                Spacer(Modifier.width(6.dp)); Text("Documentation")
            }
            OutlinedButton(onClick = {}, modifier = Modifier.weight(1f)) {
                Icon(Icons.Filled.Code, null, Modifier.size(14.dp))
                Spacer(Modifier.width(6.dp)); Text("Source")
            }
        }
    }
}`,
  },
  {
    id: "aevum-cars",
    name: "Aevum Cars",
    description: "A luxury car-finder with a hero banner, filter and sort controls, category tabs and a featured model.",
    preview: <PhoneAevumCars />,
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CarFinderScreen(categories: List<String>, selectedTab: Int) {
    Column(Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)) {
        Box(
            Modifier.fillMaxWidth().height(180.dp)
                .background(Brush.verticalGradient(
                    listOf(Color(0xFFBAE6FD), MaterialTheme.colorScheme.surfaceVariant))),
        ) {
            Row(Modifier.fillMaxWidth().padding(20.dp),
                horizontalArrangement = Arrangement.SpaceBetween) {
                Text("AEVUM", fontWeight = FontWeight.ExtraBold, letterSpacing = 2.sp)
                Icon(Icons.Filled.Menu, "Menu")
            }
            Text("Find Your Car", Modifier.align(Alignment.Center),
                color = Color.White, style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.Bold)
        }
        Row(Modifier.fillMaxWidth().padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically) {
            OutlinedButton(onClick = {}, shape = CircleShape) {
                Icon(Icons.Filled.Tune, null, Modifier.size(14.dp))
                Spacer(Modifier.width(4.dp)); Text("Filter")
            }
            Text("Sort by: Newest", style = MaterialTheme.typography.labelMedium)
        }
        ScrollableTabRow(selectedTabIndex = selectedTab, edgePadding = 16.dp) {
            categories.forEachIndexed { i, c ->
                Tab(selected = i == selectedTab, onClick = {},
                    text = { Text(c, style = MaterialTheme.typography.labelMedium) })
            }
        }
        Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Text("BMW i7", style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold)
        }
    }
}`,
  },
  {
    id: "wallet-home",
    name: "Wallet Home",
    description: "A banking home with greeting, balance, deposit and transfer, a swipeable card carousel, weekly budget and transactions.",
    preview: <PhoneWalletHome />,
    code: `data class Txn(val name: String, val time: String, val amount: String, val incoming: Boolean)

@Composable
fun WalletHomeScreen(balance: String, transactions: List<Txn>) {
    val violet = Color(0xFF7C3AED)
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)
            .verticalScroll(rememberScrollState()).padding(16.dp),
    ) {
        Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
            Surface(shape = CircleShape, color = MaterialTheme.colorScheme.onBackground,
                modifier = Modifier.size(36.dp)) {
                Box(contentAlignment = Alignment.Center) {
                    Text("A", color = MaterialTheme.colorScheme.background,
                        fontWeight = FontWeight.Bold)
                }
            }
            Spacer(Modifier.width(10.dp))
            Column(Modifier.weight(1f)) {
                Text("Hi, Andrew", fontWeight = FontWeight.Bold)
                Text("Welcome back!", style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
            Icon(Icons.Filled.BarChart, null)
        }
        Text("Your Balance", Modifier.padding(top = 16.dp),
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            style = MaterialTheme.typography.bodyMedium)
        Text(balance, style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.ExtraBold)
        Row(Modifier.padding(top = 8.dp), horizontalArrangement = Arrangement.spacedBy(10.dp)) {
            Button(onClick = {}, modifier = Modifier.weight(1f), shape = RoundedCornerShape(12.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.onBackground,
                    contentColor = MaterialTheme.colorScheme.background)) {
                Icon(Icons.Filled.Add, null, Modifier.size(16.dp)); Spacer(Modifier.width(6.dp))
                Text("Deposit")
            }
            OutlinedButton(onClick = {}, modifier = Modifier.weight(1f),
                shape = RoundedCornerShape(12.dp)) {
                Icon(Icons.Filled.NorthEast, null, Modifier.size(16.dp))
                Spacer(Modifier.width(6.dp)); Text("Transfer")
            }
        }
        Text("Transactions", Modifier.padding(top = 16.dp),
            style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
        transactions.forEach { t ->
            ListItem(
                leadingContent = { Surface(shape = CircleShape, color = violet.copy(alpha = 0.15f),
                    modifier = Modifier.size(36.dp)) {} },
                headlineContent = { Text(t.name) },
                supportingContent = { Text(t.time) },
                trailingContent = { Text(t.amount, fontWeight = FontWeight.Bold,
                    color = if (t.incoming) Color(0xFF10B981)
                        else MaterialTheme.colorScheme.onSurface) },
            )
        }
    }
}`,
  },
  {
    id: "card-detail",
    name: "Card Detail",
    description: "A debit-card detail screen with a gradient card, masked balance, transfer and withdraw, and account option rows.",
    preview: <PhoneCardDetail />,
    code: `@Composable
fun CardDetailScreen(
    cardNumber: String,
    holder: String,
    expiry: String,
    balance: String,
) {
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)
            .verticalScroll(rememberScrollState()).padding(16.dp),
    ) {
        Box(
            Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp))
                .background(Brush.linearGradient(
                    listOf(Color(0xFF3B82F6), Color(0xFF1D4ED8))))
                .padding(16.dp),
        ) {
            Column {
                Icon(Icons.Filled.AutoAwesome, null, tint = Color.White)
                Text(cardNumber, Modifier.padding(top = 24.dp), color = Color.White,
                    style = MaterialTheme.typography.titleMedium, letterSpacing = 1.sp)
                Row(Modifier.fillMaxWidth().padding(top = 12.dp),
                    horizontalArrangement = Arrangement.SpaceBetween) {
                    Column {
                        Text("Card holder", color = Color.White.copy(alpha = 0.6f),
                            style = MaterialTheme.typography.labelSmall)
                        Text(holder, color = Color.White,
                            style = MaterialTheme.typography.labelLarge)
                    }
                    Column {
                        Text("Expiry date", color = Color.White.copy(alpha = 0.6f),
                            style = MaterialTheme.typography.labelSmall)
                        Text(expiry, color = Color.White,
                            style = MaterialTheme.typography.labelLarge)
                    }
                }
            }
        }
        Text("Card Balance", Modifier.padding(top = 16.dp),
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        Text(balance, style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.ExtraBold)
        Row(Modifier.padding(top = 12.dp), horizontalArrangement = Arrangement.spacedBy(10.dp)) {
            OutlinedButton(onClick = {}, modifier = Modifier.weight(1f)) {
                Icon(Icons.Filled.Add, null, Modifier.size(16.dp))
                Spacer(Modifier.width(6.dp)); Text("Transfer")
            }
            OutlinedButton(onClick = {}, modifier = Modifier.weight(1f)) {
                Icon(Icons.Filled.Add, null, Modifier.size(16.dp))
                Spacer(Modifier.width(6.dp)); Text("Withdraw")
            }
        }
        ElevatedCard(Modifier.fillMaxWidth().padding(top = 12.dp)) {
            Column {
                listOf(
                    Icons.Outlined.Info to "Card details",
                    Icons.Outlined.Description to "Tarif information",
                    Icons.Outlined.BarChart to "Spending statistics",
                ).forEach { (icon, label) ->
                    ListItem(
                        leadingContent = { Icon(icon, null) },
                        headlineContent = { Text(label) },
                    )
                    HorizontalDivider()
                }
            }
        }
    }
}`,
  },
  {
    id: "meditate-home",
    name: "Meditate Home",
    description: "A wellness home with a mood picker, search, and locked morning meditation cards in a lime accent.",
    preview: <PhoneMeditateHome />,
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MeditateHomeScreen(onMoodSelect: (Int) -> Unit) {
    val lime = Color(0xFFA3E635)
    val moods = listOf("😄", "😠", "🙂", "😌", "😋")
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background).padding(16.dp),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Surface(shape = CircleShape, color = lime, modifier = Modifier.size(36.dp)) {}
            Spacer(Modifier.width(10.dp))
            Column(Modifier.weight(1f)) {
                Text("For you", fontWeight = FontWeight.Bold)
                Text("Good evening Max!", style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
            Icon(Icons.Outlined.WorkspacePremium, null)
            Spacer(Modifier.width(10.dp))
            Icon(Icons.Outlined.Notifications, null)
        }
        OutlinedTextField(
            value = "", onValueChange = {},
            placeholder = { Text("Search") },
            leadingIcon = { Icon(Icons.Filled.Search, null) },
            shape = CircleShape,
            modifier = Modifier.fillMaxWidth().padding(top = 12.dp),
        )
        Text("How are you feeling today?", Modifier.padding(top = 16.dp),
            style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
        Row(Modifier.fillMaxWidth().padding(top = 12.dp),
            horizontalArrangement = Arrangement.SpaceBetween) {
            moods.forEachIndexed { i, m ->
                Surface(
                    onClick = { onMoodSelect(i) },
                    shape = CircleShape,
                    color = MaterialTheme.colorScheme.surfaceVariant,
                    modifier = Modifier.size(40.dp),
                ) { Box(contentAlignment = Alignment.Center) { Text(m, fontSize = 18.sp) } }
            }
        }
        Text("This is used to curate your daily plan.", Modifier.padding(top = 8.dp),
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        Text("Morning", Modifier.padding(top = 16.dp),
            style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
        Surface(
            color = lime.copy(alpha = 0.4f), shape = RoundedCornerShape(16.dp),
            modifier = Modifier.fillMaxWidth().padding(top = 12.dp),
        ) {
            ListItem(
                colors = ListItemDefaults.colors(containerColor = Color.Transparent),
                leadingContent = { Surface(shape = RoundedCornerShape(10.dp),
                    color = MaterialTheme.colorScheme.onBackground,
                    modifier = Modifier.size(36.dp)) {} },
                headlineContent = { Text("Mental Wellness", fontWeight = FontWeight.Bold) },
                supportingContent = { Text("Cory Muscara") },
                trailingContent = { Icon(Icons.Filled.Lock, null, Modifier.size(16.dp)) },
            )
        }
    }
}`,
  },
  {
    id: "meditate-browse",
    name: "Meditate Browse",
    description: "A meditation browse screen with filter tabs, a 2x2 mood collection grid and a mindfulness program list.",
    preview: <PhoneMeditateBrowse />,
    code: `data class Collection(val title: String, val subtitle: String, val emoji: String, val tint: Color)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MeditateBrowseScreen(collections: List<Collection>, tabs: List<String>) {
    val lime = Color(0xFFA3E635)
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background).padding(16.dp),
    ) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically) {
            Text("Meditate", style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.ExtraBold)
            Row { Icon(Icons.Outlined.WorkspacePremium, null); Spacer(Modifier.width(10.dp))
                Icon(Icons.Outlined.Notifications, null) }
        }
        OutlinedTextField(
            value = "", onValueChange = {},
            placeholder = { Text("Search") },
            leadingIcon = { Icon(Icons.Filled.Search, null) },
            shape = CircleShape,
            modifier = Modifier.fillMaxWidth().padding(top = 12.dp),
        )
        ScrollableTabRow(selectedTabIndex = 0, edgePadding = 0.dp,
            modifier = Modifier.padding(top = 12.dp)) {
            tabs.forEachIndexed { i, t ->
                Tab(selected = i == 0, onClick = {}, text = { Text(t) })
            }
        }
        Text("Find a meditation", Modifier.padding(top = 16.dp),
            style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            modifier = Modifier.heightIn(max = 160.dp).padding(top = 8.dp),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            items(collections) { c ->
                Surface(color = c.tint, shape = RoundedCornerShape(12.dp)) {
                    Row(Modifier.padding(10.dp), verticalAlignment = Alignment.CenterVertically) {
                        Text(c.emoji, fontSize = 16.sp)
                        Spacer(Modifier.width(8.dp))
                        Column {
                            Text(c.title, color = Color(0xFF1C1917),
                                style = MaterialTheme.typography.labelMedium,
                                fontWeight = FontWeight.Bold)
                            Text(c.subtitle, color = Color(0xFF57534E),
                                style = MaterialTheme.typography.labelSmall)
                        }
                    }
                }
            }
        }
    }
}`,
  },
  {
    id: "meditate-paywall",
    name: "Meditate Paywall",
    description: "A premium plans screen with a countdown offer chip, three pricing tiers and a highlighted Pro feature card.",
    preview: <PhoneMeditatePaywall />,
    code: `data class MeditatePlan(val label: String, val price: String, val unit: String, val best: Boolean)

@Composable
fun MeditatePaywallScreen(plans: List<MeditatePlan>, perks: List<String>, onClose: () -> Unit) {
    val lime = Color(0xFFA3E635)
    val pink = Color(0xFFFBCFE8)
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background).padding(20.dp),
    ) {
        Box(Modifier.fillMaxWidth()) {
            IconButton(onClick = onClose, modifier = Modifier.align(Alignment.TopEnd)) {
                Icon(Icons.Filled.Close, "Close")
            }
        }
        Surface(color = lime.copy(alpha = 0.4f), shape = CircleShape,
            modifier = Modifier.align(Alignment.CenterHorizontally)) {
            Row(Modifier.padding(horizontal = 12.dp, vertical = 4.dp),
                verticalAlignment = Alignment.CenterVertically) {
                Text("Welcome offer", style = MaterialTheme.typography.labelSmall,
                    fontWeight = FontWeight.SemiBold)
                Spacer(Modifier.width(6.dp))
                Surface(color = MaterialTheme.colorScheme.onBackground, shape = CircleShape) {
                    Text("23H 59M", Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
                        color = MaterialTheme.colorScheme.background,
                        style = MaterialTheme.typography.labelSmall)
                }
            }
        }
        Text("Enjoy premium tools on every plan",
            Modifier.fillMaxWidth().padding(top = 16.dp),
            textAlign = TextAlign.Center,
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.ExtraBold)
        Row(Modifier.padding(top = 20.dp), horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.Bottom) {
            plans.forEach { pl ->
                Surface(
                    color = if (pl.best) lime else MaterialTheme.colorScheme.surface,
                    shape = RoundedCornerShape(16.dp),
                    border = if (pl.best) null
                        else BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant),
                    modifier = Modifier.weight(1f),
                ) {
                    Column(Modifier.padding(12.dp),
                        horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(pl.label, style = MaterialTheme.typography.labelSmall)
                        Text(pl.price, style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.ExtraBold)
                        Text(pl.unit, style = MaterialTheme.typography.labelSmall)
                    }
                }
            }
        }
        Surface(color = pink, shape = RoundedCornerShape(20.dp),
            modifier = Modifier.fillMaxWidth().padding(top = 16.dp)) {
            Column(Modifier.padding(16.dp), horizontalAlignment = Alignment.CenterHorizontally) {
                Text("Pro Plan", style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.ExtraBold, color = Color(0xFF1C1917))
                Text("Explore advanced tools for mindfulness and meditation",
                    Modifier.padding(top = 4.dp), textAlign = TextAlign.Center,
                    style = MaterialTheme.typography.bodySmall, color = Color(0xFF57534E))
                LazyVerticalGrid(
                    columns = GridCells.Fixed(2),
                    modifier = Modifier.heightIn(max = 100.dp).padding(top = 12.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    items(perks) { perk ->
                        Surface(color = Color.White.copy(alpha = 0.7f), shape = CircleShape) {
                            Row(Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                                verticalAlignment = Alignment.CenterVertically) {
                                Icon(Icons.Filled.Check, null, Modifier.size(12.dp),
                                    tint = Color(0xFF059669))
                                Spacer(Modifier.width(4.dp))
                                Text(perk, color = Color(0xFF1C1917),
                                    style = MaterialTheme.typography.labelSmall)
                            }
                        }
                    }
                }
            }
        }
    }
}`,
  },
  {
    id: "crypto-account",
    name: "Crypto Account",
    description: "A wallet account screen with a mesh-gradient balance card, asset filter tabs, a token row and send and receive actions.",
    preview: <PhoneCryptoAccount />,
    code: `data class Asset(val name: String, val balance: String, val amount: String)

@Composable
fun CryptoAccountScreen(total: String, assetCount: Int, assets: List<Asset>) {
    val lime = Color(0xFFA3E635)
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background).padding(16.dp),
    ) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically) {
            AssistChip(
                onClick = {},
                label = { Text("Account") },
                leadingIcon = {
                    Box(Modifier.size(10.dp).clip(CircleShape).background(lime))
                },
                trailingIcon = { Icon(Icons.Filled.ExpandMore, null) },
            )
            Row { Icon(Icons.Outlined.Description, null); Spacer(Modifier.width(10.dp))
                Icon(Icons.Outlined.Language, null) }
        }
        Box(
            Modifier.fillMaxWidth().height(170.dp).padding(top = 12.dp)
                .clip(RoundedCornerShape(24.dp))
                .background(Brush.linearGradient(
                    listOf(lime.copy(alpha = 0.5f), lime.copy(alpha = 0.15f)))),
            contentAlignment = Alignment.BottomStart,
        ) {
            Column(Modifier.padding(20.dp)) {
                Text(total, style = MaterialTheme.typography.headlineLarge,
                    fontWeight = FontWeight.ExtraBold)
                Text("\$assetCount assets", color = MaterialTheme.colorScheme.onSurfaceVariant,
                    style = MaterialTheme.typography.labelSmall)
            }
        }
        var tab by remember { mutableStateOf(0) }
        TabRow(selectedTabIndex = tab, modifier = Modifier.padding(top = 16.dp)) {
            listOf("All", "Public", "Private").forEachIndexed { i, t ->
                Tab(selected = tab == i, onClick = { tab = i }, text = { Text(t) })
            }
        }
        assets.forEach { a ->
            ListItem(
                modifier = Modifier.padding(top = 12.dp),
                leadingContent = {
                    Surface(shape = CircleShape, color = Color(0xFF3B82F6),
                        modifier = Modifier.size(36.dp)) {
                        Box(contentAlignment = Alignment.Center) {
                            Icon(Icons.Filled.AttachMoney, null, tint = Color.White)
                        }
                    }
                },
                headlineContent = { Text(a.balance, fontWeight = FontWeight.Bold) },
                supportingContent = { Text(a.amount) },
            )
        }
        Spacer(Modifier.weight(1f))
        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            Button(onClick = {}, modifier = Modifier.weight(1f), shape = CircleShape,
                colors = ButtonDefaults.buttonColors(containerColor = lime,
                    contentColor = Color(0xFF1C1917))) {
                Icon(Icons.Filled.NorthEast, null, Modifier.size(16.dp))
                Spacer(Modifier.width(6.dp)); Text("Send")
            }
            Button(onClick = {}, modifier = Modifier.weight(1f), shape = CircleShape,
                colors = ButtonDefaults.buttonColors(containerColor = lime,
                    contentColor = Color(0xFF1C1917))) {
                Icon(Icons.Filled.SouthWest, null, Modifier.size(16.dp))
                Spacer(Modifier.width(6.dp)); Text("Receive")
            }
        }
    }
}`,
  },
  {
    id: "wallet-james",
    name: "Wallet James",
    description: "A wallet home with a gradient greeting header, balance with growth, quick actions and a subscriptions list.",
    preview: <PhoneWalletJames />,
    code: `data class Subscription(val name: String, val note: String, val date: String, val amount: String, val tint: Color)

@Composable
fun WalletHeaderScreen(balance: String, change: String, items: List<Subscription>) {
    Column(Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background)) {
        Column(
            Modifier.fillMaxWidth()
                .background(Brush.linearGradient(listOf(Color(0xFF3B82F6), Color(0xFF7C3AED))))
                .padding(20.dp),
        ) {
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                Column {
                    Text("Hello, James!", color = Color.White,
                        style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.ExtraBold)
                    Text("Active your new card", color = Color.White.copy(alpha = 0.7f),
                        style = MaterialTheme.typography.labelSmall)
                }
                Surface(color = Color.White.copy(alpha = 0.2f), shape = RoundedCornerShape(14.dp),
                    modifier = Modifier.size(40.dp)) {}
            }
            Text("Wallet(USD)", Modifier.padding(top = 16.dp),
                color = Color.White.copy(alpha = 0.8f), style = MaterialTheme.typography.bodySmall)
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(balance, color = Color.White, style = MaterialTheme.typography.headlineLarge,
                    fontWeight = FontWeight.ExtraBold)
                Spacer(Modifier.width(8.dp))
                Surface(color = Color.White.copy(alpha = 0.2f), shape = CircleShape) {
                    Text(change, Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
                        color = Color.White, style = MaterialTheme.typography.labelSmall)
                }
            }
            Row(Modifier.padding(top = 12.dp), horizontalArrangement = Arrangement.spacedBy(10.dp),
                verticalAlignment = Alignment.CenterVertically) {
                Button(onClick = {}, shape = CircleShape,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Color.White.copy(alpha = 0.15f))) {
                    Text("Add"); Spacer(Modifier.width(4.dp))
                    Icon(Icons.Filled.Add, null, Modifier.size(16.dp))
                }
                listOf(Icons.Filled.NorthEast, Icons.Filled.South, Icons.Outlined.AccountBalanceWallet)
                    .forEach { icon ->
                        Surface(color = Color.White.copy(alpha = 0.15f), shape = CircleShape,
                            modifier = Modifier.size(36.dp)) {
                            Box(contentAlignment = Alignment.Center) {
                                Icon(icon, null, tint = Color.White, modifier = Modifier.size(16.dp))
                            }
                        }
                    }
            }
        }
        Text("Latest transaction", Modifier.padding(16.dp),
            style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
        items.forEach { s ->
            OutlinedCard(Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 4.dp)) {
                ListItem(
                    leadingContent = {
                        Surface(color = s.tint, shape = RoundedCornerShape(10.dp),
                            modifier = Modifier.size(36.dp)) {}
                    },
                    headlineContent = { Text(s.name, fontWeight = FontWeight.Bold) },
                    supportingContent = { Text("\${s.note}  \${s.date}") },
                    trailingContent = { Text(s.amount, fontWeight = FontWeight.Bold) },
                )
            }
        }
    }
}`,
  },
  {
    id: "spending-statistic",
    name: "Spending Statistic",
    description: "A dark analytics screen with month tabs, a smooth spending line chart with a peak marker and category cards.",
    preview: <PhoneSpendingStatistic />,
    code: `@Composable
fun SpendingStatisticScreen(months: List<String>, points: List<Float>) {
    val accent = Color(0xFF3B82F6)
    Column(Modifier.fillMaxSize().background(Color(0xFF0B1020)).padding(16.dp)) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically) {
            Icon(Icons.AutoMirrored.Filled.ArrowBack, null, tint = Color.White)
            Text("Statistic", color = Color.White, fontWeight = FontWeight.Bold)
            Icon(Icons.Filled.GridView, null, tint = Color.White)
        }
        ScrollableTabRow(selectedTabIndex = 1, edgePadding = 0.dp,
            containerColor = Color.Transparent, contentColor = Color.White,
            modifier = Modifier.padding(top = 12.dp)) {
            months.forEachIndexed { i, m ->
                Tab(selected = i == 1, onClick = {}, text = { Text(m) })
            }
        }
        Text("Subscription & Phone", Modifier.padding(top = 16.dp),
            color = Color.White.copy(alpha = 0.6f), style = MaterialTheme.typography.bodySmall)
        Canvas(Modifier.fillMaxWidth().height(120.dp).padding(top = 12.dp)) {
            val path = Path()
            val stepX = size.width / (points.size - 1)
            points.forEachIndexed { i, p ->
                val x = i * stepX
                val y = size.height * (1 - p)
                if (i == 0) path.moveTo(x, y) else path.lineTo(x, y)
            }
            drawPath(path, color = accent, style = Stroke(width = 3f, cap = StrokeCap.Round))
        }
        Text("Spending categories", Modifier.padding(top = 16.dp),
            color = Color.White, style = MaterialTheme.typography.titleSmall,
            fontWeight = FontWeight.Bold)
        Row(Modifier.padding(top = 12.dp), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            listOf(
                Icons.Filled.Phone to "Subscription & Phone",
                Icons.Filled.Home to "Housing & energy",
            ).forEach { (icon, label) ->
                Surface(color = Color.White.copy(alpha = 0.05f), shape = RoundedCornerShape(16.dp),
                    modifier = Modifier.weight(1f)) {
                    Column(Modifier.padding(12.dp)) {
                        Surface(color = Color.White.copy(alpha = 0.1f), shape = CircleShape,
                            modifier = Modifier.size(36.dp)) {
                            Box(contentAlignment = Alignment.Center) {
                                Icon(icon, null, tint = Color(0xFF93C5FD))
                            }
                        }
                        Text(label, Modifier.padding(top = 8.dp), color = Color.White,
                            style = MaterialTheme.typography.labelMedium)
                    }
                }
            }
        }
    }
}`,
  },
  {
    id: "search-services",
    name: "Search Services",
    description: "A service search screen with a filterable search field and a tappable list of suggested event categories.",
    preview: <PhoneSearchServices />,
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SearchServicesScreen(suggestions: List<Pair<ImageVector, String>>, onBack: () -> Unit) {
    Scaffold(topBar = {
        TopAppBar(
            title = { Text("Search", fontWeight = FontWeight.Bold) },
            navigationIcon = {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back")
                }
            },
        )
    }) { padding ->
        Column(Modifier.fillMaxSize().padding(padding).padding(16.dp)) {
            OutlinedTextField(
                value = "", onValueChange = {},
                placeholder = { Text("Search Services") },
                leadingIcon = { Icon(Icons.Filled.Search, null) },
                trailingIcon = { Icon(Icons.Filled.Tune, null) },
                shape = RoundedCornerShape(14.dp),
                modifier = Modifier.fillMaxWidth(),
            )
            Text("Suggestions", Modifier.padding(top = 16.dp),
                style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
            suggestions.forEach { (icon, label) ->
                ListItem(
                    leadingContent = { Icon(icon, null) },
                    headlineContent = { Text(label) },
                    trailingContent = { Icon(Icons.Filled.NorthEast, null, Modifier.size(16.dp)) },
                )
                HorizontalDivider()
            }
        }
    }
}`,
  },
  {
    id: "subscription-premium",
    name: "Subscription Premium",
    description: "A premium upsell with a billing toggle, a highlighted price card, a feature list and an upgrade action.",
    preview: <PhoneSubscriptionPremium />,
    code: `@Composable
fun SubscriptionScreen(price: String, features: List<String>, onUpgrade: () -> Unit) {
    val blue = Color(0xFF2563EB)
    var monthly by remember { mutableStateOf(true) }
    Column(
        Modifier.fillMaxSize().background(MaterialTheme.colorScheme.background).padding(20.dp),
    ) {
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            IconButton(onClick = {}) { Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back") }
            Text("Subscription Plan", style = MaterialTheme.typography.titleMedium)
            IconButton(onClick = {}) { Icon(Icons.Filled.Close, "Close") }
        }
        Text("Unlock More. Go Premium",
            Modifier.fillMaxWidth().padding(top = 12.dp),
            textAlign = TextAlign.Center,
            style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.ExtraBold)
        Text("Unlock exclusive perks with a faster, smoother experience.",
            Modifier.fillMaxWidth().padding(top = 8.dp), textAlign = TextAlign.Center,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        Row(Modifier.fillMaxWidth().padding(top = 12.dp),
            horizontalArrangement = Arrangement.Center) {
            FilterChip(selected = monthly, onClick = { monthly = true },
                label = { Text("Monthly") })
            Spacer(Modifier.width(8.dp))
            FilterChip(selected = !monthly, onClick = { monthly = false },
                label = { Text("Yearly") })
        }
        OutlinedCard(
            Modifier.fillMaxWidth().padding(top = 16.dp),
            border = BorderStroke(1.5.dp, blue.copy(alpha = 0.4f)),
        ) {
            Column(Modifier.padding(16.dp)) {
                Text(price, style = MaterialTheme.typography.headlineSmall,
                    fontWeight = FontWeight.ExtraBold)
                Text("Take full control of your productivity.",
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    style = MaterialTheme.typography.bodySmall)
                HorizontalDivider(Modifier.padding(vertical = 12.dp))
                features.forEach { f ->
                    Row(Modifier.padding(vertical = 4.dp),
                        verticalAlignment = Alignment.CenterVertically) {
                        Icon(Icons.Filled.AutoAwesome, null, Modifier.size(16.dp), tint = blue)
                        Spacer(Modifier.width(8.dp))
                        Text(f, style = MaterialTheme.typography.bodySmall)
                    }
                }
            }
        }
        Spacer(Modifier.weight(1f))
        Button(onClick = onUpgrade, modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(14.dp),
            colors = ButtonDefaults.buttonColors(containerColor = blue)) {
            Text("Upgrade to Plan")
        }
    }
}`,
  },
  {
    id: "profile-settings",
    name: "Profile Settings",
    description: "A profile screen with an avatar header and grouped account and general settings rows over a bottom nav.",
    preview: <PhoneProfileSettings />,
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ProfileSettingsScreen(
    name: String,
    email: String,
    account: List<Pair<ImageVector, String>>,
    general: List<Pair<ImageVector, String>>,
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Profile", fontWeight = FontWeight.Bold) },
                navigationIcon = {
                    IconButton(onClick = {}) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back")
                    }
                },
                actions = { IconButton(onClick = {}) { Icon(Icons.Filled.Edit, "Edit") } },
            )
        },
        bottomBar = {
            NavigationBar {
                NavigationBarItem(false, {}, { Icon(Icons.Filled.Home, null) })
                NavigationBarItem(false, {}, { Icon(Icons.Filled.CalendarToday, null) })
                NavigationBarItem(false, {}, { Icon(Icons.AutoMirrored.Filled.List, null) })
                NavigationBarItem(true, {}, { Icon(Icons.Filled.Person, null) })
            }
        },
    ) { padding ->
        Column(
            Modifier.fillMaxSize().padding(padding)
                .verticalScroll(rememberScrollState()).padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Surface(shape = CircleShape, color = MaterialTheme.colorScheme.primaryContainer,
                modifier = Modifier.size(64.dp)) {}
            Text(name, Modifier.padding(top = 8.dp),
                style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
            Text(email, color = MaterialTheme.colorScheme.onSurfaceVariant,
                style = MaterialTheme.typography.labelSmall)
            Text("Account Setting", Modifier.fillMaxWidth().padding(top = 16.dp),
                style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
            account.forEach { (icon, label) ->
                ListItem(
                    leadingContent = { Icon(icon, null) },
                    headlineContent = { Text(label) },
                )
                HorizontalDivider()
            }
            Text("General settings", Modifier.fillMaxWidth().padding(top = 16.dp),
                style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
            general.forEach { (icon, label) ->
                ListItem(
                    leadingContent = { Icon(icon, null) },
                    headlineContent = { Text(label) },
                )
                HorizontalDivider()
            }
        }
    }
}`,
  },
];

export const getBlock = (id: string): Block | undefined => blocks.find((b) => b.id === id);
export const blockParams = (): { id: string }[] => blocks.map((b) => ({ id: b.id }));
