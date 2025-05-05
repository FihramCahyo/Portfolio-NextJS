'use client'

import { BlurIn } from "@/components/ui/Blur-in";
import Image from "next/image";
import myPhoto from "@/public/image/MyPhoto.png";
import { TextFade } from "@/components/ui/text-fade";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button_v5 } from "@/components/ui/button_v5";
import { MdFileDownload } from "react-icons/md";

const page = () => {
    const cardContent1 = {
        title: "1 Tahun Pengalaman Kerja",
        description: "Menggunakan Teknologi HTML, JS, PHP, Laravel, Livewire, Filament, VueJS dan ReatcJS",
    };

    const cardContent2 = {
        title: "5 Projek yang telah selesai",
        description: "Website Sekolah, CMS MANTAP PPDB, CMS Portal PPDB, dan Sistem Manajemen Akun Siswa",
    };

    const CardBody = ({
        content,
        className = "",
    }: {
        content: { title: string; description: string };
        className?: string;
    }) => (
        <div className={cn(className)}>
            <h3 className="text-xl font-bold text-black mb-1 sm:mx-12">
                {content.title}
            </h3>
            <p className="text-black font-light sm:mx-12">{content.description}</p>
        </div>
    );

    const MultilayerCard = ({ children }: { children: React.ReactNode }) => (
        <div className="relative w-full sm:w-[90%] py-4">
            <div className="absolute scale-x-95 inset-0 -rotate-[5deg] rounded-lg bg-gray-200 dark:bg-zinc-800 py-10" />
            {children}
        </div>
    );

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-16">
                {/* Judul Section */}
                <TextFade
                    direction="down"
                    className="hidden md:block w-full text-center text-white">
                    <h2 className="text-6xl font-bold relative">
                        <span className="border-b-4 border-[#F96E2A]">
                            Tentang
                        </span>
                        <span className="text-[#F96E2A]"> Saya</span>
                    </h2>
                </TextFade>

                {/* Konten Section */}
                <div className="flex flex-col md:flex-row w-full items-center gap-8 py-8">
                    {/* Bagian Informasi Personal */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full md:w-[50%] flex flex-col text-white">
                        <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
                            Personal Info
                        </h1>

                        <BlurIn>
                            <Image
                                src={myPhoto}
                                alt="Foto Saya"
                                width={500}
                                blurDataURL="data:..."
                                placeholder="blur"
                                className="block md:hidden relative"
                            />
                        </BlurIn>

                        <div className="grid grid-cols-2 gap-2 sm:gap-4 text-white mt-12 sm:mt-0">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">Nama Depan :</p>
                                <span className="font-semibold">Fihram</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">Alamat :</p>
                                <span className="font-semibold">Depok, Jawa Barat</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">Nama Tengah :</p>
                                <span className="font-semibold">Cahyo</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">TikTok :</p>
                                <span className="font-semibold">@hyowebdeveloper</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">Nama Akhir :</p>
                                <span className="font-semibold">Leksono</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">Telepon :</p>
                                <span className="font-semibold">+62 856 8213 804</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">Usia :</p>
                                <span className="font-semibold">22 Tahun</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-light">Email :</p>
                                <span className="font-semibold break-words">
                                    fihramcahyo10@gmail.com
                                </span>
                            </div>
                        </div>

                        {/* Resume Button */}
                        <Button_v5
                            type="button"
                            Icon={<MdFileDownload />}
                            onClick={() => window.open('https://drive.google.com/file/d/1Sg1ygE9HCR9dDXblC17CeXUx3zhep3ui/view?usp=sharing', '_blank')}
                            className="flex items-center justify-center w-full sm:w-[30%] rounded-full text-lg mt-4">
                            Unduh CV
                        </Button_v5>
                    </motion.div>

                    {/* Bagian Card Statistik */}
                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full md:w-[50%] flex flex-col gap-8">
                        {/* Card Pertama */}
                        <MultilayerCard>
                            <CardBody
                                content={cardContent1}
                                className="px-6 py-4 relative mx-auto rounded-lg shadow dark:bg-zinc-900/90 sm:backdrop-blur-xl"
                            />
                        </MultilayerCard>

                        {/* Card Kedua */}
                        <MultilayerCard>
                            <CardBody
                                content={cardContent2}
                                className="px-6 py-4 relative mx-auto rounded-lg shadow dark:bg-zinc-900/90 sm:backdrop-blur-xl"
                            />
                        </MultilayerCard>
                    </motion.div>
                </div>
            </main>
        </>
    );
};

export default page;