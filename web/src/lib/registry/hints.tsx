import { Link2 } from "lucide-react";
import type { Variant } from "./types";

export const hints: Variant[] = [
  {
    id: "hint-plain",
    name: "Plain tooltip",
    category: "hints",
    description: "A Material 3 plain tooltip that fades and scales in above its anchor.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PlainHint(text: String, content: @Composable () -> Unit) {
    TooltipBox(
        positionProvider = TooltipDefaults.rememberPlainTooltipPositionProvider(),
        tooltip = { PlainTooltip { Text(text) } },
        state = rememberTooltipState(),
    ) {
        content()
    }
}`,
    preview: (
      <div className="flex flex-col items-center gap-2">
        <span
          className="rounded-md bg-foreground px-2.5 py-1 text-[11px] font-medium text-background shadow"
          style={{ transformOrigin: "bottom", animation: "icon-crossfade-in 2.2s ease-in-out infinite alternate" }}
        >
          Copy link
        </span>
        <span className="flex size-8 items-center justify-center rounded-md border bg-card text-muted-foreground">
          <Link2 className="size-4" />
        </span>
      </div>
    ),
  },
  {
    id: "hint-rich",
    name: "Rich tooltip",
    category: "hints",
    description: "A rich tooltip card with a title, body text and an inline action button.",
    tags: [],
    code: `@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RichHint(content: @Composable () -> Unit) {
    val state = rememberTooltipState(isPersistent = true)
    TooltipBox(
        positionProvider = TooltipDefaults.rememberRichTooltipPositionProvider(),
        tooltip = {
            RichTooltip(
                title = { Text("Keyboard shortcut") },
                action = { TextButton(onClick = { /* dismiss */ }) { Text("Got it") } },
            ) {
                Text("Press \u2318K to open the command palette from anywhere.")
            }
        },
        state = state,
    ) {
        content()
    }
}`,
    preview: (
      <div
        className="w-48 rounded-lg border bg-card p-3 text-left shadow-sm"
        style={{ animation: "icon-crossfade-in 2.4s ease-in-out infinite alternate" }}
      >
        <p className="text-xs font-semibold">Keyboard shortcut</p>
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
          Press ⌘K to open the command palette from anywhere.
        </p>
        <button type="button" className="mt-2 text-[11px] font-semibold text-primary">
          Got it
        </button>
      </div>
    ),
  },
];
