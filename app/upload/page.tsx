"use client";
import React, { useState } from "react";
import { GridBackgroundDemo } from "@/components/background/background";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { FormEvent } from "react";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";

const schema = z.object({
     file: z
          .instanceof(File, {
               message: "Invalid File",
          })
          .refine(
               (file) => file.size <= 20 * 1024 * 1024,
               "File size should be less than 20MB"
          )
          .refine(
               (file) => file.type === "application/pdf",
               "File must be a pdf"
          ),
});

export default function Upload() {
     const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
          onClientUploadComplete: () => {
               console.log("Uploaded successfully");
               toast("File uploaded successfully!");
          },
          onUploadError: (err) => {
               console.error("Error occurred while uploading ", err);
               toast("Error while uploading file.Try again.");
          },
          onUploadBegin: (fileData) => {
               console.log("Upload has begun for ", fileData);
               toast("Upload has begun.");
          },
     });
     const [selectedFile, setSelectedFile] = useState<File | null>(null);
     const [pdfUrl, setPdfUrl] = useState<string | null>(null);
     const [error, setError] = useState<string | null>(null);
     const [isUploading, setIsUploading] = useState(false);
     const [isUploaded, setIsUploaded] = useState(false);

     // Handle file upload changes
     const handleFileChange = (files: File[]) => {
          setError(null); // Clear any previous errors

          if (files.length > 0) {
               const file = files[0];

               // Only process PDFs
               if (file.type === "application/pdf") {
                    setSelectedFile(file);

                    // Create a URL for the PDF preview
                    const fileUrl = URL.createObjectURL(file);
                    setPdfUrl(fileUrl);
               } else {
                    setError("Please upload a PDF file");
                    setSelectedFile(null);
                    setPdfUrl(null);
               }
          }
     };

     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log("Submitted");

          if (!selectedFile) {
               setError("No file selected");
               return;
          }

          try {
               // Use the selectedFile state instead of trying to get it from FormData
               const validatedResult = schema.safeParse({ file: selectedFile });
               console.log(validatedResult);

               if (!validatedResult.success) {
                    const errorMsg =
                         validatedResult.error.flatten().fieldErrors
                              .file?.[0] || "Invalid file";
                    setError(errorMsg);
                    console.log(errorMsg);

                    return;
               }

               console.log("File validated successfully:", selectedFile.name);
               // Here you would proceed with file processing/upload
               setIsUploading(true);

               // Use selectedFile instead of undefined 'file' variable
               const response = await startUpload([selectedFile]);

               setIsUploading(false);
               setIsUploaded(true);

               if (!response) {
                    setError("Upload failed");
                    toast("Please use a different file(A pdf document)");
                    return;
               }

               console.log("Upload response:", response);
          } catch (err) {
               setIsUploading(false);
               console.error("Validation error:", err);
               setError("An error occurred while validating the file");
          }
     };

     // Clean up object URL when component unmounts or when file changes
     React.useEffect(() => {
          return () => {
               if (pdfUrl) {
                    URL.revokeObjectURL(pdfUrl);
               }
          };
     }, [pdfUrl]);

     return (
          <div className="relative min-h-screen">
               <GridBackgroundDemo />
               <div className="absolute inset-0 flex font-[family-name:var(--font-crimson)] gap-6 p-4">
                    {/* Left Column - File Upload */}
                    <div className="w-1/2 flex items-center justify-center">
                         <form
                              onSubmit={handleSubmit}
                              className="w-full max-w-md"
                         >
                              <FileUpload onChange={handleFileChange} />

                              {error && (
                                   <div className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-md">
                                        {error}
                                   </div>
                              )}

                              <Button
                                   type="submit"
                                   className="mt-4 w-full bg-gradient-to-l from-black to-rose-700 cursor-pointer text-white py-2 px-4 rounded-lg hover:scale-110 transition duration-500"
                                   disabled={!selectedFile || isUploading}
                              >
                                   {isUploading
                                        ? "Uploading..."
                                        : isUploaded
                                        ? "Summarize PDF"
                                        : "Upload PDF"}
                              </Button>
                         </form>
                    </div>

                    {/* Right Column - PDF Preview */}
                    <div className="w-1/2 flex items-center justify-center">
                         <div className="w-5/6 h-5/6 max-h-96 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">
                              {/* Preview Header */}
                              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                                   <h3 className="font-medium text-gray-700">
                                        {selectedFile
                                             ? selectedFile.name
                                             : "PDF Preview"}
                                   </h3>
                                   {selectedFile && (
                                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                             {(
                                                  selectedFile.size /
                                                  (1024 * 1024)
                                             ).toFixed(2)}{" "}
                                             MB
                                        </span>
                                   )}
                              </div>

                              {/* Preview Content */}
                              <div className="flex-1 relative">
                                   {pdfUrl ? (
                                        <iframe
                                             src={`${pdfUrl}#toolbar=0`}
                                             className="absolute inset-0 w-full h-full"
                                             title="PDF Preview"
                                        />
                                   ) : (
                                        <div className="flex items-center justify-center h-full">
                                             <div className="text-center p-6">
                                                  <svg
                                                       className="mx-auto h-12 w-12 text-gray-400"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       stroke="currentColor"
                                                       aria-hidden="true"
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                       />
                                                  </svg>
                                                  <p className="mt-2 text-sm text-gray-500">
                                                       Upload a PDF to see
                                                       preview here
                                                  </p>
                                             </div>
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
