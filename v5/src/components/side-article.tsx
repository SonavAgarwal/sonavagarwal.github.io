import Image from "next/image";

export default function SideArticle({ title, preview, image, date }: { title: string; preview: string; image: string; date: string }) {
    return (
        <article className="flex flex-col gap-1 pb-4 border-b-neutral-300 border-b">
            <div className="pb-3">
                <Image
                    className="w-full h-auto object-cover aspect-3/2"
                    src={image}
                    width={1200}
                    height={800}
                    alt="Placeholder Image" />
            </div>
            <h3 className="text-xl font-serif font-bold">{title}</h3>
            <p className="font-sans text-neutral-500">{preview}</p>
            <p className="font-sans text-xs text-neutral-500 uppercase tracking-[0.05em] mt-2">{date}</p>
        </article>
    );
}