"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Grip,
  Heart,
  Home,
  LogOut,
  Phone,
  Search,
  Settings,
  ShoppingBag,
  Store,
  User,
  UserCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import CartIcon from "./cart/cart-icon";

const navigationItems = [
  { name: "خانه", href: "/", icon: Home },
  { name: "فروشگاه", href: "/shop", icon: Store },
  { name: "دسته‌بندی‌ها", href: "/categories" },
  { name: "درباره", href: "/about", icon: BookOpen },
  { name: "تماس", href: "/contact", icon: Phone },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="h-[5.5rem] sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-4">
      <div className="container px-4 sm:px-0 flex items-center justify-between mx-auto h-full border-b border-b-gray-400">
        {/* Right Side Actions */}
        <div className="flex items-center gap-4 ">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden hover:text-amber-700">
                <Grip className="h-6 w-6 min-[359px]:h-8 min-[359px]:w-8" />
                <span className="sr-only">منو</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only"></SheetTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-amber-700 py-2"
                  >
                    {item.icon && <item.icon className="w-5 h-5" />}
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-4 mt-4">
                  <Link
                    href="/wishlist"
                    className="flex items-center space-x-2 rtl:space-x-reverse text-lg font-medium transition-colors hover:text-amber-700 py-2"
                  >
                    <Heart className="h-5 w-5" />
                    <span>علاقمندی‌ها</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-amber-700 transition">
                <User className="h-6 w-6 min-[359px]:h-8 min-[359px]:w-8" />
                <span className="sr-only">حساب کاربری</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-64 text-right p-2 rounded-2xl shadow-xl border"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className="flex items-center justify-end gap-3 w-full py-2 text-[18px]"
                >
                  پروفایل من
                  <UserCircle className="h-5 w-5" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/orders"
                  className="flex items-center justify-end gap-3 w-full py-2 text-[18px]"
                >
                  سفارشات من
                  <ShoppingBag className="h-5 w-5" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/wishlist"
                  className="flex items-center justify-end gap-3 w-full py-2 text-[18px]"
                >
                  علاقمندی‌ها
                  <Heart className="h-5 w-5" />
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-2" />

              <DropdownMenuItem asChild>
                <Link
                  href="/settings"
                  className="flex items-center justify-end gap-3 w-full py-2 text-[18px]"
                >
                  تنظیمات
                  <Settings className="h-5 w-5" />
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center justify-end gap-3 w-full py-2 text-[18px] text-red-600 hover:text-red-700">
                خروج
                <LogOut className="h-5 w-5" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Cart */}
          <CartIcon />

          {/* Search Button - Mobile */}
          <button
            className="hover:text-amber-700"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-6 w-6 min-[359px]:h-8 min-[359px]:w-8" />
            <span className="sr-only">جستجو</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium transition-colors hover:text-amber-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link href="/" className="block max-[359px]:hidden">
          <Image
            src="/sinoz-full-logo-446*140.png"
            alt="لوگوی سینوز"
            width={446}
            height={140}
            className="h-10 w-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px]"
            priority
          />
        </Link>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="container mx-auto pb-4">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              dir="rtl"
              type="search"
              placeholder="جستجوی محصول..."
              className="pr-10 pl-4 bg-white"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
