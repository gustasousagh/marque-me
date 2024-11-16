"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/features/api/auth/use-current-user";
import Link from "next/link";
import {
  CreditCardIcon,
  Gift,
  LogOut,
  Settings,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const UserButton = () => {
  const { data } = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-9 border-[2px] cursor-pointer">
          <AvatarImage src={data?.image} alt="User Image" />
          <AvatarFallback>{data?.name?.slice(0, 3)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{data?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {data?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/user/affiliate`} className="flex items-center space-x-2">
              <Gift className="w-4 h-4" />
              <span>Convide e ganhe</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={`/user/settings`} className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>
                Configurações
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={`/user/history-payments`} className="flex items-center space-x-2">
              <CreditCardIcon className="w-4 h-4" />
              <span>
                Histórico de pagamentos
              </span>
            </Link>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem asChild>
            <Link href={`/user/logout`} className="flex items-center space-x-2 text-red-500">
              <LogOut className="w-4 h-4" />
              <span>
                Sair
              </span>
            </Link>
            </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
