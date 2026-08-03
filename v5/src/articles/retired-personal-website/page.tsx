import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";

export const articleMetadata = {
    title: "Why I retired my old personal website.",
    preview:
        "Virtue signaling that I'm cultured and well read and not a doomscroller.",
    image: "/articles/old_tiktok_website.webp",
    imageAlt: "A preview of Sonav's previous personal website",
    date: "August 2026",
    slug: "retired-personal-website",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
