'use client';
import { googleAuthSignIn } from "@/app/actions";


export default function GoogleSignInButton() {
        googleAuthSignIn("google");
}