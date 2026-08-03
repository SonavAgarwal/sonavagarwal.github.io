import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";
import image from "./image.webp";

export const articleMetadata = {
    title: "I finally took the Kyoto Hinge photo. Here's what I learned.",
    preview: "Hint: the Mbappe special.",
    image,
    imageAlt: "Sonav standing beneath the torii gates in Kyoto",
    date: "July 2026",
    slug: "kyoto-hinge",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
