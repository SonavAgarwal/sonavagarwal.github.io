import type { ArticleMetadata } from "@/articles/article-metadata";
import Image from "next/image";

export default function BigArticle({ title, preview, image }: ArticleMetadata) {
    return (
        <article className="flex flex-row gap-4 border-b border-b-black pb-4">
            <div className="flex flex-col gap-1">
                <h2 className="font-serif text-2xl font-bold">{title}</h2>
                <p className="font-sans">{preview}</p>
            </div>
            <div>
                <Image
                    className="aspect-3/2 h-auto w-[100rem] object-cover"
                    src={image}
                    width={1200}
                    height={800}
                    alt={title}
                />
            </div>
        </article>
    );
}
