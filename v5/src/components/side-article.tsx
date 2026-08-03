import type { ArticleMetadata } from "@/articles/article-metadata";
import Image from "next/image";

export default function SideArticle({
    title,
    preview,
    image,
    date,
}: ArticleMetadata) {
    return (
        <article className="flex flex-col gap-1 border-b border-b-neutral-300 pb-4">
            <div className="pb-3">
                <Image
                    className="aspect-3/2 h-auto w-full object-cover"
                    src={image}
                    width={1200}
                    height={800}
                    alt={title}
                />
            </div>
            <h3 className="font-serif text-xl font-bold">{title}</h3>
            <p className="font-sans text-neutral-500">{preview}</p>
            <p className="mt-2 font-sans text-xs tracking-[0.05em] text-neutral-500 uppercase">
                {date}
            </p>
        </article>
    );
}
