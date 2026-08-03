import { ARTICLES } from "@/articles/articles.generated";
import BigArticle from "@/components/big-article";
import SideArticle from "@/components/side-article";

const featuredArticles = [
    ARTICLES.graduation.articleMetadata,
    ARTICLES.janeStreet.articleMetadata,
    ARTICLES.nova.articleMetadata,
    ARTICLES.poppin.articleMetadata,
];

const opinionArticles = [
    ARTICLES.kyotoHinge.articleMetadata,
    ARTICLES.bestMatchaInLa.articleMetadata,
    ARTICLES.retiredPersonalWebsite.articleMetadata,
    ARTICLES.foundations.articleMetadata,
];

export default function Home() {
    const today = new Date();
    const dow = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]?.[today.getDay()];
    // Month Day, Year
    const date = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="mx-auto flex max-w-6xl flex-col">
            <div className="flex w-full flex-col pt-4">
                <div className="flex w-full flex-row items-center justify-center gap-4">
                    <p className="text-xs tracking-[0.07em] uppercase">
                        LinkedIn
                    </p>
                    <p className="text-xs tracking-[0.07em] uppercase">
                        Instagram
                    </p>
                    <p className="text-xs tracking-[0.07em] uppercase">
                        GitHub
                    </p>
                </div>
                <div className="flex w-full flex-row pt-2 pb-4">
                    <div className="hidden flex-1 flex-col justify-center md:flex">
                        <p>
                            {dow}, {date}
                        </p>
                        <p>Sonav’s Life</p>
                    </div>

                    <h1 className="font-fancy w-full text-center text-5xl md:w-auto md:text-7xl">
                        Sonav Agarwal
                    </h1>

                    <div className="hidden flex-1 flex-col items-end justify-center md:flex gap-1">
                        {/* <p className="block max-w-50 text-right">
                            No coding agents
                            <br />
                            worked on this website.
                        </p> */}
                        <button
                            className="bg-accent px-2 py-1 rounded-sm text-background cursor-pointer"
                        >
                            Subscribe
                        </button>
                        <p>(to my Substack)</p>
                    </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-8 pb-3">
                    <p className="text-sm">Business</p>
                    <p className="text-sm">Arts</p>
                    <p className="text-sm">Lifestyle</p>
                    <p className="text-sm">Opinion</p>
                    <p className="text-sm">Cooking</p>
                </div>
            </div>
            <div className="h-1 w-full border-t border-b border-black" />

            {/* grid with left column 80% and right column 20% */}
            <div className="grid w-full grid-cols-1 gap-4 py-4 md:grid-cols-7">
                <div className="col-span-5 flex flex-col gap-4 border-r border-r-neutral-300 pr-4">
                    {featuredArticles.map((metadata) => (
                        <BigArticle key={metadata.slug} metadata={metadata} />
                    ))}
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <h3 className="font-sans text-base font-bold">Opinion</h3>
                    {opinionArticles.map((metadata) => (
                        <SideArticle key={metadata.slug} metadata={metadata} />
                    ))}
                </div>
            </div>
        </div>
    );
}
