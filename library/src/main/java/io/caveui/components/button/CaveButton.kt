package io.caveui.components.button

/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  caveui • component template
 *  This file is the REFERENCE every new component should copy. Its shape is the
 *  contract described in CONTRIBUTING.md:
 *    1. KDoc on the public composable (shows up on the docs site).
 *    2. A small, explicit public API (no leaking internal types).
 *    3. Variants/sizes modelled as enums, not loose booleans.
 *    4. Sensible defaults so the simplest call site is one line.
 *    5. A `modifier: Modifier = Modifier` parameter, placed after required params.
 *    6. At least one @Preview (light + dark) at the bottom, marked internal.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import io.caveui.theme.CaveTheme

/**
 * Visual styles for [CaveButton].
 *
 * - [Primary]: filled, high-emphasis. The main call to action on a screen.
 * - [Secondary]: outlined, medium-emphasis. Pairs with a primary button.
 * - [Ghost]: text-only, low-emphasis. For tertiary or inline actions.
 */
enum class CaveButtonVariant { Primary, Secondary, Ghost }

/**
 * A caveui button.
 *
 * Built on Material 3 so it inherits dark mode, ripple, and accessibility for free,
 * with caveui's rounder shapes and color tokens applied through [CaveTheme].
 *
 * ```
 * CaveButton(
 *     text = "Get started",
 *     onClick = { /* ... */ },
 *     variant = CaveButtonVariant.Primary,
 * )
 * ```
 *
 * @param text the button label.
 * @param onClick called when the button is tapped. Ignored while [loading] is true.
 * @param modifier the [Modifier] to apply to this button.
 * @param variant the visual style; see [CaveButtonVariant]. Defaults to [CaveButtonVariant.Primary].
 * @param enabled whether the button responds to input. Defaults to true.
 * @param loading when true, shows a spinner and blocks clicks. Defaults to false.
 * @param leadingIcon optional icon shown before the label.
 */
@Composable
fun CaveButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: CaveButtonVariant = CaveButtonVariant.Primary,
    enabled: Boolean = true,
    loading: Boolean = false,
    leadingIcon: ImageVector? = null,
) {
    val onClickGuarded = { if (!loading) onClick() }

    when (variant) {
        CaveButtonVariant.Primary -> Button(
            onClick = onClickGuarded,
            modifier = modifier,
            enabled = enabled && !loading,
            shape = CaveButtonShape,
            contentPadding = CaveButtonPadding,
        ) { CaveButtonContent(text, loading, leadingIcon) }

        CaveButtonVariant.Secondary -> OutlinedButton(
            onClick = onClickGuarded,
            modifier = modifier,
            enabled = enabled && !loading,
            shape = CaveButtonShape,
            contentPadding = CaveButtonPadding,
        ) { CaveButtonContent(text, loading, leadingIcon) }

        CaveButtonVariant.Ghost -> TextButton(
            onClick = onClickGuarded,
            modifier = modifier,
            enabled = enabled && !loading,
            shape = CaveButtonShape,
            contentPadding = CaveButtonPadding,
        ) { CaveButtonContent(text, loading, leadingIcon) }
    }
}

/** Shared label/icon/spinner content for every [CaveButtonVariant]. */
@Composable
private fun CaveButtonContent(
    text: String,
    loading: Boolean,
    leadingIcon: ImageVector?,
) {
    if (loading) {
        CircularProgressIndicator(
            modifier = Modifier.size(18.dp),
            strokeWidth = 2.dp,
        )
        return
    }
    Row(verticalAlignment = Alignment.CenterVertically) {
        if (leadingIcon != null) {
            Icon(
                imageVector = leadingIcon,
                contentDescription = null,
                modifier = Modifier.size(ButtonDefaults.IconSize),
            )
            Spacer(Modifier.width(ButtonDefaults.IconSpacing))
        }
        Text(text = text)
    }
}

private val CaveButtonShape = RoundedCornerShape(12.dp)
private val CaveButtonPadding = PaddingValues(horizontal = 20.dp, vertical = 12.dp)

// ─────────────────────────────────────────────────────────────────────────────
//  Previews — required for every component. Keep them internal.
// ─────────────────────────────────────────────────────────────────────────────

/** All variants + a few states, shared by the light and dark previews. */
@Composable
private fun CaveButtonPreviewRow() {
    Row(
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        CaveButton(text = "Primary", onClick = {})
        CaveButton(text = "Secondary", onClick = {}, variant = CaveButtonVariant.Secondary)
        CaveButton(text = "Ghost", onClick = {}, variant = CaveButtonVariant.Ghost)
        CaveButton(text = "Icon", onClick = {}, leadingIcon = Icons.Filled.Add)
        CaveButton(text = "Loading", onClick = {}, loading = true)
    }
}

@Preview(name = "Button • Light", showBackground = true)
@Composable
internal fun CaveButtonLightPreview() {
    CaveTheme(darkTheme = false) {
        CaveButtonPreviewRow()
    }
}

@Preview(name = "Button • Dark", showBackground = true, backgroundColor = 0xFF1C1917)
@Composable
internal fun CaveButtonDarkPreview() {
    CaveTheme(darkTheme = true) {
        CaveButtonPreviewRow()
    }
}
