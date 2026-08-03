"use client";
import Link from "next/link";
import { ViewTransition } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ViewTransition
            name="article-page"
            enter={{
                "article-forward": "article-page-enter",
                default: "none",
            }}
            default="none"
        >
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
                <div className="min-h-screen">

                    {children}
                </div>
            </div>
        </ViewTransition>
    );
}
