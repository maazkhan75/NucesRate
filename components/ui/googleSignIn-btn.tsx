"use client";
import { Button } from "@/components/ui/button";
import { googleAuthSignIn } from "@/app/actions";

export function SigninBtn() {
  return (
    <Button onClick={() => googleAuthSignIn("google")} variant="outline">
      Sign in
    </Button>
  );
}
