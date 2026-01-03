import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";

export function NavItemGitHub() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <a
        href={`https://github.com/${SOURCE_CODE_GITHUB_REPO}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Icons.github className="size-4" />
      </a>
    </Button>
  );
}
