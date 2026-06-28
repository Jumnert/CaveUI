package io.caveui.sample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Download
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import io.caveui.components.button.CaveButton
import io.caveui.components.button.CaveButtonVariant
import io.caveui.theme.CaveTheme

/**
 * The caveui sample app: a living gallery and test bed. Every component added to the
 * library gets a section here so contributors and reviewers can see it on a real device.
 */
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            CaveTheme {
                Gallery()
            }
        }
    }
}

@Composable
private fun Gallery() {
    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
                .padding(24.dp),
            verticalArrangement = Arrangement.spacedBy(24.dp),
        ) {
            Text("caveui", style = MaterialTheme.typography.titleLarge)

            ComponentSection(title = "Button — variants") {
                CaveButton(text = "Primary", onClick = {})
                CaveButton(text = "Secondary", onClick = {}, variant = CaveButtonVariant.Secondary)
                CaveButton(text = "Ghost", onClick = {}, variant = CaveButtonVariant.Ghost)
            }

            ComponentSection(title = "Button — states") {
                CaveButton(text = "With icon", onClick = {}, leadingIcon = Icons.Filled.Download)
                CaveButton(text = "Loading", onClick = {}, loading = true)
                CaveButton(text = "Disabled", onClick = {}, enabled = false)
            }
        }
    }
}

/** A titled group of demo widgets. Reused for every component section. */
@Composable
private fun ComponentSection(
    title: String,
    content: @Composable () -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Text(title, style = MaterialTheme.typography.labelLarge)
        content()
    }
}

@Preview(showBackground = true)
@Composable
private fun GalleryPreview() {
    CaveTheme {
        Gallery()
    }
}
