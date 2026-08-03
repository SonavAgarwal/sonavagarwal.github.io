import BigArticle from "@/components/big-article";
import SideArticle from "@/components/side-article";

export default function Home() {

    const today = new Date();
    const dow = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]?.[today.getDay()];
    // Month Day, Year
    const date = today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

    return <div
        className="flex max-w-6xl mx-auto flex-col"
    >
        <div
            className="flex flex-col w-full pt-4"
        >
            <div className="w-full flex-row gap-4 flex justify-center items-center">
                <p className="uppercase text-xs tracking-[0.07em]">LinkedIn</p>
                <p className="uppercase text-xs tracking-[0.07em]">Instagram</p>
                <p className="uppercase text-xs tracking-[0.07em]">GitHub</p>
            </div>
            <div className="flex w-full flex-row pb-4 pt-2">
                <div
                    className="hidden flex-1 md:flex flex-col justify-center"
                >
                    <p>{dow}, {date}</p>
                    <p>Sonav's Life</p>
                </div>

                <h1
                    className="text-5xl md:text-7xl font-fancy text-center w-full md:w-auto"
                >Sonav Agarwal</h1>

                <div
                    className="hidden flex-1 md:flex flex-col justify-center"
                ></div>
            </div>
            <div className="w-full pb-3 flex-row gap-8 flex justify-center items-center">
                <p className="text-sm">Business</p>
                <p className="text-sm">Arts</p>
                <p className="text-sm">Lifestyle</p>
                <p className="text-sm">Opinion</p>
                <p className="text-sm">Cooking</p>
            </div>

        </div>
        <div className="w-full border-t border-black border-b h-1" />

        {/* grid with left column 80% and right column 20% */}
        <div className="w-full grid grid-cols-1 md:grid-cols-7 gap-4 py-4">
            <div className="col-span-5 border-r border-r-neutral-300 pr-4 flex flex-col gap-4">
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
                    title="Nerd builds app for parties in attempt to get invited."
                    preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image="/articles/poppin_office.jpg"
                    date="Monday, January 1, 2023"
                />
                <BigArticle
                    title="Local Larper Graduates from UCLA"
                    preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    image="/articles/kyoto_torii.webp"
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
                <h3 className="text-base font-sans font-bold">Opinion</h3>
                <SideArticle title="I finally took the Kyoto Hinge photo. Here's what I learned." preview="Hint: the Mbappe special." image="/articles/kyoto_torii.webp"
                    date="Thursday, January 4, 2023"
                />
                <SideArticle title="And the best matcha in LA is..." preview="It's not rōk I just liked how the picture looked." image="/articles/rok_matcha.webp" />
                <SideArticle title="Somehow I captained a dance team." preview="I was possibly the worst dancer on the team." image="/articles/foundations_gnomes.webp" />
            </div>
        </div >

    </div >;
}
