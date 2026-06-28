import {
  Activity,
  ArrowDown,
  ArrowUp,
  Bell,
  Bug,
  Camera,
  Check,
  ChevronDown,
  Clock,
  Cloud,
  Coffee,
  Crown,
  Database,
  Download,
  Droplet,
  Eye,
  Flame,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  Loader2,
  Lock,
  Mail,
  Mic,
  Moon,
  Music,
  Phone,
  Play,
  Plus,
  Power,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Snowflake,
  Sparkles,
  Star,
  Sun,
  Terminal,
  ThumbsUp,
  TrendingUp,
  Upload,
  Volume2,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import type { Variant } from "./types";

const icon = (id: string, name: string, code: string, node: React.ReactNode): Variant => ({
  id,
  name,
  category: "icons",
  tags: ["animated"],
  code,
  preview: <div className="text-primary">{node}</div>,
});

export const icons: Variant[] = [
  icon(
    "icon-spinner",
    "Spinner",
    `Icon(
    imageVector = Icons.Filled.Autorenew,
    contentDescription = null,
    modifier = Modifier.rotating(), // infinite 360° rotation
)`,
    <Loader2 className="size-9 animate-spin" />,
  ),
  icon(
    "icon-refresh",
    "Refresh",
    `val angle by rememberInfiniteTransition().animateFloat(0f, 360f, infiniteRepeatable(tween(1200)))
Icon(Icons.Filled.Refresh, null, Modifier.rotate(angle))`,
    <RefreshCw className="size-9 animate-spin" />,
  ),
  icon(
    "icon-heartbeat",
    "Heartbeat",
    `val scale by rememberInfiniteTransition().animateFloat(1f, 1.25f, infiniteRepeatable(tween(600), RepeatMode.Reverse))
Icon(Icons.Filled.Favorite, null, Modifier.scale(scale), tint = Color(0xFFE11D48))`,
    <Heart className="size-9 animate-pulse fill-rose-500 text-rose-500" />,
  ),
  icon(
    "icon-bell-ring",
    "Bell ring",
    `val angle by rememberInfiniteTransition().animateFloat(-12f, 12f, infiniteRepeatable(tween(180), RepeatMode.Reverse))
Icon(Icons.Filled.Notifications, null, Modifier.rotate(angle))`,
    <Bell className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-star-pop",
    "Star pop",
    `val scale by rememberInfiniteTransition().animateFloat(0.85f, 1.15f, infiniteRepeatable(tween(900), RepeatMode.Reverse))
Icon(Icons.Filled.Star, null, Modifier.scale(scale), tint = Color(0xFFF59E0B))`,
    <Star className="size-9 animate-pulse fill-amber-400 text-amber-400" />,
  ),
  icon(
    "icon-sun",
    "Spinning sun",
    `Icon(Icons.Filled.WbSunny, null, Modifier.rotating(durationMillis = 6000))`,
    <Sun className="size-9 animate-[spin_6s_linear_infinite]" />,
  ),
  icon(
    "icon-sparkle",
    "Sparkle",
    `val alpha by rememberInfiniteTransition().animateFloat(0.4f, 1f, infiniteRepeatable(tween(800), RepeatMode.Reverse))
Icon(Icons.Filled.AutoAwesome, null, Modifier.alpha(alpha))`,
    <Sparkles className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-zap",
    "Zap pulse",
    `val scale by rememberInfiniteTransition().animateFloat(0.9f, 1.2f, infiniteRepeatable(tween(500), RepeatMode.Reverse))
Icon(Icons.Filled.Bolt, null, Modifier.scale(scale), tint = Color(0xFFF59E0B))`,
    <Zap className="size-9 animate-pulse fill-amber-400 text-amber-400" />,
  ),
  icon(
    "icon-bounce",
    "Bounce",
    `val y by rememberInfiniteTransition().animateFloat(0f, -8f, infiniteRepeatable(tween(500), RepeatMode.Reverse))
Icon(Icons.Filled.ArrowDownward, null, Modifier.offset(y = y.dp))`,
    <ArrowDown className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-wifi",
    "Wifi pulse",
    `Icon(Icons.Filled.Wifi, null, Modifier.pulse())`,
    <Wifi className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-activity",
    "Activity",
    `Icon(Icons.Filled.MonitorHeart, null, Modifier.pulse())`,
    <Activity className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-ping",
    "Ping dot",
    `Box {
    Box(Modifier.size(12.dp).background(primary, CircleShape).pingRipple())
}`,
    <span className="relative flex size-6">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
      <span className="relative inline-flex size-6 rounded-full bg-primary" />
    </span>,
  ),
  icon(
    "icon-close-spin",
    "Close spin",
    `val angle by rememberInfiniteTransition().animateFloat(0f, 360f, infiniteRepeatable(tween(900)))
Icon(Icons.Filled.Close, null, Modifier.rotate(angle))`,
    <X className="size-9 animate-spin" />,
  ),
  icon(
    "icon-plus-pulse",
    "Plus pulse",
    `val scale by rememberInfiniteTransition().animateFloat(0.9f, 1.15f, infiniteRepeatable(tween(700), RepeatMode.Reverse))
Icon(Icons.Filled.Add, null, Modifier.scale(scale))`,
    <Plus className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-check-pop",
    "Check pop",
    `val scale by rememberInfiniteTransition().animateFloat(0.8f, 1.1f, infiniteRepeatable(tween(800), RepeatMode.Reverse))
Icon(Icons.Filled.Check, null, Modifier.scale(scale))`,
    <Check className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-settings-spin",
    "Settings spin",
    `val angle by rememberInfiniteTransition().animateFloat(0f, 360f, infiniteRepeatable(tween(6000, easing = LinearEasing)))
Icon(Icons.Filled.Settings, null, Modifier.rotate(angle))`,
    <Settings className="size-9 animate-[spin_6s_linear_infinite]" />,
  ),
  icon(
    "icon-search-pulse",
    "Search pulse",
    `val alpha by rememberInfiniteTransition().animateFloat(0.4f, 1f, infiniteRepeatable(tween(800), RepeatMode.Reverse))
Icon(Icons.Filled.Search, null, Modifier.alpha(alpha))`,
    <Search className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-arrow-up-bounce",
    "Arrow up",
    `val y by rememberInfiniteTransition().animateFloat(0f, -8f, infiniteRepeatable(tween(500), RepeatMode.Reverse))
Icon(Icons.Filled.ArrowUpward, null, Modifier.offset(y = y.dp))`,
    <ArrowUp className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-chevron-bounce",
    "Chevron bounce",
    `val y by rememberInfiniteTransition().animateFloat(0f, 6f, infiniteRepeatable(tween(450), RepeatMode.Reverse))
Icon(Icons.Filled.KeyboardArrowDown, null, Modifier.offset(y = y.dp))`,
    <ChevronDown className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-download-bounce",
    "Download",
    `val y by rememberInfiniteTransition().animateFloat(0f, 6f, infiniteRepeatable(tween(500), RepeatMode.Reverse))
Icon(Icons.Filled.Download, null, Modifier.offset(y = y.dp))`,
    <Download className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-upload-bounce",
    "Upload",
    `val y by rememberInfiniteTransition().animateFloat(0f, -6f, infiniteRepeatable(tween(500), RepeatMode.Reverse))
Icon(Icons.Filled.Upload, null, Modifier.offset(y = y.dp))`,
    <Upload className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-mail-pulse",
    "Mail pulse",
    `val scale by rememberInfiniteTransition().animateFloat(0.92f, 1.08f, infiniteRepeatable(tween(700), RepeatMode.Reverse))
Icon(Icons.Filled.Mail, null, Modifier.scale(scale))`,
    <Mail className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-moon-glow",
    "Moon glow",
    `val alpha by rememberInfiniteTransition().animateFloat(0.5f, 1f, infiniteRepeatable(tween(1500), RepeatMode.Reverse))
Icon(Icons.Filled.DarkMode, null, Modifier.alpha(alpha))`,
    <Moon className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-cloud-float",
    "Cloud float",
    `val y by rememberInfiniteTransition().animateFloat(0f, -5f, infiniteRepeatable(tween(900), RepeatMode.Reverse))
Icon(Icons.Filled.Cloud, null, Modifier.offset(y = y.dp))`,
    <Cloud className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-snowflake-spin",
    "Snowflake spin",
    `val angle by rememberInfiniteTransition().animateFloat(0f, 360f, infiniteRepeatable(tween(6000, easing = LinearEasing)))
Icon(Icons.Filled.AcUnit, null, Modifier.rotate(angle))`,
    <Snowflake className="size-9 animate-[spin_6s_linear_infinite]" />,
  ),
  icon(
    "icon-flame-flicker",
    "Flame flicker",
    `val scale by rememberInfiniteTransition().animateFloat(0.85f, 1.15f, infiniteRepeatable(tween(400), RepeatMode.Reverse))
Icon(Icons.Filled.LocalFireDepartment, null, Modifier.scale(scale), tint = Color(0xFFF59E0B))`,
    <Flame className="size-9 animate-pulse fill-amber-400 text-amber-400" />,
  ),
  icon(
    "icon-droplet-drip",
    "Droplet drip",
    `val y by rememberInfiniteTransition().animateFloat(0f, 6f, infiniteRepeatable(tween(700), RepeatMode.Reverse))
Icon(Icons.Filled.WaterDrop, null, Modifier.offset(y = y.dp))`,
    <Droplet className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-leaf-sway",
    "Leaf sway",
    `val angle by rememberInfiniteTransition().animateFloat(-8f, 8f, infiniteRepeatable(tween(900), RepeatMode.Reverse))
Icon(Icons.Filled.Eco, null, Modifier.rotate(angle))`,
    <Leaf className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-rocket-launch",
    "Rocket launch",
    `val y by rememberInfiniteTransition().animateFloat(0f, -8f, infiniteRepeatable(tween(450), RepeatMode.Reverse))
Icon(Icons.Filled.Rocket, null, Modifier.offset(y = y.dp))`,
    <Rocket className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-crown-shine",
    "Crown shine",
    `val scale by rememberInfiniteTransition().animateFloat(0.92f, 1.1f, infiniteRepeatable(tween(800), RepeatMode.Reverse))
Icon(Icons.Filled.WorkspacePremium, null, Modifier.scale(scale), tint = Color(0xFFF59E0B))`,
    <Crown className="size-9 animate-pulse fill-amber-400 text-amber-400" />,
  ),
  icon(
    "icon-coffee-steam",
    "Coffee steam",
    `val alpha by rememberInfiniteTransition().animateFloat(0.5f, 1f, infiniteRepeatable(tween(1000), RepeatMode.Reverse))
Icon(Icons.Filled.Coffee, null, Modifier.alpha(alpha))`,
    <Coffee className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-music-beat",
    "Music beat",
    `val y by rememberInfiniteTransition().animateFloat(0f, -6f, infiniteRepeatable(tween(350), RepeatMode.Reverse))
Icon(Icons.Filled.MusicNote, null, Modifier.offset(y = y.dp))`,
    <Music className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-mic-record",
    "Mic record",
    `val scale by rememberInfiniteTransition().animateFloat(0.9f, 1.2f, infiniteRepeatable(tween(600), RepeatMode.Reverse))
Icon(Icons.Filled.Mic, null, Modifier.scale(scale), tint = Color(0xFFE11D48))`,
    <Mic className="size-9 animate-pulse fill-rose-500 text-rose-500" />,
  ),
  icon(
    "icon-volume-wave",
    "Volume wave",
    `val scale by rememberInfiniteTransition().animateFloat(0.9f, 1.1f, infiniteRepeatable(tween(600), RepeatMode.Reverse))
Icon(Icons.Filled.VolumeUp, null, Modifier.scale(scale))`,
    <Volume2 className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-play-pulse",
    "Play pulse",
    `val scale by rememberInfiniteTransition().animateFloat(0.9f, 1.12f, infiniteRepeatable(tween(700), RepeatMode.Reverse))
Icon(Icons.Filled.PlayArrow, null, Modifier.scale(scale))`,
    <Play className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-globe-spin",
    "Globe spin",
    `val angle by rememberInfiniteTransition().animateFloat(0f, 360f, infiniteRepeatable(tween(6000, easing = LinearEasing)))
Icon(Icons.Filled.Public, null, Modifier.rotate(angle))`,
    <Globe className="size-9 animate-[spin_6s_linear_infinite]" />,
  ),
  icon(
    "icon-clock-tick",
    "Clock tick",
    `val angle by rememberInfiniteTransition().animateFloat(0f, 360f, infiniteRepeatable(tween(6000, easing = LinearEasing)))
Icon(Icons.Filled.Schedule, null, Modifier.rotate(angle))`,
    <Clock className="size-9 animate-[spin_6s_linear_infinite]" />,
  ),
  icon(
    "icon-shield-pulse",
    "Shield pulse",
    `val scale by rememberInfiniteTransition().animateFloat(0.92f, 1.08f, infiniteRepeatable(tween(900), RepeatMode.Reverse))
Icon(Icons.Filled.Shield, null, Modifier.scale(scale))`,
    <Shield className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-lightbulb-glow",
    "Lightbulb glow",
    `val alpha by rememberInfiniteTransition().animateFloat(0.4f, 1f, infiniteRepeatable(tween(700), RepeatMode.Reverse))
Icon(Icons.Filled.Lightbulb, null, Modifier.alpha(alpha), tint = Color(0xFFF59E0B))`,
    <Lightbulb className="size-9 animate-pulse fill-amber-400 text-amber-400" />,
  ),
  icon(
    "icon-bug-crawl",
    "Bug crawl",
    `val y by rememberInfiniteTransition().animateFloat(0f, -5f, infiniteRepeatable(tween(400), RepeatMode.Reverse))
Icon(Icons.Filled.BugReport, null, Modifier.offset(y = y.dp))`,
    <Bug className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-terminal-blink",
    "Terminal blink",
    `val alpha by rememberInfiniteTransition().animateFloat(0.3f, 1f, infiniteRepeatable(tween(600), RepeatMode.Reverse))
Icon(Icons.Filled.Terminal, null, Modifier.alpha(alpha))`,
    <Terminal className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-database-pulse",
    "Database pulse",
    `val scale by rememberInfiniteTransition().animateFloat(0.94f, 1.06f, infiniteRepeatable(tween(800), RepeatMode.Reverse))
Icon(Icons.Filled.Storage, null, Modifier.scale(scale))`,
    <Database className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-power-pulse",
    "Power pulse",
    `val alpha by rememberInfiniteTransition().animateFloat(0.5f, 1f, infiniteRepeatable(tween(900), RepeatMode.Reverse))
Icon(Icons.Filled.PowerSettingsNew, null, Modifier.alpha(alpha))`,
    <Power className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-eye-blink",
    "Eye blink",
    `val alpha by rememberInfiniteTransition().animateFloat(0.3f, 1f, infiniteRepeatable(tween(1200), RepeatMode.Reverse))
Icon(Icons.Filled.Visibility, null, Modifier.alpha(alpha))`,
    <Eye className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-lock-pulse",
    "Lock pulse",
    `val scale by rememberInfiniteTransition().animateFloat(0.92f, 1.08f, infiniteRepeatable(tween(700), RepeatMode.Reverse))
Icon(Icons.Filled.Lock, null, Modifier.scale(scale))`,
    <Lock className="size-9 animate-pulse" />,
  ),
  icon(
    "icon-cart-bounce",
    "Cart bounce",
    `val y by rememberInfiniteTransition().animateFloat(0f, -6f, infiniteRepeatable(tween(500), RepeatMode.Reverse))
Icon(Icons.Filled.ShoppingCart, null, Modifier.offset(y = y.dp))`,
    <ShoppingCart className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-trending-up",
    "Trending up",
    `val y by rememberInfiniteTransition().animateFloat(0f, -6f, infiniteRepeatable(tween(550), RepeatMode.Reverse))
Icon(Icons.Filled.TrendingUp, null, Modifier.offset(y = y.dp))`,
    <TrendingUp className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-thumbs-up",
    "Thumbs up",
    `val y by rememberInfiniteTransition().animateFloat(0f, -7f, infiniteRepeatable(tween(450), RepeatMode.Reverse))
Icon(Icons.Filled.ThumbUp, null, Modifier.offset(y = y.dp))`,
    <ThumbsUp className="size-9 animate-bounce" />,
  ),
  icon(
    "icon-phone-ring",
    "Phone ring",
    `Box(contentAlignment = Alignment.Center) {
    Icon(Icons.Filled.Call, null, Modifier.pingRipple()) // expanding fade copy
    Icon(Icons.Filled.Call, null)
}`,
    <span className="relative inline-flex size-9 items-center justify-center">
      <Phone className="absolute size-9 animate-ping opacity-60" />
      <Phone className="relative size-9" />
    </span>,
  ),
  icon(
    "icon-camera-flash",
    "Camera flash",
    `val t by rememberInfiniteTransition().animateFloat(0f, 1f, infiniteRepeatable(tween(1000)))
Icon(Icons.Filled.PhotoCamera, null, Modifier.scale(1f + t * 0.4f).alpha(1f - t))`,
    <Camera className="size-9 animate-ping" />,
  ),
];
