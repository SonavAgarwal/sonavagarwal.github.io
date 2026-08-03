import type { ArticleMetadata } from "@/articles/article-metadata";
import Image from "next/image";

export default function ArticleHeader({
    metadata,
}: {
    metadata: ArticleMetadata;
}) {
    const { title, date, image, imageAlt } = metadata;

    return (
        <header className="mx-auto flex max-w-2xl flex-col gap-4 py-8">
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
