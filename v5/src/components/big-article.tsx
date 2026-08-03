import type { ArticleMetadata } from "@/articles/article-metadata";
import Image from "next/image";
import Link from "next/link";

export default function BigArticle({
    metadata,
}: {
    metadata: ArticleMetadata;
}) {
    const { title, preview, image, imageAlt, slug } = metadata;

    return (
        <article className="border-b border-b-black pb-4">
            <Link className="flex flex-row gap-4" href={`/read/${slug}`}>
                <div className="flex flex-col gap-1">
                    <h2 className="font-serif text-2xl font-bold">{title}</h2>
                    <p className="font-sans">{preview}</p>
                </div>
                <div className="w-2/3 shrink-0">
                    <Image
                        className="aspect-3/2 h-auto w-full object-cover"
                        src={image}
                        width={1200}
                        height={800}
                        sizes="(min-width: 768px) 40vw, 50vw"
                        alt={imageAlt}
                    />
                </div>
            </Link>
        </article>
    );
}
