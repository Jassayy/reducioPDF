import { currentUser } from "@clerk/nextjs/server";
import {
     createUploadthing,
     FileRouter,
     UploadThingError,
} from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
     pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
          .middleware(async ({ req }) => {
               const user = await currentUser();

               if (!user) throw new UploadThingError("Unauthorized");

               return { userId: user.id };
          })
          .onUploadComplete(async ({ metadata, file }) => {
               console.log("Upload completed for userId", metadata.userId);

               // Return only simple JSON-serializable data
               return {
                    userId: metadata.userId,
                    fileUrl: file.url,
                    fileKey: file.key,
                    fileName: file.name,
                    fileSize: file.size,
               };
          }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
