import { toNextMetadata } from "@/articles/article-metadata";
import {
    ARTICLE_KEYS_BY_SLUG,
    ARTICLES,
    type ArticleSlug,
} from "@/articles/articles.generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = PageProps<"/read/[slug]">;

export const dynamicParams = false;

function getArticle(slug: string) {
    const key = ARTICLE_KEYS_BY_SLUG[slug as ArticleSlug];
    if (!key) notFound();

    return ARTICLES[key];
}

export function generateStaticParams() {
    return Object.keys(ARTICLE_KEYS_BY_SLUG).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return toNextMetadata(getArticle(slug).articleMetadata);
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const article = getArticle(slug);
    const Article = article.default;

    return <Article />;
}
