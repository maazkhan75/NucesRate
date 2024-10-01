import GoogleSignInButton from "@/components/ui/google_sign_in";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        
        <GoogleSignInButton />
      </div>
    </form>
  );
}
