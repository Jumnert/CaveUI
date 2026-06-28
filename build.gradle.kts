// Top-level build file. Plugin versions are declared in gradle/libs.versions.toml.
// Each module applies the plugins it needs; here we just register them.
plugins {
    alias(libs.plugins.android.application) apply false
    alias(libs.plugins.android.library) apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.compose.compiler) apply false
}
