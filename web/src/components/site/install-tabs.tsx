import { CodeBlock } from "./code-block";

const M3_SNIPPET = `// build.gradle.kts (module)
dependencies {
    implementation(platform("androidx.compose:compose-bom:2025.06.00"))
    implementation("androidx.compose.material3:material3")
}`;

/**
 * Installation for a copy-paste, Material 3 component library: there is no caveui
 * dependency to add — components are plain Jetpack Compose built on Material 3. Ensure M3
 * is on the classpath, then copy the Usage snippet below.
 */
export function InstallTabs() {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        caveui components are copy-paste Jetpack Compose built entirely on Material 3 —
        there&apos;s no caveui dependency to add. Make sure Material 3 is on your classpath
        (it ships with the Compose BOM), then copy the Usage snippet below into your project.
      </p>
      <CodeBlock code={M3_SNIPPET} language="kotlin" />
    </div>
  );
}
