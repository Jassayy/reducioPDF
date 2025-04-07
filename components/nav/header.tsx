"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export default function Header() {
     const pathname = usePathname();
     return (
          <header className="fixed top-0 left-0 right-0 z-50">
               <div className="h-16 bg-transparent/50 backdrop-blur-md border-b border-border/50 shadow-xl shadow-purple-100/50 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-32 px-4 sm:px-6 md:px-8 justify-between">
                    <Link
                         href="/"
                         className="flex items-center justify-center px-2 sm:px-5 hover:cursor-pointer w-40 sm:w-60 md:w-80"
                    >
                         <div>
                              <img
                                   src="/logo.png"
                                   alt="Reduciopdf Logo"
                                   className="h-10 sm:h-12 md:h-16 w-10 sm:w-12 md:w-16"
                              />
                         </div>
                         <h1 className="font-[family-name:var(--font-medieval)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold pt-1">
                              educioPDF
                         </h1>
                    </Link>
                    <div className="h-full flex justify-between gap-8 sm:gap-32 md:gap-52 items-center px-2 sm:px-6 font-[family-name:var(--font-crimson)]">
                         <Link
                              href={"/pricing"}
                              className={`w-20 sm:w-24 hover:text-purple-400 transition-colors ${
                                   pathname === "/pricing"
                                        ? "text-purple-400"
                                        : ""
                              }`}
                         >
                              Pricing
                         </Link>
                    </div>
                    <div className="w-32 sm:w-40 h-full flex items-center font-[family-name:var(--font-crimson)] gap-2">
                         <Button className="hover:cursor-pointer bg-white border text-black hover:bg-black hover:text-white text-sm sm:text-base px-2 sm:px-4">
                              SignIn
                         </Button>
                         <Button className="hover:cursor-pointer hover:text-black hover:bg-white border text-sm sm:text-base px-2 sm:px-4">
                              SignUp
                         </Button>
                    </div>
               </div>
          </header>
     );
}
