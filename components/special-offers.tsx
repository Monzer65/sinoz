"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, ShoppingBag, ArrowRight } from "lucide-react";

// Countdown timer hook
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

// Special offers data
const specialOffers = [
  {
    id: 1,
    title: "پیشنهاد ویژه تابستانی",
    description: "۳۰٪ تخفیف روی تمام محصولات آرایش صورت",
    image: "/placeholder.svg?height=300&width=300",
    discount: "۳۰٪",
    oldPrice: "۸۵۰,۰۰۰",
    newPrice: "۵۹۵,۰۰۰",
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    badge: "پرفروش‌ترین",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: 2,
    title: "ست مراقبت پوست",
    description: "خرید ست کامل با ۲۵٪ تخفیف ویژه",
    image: "/placeholder.svg?height=300&width=300",
    discount: "۲۵٪",
    oldPrice: "۱,۲۰۰,۰۰۰",
    newPrice: "۹۰۰,۰۰۰",
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    badge: "محدود",
    color: "from-blue-500 to-violet-600",
  },
];

export default function SpecialOffersSection() {
  // Use the first offer's end date for the main countdown
  const timeLeft = useCountdown(specialOffers[0].endDate);

  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-2">
            پیشنهادات محدود
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            پیشنهادات ویژه سینوز
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            تخفیف‌های استثنایی برای محصولات محبوب ما، فقط برای مدت محدود
          </p>
        </div>

        {/* Countdown timer */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center">
            <p className="text-gray-600 mb-4">
              زمان باقی‌مانده تا پایان پیشنهاد ویژه:
            </p>
            <div className="flex gap-4">
              {[
                { value: timeLeft.days, label: "روز" },
                { value: timeLeft.hours, label: "ساعت" },
                { value: timeLeft.minutes, label: "دقیقه" },
                { value: timeLeft.seconds, label: "ثانیه" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-gradient-to-b from-rose-50 to-rose-100 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-rose-600 shadow-inner">
                    {item.value < 10 ? `0${item.value}` : item.value}
                  </div>
                  <span className="text-xs mt-2 text-gray-500">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image container */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-10`}
                  />
                  <Image
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Discount badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-rose-600">
                      {offer.discount}
                    </span>
                  </div>
                  {/* Special badge */}
                  {offer.badge && (
                    <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {offer.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between w-full md:w-3/5">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl font-bold text-gray-900">
                        {offer.newPrice} تومان
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        {offer.oldPrice} تومان
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>پیشنهاد محدود</span>
                    </div>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <ShoppingBag className="w-4 h-4" />
                      <span>خرید</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-rose-200 hover:-translate-y-1 transition-all duration-300 group">
            <span className="font-medium group-hover:text-rose-600 transition-colors duration-300">
              مشاهده همه پیشنهادات
            </span>
            <ArrowRight className="w-4 h-4 group-hover:text-rose-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
