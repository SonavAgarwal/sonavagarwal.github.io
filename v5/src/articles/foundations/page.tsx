import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";

export const articleMetadata = {
    title: "Somehow I captained a dance team.",
    preview: "I was possibly the worst dancer on the team.",
    image: "/articles/foundations_gnomes.webp",
    imageAlt: "The Foundations dance team dressed as gnomes",
    date: "June 2026",
    slug: "foundations",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
