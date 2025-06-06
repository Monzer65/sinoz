"use client";

import { Button } from "@/components/ui/button";
import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">سبد شما خالی است</h2>
          <p className="text-muted-foreground mb-6">
            شما هنوز چیزی به سبد خرید اضافه نکرده‌اید
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              ادامه خرید
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">سبد خرید</h1>
        <Button variant="outline" onClick={clearCart}>
          تخلیه سبد
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="xl:col-span-1">
          <CartSummary />
        </div>
      </div>

      <div className="mt-8">
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            ادامه خرید
          </Link>
        </Button>
      </div>
    </div>
  );
}
