"use client";

import type React from "react";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your API
      console.log("Subscribing email:", email);
      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-100 rounded-full -ml-36 -mt-36 opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100 rounded-full -mr-48 -mt-48 opacity-30" />

      <div className="max-w-screen-xl mx-auto px-6 relative">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image/Gradient side */}
            <div className="bg-gradient-to-br from-rose-400 to-pink-600 p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mt-16" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full -mr-24 -mb-24" />
                <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white rounded-full" />
              </div>

              <div className="relative">
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
                  به خانواده سینوز بپیوندید
                </h3>

                <p className="text-white text-opacity-90 mb-8 leading-relaxed">
                  با عضویت در خبرنامه ما، از آخرین محصولات، تخفیف‌های ویژه و
                  نکات زیبایی مطلع شوید.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">خبرنامه هفتگی</p>
                    <p className="text-white text-opacity-75 text-sm">
                      نکات زیبایی و پیشنهادات ویژه
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form side */}
            <div className="p-12 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-2">عضویت در خبرنامه</h4>
              <p className="text-gray-600 mb-8">
                با عضویت در خبرنامه، ۱۵٪ تخفیف برای اولین خرید خود دریافت کنید.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ایمیل خود را وارد کنید"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-5 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                    submitted
                      ? "bg-emerald-500 text-white"
                      : "bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:shadow-lg hover:-translate-y-1"
                  }`}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>با موفقیت ثبت شد</span>
                    </>
                  ) : (
                    <>
                      <span>عضویت در خبرنامه</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-gray-500 text-sm mt-6">
                با عضویت در خبرنامه، شما با دریافت ایمیل‌های تبلیغاتی ما موافقت
                می‌کنید. می‌توانید هر زمان که بخواهید از خبرنامه خارج شوید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
