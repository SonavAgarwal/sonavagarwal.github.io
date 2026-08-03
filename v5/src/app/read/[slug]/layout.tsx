import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            <nav className="border-b border-neutral-200 py-2 mb-16">
                <div className="mx-auto max-w-2xl">
                    <Link href="/" className="cursor-pointer">
                        <h1 className="text-3xl font-fancy text-center">Sonav Agarwal</h1>
                    </Link>
                </div>
            </nav>
            {children}
        </div>
    );
}