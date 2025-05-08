import { ChefHat } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-center gap-4 bg-white p-4 shadow-md/20">
      <ChefHat size={40} color="black" />
      <h1 className="text-3xl">Chef Ai</h1>
    </header>
  );
}
