import {
  AlarmClock,
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowDown,
  ArrowUp,
  BatteryLow,
  Bell,
  Bluetooth,
  Bold,
  Bookmark,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  Eye,
  Flag,
  Flashlight,
  Gauge,
  Heart,
  Home,
  Italic,
  Layers,
  LayoutGrid,
  List,
  Lock,
  Map,
  MapPin,
  Maximize2,
  Menu,
  MicOff,
  Minus,
  Monitor,
  Moon,
  MoonStar,
  Navigation,
  Pause,
  Pin,
  Plane,
  Play,
  Plus,
  Power,
  Rabbit,
  Radio,
  RefreshCw,
  Repeat,
  Search,
  Settings,
  Shuffle,
  SignalHigh,
  Smartphone,
  Square,
  Star,
  Sun,
  SunMoon,
  Tablet,
  ThumbsUp,
  Turtle,
  Underline,
  User,
  Volume1,
  Volume2,
  Wifi,
  X,
  Zap,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type { Variant } from "./types";

export const toggles: Variant[] = [
  {
    id: "toggle-power",
    name: "Power",
    category: "toggles",
    description: "Hardware-style switch glowing green with a power glyph on its thumb.",
    tags: ["animated"],
    code: `@Composable
fun PowerToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.PowerSettingsNew,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedThumbColor = Color.White,
      checkedTrackColor = Color(0xFF22C55E),
      checkedIconColor = Color(0xFF15803D),
      uncheckedTrackColor =
        MaterialTheme.colorScheme.surfaceVariant,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-emerald-500 px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Power className="size-3.5 text-emerald-600" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-wifi",
    name: "Wi-Fi",
    category: "toggles",
    description: "Connectivity switch swapping between active and crossed-out signal icons.",
    tags: ["animated"],
    code: `@Composable
fun WifiToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on) Icons.Filled.Wifi
          else Icons.Filled.WifiOff,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Wifi className="size-3.5 text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-bluetooth",
    name: "Bluetooth",
    category: "toggles",
    description: "Pairing switch riding a deep blue track with a Bluetooth thumb.",
    code: `@Composable
fun BluetoothToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.Bluetooth,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedThumbColor = Color.White,
      checkedTrackColor = Color(0xFF2563EB),
      checkedIconColor = Color(0xFF1D4ED8),
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-blue-600 px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Bluetooth className="size-3.5 text-blue-700" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-airplane",
    name: "Airplane Mode",
    category: "toggles",
    description: "Flight switch lifting a plane thumb across a tinted track.",
    code: `@Composable
fun AirplaneToggle() {
  var on by remember { mutableStateOf(false) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.AirplanemodeActive,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.tertiary,
      checkedIconColor =
        MaterialTheme.colorScheme.tertiary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-muted px-0.5">
        <span className="flex size-6 items-center justify-center rounded-full bg-white shadow">
          <Plane className="size-3.5 text-muted-foreground" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-lock",
    name: "Lock",
    category: "toggles",
    description: "Security switch flipping between open and closed padlock thumbs.",
    tags: ["animated"],
    code: `@Composable
fun LockToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on) Icons.Filled.Lock
          else Icons.Filled.LockOpen,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Lock className="size-3.5 text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-bell",
    name: "Bell",
    category: "toggles",
    description: "Alert switch toggling between ringing and silenced bell thumbs.",
    tags: ["animated"],
    code: `@Composable
fun BellToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on) Icons.Filled.Notifications
          else Icons.Filled.NotificationsOff,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.secondary,
      checkedIconColor =
        MaterialTheme.colorScheme.secondary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-secondary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Bell className="size-3.5 text-secondary-foreground" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-mic",
    name: "Microphone",
    category: "toggles",
    description: "Capture switch turning red and crossed when the mic mutes.",
    tags: ["animated"],
    code: `@Composable
fun MicToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on) Icons.Filled.Mic
          else Icons.Filled.MicOff,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      uncheckedTrackColor = Color(0xFFEF4444),
      uncheckedThumbColor = Color.White,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-red-500 px-0.5">
        <span className="flex size-6 items-center justify-center rounded-full bg-white shadow">
          <MicOff className="size-3.5 text-red-500" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-camera",
    name: "Camera",
    category: "toggles",
    description: "Recording switch swapping live and disabled camera thumbs smoothly.",
    tags: ["animated"],
    code: `@Composable
fun CameraToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on) Icons.Filled.Videocam
          else Icons.Filled.VideocamOff,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Camera className="size-3.5 text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-flash",
    name: "Flash",
    category: "toggles",
    description: "Torch switch sparking a lightning thumb over an amber track.",
    code: `@Composable
fun FlashToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.FlashOn,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedThumbColor = Color.White,
      checkedTrackColor = Color(0xFFF59E0B),
      checkedIconColor = Color(0xFFB45309),
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-amber-500 px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Zap className="size-3.5 text-amber-600" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-location",
    name: "Location",
    category: "toggles",
    description: "Place switch dropping a map pin thumb when sharing enables.",
    code: `@Composable
fun LocationToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.LocationOn,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.error,
      checkedIconColor =
        MaterialTheme.colorScheme.error,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-rose-500 px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <MapPin className="size-3.5 text-rose-600" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-eye",
    name: "Visibility",
    category: "toggles",
    description: "Reveal switch alternating open and slashed eye thumbs on tap.",
    tags: ["animated"],
    code: `@Composable
fun VisibilityToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on) Icons.Filled.Visibility
          else Icons.Filled.VisibilityOff,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Eye className="size-3.5 text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-volume",
    name: "Volume",
    category: "toggles",
    description: "Audio switch swapping loud and muted speaker thumbs on change.",
    tags: ["animated"],
    code: `@Composable
fun VolumeToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on)
          Icons.AutoMirrored.Filled.VolumeUp
          else Icons.AutoMirrored.Filled.VolumeOff,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Volume2 className="size-3.5 text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-play",
    name: "Play & Pause",
    category: "toggles",
    description: "Playback switch flipping between play and pause glyph thumbs.",
    tags: ["animated"],
    code: `@Composable
fun PlayPauseToggle() {
  var on by remember { mutableStateOf(false) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = if (on) Icons.Filled.Pause
          else Icons.Filled.PlayArrow,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-muted px-0.5">
        <span className="flex size-6 items-center justify-center rounded-full bg-white shadow">
          <Play className="size-3.5 text-muted-foreground" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-sync",
    name: "Sync",
    category: "toggles",
    description: "Sync switch spinning its arrows thumb continuously while active.",
    tags: ["animated"],
    code: `@Composable
fun SyncToggle() {
  var on by remember { mutableStateOf(true) }
  val angle by rememberInfiniteTransition()
    .animateFloat(
      initialValue = 0f,
      targetValue = 360f,
      animationSpec = infiniteRepeatable(
        animation = tween(1000, easing = LinearEasing),
      ),
    )
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.Sync,
        contentDescription = null,
        modifier = Modifier
          .size(SwitchDefaults.IconSize)
          .graphicsLayer {
            rotationZ = if (on) angle else 0f
          },
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <RefreshCw className="size-3.5 animate-spin text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-battery-saver",
    name: "Battery Saver",
    category: "toggles",
    description: "Power-saving switch greening its track behind a low-battery thumb.",
    code: `@Composable
fun BatterySaverToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.BatterySaver,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedThumbColor = Color.White,
      checkedTrackColor = Color(0xFF16A34A),
      checkedIconColor = Color(0xFF15803D),
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-green-600 px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <BatteryLow className="size-3.5 text-green-700" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-dnd",
    name: "Do Not Disturb",
    category: "toggles",
    description: "Quiet switch dimming the screen with an indigo moon track.",
    code: `@Composable
fun DoNotDisturbToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.DarkMode,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedThumbColor = Color.White,
      checkedTrackColor = Color(0xFF6366F1),
      checkedIconColor = Color(0xFF4338CA),
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-indigo-500 px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Moon className="size-3.5 text-indigo-600" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-hotspot",
    name: "Hotspot",
    category: "toggles",
    description: "Tethering switch broadcasting a radio-wave thumb across the track.",
    code: `@Composable
fun HotspotToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.WifiTethering,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.tertiary,
      checkedIconColor =
        MaterialTheme.colorScheme.tertiary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Radio className="size-3.5 text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-gps",
    name: "GPS",
    category: "toggles",
    description: "Navigation switch aiming a directional arrow thumb when positioning locks.",
    code: `@Composable
fun GpsToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.Navigation,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.primary,
      checkedIconColor =
        MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Navigation className="size-3.5 text-primary" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-nightlight",
    name: "Night Light",
    category: "toggles",
    description: "Warm switch glowing amber behind a crescent-and-star thumb at dusk.",
    code: `@Composable
fun NightLightToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.NightlightRound,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedThumbColor = Color.White,
      checkedTrackColor = Color(0xFFFBBF24),
      checkedIconColor = Color(0xFFB45309),
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-amber-400 px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <MoonStar className="size-3.5 text-amber-600" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-data-saver",
    name: "Data Saver",
    category: "toggles",
    description: "Usage switch metering traffic with a gauge thumb when restricted.",
    code: `@Composable
fun DataSaverToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    thumbContent = {
      Icon(
        imageVector = Icons.Filled.Speed,
        contentDescription = null,
        modifier = Modifier.size(
          SwitchDefaults.IconSize,
        ),
      )
    },
    colors = SwitchDefaults.colors(
      checkedTrackColor =
        MaterialTheme.colorScheme.secondary,
      checkedIconColor =
        MaterialTheme.colorScheme.secondary,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-secondary px-0.5">
        <span className="flex size-6 translate-x-5 items-center justify-center rounded-full bg-white shadow">
          <Gauge className="size-3.5 text-secondary-foreground" />
        </span>
      </span>
    ),
  },
  {
    id: "toggle-emerald-track",
    name: "Emerald",
    category: "toggles",
    description: "Clean switch pairing a bright emerald track with a bare thumb.",
    code: `@Composable
fun EmeraldToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    colors = SwitchDefaults.colors(
      checkedThumbColor = Color.White,
      checkedTrackColor = Color(0xFF10B981),
      checkedBorderColor = Color.Transparent,
      uncheckedTrackColor =
        MaterialTheme.colorScheme.surfaceVariant,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-emerald-500 px-0.5">
        <span className="size-6 translate-x-5 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-gradient-track",
    name: "Gradient",
    category: "toggles",
    description: "Switch sliding its thumb across an amber-into-orange gradient track.",
    code: `@Composable
fun GradientToggle() {
  var on by remember { mutableStateOf(true) }
  val brush = Brush.horizontalGradient(
    listOf(Color(0xFFF59E0B), Color(0xFFEA580C)),
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(
        if (on) brush
        else SolidColor(
          MaterialTheme.colorScheme.surfaceVariant,
        ),
      ),
    contentAlignment = Alignment.Center,
  ) {
    Switch(
      checked = on,
      onCheckedChange = { on = it },
      colors = SwitchDefaults.colors(
        checkedTrackColor = Color.Transparent,
        uncheckedTrackColor = Color.Transparent,
        checkedBorderColor = Color.Transparent,
        uncheckedBorderColor = Color.Transparent,
      ),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-600 px-0.5">
        <span className="size-6 translate-x-5 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-neon-glow",
    name: "Neon Glow",
    category: "toggles",
    description: "Dark switch pulsing a neon-cyan thumb wrapped in a glowing ring.",
    tags: ["animated"],
    code: `@Composable
fun NeonGlowToggle() {
  var on by remember { mutableStateOf(true) }
  val glow by animateDpAsState(
    targetValue = if (on) 12.dp else 0.dp,
    animationSpec = tween(400),
  )
  val cyan = Color(0xFF22D3EE)
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(Color(0xFF0F172A)),
    contentAlignment = Alignment.CenterEnd,
  ) {
    Box(
      modifier = Modifier
        .padding(4.dp)
        .size(24.dp)
        .shadow(
          elevation = glow,
          shape = CircleShape,
          ambientColor = cyan,
          spotColor = cyan,
        )
        .clip(CircleShape)
        .background(cyan)
        .clickable { on = !on },
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-slate-900 px-0.5">
        <span className="size-6 translate-x-5 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.8)] ring-2 ring-cyan-300/60" />
      </span>
    ),
  },
  {
    id: "toggle-sunset",
    name: "Sunset",
    category: "toggles",
    description: "Switch gliding its thumb over a rose-into-orange sunset gradient.",
    code: `@Composable
fun SunsetToggle() {
  var on by remember { mutableStateOf(true) }
  val brush = Brush.horizontalGradient(
    listOf(Color(0xFFF43F5E), Color(0xFFF97316)),
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(
        if (on) brush
        else SolidColor(
          MaterialTheme.colorScheme.surfaceVariant,
        ),
      ),
    contentAlignment = Alignment.Center,
  ) {
    Switch(
      checked = on,
      onCheckedChange = { on = it },
      colors = SwitchDefaults.colors(
        checkedTrackColor = Color.Transparent,
        uncheckedTrackColor = Color.Transparent,
        checkedBorderColor = Color.Transparent,
        uncheckedBorderColor = Color.Transparent,
      ),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-0.5">
        <span className="size-6 translate-x-5 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-ocean",
    name: "Ocean",
    category: "toggles",
    description: "Switch drifting its thumb across a sky-into-deep-blue ocean gradient.",
    code: `@Composable
fun OceanToggle() {
  var on by remember { mutableStateOf(true) }
  val brush = Brush.horizontalGradient(
    listOf(Color(0xFF38BDF8), Color(0xFF2563EB)),
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(
        if (on) brush
        else SolidColor(
          MaterialTheme.colorScheme.surfaceVariant,
        ),
      ),
    contentAlignment = Alignment.Center,
  ) {
    Switch(
      checked = on,
      onCheckedChange = { on = it },
      colors = SwitchDefaults.colors(
        checkedTrackColor = Color.Transparent,
        uncheckedTrackColor = Color.Transparent,
        checkedBorderColor = Color.Transparent,
        uncheckedBorderColor = Color.Transparent,
      ),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-0.5">
        <span className="size-6 translate-x-5 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-square-knob",
    name: "Square Knob",
    category: "toggles",
    description: "Switch with a squared track and a sliding rounded-square knob.",
    tags: ["animated"],
    code: `@Composable
fun SquareKnobToggle() {
  var on by remember { mutableStateOf(true) }
  val offset by animateDpAsState(
    targetValue = if (on) 20.dp else 0.dp,
    label = "offset",
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(RoundedCornerShape(8.dp))
      .background(
        if (on) MaterialTheme.colorScheme.primary
        else MaterialTheme.colorScheme.surfaceVariant,
      )
      .clickable { on = !on }
      .padding(4.dp),
    contentAlignment = Alignment.CenterStart,
  ) {
    Box(
      Modifier
        .offset(x = offset)
        .size(24.dp)
        .clip(RoundedCornerShape(6.dp))
        .background(Color.White),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-md bg-primary px-0.5">
        <span className="size-6 translate-x-5 rounded-[4px] bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-large",
    name: "Large",
    category: "toggles",
    description: "Oversized switch scaled up for prominent, touch-friendly settings rows.",
    code: `@Composable
fun LargeToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    modifier = Modifier.scale(1.4f),
  )
}`,
    preview: (
      <span className="inline-flex h-9 w-16 items-center rounded-full bg-primary px-1">
        <span className="size-7 translate-x-7 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-mini",
    name: "Mini",
    category: "toggles",
    description: "Compact switch scaled down for dense lists and inline controls.",
    code: `@Composable
fun MiniToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    modifier = Modifier.scale(0.7f),
  )
}`,
    preview: (
      <span className="inline-flex h-4 w-7 items-center rounded-full bg-primary px-0.5">
        <span className="size-3 translate-x-3 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-pill-wide",
    name: "Wide Pill",
    category: "toggles",
    description: "Elongated pill switch giving the knob a longer, dramatic travel path.",
    tags: ["animated"],
    code: `@Composable
fun WidePillToggle() {
  var on by remember { mutableStateOf(true) }
  val offset by animateDpAsState(
    targetValue = if (on) 40.dp else 0.dp,
    label = "offset",
  )
  Box(
    modifier = Modifier
      .width(72.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(
        if (on) MaterialTheme.colorScheme.primary
        else MaterialTheme.colorScheme.surfaceVariant,
      )
      .clickable { on = !on }
      .padding(4.dp),
    contentAlignment = Alignment.CenterStart,
  ) {
    Box(
      Modifier
        .offset(x = offset)
        .size(24.dp)
        .clip(CircleShape)
        .background(Color.White),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-20 items-center rounded-full bg-primary px-0.5">
        <span className="size-6 translate-x-[52px] rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-neumorphic",
    name: "Neumorphic",
    category: "toggles",
    description: "Soft inset switch with a raised knob casting a gentle shadow.",
    tags: ["animated"],
    code: `@Composable
fun NeumorphicToggle() {
  var on by remember { mutableStateOf(true) }
  val offset by animateDpAsState(
    targetValue = if (on) 24.dp else 0.dp,
    label = "offset",
  )
  Box(
    modifier = Modifier
      .width(56.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(MaterialTheme.colorScheme.surfaceVariant)
      .clickable { on = !on }
      .padding(4.dp),
    contentAlignment = Alignment.CenterStart,
  ) {
    Box(
      Modifier
        .offset(x = offset)
        .size(24.dp)
        .shadow(4.dp, CircleShape)
        .clip(CircleShape)
        .background(MaterialTheme.colorScheme.surface),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-8 w-14 items-center rounded-full bg-muted px-1 shadow-inner">
        <span className="size-6 translate-x-6 rounded-full bg-background shadow-md" />
      </span>
    ),
  },
  {
    id: "toggle-outlined-track",
    name: "Outlined",
    category: "toggles",
    description: "Minimal switch with a transparent track outlined by a thin border.",
    code: `@Composable
fun OutlinedToggle() {
  var on by remember { mutableStateOf(true) }
  Switch(
    checked = on,
    onCheckedChange = { on = it },
    colors = SwitchDefaults.colors(
      checkedTrackColor = Color.Transparent,
      checkedThumbColor =
        MaterialTheme.colorScheme.primary,
      checkedBorderColor =
        MaterialTheme.colorScheme.primary,
      uncheckedTrackColor = Color.Transparent,
      uncheckedBorderColor =
        MaterialTheme.colorScheme.outline,
    ),
  )
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full border-2 border-primary px-0.5">
        <span className="size-5 translate-x-5 rounded-full bg-primary" />
      </span>
    ),
  },
  {
    id: "toggle-glass",
    name: "Glass",
    category: "toggles",
    description: "Frosted translucent switch blurring the surface behind its knob.",
    code: `@Composable
fun GlassToggle() {
  var on by remember { mutableStateOf(true) }
  val offset by animateDpAsState(
    targetValue = if (on) 20.dp else 0.dp,
    label = "offset",
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(
        MaterialTheme.colorScheme.primary.copy(
          alpha = 0.18f,
        ),
      )
      .border(
        1.dp,
        Color.White.copy(alpha = 0.4f),
        CircleShape,
      )
      .clickable { on = !on }
      .padding(4.dp),
    contentAlignment = Alignment.CenterStart,
  ) {
    Box(
      Modifier
        .offset(x = offset)
        .size(24.dp)
        .clip(CircleShape)
        .background(Color.White.copy(alpha = 0.85f)),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full border border-white/40 bg-white/20 px-0.5 backdrop-blur">
        <span className="size-6 translate-x-5 rounded-full bg-white/80 shadow" />
      </span>
    ),
  },
  {
    id: "toggle-shadow-thumb",
    name: "Lifted Thumb",
    category: "toggles",
    description: "Switch whose knob floats above the track with a deep shadow.",
    code: `@Composable
fun LiftedThumbToggle() {
  var on by remember { mutableStateOf(true) }
  val offset by animateDpAsState(
    targetValue = if (on) 20.dp else 0.dp,
    label = "offset",
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .background(MaterialTheme.colorScheme.primary)
      .clickable { on = !on }
      .padding(4.dp),
    contentAlignment = Alignment.CenterStart,
  ) {
    Box(
      Modifier
        .offset(x = offset)
        .size(24.dp)
        .shadow(8.dp, CircleShape)
        .clip(CircleShape)
        .background(Color.White),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5">
        <span className="size-6 translate-x-5 rounded-full bg-white shadow-lg shadow-black/40" />
      </span>
    ),
  },
  {
    id: "toggle-dual-tone",
    name: "Dual Tone",
    category: "toggles",
    description: "Switch whose track splits into two contrasting color halves.",
    code: `@Composable
fun DualToneToggle() {
  var on by remember { mutableStateOf(true) }
  val offset by animateDpAsState(
    targetValue = if (on) 20.dp else 0.dp,
    label = "offset",
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .clickable { on = !on },
  ) {
    Row(Modifier.fillMaxSize()) {
      Box(
        Modifier
          .weight(1f)
          .fillMaxHeight()
          .background(Color(0xFFF43F5E)),
      )
      Box(
        Modifier
          .weight(1f)
          .fillMaxHeight()
          .background(Color(0xFF10B981)),
      )
    }
    Box(
      Modifier
        .padding(4.dp)
        .offset(x = offset)
        .size(24.dp)
        .clip(CircleShape)
        .background(Color.White),
    )
  }
}`,
    preview: (
      <span className="relative inline-flex h-7 w-12 items-center rounded-full">
        <span className="absolute inset-0 flex overflow-hidden rounded-full">
          <span className="h-full w-1/2 bg-rose-500" />
          <span className="h-full w-1/2 bg-emerald-500" />
        </span>
        <span className="absolute right-0.5 size-6 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-striped",
    name: "Striped",
    category: "toggles",
    description: "Switch with a diagonally striped track for a playful texture.",
    code: `@Composable
fun StripedToggle() {
  var on by remember { mutableStateOf(true) }
  val stripe = MaterialTheme.colorScheme.primary
  val offset by animateDpAsState(
    targetValue = if (on) 20.dp else 0.dp,
    label = "offset",
  )
  Box(
    modifier = Modifier
      .width(52.dp)
      .height(32.dp)
      .clip(CircleShape)
      .drawBehind {
        drawRect(stripe)
        val step = 12f
        var x = -size.height
        while (x < size.width) {
          drawLine(
            color = Color.White.copy(alpha = 0.25f),
            start = Offset(x, size.height),
            end = Offset(x + size.height, 0f),
            strokeWidth = 4f,
          )
          x += step
        }
      }
      .clickable { on = !on }
      .padding(4.dp),
    contentAlignment = Alignment.CenterStart,
  ) {
    Box(
      Modifier
        .offset(x = offset)
        .size(24.dp)
        .clip(CircleShape)
        .background(Color.White),
    )
  }
}`,
    preview: (
      <span className="inline-flex h-7 w-12 items-center rounded-full bg-primary px-0.5 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.25)_0,rgba(255,255,255,0.25)_3px,transparent_3px,transparent_6px)]">
        <span className="size-6 translate-x-5 rounded-full bg-white shadow" />
      </span>
    ),
  },
  {
    id: "toggle-rounded-check",
    name: "Rounded Check",
    category: "toggles",
    description: "Material checkbox with a rounded square box and crisp checkmark.",
    code: `@Composable
fun RoundedCheck() {
  var checked by remember { mutableStateOf(true) }
  Checkbox(
    checked = checked,
    onCheckedChange = { checked = it },
    colors = CheckboxDefaults.colors(
      checkedColor = MaterialTheme.colorScheme.primary,
    ),
  )
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
        <Check className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-circle-check",
    name: "Circle Check",
    category: "toggles",
    description: "Circular checkbox that fills solid and reveals a centered tick.",
    code: `@Composable
fun CircleCheck() {
  var checked by remember { mutableStateOf(true) }
  Box(
    contentAlignment = Alignment.Center,
    modifier = Modifier
      .size(24.dp)
      .clip(CircleShape)
      .background(
        if (checked) MaterialTheme.colorScheme.primary
        else Color.Transparent,
      )
      .border(
        2.dp,
        if (checked) MaterialTheme.colorScheme.primary
        else MaterialTheme.colorScheme.outline,
        CircleShape,
      )
      .clickable { checked = !checked },
  ) {
    if (checked) {
      Icon(
        Icons.Default.Check,
        contentDescription = null,
        tint = MaterialTheme.colorScheme.onPrimary,
        modifier = Modifier.size(16.dp),
      )
    }
  }
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-square-fill",
    name: "Square Fill",
    category: "toggles",
    description: "Sharp-cornered checkbox filling fully with the primary color.",
    code: `@Composable
fun SquareFillCheck() {
  var checked by remember { mutableStateOf(true) }
  Box(
    contentAlignment = Alignment.Center,
    modifier = Modifier
      .size(24.dp)
      .clip(RoundedCornerShape(2.dp))
      .background(
        if (checked) MaterialTheme.colorScheme.primary
        else Color.Transparent,
      )
      .border(
        2.dp,
        if (checked) MaterialTheme.colorScheme.primary
        else MaterialTheme.colorScheme.outline,
        RoundedCornerShape(2.dp),
      )
      .clickable { checked = !checked },
  ) {
    if (checked) {
      Icon(
        Icons.Default.Check,
        contentDescription = null,
        tint = MaterialTheme.colorScheme.onPrimary,
        modifier = Modifier.size(16.dp),
      )
    }
  }
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-[2px] bg-primary text-primary-foreground">
        <Check className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-draw-check",
    name: "Draw Check",
    category: "toggles",
    description: "Checkbox that springs in scale as its tick is drawn.",
    tags: ["animated"],
    code: `@Composable
fun DrawCheck() {
  var checked by remember { mutableStateOf(true) }
  val scale by animateFloatAsState(
    targetValue = if (checked) 1f else 0.85f,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioMediumBouncy,
    ),
    label = "scale",
  )
  Checkbox(
    checked = checked,
    onCheckedChange = { checked = it },
    modifier = Modifier.graphicsLayer {
      scaleX = scale
      scaleY = scale
    },
  )
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
        <Check className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-indeterminate",
    name: "Indeterminate",
    category: "toggles",
    description: "Tri-state checkbox showing a dash for a partial selection state.",
    code: `@Composable
fun IndeterminateCheck() {
  var state by remember {
    mutableStateOf(ToggleableState.Indeterminate)
  }
  TriStateCheckbox(
    state = state,
    onClick = {
      state = when (state) {
        ToggleableState.On -> ToggleableState.Off
        else -> ToggleableState.On
      }
    },
  )
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
        <Minus className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-heart-check",
    name: "Heart Check",
    category: "toggles",
    description: "Checkbox styled as a heart that fills when an item is chosen.",
    code: `@Composable
fun HeartCheck() {
  var checked by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = checked,
    onCheckedChange = { checked = it },
  ) {
    Icon(
      imageVector = if (checked) Icons.Default.Favorite
        else Icons.Default.FavoriteBorder,
      contentDescription = null,
      tint = MaterialTheme.colorScheme.error,
    )
  }
}`,
    preview: (
      <span className="flex size-6 items-center justify-center">
        <Heart className="size-6 fill-rose-500 text-rose-500" />
      </span>
    ),
  },
  {
    id: "toggle-star-check",
    name: "Star Check",
    category: "toggles",
    description: "Checkbox styled as a star that fills amber when selected.",
    code: `@Composable
fun StarCheck() {
  var checked by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = checked,
    onCheckedChange = { checked = it },
  ) {
    Icon(
      imageVector = if (checked) Icons.Default.Star
        else Icons.Default.StarBorder,
      contentDescription = null,
      tint = MaterialTheme.colorScheme.tertiary,
    )
  }
}`,
    preview: (
      <span className="flex size-6 items-center justify-center">
        <Star className="size-6 fill-amber-400 text-amber-400" />
      </span>
    ),
  },
  {
    id: "toggle-bookmark-check",
    name: "Bookmark",
    category: "toggles",
    description: "Checkbox styled as a bookmark that fills when content is saved.",
    code: `@Composable
fun BookmarkCheck() {
  var checked by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = checked,
    onCheckedChange = { checked = it },
  ) {
    Icon(
      imageVector = if (checked) Icons.Default.Bookmark
        else Icons.Default.BookmarkBorder,
      contentDescription = null,
      tint = MaterialTheme.colorScheme.primary,
    )
  }
}`,
    preview: (
      <span className="flex size-6 items-center justify-center">
        <Bookmark className="size-6 fill-primary text-primary" />
      </span>
    ),
  },
  {
    id: "toggle-bounce-check",
    name: "Bounce Check",
    category: "toggles",
    description: "Checkbox that overshoots with a bouncy spring when toggled on.",
    tags: ["animated"],
    code: `@Composable
fun BounceCheck() {
  var checked by remember { mutableStateOf(true) }
  val scale by animateFloatAsState(
    targetValue = if (checked) 1.15f else 1f,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioHighBouncy,
      stiffness = Spring.StiffnessLow,
    ),
    label = "bounce",
  )
  Checkbox(
    checked = checked,
    onCheckedChange = { checked = it },
    modifier = Modifier.graphicsLayer {
      scaleX = scale
      scaleY = scale
    },
  )
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
        <Check className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-gradient-check",
    name: "Gradient Check",
    category: "toggles",
    description: "Checkbox filling with a fuchsia-to-violet gradient behind the tick.",
    code: `@Composable
fun GradientCheck() {
  var checked by remember { mutableStateOf(true) }
  val brush = Brush.linearGradient(
    listOf(Color(0xFFD946EF), Color(0xFF7C3AED)),
  )
  Box(
    contentAlignment = Alignment.Center,
    modifier = Modifier
      .size(24.dp)
      .clip(RoundedCornerShape(6.dp))
      .then(
        if (checked) Modifier.background(brush)
        else Modifier.border(
          2.dp,
          MaterialTheme.colorScheme.outline,
          RoundedCornerShape(6.dp),
        ),
      )
      .clickable { checked = !checked },
  ) {
    if (checked) {
      Icon(
        Icons.Default.Check,
        contentDescription = null,
        tint = Color.White,
        modifier = Modifier.size(16.dp),
      )
    }
  }
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-[6px] bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
        <Check className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-tristate",
    name: "Tri-State",
    category: "toggles",
    description: "Parent checkbox cycling through checked, indeterminate, and empty states.",
    code: `@Composable
fun TriStateToggle() {
  val children = remember {
    mutableStateListOf(true, false)
  }
  val parent = when {
    children.all { it } -> ToggleableState.On
    children.none { it } -> ToggleableState.Off
    else -> ToggleableState.Indeterminate
  }
  TriStateCheckbox(
    state = parent,
    onClick = {
      val target = parent != ToggleableState.On
      children.indices.forEach { children[it] = target }
    },
  )
}`,
    preview: (
      <div className="flex gap-2">
        <span className="flex size-6 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
          <Check className="size-4" strokeWidth={3} />
        </span>
        <span className="flex size-6 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
          <Minus className="size-4" strokeWidth={3} />
        </span>
        <span className="size-6 rounded-[6px] border-2 border-input" />
      </div>
    ),
  },
  {
    id: "toggle-chip-check",
    name: "Filter Chip",
    category: "toggles",
    description: "Selectable filter chip that reveals a leading check when active.",
    code: `@Composable
fun FilterChipToggle() {
  var selected by remember { mutableStateOf(true) }
  FilterChip(
    selected = selected,
    onClick = { selected = !selected },
    label = {
      Icon(
        Icons.Default.Star,
        contentDescription = null,
        modifier = Modifier.size(18.dp),
      )
    },
    leadingIcon = if (selected) {
      {
        Icon(
          Icons.Default.Check,
          contentDescription = null,
          modifier = Modifier.size(
            FilterChipDefaults.IconSize,
          ),
        )
      }
    } else null,
  )
}`,
    preview: (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
        <Check className="size-4" strokeWidth={3} />
        <Star className="size-4" />
      </span>
    ),
  },
  {
    id: "toggle-cross-uncheck",
    name: "Cross",
    category: "toggles",
    description: "Box that swaps between a cross when off and check when on.",
    tags: ["animated"],
    code: `@Composable
fun CrossToggle() {
  var on by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = on,
    onCheckedChange = { on = it },
  ) {
    Box(
      contentAlignment = Alignment.Center,
      modifier = Modifier
        .size(24.dp)
        .clip(RoundedCornerShape(6.dp))
        .background(
          if (on) MaterialTheme.colorScheme.primary
          else MaterialTheme.colorScheme.surfaceVariant,
        ),
    ) {
      Icon(
        imageVector = if (on) Icons.Default.Check
          else Icons.Default.Close,
        contentDescription = null,
        tint = if (on)
          MaterialTheme.colorScheme.onPrimary
        else
          MaterialTheme.colorScheme.onSurfaceVariant,
        modifier = Modifier.size(16.dp),
      )
    }
  }
}`,
    preview: (
      <div className="flex gap-3">
        <span className="flex size-6 items-center justify-center rounded-[6px] bg-primary text-primary-foreground">
          <Check className="size-4" strokeWidth={3} />
        </span>
        <span className="flex size-6 items-center justify-center rounded-[6px] bg-muted text-muted-foreground">
          <X className="size-4" strokeWidth={3} />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-ring-check",
    name: "Ring Check",
    category: "toggles",
    description: "Thick-ringed circular checkbox holding a small centered tick.",
    code: `@Composable
fun RingCheck() {
  var checked by remember { mutableStateOf(true) }
  Box(
    contentAlignment = Alignment.Center,
    modifier = Modifier
      .size(24.dp)
      .clip(CircleShape)
      .border(
        width = 4.dp,
        color = if (checked)
          MaterialTheme.colorScheme.primary
        else
          MaterialTheme.colorScheme.outline,
        shape = CircleShape,
      )
      .clickable { checked = !checked },
  ) {
    if (checked) {
      Icon(
        Icons.Default.Check,
        contentDescription = null,
        tint = MaterialTheme.colorScheme.primary,
        modifier = Modifier.size(12.dp),
      )
    }
  }
}`,
    preview: (
      <span className="flex size-6 items-center justify-center rounded-full border-4 border-primary text-primary">
        <Check className="size-3" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-plus-check",
    name: "Add Toggle",
    category: "toggles",
    description: "Round button morphing a plus into a check when an item adds.",
    tags: ["animated"],
    code: `@Composable
fun AddToggle() {
  var added by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = added,
    onCheckedChange = { added = it },
  ) {
    Box(
      contentAlignment = Alignment.Center,
      modifier = Modifier
        .size(28.dp)
        .clip(CircleShape)
        .background(
          if (added) MaterialTheme.colorScheme.primary
          else MaterialTheme.colorScheme.surfaceVariant,
        ),
    ) {
      AnimatedContent(targetState = added, label = "add") {
        Icon(
          imageVector = if (it) Icons.Default.Check
            else Icons.Default.Add,
          contentDescription = null,
          tint = if (it)
            MaterialTheme.colorScheme.onPrimary
          else
            MaterialTheme.colorScheme.onSurfaceVariant,
          modifier = Modifier.size(16.dp),
        )
      }
    }
  }
}`,
    preview: (
      <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-4" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-radio-dot",
    name: "Radio",
    category: "toggles",
    description: "Classic Material radio with a filled dot indicating the selected option.",
    code: `@Composable
fun DotRadioGroup() {
  val options = listOf("A", "B", "C")
  var selected by remember { mutableStateOf(options.first()) }
  Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
    options.forEach { option ->
      RadioButton(
        selected = option == selected,
        onClick = { selected = option },
        colors = RadioButtonDefaults.colors(
          selectedColor =
            MaterialTheme.colorScheme.primary,
          unselectedColor =
            MaterialTheme.colorScheme.outline,
        ),
      )
    }
  }
}`,
    preview: (
      <div className="flex flex-col gap-3">
        <span className="flex size-5 items-center justify-center rounded-full border-2 border-primary">
          <span className="size-2.5 rounded-full bg-primary" />
        </span>
        <span className="size-5 rounded-full border-2 border-input" />
        <span className="size-5 rounded-full border-2 border-input" />
      </div>
    ),
  },
  {
    id: "toggle-radio-ring",
    name: "Ring Radio",
    category: "toggles",
    description: "Thick-ringed radio emphasizing the active selection with a bold outline.",
    code: `@Composable
fun RingRadioGroup() {
  var selected by remember { mutableStateOf(0) }
  Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
    repeat(3) { index ->
      val active = index == selected
      Box(
        modifier = Modifier
          .size(24.dp)
          .clip(CircleShape)
          .border(
            width = if (active) 6.dp else 2.dp,
            color = if (active)
              MaterialTheme.colorScheme.primary
            else
              MaterialTheme.colorScheme.outline,
            shape = CircleShape,
          )
          .clickable { selected = index },
      )
    }
  }
}`,
    preview: (
      <div className="flex flex-col gap-3">
        <span className="size-5 rounded-full border-[5px] border-primary" />
        <span className="size-5 rounded-full border-2 border-input" />
        <span className="size-5 rounded-full border-2 border-input" />
      </div>
    ),
  },
  {
    id: "toggle-radio-fill",
    name: "Fill Radio",
    category: "toggles",
    description: "Selected option becomes a fully filled solid disc for strong emphasis.",
    code: `@Composable
fun FillRadioGroup() {
  var selected by remember { mutableStateOf(1) }
  Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
    repeat(3) { index ->
      val active = index == selected
      Box(
        modifier = Modifier
          .size(24.dp)
          .clip(CircleShape)
          .background(
            if (active)
              MaterialTheme.colorScheme.primary
            else
              Color.Transparent,
          )
          .border(
            2.dp,
            MaterialTheme.colorScheme.outline,
            CircleShape,
          )
          .clickable { selected = index },
      )
    }
  }
}`,
    preview: (
      <div className="flex gap-3">
        <span className="size-5 rounded-full border-2 border-input" />
        <span className="size-5 rounded-full border-2 border-primary bg-primary" />
        <span className="size-5 rounded-full border-2 border-input" />
      </div>
    ),
  },
  {
    id: "toggle-radio-check",
    name: "Check Radio",
    category: "toggles",
    description: "Circular radio that reveals a checkmark glyph when its option is selected.",
    code: `@Composable
fun CheckRadioGroup() {
  var selected by remember { mutableStateOf(0) }
  Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
    repeat(3) { index ->
      val active = index == selected
      Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier
          .size(24.dp)
          .clip(CircleShape)
          .background(
            if (active)
              MaterialTheme.colorScheme.primary
            else Color.Transparent,
          )
          .border(
            2.dp,
            MaterialTheme.colorScheme.outline,
            CircleShape,
          )
          .clickable { selected = index },
      ) {
        if (active) {
          Icon(
            imageVector = Icons.Default.Check,
            contentDescription = null,
            tint = MaterialTheme.colorScheme.onPrimary,
            modifier = Modifier.size(16.dp),
          )
        }
      }
    }
  }
}`,
    preview: (
      <div className="flex flex-col gap-2">
        <span className="flex size-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-3.5" />
        </span>
        <span className="size-5 rounded-full border-2 border-input" />
        <span className="size-5 rounded-full border-2 border-input" />
      </div>
    ),
  },
  {
    id: "toggle-radio-color",
    name: "Color Swatch",
    category: "toggles",
    description: "Selectable colored swatches where the active color gains a surrounding ring.",
    code: `@Composable
fun ColorSwatchGroup() {
  val swatches = listOf(
    Color(0xFFEF4444),
    Color(0xFF22C55E),
    Color(0xFF3B82F6),
  )
  var selected by remember { mutableStateOf(0) }
  Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
    swatches.forEachIndexed { index, swatch ->
      val active = index == selected
      Box(
        modifier = Modifier
          .size(28.dp)
          .clip(CircleShape)
          .background(swatch)
          .border(
            width = if (active) 3.dp else 0.dp,
            color = MaterialTheme.colorScheme.onSurface,
            shape = CircleShape,
          )
          .clickable { selected = index },
      )
    }
  }
}`,
    preview: (
      <div className="flex gap-3">
        <span className="size-6 rounded-full bg-red-500 ring-2 ring-foreground ring-offset-2 ring-offset-background" />
        <span className="size-6 rounded-full bg-green-500" />
        <span className="size-6 rounded-full bg-blue-500" />
      </div>
    ),
  },
  {
    id: "toggle-radio-card",
    name: "Card Radio",
    category: "toggles",
    description: "Bordered selectable card with an icon and a corner check when active.",
    code: `@Composable
fun CardRadioGroup() {
  var selected by remember { mutableStateOf(0) }
  Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
    repeat(2) { index ->
      val active = index == selected
      Box {
        Box(
          contentAlignment = Alignment.Center,
          modifier = Modifier
            .size(56.dp)
            .clip(RoundedCornerShape(12.dp))
            .border(
              width = 2.dp,
              color = if (active)
                MaterialTheme.colorScheme.primary
              else
                MaterialTheme.colorScheme.outline,
              shape = RoundedCornerShape(12.dp),
            )
            .clickable { selected = index },
        ) {
          Icon(
            imageVector = Icons.Default.Star,
            contentDescription = null,
            tint = MaterialTheme.colorScheme.primary,
          )
        }
        if (active) {
          Icon(
            imageVector = Icons.Default.CheckCircle,
            contentDescription = null,
            tint = MaterialTheme.colorScheme.primary,
            modifier = Modifier
              .align(Alignment.TopEnd)
              .size(18.dp),
          )
        }
      }
    }
  }
}`,
    preview: (
      <div className="flex gap-3">
        <span className="relative flex size-12 items-center justify-center rounded-xl border-2 border-primary">
          <Star className="size-5 text-primary" />
          <span className="absolute -right-1.5 -top-1.5 text-primary">
            <CheckCircle2 className="size-4 fill-background" />
          </span>
        </span>
        <span className="flex size-12 items-center justify-center rounded-xl border-2 border-input">
          <Heart className="size-5 text-muted-foreground" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-radio-icon",
    name: "Icon Radio",
    category: "toggles",
    description: "Three icon choices where the active one is highlighted with primary color.",
    code: `@Composable
fun IconRadioGroup() {
  val icons = listOf(
    Icons.Default.Home,
    Icons.Default.Search,
    Icons.Default.Settings,
  )
  var selected by remember { mutableStateOf(0) }
  Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
    icons.forEachIndexed { index, icon ->
      val active = index == selected
      Icon(
        imageVector = icon,
        contentDescription = null,
        tint = if (active)
          MaterialTheme.colorScheme.primary
        else
          MaterialTheme.colorScheme.onSurfaceVariant,
        modifier = Modifier
          .size(28.dp)
          .clickable { selected = index },
      )
    }
  }
}`,
    preview: (
      <div className="flex items-center gap-4">
        <span className="text-primary">
          <Home className="size-6" />
        </span>
        <span className="text-muted-foreground">
          <Search className="size-6" />
        </span>
        <span className="text-muted-foreground">
          <Settings className="size-6" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-radio-pill",
    name: "Pill Radio",
    category: "toggles",
    description: "Pill-shaped radio group with icon-only options and a filled active pill.",
    code: `@Composable
fun PillRadioGroup() {
  val icons = listOf(
    Icons.Default.Favorite,
    Icons.Default.Star,
    Icons.Default.Bookmark,
  )
  var selected by remember { mutableStateOf(0) }
  Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
    icons.forEachIndexed { index, icon ->
      val active = index == selected
      Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier
          .clip(RoundedCornerShape(50))
          .background(
            if (active)
              MaterialTheme.colorScheme.primary
            else
              MaterialTheme.colorScheme.surfaceVariant,
          )
          .clickable { selected = index }
          .padding(horizontal = 16.dp, vertical = 8.dp),
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          tint = if (active)
            MaterialTheme.colorScheme.onPrimary
          else
            MaterialTheme.colorScheme.onSurfaceVariant,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="flex gap-2">
        <span className="flex items-center rounded-full bg-primary px-4 py-2 text-primary-foreground">
          <Heart className="size-4" />
        </span>
        <span className="flex items-center rounded-full bg-muted px-4 py-2 text-muted-foreground">
          <Star className="size-4" />
        </span>
        <span className="flex items-center rounded-full bg-muted px-4 py-2 text-muted-foreground">
          <Bookmark className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-radio-size",
    name: "Size Picker",
    category: "toggles",
    description: "Three graduated size circles where the chosen size receives a focus ring.",
    code: `@Composable
fun SizePickerGroup() {
  val sizes = listOf(16.dp, 22.dp, 28.dp)
  var selected by remember { mutableStateOf(2) }
  Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.spacedBy(12.dp),
  ) {
    sizes.forEachIndexed { index, dim ->
      val active = index == selected
      Box(
        modifier = Modifier
          .size(dim)
          .clip(CircleShape)
          .background(
            MaterialTheme.colorScheme.onSurfaceVariant,
          )
          .border(
            width = if (active) 3.dp else 0.dp,
            color = MaterialTheme.colorScheme.primary,
            shape = CircleShape,
          )
          .clickable { selected = index },
      )
    }
  }
}`,
    preview: (
      <div className="flex items-center gap-3">
        <span className="size-3 rounded-full bg-muted-foreground" />
        <span className="size-5 rounded-full bg-muted-foreground" />
        <span className="size-7 rounded-full bg-muted-foreground ring-2 ring-primary ring-offset-2 ring-offset-background" />
      </div>
    ),
  },
  {
    id: "toggle-radio-segmented",
    name: "Segmented Radio",
    category: "toggles",
    description: "Single-select segmented control driving radio state with icon-only segments.",
    code: `@Composable
fun SegmentedRadio() {
  val icons = listOf(
    Icons.Default.Home,
    Icons.Default.Search,
    Icons.Default.Person,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <Home className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Search className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <User className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-view",
    name: "List & Grid",
    category: "toggles",
    description: "Segmented switch toggling between list and grid layout view modes.",
    code: `@Composable
fun ViewModeSegmented() {
  val icons = listOf(
    Icons.AutoMirrored.Filled.List,
    Icons.Default.GridView,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <List className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <LayoutGrid className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-align",
    name: "Alignment",
    category: "toggles",
    description: "Three-way segmented control choosing left, center, or right text alignment.",
    code: `@Composable
fun AlignmentSegmented() {
  val icons = listOf(
    Icons.AutoMirrored.Filled.FormatAlignLeft,
    Icons.Default.FormatAlignCenter,
    Icons.AutoMirrored.Filled.FormatAlignRight,
  )
  var selected by remember { mutableStateOf(1) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="px-3 py-1.5 text-muted-foreground">
          <AlignLeft className="size-4" />
        </span>
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <AlignCenter className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <AlignRight className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-format",
    name: "Text Format",
    category: "toggles",
    description: "Segmented formatting control selecting bold, italic, or underline styling.",
    code: `@Composable
fun TextFormatSegmented() {
  val icons = listOf(
    Icons.Default.FormatBold,
    Icons.Default.FormatItalic,
    Icons.Default.FormatUnderlined,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <Bold className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Italic className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Underline className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-device",
    name: "Device",
    category: "toggles",
    description: "Segmented control switching preview between phone, tablet, and desktop devices.",
    code: `@Composable
fun DeviceSegmented() {
  val icons = listOf(
    Icons.Default.Smartphone,
    Icons.Default.Tablet,
    Icons.Default.DesktopWindows,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <Smartphone className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Tablet className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Monitor className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-media",
    name: "Media",
    category: "toggles",
    description: "Transport-style segmented control toggling play, pause, and stop states.",
    code: `@Composable
fun MediaSegmented() {
  val icons = listOf(
    Icons.Default.PlayArrow,
    Icons.Default.Pause,
    Icons.Default.Stop,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <Play className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Pause className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Square className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-zoom",
    name: "Zoom",
    category: "toggles",
    description: "Two-segment control toggling between zoom-out and zoom-in viewport actions.",
    code: `@Composable
fun ZoomSegmented() {
  val icons = listOf(
    Icons.Default.ZoomOut,
    Icons.Default.ZoomIn,
  )
  var selected by remember { mutableStateOf(1) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="px-3 py-1.5 text-muted-foreground">
          <ZoomOut className="size-4" />
        </span>
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <ZoomIn className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-sort",
    name: "Sort",
    category: "toggles",
    description: "Compact segmented toggle switching sort direction between ascending and descending.",
    code: `@Composable
fun SortSegmented() {
  val icons = listOf(
    Icons.Default.ArrowUpward,
    Icons.Default.ArrowDownward,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <ArrowUp className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <ArrowDown className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-theme",
    name: "Theme Mode",
    category: "toggles",
    description: "Tri-state segmented control choosing light, system, or dark color theme.",
    code: `@Composable
fun ThemeModeSegmented() {
  val icons = listOf(
    Icons.Default.LightMode,
    Icons.Default.BrightnessMedium,
    Icons.Default.DarkMode,
  )
  var selected by remember { mutableStateOf(1) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="px-3 py-1.5 text-muted-foreground">
          <Sun className="size-4" />
        </span>
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <SunMoon className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Moon className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-map",
    name: "Map Layers",
    category: "toggles",
    description: "Two-segment control switching between map view and layered overlay mode.",
    code: `@Composable
fun MapLayersSegmented() {
  val icons = listOf(
    Icons.Default.Map,
    Icons.Default.Layers,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <Map className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Layers className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-seg-speed",
    name: "Playback Speed",
    category: "toggles",
    description: "Segmented control selecting slow, normal, or fast playback speed presets.",
    code: `@Composable
fun PlaybackSpeedSegmented() {
  val icons = listOf(
    Icons.Default.Speed,
    Icons.Default.FastForward,
    Icons.Default.SlowMotionVideo,
  )
  var selected by remember { mutableStateOf(0) }
  SingleChoiceSegmentedButtonRow {
    icons.forEachIndexed { index, icon ->
      SegmentedButton(
        selected = index == selected,
        onClick = { selected = index },
        shape = SegmentedButtonDefaults.itemShape(
          index = index,
          count = icons.size,
        ),
        icon = {},
      ) {
        Icon(
          imageVector = icon,
          contentDescription = null,
          modifier = Modifier.size(18.dp),
        )
      }
    }
  }
}`,
    preview: (
      <div className="inline-flex rounded-lg border bg-muted p-1">
        <span className="rounded-md bg-background px-3 py-1.5 shadow-sm">
          <Gauge className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Rabbit className="size-4" />
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">
          <Turtle className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-like",
    name: "Like",
    category: "toggles",
    description: "Heart toggle that scales and fills with a celebratory burst when liked.",
    tags: ["animated"],
    code: `@Composable
fun LikeToggle() {
  var liked by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    targetValue = if (liked) 1.2f else 1f,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioMediumBouncy,
    ),
    label = "likeScale",
  )
  IconToggleButton(
    checked = liked,
    onCheckedChange = { liked = it },
  ) {
    Icon(
      imageVector = if (liked)
        Icons.Default.Favorite
      else
        Icons.Default.FavoriteBorder,
      contentDescription = null,
      tint = if (liked)
        MaterialTheme.colorScheme.error
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
      modifier = Modifier.graphicsLayer {
        scaleX = scale
        scaleY = scale
      },
    )
  }
}`,
    preview: (
      <div className="flex items-center justify-center">
        <span className="text-red-500">
          <Heart className="size-7 fill-red-500" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-star",
    name: "Favorite",
    category: "toggles",
    description: "Star toggle that fills amber and springs when marked as favorite.",
    tags: ["animated"],
    code: `@Composable
fun StarToggle() {
  var starred by remember { mutableStateOf(false) }
  val scale by animateFloatAsState(
    targetValue = if (starred) 1.15f else 1f,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioMediumBouncy,
    ),
    label = "starScale",
  )
  IconToggleButton(
    checked = starred,
    onCheckedChange = { starred = it },
  ) {
    Icon(
      imageVector = if (starred)
        Icons.Default.Star
      else
        Icons.Default.StarBorder,
      contentDescription = null,
      tint = if (starred)
        MaterialTheme.colorScheme.tertiary
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
      modifier = Modifier.graphicsLayer {
        scaleX = scale
        scaleY = scale
      },
    )
  }
}`,
    preview: (
      <div className="flex items-center justify-center">
        <span className="text-amber-500">
          <Star className="size-7 fill-amber-500" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-bookmark",
    name: "Bookmark",
    category: "toggles",
    description: "Bookmark toggle filling with primary color when an item is saved.",
    code: `@Composable
fun BookmarkToggle() {
  var saved by remember { mutableStateOf(false) }
  FilledIconToggleButton(
    checked = saved,
    onCheckedChange = { saved = it },
    colors = IconButtonDefaults.filledIconToggleButtonColors(
      checkedContainerColor =
        MaterialTheme.colorScheme.primaryContainer,
    ),
  ) {
    Icon(
      imageVector = if (saved)
        Icons.Default.Bookmark
      else
        Icons.Default.BookmarkBorder,
      contentDescription = null,
      tint = if (saved)
        MaterialTheme.colorScheme.primary
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
    )
  }
}`,
    preview: (
      <div className="flex items-center justify-center">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Bookmark className="size-5 fill-primary" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-pin",
    name: "Pin",
    category: "toggles",
    description: "Pin toggle filling and rotating slightly when an item is pinned.",
    code: `@Composable
fun PinToggle() {
  var pinned by remember { mutableStateOf(false) }
  val rotation by animateFloatAsState(
    targetValue = if (pinned) -20f else 0f,
    label = "pinRotation",
  )
  IconToggleButton(
    checked = pinned,
    onCheckedChange = { pinned = it },
  ) {
    Icon(
      imageVector = if (pinned)
        Icons.Default.PushPin
      else
        Icons.Outlined.PushPin,
      contentDescription = null,
      tint = if (pinned)
        MaterialTheme.colorScheme.primary
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
      modifier = Modifier.graphicsLayer {
        rotationZ = rotation
      },
    )
  }
}`,
    preview: (
      <div className="flex items-center justify-center">
        <span className="text-primary">
          <Pin className="size-7 -rotate-12 fill-primary" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-flag",
    name: "Flag",
    category: "toggles",
    description: "Flag toggle filling with error color to mark a flagged item.",
    code: `@Composable
fun FlagToggle() {
  var flagged by remember { mutableStateOf(false) }
  IconToggleButton(
    checked = flagged,
    onCheckedChange = { flagged = it },
  ) {
    Icon(
      imageVector = if (flagged)
        Icons.Default.Flag
      else
        Icons.Outlined.Flag,
      contentDescription = null,
      tint = if (flagged)
        MaterialTheme.colorScheme.error
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
    )
  }
}`,
    preview: (
      <div className="flex items-center justify-center">
        <span className="text-red-500">
          <Flag className="size-7 fill-red-500" />
        </span>
      </div>
    ),
  },
  {
    id: "toggle-thumbs-up",
    name: "Thumbs Up",
    category: "toggles",
    description: "Thumbs-up toggle filling solid when a reaction is registered.",
    code: `@Composable
fun ThumbsUpToggle() {
  var up by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = up,
    onCheckedChange = { up = it },
  ) {
    Icon(
      imageVector = if (up)
        Icons.Filled.ThumbUp
      else
        Icons.Outlined.ThumbUp,
      contentDescription = null,
      tint = if (up)
        MaterialTheme.colorScheme.primary
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <ThumbsUp className="size-5 fill-primary" />
      </span>
    ),
  },
  {
    id: "toggle-speaker",
    name: "Speaker",
    category: "toggles",
    description: "Round speaker toggle swapping loud and muted icons on tap.",
    code: `@Composable
fun SpeakerToggle() {
  var on by remember { mutableStateOf(true) }
  FilledTonalIconToggleButton(
    checked = on,
    onCheckedChange = { on = it },
  ) {
    Icon(
      imageVector = if (on)
        Icons.AutoMirrored.Filled.VolumeUp
      else
        Icons.AutoMirrored.Filled.VolumeOff,
      contentDescription = null,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Volume2 className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-mic-btn",
    name: "Mic Button",
    category: "toggles",
    description: "Round mic toggle turning red and crossed when muted in a call.",
    code: `@Composable
fun MicButtonToggle() {
  var muted by remember { mutableStateOf(true) }
  FilledTonalIconToggleButton(
    checked = muted,
    onCheckedChange = { muted = it },
    colors = IconButtonDefaults
      .filledTonalIconToggleButtonColors(
        checkedContainerColor =
          MaterialTheme.colorScheme.errorContainer,
        checkedContentColor =
          MaterialTheme.colorScheme.error,
      ),
  ) {
    Icon(
      imageVector = if (muted)
        Icons.Filled.MicOff
      else
        Icons.Filled.Mic,
      contentDescription = null,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-red-500/15 text-red-500">
        <MicOff className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-cam-btn",
    name: "Camera Button",
    category: "toggles",
    description: "Round camera toggle switching the video feed on and off.",
    code: `@Composable
fun CameraButtonToggle() {
  var on by remember { mutableStateOf(true) }
  FilledTonalIconToggleButton(
    checked = on,
    onCheckedChange = { on = it },
  ) {
    Icon(
      imageVector = if (on)
        Icons.Filled.Videocam
      else
        Icons.Filled.VideocamOff,
      contentDescription = null,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Camera className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-fullscreen",
    name: "Fullscreen",
    category: "toggles",
    description: "Button morphing between enter and exit fullscreen glyphs on toggle.",
    tags: ["animated"],
    code: `@Composable
fun FullscreenToggle() {
  var full by remember { mutableStateOf(false) }
  IconToggleButton(
    checked = full,
    onCheckedChange = { full = it },
  ) {
    AnimatedContent(targetState = full, label = "full") {
      Icon(
        imageVector = if (it)
          Icons.Filled.FullscreenExit
        else
          Icons.Filled.Fullscreen,
        contentDescription = null,
      )
    }
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground">
        <Maximize2 className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-grid-list",
    name: "Grid View",
    category: "toggles",
    description: "Button morphing between grid and list layout icons when toggled.",
    tags: ["animated"],
    code: `@Composable
fun GridListToggle() {
  var grid by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = grid,
    onCheckedChange = { grid = it },
  ) {
    AnimatedContent(targetState = grid, label = "grid") {
      Icon(
        imageVector = if (it)
          Icons.Filled.GridView
        else
          Icons.AutoMirrored.Filled.List,
        contentDescription = null,
      )
    }
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground">
        <LayoutGrid className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-shuffle",
    name: "Shuffle",
    category: "toggles",
    description: "Shuffle toggle highlighting with primary tint when randomization is active.",
    code: `@Composable
fun ShuffleToggle() {
  var on by remember { mutableStateOf(true) }
  IconToggleButton(
    checked = on,
    onCheckedChange = { on = it },
  ) {
    Icon(
      imageVector = Icons.Filled.Shuffle,
      contentDescription = null,
      tint = if (on)
        MaterialTheme.colorScheme.primary
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Shuffle className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-repeat",
    name: "Repeat",
    category: "toggles",
    description: "Repeat control cycling between off, repeat-all, and repeat-one modes.",
    code: `@Composable
fun RepeatToggle() {
  var mode by remember { mutableStateOf(1) }
  IconButton(onClick = { mode = (mode + 1) % 3 }) {
    Icon(
      imageVector = if (mode == 2)
        Icons.Filled.RepeatOne
      else
        Icons.Filled.Repeat,
      contentDescription = null,
      tint = if (mode == 0)
        MaterialTheme.colorScheme.onSurfaceVariant
      else
        MaterialTheme.colorScheme.primary,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Repeat className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-lock-btn",
    name: "Lock Button",
    category: "toggles",
    description: "Round button morphing between locked and unlocked padlock glyphs.",
    tags: ["animated"],
    code: `@Composable
fun LockButtonToggle() {
  var locked by remember { mutableStateOf(true) }
  FilledTonalIconToggleButton(
    checked = locked,
    onCheckedChange = { locked = it },
  ) {
    AnimatedContent(targetState = locked, label = "lock") {
      Icon(
        imageVector = if (it)
          Icons.Filled.Lock
        else
          Icons.Filled.LockOpen,
        contentDescription = null,
      )
    }
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Lock className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-eye-btn",
    name: "Reveal",
    category: "toggles",
    description: "Round button swapping eye and crossed-eye icons to reveal a secret.",
    code: `@Composable
fun RevealToggle() {
  var visible by remember { mutableStateOf(false) }
  IconToggleButton(
    checked = visible,
    onCheckedChange = { visible = it },
  ) {
    Icon(
      imageVector = if (visible)
        Icons.Filled.Visibility
      else
        Icons.Filled.VisibilityOff,
      contentDescription = null,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground">
        <Eye className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-record",
    name: "Record",
    category: "toggles",
    description: "Record button morphing a red dot into a stop square while recording.",
    tags: ["animated"],
    code: `@Composable
fun RecordToggle() {
  var recording by remember { mutableStateOf(false) }
  val radius by animateDpAsState(
    targetValue = if (recording) 4.dp else 12.dp,
    label = "radius",
  )
  val size by animateDpAsState(
    targetValue = if (recording) 16.dp else 22.dp,
    label = "size",
  )
  Box(
    contentAlignment = Alignment.Center,
    modifier = Modifier
      .size(40.dp)
      .clip(CircleShape)
      .border(2.dp, Color(0xFFEF4444), CircleShape)
      .clickable { recording = !recording },
  ) {
    Box(
      Modifier
        .size(size)
        .clip(RoundedCornerShape(radius))
        .background(Color(0xFFEF4444)),
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full border-2 border-red-500">
        <span className="size-3 rounded-[3px] bg-red-500" />
      </span>
    ),
  },
  {
    id: "toggle-menu-close",
    name: "Menu Morph",
    category: "toggles",
    description: "Icon button rotating a hamburger menu into a close cross on open.",
    tags: ["animated"],
    code: `@Composable
fun MenuCloseToggle() {
  var open by remember { mutableStateOf(false) }
  val rotation by animateFloatAsState(
    targetValue = if (open) 90f else 0f,
    label = "rotation",
  )
  IconToggleButton(
    checked = open,
    onCheckedChange = { open = it },
  ) {
    Icon(
      imageVector = if (open)
        Icons.Filled.Close
      else
        Icons.Filled.Menu,
      contentDescription = null,
      modifier = Modifier.graphicsLayer {
        rotationZ = rotation
      },
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground">
        <Menu className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-play-pause",
    name: "Play Morph",
    category: "toggles",
    description: "Circular button cross-fading between play and pause transport glyphs.",
    tags: ["animated"],
    code: `@Composable
fun PlayPauseButton() {
  var playing by remember { mutableStateOf(true) }
  FilledIconToggleButton(
    checked = playing,
    onCheckedChange = { playing = it },
  ) {
    AnimatedContent(targetState = playing, label = "play") {
      Icon(
        imageVector = if (it)
          Icons.Filled.Pause
        else
          Icons.Filled.PlayArrow,
        contentDescription = null,
      )
    }
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Pause className="size-5 fill-current" />
      </span>
    ),
  },
  {
    id: "toggle-plus-minus",
    name: "Expand",
    category: "toggles",
    description: "Button morphing a plus into a minus to expand or collapse content.",
    tags: ["animated"],
    code: `@Composable
fun ExpandToggle() {
  var open by remember { mutableStateOf(false) }
  val rotation by animateFloatAsState(
    targetValue = if (open) 180f else 0f,
    label = "rotation",
  )
  IconToggleButton(
    checked = open,
    onCheckedChange = { open = it },
  ) {
    Icon(
      imageVector = if (open)
        Icons.Filled.Remove
      else
        Icons.Filled.Add,
      contentDescription = null,
      modifier = Modifier.graphicsLayer {
        rotationZ = rotation
      },
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Plus className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-chevron",
    name: "Chevron",
    category: "toggles",
    description: "Chevron button rotating a half turn to mark an expanded section.",
    tags: ["animated"],
    code: `@Composable
fun ChevronToggle() {
  var open by remember { mutableStateOf(true) }
  val rotation by animateFloatAsState(
    targetValue = if (open) 180f else 0f,
    label = "rotation",
  )
  IconToggleButton(
    checked = open,
    onCheckedChange = { open = it },
  ) {
    Icon(
      imageVector = Icons.Filled.KeyboardArrowDown,
      contentDescription = null,
      modifier = Modifier.graphicsLayer {
        rotationZ = rotation
      },
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-muted text-foreground">
        <ChevronDown className="size-5 rotate-180" />
      </span>
    ),
  },
  {
    id: "toggle-check-burst",
    name: "Success",
    category: "toggles",
    description: "Button morphing into a green check with a celebratory scale burst.",
    tags: ["animated"],
    code: `@Composable
fun SuccessToggle() {
  var done by remember { mutableStateOf(true) }
  val scale by animateFloatAsState(
    targetValue = if (done) 1f else 0.9f,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioMediumBouncy,
    ),
    label = "scale",
  )
  FilledIconToggleButton(
    checked = done,
    onCheckedChange = { done = it },
    colors = IconButtonDefaults.filledIconToggleButtonColors(
      checkedContainerColor = Color(0xFF22C55E),
    ),
    modifier = Modifier.graphicsLayer {
      scaleX = scale
      scaleY = scale
    },
  ) {
    Icon(
      imageVector = if (done)
        Icons.Filled.Check
      else
        Icons.Filled.Add,
      contentDescription = null,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Check className="size-5" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-heart-pop",
    name: "Heart Pop",
    category: "toggles",
    description: "Heart toggle popping in scale with a soft tinted halo when liked.",
    tags: ["animated"],
    code: `@Composable
fun HeartPopToggle() {
  var liked by remember { mutableStateOf(true) }
  val scale by animateFloatAsState(
    targetValue = if (liked) 1.25f else 1f,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioHighBouncy,
      stiffness = Spring.StiffnessLow,
    ),
    label = "pop",
  )
  FilledTonalIconToggleButton(
    checked = liked,
    onCheckedChange = { liked = it },
    colors = IconButtonDefaults
      .filledTonalIconToggleButtonColors(
        checkedContainerColor =
          MaterialTheme.colorScheme.errorContainer,
        checkedContentColor =
          MaterialTheme.colorScheme.error,
      ),
  ) {
    Icon(
      imageVector = Icons.Filled.Favorite,
      contentDescription = null,
      modifier = Modifier.graphicsLayer {
        scaleX = scale
        scaleY = scale
      },
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-500">
        <Heart className="size-5 fill-rose-500" />
      </span>
    ),
  },
  {
    id: "toggle-cycle-tristate",
    name: "Signal Cycle",
    category: "toggles",
    description: "Button cycling through off, low, and high signal-strength states.",
    tags: ["animated"],
    code: `@Composable
fun SignalCycleToggle() {
  var level by remember { mutableStateOf(2) }
  IconButton(onClick = { level = (level + 1) % 3 }) {
    Icon(
      imageVector = when (level) {
        0 -> Icons.Filled.SignalCellular0Bar
        1 -> Icons.Filled.SignalCellularAlt1Bar
        else -> Icons.Filled.SignalCellularAlt
      },
      contentDescription = null,
      tint = if (level == 0)
        MaterialTheme.colorScheme.onSurfaceVariant
      else
        MaterialTheme.colorScheme.primary,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <SignalHigh className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-flashlight",
    name: "Flashlight",
    category: "toggles",
    description: "Flashlight toggle glowing warm amber when the torch turns on.",
    tags: ["animated"],
    code: `@Composable
fun FlashlightToggle() {
  var on by remember { mutableStateOf(true) }
  val glow by animateDpAsState(
    targetValue = if (on) 16.dp else 0.dp,
    label = "glow",
  )
  val amber = Color(0xFFFBBF24)
  FilledTonalIconToggleButton(
    checked = on,
    onCheckedChange = { on = it },
    modifier = Modifier.shadow(
      elevation = glow,
      shape = CircleShape,
      ambientColor = amber,
      spotColor = amber,
    ),
  ) {
    Icon(
      imageVector = if (on)
        Icons.Filled.FlashlightOn
      else
        Icons.Filled.FlashlightOff,
      contentDescription = null,
      tint = if (on) amber
        else MaterialTheme.colorScheme.onSurfaceVariant,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-500 shadow-[0_0_12px_2px_rgba(251,191,36,0.6)]">
        <Flashlight className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-pin-map",
    name: "Map Pin",
    category: "toggles",
    description: "Location toggle dropping a map pin with a small bounce when set.",
    tags: ["animated"],
    code: `@Composable
fun MapPinToggle() {
  var set by remember { mutableStateOf(true) }
  val offset by animateDpAsState(
    targetValue = if (set) 0.dp else (-6).dp,
    animationSpec = spring(
      dampingRatio = Spring.DampingRatioMediumBouncy,
    ),
    label = "drop",
  )
  IconToggleButton(
    checked = set,
    onCheckedChange = { set = it },
  ) {
    Icon(
      imageVector = if (set)
        Icons.Filled.LocationOn
      else
        Icons.Outlined.LocationOn,
      contentDescription = null,
      tint = if (set)
        MaterialTheme.colorScheme.error
      else
        MaterialTheme.colorScheme.onSurfaceVariant,
      modifier = Modifier.offset(y = offset),
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-500">
        <MapPin className="size-5 fill-rose-500/30" />
      </span>
    ),
  },
  {
    id: "toggle-save",
    name: "Save",
    category: "toggles",
    description: "Save toggle morphing a bookmark into a check to confirm a save.",
    tags: ["animated"],
    code: `@Composable
fun SaveToggle() {
  var saved by remember { mutableStateOf(true) }
  FilledTonalIconToggleButton(
    checked = saved,
    onCheckedChange = { saved = it },
  ) {
    AnimatedContent(targetState = saved, label = "save") {
      Icon(
        imageVector = if (it)
          Icons.Filled.Check
        else
          Icons.Outlined.BookmarkBorder,
        contentDescription = null,
      )
    }
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Check className="size-5" strokeWidth={3} />
      </span>
    ),
  },
  {
    id: "toggle-power-btn",
    name: "Power Button",
    category: "toggles",
    description: "Round power button gaining a green ring when switched on.",
    tags: ["animated"],
    code: `@Composable
fun PowerButtonToggle() {
  var on by remember { mutableStateOf(true) }
  val ring by animateColorAsState(
    targetValue = if (on)
      Color(0xFF22C55E)
    else
      MaterialTheme.colorScheme.outline,
    label = "ring",
  )
  Box(
    contentAlignment = Alignment.Center,
    modifier = Modifier
      .size(40.dp)
      .clip(CircleShape)
      .border(2.dp, ring, CircleShape)
      .clickable { on = !on },
  ) {
    Icon(
      imageVector = Icons.Filled.PowerSettingsNew,
      contentDescription = null,
      tint = ring,
      modifier = Modifier.size(20.dp),
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full text-emerald-500 ring-2 ring-emerald-500">
        <Power className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-snooze",
    name: "Alarm",
    category: "toggles",
    description: "Alarm toggle swapping an active clock for a silenced bell when off.",
    code: `@Composable
fun AlarmToggle() {
  var on by remember { mutableStateOf(true) }
  FilledTonalIconToggleButton(
    checked = on,
    onCheckedChange = { on = it },
  ) {
    Icon(
      imageVector = if (on)
        Icons.Filled.Alarm
      else
        Icons.Filled.NotificationsOff,
      contentDescription = null,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <AlarmClock className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-wifi-btn",
    name: "Wi-Fi Button",
    category: "toggles",
    description: "Round filled-tonal button toggling Wi-Fi between connected and off.",
    code: `@Composable
fun WifiButtonToggle() {
  var on by remember { mutableStateOf(true) }
  FilledTonalIconToggleButton(
    checked = on,
    onCheckedChange = { on = it },
  ) {
    Icon(
      imageVector = if (on)
        Icons.Filled.Wifi
      else
        Icons.Filled.WifiOff,
      contentDescription = null,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Wifi className="size-5" />
      </span>
    ),
  },
  {
    id: "toggle-mute-cycle",
    name: "Volume Cycle",
    category: "toggles",
    description: "Button cycling through high, low, and muted volume levels in turn.",
    tags: ["animated"],
    code: `@Composable
fun VolumeCycleToggle() {
  var level by remember { mutableStateOf(2) }
  IconButton(onClick = { level = (level + 1) % 3 }) {
    Icon(
      imageVector = when (level) {
        0 -> Icons.AutoMirrored.Filled.VolumeOff
        1 -> Icons.AutoMirrored.Filled.VolumeDown
        else -> Icons.AutoMirrored.Filled.VolumeUp
      },
      contentDescription = null,
      tint = if (level == 0)
        MaterialTheme.colorScheme.onSurfaceVariant
      else
        MaterialTheme.colorScheme.primary,
    )
  }
}`,
    preview: (
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Volume1 className="size-5" />
      </span>
    ),
  },
];
