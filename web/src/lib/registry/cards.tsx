import {
  Activity,
  AtSign,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Battery,
  BatteryCharging,
  Bell,
  BellRing,
  Bike,
  Bitcoin,
  Bookmark,
  Calendar,
  CalendarCheck,
  CalendarDays,
  Camera,
  Car,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock,
  Cloud,
  CloudRain,
  CloudSun,
  Coffee,
  Coins,
  Compass,
  CreditCard,
  Crown,
  Download,
  Droplets,
  Eye,
  FileText,
  Film,
  Flame,
  Footprints,
  Forward,
  Gauge,
  Gem,
  Gift,
  Globe,
  HardDrive,
  Hash,
  Headphones,
  Heart,
  Image,
  Info,
  Landmark,
  Leaf,
  LineChart,
  ListMusic,
  Loader,
  Lock,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  Mic,
  Minus,
  Moon,
  MoreHorizontal,
  Music,
  Navigation,
  Newspaper,
  Package,
  Pause,
  Percent,
  Phone,
  PieChart,
  PiggyBank,
  Plane,
  Play,
  Plus,
  Quote,
  Radio,
  Receipt,
  RefreshCw,
  Reply,
  Rss,
  Save,
  Send,
  Server,
  Settings,
  Share2,
  Shield,
  ShoppingCart,
  SkipBack,
  SkipForward,
  Sparkles,
  Speaker,
  Star,
  Sun,
  Sunrise,
  Sunset,
  Tag,
  Target,
  Thermometer,
  ThumbsUp,
  Ticket,
  Timer,
  Train,
  TrendingDown,
  TrendingUp,
  Trophy,
  Truck,
  Umbrella,
  Upload,
  User,
  UserPlus,
  Users,
  Utensils,
  Video,
  Volume2,
  Wallet,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import type { Variant } from "./types";

export const cards: Variant[] = [
  {
    id: "card-basic",
    name: "Basic",
    category: "cards",
    code: `CaveCard {
    Text("Title", style = MaterialTheme.typography.titleMedium)
    Text("A simple surface for grouping content.")
}`,
    preview: (
      <Card className="w-60">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>A simple surface for content.</CardDescription>
        </CardHeader>
      </Card>
    ),
  },
  {
    id: "card-profile",
    name: "Profile",
    category: "cards",
    code: `CaveCard {
    Row { Avatar("AS"); Column { Text("Ada S."); Text("Engineer") } }
    Button(onClick = {}) { Text("Follow") }
}`,
    preview: (
      <Card className="w-60">
        <CardContent className="flex flex-col items-center gap-2 pt-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
            AS
          </span>
          <div>
            <p className="font-semibold">Ada S.</p>
            <p className="text-sm text-muted-foreground">Engineer</p>
          </div>
          <Button size="sm" className="w-full">Follow</Button>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-stat",
    name: "Stat",
    category: "cards",
    code: `CaveCard {
    Text("Revenue", color = onSurfaceVariant)
    Text("$48.2k", style = typography.headlineMedium)
    Text("+12.5%", color = Color(0xFF16A34A))
}`,
    preview: (
      <Card className="w-60">
        <CardHeader>
          <CardDescription>Revenue</CardDescription>
          <CardTitle className="text-3xl">$48.2k</CardTitle>
          <p className="flex items-center gap-1 text-sm text-emerald-600">
            <TrendingUp className="size-4" /> +12.5%
          </p>
        </CardHeader>
      </Card>
    ),
  },
  {
    id: "card-notification",
    name: "Notification",
    category: "cards",
    code: `CaveCard {
    Row { Icon(Icons.Filled.Notifications, null); Column { Text("New message"); Text("Tap to view") } }
}`,
    preview: (
      <Card className="w-60">
        <CardContent className="flex items-center gap-3 pt-6">
          <span className="flex size-9 items-center justify-center rounded-full bg-accent">
            <Bell className="size-4" />
          </span>
          <div>
            <p className="text-sm font-medium">New message</p>
            <p className="text-xs text-muted-foreground">Tap to view</p>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-pricing",
    name: "Pricing",
    category: "cards",
    code: `CaveCard {
    Text("Pro"); Text("$19/mo", style = typography.headlineMedium)
    listOf("Unlimited", "All components", "Priority").forEach { Row { Icon(Icons.Filled.Check, null); Text(it) } }
    Button(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text("Choose Pro") }
}`,
    preview: (
      <Card className="w-60">
        <CardHeader>
          <CardDescription>Pro</CardDescription>
          <CardTitle className="text-2xl">$19<span className="text-sm font-normal text-muted-foreground">/mo</span></CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm text-muted-foreground">
          <p>✓ Unlimited projects</p>
          <p>✓ All components</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Choose Pro</Button>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "card-gradient",
    name: "Gradient",
    category: "cards",
    tags: ["animated"],
    code: `Box(
    Modifier
        .clip(RoundedCornerShape(16.dp))
        .background(Brush.linearGradient(listOf(Color(0xFFF59E0B), Color(0xFFEA580C))))
        .padding(20.dp),
) { Column { Text("caveui Pro", color = Color.White) } }`,
    preview: (
      <div className="w-60 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-5 text-white">
        <Star className="size-6" />
        <p className="mt-3 text-lg font-semibold">caveui Pro</p>
        <p className="text-sm text-white/80">Unlock every component.</p>
      </div>
    ),
  },
  {
    id: "card-product",
    name: "Product",
    category: "cards",
    tags: ["commerce"],
    code: `CaveCard {
    Box(
        Modifier
            .fillMaxWidth()
            .height(112.dp)
            .background(Brush.linearGradient(listOf(Color(0xFF38BDF8), Color(0xFF6366F1)))),
    )
    Text("Wireless Buds", style = typography.titleMedium)
    Text("Active noise cancelling", color = onSurfaceVariant)
    Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Text("$89", style = typography.titleLarge)
        Button(onClick = {}) {
            Icon(Icons.Filled.ShoppingCart, contentDescription = null, modifier = Modifier.size(18.dp))
            Spacer(Modifier.width(8.dp))
            Text("Add")
        }
    }
}`,
    preview: (
      <Card className="w-60 gap-0 py-0">
        <div className="flex h-28 w-full items-center justify-center bg-gradient-to-br from-sky-400 to-indigo-500">
          <ShoppingCart className="size-8 text-white/90" />
        </div>
        <CardContent className="space-y-3 p-4">
          <div>
            <p className="font-semibold">Wireless Buds</p>
            <p className="text-sm text-muted-foreground">Active noise cancelling</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">$89</span>
            <Button size="sm">
              <ShoppingCart className="size-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-testimonial",
    name: "Testimonial",
    category: "cards",
    code: `CaveCard {
    Row { repeat(5) { Icon(Icons.Filled.Star, null, tint = Color(0xFFF59E0B)) } }
    Text("“caveui saved me days of work. The components are gorgeous.”")
    Row(verticalAlignment = Alignment.CenterVertically) {
        Avatar(initials = "JD")
        Column {
            Text("Jordan D.", style = typography.titleSmall)
            Text("Android Developer", color = onSurfaceVariant)
        }
    }
}`,
    preview: (
      <Card className="w-64">
        <CardContent className="space-y-3 pt-6">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <p className="text-sm leading-relaxed">
            “caveui saved me days of work. The components are gorgeous.”
          </p>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              JD
            </span>
            <div>
              <p className="text-sm font-medium">Jordan D.</p>
              <p className="text-xs text-muted-foreground">Android Developer</p>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-settings",
    name: "Settings",
    category: "cards",
    code: `CaveCard {
    Text("Preferences", style = typography.titleMedium)
    Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
    ) {
        Column {
            Text("Push notifications")
            Text("Get notified on activity", color = onSurfaceVariant)
        }
        Switch(checked = pushOn, onCheckedChange = { pushOn = it })
    }
    Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
    ) {
        Column {
            Text("Dark mode")
            Text("Use a dark theme", color = onSurfaceVariant)
        }
        Switch(checked = dark, onCheckedChange = { dark = it })
    }
}`,
    preview: (
      <Card className="w-64">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="size-4" />
            Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Push notifications</p>
              <p className="text-xs text-muted-foreground">Get notified on activity</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">Dark mode</p>
              <p className="text-xs text-muted-foreground">Use a dark theme</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-login",
    name: "Login",
    category: "cards",
    tags: ["form"],
    code: `CaveCard {
    Text("Sign in", style = typography.titleMedium)
    Text("Welcome back to caveui", color = onSurfaceVariant)
    OutlinedTextField(
        value = email,
        onValueChange = { email = it },
        placeholder = { Text("you@example.com") },
        leadingIcon = { Icon(Icons.Filled.Email, contentDescription = null) },
    )
    OutlinedTextField(
        value = password,
        onValueChange = { password = it },
        placeholder = { Text("Password") },
        leadingIcon = { Icon(Icons.Filled.Lock, contentDescription = null) },
        visualTransformation = PasswordVisualTransformation(),
    )
    Button(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text("Sign in") }
}`,
    preview: (
      <Card className="w-64">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Welcome back to caveui</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative">
            <Mail className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-8" placeholder="you@example.com" />
          </div>
          <div className="relative">
            <Lock className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-8" type="password" placeholder="Password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </Card>
    ),
  },
  {
    id: "card-blog",
    name: "Blog post",
    category: "cards",
    tags: ["media"],
    code: `CaveCard {
    Box(
        Modifier
            .fillMaxWidth()
            .height(96.dp)
            .background(Brush.linearGradient(listOf(Color(0xFFFB7185), Color(0xFFD946EF)))),
    )
    AssistChip(onClick = {}, label = { Text("Design") })
    Text("Building a Compose design system", style = typography.titleMedium)
    Text("How we built reusable tokens and components from scratch.", color = onSurfaceVariant)
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.DateRange, null)
        Text("Jun 28 · 5 min read", color = onSurfaceVariant)
    }
}`,
    preview: (
      <Card className="w-64 gap-0 py-0">
        <div className="h-24 w-full bg-gradient-to-br from-rose-400 to-fuchsia-500" />
        <CardContent className="space-y-2 p-4">
          <Badge variant="secondary">Design</Badge>
          <p className="font-semibold leading-snug">Building a Compose design system</p>
          <p className="text-sm text-muted-foreground">
            How we built reusable tokens and components from scratch.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="size-3.5" />
            Jun 28 · 5 min read
          </p>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-team",
    name: "Team member",
    category: "cards",
    code: `CaveCard {
    Avatar(initials = "MR", size = 64.dp)
    Text("Maya R.", style = typography.titleMedium)
    Text("Product Designer", color = onSurfaceVariant)
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.Place, null)
        Text("Berlin, DE", color = onSurfaceVariant)
    }
    OutlinedButton(onClick = {}) {
        Icon(Icons.Filled.Email, contentDescription = null, modifier = Modifier.size(18.dp))
        Spacer(Modifier.width(8.dp))
        Text("Email")
    }
}`,
    preview: (
      <Card className="w-60">
        <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-primary text-xl font-semibold text-primary-foreground">
            MR
          </span>
          <div>
            <p className="font-semibold">Maya R.</p>
            <p className="text-sm text-muted-foreground">Product Designer</p>
          </div>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            Berlin, DE
          </p>
          <Button size="sm" variant="outline" className="w-full">
            <Mail className="size-4" />
            Email
          </Button>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-feature",
    name: "Feature",
    category: "cards",
    code: `CaveCard {
    Box(
        Modifier
            .size(40.dp)
            .clip(RoundedCornerShape(10.dp))
            .background(primary.copy(alpha = 0.12f)),
        contentAlignment = Alignment.Center,
    ) { Icon(Icons.Filled.Bolt, null, tint = primary) }
    Text("Lightning fast", style = typography.titleMedium)
    Text("Ship polished UI in minutes with copy-paste components.", color = onSurfaceVariant)
}`,
    preview: (
      <Card className="w-60">
        <CardContent className="space-y-3 pt-6">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Zap className="size-5" />
          </span>
          <p className="font-semibold">Lightning fast</p>
          <p className="text-sm text-muted-foreground">
            Ship polished UI in minutes with copy-paste components.
          </p>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-alert",
    name: "Alert",
    category: "cards",
    code: `CaveCard(
    modifier = Modifier.drawWithContent {
        drawContent()
        drawRect(Color(0xFFF59E0B), size = Size(4.dp.toPx(), size.height))
    },
) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.Bolt, null, tint = Color(0xFFF59E0B))
        Column {
            Text("Heads up!", style = typography.titleSmall)
            Text("Your free trial ends in 3 days.", color = onSurfaceVariant)
        }
    }
}`,
    preview: (
      <Card className="w-64 border-l-4 border-l-amber-500">
        <CardContent className="flex items-start gap-3 pt-6">
          <Zap className="size-5 shrink-0 text-amber-500" />
          <div>
            <p className="text-sm font-medium">Heads up!</p>
            <p className="text-sm text-muted-foreground">Your free trial ends in 3 days.</p>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-progress",
    name: "Progress",
    category: "cards",
    code: `CaveCard {
    Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
    ) {
        Text("Storage")
        Text("68%", color = onSurfaceVariant)
    }
    LinearProgressIndicator(
        progress = { 0.68f },
        modifier = Modifier.fillMaxWidth(),
    )
    Text("6.8 GB of 10 GB used", color = onSurfaceVariant)
}`,
    preview: (
      <Card className="w-64">
        <CardContent className="space-y-3 pt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Storage</p>
            <span className="text-sm text-muted-foreground">68%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: "68%" }} />
          </div>
          <p className="text-xs text-muted-foreground">6.8 GB of 10 GB used</p>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-empty",
    name: "Empty state",
    category: "cards",
    code: `CaveCard {
    Box(
        Modifier
            .size(48.dp)
            .clip(CircleShape)
            .background(surfaceVariant),
        contentAlignment = Alignment.Center,
    ) { Icon(Icons.Filled.Email, null) }
    Text("No messages", style = typography.titleSmall)
    Text("Your inbox is empty.", color = onSurfaceVariant)
    OutlinedButton(onClick = {}) { Text("Compose") }
}`,
    preview: (
      <Card className="w-64">
        <CardContent className="flex flex-col items-center gap-3 py-8 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Mail className="size-6" />
          </span>
          <div>
            <p className="text-sm font-medium">No messages</p>
            <p className="text-xs text-muted-foreground">Your inbox is empty.</p>
          </div>
          <Button size="sm" variant="outline">Compose</Button>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-badges",
    name: "Badge list",
    category: "cards",
    code: `CaveCard {
    Text("Tech stack", style = typography.titleMedium)
    Text("Tools used in this project", color = onSurfaceVariant)
    FlowRow(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
        listOf("Kotlin", "Compose", "Material 3", "Gradle", "Coroutines").forEach {
            AssistChip(onClick = {}, label = { Text(it) })
        }
    }
}`,
    preview: (
      <Card className="w-64">
        <CardHeader>
          <CardTitle>Tech stack</CardTitle>
          <CardDescription>Tools used in this project</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-1.5">
          <Badge>Kotlin</Badge>
          <Badge variant="secondary">Compose</Badge>
          <Badge variant="secondary">Material 3</Badge>
          <Badge variant="outline">Gradle</Badge>
          <Badge variant="outline">Coroutines</Badge>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-image-top",
    name: "Image top",
    category: "cards",
    tags: ["media"],
    code: `CaveCard {
    Box(
        Modifier
            .fillMaxWidth()
            .height(128.dp)
            .background(Brush.linearGradient(listOf(Color(0xFF2DD4BF), Color(0xFF059669)))),
    ) {
        Text(
            "Santorini",
            color = Color.White,
            style = typography.titleMedium,
            modifier = Modifier.align(Alignment.BottomStart).padding(12.dp),
        )
    }
    Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(Icons.Filled.Place, null)
            Text("Greece", color = onSurfaceVariant)
        }
        Text("$1,200", style = typography.titleSmall)
    }
}`,
    preview: (
      <Card className="w-60 gap-0 py-0">
        <div className="relative h-32 w-full bg-gradient-to-br from-teal-400 to-emerald-600">
          <span className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-black/40 px-2 py-0.5 text-xs text-white">
            <Star className="size-3 fill-white" />
            4.9
          </span>
          <p className="absolute bottom-2 left-3 text-base font-semibold text-white">Santorini</p>
        </div>
        <CardContent className="flex items-center justify-between p-4">
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="size-3.5" />
            Greece
          </p>
          <span className="text-sm font-semibold">$1,200</span>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-kpi",
    name: "KPI grid",
    category: "cards",
    code: `CaveCard {
    Text("Overview", style = typography.titleMedium)
    Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
        KpiCell("Users", "12.4k", "+8.1%", trendingUp = true)
        KpiCell("Revenue", "$8.2k", "+3.4%", trendingUp = true)
    }
    Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
        KpiCell("Churn", "2.1%", "-0.5%", trendingUp = false)
        KpiCell("Sessions", "48k", "+12%", trendingUp = true)
    }
}`,
    preview: (
      <Card className="w-64">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Users</p>
            <p className="text-xl font-semibold">12.4k</p>
            <p className="flex items-center gap-0.5 text-xs text-emerald-600">
              <TrendingUp className="size-3" />
              8.1%
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Revenue</p>
            <p className="text-xl font-semibold">$8.2k</p>
            <p className="flex items-center gap-0.5 text-xs text-emerald-600">
              <TrendingUp className="size-3" />
              3.4%
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Churn</p>
            <p className="text-xl font-semibold">2.1%</p>
            <p className="flex items-center gap-0.5 text-xs text-rose-600">
              <TrendingDown className="size-3" />
              0.5%
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Sessions</p>
            <p className="text-xl font-semibold">48k</p>
            <p className="flex items-center gap-0.5 text-xs text-emerald-600">
              <TrendingUp className="size-3" />
              12%
            </p>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "card-social",
    name: "Social post",
    category: "cards",
    code: `CaveCard {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Avatar(initials = "LC")
        Column {
            Text("Lena C.", style = typography.titleSmall)
            Text("@lena · 2h", color = onSurfaceVariant)
        }
    }
    Text("Just shipped my first app with caveui components. The DX is unreal!")
    Row(horizontalArrangement = Arrangement.spacedBy(20.dp)) {
        Row { Icon(Icons.Filled.FavoriteBorder, null); Text("128") }
        Row { Icon(Icons.Filled.ChatBubbleOutline, null); Text("24") }
        Row { Icon(Icons.Filled.ThumbUp, null); Text("56") }
    }
}`,
    preview: (
      <Card className="w-64">
        <CardContent className="space-y-3 pt-6">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              LC
            </span>
            <div>
              <p className="text-sm font-medium">Lena C.</p>
              <p className="text-xs text-muted-foreground">@lena · 2h</p>
            </div>
          </div>
          <p className="text-sm">
            Just shipped my first app with caveui components. The DX is unreal!
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Heart className="size-4" />
              128
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="size-4" />
              24
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="size-4" />
              56
            </span>
          </div>
        </CardContent>
      </Card>
    ),
  },
{
  id: "card-metric-countup",
  name: "Count Up Stat",
  category: "cards",
  description:
    "A headline number animates upward from zero with a delta chip.",
  tags: ["animated"],
  code: `@Composable
fun CountUpStatCard() {
  val target = 12480
  val progress = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    progress.animateTo(
      targetValue = 1f,
      animationSpec = tween(1200, easing = FastOutSlowInEasing),
    )
  }
  val value = (target * progress.value).toInt()
  ElevatedCard(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(20.dp)) {
      Text(
        text = "Total Revenue",
        style = MaterialTheme.typography.labelMedium,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
      )
      Spacer(Modifier.height(6.dp))
      Text(
        text = "$" + "%,d".format(value),
        style = MaterialTheme.typography.headlineMedium,
        fontWeight = FontWeight.Bold,
      )
      Spacer(Modifier.height(8.dp))
      Surface(
        shape = RoundedCornerShape(50),
        color = Color(0xFF10B981).copy(alpha = 0.15f),
      ) {
        Text(
          text = "+12.4%",
          color = Color(0xFF10B981),
          style = MaterialTheme.typography.labelSmall,
          modifier = Modifier.padding(
            horizontal = 8.dp,
            vertical = 3.dp,
          ),
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-5">
        <span className="text-xs text-muted-foreground">
          Total Revenue
        </span>
        <div className="mt-1 text-3xl font-bold text-foreground tabular-nums">
          $12,480
        </div>
        <Badge className="mt-2 bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/15">
          <TrendingUp className="size-3 mr-1" />
          +12.4%
        </Badge>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-sparkline",
  name: "Sparkline Trend",
  category: "cards",
  description:
    "A compact trend line draws itself across a labelled metric value.",
  tags: ["animated"],
  code: `@Composable
fun SparklineTrendCard() {
  val pts = listOf(0.3f, 0.5f, 0.4f, 0.7f, 0.6f, 0.85f, 0.9f)
  val draw = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    draw.animateTo(1f, tween(1100, easing = LinearEasing))
  }
  OutlinedCard(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Text(
        text = "Active Users",
        style = MaterialTheme.typography.labelMedium,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
      )
      Text(
        text = "8,932",
        style = MaterialTheme.typography.headlineSmall,
        fontWeight = FontWeight.Bold,
      )
      Spacer(Modifier.height(10.dp))
      Canvas(
        Modifier
          .fillMaxWidth()
          .height(48.dp),
      ) {
        val step = size.width / (pts.size - 1)
        val path = Path()
        pts.forEachIndexed { i, p ->
          val x = i * step
          val y = size.height * (1f - p)
          if (i == 0) path.moveTo(x, y) else path.lineTo(x, y)
        }
        val measure = PathMeasure()
        measure.setPath(path, false)
        val seg = Path()
        measure.getSegment(
          0f,
          measure.length * draw.value,
          seg,
          true,
        )
        drawPath(
          path = seg,
          color = Color(0xFF6366F1),
          style = Stroke(width = 3.dp.toPx()),
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <span className="text-xs text-muted-foreground">
          Active Users
        </span>
        <div className="text-2xl font-bold text-foreground">8,932</div>
        <svg viewBox="0 0 100 40" className="mt-2 w-full h-12">
          <polyline
            points="0,28 16,20 33,24 50,12 66,16 83,6 100,4"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-progress-ring",
  name: "Progress Ring",
  category: "cards",
  description:
    "A circular ring sweeps to its target percentage with center label.",
  tags: ["animated"],
  code: `@Composable
fun ProgressRingCard() {
  val sweep = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    sweep.animateTo(
      targetValue = 0.74f,
      animationSpec = tween(1200, easing = FastOutSlowInEasing),
    )
  }
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically,
    ) {
      Box(contentAlignment = Alignment.Center) {
        Canvas(Modifier.size(72.dp)) {
          drawArc(
            color = Color(0xFF334155).copy(alpha = 0.2f),
            startAngle = -90f,
            sweepAngle = 360f,
            useCenter = false,
            style = Stroke(8.dp.toPx(), cap = StrokeCap.Round),
          )
          drawArc(
            color = Color(0xFF0EA5E9),
            startAngle = -90f,
            sweepAngle = 360f * sweep.value,
            useCenter = false,
            style = Stroke(8.dp.toPx(), cap = StrokeCap.Round),
          )
        }
        Text(
          text = "\${(sweep.value * 100).toInt()}%",
          fontWeight = FontWeight.Bold,
        )
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text(
          text = "Storage Used",
          fontWeight = FontWeight.SemiBold,
        )
        Text(
          text = "37 GB of 50 GB",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-5 flex items-center gap-4">
        <div className="relative size-[72px]">
          <svg viewBox="0 0 36 36" className="size-[72px] -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none"
              className="stroke-muted" strokeWidth="3.5" />
            <circle cx="18" cy="18" r="15.5" fill="none"
              stroke="#0ea5e9" strokeWidth="3.5" strokeLinecap="round"
              strokeDasharray="97.4" strokeDashoffset="25.3" />
          </svg>
          <span className="absolute inset-0 grid place-items-center text-sm font-bold text-foreground">
            74%
          </span>
        </div>
        <div>
          <div className="font-semibold text-foreground">Storage Used</div>
          <div className="text-xs text-muted-foreground">37 GB of 50 GB</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-bar-mini",
  name: "Bar Chart Mini",
  category: "cards",
  description:
    "Small vertical bars grow with staggered timing beside a total figure.",
  tags: ["animated"],
  code: `@Composable
fun BarChartMiniCard() {
  val bars = listOf(0.4f, 0.7f, 0.5f, 0.9f, 0.6f, 0.8f)
  val anim = bars.mapIndexed { i, t ->
    val a = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
      delay(i * 90L)
      a.animateTo(t, tween(600, easing = FastOutSlowInEasing))
    }
    a
  }
  ElevatedCard(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Text(
        text = "Weekly Sales",
        style = MaterialTheme.typography.labelMedium,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
      )
      Text(text = "1,204", fontWeight = FontWeight.Bold)
      Spacer(Modifier.height(12.dp))
      Row(
        Modifier
          .fillMaxWidth()
          .height(56.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.Bottom,
      ) {
        anim.forEach { a ->
          Box(
            Modifier
              .weight(1f)
              .fillMaxHeight(a.value)
              .clip(RoundedCornerShape(4.dp))
              .background(Color(0xFFF59E0B)),
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <span className="text-xs text-muted-foreground">Weekly Sales</span>
        <div className="text-2xl font-bold text-foreground">1,204</div>
        <div className="mt-3 flex h-14 items-end gap-2">
          {[40, 70, 50, 90, 60, 80].map((h, i) => (
            <div key={i} style={{ height: h + "%" }}
              className="flex-1 rounded bg-amber-500" />
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-donut",
  name: "Donut Breakdown",
  category: "cards",
  description:
    "A segmented donut reveals category share with a legend on the side.",
  tags: ["animated"],
  code: `@Composable
fun DonutBreakdownCard() {
  val data = listOf(
    0.5f to Color(0xFF6366F1),
    0.3f to Color(0xFF10B981),
    0.2f to Color(0xFFF43F5E),
  )
  val grow = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    grow.animateTo(1f, tween(1100, easing = FastOutSlowInEasing))
  }
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically,
    ) {
      Canvas(Modifier.size(76.dp)) {
        var start = -90f
        data.forEach { (frac, c) ->
          val sweep = 360f * frac * grow.value
          drawArc(
            color = c,
            startAngle = start,
            sweepAngle = sweep,
            useCenter = false,
            style = Stroke(12.dp.toPx()),
          )
          start += 360f * frac
        }
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text(text = "Traffic", fontWeight = FontWeight.SemiBold)
        Text(
          text = "Direct 50%",
          style = MaterialTheme.typography.bodySmall,
        )
        Text(
          text = "Social 30%",
          style = MaterialTheme.typography.bodySmall,
        )
        Text(
          text = "Referral 20%",
          style = MaterialTheme.typography.bodySmall,
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-5 flex items-center gap-4">
        <svg viewBox="0 0 36 36" className="size-[76px] -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1"
            strokeWidth="5" strokeDasharray="44 88" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981"
            strokeWidth="5" strokeDasharray="26.4 88" strokeDashoffset="-44" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#f43f5e"
            strokeWidth="5" strokeDasharray="17.6 88" strokeDashoffset="-70.4" />
        </svg>
        <div className="text-xs">
          <div className="font-semibold text-foreground mb-1">Traffic</div>
          <div className="text-muted-foreground">Direct 50%</div>
          <div className="text-muted-foreground">Social 30%</div>
          <div className="text-muted-foreground">Referral 20%</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-kpi-delta",
  name: "KPI Delta Chip",
  category: "cards",
  description:
    "A KPI value pairs with a colored delta chip and trend icon.",
  tags: ["animated"],
  code: `@Composable
fun KpiDeltaCard() {
  val v = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    v.animateTo(1f, tween(900, easing = FastOutSlowInEasing))
  }
  OutlinedCard(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
      ) {
        Text(
          text = "Conversion",
          style = MaterialTheme.typography.labelMedium,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Surface(
          shape = RoundedCornerShape(50),
          color = Color(0xFFF43F5E).copy(alpha = 0.15f),
        ) {
          Text(
            text = "-2.1%",
            color = Color(0xFFF43F5E),
            style = MaterialTheme.typography.labelSmall,
            modifier = Modifier.padding(
              horizontal = 8.dp,
              vertical = 3.dp,
            ),
          )
        }
      }
      Spacer(Modifier.height(8.dp))
      Text(
        text = "%.1f%%".format(4.8f * v.value),
        style = MaterialTheme.typography.headlineMedium,
        fontWeight = FontWeight.Bold,
      )
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Conversion</span>
          <Badge className="bg-rose-500/15 text-rose-600 hover:bg-rose-500/15">
            <TrendingDown className="size-3 mr-1" />-2.1%
          </Badge>
        </div>
        <div className="mt-2 text-3xl font-bold text-foreground">4.8%</div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-goal-tracker",
  name: "Goal Tracker",
  category: "cards",
  description:
    "A horizontal goal bar fills toward a target with remaining hint.",
  tags: ["animated"],
  code: `@Composable
fun GoalTrackerCard() {
  val fill = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    fill.animateTo(0.68f, tween(1000, easing = FastOutSlowInEasing))
  }
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
      ) {
        Text(text = "Monthly Goal", fontWeight = FontWeight.SemiBold)
        Text(
          text = "$6.8k / $10k",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
      }
      Spacer(Modifier.height(12.dp))
      Box(
        Modifier
          .fillMaxWidth()
          .height(10.dp)
          .clip(RoundedCornerShape(50))
          .background(MaterialTheme.colorScheme.surfaceVariant),
      ) {
        Box(
          Modifier
            .fillMaxWidth(fill.value)
            .fillMaxHeight()
            .clip(RoundedCornerShape(50))
            .background(
              Brush.horizontalGradient(
                listOf(Color(0xFF8B5CF6), Color(0xFFEC4899)),
              ),
            ),
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="flex justify-between">
          <span className="font-semibold text-foreground">Monthly Goal</span>
          <span className="text-xs text-muted-foreground">$6.8k / $10k</span>
        </div>
        <div className="mt-3 h-2.5 w-full rounded-full bg-muted">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-streak",
  name: "Streak Counter",
  category: "cards",
  description:
    "A flame pulses beside a day streak with a small dot calendar.",
  tags: ["animated"],
  code: `@Composable
fun StreakCounterCard() {
  val t = rememberInfiniteTransition(label = "flame")
  val scale by t.animateFloat(
    initialValue = 0.9f,
    targetValue = 1.15f,
    animationSpec = infiniteRepeatable(
      tween(700, easing = FastOutSlowInEasing),
      RepeatMode.Reverse,
    ),
    label = "scale",
  )
  ElevatedCard(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically,
    ) {
      Box(
        Modifier
          .size(48.dp)
          .graphicsLayer { scaleX = scale; scaleY = scale }
          .clip(CircleShape)
          .background(Color(0xFFF97316).copy(alpha = 0.15f)),
        contentAlignment = Alignment.Center,
      ) {
        Text(text = "🔥", fontSize = 24.sp)
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text(
          text = "28 Day Streak",
          fontWeight = FontWeight.Bold,
        )
        Text(
          text = "Keep it going!",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-5 flex items-center gap-4">
        <div className="grid size-12 place-items-center rounded-full bg-orange-500/15">
          <Flame className="size-6 text-orange-500" />
        </div>
        <div>
          <div className="font-bold text-foreground">28 Day Streak</div>
          <div className="text-xs text-muted-foreground">Keep it going!</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-gauge",
  name: "Speedometer Gauge",
  category: "cards",
  description:
    "A half-circle gauge needle sweeps to indicate a performance score.",
  tags: ["animated"],
  code: `@Composable
fun SpeedometerGaugeCard() {
  val sweep = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    sweep.animateTo(0.82f, tween(1200, easing = FastOutSlowInEasing))
  }
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(
      Modifier
        .padding(20.dp)
        .fillMaxWidth(),
      horizontalAlignment = Alignment.CenterHorizontally,
    ) {
      Text(
        text = "Performance",
        style = MaterialTheme.typography.labelMedium,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
      )
      Spacer(Modifier.height(8.dp))
      Canvas(
        Modifier
          .width(140.dp)
          .height(72.dp),
      ) {
        drawArc(
          color = Color(0xFF334155).copy(alpha = 0.2f),
          startAngle = 180f,
          sweepAngle = 180f,
          useCenter = false,
          style = Stroke(10.dp.toPx(), cap = StrokeCap.Round),
        )
        drawArc(
          color = Color(0xFF22C55E),
          startAngle = 180f,
          sweepAngle = 180f * sweep.value,
          useCenter = false,
          style = Stroke(10.dp.toPx(), cap = StrokeCap.Round),
        )
      }
      Text(
        text = "\${(sweep.value * 100).toInt()}",
        style = MaterialTheme.typography.headlineMedium,
        fontWeight = FontWeight.Bold,
      )
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-5 flex flex-col items-center">
        <span className="text-xs text-muted-foreground">Performance</span>
        <svg viewBox="0 0 100 52" className="mt-2 w-36">
          <path d="M6 50 A44 44 0 0 1 94 50" fill="none"
            className="stroke-muted" strokeWidth="8" strokeLinecap="round" />
          <path d="M6 50 A44 44 0 0 1 86 18" fill="none"
            stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
        </svg>
        <div className="text-3xl font-bold text-foreground">82</div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-multi-grid",
  name: "Multi Metric Grid",
  category: "cards",
  description:
    "A two-by-two grid of small KPIs reveals with a soft stagger.",
  tags: ["animated"],
  code: `@Composable
fun MultiMetricGridCard() {
  data class M(val label: String, val value: String)
  val items = listOf(
    M("Visits", "24.5k"),
    M("Signups", "1,820"),
    M("Bounce", "32%"),
    M("Avg Time", "3m 12s"),
  )
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(16.dp)) {
      items.chunked(2).forEach { row ->
        Row(
          Modifier.fillMaxWidth(),
          horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
          row.forEachIndexed { i, m ->
            val a = remember { Animatable(0f) }
            LaunchedEffect(Unit) {
              delay(i * 120L)
              a.animateTo(1f, tween(500))
            }
            Surface(
              shape = RoundedCornerShape(12.dp),
              color = MaterialTheme.colorScheme.surfaceVariant
                .copy(alpha = 0.5f),
              modifier = Modifier
                .weight(1f)
                .graphicsLayer { alpha = a.value },
            ) {
              Column(Modifier.padding(12.dp)) {
                Text(
                  text = m.label,
                  style = MaterialTheme.typography.labelSmall,
                  color = MaterialTheme.colorScheme.onSurfaceVariant,
                )
                Text(
                  text = m.value,
                  fontWeight = FontWeight.Bold,
                )
              }
            }
          }
        }
        Spacer(Modifier.height(12.dp))
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4 grid grid-cols-2 gap-3">
        {[
          ["Visits", "24.5k"],
          ["Signups", "1,820"],
          ["Bounce", "32%"],
          ["Avg Time", "3m 12s"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl bg-muted/60 p-3">
            <div className="text-[10px] text-muted-foreground">{l}</div>
            <div className="font-bold text-foreground">{v}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-revenue-area",
  name: "Revenue Area",
  category: "cards",
  description:
    "A filled area chart sweeps under a revenue headline and growth chip.",
  tags: ["animated"],
  code: `@Composable
fun RevenueAreaCard() {
  val pts = listOf(0.4f, 0.55f, 0.45f, 0.7f, 0.65f, 0.85f)
  val grow = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    grow.animateTo(1f, tween(1100, easing = FastOutSlowInEasing))
  }
  ElevatedCard(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column {
      Column(Modifier.padding(18.dp)) {
        Text(
          text = "Revenue",
          style = MaterialTheme.typography.labelMedium,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Text(
          text = "$48,290",
          style = MaterialTheme.typography.headlineSmall,
          fontWeight = FontWeight.Bold,
        )
      }
      Canvas(
        Modifier
          .fillMaxWidth()
          .height(64.dp),
      ) {
        val step = size.width / (pts.size - 1)
        val path = Path().apply { moveTo(0f, size.height) }
        pts.forEachIndexed { i, p ->
          path.lineTo(i * step, size.height * (1f - p * grow.value))
        }
        path.lineTo(size.width, size.height)
        path.close()
        drawPath(
          path = path,
          brush = Brush.verticalGradient(
            listOf(
              Color(0xFF06B6D4).copy(alpha = 0.5f),
              Color(0xFF06B6D4).copy(alpha = 0f),
            ),
          ),
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60 overflow-hidden">
      <CardContent className="p-4 pb-0">
        <span className="text-xs text-muted-foreground">Revenue</span>
        <div className="text-2xl font-bold text-foreground">$48,290</div>
      </CardContent>
      <svg viewBox="0 0 100 32" className="w-full h-16" preserveAspectRatio="none">
        <defs>
          <linearGradient id="rev-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,19 L20,14 L40,17 L60,9 L80,11 L100,5 L100,32 L0,32 Z"
          fill="url(#rev-a)" />
      </svg>
    </Card>
  ),
},
{
  id: "card-metric-comparison",
  name: "Period Comparison",
  category: "cards",
  description:
    "Two stacked bars compare this period against the previous one.",
  tags: ["animated"],
  code: `@Composable
fun PeriodComparisonCard() {
  val a = remember { Animatable(0f) }
  val b = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    a.animateTo(0.85f, tween(900))
    b.animateTo(0.6f, tween(900))
  }
  OutlinedCard(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Text(text = "Orders", fontWeight = FontWeight.SemiBold)
      Spacer(Modifier.height(14.dp))
      listOf(
        Triple("This week", a, Color(0xFF6366F1)),
        Triple("Last week", b, Color(0xFF94A3B8)),
      ).forEach { (label, anim, c) ->
        Text(
          text = label,
          style = MaterialTheme.typography.labelSmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Box(
          Modifier
            .fillMaxWidth()
            .height(12.dp)
            .clip(RoundedCornerShape(50))
            .background(MaterialTheme.colorScheme.surfaceVariant),
        ) {
          Box(
            Modifier
              .fillMaxWidth(anim.value)
              .fillMaxHeight()
              .clip(RoundedCornerShape(50))
              .background(c),
          )
        }
        Spacer(Modifier.height(10.dp))
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="font-semibold text-foreground">Orders</div>
        <div className="mt-3 space-y-1">
          <span className="text-[10px] text-muted-foreground">This week</span>
          <div className="h-3 w-full rounded-full bg-muted">
            <div className="h-full w-[85%] rounded-full bg-indigo-500" />
          </div>
        </div>
        <div className="mt-2 space-y-1">
          <span className="text-[10px] text-muted-foreground">Last week</span>
          <div className="h-3 w-full rounded-full bg-muted">
            <div className="h-full w-[60%] rounded-full bg-slate-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-live-pulse",
  name: "Live Activity Pulse",
  category: "cards",
  description:
    "A pulsing dot signals live traffic next to a real-time counter.",
  tags: ["animated"],
  code: `@Composable
fun LiveActivityPulseCard() {
  val t = rememberInfiniteTransition(label = "pulse")
  val r by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(
      tween(1400, easing = FastOutSlowInEasing),
    ),
    label = "r",
  )
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Row(
      Modifier.padding(18.dp),
      verticalAlignment = Alignment.CenterVertically,
    ) {
      Canvas(Modifier.size(20.dp)) {
        drawCircle(
          color = Color(0xFF22C55E).copy(alpha = 1f - r),
          radius = size.minDimension / 2f * (0.4f + r * 0.6f),
        )
        drawCircle(
          color = Color(0xFF22C55E),
          radius = size.minDimension / 5f,
        )
      }
      Spacer(Modifier.width(14.dp))
      Column {
        Text(
          text = "1,284 online",
          fontWeight = FontWeight.Bold,
        )
        Text(
          text = "Live right now",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4 flex items-center gap-3">
        <span className="relative flex size-3">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
        </span>
        <div>
          <div className="font-bold text-foreground">1,284 online</div>
          <div className="text-xs text-muted-foreground">Live right now</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-leaderboard-row",
  name: "Leaderboard Row",
  category: "cards",
  description:
    "A ranked row shows avatar, score, and a rising position indicator.",
  code: `@Composable
fun LeaderboardRowCard() {
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Row(
      Modifier.padding(16.dp),
      verticalAlignment = Alignment.CenterVertically,
    ) {
      Box(
        Modifier
          .size(36.dp)
          .clip(CircleShape)
          .background(
            Brush.linearGradient(
              listOf(Color(0xFFFBBF24), Color(0xFFF59E0B)),
            ),
          ),
        contentAlignment = Alignment.Center,
      ) {
        Text(
          text = "1",
          color = Color.White,
          fontWeight = FontWeight.Bold,
        )
      }
      Spacer(Modifier.width(12.dp))
      Column(Modifier.weight(1f)) {
        Text(text = "Alex Rivera", fontWeight = FontWeight.SemiBold)
        Text(
          text = "9,842 pts",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
      }
      Icon(
        imageVector = Icons.Default.KeyboardArrowUp,
        contentDescription = null,
        tint = Color(0xFF22C55E),
      )
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 font-bold text-white">
          1
        </div>
        <div className="flex-1">
          <div className="font-semibold text-foreground">Alex Rivera</div>
          <div className="text-xs text-muted-foreground">9,842 pts</div>
        </div>
        <ArrowUpRight className="size-4 text-emerald-500" />
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-percent-ring",
  name: "Percentage Ring",
  category: "cards",
  description:
    "A bold gradient ring counts up its completion percentage in the center.",
  tags: ["animated"],
  code: `@Composable
fun PercentageRingCard() {
  val p = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    p.animateTo(0.91f, tween(1300, easing = FastOutSlowInEasing))
  }
  ElevatedCard(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(
      Modifier
        .padding(20.dp)
        .fillMaxWidth(),
      horizontalAlignment = Alignment.CenterHorizontally,
    ) {
      Box(contentAlignment = Alignment.Center) {
        Canvas(Modifier.size(96.dp)) {
          drawArc(
            color = Color(0xFF334155).copy(alpha = 0.18f),
            startAngle = -90f,
            sweepAngle = 360f,
            useCenter = false,
            style = Stroke(10.dp.toPx(), cap = StrokeCap.Round),
          )
          drawArc(
            brush = Brush.sweepGradient(
              listOf(Color(0xFFEC4899), Color(0xFF8B5CF6)),
            ),
            startAngle = -90f,
            sweepAngle = 360f * p.value,
            useCenter = false,
            style = Stroke(10.dp.toPx(), cap = StrokeCap.Round),
          )
        }
        Text(
          text = "\${(p.value * 100).toInt()}%",
          style = MaterialTheme.typography.headlineSmall,
          fontWeight = FontWeight.Bold,
        )
      }
      Spacer(Modifier.height(10.dp))
      Text(
        text = "Profile Complete",
        style = MaterialTheme.typography.bodySmall,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
      )
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-5 flex flex-col items-center">
        <div className="relative size-24">
          <svg viewBox="0 0 36 36" className="size-24 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none"
              className="stroke-muted" strokeWidth="3.5" />
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#a855f7"
              strokeWidth="3.5" strokeLinecap="round"
              strokeDasharray="97.4" strokeDashoffset="8.8" />
          </svg>
          <span className="absolute inset-0 grid place-items-center text-xl font-bold text-foreground">
            91%
          </span>
        </div>
        <span className="mt-2 text-xs text-muted-foreground">
          Profile Complete
        </span>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-stacked-bars",
  name: "Stacked Progress",
  category: "cards",
  description:
    "Three stacked segments fill sequentially to show budget allocation.",
  tags: ["animated"],
  code: `@Composable
fun StackedProgressCard() {
  val segs = listOf(
    Triple("Housing", 0.45f, Color(0xFF6366F1)),
    Triple("Food", 0.3f, Color(0xFF10B981)),
    Triple("Other", 0.15f, Color(0xFFF59E0B)),
  )
  val grow = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    grow.animateTo(1f, tween(1000, easing = FastOutSlowInEasing))
  }
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Text(text = "Budget", fontWeight = FontWeight.SemiBold)
      Spacer(Modifier.height(12.dp))
      Row(
        Modifier
          .fillMaxWidth()
          .height(14.dp)
          .clip(RoundedCornerShape(50)),
      ) {
        segs.forEach { (_, frac, c) ->
          Box(
            Modifier
              .weight(frac * grow.value + 0.0001f)
              .fillMaxHeight()
              .background(c),
          )
        }
      }
      Spacer(Modifier.height(12.dp))
      segs.forEach { (label, frac, c) ->
        Row(verticalAlignment = Alignment.CenterVertically) {
          Box(
            Modifier
              .size(8.dp)
              .clip(CircleShape)
              .background(c),
          )
          Spacer(Modifier.width(8.dp))
          Text(
            text = "$label \${(frac * 100).toInt()}%",
            style = MaterialTheme.typography.bodySmall,
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="font-semibold text-foreground">Budget</div>
        <div className="mt-3 flex h-3.5 w-full overflow-hidden rounded-full">
          <div className="w-[45%] bg-indigo-500" />
          <div className="w-[30%] bg-emerald-500" />
          <div className="w-[15%] bg-amber-500" />
          <div className="flex-1 bg-muted" />
        </div>
        <div className="mt-3 space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-indigo-500" />Housing 45%
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />Food 30%
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-amber-500" />Other 15%
          </div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-trend-grid",
  name: "Trend Arrows Grid",
  category: "cards",
  description:
    "A row of mini metrics each shows an up or down trend arrow.",
  code: `@Composable
fun TrendArrowsGridCard() {
  data class T(val label: String, val v: String, val up: Boolean)
  val items = listOf(
    T("CPU", "42%", false),
    T("RAM", "68%", true),
    T("Disk", "31%", true),
  )
  OutlinedCard(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Row(
      Modifier
        .padding(16.dp)
        .fillMaxWidth(),
      horizontalArrangement = Arrangement.SpaceBetween,
    ) {
      items.forEach { m ->
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
          Text(
            text = m.label,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
          )
          Text(text = m.v, fontWeight = FontWeight.Bold)
          Icon(
            imageVector = if (m.up)
              Icons.Default.KeyboardArrowUp
            else Icons.Default.KeyboardArrowDown,
            contentDescription = null,
            tint = if (m.up) Color(0xFF22C55E)
            else Color(0xFFF43F5E),
            modifier = Modifier.size(16.dp),
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4 flex justify-between">
        {([
          ["CPU", "42%", false],
          ["RAM", "68%", true],
          ["Disk", "31%", true],
        ] as const).map(([l, v, up]) => (
          <div key={l} className="flex flex-col items-center">
            <span className="text-[10px] text-muted-foreground">{l}</span>
            <span className="font-bold text-foreground">{v}</span>
            {up ? (
              <ArrowUpRight className="size-4 text-emerald-500" />
            ) : (
              <ArrowDownRight className="size-4 text-rose-500" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-milestone",
  name: "Milestone Progress",
  category: "cards",
  description:
    "A stepped track lights up completed milestones toward a final reward.",
  tags: ["animated"],
  code: `@Composable
fun MilestoneProgressCard() {
  val steps = 5
  val done = 3
  val fill = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    fill.animateTo(
      done / (steps - 1f),
      tween(1000, easing = FastOutSlowInEasing),
    )
  }
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Text(text = "Onboarding", fontWeight = FontWeight.SemiBold)
      Spacer(Modifier.height(16.dp))
      Box(Modifier.fillMaxWidth()) {
        Box(
          Modifier
            .align(Alignment.CenterStart)
            .fillMaxWidth()
            .height(4.dp)
            .clip(RoundedCornerShape(50))
            .background(MaterialTheme.colorScheme.surfaceVariant),
        )
        Box(
          Modifier
            .align(Alignment.CenterStart)
            .fillMaxWidth(fill.value)
            .height(4.dp)
            .clip(RoundedCornerShape(50))
            .background(Color(0xFF6366F1)),
        )
        Row(
          Modifier.fillMaxWidth(),
          horizontalArrangement = Arrangement.SpaceBetween,
        ) {
          repeat(steps) { i ->
            Box(
              Modifier
                .size(14.dp)
                .clip(CircleShape)
                .background(
                  if (i <= done) Color(0xFF6366F1)
                  else MaterialTheme.colorScheme.surfaceVariant,
                ),
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="font-semibold text-foreground">Onboarding</div>
        <div className="relative mt-5 flex items-center justify-between">
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-muted" />
          <div className="absolute left-0 top-1/2 h-1 w-[60%] -translate-y-1/2 rounded-full bg-indigo-500" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i}
              className={"relative size-3.5 rounded-full " +
                (i <= 3 ? "bg-indigo-500" : "bg-muted")} />
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-weekly-bars",
  name: "Weekly Bars",
  category: "cards",
  description:
    "Seven day-labelled bars rise to show a weekly activity pattern.",
  tags: ["animated"],
  code: `@Composable
fun WeeklyBarsCard() {
  val days = listOf("M", "T", "W", "T", "F", "S", "S")
  val vals = listOf(0.5f, 0.8f, 0.4f, 0.9f, 0.6f, 0.3f, 0.7f)
  val anim = vals.mapIndexed { i, t ->
    val a = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
      delay(i * 70L)
      a.animateTo(t, tween(500, easing = FastOutSlowInEasing))
    }
    a
  }
  ElevatedCard(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Text(text = "Steps This Week", fontWeight = FontWeight.SemiBold)
      Spacer(Modifier.height(14.dp))
      Row(
        Modifier
          .fillMaxWidth()
          .height(64.dp),
        horizontalArrangement = Arrangement.spacedBy(6.dp),
        verticalAlignment = Alignment.Bottom,
      ) {
        days.forEachIndexed { i, d ->
          Column(
            Modifier.weight(1f),
            horizontalAlignment = Alignment.CenterHorizontally,
          ) {
            Box(
              Modifier
                .fillMaxWidth()
                .fillMaxHeight(anim[i].value)
                .clip(RoundedCornerShape(4.dp))
                .background(Color(0xFF14B8A6)),
            )
          }
        }
      }
      Spacer(Modifier.height(6.dp))
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(6.dp),
      ) {
        days.forEach { d ->
          Text(
            text = d,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            modifier = Modifier.weight(1f),
            textAlign = TextAlign.Center,
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="font-semibold text-foreground">Steps This Week</div>
        <div className="mt-3 flex h-16 items-end gap-1.5">
          {[50, 80, 40, 90, 60, 30, 70].map((h, i) => (
            <div key={i} style={{ height: h + "%" }}
              className="flex-1 rounded bg-teal-500" />
          ))}
        </div>
        <div className="mt-1 flex gap-1.5 text-center text-[10px] text-muted-foreground">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="flex-1">{d}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-funnel",
  name: "Conversion Funnel",
  category: "cards",
  description:
    "Tapering stages visualize drop-off from visits down to purchases.",
  tags: ["animated"],
  code: `@Composable
fun ConversionFunnelCard() {
  val stages = listOf(
    "Visits" to 1f,
    "Cart" to 0.62f,
    "Checkout" to 0.38f,
    "Purchase" to 0.21f,
  )
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Text(text = "Funnel", fontWeight = FontWeight.SemiBold)
      Spacer(Modifier.height(12.dp))
      stages.forEachIndexed { i, (label, frac) ->
        val a = remember { Animatable(0f) }
        LaunchedEffect(Unit) {
          delay(i * 110L)
          a.animateTo(frac, tween(600, easing = FastOutSlowInEasing))
        }
        Row(
          Modifier.padding(vertical = 3.dp),
          verticalAlignment = Alignment.CenterVertically,
        ) {
          Box(
            Modifier
              .fillMaxWidth(a.value)
              .height(20.dp)
              .clip(RoundedCornerShape(6.dp))
              .background(
                Color(0xFF6366F1).copy(
                  alpha = 1f - i * 0.18f,
                ),
              ),
            contentAlignment = Alignment.CenterStart,
          ) {
            Text(
              text = label,
              color = Color.White,
              style = MaterialTheme.typography.labelSmall,
              modifier = Modifier.padding(start = 8.dp),
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="font-semibold text-foreground">Funnel</div>
        <div className="mt-3 space-y-1.5">
          {[
            ["Visits", 100, 1],
            ["Cart", 62, 0.82],
            ["Checkout", 38, 0.64],
            ["Purchase", 21, 0.46],
          ].map(([l, w, o], i) => (
            <div key={i} style={{ width: w + "%", opacity: o }}
              className="flex h-5 items-center rounded-md bg-indigo-500 pl-2 text-[10px] text-white">
              {l}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-rating-dist",
  name: "Rating Distribution",
  category: "cards",
  description:
    "Star-labelled bars show how reviews distribute across rating levels.",
  tags: ["animated"],
  code: `@Composable
fun RatingDistributionCard() {
  val rows = listOf(5 to 0.7f, 4 to 0.5f, 3 to 0.25f, 2 to 0.1f, 1 to 0.05f)
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Text(
          text = "4.6",
          style = MaterialTheme.typography.headlineMedium,
          fontWeight = FontWeight.Bold,
        )
        Spacer(Modifier.width(8.dp))
        Icon(
          imageVector = Icons.Default.Star,
          contentDescription = null,
          tint = Color(0xFFF59E0B),
        )
      }
      Spacer(Modifier.height(10.dp))
      rows.forEach { (stars, frac) ->
        val a = remember { Animatable(0f) }
        LaunchedEffect(Unit) {
          a.animateTo(frac, tween(700, easing = FastOutSlowInEasing))
        }
        Row(
          verticalAlignment = Alignment.CenterVertically,
          modifier = Modifier.padding(vertical = 2.dp),
        ) {
          Text(
            text = "$stars",
            style = MaterialTheme.typography.labelSmall,
            modifier = Modifier.width(12.dp),
          )
          Spacer(Modifier.width(6.dp))
          Box(
            Modifier
              .weight(1f)
              .height(8.dp)
              .clip(RoundedCornerShape(50))
              .background(MaterialTheme.colorScheme.surfaceVariant),
          ) {
            Box(
              Modifier
                .fillMaxWidth(a.value)
                .fillMaxHeight()
                .clip(RoundedCornerShape(50))
                .background(Color(0xFFF59E0B)),
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-foreground">4.6</span>
          <Star className="size-5 fill-amber-500 text-amber-500" />
        </div>
        <div className="mt-2 space-y-1.5">
          {[
            [5, 70], [4, 50], [3, 25], [2, 10], [1, 5],
          ].map(([s, w]) => (
            <div key={s} className="flex items-center gap-1.5">
              <span className="w-3 text-[10px] text-muted-foreground">{s}</span>
              <div className="h-2 flex-1 rounded-full bg-muted">
                <div style={{ width: w + "%" }}
                  className="h-full rounded-full bg-amber-500" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-uptime",
  name: "Uptime Status",
  category: "cards",
  description:
    "A row of status ticks shows recent uptime with a healthy percentage.",
  tags: ["animated"],
  code: `@Composable
fun UptimeStatusCard() {
  val bars = List(24) { if (it == 9 || it == 17) 0.3f else 1f }
  OutlinedCard(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
      ) {
        Text(text = "API Uptime", fontWeight = FontWeight.SemiBold)
        Text(
          text = "99.2%",
          color = Color(0xFF22C55E),
          fontWeight = FontWeight.Bold,
        )
      }
      Spacer(Modifier.height(12.dp))
      Row(
        Modifier
          .fillMaxWidth()
          .height(30.dp),
        horizontalArrangement = Arrangement.spacedBy(2.dp),
      ) {
        bars.forEachIndexed { i, h ->
          val a = remember { Animatable(0f) }
          LaunchedEffect(Unit) {
            delay(i * 25L)
            a.animateTo(1f, tween(250))
          }
          Box(
            Modifier
              .weight(1f)
              .fillMaxHeight()
              .graphicsLayer { alpha = a.value }
              .clip(RoundedCornerShape(2.dp))
              .background(
                if (h < 1f) Color(0xFFF59E0B)
                else Color(0xFF22C55E),
              ),
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-foreground">API Uptime</span>
          <span className="font-bold text-emerald-500">99.2%</span>
        </div>
        <div className="mt-3 flex h-7 gap-0.5">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i}
              className={"flex-1 rounded-sm " +
                (i === 9 || i === 17 ? "bg-amber-500" : "bg-emerald-500")} />
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-score",
  name: "Score Card",
  category: "cards",
  description:
    "A large credit-style score animates within a colored qualitative band.",
  tags: ["animated"],
  code: `@Composable
fun ScoreCard() {
  val p = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    p.animateTo(1f, tween(1300, easing = FastOutSlowInEasing))
  }
  val score = (300 + (742 - 300) * p.value).toInt()
  ElevatedCard(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(
      Modifier
        .padding(20.dp)
        .fillMaxWidth(),
      horizontalAlignment = Alignment.CenterHorizontally,
    ) {
      Text(
        text = "Credit Score",
        style = MaterialTheme.typography.labelMedium,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
      )
      Text(
        text = "$score",
        style = MaterialTheme.typography.displaySmall,
        fontWeight = FontWeight.Bold,
        color = Color(0xFF22C55E),
      )
      Surface(
        shape = RoundedCornerShape(50),
        color = Color(0xFF22C55E).copy(alpha = 0.15f),
      ) {
        Text(
          text = "Very Good",
          color = Color(0xFF22C55E),
          style = MaterialTheme.typography.labelSmall,
          modifier = Modifier.padding(
            horizontal = 10.dp,
            vertical = 4.dp,
          ),
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-5 flex flex-col items-center">
        <span className="text-xs text-muted-foreground">Credit Score</span>
        <span className="text-5xl font-bold text-emerald-500">742</span>
        <Badge className="mt-1 bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/15">
          Very Good
        </Badge>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-growth-chart",
  name: "Growth Chart",
  category: "cards",
  description:
    "A smooth upward line with an end node highlights sustained growth.",
  tags: ["animated"],
  code: `@Composable
fun GrowthChartCard() {
  val pts = listOf(0.2f, 0.35f, 0.3f, 0.5f, 0.6f, 0.75f, 0.95f)
  val draw = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    draw.animateTo(1f, tween(1200, easing = FastOutSlowInEasing))
  }
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
      ) {
        Column {
          Text(
            text = "MRR Growth",
            style = MaterialTheme.typography.labelMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
          )
          Text(
            text = "+38%",
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.Bold,
            color = Color(0xFF10B981),
          )
        }
      }
      Spacer(Modifier.height(12.dp))
      Canvas(
        Modifier
          .fillMaxWidth()
          .height(56.dp),
      ) {
        val step = size.width / (pts.size - 1)
        val path = Path()
        pts.forEachIndexed { i, p ->
          val x = i * step
          val y = size.height * (1f - p)
          if (i == 0) path.moveTo(x, y) else path.lineTo(x, y)
        }
        val m = PathMeasure().apply { setPath(path, false) }
        val seg = Path()
        m.getSegment(0f, m.length * draw.value, seg, true)
        drawPath(
          path = seg,
          color = Color(0xFF10B981),
          style = Stroke(3.dp.toPx(), cap = StrokeCap.Round),
        )
        if (draw.value > 0.98f) {
          drawCircle(
            color = Color(0xFF10B981),
            radius = 5.dp.toPx(),
            center = Offset(
              size.width,
              size.height * (1f - pts.last()),
            ),
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4">
        <span className="text-xs text-muted-foreground">MRR Growth</span>
        <div className="text-2xl font-bold text-emerald-500">+38%</div>
        <svg viewBox="0 0 100 36" className="mt-2 w-full h-14">
          <polyline points="0,29 16,23 33,25 50,18 66,14 83,9 100,2"
            fill="none" stroke="#10b981" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="100" cy="2" r="3" fill="#10b981" />
        </svg>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-metric-counter-tiles",
  name: "Counter Tiles",
  category: "cards",
  description:
    "A trio of icon tiles count up independent stats with accent colors.",
  tags: ["animated"],
  code: `@Composable
fun CounterTilesCard() {
  data class Tile(
    val icon: ImageVector,
    val target: Int,
    val color: Color,
  )
  val tiles = listOf(
    Tile(Icons.Default.Favorite, 248, Color(0xFFF43F5E)),
    Tile(Icons.Default.Share, 96, Color(0xFF0EA5E9)),
    Tile(Icons.Default.Star, 512, Color(0xFFF59E0B)),
  )
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.width(260.dp),
  ) {
    Row(
      Modifier
        .padding(16.dp)
        .fillMaxWidth(),
      horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
      tiles.forEach { t ->
        val a = remember { Animatable(0f) }
        LaunchedEffect(Unit) {
          a.animateTo(1f, tween(1000, easing = FastOutSlowInEasing))
        }
        Surface(
          shape = RoundedCornerShape(14.dp),
          color = t.color.copy(alpha = 0.12f),
          modifier = Modifier.weight(1f),
        ) {
          Column(
            Modifier.padding(12.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
          ) {
            Icon(
              imageVector = t.icon,
              contentDescription = null,
              tint = t.color,
              modifier = Modifier.size(20.dp),
            )
            Spacer(Modifier.height(6.dp))
            Text(
              text = "\${(t.target * a.value).toInt()}",
              fontWeight = FontWeight.Bold,
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-60">
      <CardContent className="p-4 flex gap-2.5">
        {[
          ["rose", 248],
          ["sky", 96],
          ["amber", 512],
        ].map(([c, n], i) => (
          <div key={i}
            className={"flex flex-1 flex-col items-center rounded-xl p-3 " +
              (c === "rose" ? "bg-rose-500/10" :
               c === "sky" ? "bg-sky-500/10" : "bg-amber-500/10")}>
            {c === "rose" ? <Heart className="size-5 text-rose-500" /> :
             c === "sky" ? <Activity className="size-5 text-sky-500" /> :
             <Star className="size-5 text-amber-500" />}
            <span className="mt-1.5 font-bold text-foreground">{n}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  ),
},

{
  id: "card-media-now-playing-mini",
  name: "Now Playing Mini",
  category: "cards",
  description:
    "Compact now-playing bar with album art, scrubbing progress and a play toggle.",
  tags: ["animated"],
  code: `@Composable
fun NowPlayingMini(
  title: String,
  artist: String,
) {
  var playing by remember { mutableStateOf(true) }
  val progress by animateFloatAsState(
    targetValue = if (playing) 0.62f else 0.4f,
    animationSpec = tween(600),
    label = "progress",
  )
  ElevatedCard(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column {
      Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier.padding(12.dp),
      ) {
        Box(
          modifier = Modifier
            .size(48.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(
              Brush.linearGradient(
                listOf(Color(0xFF7C4DFF), Color(0xFFFF4D9D)),
              ),
            ),
        )
        Spacer(Modifier.width(12.dp))
        Column(Modifier.weight(1f)) {
          Text(title, style = MaterialTheme.typography.titleSmall)
          Text(
            artist,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
          )
        }
        FilledIconButton(onClick = { playing = !playing }) {
          Icon(
            if (playing) Icons.Default.Pause
            else Icons.Default.PlayArrow,
            contentDescription = null,
          )
        }
      }
      LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier.fillMaxWidth(),
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden rounded-2xl">
      <div className="flex items-center gap-3 p-3">
        <div className="size-12 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate">Midnight Drive</div>
          <div className="text-xs text-muted-foreground truncate">Neon Coast</div>
        </div>
        <Button size="icon" className="size-9 rounded-full">
          <Pause className="size-4" />
        </Button>
      </div>
      <div className="h-1 w-full bg-muted">
        <div className="h-full w-[62%] bg-violet-500" />
      </div>
    </Card>
  ),
},
{
  id: "card-media-equalizer",
  name: "Animated Equalizer",
  category: "cards",
  description:
    "Live equalizer card with continuously bouncing frequency bars over a track.",
  tags: ["animated"],
  code: `@Composable
fun EqualizerCard(title: String) {
  val transition = rememberInfiniteTransition(label = "eq")
  val bars = List(5) { i ->
    transition.animateFloat(
      initialValue = 0.2f,
      targetValue = 1f,
      animationSpec = infiniteRepeatable(
        tween(400 + i * 120, easing = LinearEasing),
        RepeatMode.Reverse,
      ),
      label = "bar$i",
    )
  }
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Row(
      verticalAlignment = Alignment.CenterVertically,
      modifier = Modifier.padding(16.dp),
    ) {
      Row(
        horizontalArrangement = Arrangement.spacedBy(4.dp),
        verticalAlignment = Alignment.Bottom,
        modifier = Modifier.height(40.dp),
      ) {
        bars.forEach { v ->
          Box(
            modifier = Modifier
              .width(6.dp)
              .fillMaxHeight(v.value)
              .clip(RoundedCornerShape(3.dp))
              .background(MaterialTheme.colorScheme.primary),
          )
        }
      }
      Spacer(Modifier.width(16.dp))
      Text(title, style = MaterialTheme.typography.titleMedium)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex items-end gap-1 h-10">
          <div className="w-1.5 rounded-sm bg-primary animate-pulse" style={{ height: "40%" }} />
          <div className="w-1.5 rounded-sm bg-primary animate-pulse" style={{ height: "80%", animationDelay: "120ms" }} />
          <div className="w-1.5 rounded-sm bg-primary animate-pulse" style={{ height: "55%", animationDelay: "240ms" }} />
          <div className="w-1.5 rounded-sm bg-primary animate-pulse" style={{ height: "95%", animationDelay: "360ms" }} />
          <div className="w-1.5 rounded-sm bg-primary animate-pulse" style={{ height: "65%", animationDelay: "480ms" }} />
        </div>
        <div className="text-base font-semibold">Pulse FM</div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-waveform-scrubber",
  name: "Waveform Scrubber",
  category: "cards",
  description:
    "Audio clip card drawing a waveform with a draggable played and unplayed split.",
  tags: ["animated"],
  code: `@Composable
fun WaveformScrubber(played: Float) {
  val amps = remember {
    List(28) { (4..36).random().toFloat() }
  }
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Text("Voice Memo", style = MaterialTheme.typography.titleSmall)
      Spacer(Modifier.height(12.dp))
      Canvas(
        modifier = Modifier
          .fillMaxWidth()
          .height(44.dp),
      ) {
        val gap = size.width / amps.size
        amps.forEachIndexed { i, a ->
          val x = i * gap + gap / 2
          val on = i.toFloat() / amps.size <= played
          drawLine(
            color = if (on) Color(0xFF22D3EE)
            else Color(0xFF94A3B8),
            start = Offset(x, size.height / 2 - a),
            end = Offset(x, size.height / 2 + a),
            strokeWidth = 4f,
            cap = StrokeCap.Round,
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="text-sm font-semibold mb-3">Voice Memo</div>
        <div className="flex items-center justify-between h-11">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className={i / 28 <= 0.45 ? "w-1 rounded-full bg-cyan-400" : "w-1 rounded-full bg-slate-400"}
              style={{ height: `${20 + ((i * 13) % 70)}%` }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-art-progress-ring",
  name: "Cover Progress Ring",
  category: "cards",
  description:
    "Album art encircled by an animated progress ring with a centered play button.",
  tags: ["animated"],
  code: `@Composable
fun CoverProgressRing(progress: Float) {
  val anim by animateFloatAsState(
    targetValue = progress,
    animationSpec = tween(800),
    label = "ring",
  )
  Card(
    shape = RoundedCornerShape(24.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(
      horizontalAlignment = Alignment.CenterHorizontally,
      modifier = Modifier.padding(20.dp),
    ) {
      Box(contentAlignment = Alignment.Center) {
        Canvas(Modifier.size(120.dp)) {
          drawArc(
            color = Color(0xFF2A2A35),
            startAngle = -90f,
            sweepAngle = 360f,
            useCenter = false,
            style = Stroke(8f, cap = StrokeCap.Round),
          )
          drawArc(
            brush = Brush.sweepGradient(
              listOf(Color(0xFFFF8A00), Color(0xFFFF2D95)),
            ),
            startAngle = -90f,
            sweepAngle = 360f * anim,
            useCenter = false,
            style = Stroke(8f, cap = StrokeCap.Round),
          )
        }
        Box(
          modifier = Modifier
            .size(92.dp)
            .clip(CircleShape)
            .background(
              Brush.linearGradient(
                listOf(Color(0xFF6D28D9), Color(0xFFDB2777)),
              ),
            ),
          contentAlignment = Alignment.Center,
        ) {
          Icon(
            Icons.Default.PlayArrow,
            contentDescription = null,
            tint = Color.White,
          )
        }
      }
      Spacer(Modifier.height(14.dp))
      Text("Solar Flux", style = MaterialTheme.typography.titleMedium)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-3xl">
      <CardContent className="flex flex-col items-center p-5">
        <div className="relative size-[120px]">
          <svg viewBox="0 0 120 120" className="size-full -rotate-90">
            <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
            <circle cx="60" cy="60" r="54" fill="none" stroke="#fb923c" strokeWidth="8" strokeLinecap="round" strokeDasharray="339" strokeDashoffset="120" />
          </svg>
          <div className="absolute inset-0 m-auto size-[92px] rounded-full bg-gradient-to-br from-violet-700 to-pink-600 grid place-items-center">
            <Play className="size-6 text-white" />
          </div>
        </div>
        <div className="mt-3 text-base font-semibold">Solar Flux</div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-podcast-episode",
  name: "Podcast Episode",
  category: "cards",
  description:
    "Podcast episode card with show artwork, duration chip and a quick play action.",
  code: `@Composable
fun PodcastEpisode(
  show: String,
  episode: String,
  duration: String,
) {
  OutlinedCard(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Row(Modifier.padding(14.dp)) {
      Box(
        modifier = Modifier
          .size(64.dp)
          .clip(RoundedCornerShape(14.dp))
          .background(
            Brush.linearGradient(
              listOf(Color(0xFF0EA5E9), Color(0xFF6366F1)),
            ),
          ),
        contentAlignment = Alignment.Center,
      ) {
        Icon(
          Icons.Default.Mic,
          contentDescription = null,
          tint = Color.White,
        )
      }
      Spacer(Modifier.width(14.dp))
      Column(Modifier.weight(1f)) {
        Text(
          show,
          style = MaterialTheme.typography.labelMedium,
          color = MaterialTheme.colorScheme.primary,
        )
        Text(
          episode,
          style = MaterialTheme.typography.titleSmall,
          maxLines = 2,
        )
        Spacer(Modifier.height(6.dp))
        AssistChip(
          onClick = {},
          label = { Text(duration) },
          leadingIcon = {
            Icon(
              Icons.Default.PlayArrow,
              contentDescription = null,
            )
          },
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border">
      <CardContent className="flex gap-3 p-3.5">
        <div className="size-16 shrink-0 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 grid place-items-center">
          <Mic className="size-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-primary">Deep Dive</div>
          <div className="text-sm font-semibold leading-snug">The Future of Sound</div>
          <Badge variant="secondary" className="mt-1.5 gap-1">
            <Play className="size-3" /> 48 min
          </Badge>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-video-thumb",
  name: "Video Thumbnail",
  category: "cards",
  description:
    "Video preview card with gradient poster, duration badge and a hover play overlay.",
  tags: ["animated"],
  code: `@Composable
fun VideoThumb(title: String, duration: String) {
  var hover by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    targetValue = if (hover) 1.08f else 1f,
    animationSpec = spring(),
    label = "scale",
  )
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column {
      Box(
        modifier = Modifier
          .fillMaxWidth()
          .height(140.dp)
          .graphicsLayer { scaleX = scale; scaleY = scale }
          .background(
            Brush.linearGradient(
              listOf(Color(0xFF1E293B), Color(0xFF7C3AED)),
            ),
          ),
        contentAlignment = Alignment.Center,
      ) {
        Icon(
          Icons.Default.PlayArrow,
          contentDescription = null,
          tint = Color.White,
          modifier = Modifier.size(40.dp),
        )
        Box(
          modifier = Modifier
            .align(Alignment.BottomEnd)
            .padding(8.dp)
            .clip(RoundedCornerShape(6.dp))
            .background(Color(0xCC000000))
            .padding(horizontal = 6.dp, vertical = 2.dp),
        ) {
          Text(
            duration,
            color = Color.White,
            style = MaterialTheme.typography.labelSmall,
          )
        }
      }
      Text(
        title,
        style = MaterialTheme.typography.titleSmall,
        modifier = Modifier.padding(12.dp),
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden rounded-2xl">
      <div className="relative h-32 bg-gradient-to-br from-slate-800 to-violet-600 grid place-items-center">
        <Play className="size-10 text-white" />
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-medium text-white">
          12:04
        </span>
      </div>
      <div className="p-3 text-sm font-semibold">Building a Synth from Scratch</div>
    </Card>
  ),
},
{
  id: "card-media-lyrics-highlight",
  name: "Lyrics Highlight",
  category: "cards",
  description:
    "Synced lyrics card where the active line brightens and gently scales up.",
  tags: ["animated"],
  code: `@Composable
fun LyricsHighlight(lines: List<String>, active: Int) {
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(20.dp)) {
      lines.forEachIndexed { i, line ->
        val on = i == active
        val scale by animateFloatAsState(
          targetValue = if (on) 1.05f else 1f,
          label = "ly$i",
        )
        Text(
          line,
          style = MaterialTheme.typography.titleMedium,
          color = if (on)
            MaterialTheme.colorScheme.primary
          else MaterialTheme.colorScheme.onSurfaceVariant
            .copy(alpha = 0.45f),
          modifier = Modifier
            .padding(vertical = 6.dp)
            .graphicsLayer {
              scaleX = scale
              scaleY = scale
              transformOrigin = TransformOrigin(0f, 0.5f)
            },
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5 space-y-2">
        <div className="text-base font-semibold text-muted-foreground/40">city lights fade away</div>
        <div className="text-base font-semibold text-primary scale-105 origin-left">we chase the open road</div>
        <div className="text-base font-semibold text-muted-foreground/40">stars align tonight</div>
        <div className="text-base font-semibold text-muted-foreground/40">nothing left to hold</div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-up-next-queue",
  name: "Up Next Queue",
  category: "cards",
  description:
    "Up-next queue card with staggered list reveal and reorderable track rows.",
  tags: ["animated"],
  code: `@Composable
fun UpNextQueue(tracks: List<Pair<String, String>>) {
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.List, contentDescription = null)
        Spacer(Modifier.width(8.dp))
        Text("Up Next", style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(12.dp))
      tracks.forEachIndexed { i, (t, a) ->
        var shown by remember { mutableStateOf(false) }
        LaunchedEffect(Unit) {
          delay(i * 90L)
          shown = true
        }
        val alpha by animateFloatAsState(
          targetValue = if (shown) 1f else 0f,
          label = "row$i",
        )
        Row(
          verticalAlignment = Alignment.CenterVertically,
          modifier = Modifier
            .fillMaxWidth()
            .graphicsLayer { this.alpha = alpha }
            .padding(vertical = 8.dp),
        ) {
          Text(
            "\${i + 1}",
            color = MaterialTheme.colorScheme.primary,
          )
          Spacer(Modifier.width(12.dp))
          Column(Modifier.weight(1f)) {
            Text(t, style = MaterialTheme.typography.bodyLarge)
            Text(
              a,
              style = MaterialTheme.typography.bodySmall,
              color = MaterialTheme.colorScheme.onSurfaceVariant,
            )
          }
          Icon(Icons.Default.DragHandle, contentDescription = null)
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 font-semibold">
          <ListMusic className="size-4" /> Up Next
        </div>
        <div className="mt-3 space-y-2">
          {[["Aurora", "Lume"], ["Drift", "Kavi"], ["Ember", "Noor"]].map(([t, a], i) => (
            <div key={t} className="flex items-center gap-3" style={{ opacity: 1 - i * 0.15 }}>
              <span className="text-primary text-sm font-medium">{i + 1}</span>
              <div className="flex-1">
                <div className="text-sm">{t}</div>
                <div className="text-xs text-muted-foreground">{a}</div>
              </div>
              <MoreHorizontal className="size-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-spinning-vinyl",
  name: "Spinning Vinyl",
  category: "cards",
  description:
    "Vinyl record card that spins continuously while a track is playing.",
  tags: ["animated"],
  code: `@Composable
fun SpinningVinyl(title: String) {
  val rot by rememberInfiniteTransition(label = "spin")
    .animateFloat(
      initialValue = 0f,
      targetValue = 360f,
      animationSpec = infiniteRepeatable(
        tween(6000, easing = LinearEasing),
      ),
      label = "rot",
    )
  Card(
    shape = RoundedCornerShape(24.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Row(
      verticalAlignment = Alignment.CenterVertically,
      modifier = Modifier.padding(18.dp),
    ) {
      Box(
        modifier = Modifier
          .size(96.dp)
          .graphicsLayer { rotationZ = rot }
          .clip(CircleShape)
          .background(
            Brush.radialGradient(
              listOf(Color(0xFF111111), Color(0xFF333333)),
            ),
          ),
        contentAlignment = Alignment.Center,
      ) {
        Box(
          modifier = Modifier
            .size(30.dp)
            .clip(CircleShape)
            .background(
              Brush.linearGradient(
                listOf(Color(0xFFEF4444), Color(0xFFF59E0B)),
              ),
            ),
        )
      }
      Spacer(Modifier.width(18.dp))
      Column {
        Text("Now Spinning", style = MaterialTheme.typography.labelSmall)
        Text(title, style = MaterialTheme.typography.titleMedium)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-3xl">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="relative size-24 rounded-full bg-[radial-gradient(circle,#333,#111)] grid place-items-center animate-spin [animation-duration:6s]">
          <div className="size-8 rounded-full bg-gradient-to-br from-red-500 to-amber-500" />
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Now Spinning</div>
          <div className="text-base font-semibold">Groove Theory</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-radio-station",
  name: "Radio Station",
  category: "cards",
  description:
    "Live radio station card with a pulsing on-air dot and frequency label.",
  tags: ["animated"],
  code: `@Composable
fun RadioStation(name: String, freq: String) {
  val pulse by rememberInfiniteTransition(label = "p")
    .animateFloat(
      initialValue = 0.4f,
      targetValue = 1f,
      animationSpec = infiniteRepeatable(
        tween(800), RepeatMode.Reverse,
      ),
      label = "dot",
    )
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Row(
      verticalAlignment = Alignment.CenterVertically,
      modifier = Modifier.padding(16.dp),
    ) {
      Icon(
        Icons.Default.Radio,
        contentDescription = null,
        modifier = Modifier.size(40.dp),
        tint = MaterialTheme.colorScheme.primary,
      )
      Spacer(Modifier.width(14.dp))
      Column(Modifier.weight(1f)) {
        Text(name, style = MaterialTheme.typography.titleMedium)
        Text(freq, style = MaterialTheme.typography.bodySmall)
      }
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box(
          modifier = Modifier
            .size(8.dp)
            .graphicsLayer { alpha = pulse }
            .clip(CircleShape)
            .background(Color(0xFFEF4444)),
        )
        Spacer(Modifier.width(6.dp))
        Text("LIVE", color = Color(0xFFEF4444))
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="flex items-center gap-3 p-4">
        <Radio className="size-9 text-primary" />
        <div className="flex-1">
          <div className="text-base font-semibold">Wave 101</div>
          <div className="text-xs text-muted-foreground">101.7 FM</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold text-red-500">LIVE</span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-audiobook-progress",
  name: "Audiobook Progress",
  category: "cards",
  description:
    "Audiobook card showing chapter, remaining time and an animated progress bar.",
  tags: ["animated"],
  code: `@Composable
fun AudiobookProgress(title: String, chapter: String) {
  val progress by animateFloatAsState(
    targetValue = 0.73f,
    animationSpec = tween(900),
    label = "ab",
  )
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Row {
        Box(
          modifier = Modifier
            .size(56.dp)
            .clip(RoundedCornerShape(10.dp))
            .background(
              Brush.linearGradient(
                listOf(Color(0xFF92400E), Color(0xFFB45309)),
              ),
            ),
          contentAlignment = Alignment.Center,
        ) {
          Icon(
            Icons.Default.Headphones,
            contentDescription = null,
            tint = Color.White,
          )
        }
        Spacer(Modifier.width(14.dp))
        Column {
          Text(title, style = MaterialTheme.typography.titleSmall)
          Text(chapter, style = MaterialTheme.typography.bodySmall)
        }
      }
      Spacer(Modifier.height(14.dp))
      LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier
          .fillMaxWidth()
          .height(6.dp)
          .clip(RoundedCornerShape(3.dp)),
      )
      Spacer(Modifier.height(6.dp))
      Text(
        "2h 14m left",
        style = MaterialTheme.typography.labelSmall,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="flex gap-3">
          <div className="size-14 rounded-lg bg-gradient-to-br from-amber-800 to-amber-600 grid place-items-center">
            <Headphones className="size-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold">The Long Echo</div>
            <div className="text-xs text-muted-foreground">Chapter 9</div>
          </div>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
          <div className="h-full w-[73%] rounded-full bg-amber-600" />
        </div>
        <div className="mt-1.5 text-[11px] text-muted-foreground">2h 14m left</div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-live-stream-badge",
  name: "Live Stream Badge",
  category: "cards",
  description:
    "Streaming card with animated live badge, viewer count and channel avatar.",
  tags: ["animated"],
  code: `@Composable
fun LiveStreamCard(channel: String, viewers: String) {
  val blink by rememberInfiniteTransition(label = "b")
    .animateFloat(
      initialValue = 0.3f,
      targetValue = 1f,
      animationSpec = infiniteRepeatable(
        tween(700), RepeatMode.Reverse,
      ),
      label = "blink",
    )
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Box {
      Box(
        modifier = Modifier
          .fillMaxWidth()
          .height(130.dp)
          .background(
            Brush.linearGradient(
              listOf(Color(0xFF0F172A), Color(0xFF1E40AF)),
            ),
          ),
        contentAlignment = Alignment.Center,
      ) {
        Icon(
          Icons.Default.Videocam,
          contentDescription = null,
          tint = Color.White,
          modifier = Modifier.size(36.dp),
        )
      }
      Box(
        modifier = Modifier
          .align(Alignment.TopStart)
          .padding(10.dp)
          .graphicsLayer { alpha = blink }
          .clip(RoundedCornerShape(6.dp))
          .background(Color(0xFFDC2626))
          .padding(horizontal = 8.dp, vertical = 3.dp),
      ) {
        Text(
          "LIVE",
          color = Color.White,
          style = MaterialTheme.typography.labelSmall,
        )
      }
      Text(
        "$viewers watching",
        color = Color.White,
        style = MaterialTheme.typography.labelSmall,
        modifier = Modifier
          .align(Alignment.BottomStart)
          .padding(12.dp),
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden rounded-2xl">
      <div className="relative h-32 bg-gradient-to-br from-slate-900 to-blue-800 grid place-items-center">
        <Video className="size-9 text-white" />
        <span className="absolute top-2.5 left-2.5 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white animate-pulse">
          LIVE
        </span>
        <span className="absolute bottom-2.5 left-3 text-[11px] text-white/90">3.2K watching</span>
      </div>
    </Card>
  ),
},
{
  id: "card-media-playlist-stack",
  name: "Playlist Stack",
  category: "cards",
  description:
    "Playlist card with layered stacked covers that fan out on interaction.",
  tags: ["animated"],
  code: `@Composable
fun PlaylistStack(name: String, count: Int) {
  var open by remember { mutableStateOf(false) }
  val spread by animateFloatAsState(
    targetValue = if (open) 1f else 0f,
    animationSpec = spring(),
    label = "spread",
  )
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier
      .fillMaxWidth()
      .clickable { open = !open },
  ) {
    Row(
      verticalAlignment = Alignment.CenterVertically,
      modifier = Modifier.padding(16.dp),
    ) {
      Box(Modifier.size(72.dp)) {
        listOf(
          Color(0xFF6366F1),
          Color(0xFFEC4899),
          Color(0xFF14B8A6),
        ).forEachIndexed { i, c ->
          Box(
            modifier = Modifier
              .size(56.dp)
              .graphicsLayer {
                translationX = i * 8.dp.toPx() * (1f + spread)
                rotationZ = (i - 1) * 6f * spread
              }
              .clip(RoundedCornerShape(10.dp))
              .background(c),
          )
        }
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text(name, style = MaterialTheme.typography.titleMedium)
        Text(
          "$count tracks",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="relative size-16">
          <div className="absolute size-14 rounded-lg bg-teal-500 left-4 rotate-6" />
          <div className="absolute size-14 rounded-lg bg-pink-500 left-2" />
          <div className="absolute size-14 rounded-lg bg-indigo-500 -rotate-6" />
        </div>
        <div>
          <div className="text-base font-semibold">Focus Flow</div>
          <div className="text-xs text-muted-foreground">42 tracks</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-like-burst",
  name: "Song Like Burst",
  category: "cards",
  description:
    "Song row where tapping the heart triggers a burst scale-and-fade animation.",
  tags: ["animated"],
  code: `@Composable
fun SongLikeBurst(title: String, artist: String) {
  var liked by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    targetValue = if (liked) 1.3f else 1f,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioMediumBouncy,
    ),
    label = "burst",
  )
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Row(
      verticalAlignment = Alignment.CenterVertically,
      modifier = Modifier.padding(14.dp),
    ) {
      Box(
        modifier = Modifier
          .size(48.dp)
          .clip(RoundedCornerShape(10.dp))
          .background(
            Brush.linearGradient(
              listOf(Color(0xFF8B5CF6), Color(0xFF06B6D4)),
            ),
          ),
      )
      Spacer(Modifier.width(14.dp))
      Column(Modifier.weight(1f)) {
        Text(title, style = MaterialTheme.typography.titleSmall)
        Text(
          artist,
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
      }
      IconButton(onClick = { liked = !liked }) {
        Icon(
          if (liked) Icons.Filled.Favorite
          else Icons.Outlined.FavoriteBorder,
          contentDescription = null,
          tint = if (liked) Color(0xFFEF4444)
          else MaterialTheme.colorScheme.onSurfaceVariant,
          modifier = Modifier.graphicsLayer {
            scaleX = scale; scaleY = scale
          },
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="flex items-center gap-3 p-3.5">
        <div className="size-12 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500" />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate">Velvet Sky</div>
          <div className="text-xs text-muted-foreground truncate">Mira J</div>
        </div>
        <Heart className="size-5 text-red-500 fill-red-500 scale-110" />
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-volume-slider",
  name: "Volume Slider",
  category: "cards",
  description:
    "Volume control card with a draggable slider and animated level fill.",
  tags: ["animated"],
  code: `@Composable
fun VolumeSlider() {
  var level by remember { mutableStateOf(0.6f) }
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.VolumeUp, contentDescription = null)
        Spacer(Modifier.width(10.dp))
        Text("Output Volume",
          style = MaterialTheme.typography.titleSmall)
        Spacer(Modifier.weight(1f))
        Text(
          "\${(level * 100).toInt()}%",
          color = MaterialTheme.colorScheme.primary,
        )
      }
      Spacer(Modifier.height(12.dp))
      Slider(
        value = level,
        onValueChange = { level = it },
        modifier = Modifier.fillMaxWidth(),
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Volume2 className="size-4" />
          <span className="text-sm font-semibold">Output Volume</span>
          <span className="ml-auto text-sm text-primary">60%</span>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
          <div className="relative h-full w-[60%] rounded-full bg-primary">
            <span className="absolute -right-1.5 -top-1 size-3.5 rounded-full bg-primary ring-2 ring-background" />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-transport-controls",
  name: "Mini Transport",
  category: "cards",
  description:
    "Minimal transport card with previous, morphing play-pause and next buttons.",
  tags: ["animated"],
  code: `@Composable
fun MiniTransport() {
  var playing by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    targetValue = if (playing) 1.1f else 1f,
    animationSpec = spring(),
    label = "pp",
  )
  Surface(
    shape = RoundedCornerShape(28.dp),
    tonalElevation = 3.dp,
    modifier = Modifier.fillMaxWidth(),
  ) {
    Row(
      horizontalArrangement = Arrangement.spacedBy(
        18.dp, Alignment.CenterHorizontally,
      ),
      verticalAlignment = Alignment.CenterVertically,
      modifier = Modifier.padding(vertical = 14.dp),
    ) {
      IconButton(onClick = {}) {
        Icon(Icons.Default.SkipPrevious, contentDescription = null)
      }
      FilledIconButton(
        onClick = { playing = !playing },
        modifier = Modifier
          .size(56.dp)
          .graphicsLayer { scaleX = scale; scaleY = scale },
      ) {
        Icon(
          if (playing) Icons.Default.Pause
          else Icons.Default.PlayArrow,
          contentDescription = null,
        )
      }
      IconButton(onClick = {}) {
        Icon(Icons.Default.SkipNext, contentDescription = null)
      }
    }
  }
}`,
  preview: (
    <Card className="w-60 mx-auto rounded-[28px]">
      <CardContent className="flex items-center justify-center gap-5 py-4">
        <Reply className="size-5 text-muted-foreground" />
        <Button size="icon" className="size-14 rounded-full scale-110">
          <Play className="size-6" />
        </Button>
        <Forward className="size-5 text-muted-foreground" />
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-recently-played",
  name: "Recently Played",
  category: "cards",
  description:
    "Horizontal recently-played strip with rounded covers and timestamp labels.",
  code: `@Composable
fun RecentlyPlayed(items: List<String>) {
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Schedule, contentDescription = null)
        Spacer(Modifier.width(8.dp))
        Text("Recently Played",
          style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(12.dp))
      Row(
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        modifier = Modifier.horizontalScroll(rememberScrollState()),
      ) {
        items.forEachIndexed { i, label ->
          Column {
            Box(
              modifier = Modifier
                .size(72.dp)
                .clip(RoundedCornerShape(14.dp))
                .background(
                  Brush.linearGradient(
                    listOf(
                      Color(0xFF6366F1),
                      Color(0xFFA855F7),
                    ),
                  ),
                ),
            )
            Spacer(Modifier.height(6.dp))
            Text(label,
              style = MaterialTheme.typography.labelSmall)
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 font-semibold">
          <Clock className="size-4" /> Recently Played
        </div>
        <div className="mt-3 flex gap-3 overflow-hidden">
          {[0, 1, 2].map((i) => (
            <div key={i} className="shrink-0">
              <div className="size-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500" />
              <div className="mt-1 text-[10px] text-muted-foreground">2h ago</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-visualizer-bars",
  name: "Music Visualizer",
  category: "cards",
  description:
    "Full-width visualizer card rendering many animated frequency bars on canvas.",
  tags: ["animated"],
  code: `@Composable
fun MusicVisualizer() {
  val t = rememberInfiniteTransition(label = "vis")
  val phase by t.animateFloat(
    initialValue = 0f,
    targetValue = (2 * PI).toFloat(),
    animationSpec = infiniteRepeatable(
      tween(1400, easing = LinearEasing),
    ),
    label = "phase",
  )
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Canvas(
      modifier = Modifier
        .fillMaxWidth()
        .height(96.dp)
        .padding(16.dp),
    ) {
      val n = 24
      val gap = size.width / n
      for (i in 0 until n) {
        val h = (sin(phase + i * 0.5f) * 0.5f + 0.5f) *
          size.height
        drawRoundRect(
          brush = Brush.verticalGradient(
            listOf(Color(0xFF22D3EE), Color(0xFF818CF8)),
          ),
          topLeft = Offset(i * gap, size.height - h),
          size = Size(gap * 0.5f, h),
          cornerRadius = CornerRadius(4f, 4f),
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="flex h-20 items-end gap-1">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-indigo-400 to-cyan-400 animate-pulse"
              style={{ height: `${30 + Math.abs(Math.sin(i)) * 60}%`, animationDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-video-chapters",
  name: "Video Chapters",
  category: "cards",
  description:
    "Video card listing chapter markers with the current segment highlighted.",
  tags: ["animated"],
  code: `@Composable
fun VideoChapters(chapters: List<Pair<String, Float>>) {
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Movie, contentDescription = null)
        Spacer(Modifier.width(8.dp))
        Text("Chapters",
          style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(12.dp))
      val active = 1
      chapters.forEachIndexed { i, (label, at) ->
        val on = i == active
        val bg by animateColorAsState(
          targetValue = if (on)
            MaterialTheme.colorScheme.primaryContainer
          else Color.Transparent,
          label = "ch$i",
        )
        Row(
          verticalAlignment = Alignment.CenterVertically,
          modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(10.dp))
            .background(bg)
            .padding(10.dp),
        ) {
          Icon(
            Icons.Default.PlayArrow,
            contentDescription = null,
            tint = if (on)
              MaterialTheme.colorScheme.primary
            else MaterialTheme.colorScheme.onSurfaceVariant,
          )
          Spacer(Modifier.width(10.dp))
          Text(label, Modifier.weight(1f))
          Text(
            "\${(at * 100).toInt()}:00",
            style = MaterialTheme.typography.labelSmall,
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 font-semibold">
          <Film className="size-4" /> Chapters
        </div>
        <div className="mt-3 space-y-1">
          {[["Intro", "00:00"], ["Setup", "04:12"], ["Demo", "11:30"]].map(([c, t], i) => (
            <div key={c} className={`flex items-center gap-2.5 rounded-lg p-2.5 ${i === 1 ? "bg-primary/15" : ""}`}>
              <Play className={`size-4 ${i === 1 ? "text-primary" : "text-muted-foreground"}`} />
              <span className="flex-1 text-sm">{c}</span>
              <span className="text-[11px] text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-broadcast-live",
  name: "Broadcast Live",
  category: "cards",
  description:
    "Broadcast card with expanding concentric ring waves around a live mic.",
  tags: ["animated"],
  code: `@Composable
fun BroadcastLive(title: String) {
  val t = rememberInfiniteTransition(label = "bc")
  val wave by t.animateFloat(
    initialValue = 0f,
    targetValue = 1f,
    animationSpec = infiniteRepeatable(
      tween(1800, easing = LinearEasing),
    ),
    label = "wave",
  )
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Row(
      verticalAlignment = Alignment.CenterVertically,
      modifier = Modifier.padding(18.dp),
    ) {
      Box(contentAlignment = Alignment.Center) {
        Canvas(Modifier.size(64.dp)) {
          for (k in 0..2) {
            val p = (wave + k / 3f) % 1f
            drawCircle(
              color = Color(0xFFEF4444)
                .copy(alpha = 1f - p),
              radius = size.minDimension / 2 * p,
              style = Stroke(3f),
            )
          }
        }
        Icon(
          Icons.Default.Mic,
          contentDescription = null,
          tint = Color(0xFFEF4444),
        )
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text("On Air",
          color = Color(0xFFEF4444),
          style = MaterialTheme.typography.labelMedium)
        Text(title, style = MaterialTheme.typography.titleMedium)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="relative grid size-16 place-items-center">
          <span className="absolute size-16 rounded-full border-2 border-red-500/30 animate-ping" />
          <span className="absolute size-10 rounded-full border-2 border-red-500/50 animate-ping" />
          <Mic className="size-6 text-red-500" />
        </div>
        <div>
          <div className="text-xs font-semibold text-red-500">On Air</div>
          <div className="text-base font-semibold">Morning Show</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-sound-wave-pulse",
  name: "Sound Wave Pulse",
  category: "cards",
  description:
    "Speaker card emitting a rhythmic sine-wave pulse drawn across the surface.",
  tags: ["animated"],
  code: `@Composable
fun SoundWavePulse() {
  val t = rememberInfiniteTransition(label = "sw")
  val shift by t.animateFloat(
    initialValue = 0f,
    targetValue = (2 * PI).toFloat(),
    animationSpec = infiniteRepeatable(
      tween(1600, easing = LinearEasing),
    ),
    label = "shift",
  )
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Speaker, contentDescription = null)
        Spacer(Modifier.width(8.dp))
        Text("Ambient Mode",
          style = MaterialTheme.typography.titleSmall)
      }
      Spacer(Modifier.height(12.dp))
      Canvas(
        modifier = Modifier
          .fillMaxWidth()
          .height(48.dp),
      ) {
        val path = Path()
        val mid = size.height / 2
        path.moveTo(0f, mid)
        var x = 0f
        while (x <= size.width) {
          val y = mid + sin(x / 26f + shift) * 16f
          path.lineTo(x, y)
          x += 4f
        }
        drawPath(
          path,
          color = Color(0xFF34D399),
          style = Stroke(4f, cap = StrokeCap.Round),
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 font-semibold">
          <Speaker className="size-4" /> Ambient Mode
        </div>
        <svg viewBox="0 0 240 48" className="mt-3 h-12 w-full">
          <path d="M0 24 Q20 4 40 24 T80 24 T120 24 T160 24 T200 24 T240 24" fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
        </svg>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-buffered-scrubber",
  name: "Buffered Scrubber",
  category: "cards",
  description:
    "Track scrubber card showing buffered range, played position and time labels.",
  tags: ["animated"],
  code: `@Composable
fun BufferedScrubber() {
  val played by animateFloatAsState(
    targetValue = 0.4f,
    animationSpec = tween(700),
    label = "p",
  )
  val buffered = 0.72f
  Card(
    shape = RoundedCornerShape(18.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(16.dp)) {
      Text("Episode 12, Signals",
        style = MaterialTheme.typography.titleSmall)
      Spacer(Modifier.height(14.dp))
      Box(
        modifier = Modifier
          .fillMaxWidth()
          .height(6.dp)
          .clip(RoundedCornerShape(3.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant),
      ) {
        Box(
          Modifier
            .fillMaxWidth(buffered)
            .fillMaxHeight()
            .background(
              MaterialTheme.colorScheme.primary
                .copy(alpha = 0.35f),
            ),
        )
        Box(
          Modifier
            .fillMaxWidth(played)
            .fillMaxHeight()
            .background(MaterialTheme.colorScheme.primary),
        )
      }
      Spacer(Modifier.height(8.dp))
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
      ) {
        Text("12:40",
          style = MaterialTheme.typography.labelSmall)
        Text("-18:05",
          style = MaterialTheme.typography.labelSmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-4">
        <div className="text-sm font-semibold">Episode 12, Signals</div>
        <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="absolute inset-y-0 left-0 w-[72%] bg-primary/35" />
          <div className="absolute inset-y-0 left-0 w-[40%] bg-primary" />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
          <span>12:40</span>
          <span>-18:05</span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-full-bleed-cover",
  name: "Full Bleed Cover",
  category: "cards",
  description:
    "Immersive full-bleed cover card with gradient scrim and overlaid play control.",
  tags: ["animated"],
  code: `@Composable
fun FullBleedCover(title: String, artist: String) {
  var playing by remember { mutableStateOf(false) }
  Card(
    shape = RoundedCornerShape(24.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Box(
      modifier = Modifier
        .fillMaxWidth()
        .height(200.dp)
        .background(
          Brush.linearGradient(
            listOf(Color(0xFFEC4899), Color(0xFF8B5CF6)),
          ),
        ),
    ) {
      Box(
        Modifier
          .fillMaxSize()
          .background(
            Brush.verticalGradient(
              listOf(Color.Transparent, Color(0xCC000000)),
            ),
          ),
      )
      Column(
        Modifier
          .align(Alignment.BottomStart)
          .padding(18.dp),
      ) {
        Text(title,
          color = Color.White,
          style = MaterialTheme.typography.headlineSmall)
        Text(artist, color = Color.White.copy(alpha = 0.8f))
      }
      FilledIconButton(
        onClick = { playing = !playing },
        modifier = Modifier
          .align(Alignment.BottomEnd)
          .padding(18.dp)
          .size(56.dp),
      ) {
        Icon(
          if (playing) Icons.Default.Pause
          else Icons.Default.PlayArrow,
          contentDescription = null,
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden rounded-3xl">
      <div className="relative h-48 bg-gradient-to-br from-pink-500 to-violet-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-lg font-bold">Nightfall</div>
          <div className="text-sm text-white/80">Echo Park</div>
        </div>
        <Button size="icon" className="absolute bottom-4 right-4 size-12 rounded-full">
          <Play className="size-5" />
        </Button>
      </div>
    </Card>
  ),
},
{
  id: "card-media-podcast-subscribe",
  name: "Podcast Subscribe",
  category: "cards",
  description:
    "Podcast show card with rating stars and a subscribe button that fills on press.",
  tags: ["animated"],
  code: `@Composable
fun PodcastSubscribe(show: String) {
  var subbed by remember { mutableStateOf(false) }
  Card(
    shape = RoundedCornerShape(20.dp),
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(
      horizontalAlignment = Alignment.CenterHorizontally,
      modifier = Modifier.padding(18.dp),
    ) {
      Box(
        modifier = Modifier
          .size(76.dp)
          .clip(RoundedCornerShape(16.dp))
          .background(
            Brush.linearGradient(
              listOf(Color(0xFFF97316), Color(0xFFEF4444)),
            ),
          ),
        contentAlignment = Alignment.Center,
      ) {
        Icon(
          Icons.Default.Rss,
          contentDescription = null,
          tint = Color.White,
        )
      }
      Spacer(Modifier.height(10.dp))
      Text(show, style = MaterialTheme.typography.titleMedium)
      Row {
        repeat(5) {
          Icon(
            Icons.Default.Star,
            contentDescription = null,
            tint = Color(0xFFF59E0B),
            modifier = Modifier.size(14.dp),
          )
        }
      }
      Spacer(Modifier.height(12.dp))
      Button(
        onClick = { subbed = !subbed },
        colors = if (subbed)
          ButtonDefaults.outlinedButtonColors()
        else ButtonDefaults.buttonColors(),
      ) {
        Icon(Icons.Default.Add, contentDescription = null)
        Spacer(Modifier.width(6.dp))
        Text(if (subbed) "Subscribed" else "Subscribe")
      }
    }
  }
}`,
  preview: (
    <Card className="w-60 mx-auto rounded-2xl">
      <CardContent className="flex flex-col items-center p-5">
        <div className="size-[76px] rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 grid place-items-center">
          <Rss className="size-7 text-white" />
        </div>
        <div className="mt-2.5 text-base font-semibold">Tech Talk Daily</div>
        <div className="flex gap-0.5 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-amber-500" />
          ))}
        </div>
        <Button className="mt-3 gap-1.5">
          <Plus className="size-4" /> Subscribe
        </Button>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-media-episode-row",
  name: "Episode List Row",
  category: "cards",
  description:
    "Compact episode row with download, play and share actions plus a meta line.",
  code: `@Composable
fun EpisodeRow(title: String, date: String) {
  Surface(
    shape = RoundedCornerShape(16.dp),
    tonalElevation = 2.dp,
    modifier = Modifier.fillMaxWidth(),
  ) {
    Column(Modifier.padding(14.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        FilledTonalIconButton(onClick = {}) {
          Icon(
            Icons.Default.PlayArrow,
            contentDescription = null,
          )
        }
        Spacer(Modifier.width(12.dp))
        Column(Modifier.weight(1f)) {
          Text(title,
            style = MaterialTheme.typography.titleSmall,
            maxLines = 1)
          Text(
            "$date · 36 min",
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
          )
        }
      }
      Spacer(Modifier.height(10.dp))
      Row(
        horizontalArrangement = Arrangement.spacedBy(8.dp),
      ) {
        AssistChip(
          onClick = {},
          label = { Text("Download") },
          leadingIcon = {
            Icon(Icons.Default.Download,
              contentDescription = null)
          },
        )
        AssistChip(
          onClick = {},
          label = { Text("Share") },
          leadingIcon = {
            Icon(Icons.Default.Share,
              contentDescription = null)
          },
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-3.5">
        <div className="flex items-center gap-3">
          <Button size="icon" variant="secondary" className="size-10 rounded-full">
            <Play className="size-4" />
          </Button>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold truncate">Why Synths Sound Warm</div>
            <div className="text-xs text-muted-foreground">Jun 12 · 36 min</div>
          </div>
        </div>
        <div className="mt-2.5 flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Download className="size-3" /> Download
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Share2 className="size-3" /> Share
          </Badge>
        </div>
      </CardContent>
    </Card>
  ),
},

{
  id: "card-finance-balance-countup",
  name: "Balance Count Up",
  category: "cards",
  description:
    "Account balance card animating its total with a smooth count-up reveal.",
  tags: ["animated"],
  code: `@Composable
fun BalanceCountUpCard() {
  val target = 12480.55f
  val anim = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    anim.animateTo(
      target,
      tween(1400, easing = FastOutSlowInEasing)
    )
  }
  ElevatedCard(
    modifier = Modifier
      .fillMaxWidth()
      .padding(16.dp),
    shape = RoundedCornerShape(24.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Total Balance",
        style = MaterialTheme.typography.labelMedium,
        color = MaterialTheme.colorScheme.onSurfaceVariant
      )
      Spacer(Modifier.height(6.dp))
      Text(
        "$" + "%,.2f".format(anim.value),
        style = MaterialTheme.typography.displaySmall,
        fontWeight = FontWeight.Bold
      )
      Spacer(Modifier.height(10.dp))
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(
          Icons.Filled.TrendingUp,
          null,
          tint = Color(0xFF22C55E),
          modifier = Modifier.size(16.dp)
        )
        Spacer(Modifier.width(4.dp))
        Text(
          "+2.4% this month",
          style = MaterialTheme.typography.bodySmall,
          color = Color(0xFF22C55E)
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-3xl border-border">
      <CardContent className="p-6">
        <CardDescription className="text-xs">
          Total Balance
        </CardDescription>
        <div className="mt-1 text-3xl font-bold text-foreground tabular-nums">
          $12,480.55
        </div>
        <div className="mt-3 flex items-center gap-1 text-emerald-500">
          <TrendingUp className="size-4" />
          <span className="text-xs">+2.4% this month</span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-credit-shimmer",
  name: "Credit Card Shimmer",
  category: "cards",
  description:
    "Gradient credit card with a sweeping shimmer sheen across its glossy face.",
  tags: ["animated"],
  code: `@Composable
fun CreditShimmerCard() {
  val t = rememberInfiniteTransition(label = "sheen")
  val x by t.animateFloat(
    -300f, 600f,
    infiniteRepeatable(tween(2200), RepeatMode.Restart),
    label = "x"
  )
  Card(
    modifier = Modifier
      .fillMaxWidth()
      .padding(16.dp)
      .height(190.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Box(
      Modifier
        .fillMaxSize()
        .background(
          Brush.linearGradient(
            listOf(Color(0xFF1E293B), Color(0xFF0F172A))
          )
        )
        .drawWithContent {
          drawContent()
          drawRect(
            Brush.linearGradient(
              listOf(
                Color.Transparent,
                Color.White.copy(alpha = 0.18f),
                Color.Transparent
              ),
              start = Offset(x, 0f),
              end = Offset(x + 160f, size.height)
            )
          )
        }
        .padding(20.dp)
    ) {
      Column(Modifier.fillMaxSize()) {
        Icon(
          Icons.Filled.CreditCard, null,
          tint = Color.White.copy(alpha = 0.9f)
        )
        Spacer(Modifier.weight(1f))
        Text(
          "**** **** **** 4827",
          color = Color.White,
          letterSpacing = 2.sp,
          style = MaterialTheme.typography.titleMedium
        )
        Spacer(Modifier.height(8.dp))
        Text(
          "AVA CARTER",
          color = Color.White.copy(alpha = 0.7f),
          style = MaterialTheme.typography.labelSmall
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto h-44 overflow-hidden rounded-2xl border-0 relative bg-gradient-to-br from-slate-800 to-slate-950">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <CardContent className="relative flex h-full flex-col p-5 text-white">
        <CreditCard className="size-6 opacity-90" />
        <div className="mt-auto text-lg tracking-widest">
          •••• •••• •••• 4827
        </div>
        <div className="mt-2 text-[10px] uppercase tracking-wide text-white/70">
          Ava Carter
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-transaction-list",
  name: "Transaction List",
  category: "cards",
  description:
    "Recent transactions list with rows fading and sliding in with staggered delays.",
  tags: ["animated"],
  code: `@Composable
fun TransactionListCard() {
  data class Tx(val n: String, val a: String, val up: Boolean)
  val rows = listOf(
    Tx("Spotify", "-$9.99", false),
    Tx("Salary", "+$3,200", true),
    Tx("Grocery", "-$54.20", false)
  )
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Text(
        "Recent Activity",
        style = MaterialTheme.typography.titleSmall,
        fontWeight = FontWeight.SemiBold
      )
      Spacer(Modifier.height(12.dp))
      rows.forEachIndexed { i, tx ->
        val a = remember { Animatable(0f) }
        LaunchedEffect(Unit) {
          delay(i * 120L)
          a.animateTo(1f, tween(400))
        }
        Row(
          Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp)
            .graphicsLayer {
              alpha = a.value
              translationX = (1f - a.value) * 40f
            },
          verticalAlignment = Alignment.CenterVertically
        ) {
          Icon(
            if (tx.up) Icons.Filled.ArrowDownRight
            else Icons.Filled.ArrowUpRight,
            null,
            tint = if (tx.up) Color(0xFF22C55E)
              else MaterialTheme.colorScheme.onSurfaceVariant,
            modifier = Modifier.size(18.dp)
          )
          Spacer(Modifier.width(12.dp))
          Text(tx.n, Modifier.weight(1f))
          Text(
            tx.a,
            fontWeight = FontWeight.Medium,
            color = if (tx.up) Color(0xFF22C55E)
              else MaterialTheme.colorScheme.onSurface
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-4">
        <div className="text-sm font-semibold text-foreground">
          Recent Activity
        </div>
        <div className="mt-3 space-y-3">
          {[
            { n: "Spotify", a: "-$9.99", up: false },
            { n: "Salary", a: "+$3,200", up: true },
            { n: "Grocery", a: "-$54.20", up: false },
          ].map((t) => (
            <div key={t.n} className="flex items-center gap-3">
              {t.up ? (
                <ArrowDownRight className="size-4 text-emerald-500" />
              ) : (
                <ArrowUpRight className="size-4 text-muted-foreground" />
              )}
              <span className="flex-1 text-sm text-foreground">{t.n}</span>
              <span
                className={
                  t.up
                    ? "text-sm font-medium text-emerald-500"
                    : "text-sm font-medium text-foreground"
                }
              >
                {t.a}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-crypto-ticker",
  name: "Crypto Ticker",
  category: "cards",
  description:
    "Bitcoin price ticker with a pulsing live dot and shifting price value.",
  tags: ["animated"],
  code: `@Composable
fun CryptoTickerCard() {
  val t = rememberInfiniteTransition(label = "pulse")
  val pulse by t.animateFloat(
    0.4f, 1f,
    infiniteRepeatable(tween(900), RepeatMode.Reverse),
    label = "p"
  )
  OutlinedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Row(
      Modifier.padding(18.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Icon(
        Icons.Filled.Bitcoin, null,
        tint = Color(0xFFF7931A),
        modifier = Modifier.size(34.dp)
      )
      Spacer(Modifier.width(14.dp))
      Column(Modifier.weight(1f)) {
        Row(verticalAlignment = Alignment.CenterVertically) {
          Text("BTC / USD",
            style = MaterialTheme.typography.labelMedium)
          Spacer(Modifier.width(6.dp))
          Box(
            Modifier
              .size(8.dp)
              .graphicsLayer { alpha = pulse }
              .background(Color(0xFF22C55E), CircleShape)
          )
        }
        Text(
          "$67,420.18",
          style = MaterialTheme.typography.titleLarge,
          fontWeight = FontWeight.Bold
        )
      }
      Text(
        "+3.1%",
        color = Color(0xFF22C55E),
        fontWeight = FontWeight.SemiBold
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="flex items-center gap-3 p-5">
        <Bitcoin className="size-8 text-orange-400" />
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            BTC / USD
            <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
          </div>
          <div className="text-lg font-bold text-foreground">
            $67,420.18
          </div>
        </div>
        <span className="text-sm font-semibold text-emerald-500">
          +3.1%
        </span>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-budget-ring",
  name: "Budget Ring",
  category: "cards",
  description:
    "Monthly budget card with a circular ring that fills to the spent ratio.",
  tags: ["animated"],
  code: `@Composable
fun BudgetRingCard() {
  val progress = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    progress.animateTo(0.68f, tween(1200, easing = FastOutSlowInEasing))
  }
  val ring = MaterialTheme.colorScheme.primary
  val track = MaterialTheme.colorScheme.surfaceVariant
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(contentAlignment = Alignment.Center) {
        Canvas(Modifier.size(86.dp)) {
          val sw = 12.dp.toPx()
          drawArc(
            track, 0f, 360f, false,
            style = Stroke(sw, cap = StrokeCap.Round)
          )
          drawArc(
            ring, -90f, 360f * progress.value, false,
            style = Stroke(sw, cap = StrokeCap.Round)
          )
        }
        Text(
          "\${(progress.value * 100).toInt()}%",
          fontWeight = FontWeight.Bold
        )
      }
      Spacer(Modifier.width(18.dp))
      Column {
        Text("Monthly Budget",
          style = MaterialTheme.typography.labelMedium)
        Text("$1,360 / $2,000",
          style = MaterialTheme.typography.titleMedium,
          fontWeight = FontWeight.SemiBold)
        Text("$640 left",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="relative grid size-20 place-items-center">
          <svg viewBox="0 0 36 36" className="size-20 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-muted" strokeWidth="3.5" />
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-primary" strokeWidth="3.5"
              strokeLinecap="round" strokeDasharray="94"
              strokeDashoffset="30" />
          </svg>
          <span className="absolute text-sm font-bold text-foreground">
            68%
          </span>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Monthly Budget</div>
          <div className="text-base font-semibold text-foreground">
            $1,360 / $2,000
          </div>
          <div className="text-xs text-muted-foreground">$640 left</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-invoice-summary",
  name: "Invoice Summary",
  category: "cards",
  description:
    "Invoice summary card listing line items with an animated total reveal bar.",
  tags: ["animated"],
  code: `@Composable
fun InvoiceSummaryCard() {
  val bar = remember { Animatable(0f) }
  LaunchedEffect(Unit) { bar.animateTo(1f, tween(800)) }
  OutlinedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.Receipt, null,
          modifier = Modifier.size(20.dp))
        Spacer(Modifier.width(8.dp))
        Text("Invoice #2041",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(12.dp))
      listOf(
        "Design" to "$420",
        "Hosting" to "$60",
        "Tax" to "$48"
      ).forEach { (k, v) ->
        Row(Modifier.fillMaxWidth().padding(vertical = 4.dp)) {
          Text(k, Modifier.weight(1f),
            color = MaterialTheme.colorScheme.onSurfaceVariant)
          Text(v)
        }
      }
      Spacer(Modifier.height(10.dp))
      Box(
        Modifier
          .fillMaxWidth(bar.value)
          .height(2.dp)
          .background(MaterialTheme.colorScheme.primary)
      )
      Spacer(Modifier.height(10.dp))
      Row(Modifier.fillMaxWidth()) {
        Text("Total", Modifier.weight(1f),
          fontWeight = FontWeight.Bold)
        Text("$528", fontWeight = FontWeight.Bold)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Receipt className="size-4" />
          Invoice #2041
        </div>
        <div className="mt-3 space-y-1 text-sm">
          {[
            ["Design", "$420"],
            ["Hosting", "$60"],
            ["Tax", "$48"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-muted-foreground">{k}</span>
              <span className="text-foreground">{v}</span>
            </div>
          ))}
        </div>
        <div className="my-3 h-0.5 w-full bg-primary" />
        <div className="flex justify-between text-sm font-bold text-foreground">
          <span>Total</span>
          <span>$528</span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-payment-success",
  name: "Payment Success",
  category: "cards",
  description:
    "Payment confirmation card with a checkmark that draws itself on appear.",
  tags: ["animated"],
  code: `@Composable
fun PaymentSuccessCard() {
  val draw = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    draw.animateTo(1f, tween(700, easing = FastOutSlowInEasing))
  }
  val ok = Color(0xFF22C55E)
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(22.dp)
  ) {
    Column(
      Modifier.fillMaxWidth().padding(24.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Canvas(Modifier.size(64.dp)) {
        drawCircle(
          ok.copy(alpha = 0.15f), radius = size.minDimension / 2
        )
        val p = Path().apply {
          moveTo(size.width * 0.28f, size.height * 0.52f)
          lineTo(size.width * 0.44f, size.height * 0.68f)
          lineTo(size.width * 0.74f, size.height * 0.34f)
        }
        val m = PathMeasure().apply { setPath(p, false) }
        val seg = Path()
        m.getSegment(0f, m.length * draw.value, seg, true)
        drawPath(seg, ok, style = Stroke(6f, cap = StrokeCap.Round))
      }
      Spacer(Modifier.height(14.dp))
      Text("Payment Sent",
        style = MaterialTheme.typography.titleMedium,
        fontWeight = FontWeight.Bold)
      Text("$240.00 to Jordan",
        style = MaterialTheme.typography.bodySmall,
        color = MaterialTheme.colorScheme.onSurfaceVariant)
    }
  }
}`,
  preview: (
    <Card className="w-60 mx-auto rounded-3xl border-border">
      <CardContent className="flex flex-col items-center p-6">
        <div className="grid size-16 place-items-center rounded-full bg-emerald-500/15">
          <Check className="size-8 text-emerald-500" />
        </div>
        <div className="mt-4 text-base font-bold text-foreground">
          Payment Sent
        </div>
        <div className="text-xs text-muted-foreground">
          $240.00 to Jordan
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-stock-chart",
  name: "Stock Mini Chart",
  category: "cards",
  description:
    "Stock card with a hand-drawn sparkline path that animates left to right.",
  tags: ["animated"],
  code: `@Composable
fun StockMiniChartCard() {
  val pts = listOf(0.6f, 0.4f, 0.7f, 0.5f, 0.8f, 0.65f, 0.9f)
  val grow = remember { Animatable(0f) }
  LaunchedEffect(Unit) { grow.animateTo(1f, tween(1100)) }
  val line = MaterialTheme.colorScheme.primary
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Row {
        Text("AAPL", Modifier.weight(1f),
          fontWeight = FontWeight.Bold)
        Text("$192.30", fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(14.dp))
      Canvas(Modifier.fillMaxWidth().height(70.dp)) {
        val step = size.width / (pts.size - 1)
        val path = Path()
        pts.forEachIndexed { i, v ->
          val x = i * step
          val y = size.height * (1 - v)
          if (i == 0) path.moveTo(x, y) else path.lineTo(x, y)
        }
        val m = PathMeasure().apply { setPath(path, false) }
        val seg = Path()
        m.getSegment(0f, m.length * grow.value, seg, true)
        drawPath(seg, line, style = Stroke(4f, cap = StrokeCap.Round))
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex justify-between text-sm">
          <span className="font-bold text-foreground">AAPL</span>
          <span className="font-semibold text-foreground">$192.30</span>
        </div>
        <svg viewBox="0 0 100 40" className="mt-3 h-16 w-full">
          <polyline
            fill="none"
            className="stroke-primary"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,16 16,24 33,12 50,20 66,8 83,14 100,4"
          />
        </svg>
        <div className="mt-1 flex items-center gap-1 text-xs text-emerald-500">
          <LineChart className="size-3.5" /> trending up
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-portfolio-donut",
  name: "Portfolio Donut",
  category: "cards",
  description:
    "Portfolio breakdown card with a donut chart whose segments sweep into place.",
  tags: ["animated"],
  code: `@Composable
fun PortfolioDonutCard() {
  val sweep = remember { Animatable(0f) }
  LaunchedEffect(Unit) { sweep.animateTo(1f, tween(1000)) }
  val segs = listOf(
    0.5f to Color(0xFF6366F1),
    0.3f to Color(0xFF22C55E),
    0.2f to Color(0xFFF59E0B)
  )
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(90.dp)) {
        var start = -90f
        segs.forEach { (frac, c) ->
          val s = 360f * frac * sweep.value
          drawArc(c, start, s, false,
            style = Stroke(16f, cap = StrokeCap.Butt))
          start += 360f * frac
        }
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text("Portfolio",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
        Spacer(Modifier.height(8.dp))
        listOf(
          "Stocks 50%", "Crypto 30%", "Cash 20%"
        ).forEach {
          Text(it,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative grid size-20 place-items-center">
          <svg viewBox="0 0 36 36" className="size-20 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none"
              strokeWidth="4" className="stroke-indigo-500"
              strokeDasharray="47 47" />
            <circle cx="18" cy="18" r="15" fill="none"
              strokeWidth="4" className="stroke-emerald-500"
              strokeDasharray="28 66" strokeDashoffset="-47" />
            <circle cx="18" cy="18" r="15" fill="none"
              strokeWidth="4" className="stroke-amber-500"
              strokeDasharray="19 75" strokeDashoffset="-75" />
          </svg>
          <PieChart className="absolute size-5 text-muted-foreground" />
        </div>
        <div className="space-y-0.5 text-xs text-muted-foreground">
          <div>Stocks 50%</div>
          <div>Crypto 30%</div>
          <div>Cash 20%</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-savings-jar",
  name: "Savings Goal Jar",
  category: "cards",
  description:
    "Savings goal card with a jar that fills using a gently rising liquid level.",
  tags: ["animated"],
  code: `@Composable
fun SavingsJarCard() {
  val fill = remember { Animatable(0f) }
  LaunchedEffect(Unit) { fill.animateTo(0.72f, tween(1300)) }
  val liquid = MaterialTheme.colorScheme.primary
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(
        Modifier
          .size(64.dp, 80.dp)
          .clip(RoundedCornerShape(12.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      ) {
        Box(
          Modifier
            .fillMaxWidth()
            .fillMaxHeight(fill.value)
            .align(Alignment.BottomCenter)
            .background(liquid.copy(alpha = 0.7f))
        )
        Icon(
          Icons.Filled.PiggyBank, null,
          modifier = Modifier.align(Alignment.Center).size(28.dp),
          tint = MaterialTheme.colorScheme.onSurface
        )
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text("Vacation Fund",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
        Text("$3,600 / $5,000",
          style = MaterialTheme.typography.bodyMedium)
        Text("72% saved",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.primary)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative h-20 w-16 overflow-hidden rounded-xl bg-muted">
          <div className="absolute bottom-0 w-full bg-primary/70"
            style={{ height: "72%" }} />
          <PiggyBank className="absolute inset-0 m-auto size-7 text-foreground" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">
            Vacation Fund
          </div>
          <div className="text-sm text-foreground">$3,600 / $5,000</div>
          <div className="text-xs text-primary">72% saved</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-money-transfer",
  name: "Money Transfer",
  category: "cards",
  description:
    "Transfer card showing sender to recipient with an arrow that glides across.",
  tags: ["animated"],
  code: `@Composable
fun MoneyTransferCard() {
  val t = rememberInfiniteTransition(label = "glide")
  val shift by t.animateFloat(
    0f, 1f,
    infiniteRepeatable(tween(1400), RepeatMode.Restart),
    label = "s"
  )
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Text("Transfer",
        style = MaterialTheme.typography.labelMedium)
      Spacer(Modifier.height(14.dp))
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box(
          Modifier.size(40.dp)
            .background(MaterialTheme.colorScheme.surfaceVariant,
              CircleShape),
          contentAlignment = Alignment.Center
        ) { Text("AC") }
        Box(Modifier.weight(1f), Alignment.CenterStart) {
          Divider(Modifier.fillMaxWidth())
          Icon(
            Icons.Filled.Send, null,
            modifier = Modifier
              .offset(x = (shift * 120).dp)
              .size(18.dp),
            tint = MaterialTheme.colorScheme.primary
          )
        }
        Box(
          Modifier.size(40.dp)
            .background(MaterialTheme.colorScheme.primaryContainer,
              CircleShape),
          contentAlignment = Alignment.Center
        ) { Text("JM") }
      }
      Spacer(Modifier.height(14.dp))
      Text("$540.00",
        style = MaterialTheme.typography.headlineSmall,
        fontWeight = FontWeight.Bold)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="text-xs text-muted-foreground">Transfer</div>
        <div className="mt-3 flex items-center gap-2">
          <span className="grid size-10 place-items-center rounded-full bg-muted text-xs text-foreground">
            AC
          </span>
          <div className="relative flex-1">
            <div className="h-px w-full bg-border" />
            <Send className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 animate-pulse text-primary" />
          </div>
          <span className="grid size-10 place-items-center rounded-full bg-primary/15 text-xs text-foreground">
            JM
          </span>
        </div>
        <div className="mt-3 text-2xl font-bold text-foreground">
          $540.00
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-spending-bars",
  name: "Spending Bars",
  category: "cards",
  description:
    "Spending by category card with bars that grow upward on first render.",
  tags: ["animated"],
  code: `@Composable
fun SpendingBarsCard() {
  val data = listOf(
    "Food" to 0.8f, "Bills" to 0.55f,
    "Fun" to 0.4f, "Travel" to 0.65f
  )
  val grow = remember { Animatable(0f) }
  LaunchedEffect(Unit) { grow.animateTo(1f, tween(900)) }
  val bar = MaterialTheme.colorScheme.primary
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.BarChart3, null,
          modifier = Modifier.size(18.dp))
        Spacer(Modifier.width(8.dp))
        Text("Spending",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(16.dp))
      Row(
        Modifier.fillMaxWidth().height(90.dp),
        horizontalArrangement = Arrangement.SpaceEvenly,
        verticalAlignment = Alignment.Bottom
      ) {
        data.forEach { (label, h) ->
          Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Box(
              Modifier
                .width(18.dp)
                .fillMaxHeight(h * grow.value)
                .clip(RoundedCornerShape(6.dp))
                .background(bar)
            )
            Spacer(Modifier.height(6.dp))
            Text(label,
              style = MaterialTheme.typography.labelSmall)
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <BarChart3 className="size-4" /> Spending
        </div>
        <div className="mt-4 flex h-24 items-end justify-around">
          {[
            ["Food", 80],
            ["Bills", 55],
            ["Fun", 40],
            ["Travel", 65],
          ].map(([l, h]) => (
            <div key={l} className="flex flex-col items-center gap-1">
              <div className="w-4 rounded-md bg-primary"
                style={{ height: h + "%" }} />
              <span className="text-[10px] text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-exchange-rate",
  name: "Exchange Rate",
  category: "cards",
  description:
    "Currency exchange card showing a live rate with a subtly throbbing value.",
  tags: ["animated"],
  code: `@Composable
fun ExchangeRateCard() {
  val t = rememberInfiniteTransition(label = "throb")
  val s by t.animateFloat(
    0.97f, 1.03f,
    infiniteRepeatable(tween(1100), RepeatMode.Reverse),
    label = "s"
  )
  OutlinedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.CircleDollarSign, null,
          modifier = Modifier.size(20.dp))
        Spacer(Modifier.width(8.dp))
        Text("EUR -> USD",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(12.dp))
      Text(
        "1.0847",
        style = MaterialTheme.typography.displaySmall,
        fontWeight = FontWeight.Bold,
        modifier = Modifier.graphicsLayer { scaleX = s; scaleY = s }
      )
      Spacer(Modifier.height(6.dp))
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.TrendingUp, null,
          tint = Color(0xFF22C55E),
          modifier = Modifier.size(14.dp))
        Spacer(Modifier.width(4.dp))
        Text("+0.12% today",
          style = MaterialTheme.typography.bodySmall,
          color = Color(0xFF22C55E))
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <CircleDollarSign className="size-4" /> EUR → USD
        </div>
        <div className="mt-2 animate-pulse text-3xl font-bold text-foreground">
          1.0847
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs text-emerald-500">
          <TrendingUp className="size-3.5" /> +0.12% today
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-virtual-reveal",
  name: "Virtual Card Reveal",
  category: "cards",
  description:
    "Virtual card whose masked number unblurs into full digits on reveal tap.",
  tags: ["animated"],
  code: `@Composable
fun VirtualCardRevealCard() {
  var shown by remember { mutableStateOf(false) }
  val blur by animateDpAsState(
    if (shown) 0.dp else 8.dp, label = "blur"
  )
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp).height(180.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Box(
      Modifier.fillMaxSize().background(
        Brush.linearGradient(
          listOf(Color(0xFF7C3AED), Color(0xFF4F46E5))
        )
      ).padding(20.dp)
    ) {
      Column(Modifier.fillMaxSize()) {
        Row(verticalAlignment = Alignment.CenterVertically) {
          Icon(Icons.Filled.Lock, null, tint = Color.White)
          Spacer(Modifier.weight(1f))
          Text("VIRTUAL", color = Color.White.copy(alpha = 0.8f),
            style = MaterialTheme.typography.labelSmall)
        }
        Spacer(Modifier.weight(1f))
        Text(
          if (shown) "4012 8842 1990 7755" else "•••• •••• •••• ••••",
          color = Color.White,
          letterSpacing = 2.sp,
          modifier = Modifier.blur(blur)
        )
        Spacer(Modifier.height(12.dp))
        TextButton(onClick = { shown = !shown }) {
          Text(if (shown) "Hide" else "Reveal",
            color = Color.White)
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto h-44 overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-violet-600 to-indigo-600">
      <CardContent className="flex h-full flex-col p-5 text-white">
        <div className="flex items-center">
          <Lock className="size-4" />
          <span className="ml-auto text-[10px] tracking-wide text-white/80">
            VIRTUAL
          </span>
        </div>
        <div className="mt-auto select-none text-lg tracking-widest blur-[3px]">
          •••• •••• •••• ••••
        </div>
        <Button className="mt-3 h-7 w-fit bg-white/20 px-3 text-xs text-white hover:bg-white/30">
          Reveal
        </Button>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-cashback-reward",
  name: "Cashback Reward",
  category: "cards",
  description:
    "Cashback card with a coin badge that pops and a percentage counting up.",
  tags: ["animated"],
  code: `@Composable
fun CashbackRewardCard() {
  val pop = remember { Animatable(0.6f) }
  LaunchedEffect(Unit) {
    pop.animateTo(1f, spring(dampingRatio = 0.4f))
  }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(22.dp)
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(
        Modifier
          .size(54.dp)
          .graphicsLayer { scaleX = pop.value; scaleY = pop.value }
          .background(Color(0xFFFBBF24), CircleShape),
        contentAlignment = Alignment.Center
      ) {
        Icon(Icons.Filled.Coins, null, tint = Color.White)
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text("Cashback Earned",
          style = MaterialTheme.typography.labelMedium)
        Text("$48.20",
          style = MaterialTheme.typography.headlineSmall,
          fontWeight = FontWeight.Bold)
        Text("5% on dining",
          style = MaterialTheme.typography.bodySmall,
          color = MaterialTheme.colorScheme.onSurfaceVariant)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-3xl border-border">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="grid size-14 animate-bounce place-items-center rounded-full bg-amber-400">
          <Coins className="size-6 text-white" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">
            Cashback Earned
          </div>
          <div className="text-2xl font-bold text-foreground">$48.20</div>
          <div className="text-xs text-muted-foreground">5% on dining</div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-bill-reminder",
  name: "Bill Due Reminder",
  category: "cards",
  description:
    "Upcoming bill card with a pulsing clock badge urging an action before due.",
  tags: ["animated"],
  code: `@Composable
fun BillReminderCard() {
  val t = rememberInfiniteTransition(label = "tick")
  val a by t.animateFloat(
    0.5f, 1f,
    infiniteRepeatable(tween(800), RepeatMode.Reverse),
    label = "a"
  )
  OutlinedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Row(
      Modifier.padding(18.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(
        Modifier
          .size(44.dp)
          .graphicsLayer { alpha = a }
          .background(Color(0xFFEF4444).copy(alpha = 0.15f),
            CircleShape),
        contentAlignment = Alignment.Center
      ) {
        Icon(Icons.Filled.Clock, null, tint = Color(0xFFEF4444))
      }
      Spacer(Modifier.width(14.dp))
      Column(Modifier.weight(1f)) {
        Text("Electric Bill",
          fontWeight = FontWeight.SemiBold)
        Text("Due in 2 days",
          style = MaterialTheme.typography.bodySmall,
          color = Color(0xFFEF4444))
      }
      Text("$86.40", fontWeight = FontWeight.Bold)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="flex items-center gap-3 p-5">
        <div className="grid size-11 animate-pulse place-items-center rounded-full bg-red-500/15">
          <Clock className="size-5 text-red-500" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-foreground">
            Electric Bill
          </div>
          <div className="text-xs text-red-500">Due in 2 days</div>
        </div>
        <span className="text-sm font-bold text-foreground">$86.40</span>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-networth-trend",
  name: "Net Worth Trend",
  category: "cards",
  description:
    "Net worth card with an area sparkline filling beneath an animated trend line.",
  tags: ["animated"],
  code: `@Composable
fun NetWorthTrendCard() {
  val pts = listOf(0.3f, 0.45f, 0.4f, 0.6f, 0.7f, 0.85f)
  val grow = remember { Animatable(0f) }
  LaunchedEffect(Unit) { grow.animateTo(1f, tween(1100)) }
  val accent = MaterialTheme.colorScheme.primary
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Text("Net Worth",
        style = MaterialTheme.typography.labelMedium)
      Text("$148,920",
        style = MaterialTheme.typography.headlineSmall,
        fontWeight = FontWeight.Bold)
      Spacer(Modifier.height(12.dp))
      Canvas(Modifier.fillMaxWidth().height(64.dp)) {
        val step = size.width / (pts.size - 1)
        val line = Path()
        pts.forEachIndexed { i, v ->
          val x = i * step; val y = size.height * (1 - v)
          if (i == 0) line.moveTo(x, y) else line.lineTo(x, y)
        }
        val area = Path().apply {
          addPath(line)
          lineTo(size.width, size.height)
          lineTo(0f, size.height); close()
        }
        clipRect(right = size.width * grow.value) {
          drawPath(area, Brush.verticalGradient(
            listOf(accent.copy(alpha = 0.35f), Color.Transparent)))
          drawPath(line, accent,
            style = Stroke(4f, cap = StrokeCap.Round))
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="text-xs text-muted-foreground">Net Worth</div>
        <div className="text-2xl font-bold text-foreground">$148,920</div>
        <svg viewBox="0 0 100 40" className="mt-3 h-16 w-full">
          <defs>
            <linearGradient id="nwg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" className="text-primary"
                stopColor="currentColor" stopOpacity="0.35" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon className="text-primary" fill="url(#nwg)"
            points="0,28 20,22 40,24 60,16 80,12 100,6 100,40 0,40" />
          <polyline fill="none" className="stroke-primary"
            strokeWidth="2.5" strokeLinecap="round"
            points="0,28 20,22 40,24 60,16 80,12 100,6" />
        </svg>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-subscription-cost",
  name: "Subscription Cost",
  category: "cards",
  description:
    "Subscription card listing services with a total bar that fills on mount.",
  tags: ["animated"],
  code: `@Composable
fun SubscriptionCostCard() {
  val fill = remember { Animatable(0f) }
  LaunchedEffect(Unit) { fill.animateTo(1f, tween(900)) }
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.CreditCard, null,
          modifier = Modifier.size(18.dp))
        Spacer(Modifier.width(8.dp))
        Text("Subscriptions",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(12.dp))
      listOf("Netflix $15", "Spotify $10", "iCloud $3").forEach {
        Text(it, style = MaterialTheme.typography.bodySmall,
          modifier = Modifier.padding(vertical = 3.dp),
          color = MaterialTheme.colorScheme.onSurfaceVariant)
      }
      Spacer(Modifier.height(10.dp))
      Box(
        Modifier.fillMaxWidth().height(8.dp)
          .clip(RoundedCornerShape(4.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      ) {
        Box(
          Modifier.fillMaxWidth(fill.value).fillMaxHeight()
            .background(MaterialTheme.colorScheme.primary)
        )
      }
      Spacer(Modifier.height(8.dp))
      Text("$28 / month", fontWeight = FontWeight.Bold)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <CreditCard className="size-4" /> Subscriptions
        </div>
        <div className="mt-3 space-y-1 text-xs text-muted-foreground">
          <div>Netflix $15</div>
          <div>Spotify $10</div>
          <div>iCloud $3</div>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-full bg-primary" />
        </div>
        <div className="mt-2 text-sm font-bold text-foreground">
          $28 / month
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-split-bill",
  name: "Split Bill",
  category: "cards",
  description:
    "Split bill card with member avatars that cascade in and a per-person total.",
  tags: ["animated"],
  code: `@Composable
fun SplitBillCard() {
  val people = listOf("AC", "JM", "TR", "LK")
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Text("Dinner Split",
        style = MaterialTheme.typography.titleSmall,
        fontWeight = FontWeight.SemiBold)
      Spacer(Modifier.height(14.dp))
      Row {
        people.forEachIndexed { i, p ->
          val a = remember { Animatable(0f) }
          LaunchedEffect(Unit) {
            delay(i * 100L); a.animateTo(1f, tween(300))
          }
          Box(
            Modifier
              .offset(x = (i * -8).dp)
              .size(38.dp)
              .graphicsLayer { scaleX = a.value; scaleY = a.value }
              .background(
                MaterialTheme.colorScheme.primaryContainer,
                CircleShape
              ),
            contentAlignment = Alignment.Center
          ) { Text(p, style = MaterialTheme.typography.labelSmall) }
        }
      }
      Spacer(Modifier.height(16.dp))
      Row(Modifier.fillMaxWidth()) {
        Column(Modifier.weight(1f)) {
          Text("Total $128",
            style = MaterialTheme.typography.bodyMedium)
          Text("4 people",
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
        Text("$32 each", fontWeight = FontWeight.Bold)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="text-sm font-semibold text-foreground">
          Dinner Split
        </div>
        <div className="mt-3 flex">
          {["AC", "JM", "TR", "LK"].map((p, i) => (
            <span key={p}
              className="-ml-2 grid size-9 place-items-center rounded-full border-2 border-card bg-primary/15 text-[10px] text-foreground first:ml-0">
              {p}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-sm text-foreground">Total $128</div>
            <div className="text-xs text-muted-foreground">4 people</div>
          </div>
          <span className="text-sm font-bold text-foreground">
            $32 each
          </span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-currency-converter",
  name: "Currency Converter",
  category: "cards",
  description:
    "Converter card with two amount fields and a rotating swap action button.",
  tags: ["animated"],
  code: `@Composable
fun CurrencyConverterCard() {
  var swapped by remember { mutableStateOf(false) }
  val rot by animateFloatAsState(
    if (swapped) 180f else 0f, label = "rot"
  )
  OutlinedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically) {
        Text("USD", Modifier.weight(1f),
          color = MaterialTheme.colorScheme.onSurfaceVariant)
        Text("100.00", fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(8.dp))
      IconButton(
        onClick = { swapped = !swapped },
        modifier = Modifier
          .align(Alignment.CenterHorizontally)
          .graphicsLayer { rotationZ = rot }
      ) {
        Icon(Icons.Filled.ArrowDownRight, null,
          tint = MaterialTheme.colorScheme.primary)
      }
      Spacer(Modifier.height(8.dp))
      Row(Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically) {
        Text("EUR", Modifier.weight(1f),
          color = MaterialTheme.colorScheme.onSurfaceVariant)
        Text("92.13", fontWeight = FontWeight.SemiBold)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">USD</span>
          <span className="font-semibold text-foreground">100.00</span>
        </div>
        <div className="my-2 flex justify-center">
          <span className="grid size-9 place-items-center rounded-full bg-primary/15">
            <ArrowDownRight className="size-4 text-primary" />
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
          <span className="text-sm text-muted-foreground">EUR</span>
          <span className="font-semibold text-foreground">92.13</span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-multi-asset",
  name: "Multi-Asset Wallet",
  category: "cards",
  description:
    "Wallet card listing several assets with rows fading in one after another.",
  tags: ["animated"],
  code: `@Composable
fun MultiAssetWalletCard() {
  data class Asset(val n: String, val v: String, val up: Boolean)
  val items = listOf(
    Asset("BTC", "$1,240", true),
    Asset("ETH", "$820", true),
    Asset("USDC", "$500", false)
  )
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.Wallet, null,
          modifier = Modifier.size(18.dp))
        Spacer(Modifier.width(8.dp))
        Text("My Wallet",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(12.dp))
      items.forEachIndexed { i, it ->
        val a = remember { Animatable(0f) }
        LaunchedEffect(Unit) {
          delay(i * 120L); a.animateTo(1f, tween(350))
        }
        Row(
          Modifier
            .fillMaxWidth()
            .padding(vertical = 7.dp)
            .graphicsLayer { alpha = a.value },
          verticalAlignment = Alignment.CenterVertically
        ) {
          Text(it.n, Modifier.weight(1f),
            fontWeight = FontWeight.Medium)
          Text(it.v)
          Spacer(Modifier.width(8.dp))
          Icon(
            if (it.up) Icons.Filled.TrendingUp
            else Icons.Filled.TrendingDown,
            null,
            tint = if (it.up) Color(0xFF22C55E) else Color(0xFFEF4444),
            modifier = Modifier.size(16.dp)
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Wallet className="size-4" /> My Wallet
        </div>
        <div className="mt-3 space-y-2">
          {[
            { n: "BTC", v: "$1,240", up: true },
            { n: "ETH", v: "$820", up: true },
            { n: "USDC", v: "$500", up: false },
          ].map((a) => (
            <div key={a.n} className="flex items-center gap-2">
              <span className="flex-1 font-medium text-foreground">
                {a.n}
              </span>
              <span className="text-foreground">{a.v}</span>
              {a.up ? (
                <TrendingUp className="size-4 text-emerald-500" />
              ) : (
                <TrendingDown className="size-4 text-red-500" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-card-frozen",
  name: "Frozen Debit Card",
  category: "cards",
  description:
    "Debit card in a frozen state with a shimmering frost overlay and lock badge.",
  tags: ["animated"],
  code: `@Composable
fun FrozenDebitCard() {
  val t = rememberInfiniteTransition(label = "frost")
  val a by t.animateFloat(
    0.2f, 0.5f,
    infiniteRepeatable(tween(1600), RepeatMode.Reverse),
    label = "a"
  )
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp).height(180.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Box(
      Modifier.fillMaxSize().background(
        Brush.linearGradient(
          listOf(Color(0xFF334155), Color(0xFF1E293B))
        )
      )
    ) {
      Box(
        Modifier.fillMaxSize().background(
          Color(0xFF93C5FD).copy(alpha = a)
        )
      )
      Column(Modifier.fillMaxSize().padding(20.dp)) {
        Row(verticalAlignment = Alignment.CenterVertically) {
          Icon(Icons.Filled.Lock, null, tint = Color.White)
          Spacer(Modifier.width(8.dp))
          Text("FROZEN", color = Color.White,
            style = MaterialTheme.typography.labelMedium)
        }
        Spacer(Modifier.weight(1f))
        Text("•••• 7741", color = Color.White.copy(alpha = 0.8f),
          letterSpacing = 2.sp)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto h-44 overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-slate-700 to-slate-900">
      <div className="absolute inset-0 animate-pulse bg-sky-300/30" />
      <CardContent className="relative flex h-full flex-col p-5 text-white">
        <div className="flex items-center gap-2">
          <Lock className="size-4" />
          <span className="text-xs tracking-wide">FROZEN</span>
        </div>
        <div className="mt-auto tracking-widest text-white/80">
          •••• 7741
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-loan-progress",
  name: "Loan Progress",
  category: "cards",
  description:
    "Loan payoff card with a horizontal progress bar advancing toward full repayment.",
  tags: ["animated"],
  code: `@Composable
fun LoanProgressCard() {
  val p = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    p.animateTo(0.62f, tween(1200, easing = FastOutSlowInEasing))
  }
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.Landmark, null,
          modifier = Modifier.size(20.dp))
        Spacer(Modifier.width(8.dp))
        Text("Car Loan",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
        Spacer(Modifier.weight(1f))
        Text("\${(p.value * 100).toInt()}%",
          fontWeight = FontWeight.Bold)
      }
      Spacer(Modifier.height(14.dp))
      Box(
        Modifier.fillMaxWidth().height(10.dp)
          .clip(RoundedCornerShape(5.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      ) {
        Box(
          Modifier.fillMaxWidth(p.value).fillMaxHeight()
            .clip(RoundedCornerShape(5.dp))
            .background(MaterialTheme.colorScheme.primary)
        )
      }
      Spacer(Modifier.height(10.dp))
      Text("$12,400 of $20,000 paid",
        style = MaterialTheme.typography.bodySmall,
        color = MaterialTheme.colorScheme.onSurfaceVariant)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Landmark className="size-4" /> Car Loan
          <span className="ml-auto font-bold">62%</span>
        </div>
        <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary"
            style={{ width: "62%" }} />
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          $12,400 of $20,000 paid
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-rewards-points",
  name: "Rewards Points",
  category: "cards",
  description:
    "Rewards card with a gift badge and points value that animates upward on load.",
  tags: ["animated"],
  code: `@Composable
fun RewardsPointsCard() {
  val pts = remember { Animatable(0f) }
  LaunchedEffect(Unit) { pts.animateTo(8450f, tween(1300)) }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(22.dp)
  ) {
    Box(
      Modifier.fillMaxWidth().background(
        Brush.linearGradient(
          listOf(Color(0xFFEC4899), Color(0xFFF59E0B))
        )
      ).padding(22.dp)
    ) {
      Column {
        Row(verticalAlignment = Alignment.CenterVertically) {
          Icon(Icons.Filled.Gift, null, tint = Color.White)
          Spacer(Modifier.width(8.dp))
          Text("Reward Points", color = Color.White,
            style = MaterialTheme.typography.labelLarge)
        }
        Spacer(Modifier.height(10.dp))
        Text(
          "%,d".format(pts.value.toInt()),
          color = Color.White,
          style = MaterialTheme.typography.displaySmall,
          fontWeight = FontWeight.Bold
        )
        Text("Redeem for $84",
          color = Color.White.copy(alpha = 0.9f),
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-pink-500 to-amber-500">
      <CardContent className="p-6 text-white">
        <div className="flex items-center gap-2 text-sm">
          <Gift className="size-4" /> Reward Points
        </div>
        <div className="mt-2 text-3xl font-bold tabular-nums">8,450</div>
        <div className="text-xs text-white/90">Redeem for $84</div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-finance-recent-payees",
  name: "Recent Payees",
  category: "cards",
  description:
    "Quick-pay card with recent payee chips that scale in as a staggered row.",
  tags: ["animated"],
  code: `@Composable
fun RecentPayeesCard() {
  val payees = listOf("Mom", "Rent", "Gym", "Sam")
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Filled.Send, null,
          modifier = Modifier.size(18.dp))
        Spacer(Modifier.width(8.dp))
        Text("Quick Pay",
          style = MaterialTheme.typography.titleSmall,
          fontWeight = FontWeight.SemiBold)
      }
      Spacer(Modifier.height(14.dp))
      Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        payees.forEachIndexed { i, name ->
          val s = remember { Animatable(0f) }
          LaunchedEffect(Unit) {
            delay(i * 90L)
            s.animateTo(1f, spring(dampingRatio = 0.5f))
          }
          Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.graphicsLayer {
              scaleX = s.value; scaleY = s.value
            }
          ) {
            Box(
              Modifier.size(44.dp).background(
                MaterialTheme.colorScheme.primaryContainer,
                CircleShape
              ), contentAlignment = Alignment.Center
            ) { Text(name.take(1)) }
            Spacer(Modifier.height(4.dp))
            Text(name,
              style = MaterialTheme.typography.labelSmall)
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl border-border">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Send className="size-4" /> Quick Pay
        </div>
        <div className="mt-4 flex justify-between">
          {["Mom", "Rent", "Gym", "Sam"].map((n) => (
            <div key={n} className="flex flex-col items-center gap-1">
              <span className="grid size-11 place-items-center rounded-full bg-primary/15 text-foreground">
                {n[0]}
              </span>
              <span className="text-[10px] text-muted-foreground">{n}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},

{
  id: "card-social-follower-countup",
  name: "Follower Count-Up",
  category: "cards",
  description:
    "Profile card animating follower totals upward with a smooth count-up tween.",
  tags: ["animated"],
  code: `@Composable
fun FollowerCountUpCard(target: Int = 12840) {
    val count = remember { Animatable(0f) }
    LaunchedEffect(target) {
        count.animateTo(
            target.toFloat(),
            tween(1400, easing = FastOutSlowInEasing)
        )
    }
    ElevatedCard(
        modifier = Modifier.width(280.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(Modifier.padding(20.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    Modifier
                        .size(44.dp)
                        .clip(CircleShape)
                        .background(
                            MaterialTheme.colorScheme.primary
                        ),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        "AM",
                        color = MaterialTheme.colorScheme.onPrimary,
                        style = MaterialTheme.typography.labelLarge
                    )
                }
                Spacer(Modifier.width(12.dp))
                Column {
                    Text(
                        "Aria Moon",
                        style = MaterialTheme.typography.titleMedium
                    )
                    Text(
                        "@ariamoon",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme
                            .onSurfaceVariant
                    )
                }
            }
            Spacer(Modifier.height(16.dp))
            Text(
                "%,d".format(count.value.toInt()),
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.Bold
            )
            Text(
                "Followers",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
            AM
          </span>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Aria Moon
            </div>
            <div className="text-xs text-zinc-500">@ariamoon</div>
          </div>
        </div>
        <div className="mt-4 text-3xl font-bold tabular-nums text-zinc-900 dark:text-zinc-50">
          12,840
        </div>
        <div className="text-xs text-zinc-500">Followers</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-post-like-burst",
  name: "Post Like Burst",
  category: "cards",
  description:
    "Social post card with a heart like-burst scattering particles on tap.",
  tags: ["animated"],
  code: `@Composable
fun PostLikeBurstCard() {
    var liked by remember { mutableStateOf(false) }
    val scale by animateFloatAsState(
        if (liked) 1.25f else 1f,
        spring(Spring.DampingRatioMediumBouncy),
        label = "burst"
    )
    OutlinedCard(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Column(Modifier.padding(16.dp)) {
            Text(
                "Just shipped the new design system \u2728",
                style = MaterialTheme.typography.bodyMedium
            )
            Spacer(Modifier.height(12.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(onClick = { liked = !liked }) {
                    Icon(
                        Icons.Default.Favorite,
                        contentDescription = "Like",
                        tint = if (liked)
                            MaterialTheme.colorScheme.error
                        else MaterialTheme.colorScheme
                            .onSurfaceVariant,
                        modifier = Modifier.scale(scale)
                    )
                }
                Text(
                    "\${if (liked) 241 else 240}",
                    style = MaterialTheme.typography.labelLarge
                )
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-4">
        <p className="text-sm text-zinc-700 dark:text-zinc-200">
          Just shipped the new design system ✨
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="relative grid size-9 place-items-center rounded-full bg-rose-50 dark:bg-rose-950">
            <Heart className="size-4 fill-rose-500 text-rose-500" />
            <span className="absolute -top-1 left-1 size-1 rounded-full bg-rose-400" />
            <span className="absolute -top-1 right-1 size-1 rounded-full bg-rose-400" />
          </span>
          <span className="text-sm font-medium tabular-nums text-zinc-900 dark:text-zinc-50">
            241
          </span>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-follow-toggle",
  name: "Follow Toggle",
  category: "cards",
  description:
    "Profile card with a follow button that morphs into a following state.",
  tags: ["animated"],
  code: `@Composable
fun FollowToggleCard() {
    var following by remember { mutableStateOf(false) }
    val bg by animateColorAsState(
        if (following)
            MaterialTheme.colorScheme.surfaceVariant
        else MaterialTheme.colorScheme.primary,
        tween(280), label = "bg"
    )
    ElevatedCard(
        modifier = Modifier.width(280.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Row(
            Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                Modifier.size(46.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.tertiary),
                contentAlignment = Alignment.Center
            ) { Text("LK") }
            Spacer(Modifier.width(12.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    "Leo Kim",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "Product Designer",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
            }
            Button(
                onClick = { following = !following },
                colors = ButtonDefaults.buttonColors(
                    containerColor = bg
                ),
                contentPadding = PaddingValues(
                    horizontal = 16.dp
                )
            ) {
                Crossfade(following, label = "lbl") {
                    Text(if (it) "Following" else "Follow")
                }
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex items-center gap-3 p-4">
        <span className="grid size-11 place-items-center rounded-full bg-teal-500 text-sm font-semibold text-white">
          LK
        </span>
        <div className="flex-1">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Leo Kim
          </div>
          <div className="text-xs text-zinc-500">Product Designer</div>
        </div>
        <Button className="h-8 rounded-full bg-indigo-500 px-4 text-xs text-white hover:bg-indigo-600">
          <UserPlus className="size-4" /> Follow
        </Button>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-story-ring",
  name: "Story Ring Avatar",
  category: "cards",
  description:
    "Avatar card wrapped in a rotating gradient story ring indicating unseen updates.",
  tags: ["animated"],
  code: `@Composable
fun StoryRingCard() {
    val sweep = rememberInfiniteTransition(label = "ring")
    val angle by sweep.animateFloat(
        0f, 360f,
        infiniteRepeatable(tween(3000, easing = LinearEasing)),
        label = "angle"
    )
    Card(
        modifier = Modifier.width(220.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(
            Modifier.padding(20.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                Modifier.size(84.dp).drawBehind {
                    rotate(angle) {
                        drawCircle(
                            Brush.sweepGradient(
                                listOf(
                                    Color(0xFFF59E0B),
                                    Color(0xFFE11D48),
                                    Color(0xFFF59E0B)
                                )
                            ),
                            style = Stroke(width = 8f)
                        )
                    }
                },
                contentAlignment = Alignment.Center
            ) {
                Box(
                    Modifier.size(68.dp).clip(CircleShape)
                        .background(
                            MaterialTheme.colorScheme.secondary
                        ),
                    contentAlignment = Alignment.Center
                ) { Text("MQ") }
            }
            Spacer(Modifier.height(12.dp))
            Text(
                "Mara Quinn",
                style = MaterialTheme.typography.titleSmall
            )
            Text(
                "New story",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`,
  preview: (
    <Card className="w-60 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex flex-col items-center p-5">
        <span className="grid size-20 place-items-center rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 p-[3px]">
          <span className="grid size-full place-items-center rounded-full bg-white dark:bg-zinc-900">
            <span className="grid size-16 place-items-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
              MQ
            </span>
          </span>
        </span>
        <div className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Mara Quinn
        </div>
        <div className="text-xs text-muted-foreground">New story</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-verified-pop",
  name: "Verified Pop",
  category: "cards",
  description:
    "Profile card where a verified check badge pops in with a spring scale.",
  tags: ["animated"],
  code: `@Composable
fun VerifiedPopCard() {
    var shown by remember { mutableStateOf(false) }
    LaunchedEffect(Unit) { shown = true }
    val scale by animateFloatAsState(
        if (shown) 1f else 0f,
        spring(Spring.DampingRatioMediumBouncy),
        label = "pop"
    )
    ElevatedCard(
        modifier = Modifier.width(260.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(
            Modifier.padding(20.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                Modifier.size(64.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primary),
                contentAlignment = Alignment.Center
            ) { Text("EM") }
            Spacer(Modifier.height(10.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    "Ella Marsh",
                    style = MaterialTheme.typography.titleMedium
                )
                Spacer(Modifier.width(4.dp))
                Icon(
                    Icons.Default.Verified,
                    contentDescription = "Verified",
                    tint = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.size(20.dp).scale(scale)
                )
            }
            Text(
                "Creator \u00b7 1.2M followers",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex flex-col items-center p-5">
        <span className="grid size-16 place-items-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
          EM
        </span>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Ella Marsh
          </span>
          <CheckCircle2 className="size-5 fill-sky-500 text-white" />
        </div>
        <div className="text-xs text-zinc-500">Creator · 1.2M followers</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-comment-thread",
  name: "Comment Thread",
  category: "cards",
  description:
    "Threaded comment card showing nested replies with indentation and reply controls.",
  code: `@Composable
fun CommentThreadCard() {
    OutlinedCard(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Column(Modifier.padding(16.dp)) {
            CommentRow("JD", "Jade", "Love this take!", 0)
            Spacer(Modifier.height(12.dp))
            CommentRow("RT", "Rai", "Totally agree.", 24)
        }
    }
}

@Composable
private fun CommentRow(
    initials: String, name: String,
    text: String, indent: Int
) {
    Row(Modifier.padding(start = indent.dp)) {
        Box(
            Modifier.size(32.dp).clip(CircleShape)
                .background(MaterialTheme.colorScheme.secondary),
            contentAlignment = Alignment.Center
        ) {
            Text(
                initials,
                style = MaterialTheme.typography.labelSmall
            )
        }
        Spacer(Modifier.width(10.dp))
        Column {
            Text(
                name,
                style = MaterialTheme.typography.labelLarge
            )
            Text(
                text,
                style = MaterialTheme.typography.bodySmall
            )
            Row {
                Icon(
                    Icons.Default.Reply,
                    contentDescription = "Reply",
                    modifier = Modifier.size(14.dp)
                )
                Spacer(Modifier.width(4.dp))
                Text(
                    "Reply",
                    style = MaterialTheme.typography.labelSmall
                )
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="space-y-3 p-4">
        <div className="flex gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
            JD
          </span>
          <div>
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">
              Jade
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-300">
              Love this take!
            </div>
            <button className="mt-0.5 flex items-center gap-1 text-[11px] text-zinc-400">
              <Reply className="size-3" /> Reply
            </button>
          </div>
        </div>
        <div className="ml-6 flex gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-orange-500 text-xs font-semibold text-white">
            RT
          </span>
          <div>
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">
              Rai
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-300">
              Totally agree.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-testimonial-quote",
  name: "Testimonial Quote",
  category: "cards",
  description:
    "Customer testimonial card featuring a large quote glyph and author attribution.",
  code: `@Composable
fun TestimonialQuoteCard() {
    Card(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(Modifier.padding(20.dp)) {
            Icon(
                Icons.Default.FormatQuote,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(32.dp)
            )
            Spacer(Modifier.height(8.dp))
            Text(
                "This tool reshaped how our whole team " +
                    "ships product every single week.",
                style = MaterialTheme.typography.bodyLarge
            )
            Spacer(Modifier.height(16.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    Modifier.size(40.dp).clip(CircleShape)
                        .background(
                            MaterialTheme.colorScheme.tertiary
                        ),
                    contentAlignment = Alignment.Center
                ) { Text("SP") }
                Spacer(Modifier.width(12.dp))
                Column {
                    Text(
                        "Sam Park",
                        style = MaterialTheme.typography.titleSmall
                    )
                    Text(
                        "CTO, Northwind",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme
                            .onSurfaceVariant
                    )
                }
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-5">
        <Quote className="size-7 text-indigo-500" />
        <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
          This tool reshaped how our whole team ships product every single
          week.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-teal-500 text-xs font-semibold text-white">
            SP
          </span>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Sam Park
            </div>
            <div className="text-xs text-zinc-500">CTO, Northwind</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-team-member",
  name: "Team Member",
  category: "cards",
  description:
    "Team member card with role, social links, and a clean centered layout.",
  code: `@Composable
fun TeamMemberCard() {
    Card(
        modifier = Modifier.width(240.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(
            Modifier.padding(20.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                Modifier.size(72.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primary),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    "MR",
                    color = MaterialTheme.colorScheme.onPrimary
                )
            }
            Spacer(Modifier.height(12.dp))
            Text(
                "Mara Reyes",
                style = MaterialTheme.typography.titleMedium
            )
            Text(
                "Engineering Lead",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Spacer(Modifier.height(12.dp))
            Row {
                Icon(
                    Icons.Default.Mail,
                    contentDescription = "Email",
                    modifier = Modifier.size(18.dp)
                )
                Spacer(Modifier.width(16.dp))
                Icon(
                    Icons.Default.Person,
                    contentDescription = "Profile",
                    modifier = Modifier.size(18.dp)
                )
            }
        }
    }
}`,
  preview: (
    <Card className="w-60 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex flex-col items-center p-5">
        <span className="grid size-18 size-[72px] place-items-center rounded-full bg-indigo-500 text-base font-semibold text-white">
          MR
        </span>
        <div className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Mara Reyes
        </div>
        <div className="text-xs text-zinc-500">Engineering Lead</div>
        <div className="mt-3 flex gap-4 text-zinc-400">
          <Send className="size-4" />
          <User className="size-4" />
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-mention",
  name: "Mention Card",
  category: "cards",
  description:
    "Notification card highlighting an @mention with the surrounding post context.",
  code: `@Composable
fun MentionCard() {
    OutlinedCard(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(16.dp)
    ) {
        Row(Modifier.padding(16.dp)) {
            Box(
                Modifier.size(40.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.primary),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    Icons.Default.AlternateEmail,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.onPrimary,
                    modifier = Modifier.size(20.dp)
                )
            }
            Spacer(Modifier.width(12.dp))
            Column {
                Text(
                    "Tobi mentioned you",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "\u201cgreat thread @you, adding to it\u201d",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex gap-3 p-4">
        <span className="grid size-10 place-items-center rounded-full bg-indigo-500 text-white">
          <AtSign className="size-5" />
        </span>
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Tobi mentioned you
          </div>
          <div className="text-xs text-zinc-500">
            &ldquo;great thread @you, adding to it&rdquo;
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-activity-feed",
  name: "Activity Feed Row",
  category: "cards",
  description:
    "Compact activity feed row showing who did what with a timestamp.",
  code: `@Composable
fun ActivityFeedCard() {
    Surface(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(16.dp),
        tonalElevation = 2.dp
    ) {
        Row(
            Modifier.padding(14.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                Modifier.size(36.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.tertiary),
                contentAlignment = Alignment.Center
            ) { Text("KO") }
            Spacer(Modifier.width(12.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    "Kai liked your photo",
                    style = MaterialTheme.typography.bodyMedium
                )
                Text(
                    "2 minutes ago",
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
            }
            Icon(
                Icons.Default.Favorite,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.error,
                modifier = Modifier.size(18.dp)
            )
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border-transparent">
      <CardContent className="flex items-center gap-3 p-3.5">
        <span className="grid size-9 place-items-center rounded-full bg-teal-500 text-xs font-semibold text-white">
          KO
        </span>
        <div className="flex-1">
          <div className="text-sm text-zinc-800 dark:text-zinc-100">
            Kai liked your photo
          </div>
          <div className="text-[11px] text-zinc-500">2 minutes ago</div>
        </div>
        <Heart className="size-4 fill-rose-500 text-rose-500" />
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-reaction-bar",
  name: "Reaction Bar",
  category: "cards",
  description:
    "Post card with a reaction bar whose tapped icon scales and counts up.",
  tags: ["animated"],
  code: `@Composable
fun ReactionBarCard() {
    var picked by remember { mutableStateOf(-1) }
    val icons = listOf(
        Icons.Default.ThumbUp,
        Icons.Default.Favorite,
        Icons.Default.Star
    )
    Card(
        modifier = Modifier.width(280.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Column(Modifier.padding(16.dp)) {
            Text(
                "Weekend build complete \uD83D\uDEE0",
                style = MaterialTheme.typography.bodyMedium
            )
            Spacer(Modifier.height(12.dp))
            Row(
                horizontalArrangement =
                    Arrangement.spacedBy(20.dp)
            ) {
                icons.forEachIndexed { i, ic ->
                    val s by animateFloatAsState(
                        if (picked == i) 1.3f else 1f,
                        spring(Spring.DampingRatioMediumBouncy),
                        label = "r$i"
                    )
                    IconButton(onClick = { picked = i }) {
                        Icon(
                            ic,
                            contentDescription = null,
                            modifier = Modifier.scale(s),
                            tint = if (picked == i)
                                MaterialTheme.colorScheme.primary
                            else MaterialTheme.colorScheme
                                .onSurfaceVariant
                        )
                    }
                }
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-4">
        <p className="text-sm text-zinc-700 dark:text-zinc-200">
          Weekend build complete 🛠
        </p>
        <div className="mt-3 flex gap-6">
          <span className="scale-125 text-indigo-500">
            <ThumbsUp className="size-5" />
          </span>
          <span className="text-zinc-400">
            <Heart className="size-5" />
          </span>
          <span className="text-zinc-400">
            <Star className="size-5" />
          </span>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-profile-stats",
  name: "Profile Stats Row",
  category: "cards",
  description:
    "Profile header card with a divided stats row for posts, followers, following.",
  code: `@Composable
fun ProfileStatsCard() {
    ElevatedCard(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(Modifier.padding(20.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    Modifier.size(52.dp).clip(CircleShape)
                        .background(
                            MaterialTheme.colorScheme.primary
                        ),
                    contentAlignment = Alignment.Center
                ) { Text("IZ") }
                Spacer(Modifier.width(12.dp))
                Text(
                    "Iris Zhao",
                    style = MaterialTheme.typography.titleMedium
                )
            }
            Spacer(Modifier.height(16.dp))
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement =
                    Arrangement.SpaceBetween
            ) {
                Stat("128", "Posts")
                Stat("8.4k", "Followers")
                Stat("312", "Following")
            }
        }
    }
}

@Composable
private fun Stat(value: String, label: String) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(
            value,
            style = MaterialTheme.typography.titleMedium,
            fontWeight = FontWeight.Bold
        )
        Text(
            label,
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
            IZ
          </span>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Iris Zhao
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          {[
            ["128", "Posts"],
            ["8.4k", "Followers"],
            ["312", "Following"]
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-base font-bold text-zinc-900 dark:text-zinc-50">
                {v}
              </div>
              <div className="text-[11px] text-zinc-500">{l}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-new-follower-toast",
  name: "New Follower Toast",
  category: "cards",
  description:
    "Toast-style card sliding in to announce a brand new follower.",
  tags: ["animated"],
  code: `@Composable
fun NewFollowerToastCard() {
    var visible by remember { mutableStateOf(false) }
    LaunchedEffect(Unit) { visible = true }
    AnimatedVisibility(
        visible = visible,
        enter = slideInHorizontally { it } + fadeIn()
    ) {
        Surface(
            modifier = Modifier.width(280.dp),
            shape = RoundedCornerShape(16.dp),
            tonalElevation = 4.dp
        ) {
            Row(
                Modifier.padding(14.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Icon(
                    Icons.Default.PersonAdd,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
                Spacer(Modifier.width(12.dp))
                Column(Modifier.weight(1f)) {
                    Text(
                        "Dev Rao",
                        style =
                            MaterialTheme.typography.titleSmall
                    )
                    Text(
                        "started following you",
                        style =
                            MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme
                            .onSurfaceVariant
                    )
                }
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto translate-x-1 rounded-2xl bg-white shadow-lg dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex items-center gap-3 p-3.5">
        <span className="grid size-9 place-items-center rounded-full bg-indigo-50 text-indigo-500 dark:bg-indigo-950">
          <UserPlus className="size-5" />
        </span>
        <div className="flex-1">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Dev Rao
          </div>
          <div className="text-xs text-zinc-500">started following you</div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-friend-suggestion",
  name: "Friend Suggestion",
  category: "cards",
  description:
    "Suggestion card surfacing a person you may know with mutual context.",
  code: `@Composable
fun FriendSuggestionCard() {
    Card(
        modifier = Modifier.width(240.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(
            Modifier.padding(18.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                Modifier.size(60.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.secondary),
                contentAlignment = Alignment.Center
            ) { Text("BG") }
            Spacer(Modifier.height(10.dp))
            Text(
                "Bea Grant",
                style = MaterialTheme.typography.titleSmall
            )
            Text(
                "4 mutual friends",
                style = MaterialTheme.typography.labelSmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Spacer(Modifier.height(12.dp))
            Button(
                onClick = {},
                modifier = Modifier.fillMaxWidth()
            ) {
                Icon(
                    Icons.Default.PersonAdd,
                    contentDescription = null,
                    modifier = Modifier.size(16.dp)
                )
                Spacer(Modifier.width(6.dp))
                Text("Add Friend")
            }
        }
    }
}`,
  preview: (
    <Card className="w-60 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex flex-col items-center p-4">
        <span className="grid size-14 place-items-center rounded-full bg-purple-500 text-sm font-semibold text-white">
          BG
        </span>
        <div className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Bea Grant
        </div>
        <div className="text-[11px] text-zinc-500">4 mutual friends</div>
        <Button className="mt-3 h-8 w-full rounded-full bg-indigo-500 text-xs text-white hover:bg-indigo-600">
          <UserPlus className="size-4" /> Add Friend
        </Button>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-group-avatars",
  name: "Group Avatars Stack",
  category: "cards",
  description:
    "Group card showing overlapping member avatars with an overflow count chip.",
  code: `@Composable
fun GroupAvatarsCard() {
    val people = listOf("AL", "BO", "CY", "DI")
    Card(
        modifier = Modifier.width(280.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Row(
            Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box {
                people.forEachIndexed { i, p ->
                    Box(
                        Modifier
                            .padding(start = (i * 22).dp)
                            .size(36.dp)
                            .clip(CircleShape)
                            .background(
                                MaterialTheme.colorScheme.surface
                            )
                            .padding(2.dp)
                            .clip(CircleShape)
                            .background(
                                MaterialTheme.colorScheme.primary
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            p,
                            style = MaterialTheme.typography
                                .labelSmall
                        )
                    }
                }
            }
            Spacer(Modifier.width(12.dp))
            Text(
                "+8 in Design Crew",
                style = MaterialTheme.typography.bodyMedium
            )
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex items-center gap-3 p-4">
        <div className="flex -space-x-2.5">
          {["AL", "BO", "CY", "DI"].map((p, i) => (
            <span
              key={p}
              className="grid size-9 place-items-center rounded-full border-2 border-white bg-indigo-500 text-[10px] font-semibold text-white dark:border-zinc-900"
            >
              {p}
            </span>
          ))}
          <span className="grid size-9 place-items-center rounded-full border-2 border-white bg-zinc-200 text-[10px] font-semibold text-zinc-600 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-200">
            +8
          </span>
        </div>
        <span className="text-sm text-zinc-700 dark:text-zinc-200">
          Design Crew
        </span>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-share-sheet",
  name: "Share Sheet",
  category: "cards",
  description:
    "Share card presenting quick destinations to forward a post to.",
  code: `@Composable
fun ShareSheetCard() {
    Card(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(Modifier.padding(18.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    Icons.Default.Share,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
                Spacer(Modifier.width(8.dp))
                Text(
                    "Share to",
                    style = MaterialTheme.typography.titleSmall
                )
            }
            Spacer(Modifier.height(14.dp))
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement =
                    Arrangement.SpaceAround
            ) {
                ShareTarget(Icons.Default.Send, "Message")
                ShareTarget(Icons.Default.Email, "Mail")
                ShareTarget(Icons.Default.Link, "Copy")
            }
        }
    }
}

@Composable
private fun ShareTarget(icon: ImageVector, label: String) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Surface(
            shape = CircleShape,
            color = MaterialTheme.colorScheme.surfaceVariant
        ) {
            Icon(
                icon,
                contentDescription = label,
                modifier = Modifier.padding(12.dp)
            )
        }
        Spacer(Modifier.height(6.dp))
        Text(
            label,
            style = MaterialTheme.typography.labelSmall
        )
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          <Share2 className="size-4 text-indigo-500" /> Share to
        </div>
        <div className="mt-3 flex justify-around">
          {([
            [Send, "Message"],
            [Forward, "Forward"],
            [Bookmark, "Save"]
          ] as const).map(([Icon, l]) => (
            <div key={l} className="flex flex-col items-center gap-1">
              <span className="grid size-10 place-items-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200">
                <Icon className="size-4" />
              </span>
              <span className="text-[11px] text-zinc-500">{l}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-poll-result",
  name: "Poll Result Bars",
  category: "cards",
  description:
    "Poll card animating result bars filling to their final vote percentages.",
  tags: ["animated"],
  code: `@Composable
fun PollResultCard() {
    val options = listOf("Tabs" to 0.62f, "Spaces" to 0.38f)
    Card(
        modifier = Modifier.width(290.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Column(Modifier.padding(18.dp)) {
            Text(
                "Tabs or spaces?",
                style = MaterialTheme.typography.titleSmall
            )
            Spacer(Modifier.height(14.dp))
            options.forEach { (label, pct) ->
                val w by animateFloatAsState(
                    pct, tween(900), label = label
                )
                Box(
                    Modifier.fillMaxWidth().height(34.dp)
                        .clip(RoundedCornerShape(8.dp))
                        .background(
                            MaterialTheme.colorScheme
                                .surfaceVariant
                        )
                ) {
                    Box(
                        Modifier.fillMaxWidth(w).fillMaxHeight()
                            .background(
                                MaterialTheme.colorScheme
                                    .primaryContainer
                            )
                    )
                    Row(
                        Modifier.fillMaxSize().padding(
                            horizontal = 10.dp
                        ),
                        verticalAlignment =
                            Alignment.CenterVertically,
                        horizontalArrangement =
                            Arrangement.SpaceBetween
                    ) {
                        Text(label)
                        Text("\${(pct * 100).toInt()}%")
                    }
                }
                Spacer(Modifier.height(8.dp))
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-4">
        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Tabs or spaces?
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["Tabs", "62%", "w-[62%]"],
            ["Spaces", "38%", "w-[38%]"]
          ].map(([l, p, w]) => (
            <div
              key={l}
              className="relative flex h-8 items-center justify-between overflow-hidden rounded-lg bg-zinc-100 px-2.5 text-xs dark:bg-zinc-800"
            >
              <span className={"absolute inset-y-0 left-0 " + w + " bg-indigo-200 dark:bg-indigo-900"} />
              <span className="relative text-zinc-700 dark:text-zinc-100">
                {l}
              </span>
              <span className="relative text-zinc-700 dark:text-zinc-100">
                {p}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-message-preview",
  name: "Message Preview",
  category: "cards",
  description:
    "Direct message preview card with sender, snippet, and unread count badge.",
  code: `@Composable
fun MessagePreviewCard() {
    Surface(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(16.dp),
        tonalElevation = 1.dp
    ) {
        Row(
            Modifier.padding(14.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                Modifier.size(44.dp).clip(CircleShape)
                    .background(MaterialTheme.colorScheme.tertiary),
                contentAlignment = Alignment.Center
            ) { Text("FN") }
            Spacer(Modifier.width(12.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    "Finn",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "Are we still on for 3pm?",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant,
                    maxLines = 1
                )
            }
            Badge { Text("2") }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border-transparent">
      <CardContent className="flex items-center gap-3 p-3.5">
        <span className="grid size-11 place-items-center rounded-full bg-teal-500 text-sm font-semibold text-white">
          FN
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            <MessageCircle className="size-3.5 text-zinc-400" /> Finn
          </div>
          <div className="truncate text-xs text-zinc-500">
            Are we still on for 3pm?
          </div>
        </div>
        <Badge className="bg-indigo-500 text-white">2</Badge>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-online-pulse",
  name: "Online Status Pulse",
  category: "cards",
  description:
    "Profile card with a pulsing green dot signaling the user is online now.",
  tags: ["animated"],
  code: `@Composable
fun OnlinePulseCard() {
    val t = rememberInfiniteTransition(label = "pulse")
    val r by t.animateFloat(
        0.6f, 1f,
        infiniteRepeatable(
            tween(900), RepeatMode.Reverse
        ),
        label = "alpha"
    )
    Card(
        modifier = Modifier.width(260.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Row(
            Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box {
                Box(
                    Modifier.size(46.dp).clip(CircleShape)
                        .background(
                            MaterialTheme.colorScheme.primary
                        ),
                    contentAlignment = Alignment.Center
                ) { Text("OZ") }
                Box(
                    Modifier.align(Alignment.BottomEnd)
                        .size(14.dp).clip(CircleShape)
                        .background(
                            Color(0xFF22C55E).copy(alpha = r)
                        )
                        .border(
                            2.dp,
                            MaterialTheme.colorScheme.surface,
                            CircleShape
                        )
                )
            }
            Spacer(Modifier.width(12.dp))
            Column {
                Text(
                    "Oz Patel",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "Online",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color(0xFF22C55E)
                )
            }
        }
    }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex items-center gap-3 p-4">
        <span className="relative">
          <span className="grid size-11 place-items-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
            OZ
          </span>
          <span className="absolute bottom-0 right-0 size-3.5 animate-pulse rounded-full border-2 border-white bg-green-500 dark:border-zinc-900" />
        </span>
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Oz Patel
          </div>
          <div className="text-xs text-green-500">Online</div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-achievement-unlocked",
  name: "Achievement Unlocked",
  category: "cards",
  description:
    "Celebration card where an award medal scales in for a newly unlocked badge.",
  tags: ["animated"],
  code: `@Composable
fun AchievementUnlockedCard() {
    var shown by remember { mutableStateOf(false) }
    LaunchedEffect(Unit) { shown = true }
    val s by animateFloatAsState(
        if (shown) 1f else 0.3f,
        spring(Spring.DampingRatioMediumBouncy),
        label = "medal"
    )
    ElevatedCard(
        modifier = Modifier.width(260.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Column(
            Modifier.padding(20.dp).fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Surface(
                shape = CircleShape,
                color = MaterialTheme.colorScheme.primaryContainer,
                modifier = Modifier.scale(s)
            ) {
                Icon(
                    Icons.Default.EmojiEvents,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary,
                    modifier = Modifier.padding(16.dp).size(32.dp)
                )
            }
            Spacer(Modifier.height(12.dp))
            Text(
                "Achievement Unlocked",
                style = MaterialTheme.typography.titleSmall
            )
            Text(
                "100 Day Streak",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex flex-col items-center p-5">
        <span className="grid size-16 place-items-center rounded-full bg-amber-100 text-amber-500 dark:bg-amber-950">
          <Award className="size-8" />
        </span>
        <div className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Achievement Unlocked
        </div>
        <div className="text-xs text-zinc-500">100 Day Streak</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-top-fan",
  name: "Top Fan Badge",
  category: "cards",
  description:
    "Fan recognition card crowning a top supporter with a gold accent badge.",
  code: `@Composable
fun TopFanCard() {
    Card(
        modifier = Modifier.width(280.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Row(
            Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box {
                Box(
                    Modifier.size(48.dp).clip(CircleShape)
                        .background(
                            MaterialTheme.colorScheme.secondary
                        ),
                    contentAlignment = Alignment.Center
                ) { Text("VY") }
                Icon(
                    Icons.Default.Star,
                    contentDescription = null,
                    tint = Color(0xFFF59E0B),
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .size(18.dp)
                )
            }
            Spacer(Modifier.width(12.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    "Vera Yu",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "Top fan this month",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
            }
            AssistChip(
                onClick = {},
                label = { Text("#1") }
            )
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex items-center gap-3 p-4">
        <span className="relative">
          <span className="grid size-12 place-items-center rounded-full bg-purple-500 text-sm font-semibold text-white">
            VY
          </span>
          <Crown className="absolute -right-1 -top-1 size-5 fill-amber-400 text-amber-500" />
        </span>
        <div className="flex-1">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Vera Yu
          </div>
          <div className="text-xs text-zinc-500">Top fan this month</div>
        </div>
        <Badge className="bg-amber-400 text-amber-950">#1</Badge>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-profile-completion",
  name: "Profile Completion Ring",
  category: "cards",
  description:
    "Onboarding card with a circular progress ring sweeping to profile completeness.",
  tags: ["animated"],
  code: `@Composable
fun ProfileCompletionCard() {
    val p = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
        p.animateTo(0.75f, tween(1200))
    }
    Card(
        modifier = Modifier.width(260.dp),
        shape = RoundedCornerShape(20.dp)
    ) {
        Row(
            Modifier.padding(20.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                Modifier.size(64.dp),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator(
                    progress = { p.value },
                    modifier = Modifier.size(64.dp),
                    strokeWidth = 6.dp
                )
                Text(
                    "\${(p.value * 100).toInt()}%",
                    style = MaterialTheme.typography.labelMedium
                )
            }
            Spacer(Modifier.width(16.dp))
            Column {
                Text(
                    "Profile setup",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "Add a bio to finish",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
            }
        }
    }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="flex items-center gap-4 p-5">
        <span className="relative grid size-16 place-items-center">
          <svg viewBox="0 0 36 36" className="size-16 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" strokeWidth="4" className="stroke-zinc-200 dark:stroke-zinc-700" />
            <circle cx="18" cy="18" r="15" fill="none" strokeWidth="4" strokeDasharray="94.2" strokeDashoffset="23.6" strokeLinecap="round" className="stroke-indigo-500" />
          </svg>
          <span className="absolute text-xs font-semibold text-zinc-900 dark:text-zinc-50">
            75%
          </span>
        </span>
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Profile setup
          </div>
          <div className="text-xs text-zinc-500">Add a bio to finish</div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-repost",
  name: "Repost Card",
  category: "cards",
  description:
    "Repost card nesting an original author's post inside a reshare header.",
  code: `@Composable
fun RepostCard() {
    OutlinedCard(
        modifier = Modifier.width(300.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Column(Modifier.padding(16.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    Icons.Default.Forward,
                    contentDescription = null,
                    modifier = Modifier.size(16.dp),
                    tint = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
                Spacer(Modifier.width(6.dp))
                Text(
                    "Mia reposted",
                    style = MaterialTheme.typography.labelMedium,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
            }
            Spacer(Modifier.height(10.dp))
            Surface(
                shape = RoundedCornerShape(12.dp),
                color = MaterialTheme.colorScheme.surfaceVariant
            ) {
                Column(Modifier.padding(12.dp)) {
                    Text(
                        "@orig_dev",
                        style = MaterialTheme.typography
                            .labelMedium
                    )
                    Text(
                        "Compose makes UI feel like play.",
                        style = MaterialTheme.typography
                            .bodySmall
                    )
                }
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-4">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Forward className="size-3.5" /> Mia reposted
        </div>
        <div className="mt-2 rounded-xl bg-zinc-100 p-3 dark:bg-zinc-800">
          <div className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
            @orig_dev
          </div>
          <div className="text-sm text-zinc-800 dark:text-zinc-100">
            Compose makes UI feel like play.
          </div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-tag-chips",
  name: "Interest Tag Chips",
  category: "cards",
  description:
    "Profile card listing interest hashtags as wrap-flowing selectable filter chips.",
  code: `@OptIn(ExperimentalLayoutApi::class)
@Composable
fun TagChipsCard() {
    val tags = listOf(
        "design", "kotlin", "motion", "ux", "ai"
    )
    Card(
        modifier = Modifier.width(280.dp),
        shape = RoundedCornerShape(18.dp)
    ) {
        Column(Modifier.padding(16.dp)) {
            Text(
                "Interests",
                style = MaterialTheme.typography.titleSmall
            )
            Spacer(Modifier.height(10.dp))
            FlowRow(
                horizontalArrangement =
                    Arrangement.spacedBy(8.dp),
                verticalArrangement =
                    Arrangement.spacedBy(8.dp)
            ) {
                tags.forEach { tag ->
                    SuggestionChip(
                        onClick = {},
                        label = { Text("#$tag") }
                    )
                }
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
      <CardContent className="p-4">
        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          Interests
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {["design", "kotlin", "motion", "ux", "ai"].map((t) => (
            <span
              key={t}
              className="flex items-center gap-0.5 rounded-full bg-indigo-50 px-2.5 py-1 text-xs text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"
            >
              <Hash className="size-3" />
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-social-leaderboard-avatar",
  name: "Leaderboard Avatar",
  category: "cards",
  description:
    "Leaderboard row card ranking a player with avatar, points, and crown for first.",
  code: `@Composable
fun LeaderboardAvatarCard() {
    Surface(
        modifier = Modifier.width(290.dp),
        shape = RoundedCornerShape(16.dp),
        tonalElevation = 2.dp
    ) {
        Row(
            Modifier.padding(14.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                "1",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )
            Spacer(Modifier.width(14.dp))
            Box {
                Box(
                    Modifier.size(44.dp).clip(CircleShape)
                        .background(
                            MaterialTheme.colorScheme.primary
                        ),
                    contentAlignment = Alignment.Center
                ) { Text("RX") }
                Icon(
                    Icons.Default.WorkspacePremium,
                    contentDescription = null,
                    tint = Color(0xFFF59E0B),
                    modifier = Modifier
                        .align(Alignment.TopStart)
                        .size(16.dp)
                )
            }
            Spacer(Modifier.width(12.dp))
            Column(Modifier.weight(1f)) {
                Text(
                    "Rex Ng",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "12,940 pts",
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme
                        .onSurfaceVariant
                )
            }
        }
    }
}`,
  preview: (
    <Card className="w-72 mx-auto rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border-transparent">
      <CardContent className="flex items-center gap-3 p-3.5">
        <span className="w-5 text-center text-lg font-bold text-zinc-900 dark:text-zinc-50">
          1
        </span>
        <span className="relative">
          <span className="grid size-11 place-items-center rounded-full bg-indigo-500 text-sm font-semibold text-white">
            RX
          </span>
          <Crown className="absolute -left-1 -top-1 size-4 fill-amber-400 text-amber-500" />
        </span>
        <div className="flex-1">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            Rex Ng
          </div>
          <div className="text-[11px] text-zinc-500">12,940 pts</div>
        </div>
        <Award className="size-4 text-amber-500" />
      </CardContent>
    </Card>
  )
},

{
  id: "card-health-weather-now",
  name: "Weather Now",
  category: "cards",
  description:
    "Current conditions card with a sky gradient and slowly drifting cloud layers.",
  tags: ["animated"],
  code: `@Composable
fun WeatherNowCard() {
  val t = rememberInfiniteTransition(label = "sky")
  val drift by t.animateFloat(
    initialValue = 0f, targetValue = 1f,
    animationSpec = infiniteRepeatable(
      tween(9000, easing = LinearEasing)
    ), label = "drift"
  )
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().height(180.dp)
  ) {
    Box(Modifier.fillMaxSize()) {
      Canvas(Modifier.fillMaxSize()) {
        drawRect(
          brush = Brush.verticalGradient(
            listOf(Color(0xFF4A90E2), Color(0xFFB3D4F5))
          )
        )
        val w = size.width
        val cx = (drift * (w + 160f)) - 80f
        drawCircle(
          Color.White.copy(alpha = 0.85f), 34f,
          Offset(cx, size.height * 0.32f)
        )
        drawCircle(
          Color.White.copy(alpha = 0.7f), 26f,
          Offset(cx + 40f, size.height * 0.36f)
        )
      }
      Column(
        Modifier.fillMaxSize().padding(20.dp),
        verticalArrangement = Arrangement.SpaceBetween
      ) {
        Text(
          "San Francisco", color = Color.White,
          style = MaterialTheme.typography.titleMedium
        )
        Text(
          "21°", color = Color.White,
          style = MaterialTheme.typography.displayMedium
        )
        Text(
          "Partly cloudy", color = Color.White,
          style = MaterialTheme.typography.bodyMedium
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden border-border bg-card text-card-foreground">
      <div className="relative h-44 bg-gradient-to-b from-sky-500 to-sky-200 dark:from-sky-700 dark:to-sky-900">
        <CloudSun className="absolute right-4 top-4 size-10 text-white/90 animate-pulse" />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <span className="text-sm font-medium text-white">
            San Francisco
          </span>
          <span className="text-5xl font-light text-white">21°</span>
          <span className="text-sm text-white/90">Partly cloudy</span>
        </div>
      </div>
    </Card>
  ),
},
{
  id: "card-health-hourly-forecast",
  name: "Hourly Forecast",
  category: "cards",
  description:
    "Scrollable hourly strip pairing temperatures with weather glyphs per hour.",
  code: `@Composable
fun HourlyForecastCard() {
  data class Hour(val t: String, val deg: String)
  val hours = listOf(
    Hour("Now", "21°"), Hour("1PM", "22°"),
    Hour("2PM", "23°"), Hour("3PM", "22°"),
    Hour("4PM", "20°"), Hour("5PM", "19°")
  )
  OutlinedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(16.dp)) {
      Text(
        "Hourly Forecast",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(12.dp))
      LazyRow(
        horizontalArrangement = Arrangement.spacedBy(18.dp)
      ) {
        items(hours) { h ->
          Column(
            horizontalAlignment =
              Alignment.CenterHorizontally
          ) {
            Text(
              h.t,
              style = MaterialTheme.typography.labelSmall,
              color = MaterialTheme.colorScheme
                .onSurfaceVariant
            )
            Spacer(Modifier.height(8.dp))
            Box(
              Modifier.size(20.dp).background(
                MaterialTheme.colorScheme.primary,
                CircleShape
              )
            )
            Spacer(Modifier.height(8.dp))
            Text(
              h.deg,
              style = MaterialTheme.typography.bodyMedium
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Hourly Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-2">
          {([
            ["Now", Sun, "21°"],
            ["1PM", CloudSun, "22°"],
            ["2PM", Cloud, "23°"],
            ["3PM", CloudRain, "22°"],
            ["4PM", Cloud, "20°"],
          ] as const).map(([t, Ico, d], i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span className="text-xs text-muted-foreground">{t}</span>
              <Ico className="size-4 text-primary" />
              <span className="text-sm">{d}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-step-ring",
  name: "Step Count Ring",
  category: "cards",
  description:
    "Animated circular progress ring sweeping toward the daily step target.",
  tags: ["animated"],
  code: `@Composable
fun StepRingCard() {
  val target = 10000
  val steps = 7320
  val pct = steps / target.toFloat()
  val sweep by animateFloatAsState(
    targetValue = pct * 360f,
    animationSpec = tween(1200, easing = FastOutSlowInEasing),
    label = "sweep"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(
        Modifier.size(96.dp),
        contentAlignment = Alignment.Center
      ) {
        Canvas(Modifier.fillMaxSize()) {
          val stroke = 14f
          drawArc(
            Color(0xFFE0E0E0), 0f, 360f, false,
            style = Stroke(stroke, cap = StrokeCap.Round)
          )
          drawArc(
            Color(0xFF34C759), -90f, sweep, false,
            style = Stroke(stroke, cap = StrokeCap.Round)
          )
        }
        Text(
          "73%",
          style = MaterialTheme.typography.titleMedium
        )
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text(
          "Steps",
          color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
          "7,320",
          style = MaterialTheme.typography.headlineSmall
        )
        Text(
          "Goal 10,000",
          style = MaterialTheme.typography.labelMedium
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative grid size-24 place-items-center">
          <svg className="size-24 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-muted" strokeWidth="3" />
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-emerald-500 transition-all"
              strokeWidth="3" strokeDasharray="94"
              strokeDashoffset="25" strokeLinecap="round" />
          </svg>
          <Footprints className="absolute size-6 text-emerald-500" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Steps</p>
          <p className="text-2xl font-semibold">7,320</p>
          <p className="text-xs text-muted-foreground">Goal 10,000</p>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-heart-pulse",
  name: "Heart Rate Pulse",
  category: "cards",
  description:
    "Live ECG-style pulse line scrolls beneath a beating heart and BPM value.",
  tags: ["animated"],
  code: `@Composable
fun HeartPulseCard() {
  val t = rememberInfiniteTransition(label = "ecg")
  val phase by t.animateFloat(
    0f, 1f,
    infiniteRepeatable(tween(1800, easing = LinearEasing)),
    label = "phase"
  )
  val beat by t.animateFloat(
    1f, 1.25f,
    infiniteRepeatable(
      tween(500), repeatMode = RepeatMode.Reverse
    ), label = "beat"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box(Modifier.graphicsLayer {
          scaleX = beat; scaleY = beat
        }) {
          Canvas(Modifier.size(22.dp)) {
            drawCircle(Color(0xFFFF3B30))
          }
        }
        Spacer(Modifier.width(10.dp))
        Text(
          "72 BPM",
          style = MaterialTheme.typography.headlineSmall
        )
      }
      Spacer(Modifier.height(14.dp))
      Canvas(Modifier.fillMaxWidth().height(60.dp)) {
        val w = size.width; val h = size.height
        val path = Path()
        val n = 60
        for (i in 0..n) {
          val x = w * i / n
          val p = (i / n.toFloat() + phase) * 6f
          val spike =
            if ((p % 1f) in 0.45f..0.55f) -h * 0.4f
            else 0f
          val y = h / 2 + spike +
            sin(p * 3.14f) * h * 0.05f
          if (i == 0) path.moveTo(x, y)
          else path.lineTo(x, y)
        }
        drawPath(
          path, Color(0xFFFF3B30),
          style = Stroke(3f, cap = StrokeCap.Round)
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <Heart className="size-5 fill-red-500 text-red-500 animate-pulse" />
          <span className="text-2xl font-semibold">72 BPM</span>
        </div>
        <svg className="mt-3 h-14 w-full" viewBox="0 0 120 40"
          preserveAspectRatio="none">
          <polyline fill="none"
            className="stroke-red-500" strokeWidth="2"
            points="0,20 20,20 28,6 36,34 44,20 70,20 78,8 86,32 94,20 120,20" />
        </svg>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-sleep-stages",
  name: "Sleep Stages",
  category: "cards",
  description:
    "Stacked nightly sleep stages with a soft hypnogram wave for deep rest.",
  tags: ["animated"],
  code: `@Composable
fun SleepStagesCard() {
  val t = rememberInfiniteTransition(label = "sleep")
  val shift by t.animateFloat(
    0f, 6.28f,
    infiniteRepeatable(tween(6000, easing = LinearEasing)),
    label = "shift"
  )
  OutlinedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Sleep · 7h 24m",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(14.dp))
      Canvas(Modifier.fillMaxWidth().height(70.dp)) {
        val w = size.width; val h = size.height
        val path = Path()
        val n = 80
        for (i in 0..n) {
          val x = w * i / n
          val y = h / 2 +
            sin(i / 6f + shift) * h * 0.3f
          if (i == 0) path.moveTo(x, y)
          else path.lineTo(x, y)
        }
        drawPath(
          path, Color(0xFF5E5CE6),
          style = Stroke(3f, cap = StrokeCap.Round)
        )
      }
      Spacer(Modifier.height(12.dp))
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
      ) {
        Text("Deep 1h", style =
          MaterialTheme.typography.labelSmall)
        Text("REM 2h", style =
          MaterialTheme.typography.labelSmall)
        Text("Light 4h", style =
          MaterialTheme.typography.labelSmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Moon className="size-4 text-indigo-500" /> Sleep · 7h 24m
        </CardTitle>
      </CardHeader>
      <CardContent>
        <svg className="h-16 w-full" viewBox="0 0 120 40"
          preserveAspectRatio="none">
          <path fill="none" className="stroke-indigo-500" strokeWidth="2"
            d="M0,20 Q15,4 30,20 T60,20 T90,20 T120,20" />
        </svg>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Deep 1h</span><span>REM 2h</span><span>Light 4h</span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-hydration-fill",
  name: "Hydration Fill",
  category: "cards",
  description:
    "Water glass fills with an animated rising level toward the daily intake goal.",
  tags: ["animated"],
  code: `@Composable
fun HydrationCard() {
  val goal = 8; val cups = 5
  val level by animateFloatAsState(
    targetValue = cups / goal.toFloat(),
    animationSpec = tween(1000), label = "fill"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(Modifier.size(70.dp, 90.dp)) {
        Canvas(Modifier.fillMaxSize()) {
          val r = 12f
          drawRoundRect(
            Color(0xFFE0E0E0),
            cornerRadius = CornerRadius(r, r),
            style = Stroke(4f)
          )
          val fillH = size.height * level
          drawRoundRect(
            Color(0xFF32ADE6),
            topLeft = Offset(0f, size.height - fillH),
            size = Size(size.width, fillH),
            cornerRadius = CornerRadius(r, r)
          )
        }
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text(
          "Hydration",
          color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
          "5 of 8 cups",
          style = MaterialTheme.typography.headlineSmall
        )
        Text(
          "1.25 L today",
          style = MaterialTheme.typography.labelMedium
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative h-24 w-16 overflow-hidden rounded-xl border-2 border-muted">
          <div className="absolute bottom-0 w-full bg-sky-500/80 transition-all"
            style={{ height: "62%" }} />
          <Droplets className="absolute left-1/2 top-2 size-5 -translate-x-1/2 text-sky-600" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Hydration</p>
          <p className="text-xl font-semibold">5 of 8 cups</p>
          <p className="text-xs text-muted-foreground">1.25 L today</p>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-calories-burned",
  name: "Calories Burned",
  category: "cards",
  description:
    "Energy burn card with an animated flame and progress toward the move goal.",
  tags: ["animated"],
  code: `@Composable
fun CaloriesCard() {
  val t = rememberInfiniteTransition(label = "flame")
  val flick by t.animateFloat(
    0.9f, 1.15f,
    infiniteRepeatable(
      tween(600), repeatMode = RepeatMode.Reverse
    ), label = "flick"
  )
  val prog by animateFloatAsState(
    0.64f, tween(1000), label = "p"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box(Modifier.graphicsLayer {
          scaleY = flick
        }) {
          Canvas(Modifier.size(26.dp)) {
            drawCircle(Color(0xFFFF9500))
          }
        }
        Spacer(Modifier.width(10.dp))
        Text(
          "642 kcal",
          style = MaterialTheme.typography.headlineSmall
        )
      }
      Spacer(Modifier.height(14.dp))
      LinearProgressIndicator(
        progress = { prog },
        modifier = Modifier.fillMaxWidth().height(8.dp),
        color = Color(0xFFFF9500)
      )
      Spacer(Modifier.height(8.dp))
      Text(
        "Goal 1,000 kcal",
        style = MaterialTheme.typography.labelMedium
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <Flame className="size-6 text-orange-500 animate-pulse" />
          <span className="text-2xl font-semibold">642 kcal</span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-muted">
          <div className="h-2 rounded-full bg-orange-500"
            style={{ width: "64%" }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Goal 1,000 kcal</p>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-workout-summary",
  name: "Workout Summary",
  category: "cards",
  description:
    "Post-run summary grouping duration, distance and pace beneath a header badge.",
  code: `@Composable
fun WorkoutSummaryCard() {
  data class Stat(val k: String, val v: String)
  val stats = listOf(
    Stat("Time", "42:18"),
    Stat("Distance", "8.2 km"),
    Stat("Pace", "5:09")
  )
  OutlinedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box(
          Modifier.size(36.dp).background(
            MaterialTheme.colorScheme.primary, CircleShape
          )
        )
        Spacer(Modifier.width(12.dp))
        Column {
          Text(
            "Morning Run",
            style = MaterialTheme.typography.titleMedium
          )
          Text(
            "Today · 7:05 AM",
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme
              .onSurfaceVariant
          )
        }
      }
      Spacer(Modifier.height(16.dp))
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
      ) {
        stats.forEach { s ->
          Column(
            horizontalAlignment =
              Alignment.CenterHorizontally
          ) {
            Text(
              s.v,
              style = MaterialTheme.typography.titleLarge
            )
            Text(
              s.k,
              style = MaterialTheme.typography.labelSmall,
              color = MaterialTheme.colorScheme
                .onSurfaceVariant
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="flex-row items-center gap-3 space-y-0 pb-3">
        <div className="grid size-9 place-items-center rounded-full bg-primary/15">
          <Activity className="size-4 text-primary" />
        </div>
        <div>
          <CardTitle className="text-base">Morning Run</CardTitle>
          <CardDescription>Today · 7:05 AM</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex justify-between">
        {[["42:18", "Time"], ["8.2 km", "Distance"], ["5:09", "Pace"]].map(
          ([v, k]) => (
            <div key={k} className="text-center">
              <p className="text-lg font-semibold">{v}</p>
              <p className="text-xs text-muted-foreground">{k}</p>
            </div>
          )
        )}
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-activity-rings",
  name: "Activity Rings",
  category: "cards",
  description:
    "Three concentric move, exercise and stand rings animate to today's totals.",
  tags: ["animated"],
  code: `@Composable
fun ActivityRingsCard() {
  val move by animateFloatAsState(0.8f, tween(1000),
    label = "m")
  val exer by animateFloatAsState(0.6f, tween(1000),
    label = "e")
  val stand by animateFloatAsState(0.9f, tween(1000),
    label = "s")
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(100.dp)) {
        val stroke = 12f
        val rings = listOf(
          Triple(Color(0xFFFF2D55), move, 0f),
          Triple(Color(0xFFA8E063), exer, 16f),
          Triple(Color(0xFF50E3C2), stand, 32f)
        )
        rings.forEach { (c, p, inset) ->
          drawArc(
            c.copy(alpha = 0.2f), 0f, 360f, false,
            topLeft = Offset(inset, inset),
            size = Size(
              size.width - inset * 2,
              size.height - inset * 2
            ),
            style = Stroke(stroke, cap = StrokeCap.Round)
          )
          drawArc(
            c, -90f, p * 360f, false,
            topLeft = Offset(inset, inset),
            size = Size(
              size.width - inset * 2,
              size.height - inset * 2
            ),
            style = Stroke(stroke, cap = StrokeCap.Round)
          )
        }
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text("Move 480/600",
          color = Color(0xFFFF2D55))
        Text("Exercise 18/30",
          color = Color(0xFF7AC943))
        Text("Stand 11/12",
          color = Color(0xFF50E3C2))
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative grid size-24 place-items-center">
          {[["94", "stroke-rose-500", "15"], ["75", "stroke-lime-500", "11"],
            ["55", "stroke-teal-400", "7"]].map(([off, c, r], i) => (
            <svg key={i} className="absolute size-24 -rotate-90"
              viewBox="0 0 36 36">
              <circle cx="18" cy="18" r={r} fill="none"
                className={c} strokeWidth="2.5"
                strokeDasharray="100" strokeDashoffset={off}
                strokeLinecap="round" />
            </svg>
          ))}
          <Target className="size-5 text-foreground" />
        </div>
        <div className="space-y-1 text-sm">
          <p className="text-rose-500">Move 480/600</p>
          <p className="text-lime-500">Exercise 18/30</p>
          <p className="text-teal-400">Stand 11/12</p>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-temp-gauge",
  name: "Temperature Gauge",
  category: "cards",
  description:
    "Semicircular gauge needle animates to the current outdoor temperature reading.",
  tags: ["animated"],
  code: `@Composable
fun TempGaugeCard() {
  val angle by animateFloatAsState(
    targetValue = 38f,
    animationSpec = tween(1100), label = "needle"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Column(
      Modifier.padding(20.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Canvas(Modifier.size(150.dp, 80.dp)) {
        val sweep = 180f
        drawArc(
          Brush.horizontalGradient(
            listOf(Color(0xFF32ADE6), Color(0xFFFF3B30))
          ),
          180f, sweep, false,
          style = Stroke(16f, cap = StrokeCap.Round)
        )
        rotate(180f + angle, Offset(size.width / 2,
          size.height)) {
          drawLine(
            MaterialTheme.colorScheme.onSurface,
            Offset(size.width / 2, size.height),
            Offset(size.width / 2, 10f),
            strokeWidth = 4f, cap = StrokeCap.Round
          )
        }
      }
      Text(
        "21°C",
        style = MaterialTheme.typography.headlineMedium
      )
      Text(
        "Feels like 19°",
        style = MaterialTheme.typography.labelMedium
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex flex-col items-center p-5">
        <div className="relative h-20 w-40">
          <svg viewBox="0 0 100 50" className="h-full w-full">
            <path d="M5,50 A45,45 0 0 1 95,50" fill="none"
              strokeWidth="8" strokeLinecap="round" stroke="url(#g)" />
            <defs>
              <linearGradient id="g">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
            <line x1="50" y1="50" x2="62" y2="18"
              className="stroke-foreground" strokeWidth="2"
              strokeLinecap="round" />
          </svg>
          <Thermometer className="absolute bottom-0 left-1/2 size-4 -translate-x-1/2 text-foreground" />
        </div>
        <p className="text-2xl font-semibold">21°C</p>
        <p className="text-xs text-muted-foreground">Feels like 19°</p>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-air-quality",
  name: "Air Quality Index",
  category: "cards",
  description:
    "AQI card maps the index value onto a colored severity scale with label.",
  code: `@Composable
fun AirQualityCard() {
  val aqi = 42
  OutlinedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Air Quality",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(12.dp))
      Row(verticalAlignment = Alignment.Bottom) {
        Text(
          "$aqi",
          style = MaterialTheme.typography.displaySmall,
          color = Color(0xFF34C759)
        )
        Spacer(Modifier.width(8.dp))
        Text(
          "Good",
          style = MaterialTheme.typography.titleMedium,
          color = Color(0xFF34C759)
        )
      }
      Spacer(Modifier.height(12.dp))
      Canvas(Modifier.fillMaxWidth().height(8.dp)) {
        drawRoundRect(
          Brush.horizontalGradient(
            listOf(
              Color(0xFF34C759), Color(0xFFFFCC00),
              Color(0xFFFF9500), Color(0xFFFF3B30)
            )
          ),
          cornerRadius = CornerRadius(8f, 8f)
        )
        val x = size.width * (aqi / 300f)
        drawCircle(Color.White, 7f, Offset(x, size.height / 2))
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Wind className="size-4 text-emerald-500" /> Air Quality
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-semibold text-emerald-500">42</span>
          <Badge className="mb-1 bg-emerald-500/15 text-emerald-600">Good</Badge>
        </div>
        <div className="relative mt-3 h-2 rounded-full"
          style={{ background: "linear-gradient(90deg,#22c55e,#eab308,#f97316,#ef4444)" }}>
          <div className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-background bg-white"
            style={{ left: "14%" }} />
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-uv-index",
  name: "UV Index",
  category: "cards",
  description:
    "UV exposure card with a radial sun glow and protection advice for the day.",
  tags: ["animated"],
  code: `@Composable
fun UvIndexCard() {
  val t = rememberInfiniteTransition(label = "uv")
  val glow by t.animateFloat(
    0.85f, 1.1f,
    infiniteRepeatable(
      tween(1400), repeatMode = RepeatMode.Reverse
    ), label = "glow"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(72.dp)) {
        drawCircle(
          Color(0xFFFFCC00).copy(alpha = 0.3f),
          radius = size.minDimension / 2 * glow
        )
        drawCircle(
          Color(0xFFFF9500),
          radius = size.minDimension / 3
        )
      }
      Spacer(Modifier.width(18.dp))
      Column {
        Text(
          "UV Index",
          color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
          "7 High",
          style = MaterialTheme.typography.headlineSmall
        )
        Text(
          "Use SPF 30+",
          style = MaterialTheme.typography.labelMedium
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative grid size-16 place-items-center">
          <div className="absolute size-16 rounded-full bg-amber-400/30 animate-ping" />
          <Sun className="size-9 text-orange-500" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">UV Index</p>
          <p className="text-xl font-semibold">7 High</p>
          <p className="text-xs text-muted-foreground">Use SPF 30+</p>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-rainfall-bars",
  name: "Rainfall Chance",
  category: "cards",
  description:
    "Hourly precipitation probability rendered as a row of graded blue bars.",
  code: `@Composable
fun RainfallCard() {
  val chances = listOf(10, 20, 45, 70, 60, 30, 15)
  OutlinedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Rain Chance",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(16.dp))
      Row(
        Modifier.fillMaxWidth().height(80.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.Bottom
      ) {
        chances.forEach { c ->
          Column(
            horizontalAlignment =
              Alignment.CenterHorizontally
          ) {
            Box(
              Modifier
                .width(14.dp)
                .height((c * 0.7).dp)
                .background(
                  Color(0xFF32ADE6),
                  RoundedCornerShape(6.dp)
                )
            )
            Spacer(Modifier.height(6.dp))
            Text(
              "$c",
              style = MaterialTheme.typography.labelSmall
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Umbrella className="size-4 text-sky-500" /> Rain Chance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-20 items-end justify-between">
          {[10, 20, 45, 70, 60, 30, 15].map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-3 rounded-md bg-sky-500"
                style={{ height: c * 0.7 + "px" }} />
              <span className="text-[10px] text-muted-foreground">{c}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-wind-compass",
  name: "Wind Compass",
  category: "cards",
  description:
    "Rotating compass needle points to wind direction with the current gust speed.",
  tags: ["animated"],
  code: `@Composable
fun WindCompassCard() {
  val dir by animateFloatAsState(
    targetValue = 135f,
    animationSpec = tween(1200), label = "dir"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(90.dp)) {
        drawCircle(
          Color(0xFFE0E0E0),
          style = Stroke(4f)
        )
        rotate(dir) {
          drawLine(
            Color(0xFF32ADE6),
            Offset(size.width / 2, size.height / 2),
            Offset(size.width / 2, 12f),
            strokeWidth = 5f, cap = StrokeCap.Round
          )
          drawLine(
            Color(0xFFB0B0B0),
            Offset(size.width / 2, size.height / 2),
            Offset(size.width / 2, size.height - 12f),
            strokeWidth = 5f, cap = StrokeCap.Round
          )
        }
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text(
          "Wind",
          color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
          "14 km/h",
          style = MaterialTheme.typography.headlineSmall
        )
        Text(
          "SE",
          style = MaterialTheme.typography.labelMedium
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative grid size-20 place-items-center rounded-full border-2 border-muted">
          <Wind className="absolute size-4 text-muted-foreground/40" />
          <svg className="size-20" viewBox="0 0 40 40"
            style={{ transform: "rotate(135deg)" }}>
            <line x1="20" y1="20" x2="20" y2="6"
              className="stroke-sky-500" strokeWidth="2.5"
              strokeLinecap="round" />
            <line x1="20" y1="20" x2="20" y2="34"
              className="stroke-muted-foreground" strokeWidth="2.5"
              strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Wind</p>
          <p className="text-xl font-semibold">14 km/h</p>
          <p className="text-xs text-muted-foreground">SE</p>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-sun-arc",
  name: "Sunrise Sunset Arc",
  category: "cards",
  description:
    "Daylight arc plots the sun's position between sunrise and sunset times.",
  tags: ["animated"],
  code: `@Composable
fun SunArcCard() {
  val pos by animateFloatAsState(
    targetValue = 0.55f,
    animationSpec = tween(1300), label = "pos"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Daylight",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(12.dp))
      Canvas(Modifier.fillMaxWidth().height(80.dp)) {
        val w = size.width; val h = size.height
        val path = Path().apply {
          moveTo(0f, h)
          quadraticBezierTo(w / 2, -h * 0.6f, w, h)
        }
        drawPath(
          path, Color(0xFFFFCC00),
          style = Stroke(
            3f, pathEffect =
              PathEffect.dashPathEffect(
                floatArrayOf(8f, 8f)
              )
          )
        )
        val x = w * pos
        val y = h - sin(pos * 3.14f) * h * 1.4f
        drawCircle(Color(0xFFFF9500), 9f, Offset(x, y))
      }
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
      ) {
        Text("6:12 AM", style =
          MaterialTheme.typography.labelSmall)
        Text("8:34 PM", style =
          MaterialTheme.typography.labelSmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Daylight</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-20">
          <svg className="h-full w-full" viewBox="0 0 100 50"
            preserveAspectRatio="none">
            <path d="M0,50 Q50,-20 100,50" fill="none"
              className="stroke-amber-400" strokeWidth="1.5"
              strokeDasharray="3 3" />
          </svg>
          <Sun className="absolute size-5 text-orange-500"
            style={{ left: "52%", top: "8%" }} />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Sunrise className="size-3" /> 6:12 AM
          </span>
          <span className="flex items-center gap-1">
            <Sunset className="size-3" /> 8:34 PM
          </span>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-smart-toggle",
  name: "Smart Device Toggle",
  category: "cards",
  description:
    "Smart-home device tile with an animated state pill and live status text.",
  tags: ["animated"],
  code: `@Composable
fun SmartToggleCard() {
  var on by remember { mutableStateOf(true) }
  val bg by animateColorAsState(
    if (on) Color(0xFF34C759)
    else Color(0xFFBDBDBD), label = "bg"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(
        Modifier.size(40.dp).background(
          bg.copy(alpha = 0.2f), CircleShape
        ),
        contentAlignment = Alignment.Center
      ) {
        Box(
          Modifier.size(18.dp).background(bg, CircleShape)
        )
      }
      Spacer(Modifier.width(14.dp))
      Column(Modifier.weight(1f)) {
        Text(
          "Living Room Plug",
          style = MaterialTheme.typography.titleMedium
        )
        Text(
          if (on) "On · 38W" else "Off",
          style = MaterialTheme.typography.labelMedium,
          color = MaterialTheme.colorScheme
            .onSurfaceVariant
        )
      }
      Switch(checked = on, onCheckedChange = { on = it })
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-3 p-5">
        <div className="grid size-10 place-items-center rounded-full bg-emerald-500/15">
          <Zap className="size-5 text-emerald-500" />
        </div>
        <div className="flex-1">
          <p className="font-medium">Living Room Plug</p>
          <p className="text-xs text-muted-foreground">On · 38W</p>
        </div>
        <div className="flex h-6 w-11 items-center rounded-full bg-emerald-500 px-0.5">
          <div className="ml-auto size-5 rounded-full bg-white" />
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-thermostat-dial",
  name: "Thermostat Dial",
  category: "cards",
  description:
    "Circular thermostat dial with an animated arc tracking the target temperature.",
  tags: ["animated"],
  code: `@Composable
fun ThermostatCard() {
  val target = 22f
  val sweep by animateFloatAsState(
    targetValue = (target - 10f) / 20f * 270f,
    animationSpec = tween(1100), label = "sweep"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Column(
      Modifier.padding(20.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Box(
        Modifier.size(140.dp),
        contentAlignment = Alignment.Center
      ) {
        Canvas(Modifier.fillMaxSize()) {
          drawArc(
            Color(0xFFE0E0E0), 135f, 270f, false,
            style = Stroke(16f, cap = StrokeCap.Round)
          )
          drawArc(
            Color(0xFFFF9500), 135f, sweep, false,
            style = Stroke(16f, cap = StrokeCap.Round)
          )
        }
        Column(
          horizontalAlignment =
            Alignment.CenterHorizontally
        ) {
          Text(
            "22°",
            style = MaterialTheme.typography.displaySmall
          )
          Text(
            "Heating",
            style = MaterialTheme.typography.labelMedium
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex flex-col items-center p-5">
        <div className="relative grid size-32 place-items-center">
          <svg className="size-32" viewBox="0 0 36 36"
            style={{ transform: "rotate(135deg)" }}>
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-muted" strokeWidth="3"
              strokeDasharray="71 100" strokeLinecap="round" />
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-orange-500" strokeWidth="3"
              strokeDasharray="46 100" strokeLinecap="round" />
          </svg>
          <div className="absolute text-center">
            <p className="text-3xl font-semibold">22°</p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <Flame className="size-3 text-orange-500" /> Heating
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-breathe",
  name: "Mindfulness Breathe",
  category: "cards",
  description:
    "Breathing coach card with a circle that expands and contracts on a calm loop.",
  tags: ["animated"],
  code: `@Composable
fun BreatheCard() {
  val t = rememberInfiniteTransition(label = "breathe")
  val scale by t.animateFloat(
    0.6f, 1f,
    infiniteRepeatable(
      tween(4000, easing = FastOutSlowInEasing),
      repeatMode = RepeatMode.Reverse
    ), label = "scale"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Column(
      Modifier.padding(24.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Box(
        Modifier.size(120.dp),
        contentAlignment = Alignment.Center
      ) {
        Canvas(Modifier.fillMaxSize()) {
          drawCircle(
            Color(0xFF5AC8FA).copy(alpha = 0.25f),
            radius = size.minDimension / 2 * scale
          )
          drawCircle(
            Color(0xFF5AC8FA),
            radius = size.minDimension / 3 * scale
          )
        }
      }
      Spacer(Modifier.height(16.dp))
      Text(
        if (scale > 0.8f) "Breathe in" else "Breathe out",
        style = MaterialTheme.typography.titleMedium
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex flex-col items-center p-6">
        <div className="grid size-28 place-items-center">
          <div className="size-20 rounded-full bg-sky-400/30 animate-pulse" />
          <Leaf className="absolute size-7 text-sky-500" />
        </div>
        <p className="mt-4 font-medium">Breathe in</p>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-weekly-bars",
  name: "Weekly Activity",
  category: "cards",
  description:
    "Seven-day active-minutes bar chart highlighting today with an accent bar.",
  code: `@Composable
fun WeeklyActivityCard() {
  val days = listOf("M","T","W","T","F","S","S")
  val vals = listOf(40, 65, 30, 80, 55, 90, 45)
  val today = 5
  OutlinedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Active Minutes",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(16.dp))
      Row(
        Modifier.fillMaxWidth().height(90.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.Bottom
      ) {
        vals.forEachIndexed { i, v ->
          Column(
            horizontalAlignment =
              Alignment.CenterHorizontally
          ) {
            Box(
              Modifier
                .width(16.dp)
                .height((v * 0.8).dp)
                .background(
                  if (i == today)
                    MaterialTheme.colorScheme.primary
                  else MaterialTheme.colorScheme
                    .primary.copy(alpha = 0.3f),
                  RoundedCornerShape(6.dp)
                )
            )
            Spacer(Modifier.height(6.dp))
            Text(
              days[i],
              style = MaterialTheme.typography.labelSmall
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Activity className="size-4 text-primary" /> Active Minutes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-24 items-end justify-between">
          {([["M", 40], ["T", 65], ["W", 30], ["T", 80], ["F", 55],
            ["S", 90], ["S", 45]] as const).map(([d, v], i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={"w-4 rounded-md " +
                (i === 5 ? "bg-primary" : "bg-primary/30")}
                style={{ height: v * 0.8 + "px" }} />
              <span className="text-[10px] text-muted-foreground">{d}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-weight-trend",
  name: "Weight Trend",
  category: "cards",
  description:
    "Smooth weight trend line over the month with current value and net change.",
  code: `@Composable
fun WeightTrendCard() {
  val pts = listOf(72f, 71.5f, 71.8f, 71f, 70.6f,
    70.2f, 69.8f)
  OutlinedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.Bottom
      ) {
        Text(
          "69.8 kg",
          style = MaterialTheme.typography.headlineSmall
        )
        Text(
          "-2.2 kg",
          color = Color(0xFF34C759),
          style = MaterialTheme.typography.labelLarge
        )
      }
      Spacer(Modifier.height(14.dp))
      Canvas(Modifier.fillMaxWidth().height(70.dp)) {
        val w = size.width; val h = size.height
        val mn = pts.min(); val mx = pts.max()
        val path = Path()
        pts.forEachIndexed { i, v ->
          val x = w * i / (pts.size - 1)
          val y = h - (v - mn) / (mx - mn) * h
          if (i == 0) path.moveTo(x, y)
          else path.lineTo(x, y)
        }
        drawPath(
          path, Color(0xFF5E5CE6),
          style = Stroke(3f, cap = StrokeCap.Round)
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <Gauge className="size-4 text-indigo-500" /> 69.8 kg
        </CardTitle>
        <Badge className="bg-emerald-500/15 text-emerald-600">-2.2 kg</Badge>
      </CardHeader>
      <CardContent>
        <svg className="h-16 w-full" viewBox="0 0 120 40"
          preserveAspectRatio="none">
          <polyline fill="none" className="stroke-indigo-500"
            strokeWidth="2" strokeLinecap="round"
            points="0,8 20,14 40,10 60,20 80,26 100,32 120,36" />
        </svg>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-run-distance",
  name: "Run Distance",
  category: "cards",
  description:
    "Distance goal card with an animated horizontal track and runner progress.",
  tags: ["animated"],
  code: `@Composable
fun RunDistanceCard() {
  val prog by animateFloatAsState(
    targetValue = 0.68f,
    animationSpec = tween(1200), label = "p"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Column(Modifier.padding(20.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box(
          Modifier.size(28.dp).background(
            MaterialTheme.colorScheme.primary, CircleShape
          )
        )
        Spacer(Modifier.width(10.dp))
        Text(
          "8.2 / 12 km",
          style = MaterialTheme.typography.headlineSmall
        )
      }
      Spacer(Modifier.height(16.dp))
      Box(
        Modifier.fillMaxWidth().height(10.dp).background(
          MaterialTheme.colorScheme.surfaceVariant,
          CircleShape
        )
      ) {
        Box(
          Modifier
            .fillMaxWidth(prog)
            .height(10.dp)
            .background(
              MaterialTheme.colorScheme.primary,
              CircleShape
            )
        )
      }
      Spacer(Modifier.height(8.dp))
      Text(
        "68% of weekly goal",
        style = MaterialTheme.typography.labelMedium
      )
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <Bike className="size-6 text-primary" />
          <span className="text-2xl font-semibold">8.2 / 12 km</span>
        </div>
        <div className="mt-4 h-2.5 w-full rounded-full bg-muted">
          <div className="h-2.5 rounded-full bg-primary transition-all"
            style={{ width: "68%" }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">68% of weekly goal</p>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-standing-hours",
  name: "Standing Hours",
  category: "cards",
  description:
    "Twelve-segment stand ring fills one wedge per hour the user stood up.",
  tags: ["animated"],
  code: `@Composable
fun StandingHoursCard() {
  val stood = 9
  val fill by animateFloatAsState(
    targetValue = stood.toFloat(),
    animationSpec = tween(1000), label = "fill"
  )
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(90.dp)) {
        val total = 12
        val gap = 6f
        val sweep = 360f / total - gap
        for (i in 0 until total) {
          val start = -90f + i * (360f / total)
          val c = if (i < fill) Color(0xFF50E3C2)
            else Color(0xFFE0E0E0)
          drawArc(
            c, start, sweep, false,
            style = Stroke(12f, cap = StrokeCap.Round)
          )
        }
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text(
          "Stand",
          color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
          "9 / 12 hrs",
          style = MaterialTheme.typography.headlineSmall
        )
        Text(
          "On track",
          style = MaterialTheme.typography.labelMedium
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative grid size-20 place-items-center">
          <svg className="size-20 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-muted" strokeWidth="3"
              strokeDasharray="2 5.85" />
            <circle cx="18" cy="18" r="15" fill="none"
              className="stroke-teal-400" strokeWidth="3"
              strokeDasharray="2 5.85" strokeDashoffset="0"
              style={{ strokeDasharray: "2 5.85" }} />
          </svg>
          <Timer className="absolute size-5 text-teal-400" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Stand</p>
          <p className="text-xl font-semibold">9 / 12 hrs</p>
          <p className="text-xs text-muted-foreground">On track</p>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-bulb-brightness",
  name: "Smart Bulb Brightness",
  category: "cards",
  description:
    "Dimmable bulb tile with a vertical brightness slider and animated glow.",
  tags: ["animated"],
  code: `@Composable
fun BulbBrightnessCard() {
  var level by remember { mutableFloatStateOf(0.7f) }
  val glow by animateFloatAsState(level, label = "glow")
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(64.dp)) {
        drawCircle(
          Color(0xFFFFCC00).copy(alpha = 0.15f + glow * 0.4f),
          radius = size.minDimension / 2
        )
        drawCircle(
          Color(0xFFFFCC00).copy(alpha = 0.4f + glow * 0.6f),
          radius = size.minDimension / 4
        )
      }
      Spacer(Modifier.width(18.dp))
      Column(Modifier.weight(1f)) {
        Text(
          "Bedroom Lamp",
          style = MaterialTheme.typography.titleMedium
        )
        Text(
          "\${(level * 100).toInt()}%",
          style = MaterialTheme.typography.labelMedium,
          color = MaterialTheme.colorScheme
            .onSurfaceVariant
        )
        Slider(
          value = level,
          onValueChange = { level = it }
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-4 p-5">
        <div className="grid size-14 place-items-center rounded-full bg-amber-300/30">
          <Zap className="size-6 text-amber-500 animate-pulse" />
        </div>
        <div className="flex-1">
          <p className="font-medium">Bedroom Lamp</p>
          <p className="text-xs text-muted-foreground">70%</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
            <div className="h-1.5 rounded-full bg-amber-400"
              style={{ width: "70%" }} />
          </div>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-weather-alert",
  name: "Weather Alert",
  category: "cards",
  description:
    "Severe-weather banner card with a pulsing warning icon and advisory text.",
  tags: ["animated"],
  code: `@Composable
fun WeatherAlertCard() {
  val t = rememberInfiniteTransition(label = "alert")
  val pulse by t.animateFloat(
    0.7f, 1f,
    infiniteRepeatable(
      tween(800), repeatMode = RepeatMode.Reverse
    ), label = "pulse"
  )
  Card(
    Modifier.fillMaxWidth(),
    colors = CardDefaults.cardColors(
      containerColor = Color(0xFFFFF3E0)
    )
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(Modifier.graphicsLayer { alpha = pulse }) {
        Canvas(Modifier.size(34.dp)) {
          drawCircle(Color(0xFFFF9500))
        }
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text(
          "Storm Warning",
          style = MaterialTheme.typography.titleMedium,
          color = Color(0xFFE65100)
        )
        Text(
          "Heavy rain until 9 PM. Avoid travel.",
          style = MaterialTheme.typography.bodySmall,
          color = Color(0xFFBF5600)
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-orange-300 bg-orange-50 text-orange-900 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-200">
      <CardContent className="flex items-center gap-4 p-5">
        <Bell className="size-7 shrink-0 text-orange-500 animate-pulse" />
        <div>
          <p className="font-semibold">Storm Warning</p>
          <p className="text-sm opacity-80">Heavy rain until 9 PM. Avoid travel.</p>
        </div>
      </CardContent>
    </Card>
  ),
},
{
  id: "card-health-moon-phase",
  name: "Moon Phase",
  category: "cards",
  description:
    "Tonight's lunar phase rendered with a shaded disc and illumination percent.",
  code: `@Composable
fun MoonPhaseCard() {
  val illum = 0.62f
  ElevatedCard(Modifier.fillMaxWidth()) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(72.dp)) {
        val r = size.minDimension / 2
        drawCircle(Color(0xFFECEFF1))
        val shadowW = size.width * (1f - illum)
        drawArc(
          Color(0xFF263238),
          90f, 180f, true,
          topLeft = Offset(shadowW, 0f),
          size = Size(size.width - shadowW, size.height)
        )
        drawArc(
          Color(0xFF263238),
          90f, -180f, true,
          size = Size(shadowW, size.height)
        )
      }
      Spacer(Modifier.width(20.dp))
      Column {
        Text(
          "Waxing Gibbous",
          style = MaterialTheme.typography.titleMedium
        )
        Text(
          "62% illuminated",
          style = MaterialTheme.typography.labelMedium,
          color = MaterialTheme.colorScheme
            .onSurfaceVariant
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-72 mx-auto border-border bg-card text-card-foreground">
      <CardContent className="flex items-center gap-5 p-5">
        <div className="relative grid size-16 place-items-center overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="absolute right-0 h-full w-2/5 bg-slate-800 dark:bg-slate-950" />
          <Moon className="absolute size-6 text-slate-500/40" />
        </div>
        <div>
          <p className="font-medium">Waxing Gibbous</p>
          <p className="text-xs text-muted-foreground">62% illuminated</p>
        </div>
      </CardContent>
    </Card>
  ),
},

{
  id: "card-shop-add-to-cart-morph",
  name: "Add To Cart Morph",
  category: "cards",
  description:
    "Product card whose button morphs into a check when item is added.",
  tags: ["animated"],
  code: `@Composable
fun AddToCartMorphCard() {
  var added by remember { mutableStateOf(false) }
  val width by animateDpAsState(if (added) 56.dp else 160.dp)
  ElevatedCard(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(20.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Box(
        Modifier
          .fillMaxWidth()
          .height(120.dp)
          .clip(RoundedCornerShape(14.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Spacer(Modifier.height(12.dp))
      Text("Wireless Buds", style = MaterialTheme.typography.titleMedium)
      Text("$129.00", color = MaterialTheme.colorScheme.primary)
      Spacer(Modifier.height(12.dp))
      Button(
        onClick = { added = !added },
        modifier = Modifier.width(width).height(48.dp),
        shape = RoundedCornerShape(24.dp)
      ) {
        AnimatedContent(added, label = "cart") { done ->
          if (done) Icon(Icons.Default.Check, null)
          else Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(Icons.Default.ShoppingCart, null)
            Spacer(Modifier.width(8.dp))
            Text("Add to cart")
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <div className="h-28 w-full rounded-t-2xl bg-muted" />
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <div className="font-semibold text-foreground">Canvas Tote</div>
          <div className="text-sm text-muted-foreground">$34</div>
        </div>
        <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
          <ShoppingCart className="size-4" />
        </span>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-price-rating-stars",
  name: "Price Rating Stars",
  category: "cards",
  description:
    "Product summary with animated star rating fill and bold price.",
  tags: ["animated"],
  code: `@Composable
fun PriceRatingCard() {
  val filled = 4
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Box(
        Modifier
          .fillMaxWidth()
          .height(110.dp)
          .clip(RoundedCornerShape(12.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Spacer(Modifier.height(10.dp))
      Text("Leather Wallet", style = MaterialTheme.typography.titleMedium)
      Row {
        repeat(5) { i ->
          val tint = if (i < filled)
            MaterialTheme.colorScheme.primary
          else MaterialTheme.colorScheme.outline
          Icon(Icons.Default.Star, null, tint = tint,
            modifier = Modifier.size(16.dp))
        }
      }
      Spacer(Modifier.height(8.dp))
      Text("$59.00", style = MaterialTheme.typography.headlineSmall)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <div className="h-28 w-full rounded-t-2xl bg-muted" />
      <CardContent className="p-4">
        <div className="font-semibold text-foreground">Aero Runner</div>
        <div className="mt-1 flex items-center gap-0.5 text-amber-500">
          <Star className="size-3.5 fill-amber-500" />
          <Star className="size-3.5 fill-amber-500" />
          <Star className="size-3.5 fill-amber-500" />
          <Star className="size-3.5 fill-amber-500" />
          <Star className="size-3.5 text-muted-foreground/40" />
          <span className="ml-1 text-xs text-muted-foreground">4.0</span>
        </div>
        <div className="mt-2 text-xl font-bold text-foreground">$129</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-discount-flame",
  name: "Discount Flame Badge",
  category: "cards",
  description:
    "Hot-deal card with a pulsing flame discount badge over the image.",
  tags: ["animated"],
  code: `@Composable
fun DiscountFlameCard() {
  val pulse = rememberInfiniteTransition(label = "p")
  val scale by pulse.animateFloat(
    1f, 1.15f,
    infiniteRepeatable(tween(700), RepeatMode.Reverse),
    label = "s"
  )
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Box {
      Box(
        Modifier
          .fillMaxWidth()
          .height(140.dp)
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Surface(
        color = MaterialTheme.colorScheme.errorContainer,
        shape = RoundedCornerShape(12.dp),
        modifier = Modifier
          .padding(10.dp)
          .scale(scale)
      ) {
        Row(Modifier.padding(6.dp),
          verticalAlignment = Alignment.CenterVertically) {
          Icon(Icons.Default.Whatshot, null,
            modifier = Modifier.size(14.dp))
          Text(" -40%", style = MaterialTheme.typography.labelMedium)
        }
      }
    }
    Text("Hot Sneakers", Modifier.padding(16.dp),
      style = MaterialTheme.typography.titleMedium)
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl overflow-hidden">
        <div className="relative">
          <div className="h-32 w-full bg-muted" />
          <Badge className="absolute left-2 top-2 gap-1 animate-pulse
            bg-red-500 text-white">
            <Flame className="size-3.5" /> -40%
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="font-semibold text-foreground">
            Hot Sneakers
          </div>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-wishlist-heart-burst",
  name: "Wishlist Heart Burst",
  category: "cards",
  description:
    "Wishlist card with a heart that bursts and fills when toggled.",
  tags: ["animated"],
  code: `@Composable
fun WishlistHeartCard() {
  var liked by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    if (liked) 1.3f else 1f,
    spring(Spring.DampingRatioMediumBouncy)
  )
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Box {
      Box(
        Modifier
          .fillMaxWidth()
          .height(140.dp)
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      IconButton(
        onClick = { liked = !liked },
        modifier = Modifier.align(Alignment.TopEnd).scale(scale)
      ) {
        Icon(
          if (liked) Icons.Filled.Favorite
          else Icons.Outlined.FavoriteBorder,
          null,
          tint = if (liked) MaterialTheme.colorScheme.error
          else MaterialTheme.colorScheme.onSurface
        )
      }
    }
    Text("Silk Scarf", Modifier.padding(16.dp),
      style = MaterialTheme.typography.titleMedium)
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <div className="relative h-28 w-full rounded-t-2xl bg-muted">
        <span className="absolute right-2 top-2 grid size-8 place-items-center rounded-full bg-background/90 text-rose-500 shadow">
          <Heart className="size-4 fill-rose-500" />
        </span>
      </div>
      <CardContent className="p-4">
        <div className="font-semibold text-foreground">Wool Throw</div>
        <div className="mt-1 text-xl font-bold text-foreground">$59</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-quantity-stepper",
  name: "Quantity Stepper",
  category: "cards",
  description:
    "Cart line card with an animated plus minus quantity stepper control.",
  tags: ["animated"],
  code: `@Composable
fun QuantityStepperCard() {
  var qty by remember { mutableStateOf(1) }
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Row(
      Modifier.padding(14.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Box(
        Modifier
          .size(56.dp)
          .clip(RoundedCornerShape(12.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Spacer(Modifier.width(12.dp))
      Column(Modifier.weight(1f)) {
        Text("Coffee Mug", style = MaterialTheme.typography.titleSmall)
        Text("$18.00", color = MaterialTheme.colorScheme.primary)
      }
      OutlinedIconButton(onClick = { if (qty > 1) qty-- }) {
        Icon(Icons.Default.Remove, null)
      }
      AnimatedContent(qty, label = "q") { Text("$it",
        Modifier.padding(horizontal = 8.dp)) }
      OutlinedIconButton(onClick = { qty++ }) {
        Icon(Icons.Default.Add, null)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="flex items-center justify-between p-5">
        <div>
          <div className="font-semibold text-foreground">Espresso Beans</div>
          <div className="text-sm text-muted-foreground">$18</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border text-foreground"><Minus className="size-4" /></span>
          <span className="w-4 text-center font-semibold text-foreground">2</span>
          <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"><Plus className="size-4" /></span>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-stock-countdown",
  name: "Stock Countdown",
  category: "cards",
  description:
    "Low-stock card with a ticking countdown timer and depleting bar.",
  tags: ["animated"],
  code: `@Composable
fun StockCountdownCard() {
  var left by remember { mutableStateOf(7) }
  LaunchedEffect(Unit) {
    while (left > 0) { delay(1000); left-- }
  }
  val progress by animateFloatAsState(left / 10f, label = "p")
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Box(
        Modifier
          .fillMaxWidth()
          .height(110.dp)
          .clip(RoundedCornerShape(12.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Spacer(Modifier.height(10.dp))
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Timer, null, modifier = Modifier.size(16.dp))
        Text("  Only $left left!",
          style = MaterialTheme.typography.labelLarge)
      }
      Spacer(Modifier.height(8.dp))
      LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier.fillMaxWidth()
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-rose-500"><Flame className="size-4" /><span className="text-xs font-semibold uppercase">Selling fast</span></div>
        <div className="mt-2 font-semibold text-foreground">Only 3 left in stock</div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-1/5 rounded-full bg-rose-500" /></div>
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3.5" /> Ends in 02:14:07</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-pricing-tier-highlight",
  name: "Pricing Tier Highlight",
  category: "cards",
  description:
    "Pricing plan card with a highlighted recommended tier and crown badge.",
  code: `@Composable
fun PricingTierCard() {
  ElevatedCard(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(20.dp),
    colors = CardDefaults.elevatedCardColors(
      containerColor = MaterialTheme.colorScheme.primaryContainer
    )
  ) {
    Column(
      Modifier.padding(20.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Star, null, modifier = Modifier.size(16.dp))
        Text("  PRO", style = MaterialTheme.typography.labelLarge)
      }
      Text("$24", style = MaterialTheme.typography.displaySmall)
      Text("per month",
        style = MaterialTheme.typography.bodySmall)
      Spacer(Modifier.height(12.dp))
      listOf("Unlimited", "Priority", "Analytics").forEach {
        Row(Modifier.padding(vertical = 2.dp)) {
          Icon(Icons.Default.Check, null,
            modifier = Modifier.size(16.dp))
          Text("  $it")
        }
      }
      Spacer(Modifier.height(12.dp))
      Button(onClick = {}, Modifier.fillMaxWidth()) {
        Text("Choose plan")
      }
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-60 rounded-2xl bg-primary/10 border-primary">
        <CardContent className="p-5 flex flex-col items-center">
          <Badge className="gap-1">
            <Crown className="size-3.5" /> PRO
          </Badge>
          <div className="mt-2 text-4xl font-bold text-foreground">
            $24
          </div>
          <div className="text-xs text-muted-foreground">per month</div>
          <ul className="mt-3 space-y-1 text-sm text-foreground">
            {["Unlimited", "Priority", "Analytics"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="size-4 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <Button className="mt-4 w-full">Choose plan</Button>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-bundle-combo",
  name: "Bundle Combo",
  category: "cards",
  description:
    "Bundle card stacking three product thumbs with a combined combo price.",
  code: `@Composable
fun BundleComboCard() {
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Inventory2, null)
        Text("  Starter Bundle",
          style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(12.dp))
      Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        repeat(3) {
          Box(
            Modifier
              .size(64.dp)
              .clip(RoundedCornerShape(12.dp))
              .background(MaterialTheme.colorScheme.surfaceVariant)
          )
        }
      }
      Spacer(Modifier.height(12.dp))
      Row(verticalAlignment = Alignment.Bottom) {
        Text("$74", style = MaterialTheme.typography.headlineSmall)
        Spacer(Modifier.width(8.dp))
        Text("$96", textDecoration = TextDecoration.LineThrough,
          color = MaterialTheme.colorScheme.outline)
      }
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 font-semibold
            text-foreground">
            <Package className="size-4" /> Starter Bundle
          </div>
          <div className="mt-3 flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="size-16 rounded-xl bg-muted" />
            ))}
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-2xl font-bold text-foreground">$74</span>
            <span className="text-muted-foreground line-through">$96</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-free-shipping-progress",
  name: "Free Shipping Progress",
  category: "cards",
  description:
    "Cart card showing animated progress toward unlocking free shipping.",
  tags: ["animated"],
  code: `@Composable
fun FreeShippingCard() {
  val target = 50f
  var spent by remember { mutableStateOf(34f) }
  val progress by animateFloatAsState(spent / target, label = "p")
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.LocalShipping, null)
        Text("  $\${'$'}{(target - spent).toInt()} to free shipping",
          style = MaterialTheme.typography.titleSmall)
      }
      Spacer(Modifier.height(10.dp))
      LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier.fillMaxWidth().height(8.dp),
        strokeCap = StrokeCap.Round
      )
      Spacer(Modifier.height(10.dp))
      TextButton(onClick = { spent += 8 }) { Text("Add more") }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-foreground"><Truck className="size-4 text-emerald-500" /><span className="text-sm font-medium">$8 away from free shipping</span></div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-3/4 rounded-full bg-emerald-500" /></div>
        <div className="mt-1 text-xs text-muted-foreground">$42 / $50</div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-coupon-voucher",
  name: "Coupon Voucher",
  category: "cards",
  description:
    "Voucher card with notched ticket edges, dashed divider and copy code.",
  tags: ["animated"],
  code: `@Composable
fun CouponVoucherCard() {
  var copied by remember { mutableStateOf(false) }
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp),
    colors = CardDefaults.cardColors(
      containerColor = MaterialTheme.colorScheme.tertiaryContainer
    )
  ) {
    Row(
      Modifier.padding(16.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Column(Modifier.weight(1f)) {
        Row {
          Icon(Icons.Default.Sell, null, modifier = Modifier.size(18.dp))
          Text("  SAVE20",
            style = MaterialTheme.typography.titleLarge)
        }
        Text("20% off any order",
          style = MaterialTheme.typography.bodySmall)
      }
      FilledTonalButton(onClick = { copied = true }) {
        AnimatedContent(copied, label = "c") {
          Text(if (it) "Copied" else "Copy")
        }
      }
    }
  }
}`,
  preview: (
    <div className="mx-auto flex w-64 overflow-hidden rounded-2xl border border-dashed">
      <div className="flex flex-col items-center justify-center bg-primary px-5 py-6 text-primary-foreground">
        <Tag className="size-5" />
        <div className="mt-1 text-lg font-bold">25%</div>
      </div>
      <div className="flex flex-1 flex-col justify-center p-4">
        <div className="font-semibold text-foreground">SAVE25</div>
        <div className="text-xs text-muted-foreground">Orders over $50</div>
      </div>
    </div>
  )
},
{
  id: "card-shop-flash-sale-timer",
  name: "Flash Sale Timer",
  category: "cards",
  description:
    "Flash-sale card with a live countdown in hours minutes and seconds.",
  tags: ["animated"],
  code: `@Composable
fun FlashSaleTimerCard() {
  var secs by remember { mutableStateOf(3 * 3600 + 25 * 60 + 9) }
  LaunchedEffect(Unit) {
    while (secs > 0) { delay(1000); secs-- }
  }
  val h = secs / 3600; val m = (secs % 3600) / 60; val s = secs % 60
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Bolt, null,
          tint = MaterialTheme.colorScheme.error)
        Text("  Flash Sale",
          style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(12.dp))
      Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        listOf(h, m, s).forEach { v ->
          Surface(
            color = MaterialTheme.colorScheme.surfaceVariant,
            shape = RoundedCornerShape(10.dp)
          ) {
            Text("%02d".format(v),
              Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
              style = MaterialTheme.typography.titleLarge)
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-amber-500"><Timer className="size-4" /><span className="text-xs font-bold uppercase">Flash sale</span></div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-lg bg-foreground px-2.5 py-1 font-mono text-sm font-bold text-background">02</span>
          <span className="rounded-lg bg-foreground px-2.5 py-1 font-mono text-sm font-bold text-background">11</span>
          <span className="rounded-lg bg-foreground px-2.5 py-1 font-mono text-sm font-bold text-background">47</span>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-plan-comparison",
  name: "Plan Comparison",
  category: "cards",
  description:
    "Two-column plan card comparing features with check and percent badges.",
  code: `@Composable
fun PlanComparisonCard() {
  Card(
    modifier = Modifier.width(280.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Row(Modifier.padding(16.dp)) {
      listOf("Basic" to "$9", "Plus" to "$19").forEachIndexed { i, p ->
        Column(
          Modifier.weight(1f).padding(8.dp),
          horizontalAlignment = Alignment.CenterHorizontally
        ) {
          Text(p.first, style = MaterialTheme.typography.titleSmall)
          Text(p.second, style = MaterialTheme.typography.headlineSmall)
          Spacer(Modifier.height(8.dp))
          repeat(if (i == 0) 2 else 4) {
            Icon(Icons.Default.CheckCircle, null,
              modifier = Modifier.size(16.dp).padding(2.dp))
          }
        }
        if (i == 0) VerticalDivider()
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="grid grid-cols-2 gap-2 p-4">
        <div className="rounded-xl border p-3">
          <div className="text-xs text-muted-foreground">Basic</div>
          <div className="text-lg font-bold text-foreground">$9</div>
        </div>
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-3">
          <div className="flex items-center gap-1 text-xs text-primary"><Crown className="size-3" /> Pro</div>
          <div className="text-lg font-bold text-foreground">$19</div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-carousel-dots",
  name: "Product Carousel Dots",
  category: "cards",
  description:
    "Product card with a swipeable image carousel and animated page dots.",
  tags: ["animated"],
  code: `@Composable
fun CarouselDotsCard() {
  val pager = rememberPagerState { 4 }
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column {
      HorizontalPager(pager, Modifier.height(140.dp)) {
        Box(
          Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.surfaceVariant)
        )
      }
      Row(
        Modifier.fillMaxWidth().padding(12.dp),
        horizontalArrangement = Arrangement.Center
      ) {
        repeat(4) { i ->
          val w by animateDpAsState(
            if (i == pager.currentPage) 18.dp else 6.dp, label = "w")
          Box(
            Modifier
              .padding(3.dp)
              .height(6.dp)
              .width(w)
              .clip(CircleShape)
              .background(
                if (i == pager.currentPage)
                  MaterialTheme.colorScheme.primary
                else MaterialTheme.colorScheme.outline
              )
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <div className="h-32 w-full rounded-t-2xl bg-muted" />
      <div className="flex items-center justify-center gap-1.5 py-3">
        <span className="size-1.5 rounded-full bg-primary" />
        <span className="size-1.5 rounded-full bg-muted-foreground/30" />
        <span className="size-1.5 rounded-full bg-muted-foreground/30" />
      </div>
    </Card>
  )
},
{
  id: "card-shop-sold-out-overlay",
  name: "Sold Out Overlay",
  category: "cards",
  description:
    "Product card dimmed by a sold-out overlay with a notify-me action.",
  code: `@Composable
fun SoldOutCard() {
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Box {
      Box(
        Modifier
          .fillMaxWidth()
          .height(140.dp)
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Box(
        Modifier
          .matchParentSize()
          .background(Color.Black.copy(alpha = 0.45f)),
        contentAlignment = Alignment.Center
      ) {
        Surface(
          color = MaterialTheme.colorScheme.surface,
          shape = RoundedCornerShape(8.dp)
        ) {
          Text("SOLD OUT",
            Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
            style = MaterialTheme.typography.labelLarge)
        }
      }
    }
    Column(Modifier.padding(16.dp)) {
      Text("Canvas Tote", style = MaterialTheme.typography.titleMedium)
      OutlinedButton(onClick = {}, Modifier.fillMaxWidth()) {
        Icon(Icons.Default.Notifications, null,
          modifier = Modifier.size(16.dp))
        Text("  Notify me")
      }
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl overflow-hidden">
        <div className="relative h-32 w-full bg-muted">
          <div className="absolute inset-0 flex items-center justify-center
            bg-black/45">
            <span className="rounded-md bg-background px-3 py-1 text-xs
              font-semibold text-foreground">
              SOLD OUT
            </span>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="font-semibold text-foreground">Canvas Tote</div>
          <Button variant="outline" className="mt-2 w-full gap-1">
            <Eye className="size-4" /> Notify me
          </Button>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-new-arrival-ribbon",
  name: "New Arrival Ribbon",
  category: "cards",
  description:
    "Product card with a corner ribbon flagging a fresh new arrival.",
  code: `@Composable
fun NewArrivalCard() {
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Box {
      Box(
        Modifier
          .fillMaxWidth()
          .height(140.dp)
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Surface(
        color = MaterialTheme.colorScheme.primary,
        modifier = Modifier
          .align(Alignment.TopStart)
          .offset((-20).dp, 16.dp)
          .rotate(-45f)
      ) {
        Row(Modifier.padding(horizontal = 28.dp, vertical = 4.dp)) {
          Icon(Icons.Default.AutoAwesome, null,
            modifier = Modifier.size(12.dp),
            tint = MaterialTheme.colorScheme.onPrimary)
          Text(" NEW", color = MaterialTheme.colorScheme.onPrimary,
            style = MaterialTheme.typography.labelSmall)
        }
      }
    }
    Text("Linen Shirt", Modifier.padding(16.dp),
      style = MaterialTheme.typography.titleMedium)
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl overflow-hidden">
        <div className="relative h-32 w-full bg-muted">
          <div className="absolute -left-6 top-3 rotate-[-45deg]
            bg-primary px-7 py-0.5">
            <span className="flex items-center gap-0.5 text-[10px]
              font-bold text-primary-foreground">
              <Sparkles className="size-3" /> NEW
            </span>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="font-semibold text-foreground">Linen Shirt</div>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-cashback-promo",
  name: "Cashback Promo",
  category: "cards",
  description:
    "Promo card highlighting percent cashback with an animated coin sparkle.",
  tags: ["animated"],
  code: `@Composable
fun CashbackPromoCard() {
  val shimmer = rememberInfiniteTransition(label = "s")
  val a by shimmer.animateFloat(0.4f, 1f,
    infiniteRepeatable(tween(900), RepeatMode.Reverse), label = "a")
  ElevatedCard(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(20.dp),
    colors = CardDefaults.elevatedCardColors(
      containerColor = MaterialTheme.colorScheme.secondaryContainer
    )
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Icon(Icons.Default.Percent, null,
        modifier = Modifier.size(40.dp).alpha(a))
      Spacer(Modifier.width(16.dp))
      Column {
        Text("5% Cashback",
          style = MaterialTheme.typography.titleLarge)
        Text("on every order this week",
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl bg-secondary">
        <CardContent className="p-5 flex items-center gap-4">
          <Percent className="size-10 text-primary animate-pulse" />
          <div>
            <div className="text-lg font-bold text-foreground">
              5% Cashback
            </div>
            <div className="text-xs text-muted-foreground">
              on every order this week
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-gift-card",
  name: "Gift Card",
  category: "cards",
  description:
    "Gift card with a glossy gradient face, balance value and gift icon.",
  code: `@Composable
fun GiftCardTile() {
  Card(
    modifier = Modifier.width(260.dp).height(150.dp),
    shape = RoundedCornerShape(18.dp),
    colors = CardDefaults.cardColors(
      containerColor = MaterialTheme.colorScheme.primary
    )
  ) {
    Column(
      Modifier.fillMaxSize().padding(20.dp),
      verticalArrangement = Arrangement.SpaceBetween
    ) {
      Row(Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween) {
        Text("GIFT CARD",
          color = MaterialTheme.colorScheme.onPrimary,
          style = MaterialTheme.typography.labelLarge)
        Icon(Icons.Default.CardGiftcard, null,
          tint = MaterialTheme.colorScheme.onPrimary)
      }
      Text("$50",
        color = MaterialTheme.colorScheme.onPrimary,
        style = MaterialTheme.typography.displaySmall)
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 h-36 rounded-2xl bg-gradient-to-br
        from-primary to-primary/70 border-0">
        <CardContent className="p-5 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider
              text-primary-foreground">
              GIFT CARD
            </span>
            <Gift className="size-5 text-primary-foreground" />
          </div>
          <div className="text-4xl font-bold text-primary-foreground">
            $50
          </div>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-subscription-plan",
  name: "Subscription Plan",
  category: "cards",
  description:
    "Subscription card with a billing toggle and recurring delivery note.",
  tags: ["animated"],
  code: `@Composable
fun SubscriptionPlanCard() {
  var yearly by remember { mutableStateOf(false) }
  val price by animateIntAsState(if (yearly) 190 else 19, label = "p")
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Refresh, null,
          modifier = Modifier.size(18.dp))
        Text("  Coffee Sub",
          style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(8.dp))
      Text("$$price", style = MaterialTheme.typography.displaySmall)
      Text(if (yearly) "/year" else "/month",
        style = MaterialTheme.typography.bodySmall)
      Spacer(Modifier.height(12.dp))
      Row(verticalAlignment = Alignment.CenterVertically) {
        Switch(yearly, { yearly = it })
        Text("  Bill yearly")
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <Package className="size-4" /> Coffee Sub
        </div>
        <div className="mt-2 text-4xl font-bold text-foreground">$190</div>
        <div className="text-xs text-muted-foreground">/year</div>
        <div className="mt-3 flex items-center gap-2 text-sm text-foreground">
          <span className="h-5 w-9 rounded-full bg-primary">
            <span className="block size-4 mt-0.5 translate-x-4 rounded-full bg-background" />
          </span>
          Bill yearly
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-rating-distribution",
  name: "Rating Distribution",
  category: "cards",
  description:
    "Reviews card with average score and animated five-star histogram bars.",
  tags: ["animated"],
  code: `@Composable
fun RatingDistributionCard() {
  val bars = listOf(0.7f, 0.5f, 0.2f, 0.1f, 0.05f)
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Row(Modifier.padding(16.dp)) {
      Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text("4.6", style = MaterialTheme.typography.displaySmall)
        Row {
          repeat(5) {
            Icon(Icons.Default.Star, null,
              modifier = Modifier.size(12.dp))
          }
        }
      }
      Spacer(Modifier.width(16.dp))
      Column(Modifier.weight(1f)) {
        bars.forEachIndexed { i, frac ->
          val w by animateFloatAsState(frac, tween(600), label = "b$i")
          Row(verticalAlignment = Alignment.CenterVertically) {
            Text("\${'$'}{5 - i}",
              style = MaterialTheme.typography.labelSmall)
            Spacer(Modifier.width(6.dp))
            LinearProgressIndicator(
              progress = { w },
              modifier = Modifier.weight(1f).height(6.dp)
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="flex gap-4 p-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-foreground">4.6</div>
          <div className="flex text-amber-500">
            <Star className="size-3 fill-amber-500" />
            <Star className="size-3 fill-amber-500" />
            <Star className="size-3 fill-amber-500" />
            <Star className="size-3 fill-amber-500" />
            <Star className="size-3 fill-amber-500" />
          </div>
        </div>
        <div className="flex-1 space-y-1 pt-1">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-[70%] rounded-full bg-amber-500" /></div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-[50%] rounded-full bg-amber-500" /></div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-[20%] rounded-full bg-amber-500" /></div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-[10%] rounded-full bg-amber-500" /></div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted"><div className="h-full w-[5%] rounded-full bg-amber-500" /></div>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-size-selector",
  name: "Size Selector Chips",
  category: "cards",
  description:
    "Product card with selectable size chips that animate on active pick.",
  tags: ["animated"],
  code: `@Composable
fun SizeSelectorCard() {
  var sel by remember { mutableStateOf("M") }
  val sizes = listOf("S", "M", "L", "XL")
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Text("Running Tee", style = MaterialTheme.typography.titleMedium)
      Text("Select size",
        style = MaterialTheme.typography.bodySmall)
      Spacer(Modifier.height(10.dp))
      Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        sizes.forEach { s ->
          val active = s == sel
          FilterChip(
            selected = active,
            onClick = { sel = s },
            label = { Text(s) }
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5">
        <div className="text-sm font-medium text-foreground">Select size</div>
        <div className="mt-3 flex gap-2">
          <span className="grid size-9 place-items-center rounded-lg border border-input text-sm font-medium text-foreground">S</span>
          <span className="grid size-9 place-items-center rounded-lg border border-primary bg-primary text-sm font-medium text-primary-foreground">M</span>
          <span className="grid size-9 place-items-center rounded-lg border border-input text-sm font-medium text-foreground">L</span>
          <span className="grid size-9 place-items-center rounded-lg border border-input text-sm font-medium text-foreground">XL</span>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-color-swatch-picker",
  name: "Color Swatch Picker",
  category: "cards",
  description:
    "Product card with circular color swatches and an animated active ring.",
  tags: ["animated"],
  code: `@Composable
fun ColorSwatchCard() {
  val colors = listOf(
    Color(0xFFEF4444), Color(0xFF3B82F6),
    Color(0xFF10B981), Color(0xFFF59E0B)
  )
  var sel by remember { mutableStateOf(0) }
  Card(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Box(
        Modifier
          .fillMaxWidth()
          .height(110.dp)
          .clip(RoundedCornerShape(12.dp))
          .background(colors[sel].copy(alpha = 0.25f))
      )
      Spacer(Modifier.height(12.dp))
      Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        colors.forEachIndexed { i, c ->
          val ring by animateDpAsState(
            if (i == sel) 3.dp else 0.dp, label = "r")
          Box(
            Modifier
              .size(28.dp)
              .border(ring, MaterialTheme.colorScheme.onSurface,
                CircleShape)
              .padding(4.dp)
              .clip(CircleShape)
              .background(c)
              .clickable { sel = i }
          )
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5">
        <div className="text-sm font-medium text-foreground">Color</div>
        <div className="mt-3 flex gap-3">
          <span className="size-7 rounded-full bg-rose-500 ring-2 ring-foreground ring-offset-2 ring-offset-background" />
          <span className="size-7 rounded-full bg-sky-500" />
          <span className="size-7 rounded-full bg-emerald-500" />
          <span className="size-7 rounded-full bg-amber-500" />
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-order-summary",
  name: "Order Summary",
  category: "cards",
  description:
    "Checkout summary card listing line items, discount and grand total.",
  code: `@Composable
fun OrderSummaryCard() {
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Text("Order Summary",
        style = MaterialTheme.typography.titleMedium)
      Spacer(Modifier.height(12.dp))
      listOf(
        "Subtotal" to "$84.00",
        "Shipping" to "$5.00",
        "Discount" to "-$10.00"
      ).forEach { (k, v) ->
        Row(Modifier.fillMaxWidth().padding(vertical = 3.dp),
          horizontalArrangement = Arrangement.SpaceBetween) {
          Text(k, color = MaterialTheme.colorScheme.onSurfaceVariant)
          Text(v)
        }
      }
      HorizontalDivider(Modifier.padding(vertical = 8.dp))
      Row(Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween) {
        Text("Total", style = MaterialTheme.typography.titleMedium)
        Text("$79.00", style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(12.dp))
      Button(onClick = {}, Modifier.fillMaxWidth()) {
        Icon(Icons.Default.CreditCard, null,
          modifier = Modifier.size(16.dp))
        Text("  Checkout")
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto rounded-2xl">
      <CardContent className="p-5 text-sm">
        <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>$72.00</span></div>
        <div className="mt-1 flex justify-between text-muted-foreground"><span>Shipping</span><span>$5.00</span></div>
        <div className="mt-1 flex justify-between text-muted-foreground"><span>Tax</span><span>$6.20</span></div>
        <div className="my-3 border-t" />
        <div className="flex justify-between font-bold text-foreground"><span>Total</span><span>$83.20</span></div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-shop-cart-preview",
  name: "Cart Preview",
  category: "cards",
  description:
    "Mini cart popover card with item thumbnails and animated count badge.",
  tags: ["animated"],
  code: `@Composable
fun CartPreviewCard() {
  var count by remember { mutableStateOf(3) }
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box {
          Icon(Icons.Default.ShoppingCart, null)
          Badge(Modifier.align(Alignment.TopEnd)) { Text("$count") }
        }
        Spacer(Modifier.width(8.dp))
        Text("Your Cart",
          style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(12.dp))
      repeat(2) {
        Row(Modifier.padding(vertical = 4.dp),
          verticalAlignment = Alignment.CenterVertically) {
          Box(
            Modifier.size(40.dp).clip(RoundedCornerShape(8.dp))
              .background(MaterialTheme.colorScheme.surfaceVariant)
          )
          Spacer(Modifier.width(10.dp))
          Text("Item \${'$'}{it + 1}", Modifier.weight(1f))
          Text("$24")
        }
      }
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <ShoppingCart className="size-5 text-foreground" />
              <span className="absolute -right-1.5 -top-1.5 flex size-4
                items-center justify-center rounded-full bg-primary
                text-[10px] text-primary-foreground animate-pulse">
                3
              </span>
            </div>
            <span className="font-semibold text-foreground">Your Cart</span>
          </div>
          <div className="mt-3 space-y-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="size-10 rounded-lg bg-muted" />
                <span className="flex-1 text-sm text-foreground">
                  Item {i}
                </span>
                <span className="text-sm text-foreground">$24</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-limited-edition-gem",
  name: "Limited Edition Gem",
  category: "cards",
  description:
    "Premium product card with a shimmering gem accent and limited tag.",
  tags: ["animated"],
  code: `@Composable
fun LimitedEditionCard() {
  val shine = rememberInfiniteTransition(label = "s")
  val rot by shine.animateFloat(0f, 360f,
    infiniteRepeatable(tween(4000), RepeatMode.Restart), label = "r")
  OutlinedCard(
    modifier = Modifier.width(240.dp),
    shape = RoundedCornerShape(18.dp)
  ) {
    Column(Modifier.padding(16.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.Diamond, null,
          modifier = Modifier.size(18.dp).rotate(rot),
          tint = MaterialTheme.colorScheme.primary)
        Text("  Limited Edition",
          style = MaterialTheme.typography.labelLarge)
      }
      Spacer(Modifier.height(10.dp))
      Box(
        Modifier
          .fillMaxWidth()
          .height(120.dp)
          .clip(RoundedCornerShape(12.dp))
          .background(MaterialTheme.colorScheme.surfaceVariant)
      )
      Spacer(Modifier.height(10.dp))
      Text("Aurora Watch",
        style = MaterialTheme.typography.titleMedium)
      Text("$420", color = MaterialTheme.colorScheme.primary)
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl border-primary/40">
        <CardContent className="p-4">
          <div className="flex items-center gap-1 text-xs font-semibold
            text-foreground">
            <Gem className="size-4 text-primary animate-[spin_4s_linear_
              infinite]" />
            Limited Edition
          </div>
          <div className="mt-2 h-28 w-full rounded-xl bg-muted" />
          <div className="mt-2 font-semibold text-foreground">
            Aurora Watch
          </div>
          <div className="text-primary font-medium">$420</div>
        </CardContent>
      </Card>
    </div>
  )
},
{
  id: "card-shop-loyalty-tier",
  name: "Loyalty Tier",
  category: "cards",
  description:
    "Loyalty card showing tier crest, points balance and progress to next.",
  tags: ["animated"],
  code: `@Composable
fun LoyaltyTierCard() {
  val progress by animateFloatAsState(0.72f, tween(900), label = "p")
  Card(
    modifier = Modifier.width(260.dp),
    shape = RoundedCornerShape(18.dp),
    colors = CardDefaults.cardColors(
      containerColor = MaterialTheme.colorScheme.tertiaryContainer
    )
  ) {
    Column(Modifier.padding(18.dp)) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(Icons.Default.WorkspacePremium, null,
          modifier = Modifier.size(28.dp))
        Spacer(Modifier.width(10.dp))
        Column {
          Text("Gold Member",
            style = MaterialTheme.typography.titleMedium)
          Text("1,440 pts",
            style = MaterialTheme.typography.bodySmall)
        }
      }
      Spacer(Modifier.height(14.dp))
      LinearProgressIndicator(
        progress = { progress },
        modifier = Modifier.fillMaxWidth().height(8.dp),
        strokeCap = StrokeCap.Round
      )
      Spacer(Modifier.height(6.dp))
      Text("560 pts to Platinum",
        style = MaterialTheme.typography.labelSmall)
    }
  }
}`,
  preview: (
    <div className="flex items-center justify-center p-6 bg-background">
      <Card className="w-64 rounded-2xl bg-accent">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Award className="size-7 text-primary" />
            <div>
              <div className="font-semibold text-foreground">
                Gold Member
              </div>
              <div className="text-xs text-muted-foreground">1,440 pts</div>
            </div>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-primary transition-all
                duration-700"
              style={{ width: "72%" }}
            />
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            560 pts to Platinum
          </div>
        </CardContent>
      </Card>
    </div>
  )
},

{
  id: "card-status-toast-success",
  name: "Success Toast",
  category: "cards",
  description: "A success toast that slides in from the edge with a check.",
  tags: ["animated"],
  code: `@Composable
fun SuccessToast(visible: Boolean) {
    AnimatedVisibility(
        visible = visible,
        enter = slideInHorizontally { it } + fadeIn(),
        exit = slideOutHorizontally { it } + fadeOut()
    ) {
        ElevatedCard(
            shape = RoundedCornerShape(14.dp),
            modifier = Modifier.padding(12.dp)
        ) {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                Icon(
                    Icons.Rounded.CheckCircle,
                    contentDescription = null,
                    tint = Color(0xFF22C55E)
                )
                Column {
                    Text("Saved", style = MaterialTheme.typography.titleSmall)
                    Text(
                        "Your changes are live.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto border-l-4 border-l-emerald-500 shadow-lg animate-in slide-in-from-right-6 fade-in duration-500">
  <CardContent className="flex items-center gap-3 p-4">
    <CheckCircle2 className="size-5 text-emerald-500" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">Saved</span>
      <span className="text-xs text-muted-foreground">Your changes are live.</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-error-alert",
  name: "Error Alert",
  category: "cards",
  description: "An error alert that shakes briefly to draw urgent attention.",
  tags: ["animated"],
  code: `@Composable
fun ErrorAlert(trigger: Int) {
    val shake = remember { Animatable(0f) }
    LaunchedEffect(trigger) {
        shake.animateTo(
            0f,
            animationSpec = keyframes {
                durationMillis = 360
                (-8f) at 60; 8f at 120; (-6f) at 200
                4f at 280; 0f at 360
            }
        )
    }
    OutlinedCard(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier
            .offset(x = shake.value.dp)
            .padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.Error,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.error
            )
            Text("Upload failed. Please try again.")
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto border-l-4 border-l-red-500 animate-[wiggle_0.4s_ease-in-out]">
  <CardContent className="flex items-center gap-3 p-4">
    <AlertCircle className="size-5 text-red-500" />
    <span className="text-sm text-foreground">Upload failed. Please try again.</span>
  </CardContent>
</Card>`
},
{
  id: "card-status-warning-banner",
  name: "Warning Banner",
  category: "cards",
  description: "A warning banner with a softly pulsing triangle status icon.",
  tags: ["animated"],
  code: `@Composable
fun WarningBanner() {
    val pulse by rememberInfiniteTransition().animateFloat(
        initialValue = 0.6f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            tween(900), RepeatMode.Reverse
        )
    )
    Surface(
        shape = RoundedCornerShape(12.dp),
        color = Color(0xFFFEF3C7),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.Warning,
                contentDescription = null,
                tint = Color(0xFFB45309).copy(alpha = pulse)
            )
            Text(
                "Your subscription expires in 3 days.",
                color = Color(0xFF92400E)
            )
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800">
  <CardContent className="flex items-center gap-3 p-4">
    <AlertTriangle className="size-5 text-amber-600 dark:text-amber-400 animate-pulse" />
    <span className="text-sm text-amber-800 dark:text-amber-200">Your subscription expires in 3 days.</span>
  </CardContent>
</Card>`
},
{
  id: "card-status-info-tip",
  name: "Info Tip",
  category: "cards",
  description: "A subtle informational tip card with a calm accent border.",
  code: `@Composable
fun InfoTip() {
    Card(
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        ),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.Info,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary
            )
            Column {
                Text("Pro tip", style = MaterialTheme.typography.titleSmall)
                Text(
                    "Press ⌘K to open the command palette.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto bg-muted border-l-4 border-l-sky-500">
  <CardContent className="flex gap-3 p-4">
    <Info className="size-5 text-sky-500 shrink-0" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">Pro tip</span>
      <span className="text-xs text-muted-foreground">Press ⌘K to open the command palette.</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-permission-request",
  name: "Permission Request",
  category: "cards",
  description: "A permission prompt asking the user to allow notifications.",
  code: `@Composable
fun PermissionRequest(onAllow: () -> Unit, onDeny: () -> Unit) {
    ElevatedCard(
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(18.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.Notifications,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary
            )
            Text(
                "Enable notifications?",
                style = MaterialTheme.typography.titleMedium
            )
            Text(
                "Stay updated on replies and mentions.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                TextButton(onClick = onDeny) { Text("Not now") }
                Button(onClick = onAllow) { Text("Allow") }
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardHeader className="gap-2">
    <BellRing className="size-6 text-primary" />
    <CardTitle className="text-base">Enable notifications?</CardTitle>
    <CardDescription>Stay updated on replies and mentions.</CardDescription>
  </CardHeader>
  <CardFooter className="gap-2 justify-end">
    <Button variant="ghost" className="text-xs">Not now</Button>
    <Button className="text-xs">Allow</Button>
  </CardFooter>
</Card>`
},
{
  id: "card-status-download-progress",
  name: "Download Progress",
  category: "cards",
  description: "A download card whose progress bar fills as bytes arrive.",
  tags: ["animated"],
  code: `@Composable
fun DownloadProgress(target: Float) {
    val progress by animateFloatAsState(
        targetValue = target,
        animationSpec = tween(700),
        label = "dl"
    )
    Card(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Icon(Icons.Rounded.Download, contentDescription = null)
                Text("report.pdf")
                Spacer(Modifier.weight(1f))
                Text("\${'$'}{(progress * 100).toInt()}%")
            }
            LinearProgressIndicator(
                progress = { progress },
                modifier = Modifier.fillMaxWidth()
            )
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex flex-col gap-2 p-4">
    <div className="flex items-center gap-2">
      <Download className="size-4 text-foreground" />
      <span className="text-sm text-foreground">report.pdf</span>
      <span className="ml-auto text-xs text-muted-foreground">64%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
      <div className="h-full w-[64%] rounded-full bg-primary transition-all duration-700" />
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-upload-progress",
  name: "Upload Progress",
  category: "cards",
  description: "An upload card with an arrow and live percentage indicator.",
  tags: ["animated"],
  code: `@Composable
fun UploadProgress(target: Float) {
    val progress by animateFloatAsState(
        targetValue = target,
        animationSpec = tween(600),
        label = "up"
    )
    OutlinedCard(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Icon(
                    Icons.Rounded.Upload,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
                Text("Uploading photo…")
                Spacer(Modifier.weight(1f))
                Text("\${'$'}{(progress * 100).toInt()}%")
            }
            LinearProgressIndicator(
                progress = { progress },
                modifier = Modifier.fillMaxWidth()
            )
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto border-dashed">
  <CardContent className="flex flex-col gap-2 p-4">
    <div className="flex items-center gap-2">
      <Upload className="size-4 text-primary" />
      <span className="text-sm text-foreground">Uploading photo…</span>
      <span className="ml-auto text-xs text-muted-foreground">38%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
      <div className="h-full w-[38%] rounded-full bg-primary transition-all" />
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-sync-to-check",
  name: "Sync To Check",
  category: "cards",
  description: "A sync card whose spinner morphs into a check when complete.",
  tags: ["animated"],
  code: `@Composable
fun SyncToCheck(done: Boolean) {
    Card(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Crossfade(targetState = done, label = "sync") { finished ->
                if (finished) {
                    Icon(
                        Icons.Rounded.CheckCircle,
                        contentDescription = null,
                        tint = Color(0xFF22C55E)
                    )
                } else {
                    CircularProgressIndicator(
                        strokeWidth = 2.dp,
                        modifier = Modifier.size(22.dp)
                    )
                }
            }
            Text(if (done) "Synced just now" else "Syncing…")
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex items-center gap-3 p-4">
    <RefreshCw className="size-5 text-primary animate-spin" />
    <span className="text-sm text-foreground">Syncing…</span>
  </CardContent>
</Card>`
},
{
  id: "card-status-update-available",
  name: "Update Available",
  category: "cards",
  description: "An update card highlighting a new version ready to install.",
  code: `@Composable
fun UpdateAvailable(onUpdate: () -> Unit) {
    ElevatedCard(
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.CloudDownload,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary
            )
            Column(Modifier.weight(1f)) {
                Text(
                    "Update available",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    "v2.4.0 · 18 MB",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            Button(onClick = onUpdate) { Text("Update") }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex items-center gap-3 p-4">
    <Cloud className="size-5 text-primary" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">Update available</span>
      <span className="text-xs text-muted-foreground">v2.4.0 · 18 MB</span>
    </div>
    <Button className="ml-auto text-xs">Update</Button>
  </CardContent>
</Card>`
},
{
  id: "card-status-storage-usage",
  name: "Storage Usage",
  category: "cards",
  description: "A storage card showing used space with an animated meter.",
  tags: ["animated"],
  code: `@Composable
fun StorageUsage(usedRatio: Float) {
    val fill by animateFloatAsState(
        targetValue = usedRatio,
        animationSpec = tween(800),
        label = "store"
    )
    Card(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Icon(Icons.Rounded.Storage, contentDescription = null)
                Text("Storage")
                Spacer(Modifier.weight(1f))
                Text("82 / 128 GB")
            }
            LinearProgressIndicator(
                progress = { fill },
                modifier = Modifier.fillMaxWidth(),
                trackColor = MaterialTheme.colorScheme.surfaceVariant
            )
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex flex-col gap-2 p-4">
    <div className="flex items-center gap-2">
      <HardDrive className="size-4 text-foreground" />
      <span className="text-sm text-foreground">Storage</span>
      <span className="ml-auto text-xs text-muted-foreground">82 / 128 GB</span>
    </div>
    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
      <div className="h-full w-[64%] rounded-full bg-indigo-500 transition-all duration-700" />
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-battery-saver",
  name: "Battery Saver",
  category: "cards",
  description: "A battery saver card with a charging icon and live level.",
  tags: ["animated"],
  code: `@Composable
fun BatterySaver(charging: Boolean) {
    val glow by rememberInfiniteTransition().animateFloat(
        initialValue = 0.5f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            tween(800), RepeatMode.Reverse
        )
    )
    Surface(
        shape = RoundedCornerShape(14.dp),
        color = Color(0xFFDCFCE7),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.BatteryChargingFull,
                contentDescription = null,
                tint = Color(0xFF16A34A).copy(
                    alpha = if (charging) glow else 1f
                )
            )
            Column {
                Text("Battery saver on", color = Color(0xFF166534))
                Text(
                    "47% · charging",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color(0xFF15803D)
                )
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800">
  <CardContent className="flex items-center gap-3 p-4">
    <BatteryCharging className="size-5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">Battery saver on</span>
      <span className="text-xs text-emerald-700 dark:text-emerald-400">47% · charging</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-backup-complete",
  name: "Backup Complete",
  category: "cards",
  description: "A backup card with a satisfying check-draw on completion.",
  tags: ["animated"],
  code: `@Composable
fun BackupComplete() {
    val scale = remember { Animatable(0f) }
    LaunchedEffect(Unit) {
        scale.animateTo(
            1f,
            animationSpec = spring(
                dampingRatio = Spring.DampingRatioMediumBouncy
            )
        )
    }
    ElevatedCard(
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Icon(
                Icons.Rounded.CheckCircle,
                contentDescription = null,
                tint = Color(0xFF22C55E),
                modifier = Modifier
                    .size(40.dp)
                    .scale(scale.value)
            )
            Text("Backup complete")
            Text(
                "All 1,204 files secured",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`,
  preview: `<Card className="w-60 mx-auto">
  <CardContent className="flex flex-col items-center gap-2 p-5">
    <CheckCheck className="size-9 text-emerald-500 animate-in zoom-in-50 duration-500" />
    <span className="text-sm font-semibold text-foreground">Backup complete</span>
    <span className="text-xs text-muted-foreground">All 1,204 files secured</span>
  </CardContent>
</Card>`
},
{
  id: "card-status-connection-lost",
  name: "Connection Lost",
  category: "cards",
  description: "A connection-lost card with a fading offline wifi indicator.",
  tags: ["animated"],
  code: `@Composable
fun ConnectionLost() {
    val alpha by rememberInfiniteTransition().animateFloat(
        initialValue = 0.3f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            tween(700), RepeatMode.Reverse
        )
    )
    OutlinedCard(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.WifiOff,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.error
                    .copy(alpha = alpha)
            )
            Column {
                Text("Connection lost")
                Text(
                    "Reconnecting…",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto border-l-4 border-l-red-500">
  <CardContent className="flex items-center gap-3 p-4">
    <Wifi className="size-5 text-red-500 animate-pulse" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">Connection lost</span>
      <span className="text-xs text-muted-foreground">Reconnecting…</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-undo-snackbar",
  name: "Undo Snackbar",
  category: "cards",
  description: "A snackbar with an undo action and shrinking timeout bar.",
  tags: ["animated"],
  code: `@Composable
fun UndoSnackbar(onUndo: () -> Unit) {
    val timer = remember { Animatable(1f) }
    LaunchedEffect(Unit) {
        timer.animateTo(0f, animationSpec = tween(4000))
    }
    Card(
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.inverseSurface
        ),
        modifier = Modifier.padding(12.dp)
    ) {
        Column {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    "Message deleted",
                    color = MaterialTheme.colorScheme.inverseOnSurface
                )
                Spacer(Modifier.weight(1f))
                TextButton(onClick = onUndo) { Text("UNDO") }
            }
            LinearProgressIndicator(
                progress = { timer.value },
                modifier = Modifier.fillMaxWidth()
            )
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto bg-zinc-900 dark:bg-zinc-100">
  <CardContent className="flex flex-col gap-2 p-0">
    <div className="flex items-center p-4">
      <span className="text-sm text-zinc-100 dark:text-zinc-900">Message deleted</span>
      <Button variant="ghost" className="ml-auto text-xs text-sky-400 dark:text-sky-600">UNDO</Button>
    </div>
    <div className="h-1 w-full bg-zinc-700 dark:bg-zinc-300 overflow-hidden">
      <div className="h-full w-1/3 bg-sky-400 dark:bg-sky-600 transition-all" />
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-multi-step",
  name: "Multi-Step Progress",
  category: "cards",
  description: "A multi-step card tracking an order through staged checkpoints.",
  tags: ["animated"],
  code: `@Composable
fun MultiStepProgress(step: Int) {
    val labels = listOf("Placed", "Packed", "Shipped")
    Card(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            labels.forEachIndexed { i, label ->
                val active = i <= step
                val tint by animateColorAsState(
                    if (active) Color(0xFF22C55E)
                    else MaterialTheme.colorScheme.outline,
                    label = "step"
                )
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Icon(
                        Icons.Rounded.CheckCircle,
                        contentDescription = null,
                        tint = tint
                    )
                    Text(label, style = MaterialTheme.typography.labelSmall)
                }
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex items-center justify-between p-4">
    <div className="flex flex-col items-center gap-1">
      <Check className="size-5 text-emerald-500" />
      <span className="text-[10px] text-foreground">Placed</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <Check className="size-5 text-emerald-500" />
      <span className="text-[10px] text-foreground">Packed</span>
    </div>
    <div className="flex flex-col items-center gap-1">
      <CheckCircle2 className="size-5 text-muted-foreground" />
      <span className="text-[10px] text-muted-foreground">Shipped</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-loading-shimmer",
  name: "Loading Shimmer",
  category: "cards",
  description: "A skeleton card with a sweeping indeterminate shimmer effect.",
  tags: ["animated"],
  code: `@Composable
fun LoadingShimmer() {
    val x by rememberInfiniteTransition().animateFloat(
        initialValue = -200f,
        targetValue = 400f,
        animationSpec = infiniteRepeatable(tween(1200))
    )
    val brush = Brush.linearGradient(
        colors = listOf(
            MaterialTheme.colorScheme.surfaceVariant,
            MaterialTheme.colorScheme.surface,
            MaterialTheme.colorScheme.surfaceVariant
        ),
        start = Offset(x, 0f),
        end = Offset(x + 200f, 0f)
    )
    Card(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Box(
                Modifier
                    .fillMaxWidth(0.7f)
                    .height(14.dp)
                    .background(brush, RoundedCornerShape(6.dp))
            )
            Box(
                Modifier
                    .fillMaxWidth()
                    .height(14.dp)
                    .background(brush, RoundedCornerShape(6.dp))
            )
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex flex-col gap-3 p-4">
    <div className="h-3 w-2/3 rounded bg-muted animate-pulse" />
    <div className="h-3 w-full rounded bg-muted animate-pulse" />
    <div className="h-3 w-1/2 rounded bg-muted animate-pulse" />
  </CardContent>
</Card>`
},
{
  id: "card-status-rate-limit",
  name: "Rate Limit Cooldown",
  category: "cards",
  description: "A cooldown card counting down until requests are allowed again.",
  tags: ["animated"],
  code: `@Composable
fun RateLimitCooldown(seconds: Int) {
    val sweep by animateFloatAsState(
        targetValue = seconds / 30f,
        animationSpec = tween(1000, easing = LinearEasing),
        label = "cool"
    )
    OutlinedCard(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Box(contentAlignment = Alignment.Center) {
                CircularProgressIndicator(
                    progress = { sweep },
                    modifier = Modifier.size(36.dp),
                    strokeWidth = 3.dp
                )
                Icon(
                    Icons.Rounded.Lock,
                    contentDescription = null,
                    modifier = Modifier.size(16.dp)
                )
            }
            Column {
                Text("Too many requests")
                Text(
                    "Retry in \${'$'}seconds s",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex items-center gap-3 p-4">
    <div className="relative grid place-items-center">
      <Clock className="size-8 text-amber-500 animate-pulse" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">Too many requests</span>
      <span className="text-xs text-muted-foreground">Retry in 18 s</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-maintenance",
  name: "Maintenance Notice",
  category: "cards",
  description: "A scheduled maintenance notice with a gentle gear motion cue.",
  tags: ["animated"],
  code: `@Composable
fun MaintenanceNotice() {
    val angle by rememberInfiniteTransition().animateFloat(
        initialValue = 0f,
        targetValue = 360f,
        animationSpec = infiniteRepeatable(
            tween(4000, easing = LinearEasing)
        )
    )
    Surface(
        shape = RoundedCornerShape(14.dp),
        color = MaterialTheme.colorScheme.secondaryContainer,
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.Settings,
                contentDescription = null,
                modifier = Modifier.rotate(angle),
                tint = MaterialTheme.colorScheme.onSecondaryContainer
            )
            Column {
                Text("Scheduled maintenance")
                Text(
                    "Sat 2:00-4:00 AM UTC",
                    style = MaterialTheme.typography.bodySmall
                )
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto bg-secondary">
  <CardContent className="flex items-center gap-3 p-4">
    <Settings className="size-5 text-secondary-foreground animate-spin [animation-duration:4s]" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-secondary-foreground">Scheduled maintenance</span>
      <span className="text-xs text-secondary-foreground/70">Sat 2:00-4:00 AM UTC</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-security-alert",
  name: "Security Alert",
  category: "cards",
  description: "A security alert flagging a new sign-in from an unknown device.",
  tags: ["animated"],
  code: `@Composable
fun SecurityAlert(onReview: () -> Unit) {
    val pulse by rememberInfiniteTransition().animateFloat(
        initialValue = 1f,
        targetValue = 1.12f,
        animationSpec = infiniteRepeatable(
            tween(700), RepeatMode.Reverse
        )
    )
    ElevatedCard(
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                Icon(
                    Icons.Rounded.Shield,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.error,
                    modifier = Modifier.scale(pulse)
                )
                Text("New sign-in detected")
            }
            Text(
                "Chrome on Windows · Berlin",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Button(onClick = onReview) { Text("Review activity") }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto border-l-4 border-l-red-500">
  <CardContent className="flex flex-col gap-2 p-4">
    <div className="flex items-center gap-2">
      <Shield className="size-5 text-red-500 animate-pulse" />
      <span className="text-sm font-semibold text-foreground">New sign-in detected</span>
    </div>
    <span className="text-xs text-muted-foreground">Chrome on Windows · Berlin</span>
    <Button className="mt-1 text-xs">Review activity</Button>
  </CardContent>
</Card>`
},
{
  id: "card-status-changelog",
  name: "Version Changelog",
  category: "cards",
  description: "A changelog card summarizing what shipped in the latest release.",
  code: `@Composable
fun VersionChangelog() {
    Card(
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Icon(
                    Icons.Rounded.Bolt,
                    contentDescription = null,
                    tint = MaterialTheme.colorScheme.primary
                )
                Text("What's new · v3.1")
            }
            listOf(
                "Faster cold start",
                "Dark mode polish",
                "Bug fixes"
            ).forEach {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    Icon(
                        Icons.Rounded.Check,
                        contentDescription = null,
                        modifier = Modifier.size(16.dp)
                    )
                    Text(it, style = MaterialTheme.typography.bodySmall)
                }
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardHeader className="flex-row items-center gap-2 pb-2">
    <Zap className="size-4 text-primary" />
    <CardTitle className="text-sm">What's new · v3.1</CardTitle>
  </CardHeader>
  <CardContent className="flex flex-col gap-1.5 text-xs text-foreground">
    <span className="flex items-center gap-1.5"><Check className="size-3.5" />Faster cold start</span>
    <span className="flex items-center gap-1.5"><Check className="size-3.5" />Dark mode polish</span>
    <span className="flex items-center gap-1.5"><Check className="size-3.5" />Bug fixes</span>
  </CardContent>
</Card>`
},
{
  id: "card-status-queue-position",
  name: "Queue Position",
  category: "cards",
  description: "A waiting-room card showing live position advancing in a queue.",
  tags: ["animated"],
  code: `@Composable
fun QueuePosition(position: Int) {
    val animated by animateIntAsState(
        targetValue = position,
        animationSpec = tween(600),
        label = "queue"
    )
    OutlinedCard(
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(6.dp)
        ) {
            CircularProgressIndicator(
                modifier = Modifier.size(28.dp),
                strokeWidth = 2.dp
            )
            Text(
                "#\${'$'}animated",
                style = MaterialTheme.typography.headlineSmall
            )
            Text(
                "in line · ~3 min",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`,
  preview: `<Card className="w-60 mx-auto">
  <CardContent className="flex flex-col items-center gap-1.5 p-5">
    <Loader className="size-6 text-primary animate-spin" />
    <span className="text-2xl font-bold text-foreground">#42</span>
    <span className="text-xs text-muted-foreground">in line · ~3 min</span>
  </CardContent>
</Card>`
},
{
  id: "card-status-processing-payment",
  name: "Processing Payment",
  category: "cards",
  description: "A payment card spinning while the transaction is being processed.",
  tags: ["animated"],
  code: `@Composable
fun ProcessingPayment(done: Boolean) {
    Card(
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Crossfade(targetState = done, label = "pay") { ok ->
                if (ok) {
                    Icon(
                        Icons.Rounded.CheckCircle,
                        contentDescription = null,
                        tint = Color(0xFF22C55E),
                        modifier = Modifier.size(34.dp)
                    )
                } else {
                    CircularProgressIndicator(
                        modifier = Modifier.size(34.dp),
                        strokeWidth = 3.dp
                    )
                }
            }
            Text(if (done) "Payment confirmed" else "Processing payment…")
            Text(
                "\${'$'}49.00 · Visa ••42",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}`,
  preview: `<Card className="w-60 mx-auto">
  <CardContent className="flex flex-col items-center gap-2 p-5">
    <Loader className="size-8 text-primary animate-spin" />
    <span className="text-sm font-semibold text-foreground">Processing payment…</span>
    <span className="text-xs text-muted-foreground">$49.00 · Visa ••42</span>
  </CardContent>
</Card>`
},
{
  id: "card-status-offline-mode",
  name: "Offline Mode",
  category: "cards",
  description: "An offline mode banner reassuring that work is saved locally.",
  code: `@Composable
fun OfflineMode() {
    Surface(
        shape = RoundedCornerShape(14.dp),
        color = MaterialTheme.colorScheme.surfaceVariant,
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(
                Icons.Rounded.CloudOff,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Column {
                Text("You're offline")
                Text(
                    "Changes save locally and sync later.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto bg-muted">
  <CardContent className="flex items-center gap-3 p-4">
    <Cloud className="size-5 text-muted-foreground" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">You're offline</span>
      <span className="text-xs text-muted-foreground">Changes save locally and sync later.</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-achievement-toast",
  name: "Achievement Toast",
  category: "cards",
  description: "An achievement toast that pops in with a celebratory badge bounce.",
  tags: ["animated"],
  code: `@Composable
fun AchievementToast(visible: Boolean) {
    AnimatedVisibility(
        visible = visible,
        enter = scaleIn(
            spring(dampingRatio = Spring.DampingRatioMediumBouncy)
        ) + fadeIn(),
        exit = scaleOut() + fadeOut()
    ) {
        ElevatedCard(
            shape = RoundedCornerShape(16.dp),
            modifier = Modifier.padding(12.dp)
        ) {
            Row(
                modifier = Modifier.padding(16.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                Icon(
                    Icons.Rounded.EmojiEvents,
                    contentDescription = null,
                    tint = Color(0xFFEAB308),
                    modifier = Modifier.size(32.dp)
                )
                Column {
                    Text("Achievement unlocked!")
                    Text(
                        "7-day streak 🔥",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto shadow-lg animate-in zoom-in-75 fade-in duration-500">
  <CardContent className="flex items-center gap-3 p-4">
    <Zap className="size-7 text-yellow-500" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">Achievement unlocked!</span>
      <span className="text-xs text-muted-foreground">7-day streak 🔥</span>
    </div>
  </CardContent>
</Card>`
},
{
  id: "card-status-system-health",
  name: "System Health",
  category: "cards",
  description: "A system health card with a breathing dot showing all services up.",
  tags: ["animated"],
  code: `@Composable
fun SystemHealth() {
    val pulse by rememberInfiniteTransition().animateFloat(
        initialValue = 0.4f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            tween(1000), RepeatMode.Reverse
        )
    )
    Card(
        shape = RoundedCornerShape(14.dp),
        modifier = Modifier.padding(12.dp)
    ) {
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Icon(Icons.Rounded.Dns, contentDescription = null)
            Column(Modifier.weight(1f)) {
                Text("All systems operational")
                Text(
                    "99.98% uptime",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            Box(
                Modifier
                    .size(10.dp)
                    .background(
                        Color(0xFF22C55E).copy(alpha = pulse),
                        CircleShape
                    )
            )
        }
    }
}`,
  preview: `<Card className="w-64 mx-auto">
  <CardContent className="flex items-center gap-3 p-4">
    <Server className="size-5 text-foreground" />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">All systems operational</span>
      <span className="text-xs text-muted-foreground">99.98% uptime</span>
    </div>
    <span className="ml-auto size-2.5 rounded-full bg-emerald-500 animate-pulse" />
  </CardContent>
</Card>`
},

{
  id: "card-travel-flight-route",
  name: "Flight Route",
  category: "cards",
  description:
    "Animated dashed flight path draws between two airport codes on tap.",
  tags: ["animated"],
  code: `@Composable
fun FlightRouteCard() {
  val draw = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    draw.animateTo(1f, tween(1400, easing = FastOutSlowInEasing))
  }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
      ) {
        Text("SFO", style = MaterialTheme.typography.titleLarge)
        Text("NRT", style = MaterialTheme.typography.titleLarge)
      }
      Spacer(Modifier.height(12.dp))
      Canvas(Modifier.fillMaxWidth().height(48.dp)) {
        val y = size.height / 2
        val path = Path().apply {
          moveTo(0f, y)
          quadraticBezierTo(
            size.width / 2, 0f, size.width, y
          )
        }
        val m = PathMeasure().apply { setPath(path, false) }
        val seg = Path()
        m.getSegment(0f, m.length * draw.value, seg, true)
        drawPath(
          seg, Color(0xFF6366F1), style = Stroke(
            3f, pathEffect = PathEffect.dashPathEffect(
              floatArrayOf(12f, 10f)
            )
          )
        )
        drawCircle(Color(0xFF6366F1), 6f, Offset(0f, y))
        drawCircle(Color(0xFF6366F1), 6f, Offset(size.width, y))
      }
      Spacer(Modifier.height(8.dp))
      Text(
        "11h 25m · Nonstop",
        style = MaterialTheme.typography.bodySmall
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5">
        <div className="flex justify-between text-lg font-semibold">
          <span>SFO</span>
          <span>NRT</span>
        </div>
        <div className="my-3 flex items-center">
          <span className="size-2 rounded-full bg-indigo-500" />
          <div className="flex-1 mx-1 border-t-2 border-dashed border-indigo-500" />
          <Plane className="size-4 text-indigo-500" />
          <div className="flex-1 mx-1 border-t-2 border-dashed border-muted-foreground/40" />
          <span className="size-2 rounded-full bg-indigo-500" />
        </div>
        <p className="text-xs text-muted-foreground">11h 25m · Nonstop</p>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-boarding-pass",
  name: "Boarding Pass",
  category: "cards",
  description:
    "Boarding pass with perforated notch and tear-away stub micro-interaction.",
  tags: ["animated"],
  code: `@Composable
fun BoardingPassCard() {
  var torn by remember { mutableStateOf(false) }
  val shift by animateDpAsState(
    if (torn) 24.dp else 0.dp, label = "tear"
  )
  Surface(
    shape = RoundedCornerShape(16.dp),
    tonalElevation = 2.dp,
    modifier = Modifier.fillMaxWidth().padding(16.dp)
      .clickable { torn = !torn }
  ) {
    Row(Modifier.height(IntrinsicSize.Min)) {
      Column(Modifier.weight(1f).padding(18.dp)) {
        Text("Flight UA 884")
        Text(
          "Seat 14A · Boarding 09:20",
          style = MaterialTheme.typography.bodySmall
        )
      }
      Canvas(Modifier.fillMaxHeight().width(2.dp)) {
        var y = 0f
        while (y < size.height) {
          drawCircle(
            Color.Gray, 2f, Offset(0f, y)
          )
          y += 10f
        }
      }
      Box(
        Modifier.offset(x = shift).padding(18.dp)
      ) { Text("A14", style = MaterialTheme.typography.titleMedium) }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto flex overflow-hidden bg-card text-card-foreground">
      <CardContent className="p-4 flex-1">
        <p className="text-sm font-medium">Flight UA 884</p>
        <p className="text-xs text-muted-foreground">Seat 14A · 09:20</p>
      </CardContent>
      <div className="border-l-2 border-dashed border-muted-foreground/40" />
      <div className="p-4 flex items-center">
        <Ticket className="size-4 text-emerald-500" />
        <span className="ml-1 font-semibold">A14</span>
      </div>
    </Card>
  )
},
{
  id: "card-travel-hotel-booking",
  name: "Hotel Booking",
  category: "cards",
  description:
    "Hotel booking summary with star rating and animated check-in dates.",
  tags: ["animated"],
  code: `@Composable
fun HotelBookingCard() {
  val stars = 4
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Hotel Marina Bay",
        style = MaterialTheme.typography.titleMedium
      )
      Row {
        repeat(5) { i ->
          val c = if (i < stars) Color(0xFFF59E0B)
            else Color.Gray.copy(alpha = 0.3f)
          Canvas(Modifier.size(16.dp)) {
            drawCircle(c, size.minDimension / 3)
          }
        }
      }
      Spacer(Modifier.height(10.dp))
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
      ) {
        Text(
          "Jul 12 → Jul 16",
          style = MaterialTheme.typography.bodySmall
        )
        Text("$640", style = MaterialTheme.typography.titleSmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Hotel Marina Bay</CardTitle>
        <div className="flex gap-0.5 text-amber-500">
          <Star className="size-4 fill-current" />
          <Star className="size-4 fill-current" />
          <Star className="size-4 fill-current" />
          <Star className="size-4 fill-current" />
          <Star className="size-4 text-muted-foreground/30" />
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between pt-0">
        <span className="text-xs text-muted-foreground">Jul 12 → 16</span>
        <span className="font-semibold">$640</span>
      </CardFooter>
    </Card>
  )
},
{
  id: "card-travel-event-rsvp",
  name: "Event RSVP",
  category: "cards",
  description:
    "Event invite card with animated attendee avatars and RSVP toggle button.",
  tags: ["animated"],
  code: `@Composable
fun EventRsvpCard() {
  var going by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    if (going) 1.05f else 1f, label = "rsvp"
  )
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Rooftop Jazz Night",
        style = MaterialTheme.typography.titleMedium
      )
      Text(
        "Fri · 8:00 PM · Downtown",
        style = MaterialTheme.typography.bodySmall
      )
      Spacer(Modifier.height(12.dp))
      Button(
        onClick = { going = !going },
        modifier = Modifier.graphicsLayer {
          scaleX = scale; scaleY = scale
        }
      ) { Text(if (going) "Going ✓" else "RSVP") }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardHeader className="pb-1">
        <CardTitle className="text-base flex items-center gap-2">
          <Calendar className="size-4 text-violet-500" />
          Rooftop Jazz Night
        </CardTitle>
        <CardDescription>Fri · 8:00 PM · Downtown</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-violet-600 text-white">RSVP</Button>
      </CardFooter>
    </Card>
  )
},
{
  id: "card-travel-calendar-day",
  name: "Calendar Day",
  category: "cards",
  description:
    "Tear-off calendar day tile with animated flip reveal of the date.",
  tags: ["animated"],
  code: `@Composable
fun CalendarDayCard() {
  val flip = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    flip.animateTo(1f, tween(800, easing = FastOutSlowInEasing))
  }
  OutlinedCard(
    modifier = Modifier.width(140.dp).padding(16.dp)
  ) {
    Column(
      Modifier.fillMaxWidth(),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Surface(
        color = Color(0xFFEF4444),
        modifier = Modifier.fillMaxWidth()
      ) {
        Text(
          "JULY",
          color = Color.White,
          modifier = Modifier.padding(6.dp)
            .align(Alignment.CenterHorizontally)
        )
      }
      Text(
        "12",
        style = MaterialTheme.typography.displaySmall,
        modifier = Modifier.padding(8.dp).graphicsLayer {
          rotationX = (1f - flip.value) * 90f
        }
      )
      Text(
        "Saturday",
        style = MaterialTheme.typography.bodySmall,
        modifier = Modifier.padding(bottom = 10.dp)
      )
    }
  }
}`,
  preview: (
    <Card className="w-40 mx-auto overflow-hidden bg-card text-card-foreground text-center">
      <div className="bg-red-500 text-white text-xs py-1 flex items-center justify-center gap-1">
        <CalendarDays className="size-3" /> JULY
      </div>
      <CardContent className="py-3">
        <p className="text-4xl font-bold">12</p>
        <p className="text-xs text-muted-foreground">Saturday</p>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-trip-countdown",
  name: "Trip Countdown",
  category: "cards",
  description:
    "Live countdown to departure with animated ticking days and hours.",
  tags: ["animated"],
  code: `@Composable
fun TripCountdownCard() {
  var secs by remember { mutableStateOf(0) }
  LaunchedEffect(Unit) {
    while (true) { delay(1000); secs++ }
  }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Text(
        "Trip to Lisbon",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(10.dp))
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceEvenly
      ) {
        listOf("12" to "days", "06" to "hrs",
          "\${secs % 60}" to "sec").forEach { (v, l) ->
          Column(
            horizontalAlignment = Alignment.CenterHorizontally
          ) {
            Text(v, style = MaterialTheme.typography.headlineSmall)
            Text(l, style = MaterialTheme.typography.labelSmall)
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Clock className="size-4 text-sky-500" /> Trip to Lisbon
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-around">
        {[["12", "days"], ["06", "hrs"], ["42", "sec"]].map(([v, l]) => (
          <div key={l} className="text-center">
            <p className="text-xl font-bold">{v}</p>
            <p className="text-[10px] text-muted-foreground">{l}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-map-route",
  name: "Map Route Preview",
  category: "cards",
  description:
    "Mini map preview animating a curved route line between two pins.",
  tags: ["animated"],
  code: `@Composable
fun MapRoutePreviewCard() {
  val draw = remember { Animatable(0f) }
  LaunchedEffect(Unit) { draw.animateTo(1f, tween(1200)) }
  Card(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
    Column {
      Canvas(
        Modifier.fillMaxWidth().height(120.dp)
          .background(Color(0xFFE5E7EB))
      ) {
        val p = Path().apply {
          moveTo(size.width * 0.15f, size.height * 0.8f)
          cubicTo(
            size.width * 0.4f, size.height * 0.2f,
            size.width * 0.6f, size.height * 0.9f,
            size.width * 0.85f, size.height * 0.25f
          )
        }
        val m = PathMeasure().apply { setPath(p, false) }
        val seg = Path()
        m.getSegment(0f, m.length * draw.value, seg, true)
        drawPath(seg, Color(0xFF2563EB), style = Stroke(5f))
      }
      Text(
        "Home → Office · 12 min",
        style = MaterialTheme.typography.bodySmall,
        modifier = Modifier.padding(14.dp)
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden bg-card text-card-foreground">
      <div className="h-24 bg-slate-200 dark:bg-slate-700 relative flex items-center justify-center">
        <Navigation className="size-6 text-blue-600" />
        <MapPin className="size-4 text-red-500 absolute left-3 bottom-3" />
        <MapPin className="size-4 text-red-500 absolute right-3 top-3" />
      </div>
      <CardContent className="p-3">
        <p className="text-xs text-muted-foreground">Home → Office · 12 min</p>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-rideshare-arriving",
  name: "Ride Arriving",
  category: "cards",
  description:
    "Ride-share card with pulsing car icon and animated arrival ETA bar.",
  tags: ["animated"],
  code: `@Composable
fun RideArrivingCard() {
  val pulse = rememberInfiniteTransition(label = "p")
  val a by pulse.animateFloat(
    0.4f, 1f, infiniteRepeatable(
      tween(900), RepeatMode.Reverse
    ), label = "a"
  )
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Row(
      Modifier.padding(18.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(40.dp)) {
        drawCircle(
          Color(0xFF10B981).copy(alpha = a),
          size.minDimension / 2
        )
      }
      Spacer(Modifier.width(14.dp))
      Column {
        Text(
          "Toyota Prius · 7XJ 204",
          style = MaterialTheme.typography.bodyMedium
        )
        Text(
          "Arriving in 2 min",
          style = MaterialTheme.typography.bodySmall
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
          <Car className="size-5 text-emerald-500" />
        </div>
        <div>
          <p className="text-sm">Toyota Prius · 7XJ 204</p>
          <p className="text-xs text-muted-foreground">Arriving in 2 min</p>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-train-ticket",
  name: "Train Ticket",
  category: "cards",
  description:
    "Train ticket with platform info and animated departure progress line.",
  tags: ["animated"],
  code: `@Composable
fun TrainTicketCard() {
  val p = remember { Animatable(0f) }
  LaunchedEffect(Unit) { p.animateTo(0.6f, tween(1500)) }
  OutlinedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
      ) {
        Text("Paris", style = MaterialTheme.typography.titleMedium)
        Text("Lyon", style = MaterialTheme.typography.titleMedium)
      }
      Spacer(Modifier.height(10.dp))
      LinearProgressIndicator(
        progress = { p.value },
        modifier = Modifier.fillMaxWidth()
      )
      Spacer(Modifier.height(8.dp))
      Text(
        "Platform 4 · Coach 9 · 14:05",
        style = MaterialTheme.typography.bodySmall
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5">
        <div className="flex justify-between font-medium">
          <span className="flex items-center gap-1">
            <Train className="size-4 text-rose-500" /> Paris
          </span>
          <span>Lyon</span>
        </div>
        <div className="my-3 h-1.5 rounded-full bg-muted">
          <div className="h-full w-3/5 rounded-full bg-rose-500" />
        </div>
        <p className="text-xs text-muted-foreground">Platform 4 · Coach 9 · 14:05</p>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-itinerary-timeline",
  name: "Itinerary Timeline",
  category: "cards",
  description:
    "Vertical itinerary timeline with animated dots filling along the journey.",
  tags: ["animated"],
  code: `@Composable
fun ItineraryTimelineCard() {
  val steps = listOf("Airport", "Hotel", "Tour", "Dinner")
  val prog = remember { Animatable(0f) }
  LaunchedEffect(Unit) {
    prog.animateTo(steps.size.toFloat(), tween(1600))
  }
  Card(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
    Column(Modifier.padding(20.dp)) {
      steps.forEachIndexed { i, s ->
        Row(verticalAlignment = Alignment.CenterVertically) {
          val on = prog.value > i
          Canvas(Modifier.size(14.dp)) {
            drawCircle(
              if (on) Color(0xFF6366F1)
                else Color.Gray.copy(0.3f),
              size.minDimension / 2
            )
          }
          Spacer(Modifier.width(12.dp))
          Text(s, style = MaterialTheme.typography.bodyMedium)
        }
        if (i < steps.size - 1) Spacer(Modifier.height(10.dp))
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5 space-y-3">
        {["Airport", "Hotel", "Tour", "Dinner"].map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <span className={i < 2 ? "size-3 rounded-full bg-indigo-500" : "size-3 rounded-full bg-muted"} />
            <span className="text-sm">{s}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-destination-cover",
  name: "Destination Cover",
  category: "cards",
  description:
    "Destination hero card with gradient overlay and animated zoom on hover.",
  tags: ["animated"],
  code: `@Composable
fun DestinationCoverCard() {
  var hovered by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    if (hovered) 1.08f else 1f, label = "zoom"
  )
  Card(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
      .clickable { hovered = !hovered }
  ) {
    Box(Modifier.height(160.dp)) {
      Box(
        Modifier.matchParentSize()
          .graphicsLayer { scaleX = scale; scaleY = scale }
          .background(
            Brush.verticalGradient(
              listOf(Color(0xFF0EA5E9), Color(0xFF1E3A8A))
            )
          )
      )
      Text(
        "Santorini, Greece",
        color = Color.White,
        style = MaterialTheme.typography.titleLarge,
        modifier = Modifier.align(Alignment.BottomStart)
          .padding(16.dp)
      )
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto overflow-hidden bg-card text-card-foreground">
      <div className="h-36 bg-gradient-to-b from-sky-500 to-blue-900 relative">
        <Globe className="size-5 text-white/70 absolute top-3 right-3" />
        <p className="absolute bottom-3 left-3 text-white text-lg font-semibold">
          Santorini, Greece
        </p>
      </div>
    </Card>
  )
},
{
  id: "card-travel-weather-dest",
  name: "Weather At Destination",
  category: "cards",
  description:
    "Destination weather card with animated sun rays and temperature reading.",
  tags: ["animated"],
  code: `@Composable
fun WeatherDestCard() {
  val rot = rememberInfiniteTransition(label = "r")
  val a by rot.animateFloat(
    0f, 360f, infiniteRepeatable(tween(8000)), label = "a"
  )
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(48.dp)) {
        rotate(a) {
          repeat(8) {
            drawLine(
              Color(0xFFF59E0B),
              Offset(size.width / 2, 0f),
              Offset(size.width / 2, 10f), 3f
            )
            rotate(45f) {}
          }
        }
        drawCircle(Color(0xFFF59E0B), size.minDimension / 4)
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text("Barcelona", style = MaterialTheme.typography.titleMedium)
        Text("28°C · Sunny",
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5 flex items-center gap-4">
        <Sun className="size-10 text-amber-500 animate-spin" style={{ animationDuration: "8s" }} />
        <div>
          <p className="font-medium">Barcelona</p>
          <p className="text-xs text-muted-foreground">28°C · Sunny</p>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-packing-checklist",
  name: "Packing Checklist",
  category: "cards",
  description:
    "Packing list card with animated check marks and live progress count.",
  tags: ["animated"],
  code: `@Composable
fun PackingChecklistCard() {
  val items = remember {
    mutableStateListOf("Passport" to true,
      "Charger" to true, "Sunscreen" to false,
      "Camera" to false)
  }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      val done = items.count { it.second }
      Text(
        "Packed $done / \${items.size}",
        style = MaterialTheme.typography.titleMedium
      )
      Spacer(Modifier.height(10.dp))
      items.forEachIndexed { i, (t, c) ->
        Row(
          Modifier.fillMaxWidth().clickable {
            items[i] = t to !c
          },
          verticalAlignment = Alignment.CenterVertically
        ) {
          val tick by animateFloatAsState(
            if (c) 1f else 0f, label = "t"
          )
          Canvas(Modifier.size(18.dp)) {
            drawCircle(
              Color(0xFF10B981).copy(alpha = tick),
              size.minDimension / 2
            )
          }
          Spacer(Modifier.width(10.dp))
          Text(t, style = MaterialTheme.typography.bodyMedium)
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <CalendarCheck className="size-4 text-emerald-500" /> Packed 2 / 4
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {([["Passport", true], ["Charger", true], ["Sunscreen", false], ["Camera", false]] as const).map(([t, c]) => (
          <div key={t} className="flex items-center gap-2">
            <span className={c ? "size-4 rounded-full bg-emerald-500" : "size-4 rounded-full border border-muted-foreground/40"} />
            <span>{t}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-currency",
  name: "Trip Currency",
  category: "cards",
  description:
    "Currency converter card with animated flip between source and target.",
  tags: ["animated"],
  code: `@Composable
fun TripCurrencyCard() {
  var swapped by remember { mutableStateOf(false) }
  val rot by animateFloatAsState(
    if (swapped) 180f else 0f, label = "swap"
  )
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
      .clickable { swapped = !swapped }
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically,
      horizontalArrangement = Arrangement.SpaceBetween
    ) {
      Text("100 USD", style = MaterialTheme.typography.titleMedium)
      Canvas(
        Modifier.size(24.dp).graphicsLayer { rotationZ = rot }
      ) {
        drawLine(
          Color(0xFF6366F1), Offset(0f, size.height / 2),
          Offset(size.width, size.height / 2), 3f
        )
      }
      Text("92 EUR", style = MaterialTheme.typography.titleMedium)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5 flex items-center justify-between">
        <span className="font-medium">100 USD</span>
        <Globe className="size-5 text-indigo-500" />
        <span className="font-medium">92 EUR</span>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-seat-map",
  name: "Seat Map",
  category: "cards",
  description:
    "Aircraft seat picker grid with animated selection highlight on tap.",
  tags: ["animated"],
  code: `@Composable
fun SeatMapCard() {
  var sel by remember { mutableStateOf(-1) }
  Card(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
    Column(Modifier.padding(20.dp)) {
      Text("Select Seat",
        style = MaterialTheme.typography.titleMedium)
      Spacer(Modifier.height(12.dp))
      repeat(3) { row ->
        Row(
          Modifier.fillMaxWidth(),
          horizontalArrangement = Arrangement.SpaceEvenly
        ) {
          repeat(4) { col ->
            val idx = row * 4 + col
            val on = sel == idx
            val sc by animateFloatAsState(
              if (on) 1.2f else 1f, label = "s"
            )
            Box(
              Modifier.padding(4.dp).size(28.dp)
                .graphicsLayer { scaleX = sc; scaleY = sc }
                .background(
                  if (on) Color(0xFF6366F1)
                    else Color.Gray.copy(0.25f),
                  RoundedCornerShape(6.dp)
                ).clickable { sel = idx }
            )
          }
        }
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Plane className="size-4 text-indigo-500" /> Select Seat
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={i === 5 ? "size-6 rounded bg-indigo-500" : "size-6 rounded bg-muted"} />
        ))}
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-gate-terminal",
  name: "Gate & Terminal",
  category: "cards",
  description:
    "Gate and terminal info card with animated blinking boarding status dot.",
  tags: ["animated"],
  code: `@Composable
fun GateTerminalCard() {
  val blink = rememberInfiniteTransition(label = "b")
  val a by blink.animateFloat(
    0.2f, 1f, infiniteRepeatable(
      tween(600), RepeatMode.Reverse
    ), label = "a"
  )
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Row(
      Modifier.fillMaxWidth().padding(20.dp),
      horizontalArrangement = Arrangement.SpaceBetween,
      verticalAlignment = Alignment.CenterVertically
    ) {
      Column {
        Text("Terminal 2",
          style = MaterialTheme.typography.bodySmall)
        Text("Gate B14",
          style = MaterialTheme.typography.titleLarge)
      }
      Row(verticalAlignment = Alignment.CenterVertically) {
        Canvas(Modifier.size(10.dp)) {
          drawCircle(
            Color(0xFF10B981).copy(alpha = a),
            size.minDimension / 2
          )
        }
        Spacer(Modifier.width(6.dp))
        Text("Boarding",
          style = MaterialTheme.typography.labelMedium)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5 flex justify-between items-center">
        <div>
          <p className="text-xs text-muted-foreground">Terminal 2</p>
          <p className="text-xl font-bold">Gate B14</p>
        </div>
        <span className="flex items-center gap-1 text-xs">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Boarding
        </span>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-journey-progress",
  name: "Journey Progress",
  category: "cards",
  description:
    "Journey progress card with a plane sliding along an animated arc.",
  tags: ["animated"],
  code: `@Composable
fun JourneyProgressCard() {
  val p = remember { Animatable(0f) }
  LaunchedEffect(Unit) { p.animateTo(0.65f, tween(1800)) }
  Card(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
    Column(Modifier.padding(20.dp)) {
      Canvas(Modifier.fillMaxWidth().height(60.dp)) {
        val y = size.height
        val path = Path().apply {
          moveTo(0f, y)
          quadraticBezierTo(
            size.width / 2, -y * 0.6f, size.width, y
          )
        }
        drawPath(
          path, Color.Gray.copy(0.3f),
          style = Stroke(3f)
        )
        val m = PathMeasure().apply { setPath(path, false) }
        val pos = FloatArray(2)
        m.getPosTan(m.length * p.value, pos, null)
        drawCircle(
          Color(0xFF6366F1), 8f, Offset(pos[0], pos[1])
        )
      }
      Spacer(Modifier.height(8.dp))
      Text("65% · 3h 10m left",
        style = MaterialTheme.typography.bodySmall)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5">
        <div className="relative h-12 flex items-center">
          <div className="w-full border-t-2 border-dashed border-muted-foreground/40" />
          <Plane className="size-5 text-indigo-500 absolute left-[60%]" />
        </div>
        <p className="text-xs text-muted-foreground">65% · 3h 10m left</p>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-nearby-place",
  name: "Nearby Place",
  category: "cards",
  description:
    "Nearby place card with animated distance ripple and category badge.",
  tags: ["animated"],
  code: `@Composable
fun NearbyPlaceCard() {
  val ripple = rememberInfiniteTransition(label = "r")
  val r by ripple.animateFloat(
    0f, 1f, infiniteRepeatable(tween(1500)), label = "r"
  )
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Row(
      Modifier.padding(18.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(40.dp)) {
        drawCircle(
          Color(0xFF0EA5E9).copy(alpha = 1f - r),
          size.minDimension / 2 * r
        )
        drawCircle(Color(0xFF0EA5E9), 6f)
      }
      Spacer(Modifier.width(14.dp))
      Column {
        Text("Blue Bottle Coffee",
          style = MaterialTheme.typography.bodyMedium)
        Text("250 m away · Café",
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="size-10 rounded-full bg-sky-500/20 flex items-center justify-center">
          <Coffee className="size-5 text-sky-500" />
        </div>
        <div>
          <p className="text-sm">Blue Bottle Coffee</p>
          <p className="text-xs text-muted-foreground">250 m away · Café</p>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-reservation-confirmed",
  name: "Reservation Confirmed",
  category: "cards",
  description:
    "Confirmation card with animated check circle drawing on successful booking.",
  tags: ["animated"],
  code: `@Composable
fun ReservationConfirmedCard() {
  val draw = remember { Animatable(0f) }
  LaunchedEffect(Unit) { draw.animateTo(1f, tween(900)) }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(
      Modifier.fillMaxWidth().padding(24.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Canvas(Modifier.size(56.dp)) {
        drawArc(
          Color(0xFF10B981), -90f, 360f * draw.value,
          false, style = Stroke(5f)
        )
        if (draw.value > 0.9f) {
          drawLine(
            Color(0xFF10B981),
            Offset(size.width * 0.3f, size.height * 0.5f),
            Offset(size.width * 0.45f, size.height * 0.65f), 5f
          )
          drawLine(
            Color(0xFF10B981),
            Offset(size.width * 0.45f, size.height * 0.65f),
            Offset(size.width * 0.7f, size.height * 0.35f), 5f
          )
        }
      }
      Spacer(Modifier.height(12.dp))
      Text("Reservation Confirmed",
        style = MaterialTheme.typography.titleMedium)
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground text-center">
      <CardContent className="p-6 flex flex-col items-center gap-3">
        <div className="size-14 rounded-full border-4 border-emerald-500 flex items-center justify-center">
          <CalendarCheck className="size-6 text-emerald-500" />
        </div>
        <p className="font-medium">Reservation Confirmed</p>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-festival-lineup",
  name: "Festival Lineup",
  category: "cards",
  description:
    "Festival lineup card with animated marquee of headlining artist names.",
  tags: ["animated"],
  code: `@Composable
fun FestivalLineupCard() {
  val scroll = rememberInfiniteTransition(label = "m")
  val x by scroll.animateFloat(
    0f, -200f, infiniteRepeatable(
      tween(4000), RepeatMode.Restart
    ), label = "x"
  )
  Card(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
    Column(Modifier.padding(20.dp)) {
      Text("Sunset Fest 2026",
        style = MaterialTheme.typography.titleMedium)
      Spacer(Modifier.height(8.dp))
      Box(Modifier.fillMaxWidth().clipToBounds()) {
        Text(
          "Aurora · Tycho · Bonobo · ODESZA",
          style = MaterialTheme.typography.bodySmall,
          modifier = Modifier.graphicsLayer {
            translationX = x
          }
        )
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <Star className="size-4 text-fuchsia-500" /> Sunset Fest 2026
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden">
        <p className="text-xs text-muted-foreground whitespace-nowrap">
          Aurora · Tycho · Bonobo · ODESZA
        </p>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-roadtrip-distance",
  name: "Road Trip Distance",
  category: "cards",
  description:
    "Road trip card with animated odometer counting up the total kilometers.",
  tags: ["animated"],
  code: `@Composable
fun RoadTripDistanceCard() {
  val km = remember { Animatable(0f) }
  LaunchedEffect(Unit) { km.animateTo(842f, tween(1600)) }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(36.dp)) {
        drawLine(
          Color(0xFFF59E0B),
          Offset(0f, size.height * 0.7f),
          Offset(size.width, size.height * 0.7f),
          4f, pathEffect = PathEffect.dashPathEffect(
            floatArrayOf(8f, 6f)
          )
        )
      }
      Spacer(Modifier.width(16.dp))
      Column {
        Text("\${km.value.toInt()} km",
          style = MaterialTheme.typography.headlineSmall)
        Text("LA → Las Vegas",
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5 flex items-center gap-4">
        <Car className="size-8 text-amber-500" />
        <div>
          <p className="text-2xl font-bold">842 km</p>
          <p className="text-xs text-muted-foreground">LA → Las Vegas</p>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-checkin-reminder",
  name: "Check-in Reminder",
  category: "cards",
  description:
    "Check-in reminder with animated ringing bell and time-window countdown.",
  tags: ["animated"],
  code: `@Composable
fun CheckinReminderCard() {
  val swing = rememberInfiniteTransition(label = "s")
  val a by swing.animateFloat(
    -15f, 15f, infiniteRepeatable(
      tween(400), RepeatMode.Reverse
    ), label = "a"
  )
  OutlinedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Row(
      Modifier.padding(18.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(
        Modifier.size(32.dp).graphicsLayer { rotationZ = a }
      ) {
        drawArc(
          Color(0xFFEF4444), 180f, 180f, true,
          topLeft = Offset(4f, 4f),
          size = Size(size.width - 8f, size.height - 8f)
        )
      }
      Spacer(Modifier.width(14.dp))
      Column {
        Text("Online check-in opens",
          style = MaterialTheme.typography.bodyMedium)
        Text("in 2 hours · UA 884",
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-4 flex items-center gap-3">
        <Bell className="size-7 text-red-500 animate-pulse" />
        <div>
          <p className="text-sm">Online check-in opens</p>
          <p className="text-xs text-muted-foreground">in 2 hours · UA 884</p>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-budget",
  name: "Travel Budget",
  category: "cards",
  description:
    "Travel budget card with animated spending arc and remaining funds total.",
  tags: ["animated"],
  code: `@Composable
fun TravelBudgetCard() {
  val sweep = remember { Animatable(0f) }
  LaunchedEffect(Unit) { sweep.animateTo(0.7f, tween(1400)) }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Row(
      Modifier.padding(20.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(Modifier.size(64.dp)) {
        drawArc(
          Color.Gray.copy(0.2f), 0f, 360f, false,
          style = Stroke(8f)
        )
        drawArc(
          Color(0xFF6366F1), -90f, 360f * sweep.value,
          false, style = Stroke(8f)
        )
      }
      Spacer(Modifier.width(18.dp))
      Column {
        Text("$1,400 spent",
          style = MaterialTheme.typography.titleMedium)
        Text("$600 remaining",
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5 flex items-center gap-4">
        <div className="size-16 rounded-full border-8 border-indigo-500 border-r-muted flex items-center justify-center text-xs font-medium">
          70%
        </div>
        <div>
          <p className="font-medium">$1,400 spent</p>
          <p className="text-xs text-muted-foreground">$600 remaining</p>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-photo-spot",
  name: "Photo Spot Pin",
  category: "cards",
  description:
    "Photo spot card with animated dropping map pin and bounce settle.",
  tags: ["animated"],
  code: `@Composable
fun PhotoSpotPinCard() {
  val drop = remember { Animatable(-40f) }
  LaunchedEffect(Unit) {
    drop.animateTo(0f, spring(0.4f, 300f))
  }
  Card(modifier = Modifier.fillMaxWidth().padding(16.dp)) {
    Row(
      Modifier.padding(18.dp),
      verticalAlignment = Alignment.CenterVertically
    ) {
      Canvas(
        Modifier.size(36.dp).graphicsLayer {
          translationY = drop.value
        }
      ) {
        drawCircle(
          Color(0xFFEF4444), size.minDimension / 3,
          Offset(size.width / 2, size.height / 3)
        )
        val p = Path().apply {
          moveTo(size.width / 2, size.height)
          lineTo(size.width * 0.3f, size.height / 2)
          lineTo(size.width * 0.7f, size.height / 2)
          close()
        }
        drawPath(p, Color(0xFFEF4444))
      }
      Spacer(Modifier.width(14.dp))
      Column {
        Text("Golden Gate View",
          style = MaterialTheme.typography.bodyMedium)
        Text("Best at sunset",
          style = MaterialTheme.typography.bodySmall)
      }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-4 flex items-center gap-3">
        <MapPinned className="size-8 text-red-500 animate-bounce" />
        <div>
          <p className="text-sm">Golden Gate View</p>
          <p className="text-xs text-muted-foreground">Best at sunset</p>
        </div>
      </CardContent>
    </Card>
  )
},
{
  id: "card-travel-multileg-trip",
  name: "Multi-Leg Trip",
  category: "cards",
  description:
    "Multi-leg trip card with animated connecting segments across three cities.",
  tags: ["animated"],
  code: `@Composable
fun MultiLegTripCard() {
  val legs = listOf("NYC", "LON", "DXB")
  val prog = remember { Animatable(0f) }
  LaunchedEffect(Unit) { prog.animateTo(1f, tween(1500)) }
  ElevatedCard(
    modifier = Modifier.fillMaxWidth().padding(16.dp)
  ) {
    Column(Modifier.padding(20.dp)) {
      Canvas(Modifier.fillMaxWidth().height(30.dp)) {
        val y = size.height / 2
        val gap = size.width / (legs.size - 1)
        drawLine(
          Color(0xFF6366F1), Offset(0f, y),
          Offset(size.width * prog.value, y), 3f,
          pathEffect = PathEffect.dashPathEffect(
            floatArrayOf(10f, 8f)
          )
        )
        legs.indices.forEach { i ->
          drawCircle(
            Color(0xFF6366F1), 6f, Offset(gap * i, y)
          )
        }
      }
      Spacer(Modifier.height(8.dp))
      Row(
        Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
      ) { legs.forEach { Text(it,
        style = MaterialTheme.typography.labelMedium) } }
    }
  }
}`,
  preview: (
    <Card className="w-64 mx-auto bg-card text-card-foreground">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="size-2 rounded-full bg-indigo-500" />
          <div className="flex-1 mx-1 border-t-2 border-dashed border-indigo-500" />
          <Compass className="size-4 text-indigo-500" />
          <div className="flex-1 mx-1 border-t-2 border-dashed border-indigo-500" />
          <span className="size-2 rounded-full bg-indigo-500" />
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>NYC</span><span>LON</span><span>DXB</span>
        </div>
      </CardContent>
    </Card>
  )
},
];
