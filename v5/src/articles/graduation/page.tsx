import type { ArticleMetadata } from "@/articles/article-metadata";
import { div } from "framer-motion/m";
import Image from "next/image";

export const articleMetadata = {
    title: "Local larper graduates from UCLA",
    preview: "A basic example article about graduation.",
    image: "/articles/beach_grad.jpg",
    imageAlt: "A local larper graduating from UCLA",
    date: "June 2026",
} satisfies ArticleMetadata;

export default function Page() {
    return (
        <main className="w-full">
            <header className="mx-auto flex max-w-2xl flex-col gap-4 py-8">
                <h1 className="font-serif text-4xl font-bold">
                    {" "}
                    {articleMetadata.title}
                </h1>
                <p className="text-xl text-neutral-500 uppercase -mt-2">
                    {articleMetadata.date}
                </p>
                <div
                    className="flex flex-col gap-2 w-full my-4"
                >
                    <Image
                        src={articleMetadata.image}
                        alt={articleMetadata.imageAlt}
                        width={600}
                        height={400}

                        className="aspect-3/2 h-auto w-full"
                    />
                    <p className="text-sm text-neutral-500 w-full text-right">
                        {articleMetadata.imageAlt}
                    </p>
                </div>

                <p className="text-xl">I graduated! More thoughts coming soon...</p>
            </header>
        </main>
    );
}
