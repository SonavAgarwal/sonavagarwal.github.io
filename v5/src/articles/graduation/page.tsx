import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticleHeader from "@/components/article-header";

export const articleMetadata = {
    title: "Local larper graduates from UCLA",
    preview: "A basic example article about graduation.",
    image: "/articles/beach_grad.jpg",
    imageAlt: "A local larper graduating from UCLA",
    date: "June 2026",
    slug: "graduation",
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
