import { FileUploadDemo } from "@/components/FileUpload/fileupload";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, UserPlus, Upload, FileText } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
     return (
          <>
               <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-[family-name:var(--font-crimson)] ">
                    <div className="space-y-12 ">
                         <div className="text-center">
                              <h1 className="text-4xl sm:text-5xl md:text-9xl font-bold bg-gradient-to-b from-neutral-300 to-black bg-clip-text text-transparent">
                                   Reducio{" "}
                                   <span className="bg-gradient-to-b from-black to-rose-700 bg-clip-text text-transparent">
                                        PDF
                                   </span>
                              </h1>
                              <p className="mt-4 text-xl bg-gradient-to-l from-rose-800 to-black bg-clip-text text-transparent flex flex-col">
                                   AI-powered summaries crafted for speed,
                                   simplicity, and brilliance.
                                   <span className="bg-gradient-to-r from-yellow-200 to-black text-transparent bg-clip-text">
                                        Wave your wand.Summon the summary.
                                   </span>
                              </p>
                              <div className="mt-8 flex justify-center">
                                   <Link href="/sign-up">
                                        <Button className="bg-gradient-to-r from-neutral-500 to-black hover:cursor-pointer text-white font-bold py-3 px-8 rounded-full text-sm transition-all duration-300 transform hover:scale-105 hover:from-black hover:to-neutral-500 hover:transition hover:duration-300">
                                             Try it out{" "}
                                             <ArrowRight className="animate-pulse" />
                                        </Button>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className=" h-auto mt-16 w-full sm:px-12  lg:px-40">
                         <div className=" h-52 p-24 sm:h-68 lg:h-90 w-full rounded-2xl  border-dashed border-1 border-black">
                              Demo video
                         </div>
                    </div>
                    <div className="mt-16 px-4 sm:px-12 lg:px-44">
                         <div className="text-center">
                              <h1 className="font-bold text-2xl bg-gradient-to-t from-black to-rose-500 text-transparent bg-clip-text">
                                   How does it work?
                              </h1>
                         </div>
                         <div className="mt-12 flex flex-row justify-between items-center px-4">
                              {/* Step 1 */}
                              <div className="flex flex-col items-center">
                                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-rose-500 flex items-center justify-center mb-4">
                                        <UserPlus className="w-8 h-8 text-white" />
                                   </div>
                                   <h3 className="text-lg font-semibold mb-2">
                                        Sign Up
                                   </h3>
                                   <p className="text-center text-gray-600">
                                        Create your account to get started
                                   </p>
                              </div>

                              {/* Arrow 1 */}
                              <ArrowRight className="w-8 h-8 text-gray-400" />

                              {/* Step 2 */}
                              <div className="flex flex-col items-center">
                                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-rose-500 flex items-center justify-center mb-4">
                                        <Upload className="w-8 h-8 text-white" />
                                   </div>
                                   <h3 className="text-lg font-semibold mb-2">
                                        Upload PDF
                                   </h3>
                                   <p className="text-center text-gray-600">
                                        Upload your PDF document
                                   </p>
                              </div>

                              {/* Arrow 2 */}
                              <ArrowRight className="w-8 h-8 text-gray-400" />

                              {/* Step 3 */}
                              <div className="flex flex-col items-center">
                                   <div className="w-16 h-16 rounded-full bg-gradient-to-br from-black to-rose-500 flex items-center justify-center mb-4">
                                        <FileText className="w-8 h-8 text-white" />
                                   </div>
                                   <h3 className="text-lg font-semibold mb-2">
                                        Get Summary
                                   </h3>
                                   <p className="text-center text-gray-600">
                                        Receive your AI-generated summary
                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="mt-16 sm:p-12 ">
                         <h1 className="text-center text-2xl font-bold bg-gradient-to-b from-black to-rose-700 bg-clip-text text-transparent mb-12 ">
                              💰 Pricing Plans
                         </h1>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                              {/* Apprentice Plan */}
                              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2  border-rose-200/20 hover:border-rose-300/30 transition-all duration-300 ">
                                   <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl">🧙‍♂️</span>
                                        <h2 className="text-xl font-bold">
                                             Basic Plan
                                        </h2>
                                   </div>
                                   <div className="mb-6">
                                        <span className="text-3xl font-bold">
                                             $5.99
                                        </span>
                                        <span className="text-gray-500">
                                             /month
                                        </span>
                                   </div>
                                   <p className="text-gray-600 mb-6">
                                        Great for casual readers and students.
                                   </p>
                                   <ul className="space-y-3 mb-8">
                                        <li className="flex items-center gap-2">
                                             <span>🪄</span>
                                             <span>
                                                  Summarize up to 5 PDFs per
                                                  month
                                             </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <span>⚡</span>
                                             <span>
                                                  AI-powered fast summaries
                                             </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <span>📚</span>
                                             <span>
                                                  Download or copy summaries
                                             </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <span>🔐</span>
                                             <span>Secure file handling</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <span>🧰</span>
                                             <span>
                                                  Priority support (basic)
                                             </span>
                                        </li>
                                   </ul>
                                   <Button className="w-full bg-gradient-to-r from-black to-rose-700 hover:from-rose-700 hover:to-black transition duration-300 text-white py-3 rounded-full hover:cursor-pointer">
                                        Start as Apprentice
                                   </Button>
                              </div>

                              {/* Archmage Plan */}
                              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-3 border-rose-500 hover:border-rose-700 transition-all duration-300">
                                   <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-rose-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        Recommended
                                   </div>
                                   <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl">🧙‍♂️</span>
                                        <h2 className="text-xl font-bold">
                                             Pro Plan
                                        </h2>
                                   </div>
                                   <div className="mb-6">
                                        <span className="text-3xl font-bold">
                                             $15.99
                                        </span>
                                        <span className="text-gray-500">
                                             /month
                                        </span>
                                   </div>
                                   <p className="text-gray-600 mb-6">
                                        Best for researchers, pros, and power
                                        users.
                                   </p>
                                   <ul className="space-y-3 mb-8">
                                        <li className="flex items-center gap-2">
                                             <span>♾️</span>
                                             <span>
                                                  Unlimited PDF summaries
                                             </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <span>🧠</span>
                                             <span>
                                                  Advanced summarization models
                                             </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <span>🗂️</span>
                                             <span>
                                                  Upload large documents (up to
                                                  100MB)
                                             </span>
                                        </li>

                                        <li className="flex items-center gap-2">
                                             <span>🧞‍♂️</span>
                                             <span>
                                                  Premium support (faster
                                                  response)
                                             </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                             <span>🔮</span>
                                             <span>
                                                  Early access to new features
                                             </span>
                                        </li>
                                   </ul>
                                   <Button className="w-full bg-gradient-to-r from-black to-rose-700 hover:from-rose-700 duration-300 hover:to-black transition text-white py-3 rounded-full hover:cursor-pointer">
                                        Go Pro with Archmage
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
