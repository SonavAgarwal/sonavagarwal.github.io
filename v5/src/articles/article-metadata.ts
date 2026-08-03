import type { Metadata } from "next";

export type ArticleMetadata = {
    title: string;
    preview: string;
    image: string;
    imageAlt: string;
    date: string;
    slug: string;
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
            images: [{ url: image, alt: imageAlt }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: preview,
            images: [image],
        },
    };
}
