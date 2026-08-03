import BigArticle from "@/components/big-article";
import SideArticle from "@/components/side-article";

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
                        <p>Sonav's Life</p>
                    </div>

                    <h1 className="font-fancy w-full text-center text-5xl md:w-auto md:text-7xl">
                        Sonav Agarwal
                    </h1>

                    <div className="hidden flex-1 flex-col items-end justify-center md:flex">
                        {/* <p className="block max-w-50 text-right">
                            No coding agents
                            <br />
                            worked on this website.
                        </p> */}
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
                    {/* <BigArticle
                    title="Professional Larper"
                    preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image="/articles/kyoto_torii.webp"
                    date="Monday, January 1, 2023"
                /> */}
                    <BigArticle
                        title="Local larper graduates from UCLA"
                        preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="/articles/beach_grad.jpg"
                        date="Monday, January 1, 2023"
                    />
                    <BigArticle
                        title="Student who thought OCaml was a prayer interns at Jane Street"
                        preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="/articles/jane_street_selfie.jpg"
                        date="Monday, January 1, 2023"
                    />
                    <BigArticle
                        title="Meet the coolest kids in the Los Angeles tech-for-social-good scene."
                        preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="/articles/nova_joshua_tree.jpg"
                        date="Monday, January 1, 2023"
                    />
                    <BigArticle
                        title="Nerd builds app for parties in attempt to get invited."
                        preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        image="/articles/poppin_office.jpg"
                        date="Monday, January 1, 2023"
                    />
                    {/* <BigArticle
                    title="Another Article"
                    preview="This is another article with a different preview."
                    image="https://placehold.co/600x400"
                    date="Tuesday, January 2, 2023"
                />
                <BigArticle
                    title="Yet Another Article"
                    preview="This is yet another article with a different preview."
                    image="https://placehold.co/600x400"
                    date="Wednesday, January 3, 2023"
                /> */}
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <h3 className="font-sans text-base font-bold">Opinion</h3>
                    <SideArticle
                        title="I finally took the Kyoto Hinge photo. Here's what I learned."
                        preview="Hint: the Mbappe special."
                        image="/articles/kyoto_torii.webp"
                        date="July 2026"
                    />
                    <SideArticle
                        title="And the best matcha in LA is..."
                        preview="It's not rōk I just liked how the picture looked."
                        image="/articles/rok_matcha.webp"
                        date="June 2026"
                    />
                    <SideArticle
                        title="Why I retired my old personal website."
                        preview="Virtue signaling that I'm cultured and well read and not a doomscroller."
                        image="/articles/old_tiktok_website.webp"
                        date="August 2026"
                    />
                    <SideArticle
                        title="Somehow I captained a dance team."
                        preview="I was possibly the worst dancer on the team."
                        image="/articles/foundations_gnomes.webp"
                        date="June 2026"
                    />
                </div>
            </div>
        </div>
    );
}
