'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  User,
  Menu,
  X,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const data = [
    { title: "HOME", icon: <HomeIcon className="h-full w-full" />, href: "/" },
    { title: "ABOUT", icon: <User className="h-full w-full" />, href: "/about" },
    { title: "SKILLS", icon: <LightbulbIcon className="h-full w-full" />, href: "/skills" },
    { title: "PROJECTS", icon: <FolderGit2 className="h-full w-full" />, href: "/projects" },
    { title: "JOURNEY", icon: <GraduationCap className="h-full w-full" />, href: "/education" },
    { title: "CONTACT", icon: <Mail className="h-full w-full" />, href: "/contact" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <div className="fixed top-4 left-4 z-[9999] md:hidden">
        <button
          className="flex items-center justify-center w-10 h-10 bg-[#2b2a2a] text-white rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[9999] hidden md:flex flex-col gap-4 bg-transparent">
        {data.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <div className="group relative flex items-center w-14 h-14">
              {/* Background with hover effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-full transition-colors duration-300 ease-in-out",
                  {
                    // Jika elemen adalah root path "/"
                    "bg-[#2b2a2a] group-hover:bg-[#2b2a2a] group-hover:rounded-r-full group-hover:w-36 group-hover:-translate-x-[5rem]": pathname === "/" && idx !== data.findIndex((item) => item.href === pathname),

                    // Jika elemen bukan root path dan bukan elemen aktif
                    "bg-[#2b2a2a] group-hover:bg-[#F96E2A] group-hover:rounded-r-full group-hover:w-36 group-hover:-translate-x-[5rem]":
                      pathname !== "/" && idx !== data.findIndex((item) => item.href === pathname),

                    // Jika elemen adalah elemen aktif
                    "bg-[#F96E2A] group-hover:bg-[#F96E2A] group-hover:rounded-r-full group-hover:w-36 group-hover:-translate-x-[5rem] shadow": idx === data.findIndex((item) => item.href === pathname),

                    // Tambahkan hover khusus untuk elemen aktif agar tetap mempertahankan gaya
                    "group-hover:bg-[#F96E2A]": idx === data.findIndex((item) => item.href === pathname),
                  }
                )}
              />

              {/* Icon */}
              <div
                className={cn(
                  "relative mx-auto z-10 flex items-center justify-center text-white group-hover:text-white w-9 h-9",
                  pathname === item.href && "text-white"
                )}
              >
                {item.icon}
              </div>

              {/* Label/Text */}
              <span
                className="absolute right-14   opacity-0 group-hover:opacity-100 text-sm font-semibold text-gray-700 group-hover:text-white z-10 transition-all duration-300 ease-in-out whitespace-nowrap"
              >
                {item.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998] bg-black bg-opacity-50 md:hidden">
          <div className="absolute top-0 left-0 w-64 h-full bg-[#2b2a2a] text-white shadow-lg p-6">
            <nav className="flex flex-col gap-6 pt-12">
              {data.map((item, idx) => (
                <Link href={item.href} key={idx} onClick={() => setIsOpen(false)}>
                  <div
                    className={cn(
                      "flex items-center gap-4 p-2 rounded-md hover:bg-[#111111]",
                      pathname === item.href && "bg-[#F96E2A]"
                    )}
                  >
                    <div className="w-6 h-6">{item.icon}</div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
