import Link from "next/link";

export default function Footer() {
     return (
          <footer className="w-full bg-transparent/50 backdrop-blur-md border-t border-border/50 shadow-xl shadow-purple-100/50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                         <div className="flex items-center gap-2">
                              <img
                                   src="/logo.png"
                                   alt="ReducioPDF Logo"
                                   className="h-8 w-8"
                              />
                              <span className="font-[family-name:var(--font-medieval)] text-lg font-bold">
                                   ReducioPDF
                              </span>
                         </div>
                         <div className="flex flex-col items-center md:items-end gap-2">
                              <div className="flex gap-4">
                                   <Link
                                        href="#"
                                        className="text-gray-600 hover:text-purple-400 transition-colors font-[family-name:var(--font-crimson)]"
                                   >
                                        Privacy Policy
                                   </Link>
                                   <Link
                                        href="#"
                                        className="text-gray-600 hover:text-purple-400 transition-colors font-[family-name:var(--font-crimson)]"
                                   >
                                        Terms of Service
                                   </Link>
                                   <Link
                                        href="#"
                                        className="text-gray-600 hover:text-purple-400 transition-colors font-[family-name:var(--font-crimson)]"
                                   >
                                        Contact
                                   </Link>
                              </div>
                              <p className="text-sm text-gray-500 font-[family-name:var(--font-crimson)]">
                                   © {new Date().getFullYear()} ReducioPDF. All
                                   rights reserved.
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
