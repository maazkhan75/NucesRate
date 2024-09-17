'use client';
import { googleAuthSignIn } from "@/app/actions";


export default function GoogleSignInButton() {
    return(
        <button onClick={async() => {
            await googleAuthSignIn("google");
          }}>Sign In With Google</button>
    );
}