"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

export default function Header() {
     const [isOpen, setIsOpen] = useState(false);

     return (
          <header className="fixed top-0 left-0 right-0 z-50">
               <div className="h-16 bg-transparent/50 backdrop-blur-md border-b border-border/50 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-32 px-4 sm:px-6 md:px-8 justify-between">
                    <div className="w-full sm:w-auto flex items-center justify-between">
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
                                   ReducioPDF
                              </h1>
                         </Link>
                         <button
                              className="sm:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-500"
                              onClick={() => setIsOpen(!isOpen)}
                         >
                              {isOpen ? (
                                   <X className="w-6 h-6" />
                              ) : (
                                   <Menu className="w-6 h-6" />
                              )}
                         </button>
                    </div>

                    <div
                         className={`${
                              isOpen ? "flex" : "hidden"
                         } sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto transition-all duration-500`}
                    >
                         <div className="w-full  sm:w-40 h-full flex items-center font-[family-name:var(--font-crimson)] gap-2">
                              <SignedOut>
                                   <Link
                                        href="/sign-in"
                                        className="w-full sm:w-auto"
                                   >
                                        <Button className="w-full hover:cursor-pointer bg-white border text-black hover:bg-black hover:text-white text-sm sm:text-base px-2 sm:px-4">
                                             SignIn
                                        </Button>
                                   </Link>
                                   <Link
                                        href="/sign-up"
                                        className="w-full sm:w-auto"
                                   >
                                        <Button className="w-full hover:cursor-pointer hover:text-black hover:bg-white border text-sm sm:text-base px-2 sm:px-4">
                                             SignUp
                                        </Button>
                                   </Link>
                              </SignedOut>

                              <SignedIn>
                                   <UserButton />
                              </SignedIn>
                         </div>
                    </div>
               </div>
          </header>
     );
}
