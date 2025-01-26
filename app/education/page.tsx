'use client'

import { TextFade } from "@/components/ui/text-fade";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineData = [
    {
        year: "2023 - Sekarang",
        title: "Web Developer",
        organization: "PT. Mardawa Intiguna Persada (Staf)",
        description: "Sebagai Staf saya bertanggung jawab dalam pengembangan dan pemeliharaan Content management system untuk mendukung kebutuhan bisnis dan teknologi perusahaan.",
        icon: <Briefcase className="text-[#F96E2A] w-6 h-6" />,
    },
    {
        year: "Januari - Maret 2019",
        title: "Technical Support",
        organization: "Politeknik Negeri Media Kreatif (PKL)",
        description: "Sebagai anak PKL saya memberikan dukungan teknis untuk memastikan kelancaran operasional perangkat keras, perangkat lunak, dan jaringan.",
        icon: <Briefcase className="text-[#F96E2A] w-6 h-6" />,
    },
    {
        year: "2021 - 2024",
        title: "Manajemen Informatika",
        organization: "Politeknik LP3I Jakarta Kampus Ciputat",
        description: "Sebagai mahasiswa saya berfokus pada pengembangan dan pembuatan sistem aplikasi website dengan mempelajari dasar-dasarnya terlebih dahulu.",
        icon: <GraduationCap className="text-[#F96E2A] w-6 h-6" />,
    },
    {
        year: "2018 - 2021",
        title: "Teknik Komputer dan Jaringan",
        organization: "SMK Bina Rahayu",
        description: "Sebagai siswa saya berfokus pada mempelajari jaringan komputer dan teknologi informasi, memahami cara kerja jaringan dan bagaimana cara menghubungkan perangkat komputer.",
        icon: <GraduationCap className="text-[#F96E2A] w-6 h-6" />,
    },
];

const page = () => {

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-16">
                {/* Judul Section */}
                <TextFade
                    direction="down"
                    className="hidden md:block w-full text-center text-white mb-8">
                    <h2 className="text-6xl font-bold relative">
                        <span className="border-b-4 border-[#F96E2A]">
                            Perjalanan
                        </span>
                        <span className="text-[#F96E2A]"> Saya</span>
                    </h2>
                </TextFade>

                {/* Konten Section */}
                <div className="flex flex-col items-center justify-center w-full">
                    {/* Timeline Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full py-12 mt-12 sm:mt-0">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative flex items-start gap-4 flex-col md:flex-row md:items-center"
                            >
                                {/* Timeline Content */}
                                <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:w-[calc(100%-4rem)]">
                                    <h4 className="text-lg md:text-xl font-semibold text-white">
                                        {item.title} <span className="text-gray-400">— {item.organization}</span>
                                    </h4>
                                    <p className="text-sm md:text-base text-gray-400 mt-2">
                                        {item.description}
                                    </p>
                                    <div className="absolute -left-2 top-0 bg-[#F96E2A] w-1 h-full"></div>
                                </div>
                                
                                <div className="absolute -left-5 top-[-2.5rem] md:-left-4 text-gray-400 text-sm flex items-center gap-2">
                                    {item.icon}
                                    <span>{item.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default page;

 