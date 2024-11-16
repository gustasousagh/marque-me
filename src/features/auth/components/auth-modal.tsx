import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import Logo from "@/public/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { Social } from "./social";

export function AuthModal() {
  const [email, setEmail] = useState("");
 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="gap-x-5 flex">
          <Button variant="secondary">Entrar</Button>
          <Button>Cadastre-se</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[360px] rounded-lg">
        <DialogHeader className="flex-row justify-center items-center gap-x-2">
          <Image src={Logo} className="size-10" alt="Logo" />
        </DialogHeader>
        <DialogDescription>
          <div className="flex flex-col gap-3 mt-5">
            <Social />
            <p className="text-center w-full">Ou</p>
            <form className="space-y-2">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                required
              />
              <Button type="submit" className="w-full" size="lg">
                Entrar
              </Button>
            </form>
          </div>
        </DialogDescription>
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
