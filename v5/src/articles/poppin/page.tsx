import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";

export const articleMetadata = {
    title: "Nerd builds app for parties in attempt to get invited.",
    preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/articles/poppin_office.jpg",
    imageAlt: "The Poppin team working together in the office",
    date: "Monday, January 1, 2023",
    slug: "poppin",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
