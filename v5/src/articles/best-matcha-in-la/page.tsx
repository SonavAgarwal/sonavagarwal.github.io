import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";
import image from "./image.webp";

export const articleMetadata = {
    title: "And the best matcha in LA is...",
    preview: "It's not rōk I just liked how the picture looked.",
    image,
    imageAlt: "A matcha drink from rōk",
    date: "June 2026",
    slug: "best-matcha-in-la",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
