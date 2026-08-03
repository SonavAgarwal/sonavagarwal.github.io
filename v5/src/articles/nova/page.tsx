import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";
import image from "./image.webp";

export const articleMetadata = {
    title: "Meet the coolest kids in the Los Angeles tech-for-social-good scene.",
    preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image,
    imageAlt: "The Nova team together at Joshua Tree",
    date: "Monday, January 1, 2023",
    slug: "nova",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
