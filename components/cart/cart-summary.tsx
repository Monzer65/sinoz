"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/cart-context";

export default function CartSummary() {
  const { total, itemCount } = useCart();

  const shipping = total > 50 ? 0 : 9.99;
  const tax = total * 0.08;
  const finalTotal = total + shipping + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>خلاصه سفارش</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>جمع جزء ({itemCount} آیتم)</span>
          <span>{total.toFixed(2)} تومان</span>
        </div>

        <div className="flex justify-between">
          <span>ارسال</span>
          <span>
            {shipping === 0 ? "رایگان" : `${shipping.toFixed(2)} تومان`}
          </span>
        </div>

        <div className="flex justify-between">
          <span>مالیات</span>
          <span>{tax.toFixed(2)} تومان</span>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold text-lg">
          <span>مجموع</span>
          <span>{finalTotal.toFixed(2)} تومان</span>
        </div>

        {total < 50 && (
          <p className="text-sm text-muted-foreground">
            بعلاوه {(50 - total).toFixed(2)} تومان برای ارسال!
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" disabled={itemCount === 0}>
          ادامه پرداخت
        </Button>
      </CardFooter>
    </Card>
  );
}
