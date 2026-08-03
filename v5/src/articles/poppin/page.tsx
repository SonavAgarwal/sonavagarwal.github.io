import {
    ArticleCategory,
    type ArticleMetadata,
} from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";
import image from "./image.webp";

export const articleMetadata = {
    title: "Nerd builds app for parties in attempt to get invited.",
    preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image,
    imageAlt: "Sonav posing outside the Poppin office",
    date: "Monday, January 1, 2023",
    slug: "poppin",
    categories: [ArticleCategory.Business],
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
