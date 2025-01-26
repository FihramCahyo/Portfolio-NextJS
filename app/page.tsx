'use client'

import { Button_v5 } from '@/components/ui/button_v5';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import myPhoto from "@/public/image/MyPhoto.png";
import { RotateWords } from '@/components/ui/rotate-words';
import { TextFade } from '@/components/ui/text-fade';
import { BlurIn } from '@/components/ui/Blur-in';

export default function Home() {

  const router = useRouter()

  return (
    <>
      <div
        className="fixed -right-20 top-0 h-screen w-1/3 bg-[#F96E2A] pointer-events-none -skew-x-12 hidden lg:block"
        style={{ zIndex: -1 }}
      />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-16">
        <div className="w-full flex flex-col-reverse md:flex-row justify-center">
          <div className="flex flex-col justify-center gap-4 text-left w-full md:w-1/2">
            <TextFade
              direction="up"
              className="flex flex-col justify-center gap-4"
            >
              <h3 className="text-xl sm:text-2xl text-[#F96E2A] font-semibold">Nama Saya</h3>
              <h1 className="text-4xl sm:text-6xl text-primary text-white font-semibold">
                Fihram Cahyo <br />
                <span className='border-b-4 border-[#F96E2A]'>Leksono.</span>
              </h1>
              <div>
                <RotateWords text="Saya Web Developer spesialis" words={['Laravel', 'Livewire', 'Filament', 'Tailwind CSS', 'JavaScript', 'PHP']} />
              </div>


              <Button_v5 type="button" onClick={() => router.push('/profile')} className="flex items-center justify-center w-full sm:w-[30%] rounded-full text-lg mt-4">
                Lihat Profil
              </Button_v5>
            </TextFade>
          </div>

          <BlurIn>
            <Image
              src={myPhoto}
              alt="Foto Saya"
              width={500}
              blurDataURL="data:..."
              placeholder="blur"
              className="hidden md:block relative"
            />
          </BlurIn>
        </div>
      </main>
    </>
  );
}

