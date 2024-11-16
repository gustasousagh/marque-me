"use client";

import * as React from "react";
import { Check, ChevronsUpDown, PlusCircle, Store, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { GetAllOrganizations } from "@/features/api/org/get-all-org";
import { useGetOrganizationId } from "@/hooks/use-get-room-id";

export default function StoreSwitcher({ className }: { className?: string }) {
  const { data: organizations } = GetAllOrganizations();
  const router = useRouter();
  const organizationId = useGetOrganizationId();

  // Inclua "User" como uma opção adicional
  const formattedOrganizations = [
    { label: "Perfil Pessoal", value: "user" }, // Opção para usuário individual
    ...(organizations?.map((org) => ({
      label: org?.name,
      value: org?._id,
    })) || []),
  ];

  const currentOrganization = formattedOrganizations.find(
    (org) => org.value === organizationId
  ) || formattedOrganizations.find((org) => org.value === "user");
  

  const [open, setOpen] = React.useState(false);

  const onOrganizationSelect = (organization: { value?: string }) => {
    setOpen(false);
    router.push(`/${organization.value}/appointments`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select an organization"
          className={cn("w-full py-6 text-sm justify-between", className)}
        >
          {currentOrganization?.value === "user" ? (
            <User className="mr-2 h-4 w-4" />
          ) : (
            <Store className="mr-2 h-4 w-4" />
          )}
          {currentOrganization ? currentOrganization.label : "Selecionar organização"}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No organization found.</CommandEmpty>
            <CommandGroup heading="Organizations">
              {formattedOrganizations.map((organization) => (
                <CommandItem
                  key={organization.value}
                  onSelect={() => onOrganizationSelect(organization)}
                  className="text-sm"
                >
                  {organization.value === "user" ? (
                    <User className="mr-2 h-4 w-4" />
                  ) : (
                    <Store className="mr-2 h-4 w-4" />
                  )}
                  {organization.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentOrganization?.value === organization.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false)
                }}
              >
                <PlusCircle className="mr-2 h-5 w-5" />
                Criar organização
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
