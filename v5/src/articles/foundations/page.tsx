import {
    ArticleCategory,
    type ArticleMetadata,
} from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";
import image from "./image.webp";

export const articleMetadata = {
    title: "I captained a dance team.",
    preview: "And slept an average of 4 hours a night.",
    image,
    imageAlt: "The Foundations dance team dressed as gnomes",
    date: "June 2026",
    slug: "foundations",
    categories: [ArticleCategory.Arts, ArticleCategory.Lifestyle],
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
