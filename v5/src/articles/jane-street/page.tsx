import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticlePlaceholder from "@/components/article-placeholder";

export const articleMetadata = {
    title: "Student who thought OCaml was a prayer interns at Jane Street",
    preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/articles/jane_street_selfie.jpg",
    imageAlt: "Sonav taking a selfie outside the Jane Street office",
    date: "Monday, January 1, 2023",
    slug: "jane-street",
} satisfies ArticleMetadata;

export default function Page() {
    return <ArticlePlaceholder metadata={articleMetadata} />;
}
