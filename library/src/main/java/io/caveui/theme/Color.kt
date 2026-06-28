package io.caveui.theme

import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.ui.graphics.Color

/**
 * Raw color palette for caveui.
 *
 * These are the primitive tokens. Components should NOT reference these directly —
 * they consume semantic roles through [androidx.compose.material3.MaterialTheme.colorScheme]
 * (e.g. `colorScheme.primary`). Keeping primitives separate from roles lets us
 * re-theme the whole library by editing the schemes below.
 */
internal object CavePalette {
    val Stone900 = Color(0xFF1C1917)
    val Stone800 = Color(0xFF292524)
    val Stone100 = Color(0xFFF5F5F4)
    val Stone50 = Color(0xFFFAFAF9)

    val Amber500 = Color(0xFFF59E0B)
    val Amber400 = Color(0xFFFBBF24)
    val Amber200 = Color(0xFFFDE68A)

    val Teal600 = Color(0xFF0D9488)
    val Teal300 = Color(0xFF5EEAD4)

    val Red600 = Color(0xFFDC2626)
    val Red300 = Color(0xFFFCA5A5)

    val White = Color(0xFFFFFFFF)
    val Black = Color(0xFF000000)
}

/** Light Material 3 color scheme for [CaveTheme]. */
val CaveLightColors = lightColorScheme(
    primary = CavePalette.Amber500,
    onPrimary = CavePalette.White,
    secondary = CavePalette.Teal600,
    onSecondary = CavePalette.White,
    error = CavePalette.Red600,
    onError = CavePalette.White,
    background = CavePalette.Stone50,
    onBackground = CavePalette.Stone900,
    surface = CavePalette.White,
    onSurface = CavePalette.Stone900,
)

/** Dark Material 3 color scheme for [CaveTheme]. */
val CaveDarkColors = darkColorScheme(
    primary = CavePalette.Amber400,
    onPrimary = CavePalette.Stone900,
    secondary = CavePalette.Teal300,
    onSecondary = CavePalette.Stone900,
    error = CavePalette.Red300,
    onError = CavePalette.Stone900,
    background = CavePalette.Stone900,
    onBackground = CavePalette.Stone100,
    surface = CavePalette.Stone800,
    onSurface = CavePalette.Stone100,
)
