import {
  Bell,
  Calendar,
  Heart,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Settings,
  ShoppingCart,
  Star,
  ThumbsUp,
  TrendingDown,
  TrendingUp,
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
    CaveButton(text = "Follow", onClick = {})
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
    CaveButton(text = "Choose Pro", onClick = {})
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
        CaveButton(text = "Add", onClick = {}, leadingIcon = Icons.Filled.ShoppingCart)
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
    CaveTextField(
        value = email,
        onValueChange = { email = it },
        placeholder = "you@example.com",
        leadingIcon = Icons.Filled.Email,
    )
    CaveTextField(
        value = password,
        onValueChange = { password = it },
        placeholder = "Password",
        leadingIcon = Icons.Filled.Lock,
        visualTransformation = PasswordVisualTransformation(),
    )
    CaveButton(text = "Sign in", onClick = {}, modifier = Modifier.fillMaxWidth())
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
    CaveButton(
        text = "Email",
        onClick = {},
        variant = CaveButtonVariant.Outline,
        leadingIcon = Icons.Filled.Email,
    )
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
    CaveButton(text = "Compose", onClick = {}, variant = CaveButtonVariant.Outline)
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
];
