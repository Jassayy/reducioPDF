import { GridBackgroundDemo } from "@/components/background/background";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
     return (
          <div className="relative min-h-screen">
               <GridBackgroundDemo />
               <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-md p-4">
                         <SignUp />
                    </div>
               </div>
          </div>
     );
}
