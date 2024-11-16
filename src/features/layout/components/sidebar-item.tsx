"use client";

import { useGetOrganizationId } from "@/hooks/use-get-room-id";
import { cn } from "@/lib/utils";
import { Layout, Calendar, Gift, CreditCard, Settings, User, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardItems() {
  const organizationId = useGetOrganizationId();

  const subscriptionRoutes = [
    {
      name: "Meus Agendamentos",
      href: `/${organizationId}/appointments`,
      icon: Layout,
    },
    {
      name: "Gerenciar funcionários",
      href: `/${organizationId}/employees`,
      icon: User,
    },
    {
      name: "Criar serviços",
      href: `/${organizationId}/services`,
      icon: ChevronsUpDown,
    },
    
    {
      name: "Horário de Trabalho",
      href: `/${organizationId}/availability`,
      icon: Calendar,
    },
    {
      name: "Criação de Site",
      href: `/${organizationId}/site-creation`,
      icon: Layout,
    },
    {
      name: "Gerenciar assinatura",
      href: `/${organizationId}/payment`,
      icon: CreditCard,
    },
    {
      name: "Meus clientes",
      href: `/${organizationId}/clients`,
      icon: User,
    },
    {
      name: "Configurações",
      href: `/${organizationId}/settings`,
      icon: Settings,
    },
  ];
  const userRoutes = [
    {
      name: "Meus Agendamentos",
      href: `/user/appointments`,
      icon: Layout,
    },
    {
      name: "Convide e ganhe",
      href: `/user/affiliate`,
      icon: Gift,
    },
    {
      name: "Histórico de pagamentos",
      href: `/user/history-payments`,
      icon: CreditCard,
    },
    {
      name: "Configurações",
      href: `/user/settings`,
      icon: Settings,
    },
  ];
  const pathname = usePathname();
  const isUserPage = pathname?.includes("/user");

  const routes = isUserPage ? userRoutes : subscriptionRoutes;

  return (
    <div className="h-full pt-2 border-r flex flex-col overflow-y-auto bg-muted/40 shadow-sm px-2 font-medium">
      {routes.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={cn(
            pathname === item.href
              ? "bg-muted text-primary"
              : "text-muted-foreground bg-none",
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70"
          )}
        >
          <item.icon className="size-4" />
          {item.name}
        </Link>
      ))}
    </div>
  );
}
