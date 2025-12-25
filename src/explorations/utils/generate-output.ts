import type { ExplorationPost, ExplorationSection } from "@/explorations/types";

export function generateOutput(post: ExplorationPost): string {
  const lines: string[] = [];
  const push = (s: string, indent = 0) => lines.push("\t".repeat(indent) + s);

  push("{");
  push(`id: "${escapeStr(post.id)}",`, 1);
  push(`slug: "${escapeStr(post.slug)}",`, 1);
  push(`title: "${escapeStr(post.title)}",`, 1);
  push(`category: "${post.category}",`, 1);
  push(`summary: "${escapeStr(post.summary)}",`, 1);

  if (post.heroImage?.src) {
    push("heroImage: {", 1);
    push(`src: "${escapeStr(post.heroImage.src)}"${post.heroImage.alt ? "," : ""}`, 2);
    if (post.heroImage.alt) push(`alt: "${escapeStr(post.heroImage.alt)}"`, 2);
    push("},", 1);
  }

  if (post.tags && post.tags.length > 0) {
    push("tags: [" + post.tags.map((t) => `"${escapeStr(t)}"`).join(", ") + "],", 1);
  }

  push(`createdAt: "${escapeStr(post.createdAt)}",`, 1);

  push("sections: [", 1);
  post.sections.forEach((s, si) => {
    push("{", 2);
    push(`type: "${s.type}"${sectionNeedsComma(s) ? "," : ""}`, 3);
    switch (s.type) {
      case "text": {
        const h = s.heading ? `heading: "${escapeStr(s.heading)}",` : "";
        if (h) push(h, 3);
        push(`body: "${escapeStr(s.body)}"`, 3);
        break;
      }
      case "image": {
        if (s.heading) push(`heading: "${escapeStr(s.heading)}",`, 3);
        push(`src: "${escapeStr(s.src)}"${s.alt || s.caption ? "," : ""}`, 3);
        if (s.alt) push(`alt: "${escapeStr(s.alt)}"${s.caption ? "," : ""}`, 3);
        if (s.caption) push(`caption: "${escapeStr(s.caption)}"`, 3);
        break;
      }
      case "gallery": {
        if (s.heading) push(`heading: "${escapeStr(s.heading)}",`, 3);
        push("images: [", 3);
        s.images.forEach((img) => {
          push("{", 4);
          push(`src: "${escapeStr(img.src)}"${img.alt || img.caption ? "," : ""}`, 5);
          if (img.alt) push(`alt: "${escapeStr(img.alt)}"${img.caption ? "," : ""}`, 5);
          if (img.caption) push(`caption: "${escapeStr(img.caption)}"`, 5);
          push("},", 4);
        });
        push("]", 3);
        break;
      }
      case "bullets": {
        if (s.heading) push(`heading: "${escapeStr(s.heading)}",`, 3);
        push("items: [" + s.items.map((it) => `"${escapeStr(it)}"`).join(", ") + "]", 3);
        break;
      }
    }
    push("}" + (si < post.sections.length - 1 ? "," : ""), 2);
  });
  push("]", 1);
  push("}");

  return lines.join("\n");
}

function sectionNeedsComma(s: ExplorationSection): boolean {
  switch (s.type) {
    case "text":
      return !!s.heading;
    case "image":
      return true; // always more fields
    case "gallery":
      return !!s.heading || (s.images?.length ?? 0) > 0;
    case "bullets":
      return !!s.heading || (s.items?.length ?? 0) > 0;
  }
}

function escapeStr(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/"/g, "\\\"")
    .replace(/\n/g, "\\n");
}
