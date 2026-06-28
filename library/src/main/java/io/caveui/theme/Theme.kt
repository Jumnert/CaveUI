package io.caveui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.ReadOnlyComposable

/**
 * The root theme for caveui. Wrap your app (or any preview) in [CaveTheme] so every
 * caveui component picks up the right colors, typography, shapes, and spacing.
 *
 * It builds on Material 3, so you also get free dark mode and access to the standard
 * `MaterialTheme.*` accessors. caveui's own spacing scale is exposed through
 * [CaveTheme.spacing].
 *
 * ```
 * CaveTheme {
 *     CaveButton(text = "Hello", onClick = {})
 * }
 * ```
 *
 * @param darkTheme whether to use the dark color scheme. Defaults to the system setting.
 * @param content the UI to theme.
 */
@Composable
fun CaveTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    val colors = if (darkTheme) CaveDarkColors else CaveLightColors

    CompositionLocalProvider(LocalCaveSpacing provides CaveSpacing()) {
        MaterialTheme(
            colorScheme = colors,
            typography = CaveTypography,
            shapes = CaveShapes,
            content = content,
        )
    }
}

/**
 * Accessors for caveui design tokens that live outside Material 3 (currently spacing).
 * Use as `CaveTheme.spacing.md`.
 */
object CaveTheme {
    val spacing: CaveSpacing
        @Composable
        @ReadOnlyComposable
        get() = LocalCaveSpacing.current
}
