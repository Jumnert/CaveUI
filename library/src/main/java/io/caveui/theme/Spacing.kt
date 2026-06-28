package io.caveui.theme

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

/**
 * Spacing scale for caveui.
 *
 * Material 3 ships colors, typography, and shapes but deliberately has NO spacing
 * system. caveui adds one so components share a consistent rhythm. Access it from
 * any composable via `CaveTheme.spacing.md` (see [CaveTheme]).
 */
@Immutable
data class CaveSpacing(
    val none: Dp = 0.dp,
    val xs: Dp = 4.dp,
    val sm: Dp = 8.dp,
    val md: Dp = 16.dp,
    val lg: Dp = 24.dp,
    val xl: Dp = 32.dp,
    val xxl: Dp = 48.dp,
)

/**
 * CompositionLocal that carries the active [CaveSpacing] down the tree.
 * Provided by [CaveTheme]; reading it outside a CaveTheme returns the defaults.
 */
val LocalCaveSpacing = staticCompositionLocalOf { CaveSpacing() }
