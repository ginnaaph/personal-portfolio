import { useMemo, useState } from "react";
import { BaseUIButton as Button } from "@/components/ui/base-button";
import { PreviewCard } from "@/explorations/components/PreviewCard";
import { generateOutput } from "@/explorations/utils/generate-output";
import type { ExplorationPost } from "@/explorations/types";

type AdminPreviewOutputProps = {
  post: ExplorationPost;
};

export function AdminPreviewOutput({ post }: AdminPreviewOutputProps) {
  const [copied, setCopied] = useState(false);
  const output = useMemo(() => generateOutput(post), [post]);

  const copyOutput = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-6">
      <PreviewCard post={post} />

      <div className="rounded-2xl border border-neutral-200 bg-white p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-lg font-semibold text-main">Generated Output</div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" onClick={copyOutput}>
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
        <pre className="max-h-90 overflow-auto rounded-md bg-neutral-50 p-3 text-xs text-neutral-800">
          <code>{output}</code>
        </pre>
      </div>
    </div>
  );
}
