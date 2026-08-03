"use client";

import type { ArticleMetadata } from "@/articles/article-metadata";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState, ViewTransition } from "react";
import { flushSync } from "react-dom";

export default function BigArticle({
    metadata,
    noBottomLine,
}: {
    metadata: ArticleMetadata;
    noBottomLine?: boolean;
}) {
    const { title, preview, image, imageAlt, slug } = metadata;
    const [isTransitionSource, setIsTransitionSource] = useState(false);

    return (
        <article
            className={classNames(
                !noBottomLine && "border-b border-b-black pb-4",
            )}
        >
            <Link
                className="flex flex-col-reverse gap-3 md:flex-row md:gap-4"
                href={`/read/${slug}`}
                transitionTypes={["article-forward"]}
                onNavigate={() => {
                    flushSync(() => setIsTransitionSource(true));
                }}
            >
                <div className="flex flex-col gap-1">
                    <h2 className="font-serif text-2xl font-bold">{title}</h2>
                    <p className="font-sans">{preview}</p>
                </div>
                <div className="w-full shrink-0 md:w-2/3">
                    <ViewTransition
                        name={
                            isTransitionSource
                                ? `article-image-${slug}`
                                : undefined
                        }
                        share={{
                            "article-forward": "article-image-transition",
                            default: "none",
                        }}
                    >
                        <Image
                            className="aspect-3/2 h-auto w-full object-cover"
                            src={image}
                            width={1200}
                            height={800}
                            sizes="(min-width: 768px) 40vw, calc(100vw - 2rem)"
                            alt={imageAlt}
                        />
                    </ViewTransition>
                </div>
            </Link>
        </article>
    );
}
