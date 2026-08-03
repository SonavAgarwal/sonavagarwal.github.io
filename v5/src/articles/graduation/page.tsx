import {
    ArticleCategory,
    type ArticleMetadata,
} from "@/articles/article-metadata";
import ArticleHeader from "@/components/article-header";
import image from "./image.webp";

export const articleMetadata = {
    title: "Local larper graduates from UCLA",
    preview:
        "His biggest accomplishments over four years include eating at every dining hall in one day and winning a cake decorating competition.",
    image,
    imageAlt: "A local larper graduating from UCLA",
    date: "June 2026",
    slug: "graduation",
    categories: [ArticleCategory.Lifestyle, ArticleCategory.Opinion],
} satisfies ArticleMetadata;

export default function Page() {
    return (
        <main className="w-full">
            <ArticleHeader metadata={articleMetadata} />
            <div className="mx-auto max-w-2xl pb-12">
                <p className="text-xl">
                    I graduated! More thoughts coming soon...
                </p>
            </div>
        </main>
    );
}
