'use client'

import { TextFade } from "@/components/ui/text-fade";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import javascript from "@/public/image/js.png";
import php from "@/public/image/php.png";
import laravel from "@/public/image/laravel.svg";
import tailwind from "@/public/image/tailwind-css.svg";
import nextjs from "@/public/next.svg";
import git from "@/public/image/Git-Icon.png";
import filament from "@/public/image/filament.png";
import livewire from "@/public/image/Livewire.png";

type Skill = {
    name: string;
    logo: StaticImageData;
    link: string;
};

const skills: Skill[] = [
    {
        name: "JavaScript",
        logo: javascript,
        link: "https://www.javascript.com/",
    },
    {
        name: "Next.js",
        logo: nextjs,
        link: "https://nextjs.org/",
    },
    {
        name: "Tailwind CSS",
        logo: tailwind,
        link: "https://tailwindcss.com/",
    },
    {
        name: "Git",
        logo: git,
        link: "https://git-scm.com/",
    },
    {
        name: "PHP",
        logo: php,
        link: "https://www.php.net/",
    },
    {
        name: "Laravel",
        logo: laravel,
        link: "https://laravel.com/",
    },
    {
        name: "Filament",
        logo: filament,
        link: "https://filamentphp.com/",
    },
    {
        name: "Livewire",
        logo: livewire,
        link: "https://livewire.laravel.com/",
    }
];

const CardWithLogo = ({ name, logo, link }: Skill) => {
    return (
        <Link href={link} target="_blank">
            <div className="rounded-xl dark:bg-zinc-950 bg-zinc-50 overflow-hidden p-2 border pb-3 hover:opacity-80 transition-opacity w-full md:mx-0 mx-auto">
                <div className="relative aspect-square">
                    <Image
                        fill
                        className="rounded-xl"
                        src={logo}
                        alt={name}
                    />

                </div>
                <p className="text-sm text-center font-bold tracking-tighter mt-2">{name}</p>
            </div>
        </Link>
    );
};

const Page = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-16">
                {/* Judul Section */}
                <TextFade
                    direction="down"
                    className="hidden md:block w-full text-center text-white"
                >
                    <h2 className="text-6xl font-bold relative">
                        <span className="border-b-4 border-[#F96E2A]">Kemampuan</span>
                        <span className="text-[#F96E2A]"> Saya</span>
                    </h2>
                </TextFade>

                {/* Konten Section */}
                <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8 py-8">
                    <TextFade
                        direction="up"
                        className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
                        {skills.map((skill) => (
                            <CardWithLogo key={skill.name} {...skill} />
                        ))}
                    </TextFade>
                </div>
            </main>
        </>
    );
};

export default Page;