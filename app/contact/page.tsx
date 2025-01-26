'use client';

import { TextFade } from "@/components/ui/text-fade";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import instagram from "@/public/image/icon-instagram.png";
import tiktok from "@/public/image/icon-tiktok.png";
import linkedin from "@/public/image/icon-linkedin.png";

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
                        <span className="border-b-4 border-[#F96E2A]">Kontak</span>
                        <span className="text-[#F96E2A]"> Saya</span>
                    </h2>
                </TextFade>

                {/* Konten Section */}
                <TextFade
                    direction="up"
                    className="flex flex-col md:flex-row w-full items-center gap-8 py-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-bold text-white">Hubungi Saya</p>
                        <p className="text-lg font-light text-white">
                            Jika kalian ingin berdiskusi atau ingin bekerjasama, kalian dapat
                            menghubungi saya melalui nomor WhatsApp berikut:
                        </p>
                        <p className="text-lg font-bold text-white flex items-center gap-2">
                            <FaWhatsapp className="text-green-500" />
                            <Link
                                href="https://wa.me/628568213804"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                0856-8213-804
                            </Link>
                        </p>
                        <p className="text-lg font-light text-white">
                            atau kalian dapat menghubungi saya melalui sosial media berikut:
                        </p>
                        <ul className="flex gap-4">
                            <li>
                                <Link
                                    href="https://www.instagram.com/fihram_cahyo23/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={instagram}
                                        alt="Instagram Logo"
                                        width={32}
                                        height={32}
                                        className="bg-white rounded-sm bg-opacity-20"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.tiktok.com/@hyowebdeveloper"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={tiktok}
                                        alt="Instagram Logo"
                                        width={32}
                                        height={32}
                                        className="bg-white rounded-sm"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/fihram-cahyo-b1235b289/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={linkedin}
                                        alt="Instagram Logo"
                                        width={32}
                                        height={32}
                                        className="bg-white rounded-sm bg-opacity-20"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </TextFade>
            </main>
        </>
    );
};

export default Page;
