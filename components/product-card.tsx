"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";
import { useCart } from "@/contexts/cart-context";
import { Plus, Check } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const isInCart = items.some((item) => item.product.id === product.id);
  const isOutOfStock = product.stock === 0;

  const handleAddToCart = async () => {
    if (isOutOfStock) return;

    setIsAdding(true);
    addToCart(product);

    // Show feedback for a short time
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg"
          />
          {isOutOfStock && (
            <Badge variant="destructive" className="absolute top-2 left-2">
              اتمام موجودی
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <p className="text-muted-foreground text-sm mb-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            {product.price.toFixed(2)} تومان
          </span>
          <Badge variant="outline">{product.stock} درانبار</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isOutOfStock || isAdding}
          className="w-full"
          variant={isInCart ? "secondary" : "default"}
        >
          {isAdding ? (
            <>
              <Check className="w-4 h-4 ml-2" />
              اضافه شد
            </>
          ) : isInCart ? (
            <>
              <Check className="w-4 h-4 ml-2" />
              موجود در سبد{" "}
            </>
          ) : (
            <>
              <Plus className="w-4 h-4 ml-2" />
              افزودن به سبد خرید
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
