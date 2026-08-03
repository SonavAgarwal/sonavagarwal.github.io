import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";
import image from "./image.webp";

export const articleMetadata = {
    title: "Why I retired my old personal website.",
    preview:
        "Virtue signaling that I'm cultured and well read and not a doomscroller.",
    image,
    imageAlt: "A preview of Sonav's previous personal website",
    date: "August 2026",
    slug: "retired-personal-website",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
