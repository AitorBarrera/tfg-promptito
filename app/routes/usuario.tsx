import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";
import { SignedIn, SignedOut, SignIn, SignUp, UserProfile } from "@clerk/clerk-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Usuario" },
    { name: "description", content: "Usuario!" },
  ];
}
export default function Usuario() {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <LayoutNavbar />
    <div className="flex items-center justify-center flex-grow">
      <SignedOut>
        <SignIn/>
      </SignedOut>
      <SignedIn>
        <UserProfile/>
      </SignedIn>
    </div>
    </main>
  );
}
