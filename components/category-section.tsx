"use client";
import {
  Sun,
  Droplets,
  Sparkles,
  FlaskConical,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample categories for Sinoz products
const categories = [
  {
    id: 1,
    name: "مراقبت پوست",
    englishName: "Skincare",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-purple-100",
  },
  {
    id: 2,
    name: "آرایش",
    englishName: "Makeup",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-pink-100",
  },
  {
    id: 3,
    name: "مراقبت مو",
    englishName: "Hair Care",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-blue-100",
  },
  {
    id: 4,
    name: "عطر",
    englishName: "Fragrance",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-amber-100",
  },
  {
    id: 5,
    name: "مراقبت بدن",
    englishName: "Body Care",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-green-100",
  },
  {
    id: 6,
    name: "ست هدیه",
    englishName: "Gift Sets",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-rose-100",
  },
  {
    id: 7,
    name: "ضد آفتاب",
    englishName: "Suncare",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-yellow-100",
  },
  {
    id: 8,
    name: "محصولات ویژه",
    englishName: "Special",
    image: "/placeholder.svg?height=120&width=120",
    color: "bg-violet-100",
  },
];

const categories1 = [
  {
    id: 1,
    title: "مراقبت صورت",
    description: "کرم‌های آبرسان، مرطوب‌کننده و ترمیم‌کننده",
    icon: Droplets,
    color: "from-sky-400 to-cyan-500",
    bgColor: "bg-sky-50",
    iconColor: "text-sky-600",
    count: "۲۰+ محصول",
  },
  {
    id: 2,
    title: "سرم‌های تخصصی",
    description: "سرم‌های ویتامین C، طلا، ضد لک و آکنه",
    icon: FlaskConical,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
    count: "۱۵+ محصول",
  },
  {
    id: 3,
    title: "محصولات ضد آفتاب",
    description: "کرم ضد آفتاب با SPF بالا برای انواع پوست",
    icon: Sun,
    color: "from-amber-400 to-red-400",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    count: "۱۰+ محصول",
  },
  {
    id: 4,
    title: "روشن‌کننده و ضد لک",
    description: "رفع لک، کک‌ومک و ناهماهنگی رنگ پوست",
    icon: Sparkles,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
    count: "۱۲+ محصول",
  },
  {
    id: 5,
    title: "مراقبت بدن",
    description: "کرم بدن، لوسیون و آبرسان بدن",
    icon: Leaf,
    color: "from-lime-400 to-green-500",
    bgColor: "bg-lime-50",
    iconColor: "text-lime-600",
    count: "۸+ محصول",
  },
  {
    id: 6,
    title: "محافظت و ترمیم پوست",
    description: "کرم‌های بازسازی، ضد جوش، تسکین‌دهنده",
    icon: ShieldCheck,
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    count: "۱۴+ محصول",
  },
];

export default function CategoryScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            دسته‌بندی محصولات
          </h2>

          {/* Navigation arrows - Only visible on desktop */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="rounded-full border-slate-200 hover:bg-slate-100"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">قبلی</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-slate-200 hover:bg-slate-100"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">بعدی</span>
            </Button>
          </div>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollerRef}
          className="flex overflow-x-auto gap-4 pb-6 snap-x scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-none w-36 md:w-44 snap-start"
            >
              <button className="w-full text-center focus:outline-none group">
                <div
                  className={`rounded-2xl ${category.color} p-4 mb-3 aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}
                >
                  <div className="relative w-20 h-20 md:w-24 md:h-24">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>
                </div>
                <h3 className="font-medium text-slate-800 text-base md:text-lg">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-500">{category.englishName}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
