"use client";

import type { ArticleMetadata } from "@/articles/article-metadata";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState, ViewTransition } from "react";
import { flushSync } from "react-dom";

export default function SmallArticle({
    metadata,
    bottomLine,
}: {
    metadata: ArticleMetadata;
    bottomLine?: boolean;
}) {
    const { title, preview, image, imageAlt, date, slug } = metadata;
    const [isTransitionSource, setIsTransitionSource] = useState(false);

    return (
        <article
            className={classNames(
                bottomLine && "border-b border-b-neutral-300 pb-4",
            )}
        >
            <Link
                className="flex flex-col gap-1"
                href={`/read/${slug}`}
                transitionTypes={["article-forward"]}
                onNavigate={() => {
                    flushSync(() => setIsTransitionSource(true));
                }}
            >
                <div className="pb-3">
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
                            sizes="(min-width: 768px) 28vw, 100vw"
                            alt={imageAlt}
                        />
                    </ViewTransition>
                </div>
                <h3 className="font-serif text-xl font-bold">{title}</h3>
                <p className="font-sans text-neutral-500">{preview}</p>
                <p className="mt-2 font-sans text-xs tracking-[0.05em] text-neutral-500 uppercase">
                    {date}
                </p>
            </Link>
        </article>
    );
}
