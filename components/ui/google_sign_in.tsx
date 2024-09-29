'use client';
import { googleAuthSignIn } from "@/app/actions";
import { Button } from "./button";
import { FaGoogle } from "react-icons/fa";

export default function GoogleSignInButton() {
    return(
        <Button size="sm" variant={"default"} 
            onClick={async() => {
                await googleAuthSignIn("google");
            }}
        >
            Sign in <FaGoogle style={{marginLeft:'0.5rem'}} />
        </Button>
    );
}