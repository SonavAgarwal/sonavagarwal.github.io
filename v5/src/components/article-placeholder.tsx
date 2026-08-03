import type { ArticleMetadata } from "@/articles/article-metadata";
import ArticleHeader from "@/components/article-header";

export default function ArticlePlaceholder({
    metadata,
}: {
    metadata: ArticleMetadata;
}) {
    return (
        <main className="w-full">
            <ArticleHeader metadata={metadata} />
            <div className="mx-auto max-w-2xl pb-12 text-xl">
                <p>More thoughts coming soon...</p>
            </div>
        </main>
    );
}
