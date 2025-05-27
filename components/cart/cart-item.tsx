"use client";

import type React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import type { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/contexts/cart-context";
import { useState } from "react";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > item.product.stock) return;

    setQuantity(newQuantity);
    updateQuantity(item.product.id, newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value) || 1;
    handleQuantityChange(value);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={item.product.image || "/placeholder.svg"}
              alt={item.product.name}
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{item.product.name}</h3>
            <p className="text-sm text-muted-foreground">
              ${item.product.price.toFixed(2)} each
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              className="h-8 w-8"
            >
              <Minus className="h-3 w-3" />
            </Button>

            <Input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              min="1"
              max={item.product.stock}
              className="w-16 text-center h-8"
            />

            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= item.product.stock}
              className="h-8 w-8"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="text-right">
            <p className="font-semibold">
              ${(item.product.price * item.quantity).toFixed(2)}
            </p>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => removeFromCart(item.product.id)}
            className="h-8 w-8 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
