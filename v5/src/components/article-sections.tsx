"use client";

import {
    ARTICLE_CATEGORIES,
    ArticleCategory,
    type ArticleMetadata,
} from "@/articles/article-metadata";
import SmallArticle from "@/components/small-article";
import type { ReactNode } from "react";
import { useState } from "react";

type ArticleCategoryAndAll = ArticleCategory | "All";
const ARTICLES_PER_PAGE = 8;
const ARTICLE_CATEGORIES_AND_ALL: ArticleCategoryAndAll[] = [
    "All",
    ...ARTICLE_CATEGORIES,
];

export default function ArticleSections({
    articles,
    children,
}: {
    articles: ArticleMetadata[];
    children: ReactNode;
}) {
    const [selectedCategory, setSelectedCategory] =
        useState<ArticleCategoryAndAll>("All");
    const [visibleArticleCounts, setVisibleArticleCounts] = useState<
        Partial<Record<ArticleCategoryAndAll, number>>
    >({});

    const sectionArticles = articles.filter(
        (article) =>
            selectedCategory === "All" ||
            article.categories.includes(selectedCategory),
    );
    const visibleArticleCount =
        visibleArticleCounts[selectedCategory] ?? ARTICLES_PER_PAGE;
    const visibleSectionArticles = sectionArticles.slice(
        0,
        visibleArticleCount,
    );
    const hasMoreArticles = visibleArticleCount < sectionArticles.length;

    function selectCategory(
        category: ArticleCategoryAndAll,
        jumpToSections = false,
    ) {
        setSelectedCategory(category);

        if (jumpToSections) {
            window.requestAnimationFrame(() => {
                document
                    .getElementById("sections")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    }

    function showMoreArticles() {
        setVisibleArticleCounts((counts) => ({
            ...counts,
            [selectedCategory]:
                (counts[selectedCategory] ?? ARTICLES_PER_PAGE) +
                ARTICLES_PER_PAGE,
        }));
    }

    return (
        <>
            <nav
                aria-label="Jump to article section"
                className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-2 pb-3"
            >
                {ARTICLE_CATEGORIES_AND_ALL.map((category) => (
                    <button
                        key={category}
                        type="button"
                        onClick={() => selectCategory(category, true)}
                        className="cursor-pointer text-sm underline-offset-4 hover:underline"
                    >
                        {category}
                    </button>
                ))}
            </nav>

            {children}

            <section id="sections" className="scroll-mt-4 pt-8 pb-4">
                <div className="mb-4 mt-16 border-t border-t-black" />
                <div className="flex w-full flex-col items-center justify-center gap-2 sm:flex-row">
                    <h2 className="font-sans sm:text-base font-bold text-xl">Sections</h2>
                    <div className="-mr-2 hidden px-2 sm:block">|</div>
                    <div className="flex w-full flex-wrap gap-x-4 gap-y-1 sm:gap-x-2">
                        {ARTICLE_CATEGORIES_AND_ALL.map((category) => {
                            const isSelected = category === selectedCategory;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    aria-pressed={isSelected}
                                    aria-controls="section-articles"
                                    onClick={() => selectCategory(category)}
                                    className={`cursor-pointer underline-offset-4 hover:text-neutral-500 sm:px-2 sm:py-1 ${isSelected
                                        ? "underline decoration-1"
                                        : ""
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div
                    id="section-articles"
                    aria-live="polite"
                    className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:[&>article]:border-r lg:[&>article]:border-r-neutral-300 lg:[&>article]:pr-4 [&>article:last-child:last-child]:border-r-0 lg:[&>article:nth-child(4n)]:border-r-0 lg:[&>article:nth-child(4n)]:pr-0 [&>article:nth-child(odd)]:border-r [&>article:nth-child(odd)]:border-r-neutral-300 [&>article:nth-child(odd)]:pr-4"
                >
                    {visibleSectionArticles.map((metadata) => (
                        <SmallArticle key={metadata.slug} metadata={metadata} />
                    ))}
                </div>
                {hasMoreArticles && (
                    <button
                        type="button"
                        onClick={showMoreArticles}
                        className="mx-auto mt-6 block cursor-pointer rounded-sm border border-black px-4 py-2 text-sm hover:bg-neutral-100"
                    >
                        Show more
                    </button>
                )}
            </section>
        </>
    );
}
