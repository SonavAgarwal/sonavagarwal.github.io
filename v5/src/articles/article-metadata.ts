import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

export enum ArticleCategory {
    Business = "Business",
    Arts = "Arts",
    Lifestyle = "Lifestyle",
    Opinion = "Opinion",
    Cooking = "Cooking",
}

export const ARTICLE_CATEGORIES = Object.values(ArticleCategory);

export type ArticleMetadata = {
    title: string;
    preview: string;
    image: StaticImageData;
    imageAlt: string;
    date: string;
    slug: string;
    categories: ArticleCategory[];
};

export function toNextMetadata({
    title,
    preview,
    image,
    imageAlt,
}: ArticleMetadata): Metadata {
    return {
        title,
        description: preview,
        openGraph: {
            title,
            description: preview,
            images: [{ url: image.src, alt: imageAlt }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: preview,
            images: [image.src],
        },
    };
}
