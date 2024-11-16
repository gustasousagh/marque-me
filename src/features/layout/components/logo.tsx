
import StoreSwitcher from "./store-switcher";
const fakeStores = [
  { id: "store1", name: "Loja Central" },
  { id: "store2", name: "Loja Norte" },
  { id: "store3", name: "Loja Sul" },
  { id: "store4", name: "Loja Leste" },
  { id: "store5", name: "Loja Oeste" },
];
export const SwitcheHeader = () => {
  return (
    <header className="h-[60px] inset-y-0 w-80 z-50">
        <div className="py-4 px-2 md:border-r md:border-b h-full flex items-center bg-muted/40 shadow-sm">
        <StoreSwitcher/>
        </div>
      </header>
  )
}