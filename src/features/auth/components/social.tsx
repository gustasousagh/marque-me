"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

export const Social = () => {
  const [pending, setPending] = useState(false);
  const { signIn } = useAuthActions();
  const handlerProvidedAuth = (value: "github" | "google") => {
    setPending(true);
    signIn(value).finally(async () => {
      setPending(false);
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <Button
        disabled={pending}
        size="lg"
        className="w-full gap-x-2"
        variant="outline"
        onClick={() => {
          handlerProvidedAuth("google");
        }}
      >
        <FcGoogle className="h-5 w-5" />
        Continuar com google
      </Button>
      <Button
        disabled={pending}
        size="lg"
        className="w-full gap-x-2"
        variant="outline"
        onClick={() => 
          handlerProvidedAuth("github")
        }
      >
        <FaGithub className="h-5 w-5" />
        Continuar com gitHub
      </Button>
    </div>
  );
};
