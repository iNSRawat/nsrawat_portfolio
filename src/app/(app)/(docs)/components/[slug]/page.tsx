import { ArrowLeftIcon, CodeXmlIcon, EyeIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MDX } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prose } from "@/components/ui/typography";
import {
  getAllSnippets,
  getSnippetBySlug,
} from "@/features/snippets/data/snippets";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const snippets = getAllSnippets();
  return snippets.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const snippet = getSnippetBySlug(slug);

  if (!snippet) {
    return {};
  }

  return {
    title: snippet.metadata.title,
    description: snippet.metadata.description,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Check if it's a snippet
  const snippet = getSnippetBySlug(slug);

  if (snippet) {
    return (
      <div className="relative py-10">
        <Button
          variant="ghost"
          asChild
          className="mb-8 h-8 px-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
        >
          <Link href="/components" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Components
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">
            {snippet.metadata.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {snippet.metadata.description}
          </p>
        </div>

        <Tabs defaultValue="code" className="gap-4">
          <TabsList>
            <TabsTrigger className="px-2.5" value="preview" disabled>
              <EyeIcon className="mr-2 h-4 w-4" />
              Preview
            </TabsTrigger>
            <TabsTrigger className="px-2.5" value="code">
              <CodeXmlIcon className="mr-2 h-4 w-4" />
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="flex min-h-[350px] w-full items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
              No preview available for this snippet.
            </div>
          </TabsContent>
          <TabsContent value="code">
            <div className="rounded-xl border border-edge p-4">
              <Prose>
                <MDX code={snippet.content} />
              </Prose>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  // Fallback for not found or unsupported types for now
  notFound();
}
