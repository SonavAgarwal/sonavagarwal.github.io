"use client";

import type { ArticleMetadata } from "@/articles/article-metadata";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ViewTransition } from "react";

export default function ArticleHeader({
    metadata,
}: {
    metadata: ArticleMetadata;
}) {
    const { title, date, image, imageAlt, slug } = metadata;
    const router = useRouter();

    return (
        <header className="mx-auto flex max-w-2xl flex-col gap-4 px-4 pb-8 sm:px-0">
            <button
                onClick={() => router.back()}
                className="block w-auto flex-none text-left text-neutral-500 hover:text-neutral-700 cursor-pointer mb-2"
            >
                Back
            </button>
            <h1 className="font-serif text-4xl font-bold">{title}</h1>
            <p className="-mt-2 text-md text-neutral-500">{date}</p>
            <figure className="my-4 flex w-full flex-col gap-2">
                <ViewTransition
                    name={`article-image-${slug}`}
                    share={{
                        "article-forward": "article-image-transition",
                        default: "none",
                    }}
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={1200}
                        height={800}
                        sizes="(min-width: 672px) 672px, 100vw"
                        className="aspect-3/2 h-auto w-full object-cover"
                    />
                </ViewTransition>
                <figcaption className="w-full text-right text-sm text-neutral-500">
                    {imageAlt}
                </figcaption>
            </figure>
        </header>
    );
}
