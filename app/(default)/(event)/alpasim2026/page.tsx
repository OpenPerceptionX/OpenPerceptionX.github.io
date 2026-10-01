import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { alpasim2026 as challenge } from "@/data/alpasim2026";

export const metadata: Metadata = {
    title: `${challenge.title} | OpenDriveLab`,
    description: challenge.description,
    openGraph: {
        title: challenge.title,
        description: challenge.description,
        images: [challenge.image],
    },
};

const navigation = [
    ["Overview", "overview"],
    ["Tracks", "tracks"],
    ["Evaluation", "evaluation"],
    ["Timeline", "timeline"],
];

const resources = [
    ["Challenge website & leaderboard", challenge.website],
    ["Code & submission instructions", challenge.repository],
    ["Read the announcement", challenge.blog],
];

export default function AlpasimChallenge() {
    return (
        <article className="mx-auto w-full max-w-7xl px-6 pt-36 md:pt-28">
            <Link href="/events" className="text-sm text-o-gray animated-underline-gray">← All events</Link>

            <header className="mt-8 flex flex-col gap-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-o-blue">Autonomous driving · Challenge 2026</p>
                <h1 className="max-w-5xl text-4xl font-bold leading-tight fg-gradient-blue md:text-6xl">{challenge.title}</h1>
                <p className="max-w-3xl text-lg leading-relaxed text-o-gray">{challenge.description}</p>
                <p className="text-sm leading-relaxed">Organized by HKU OpenDriveLab, NVIDIA ASPIRE Group, and KE:SAI.</p>
                <div className="flex flex-wrap gap-3">
                    <a href={challenge.website} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-o-blue px-6 py-3 font-semibold text-white transition hover:bg-o-dark-blue">Join the challenge ↗</a>
                    <a href={challenge.repository} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-o-blue px-6 py-3 font-semibold text-o-blue transition hover:bg-o-blue/5">Code & developer resources ↗</a>
                    <a href={challenge.wechat} target="_blank" rel="noopener noreferrer" className="rounded-sm border border-o-blue px-6 py-3 font-semibold text-o-blue transition hover:bg-o-blue/5">WeChat article (中文) ↗</a>
                </div>
                <Image src={challenge.image} alt="AlpaSim E2E Closed Loop Challenge: a closed-loop benchmark for evaluating autonomous driving policies" width={1058} height={468} priority sizes="(max-width: 1280px) 100vw, 1280px" className="mt-4 h-auto w-full rounded-sm" />
            </header>

            <nav aria-label="On this page" className="my-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-foreground/10 py-5 text-sm">
                {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="text-o-blue animated-underline">{label}</a>)}
            </nav>

            <div className="flex flex-col gap-20 md:gap-28">
                <section id="overview" className="scroll-mt-28 space-y-6">
                    <h2 className="text-3xl font-bold fg-gradient-blue">From trajectory matching to closed-loop driving</h2>
                    <p className="max-w-4xl leading-relaxed">How do we know whether an autonomous driving model is truly getting better? Matching a recorded trajectory is only part of the answer. A useful evaluation must also ask whether a vehicle avoids collisions, stays on the road, completes its task, and produces decisions within the computing limits of a real vehicle.</p>
                    <p className="max-w-4xl leading-relaxed">AlpaSim brings these questions into a shared, open evaluation framework. Every predicted trajectory changes the simulated vehicle’s state. The simulator then renders new sensor observations and feeds them back to the policy, allowing evaluation to follow the consequences of successive decisions.</p>
                    <ol aria-label="Closed-loop evaluation cycle" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {["Observe the environment", "Predict a trajectory", "Update the vehicle state", "Render new observations"].map((step, index) => (
                            <li key={step} className="rounded-sm border border-o-blue/20 bg-o-blue/5 p-6">
                                <span className="text-sm font-semibold text-o-blue">0{index + 1}</span>
                                <p className="mt-3 font-semibold">{step}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="max-w-4xl leading-relaxed">This continuous loop tests whether a policy can recover from deviations, whether errors accumulate over time, and how a mistaken decision affects the rest of a drive.</p>
                    <details className="rounded-sm border border-foreground/10 p-6">
                        <summary className="cursor-pointer font-semibold text-o-blue">Why move beyond open-loop evaluation and NAVSIM?</summary>
                        <div className="mt-6 space-y-5 leading-relaxed">
                            <p>A recorded drive is one valid solution, not the only safe way to navigate a road. Safely slowing down can produce a larger Average Displacement Error (ADE) than an unsafe trajectory that ends closer to the recording. Trajectory error alone can therefore reward the wrong behavior.</p>
                            <figure>
                                {/* Preserve the source figure’s native proportions. */}
                                <img src="/images/alpasim2026/trajectory-error.png" alt="Comparison of safe speed changes and unsafe swerves using ADE and driving compliance" loading="lazy" className="mx-auto h-auto w-full max-w-4xl rounded-sm" />
                                <figcaption className="mt-3 text-sm text-o-gray">A safe speed change can have higher ADE than swerving off the road or into oncoming traffic.</figcaption>
                            </figure>
                            <p>NAVSIM evaluates safety, comfort, and driving progress through lightweight simulation. Since 2024, it has supported three public challenges; the first attracted 143 teams and 463 submissions. NAVSIM v2 added pseudo-simulation, using 3D Gaussian Splatting to create observations at different positions, headings, and speeds and assess recovery beyond the recorded trajectory.</p>
                            <p>AlpaSim takes the next step: a full sensor-level loop in which a policy continuously observes, acts, and receives fresh observations generated from the state it has reached.</p>
                        </div>
                    </details>
                </section>

                <section id="tracks" className="scroll-mt-28 space-y-6">
                    <h2 className="text-3xl font-bold fg-gradient-blue">Two complementary tracks</h2>
                    <p className="max-w-4xl leading-relaxed">The challenge pairs evaluation at industry scale with an accessible path for reproducible academic research. A common developer kit supports development and training on both datasets.</p>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-sm border border-foreground/10 p-6 md:p-8">
                            <p className="text-sm font-semibold uppercase tracking-wider text-o-blue">Industry-scale evaluation</p>
                            <h3 className="my-4 text-2xl font-bold">Physical AI AV Track</h3>
                            <p className="leading-relaxed">Built on the NVIDIA Physical AI Autonomous Vehicles Dataset, with approximately 1,700 hours of driving data across diverse regions and environments. NuRec supports closed-loop testing of stability, generalization, and computational efficiency at scale.</p>
                        </div>
                        <div className="rounded-sm border border-foreground/10 p-6 md:p-8">
                            <p className="text-sm font-semibold uppercase tracking-wider text-o-blue">Reproducible research</p>
                            <h3 className="my-4 text-2xl font-bold">nuPlan Track</h3>
                            <p className="leading-relaxed">Built on the nuPlan ecosystem, extending the evaluation direction of <a href="https://github.com/OpenDriveLab/WorldEngine" className="text-o-blue animated-underline">WorldEngine</a> with <a href="https://github.com/OpenDriveLab/MTGS/" className="text-o-blue animated-underline">MTGS</a> reconstruction assets. Researchers can adapt NAVSIM-style models for method comparisons, model iteration, and closed-loop behavior analysis.</p>
                        </div>
                    </div>
                    <figure>
                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                            {[1, 2, 3, 4].map(index => (
                                <img key={index} src={`/images/alpasim2026/driving-${index}.gif`} alt={`Closed-loop driving example ${index}, showing a road scene and the corresponding simulation view`} loading="lazy" className="h-auto w-full rounded-sm bg-black" />
                            ))}
                        </div>
                        <figcaption className="mt-3 text-sm text-o-gray">Closed-loop driving examples from the challenge, with road scenes and corresponding simulation visualizations.</figcaption>
                    </figure>
                </section>

                <section id="evaluation" className="scroll-mt-28 space-y-8">
                    <h2 className="text-3xl font-bold fg-gradient-blue">Evaluation that accounts for deployment</h2>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {[["16 GiB", "GPU memory limit"], ["≤ 0.1 s", "Target model work per Drive call"], ["Docker", "Containerized policy submissions"]].map(([value, label]) => (
                            <div key={value} className="border-l-2 border-o-blue pl-5 py-2">
                                <p className="text-3xl font-bold text-o-blue">{value}</p>
                                <p className="mt-2 text-sm text-o-gray">{label}</p>
                            </div>
                        ))}
                    </div>
                    <p className="max-w-4xl leading-relaxed">The organizers provide the computing resources and runtime environment for official evaluation. Each team receives the same number of official submission opportunities, while standardized local validation sets support debugging and ablation studies. Observation and control frequencies differ between tracks; all submissions must meet the challenge’s runtime requirements.</p>
                    <div className="max-w-4xl space-y-4">
                        <h3 className="text-2xl font-bold">Beyond an average score</h3>
                        <p className="leading-relaxed">The challenge is exploring Item Response Theory (IRT) to estimate policy ability and scenario difficulty from patterns of success and failure. Treating policies as test takers and scenarios as questions helps reveal differences in difficulty and discrimination, and provides uncertainty intervals alongside rankings.</p>
                        <p className="leading-relaxed">Physical AI AV and nuPlan are scored independently. For policies with overlapping rank intervals, the challenge further considers the average distance driven per at-fault infraction.</p>
                    </div>
                </section>

                <section id="timeline" className="scroll-mt-28 space-y-6">
                    <h2 className="text-3xl font-bold fg-gradient-blue">Challenge timeline</h2>
                    <ol className="grid gap-6 md:grid-cols-3">
                        {[
                            ["June 15, 2026", "Challenge opens", "Start developing and evaluating your driving policy."],
                            ["September 15, 2026", "Planned rules freeze", "Rules and submission formats freeze following maintenance."],
                            ["October 31, 2026", "Final submissions", "Public leaderboard closes; final submissions and technical reports are due."],
                        ].map(([date, title, detail]) => (
                            <li key={date} className="border-t-2 border-o-blue pt-5">
                                <p className="text-sm font-semibold text-o-blue">{date}</p>
                                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                                <p className="mt-2 leading-relaxed text-o-gray">{detail}</p>
                            </li>
                        ))}
                    </ol>
                    <p className="text-sm text-o-gray">Dates follow the published challenge plan. See the <a href={challenge.website} className="text-o-blue animated-underline">official challenge website</a> for the latest schedule, rules, and submission details.</p>
                </section>

                <section className="rounded-sm bg-o-blue/5 p-6 md:p-10">
                    <h2 className="text-3xl font-bold fg-gradient-blue">Make progress measurable</h2>
                    <p className="mt-4 max-w-3xl leading-relaxed">Join the community in developing safer, more efficient, and more generalizable end-to-end driving policies—and help make every improvement reliably measurable, reproducible, and verifiable.</p>
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                        {resources.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="font-semibold text-o-blue animated-underline">{label} ↗</a>)}
                    </div>
                </section>
            </div>
        </article>
    );
}
