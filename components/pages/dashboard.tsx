"use client";
import { useState } from "react";
import { FileText, Menu, X, Plus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Dashboard() {
     const [selectedSummary, setSelectedSummary] = useState(0);
     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

     // Mock data - replace with actual data from your backend
     const summaries = [
          { id: 1, name: "Research Paper on AI", date: "2024-03-15" },
          { id: 2, name: "Business Proposal", date: "2024-03-14" },
          { id: 3, name: "Technical Documentation", date: "2024-03-13" },
     ];

     return (
          <div className="flex h-[calc(100vh-4rem)] mt-16 font-[family-name:var(--font-crimson)] relative">
               {/* Sidebar */}
               <div
                    className={`${
                         isSidebarOpen ? "w-64" : "w-0"
                    } bg-white/10 backdrop-blur-md border-r border-border/50 transition-all duration-500 overflow-hidden`}
               >
                    <div className="p-4">
                         <div className="flex items-center justify-between mb-6">
                              <h2 className="text-xl font-bold">
                                   Your Summaries
                              </h2>
                              <button
                                   onClick={() => setIsSidebarOpen(false)}
                                   className="p-2 rounded-md hover:bg-white/10 transition-colors duration-500"
                              >
                                   <X className="w-5 h-5" />
                              </button>
                         </div>
                         <div className="space-y-2">
                              {summaries.map((summary, index) => (
                                   <button
                                        key={summary.id}
                                        onClick={() =>
                                             setSelectedSummary(index)
                                        }
                                        className={`w-full p-3 rounded-md flex items-center gap-3 hover:bg-white/10 transition-colors duration-500 ${
                                             selectedSummary === index
                                                  ? "bg-white/20"
                                                  : ""
                                        }`}
                                   >
                                        <FileText className="w-5 h-5" />
                                        <div className="text-left">
                                             <p className="font-medium">
                                                  {summary.name}
                                             </p>
                                             <p className="text-sm text-gray-500">
                                                  {summary.date}
                                             </p>
                                        </div>
                                   </button>
                              ))}
                         </div>
                    </div>
               </div>

               {/* Main Content */}
               <div
                    className={`flex-1 transition-all duration-500 relative ${
                         !isSidebarOpen ? "w-full" : ""
                    }`}
               >
                    {!isSidebarOpen && (
                         <button
                              onClick={() => setIsSidebarOpen(true)}
                              className="fixed top-20 left-4 p-2 rounded-md hover:bg-white/10 transition-colors duration-500 bg-white/10 backdrop-blur-md"
                         >
                              <Menu className="w-5 h-5" />
                         </button>
                    )}

                    <div className="h-full p-8">
                         {selectedSummary !== null ? (
                              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 h-full">
                                   <h1 className="text-2xl font-bold mb-4">
                                        {summaries[selectedSummary].name}
                                   </h1>
                                   <div className="prose prose-invert max-w-none">
                                        {/* Replace this with actual summary content */}
                                        <p>
                                             This is a preview of the summary
                                             content. The actual content will be
                                             loaded from your backend.
                                        </p>
                                   </div>
                              </div>
                         ) : (
                              <div className="flex items-center justify-center h-full">
                                   <p className="text-gray-500">
                                        Select a summary to view its content
                                   </p>
                              </div>
                         )}
                    </div>
               </div>

               {/* Upload Button */}
               <div className="absolute top-4 right-0">
                    <Link href="upload">
                         <Button className="rounded-full text-center cursor-pointer hover:scale-110">
                              <span className="hidden sm:inline">
                                   Upload a PDF{" "}
                              </span>
                              <Plus className="animate-pulse" />
                         </Button>
                    </Link>
               </div>
          </div>
     );
}
