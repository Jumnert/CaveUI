"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "./code-block";

const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const;

/** The runner command for each package manager (e.g. `pnpm dlx caveui@latest add button`). */
function pmCommand(pm: (typeof PACKAGE_MANAGERS)[number], addArgs: string) {
  switch (pm) {
    case "pnpm":
      return `pnpm dlx ${addArgs}`;
    case "yarn":
      return `yarn dlx ${addArgs}`;
    case "bun":
      return `bunx ${addArgs}`;
    case "npm":
    default:
      return `npx ${addArgs}`;
  }
}

/**
 * Installation block: outer tabs switch between "Command" (CLI install) and "Manual"
 * (copy the Kotlin source). The Command tab has nested pnpm/npm/yarn/bun tabs.
 */
export function InstallTabs({ id, code }: { id: string; code: string }) {
  const addArgs = `caveui@latest add ${id}`;

  return (
    <Tabs defaultValue="cli" className="w-full">
      <TabsList variant="line">
        <TabsTrigger value="cli">Command</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>

      <TabsContent value="cli">
        <Tabs defaultValue="pnpm" className="w-full">
          <TabsList>
            {PACKAGE_MANAGERS.map((pm) => (
              <TabsTrigger key={pm} value={pm}>
                {pm}
              </TabsTrigger>
            ))}
          </TabsList>
          {PACKAGE_MANAGERS.map((pm) => (
            <TabsContent key={pm} value={pm}>
              <CodeBlock code={pmCommand(pm, addArgs)} language="bash" />
            </TabsContent>
          ))}
        </Tabs>
        <p className="mt-2 text-sm text-muted-foreground">
          Adds the component into your project via the caveui registry.
        </p>
      </TabsContent>

      <TabsContent value="manual">
        <ol className="mb-3 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
          <li>Copy the code below into your project.</li>
          <li>Update the import paths to match your package.</li>
        </ol>
        <CodeBlock code={code} language="kotlin" />
      </TabsContent>
    </Tabs>
  );
}
