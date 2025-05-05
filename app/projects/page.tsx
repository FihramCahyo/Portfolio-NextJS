'use client'

import { TextFade } from "@/components/ui/text-fade";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import cms_mantap from "@/public/image/cms-mantap.png";
import cms_portal from "@/public/image/cms-portal.png";
import site_google from "@/public/image/yayasan-binarpekerti.png";
import smp from "@/public/image/smp-ubm.png";
import manajemen_akun from "@/public/image/manajemen-akun-siswa.png";
import { useState } from "react";

type CardContent = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
};

const cardContent1: CardContent = {
  title: "SMP Unggulan Baitul Manshurin",
  description:
    "Web sekolah ini dibangun dengan teknologi Laravel dan Filament, memudahkan pengelolaan konten dan membuat tampilan yang lebih responsif dan cepat.",
  image: smp,
  link: "https://smpubm.ilmusekolah.web.id/",
};

const cardContent2: CardContent = {
  title: "Sekolah Yayasan Bina Pekerti",
  description:
    "Web sekolah ini menggunakan Google Site untuk pengembangannya. Platform ini dipilih karena kemudahan penggunaannya dan integrasi yang baik dengan layanan Google lainnya.",
  image: site_google,
  link: "https://binapekerti.sekolahweb.my.id/",
};

const cardContent3: CardContent = {
  title: "CMS MANTAP PPDB",
  description:
    "CMS ini dibangun menggunakan Laravel dan Filament, memudahkan pengelolaan produk yang akan ditawarkan ke lembaga pendidikan. Teknologi ini memungkinkan pengelolaan data menjadi lebih mudah.",
  image: cms_mantap,
  link: "https://mantap-ppdb-be.demo.or.id/",
};

const cardContent4: CardContent = {
  title: "CMS PORTAL PPDB",
  description:
    "CMS ini dibangun menggunakan Laravel dan Filament, CMS Portal PPDB adalah sistem manajemen konten yang dirancang khusus untuk menyajikan informasi pendaftaran peserta didik baru secara online.",
  image: cms_portal,
  link: "https://dev-portal-api-plb.mantap-ppdb.id/",
};

const cardContent5: CardContent = {
  title: "Sistem Manajemen Akun Siswa",
  description:
    "Saya mengembangkan sistem manajemen akun untuk pendaftaran siswa baru menggunakan ReactJS, dengan fitur validasi NIK untuk mencegah pendaftaran ganda dan memastikan akurasi data secara otomatis.",
  image: manajemen_akun,
  link: "https://spmb-smp.demo.or.id/manajemen/akun-siswa",
};

const CardBody = ({ title, description, className = "" }: {
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={cn(
      "px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-start sm:max-w-[300px]",
      className
    )}
  >
    <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">{title}</h3>
    <p className="text-sm leading-5">{description}</p>
  </div>
);

const CardWithImage = ({
  title,
  description,
  image,
  link,
}: CardContent) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="rounded-xl dark:bg-zinc-950 bg-zinc-50 overflow-hidden p-2 border pb-3">
      <div
        className="relative aspect-video cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          fill
          className="rounded-xl shadow-[0px_0px_10px_#A1A1AA] dark:shadow-[0px_0px_12px_rgb(39,39,42,0.7)]"
          src={image}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center rounded-lg">
          <span className="text-white opacity-0 group-hover:opacity-100 text-base font-bold transition-opacity duration-300">
            Lihat Gambar
          </span>
        </div>
      </div>

      <CardBody
        title={title}
        description={description}
        className="text-gray-800 dark:text-gray-200 mb-2 relative"
      />
      <div className="px-2">
        <Button className="w-full rounded-lg" asChild>
          <Link href={link} target="_blank">Buka Projek</Link>
        </Button>
      </div>

      {/* Modal untuk zoom gambar */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl h-[90vh]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-12 sm:mt-0">
      {/* Judul Section */}
      <TextFade
        direction="down"
        className="hidden md:block w-full text-center text-white">
        <h2 className="text-6xl font-bold relative">
          <span className="border-b-4 border-[#F96E2A]">
            Projek
          </span>
          <span className="text-[#F96E2A]"> Saya</span>
        </h2>
      </TextFade>

      {/* Konten Section */}
      <div className="flex flex-col w-full items-center gap-8 py-8">
        <TextFade
          direction="up"
          className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <CardWithImage
              title={cardContent1.title}
              description={cardContent1.description}
              image={cardContent1.image}
              link={cardContent1.link}
            />
            <CardWithImage
              title={cardContent2.title}
              description={cardContent2.description}
              image={cardContent2.image}
              link={cardContent2.link}
            />
            <CardWithImage
              title={cardContent3.title}
              description={cardContent3.description}
              image={cardContent3.image}
              link={cardContent3.link}
            />
            <CardWithImage
              title={cardContent4.title}
              description={cardContent4.description}
              image={cardContent4.image}
              link={cardContent4.link}
            />
            <CardWithImage
              title={cardContent5.title}
              description={cardContent5.description}
              image={cardContent5.image}
              link={cardContent5.link}
            />
          </div>
        </TextFade>
      </div>
    </div>
  );
};

export default Page;

