"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Badge } from "./ui/badge";
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

const navigationItems = [
  { name: "خانه", href: "/" },
  { name: "فروشگاه", href: "/shop" },
  { name: "دسته‌بندی‌ها", href: "/categories" },
  { name: "درباره", href: "/about" },
  { name: "تماس", href: "/contact" },
];

export function Header() {
  const cartItemCount = 3; // This would come from your cart state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className="h-[5.5rem] sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container p-4 flex items-center justify-between mx-auto h-full border-b border-b-gray-400">
        {/* Right Side Actions */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="h-5 w-5 min-[375px]:h-8 min-[375px]:w-8" />
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
                    className="text-lg font-medium transition-colors hover:text-primary py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-4 mt-4">
                  <Link
                    href="/wishlist"
                    className="flex items-center space-x-2 rtl:space-x-reverse text-lg font-medium transition-colors hover:text-primary py-2"
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
              <button>
                <User className="h-5 w-5 min-[375px]:h-8 min-[375px]:w-8" />
                <span className="sr-only">حساب کاربری</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 text-right">
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  پروفایل من
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" className="w-full">
                  سفارشات من
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/wishlist" className="w-full">
                  علاقمندی‌ها
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/settings" className="w-full">
                  تنظیمات
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-right">
                <button className="w-full text-right">خروج</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Shopping Cart */}
          <button className="relative">
            <ShoppingCart className="h-5 w-5 min-[375px]:h-8 min-[375px]:w-8" />
            {cartItemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {cartItemCount}
              </Badge>
            )}
            <span className="sr-only">سبد خرید</span>
          </button>

          {/* Search Button - Mobile */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5 min-[375px]:h-8 min-[375px]:w-8" />
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

        <Link href="/" className="block max-[375px]:hidden">
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
//
// import * as React from "react";
// import Link from "next/link";
// import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
//
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Sheet,
//   SheetContent,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Badge } from "@/components/ui/badge";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Image from "next/image";
//
// const navigationItems = [
//   { name: "خانه", href: "/" },
//   { name: "فروشگاه", href: "/shop" },
//   { name: "دسته‌بندی‌ها", href: "/categories" },
//   { name: "ویژه‌ها", href: "/deals" },
//   { name: "درباره", href: "/about" },
//   { name: "تماس", href: "/contact" },
// ];
//
// export function Header() {
//   const [isSearchOpen, setIsSearchOpen] = React.useState(false);
//   const cartItemCount = 3; // This would come from your cart state
//
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="block">
//               <Image
//                 src="/sinoz-full-logo-446*140.png"
//                 alt="لوگوی سینوز"
//                 width={446}
//                 height={140}
//                 className="h-10 w-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px]"
//                 priority
//               />
//             </Link>
//           </div>
//
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-medium transition-colors hover:text-primary"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//
//           {/* Search Bar - Desktop */}
//           <div className="hidden lg:flex flex-1 max-w-md mx-8">
//             <div className="relative w-full">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 type="search"
//                 placeholder="Search products..."
//                 className="pl-10 pr-4"
//               />
//             </div>
//           </div>
//
//           {/* Right Side Actions */}
//           <div className="flex items-center space-x-2 rtl:space-x-reverse">
//             {/* Search Button - Mobile */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//             >
//               <Search className="h-5 w-5" />
//               <span className="sr-only">جستجو</span>
//             </Button>
//
//             {/* Wishlist */}
//             <Button variant="ghost" size="icon" className="hidden sm:flex">
//               <Heart className="h-5 w-5" />
//               <span className="sr-only">علاقمندی‌ها</span>
//             </Button>
//
//             {/* User Account */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <User className="h-5 w-5" />
//                   <span className="sr-only">حساب کاربری</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56">
//                 <DropdownMenuItem>
//                   <Link href="/profile" className="w-full">
//                     پروفایل من
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/orders" className="w-full">
//                     سفارشات من
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/wishlist" className="w-full">
//                     علاقمندی‌ها
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <Link href="/settings" className="w-full">
//                     تنظیمات
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>خروج</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//
//             {/* Shopping Cart */}
//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingCart className="h-5 w-5" />
//               {cartItemCount > 0 && (
//                 <Badge
//                   variant="destructive"
//                   className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
//                 >
//                   {cartItemCount}
//                 </Badge>
//               )}
//               <span className="sr-only">سبد خرید</span>
//             </Button>
//
//             {/* Mobile Menu */}
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="md:hidden">
//                   <Menu className="h-5 w-5" />
//                   <span className="sr-only">منو</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//                 <SheetTitle className="sr-only"></SheetTitle>
//
//                 <nav className="flex flex-col space-y-4 mt-8">
//                   {navigationItems.map((item) => (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       className="text-lg font-medium transition-colors hover:text-primary py-2"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                   <div className="border-t pt-4 mt-4">
//                     <Link
//                       href="/wishlist"
//                       className="flex items-center space-x-2 rtl:space-x-reverse text-lg font-medium transition-colors hover:text-primary py-2"
//                     >
//                       <Heart className="h-5 w-5" />
//                       <span>علاقمندی‌ها</span>
//                     </Link>
//                   </div>
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//
//         {/* Mobile Search Bar */}
//         {isSearchOpen && (
//           <div className="lg:hidden pb-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 type="search"
//                 placeholder="Search products..."
//                 className="pl-10 pr-4"
//                 autoFocus
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
