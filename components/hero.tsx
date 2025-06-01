"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full overflow-hidden text-gray-800"
      style={{
        background: "linear-gradient(35deg, #fff 0%, #C7B6A9 100%)",
      }}
    >
      {/* MOBILE */}
      <div className="block md:hidden px-4 sm:px-8 pt-[5.5rem] pb-4 min-h-[calc(100vh-5.5rem)] flex flex-col justify-center items-center text-center space-y-4">
        <div className="relative rounded-lg">
          <Image
            src="/banner2.jpg"
            alt="محصولات سینوز"
            width={800}
            height={418}
            className="object-conver"
            priority
          />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold">زیبایی طبیعی با سینوز</h1>
        <p className="text-sm text-gray-600 max-w-xs">
          مراقبت پوست و آرایش، با ترکیب علم و طبیعت برای درخشندگی واقعی.
        </p>
        <Button className="w-full max-w-xs bg-[#B67866] hover:bg-[#CB9281]">
          خرید کنید
        </Button>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-2 items-center min-h-[calc(100vh-5.5rem)] px-12 py-[5.5rem]">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            زیبایی طبیعی با سینوز
          </h1>
          <p className="text-lg max-w-md text-gray-600">
            مجموعه‌ای منتخب از محصولات مراقبت از پوست و لوازم آرایشی برای زیبایی
            ماندگار شما.
          </p>
          <Button
            size="lg"
            className="bg-[#B67866] hover:bg-[#CB9281] bg-[#B67866]"
          >
            خرید کنید
          </Button>
        </div>
        <div className="relative w-full h-80">
          <Image
            src="/collectionNoBg.png"
            alt="محصولات سینوز"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
