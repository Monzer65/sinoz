"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Heart,
  Home,
  LogOut,
  Mail,
  Search,
  Settings,
  ShoppingBag,
  Store,
  User,
  UserCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import CartIcon from "./cart/cart-icon";
import NavMenuMobile from "./nav-menu-mobile";

export const navigationItems = [
  { label: "خانه", href: "/", icon: Home },
  { label: "محصولات", href: "/products", icon: Store },
  { label: "درباره", href: "/about", icon: BookOpen },
  { label: "تماس", href: "/contact", icon: Mail },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [bgState, setBgState] = useState<"transparent" | "white" | "gray">(
    "transparent",
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById("hero-section");

      if (!heroSection) {
        setBgState("gray"); // fallback if hero not found
        return;
      }

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

      if (scrollY < 120) {
        setBgState("transparent");
      } else if (scrollY < heroBottom) {
        setBgState("white");
      } else {
        setBgState("gray");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = {
    transparent: "bg-transparent text-gray-900 shadow-none",
    white: "bg-white text-gray-900 shadow-sm",
    gray: "bg-gray-100 text-gray-900 shadow-md",
  };

  return (
    <header
      className={`h-[5.5rem] sticky top-0 z-50 w-full px-4 sm:px-8 transition-colors duration-300 ${headerClasses[bgState]}`}
    >
      <div
        className={`flex items-center justify-between h-full border-b transition-colors duration-300 ${bgState === "transparent"
            ? "border-b-transparent"
            : "border-b-gray-200"
          }`}
      >
        {/* Right Side Actions */}
        <div className="flex items-center justify-end gap-4">
          {/* Mobile Menu */}
          <NavMenuMobile />

          {/* User Account */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hover:text-emerald-500 transition">
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
            className="hover:text-emerald-500"
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
              key={item.label}
              href={item.href}
              className="group relative font-medium transition-colors hover:text-emerald-500"
            >
              {item.label}
              <span className="absolute -bottom-0.5 right-0 w-full h-[2px] bg-emerald-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-right" />
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
