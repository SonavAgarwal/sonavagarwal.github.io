"use client";

import type { ArticleMetadata } from "@/articles/article-metadata";
import router from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ArticleHeader({
    metadata,
}: {
    metadata: ArticleMetadata;
}) {
    const { title, date, image, imageAlt } = metadata;
    const router = useRouter();

    return (
        <header className="mx-auto flex max-w-2xl flex-col gap-4 pb-8">
            <button
                onClick={() => router.back()}
                className="block w-auto flex-none text-left text-neutral-500 hover:text-neutral-700 cursor-pointer"
            >
                Back
            </button>
            <h1 className="font-serif text-4xl font-bold">{title}</h1>
            <p className="-mt-2 text-xl text-neutral-500 uppercase">{date}</p>
            <figure className="my-4 flex w-full flex-col gap-2">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={1200}
                    height={800}
                    sizes="(min-width: 672px) 672px, 100vw"
                    className="aspect-3/2 h-auto w-full object-cover"
                />
                <figcaption className="w-full text-right text-sm text-neutral-500">
                    {imageAlt}
                </figcaption>
            </figure>
        </header>
    );
}
