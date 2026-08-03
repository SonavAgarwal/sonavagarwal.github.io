import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Sonav Agarwal",
    description: "Privacy policy for sonavagarwal.com.",
};

export default function PrivacyPolicy() {
    return (
        <article className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
            <h1 className="font-serif text-4xl font-semibold tracking-tight">
                Privacy Policy
            </h1>
            <div className="mt-8 space-y-5 font-sans text-base leading-7 text-neutral-700">
                <p>
                    This site uses Google Analytics to understand general site
                    traffic and how visitors use the site. Google Analytics may
                    collect information such as pages visited, approximate
                    location, device information, and cookie identifiers.
                </p>
                <p>
                    I do not sell your personal information but I reserve the right to sell it cuz why not what are you actually gonna do. You're never gonna read this anyway. You can limit
                    cookies through your browser settings. Learn more about{" "}
                    <a
                        href="https://policies.google.com/technologies/partner-sites"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline underline-offset-4"
                    >
                        how Google uses information from sites that use its
                        services
                    </a>
                    .
                </p>
                <p>This policy may be updated from time to time.</p>
            </div>
        </article>
    );
}
