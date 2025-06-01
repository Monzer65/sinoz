import BrandValuesSection from "@/components/brand-value";
import CategoryScroller from "@/components/category-section";
import HeroSection from "@/components/hero";
import ProductCard from "@/components/product-card";
import type { Product } from "@/lib/types";

import { ArrowLeft } from "lucide-react";

// Mock products data
const products: Product[] = [
  {
    id: "1",
    name: "کرم آبرسان صورت",
    price: 24.99,
    image: "/products/11.webp?height=300&width=300",
    description: "کرم آبرسان عمقی صورت با ویتامین E و اسید هیالورونیک",
    stock: 20,
  },
  {
    id: "2",
    name: "سرم روشن‌کننده",
    price: 34.99,
    image: "/products/12.webp?height=300&width=300",
    description: "سرم غنی‌شده با ویتامین C برای داشتن پوستی درخشان",
    stock: 15,
  },
  {
    id: "3",
    name: "ضدآفتاب SPF 50",
    price: 19.99,
    image: "/products/13.webp?height=300&width=300",
    description: "ضدآفتاب سبک با محافظت در برابر اشعه UVA/UVB",
    stock: 30,
  },
  {
    id: "4",
    name: "بالم لب",
    price: 9.99,
    image: "/products/14.webp?height=300&width=300",
    description: "بالم لب مرطوب‌کننده با کره شیا و آلوئه‌ورا",
    stock: 50,
  },
  {
    id: "5",
    name: "اسکراب لایه‌بردار بدن",
    price: 29.99,
    image: "/products/15.webp?height=300&width=300",
    description: "اسکراب ملایم بدن با عصاره قهوه برای پوستی نرم",
    stock: 18,
  },
  {
    id: "6",
    name: "ژل دور چشم",
    price: 39.99,
    image: "/products/16.webp?height=300&width=300",
    description: "ژل خنک‌کننده دور چشم برای کاهش پف و تیرگی",
    stock: 12,
  },
];

export default function Home() {
  return (
    <div>
      {/*<Hero />*/}
      <HeroSection />
      <CategoryScroller />
      <section className="px-4 sm:px-8 pb-16">
        <h2 className="text-3xl font-bold mb-8">محصولات منتخب</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className="flex items-center gap-2 mx-auto px-6 py-3 mt-8 bg-white border-2 border-gray-200 rounded-full hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 group">
          <span className="font-medium group-hover:text-rose-600 transition-colors duration-300">
            مشاهده همه محصولات
          </span>
          <ArrowLeft className="w-4 h-4 group-hover:text-rose-600 transition-colors duration-300" />
        </button>
      </section>
      <BrandValuesSection />
    </div>
  );
}
