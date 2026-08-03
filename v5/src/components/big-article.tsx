import Image from "next/image";

export default function BigArticle({
    title,
    preview,
    image,
    date,
}: {
    title: string;
    preview: string;
    image: string;
    date: string;
}) {
    return (
        <article className="flex flex-row gap-4 pb-4 border-b border-b-black">
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-serif font-bold">{title}</h2>
                <p className="font-sans">
                    {preview}
                </p>
            </div>
            <div>
                <Image
                    className="w-[100rem] h-auto object-cover aspect-3/2"
                    src={image}
                    width={1200}
                    height={800}
                    alt="Placeholder Image"
                />
            </div>
        </article>
    );
}
