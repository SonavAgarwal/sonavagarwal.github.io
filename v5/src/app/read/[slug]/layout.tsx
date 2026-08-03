"use client";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full">
            <nav className="border-b border-neutral-200 py-2 mb-32">
                <div className="mx-auto max-w-2xl">
                    <Link href="/" className="cursor-pointer">
                        <h1 className="font-fancy text-center text-3xl">
                            Sonav Agarwal
                        </h1>
                    </Link>
                </div>
            </nav>
            {/* back link */}

            {children}
        </div>
    );
}
