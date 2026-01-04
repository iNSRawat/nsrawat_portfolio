import type { Metadata } from "next";
import Link from "next/link";

import { DS_COMPONENTS } from "@/features/components/data/ds-components";
import { getAllSnippets } from "@/features/snippets/data/snippets";
import { cn } from "@/lib/utils";
import { components } from "@/registry/registry-components";

export const metadata: Metadata = {
  title: "Components",
  description:
    "A collection of components and snippets for data science and web development.",
};

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className,
      )}
    />
  );
}

export default function ComponentsPage() {
  const snippets = getAllSnippets();

  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Components</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Registry Components */}
        {components.map((component) => (
          <div
            key={component.name}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-edge bg-card transition-colors hover:border-foreground/20 hover:bg-accent/5"
          >
            <div className="border-b border-edge bg-accent/30 p-4 transition-colors group-hover:bg-accent/40">
              <h2 className="font-semibold group-hover:text-primary">
                {component.title}
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded bg-accent px-2 py-0.5 font-mono text-xs uppercase text-foreground">
                  Component
                </span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <p className="text-sm text-muted-foreground">
                {component.description}
              </p>
            </div>
            {/* If we have a dedicated page for registry components, link to it. 
                 chanhdai.com links to /components/[name]. 
                 We assume the slug is the component name. */}
            <Link
              href={`/components/${component.name}`}
              className="absolute inset-0"
            >
              <span className="sr-only">View {component.title}</span>
            </Link>
          </div>
        ))}

        {/* DS Components */}
        {DS_COMPONENTS.map((component) => (
          <div
            key={component.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-edge bg-card transition-colors hover:border-foreground/20 hover:bg-accent/5"
          >
            <div className="border-b border-edge bg-accent/30 p-4 transition-colors group-hover:bg-accent/40">
              <h2 className="font-semibold group-hover:text-primary">
                {component.title}
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded bg-accent px-2 py-0.5 font-mono text-xs uppercase text-foreground">
                  DS Component
                </span>
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="mb-4 overflow-hidden rounded-md border bg-background p-2">
                {component.preview}
              </div>
              <p className="text-sm text-muted-foreground">
                {component.description}
              </p>
            </div>
            {/* DS Components currently don't have separate pages in our new model unless we make them.
                 For now, they are just displayed here. If we want a detail page, we need to implement it.
                 The user liked chanhdai style which is a list that links to detail.
                 Let's link to a detail page if we can support it, otherwise distinct behavior.
                 I'll leave it without a link for now or link to anchor? 
                 Actually, simpler: separate them visually or provide a 'View' button if it was interactive.
                 Given the preview is small, maybe just showing it here is enough? 
                 But to match uniformity, let's treat them as items. 
                 Since I don't have a detail page for them yet (they were just hardcoded in the index), 
                 I won't wrap them in a Link unless I create `components/[slug]` handling for them.
                 I'll add a 'coming soon' or just display them as cards. 
                 Wait, the previous DS page had the preview inline. I've kept the preview inline here.
              */}
          </div>
        ))}

        {/* Snippets */}
        {snippets.map((snippet) => (
          <Link
            key={snippet.slug}
            href={`/components/${snippet.slug}`}
            className="group block"
          >
            <div className="h-full overflow-hidden rounded-lg border border-edge bg-card transition-colors hover:border-foreground/20 hover:bg-accent/5">
              <div className="border-b border-edge bg-accent/30 p-4 transition-colors group-hover:bg-accent/40">
                <h2 className="font-semibold group-hover:text-primary">
                  {snippet.metadata.title}
                </h2>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded bg-accent px-2 py-0.5 font-mono text-xs uppercase text-foreground">
                    Snippet
                  </span>
                  <span className="rounded bg-accent px-2 py-0.5 font-mono text-xs uppercase text-foreground">
                    {snippet.metadata.language}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  {snippet.metadata.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="h-4" />
    </div>
  );
}
