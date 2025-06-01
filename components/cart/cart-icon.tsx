"use client";

import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";

export default function CartIcon() {
  const { itemCount } = useCart();

  return (
    <button className="relative hover:text-emerald-500">
      <Link href="/cart">
        <ShoppingCart className="h-6 w-6 min-[359px]:h-8 min-[359px]:w-8" />
        {itemCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {itemCount > 99 ? "99+" : itemCount}
          </Badge>
        )}
        <span className="sr-only">Shopping cart</span>
      </Link>
    </button>
  );
}
