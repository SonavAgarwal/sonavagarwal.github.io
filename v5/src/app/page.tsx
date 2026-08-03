import { ARTICLES } from "@/articles/articles.generated";
import ArticleSections from "@/components/article-sections";
import BigArticle from "@/components/big-article";
import SmallArticle from "@/components/small-article";

const ALL_ARTICLES = Object.values(ARTICLES);

const FEATURED_ARTICLES = [
    ARTICLES.graduation.articleMetadata,
    ARTICLES.janeStreet.articleMetadata,
    ARTICLES.nova.articleMetadata,
    ARTICLES.poppin.articleMetadata,
];

const SIDE_ARTICLES = [
    ARTICLES.kyotoHinge.articleMetadata,
    ARTICLES.bestMatchaInLa.articleMetadata,
    ARTICLES.retiredPersonalWebsite.articleMetadata,
    ARTICLES.foundations.articleMetadata,
];

export default function Home() {
    const today = new Date();
    const dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ][today.getDay()];
    const date = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col px-4">
            <div className="flex w-full flex-col pt-4">
                <div className="flex w-full flex-row items-center justify-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/sonava"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-[0.07em] uppercase"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.instagram.com/moonlightsonava"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-[0.07em] uppercase"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://github.com/sonavagarwal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-[0.07em] uppercase"
                    >
                        GitHub
                    </a>
                </div>
                <div className="flex w-full flex-row pt-2 pb-4">
                    <div className="hidden flex-1 flex-col justify-center md:flex">
                        <p>
                            {dayOfWeek}, {date}
                        </p>
                        <p>Everything is in jest</p>
                    </div>

                    <h1 className="font-fancy w-full text-center text-5xl md:w-auto md:text-7xl">
                        Sonav Agarwal
                    </h1>

                    <div className="hidden flex-1 flex-col items-end justify-center gap-1 md:flex">
                        <a
                            href="https://sonavagarwal.substack.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-background cursor-pointer rounded-sm px-2 py-1"
                        >
                            Subscribe
                        </a>
                        <p>(to my Substack)</p>
                    </div>
                </div>
            </div>

            <ArticleSections
                articles={ALL_ARTICLES.map(
                    ({ articleMetadata }) => articleMetadata,
                )}
            >
                <div className="h-1 w-full border-t border-b border-black" />

                <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-7">
                    <div className="flex flex-col gap-4 border-r-neutral-300 md:col-span-5 md:border-r md:pr-4">
                        {FEATURED_ARTICLES.map((metadata, index) => (
                            <BigArticle
                                key={metadata.slug}
                                metadata={metadata}
                                noBottomLine={
                                    index === FEATURED_ARTICLES.length - 1
                                }
                            />
                        ))}
                    </div>
                    <aside className="hidden flex-col gap-4 md:col-span-2 md:flex">
                        <h2 className="font-sans text-base font-bold">
                            Opinion
                        </h2>
                        {SIDE_ARTICLES.map((metadata, i) => (
                            <SmallArticle
                                key={metadata.slug}
                                metadata={metadata}
                                bottomLine={i !== SIDE_ARTICLES.length - 1}
                            />
                        ))}
                    </aside>
                </div>
            </ArticleSections>
        </div>
    );
}
