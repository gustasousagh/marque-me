import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import HeroImage from "@/public/hero.png";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthModal } from "@/features/auth/components/auth-modal";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetAllOrganizations } from "@/features/api/org/get-all-org";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export function Hero() {
  const route = useRouter();
  const {data} = GetAllOrganizations();
  const orgId = useMemo(() => data?.[0]?._id, [data]);
  useEffect(() => {

    if(orgId){
      route.replace(`/${orgId}/meus-agendamentos`);
    }
  }, [orgId, route]);
  return (
    <>
      <div className="relative flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} className="size-10" alt="Logo" />
            <h4 className="text-3xl font-semibold">
              Marque<span className="text-primary">me</span>
            </h4>
          </Link>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
        <nav className="hidden md:flex md:justify-end md:space-x-4">
          <ThemeToggle />
          <AuthLoading>
            <div className="flex items-center">
              <Loader className="size-7 animate-spin shrink-0" />
            </div>
          </AuthLoading>
          <Authenticated>
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </Authenticated>
          <Unauthenticated>
            <AuthModal />
          </Unauthenticated>
        </nav>
      </div>
      <section className="relative flex items-center justify-center">
        <div className="relative items-center w-full py-12 lg:py-20">
          <div className="text-center">
            <span className="text-sm text-primary font-medium tracking-tight bg-primary/10 px-4 py-2 rounded-full">
              A plataforma definitiva para agendamentos
            </span>
            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-none">
              Gerencie seus agendamentos{" "}
              <span className="block text-primary">
                de forma fácil e rápida!
              </span>
            </h1>
            <p className="max-w-xl mx-auto mt-4 text-base font-light lg:text-lg text-muted-foreground tracking-tighter">
              Simplifique o gerenciamento de seus agendamentos e ofereça aos
              seus clientes uma experiência prática e eficiente.
            </p>
            <div className="flex items-center gap-x-5 w-full justify-center mt-5">
              <AuthLoading>
                <div className="flex items-center">
                  <Loader className="size-7 animate-spin shrink-0" />
                </div>
              </AuthLoading>
              <Authenticated>
                <Button asChild>
                  <Link href="/settings">Meus agendamentos</Link>
                </Button>
                <Button variant="secondary" onClick={() => {}}>
                <Link href="/dashboard">Dashboard</Link>
                </Button>
              </Authenticated>
              <Unauthenticated>
                <AuthModal />
              </Unauthenticated>
            </div>
          </div>
          <div className="relative items-center w-full py-12 mx-auto mt-12">
            <Image
              src={HeroImage}
              alt="Imagem principal"
              priority
              className="relative object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
