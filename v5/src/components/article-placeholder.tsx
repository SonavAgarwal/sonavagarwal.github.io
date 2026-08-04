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
            <div className="mx-auto max-w-2xl px-4 pb-12 text-xl sm:px-0">
                <p>More thoughts coming soon...</p>
            </div>
        </main>
    );
}
