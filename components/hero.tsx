import Image from "next/image";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-screen-xl mx-auto p-6 bg-gradient-to-b from-rose-50 to-white">
      <div className="flex flex-col lg:flex-row items-center gap-8 py-10">
        {/* Text Area */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="relative">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-2 hover:scale-105 transition-transform duration-300">
              کالکشن جدید
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              آرایشی و بهداشتی سینوز
            </h1>
            <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary-200 opacity-30 blur-lg" />
          </div>

          <p className="text-lg text-gray-600 max-w-lg">
            با لوازم آرایشی ممتاز و مواد طبیعی سینوز، به زیبایی خود اهمیت بده و
            همزمان از محیط زیست محافظت کن.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-primary-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              برو به فروشگاه{" "}
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 rounded-full font-semibold hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 group">
              <span className="group-hover:text-primary-500 transition-colors duration-300">
                مشاهده کالکشن
              </span>
            </button>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              {[1, 2, 3].map((i) => (
                <Image
                  key={i}
                  src={`/user-${i}.png`}
                  alt="مشتری"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-primary-600">
                +2k
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <strong className="block text-base">۴.۹/۵</strong>
              <div className="flex text-amber-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <Star className="w-4 h-4 fill-current opacity-70" />
              </div>
              <span>از ۲۰۰۰+ نظر</span>
            </div>
          </div>
        </div>

        {/* Image Area */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/collection.png"
              alt="کالکشن آرایشی"
              width={768}
              height={512}
              className="w-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 right-6 left-6 flex justify-between items-end">
              <div className="text-white">
                <h3 className="text-2xl font-bold">کالکشن تابستانه</h3>
                <p className="opacity-80">فرمول‌های تازه برای درخشش پوستت</p>
              </div>
              <div className="bg-white p-3 rounded-full shadow-lg hover:bg-primary-50 hover:rotate-12 transition-all duration-300 cursor-pointer">
                ❤️
              </div>
            </div>
          </div>

          {/* Floating tags */}
          <div className="absolute -top-4 -right-4 md:-top-10 md:-right-16 bg-white p-4 rounded-xl shadow-lg hover:rotate-3 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-primary-100 p-2 rounded-lg">🚚</div>
              <div>
                <p className="font-medium">ارسال رایگان</p>
                <p className="text-sm text-gray-500">
                  برای سفارش‌های بالای ۵۰۰ هزار
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 md:bottom-[10rem] md:-left-8 bg-white p-4 rounded-xl shadow-lg hover:rotate-3 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 p-2 rounded-lg">🌿</div>
              <div>
                <p className="font-medium">مواد طبیعی</p>
                <p className="text-sm text-gray-500">بدون تست حیوانی</p>
              </div>
            </div>
          </div>

          <div className="absolute -top-12 right-1/4 w-20 h-20 rounded-full bg-rose-200 opacity-50 blur-md" />
          <div className="absolute top-1/3 left-8 w-16 h-16 rounded-full bg-primary-200 opacity-50 blur-md" />
          <div className="absolute -bottom-8 left-1/3 w-24 h-24 rounded-full bg-amber-100 opacity-50 blur-md" />
        </div>
      </div>
    </section>
  );
}

// "use client";
//
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Sparkles, Star } from "lucide-react";
// import Image from "next/image";
//
// export default function Hero() {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-3xl opacity-60 animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-2xl opacity-50 animate-pulse delay-1000"></div>
//         <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-rose-200 to-orange-200 rounded-full blur-3xl opacity-40 animate-pulse delay-2000"></div>
//       </div>
//
//       {/* Floating sparkles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <Sparkles className="absolute top-1/4 left-1/3 w-6 h-6 text-pink-300 animate-bounce delay-300" />
//         <Sparkles className="absolute top-1/3 right-1/4 w-4 h-4 text-purple-300 animate-bounce delay-700" />
//         <Sparkles className="absolute bottom-1/3 left-1/5 w-5 h-5 text-rose-300 animate-bounce delay-1000" />
//         <Star className="absolute top-1/2 right-1/3 w-4 h-4 text-pink-400 animate-pulse delay-500" />
//         <Star className="absolute bottom-1/4 right-1/5 w-3 h-3 text-purple-400 animate-pulse delay-1200" />
//       </div>
//
//       <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
//           {/* Left content */}
//           <div className="space-y-8 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-purple-700 border border-purple-200">
//               <Sparkles className="w-4 h-4" />
//               New Collection Available
//             </div>
//
//             <div className="space-y-6">
//               <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
//                 Unleash Your
//                 <span className="block">Inner Glow</span>
//               </h1>
//
//               <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
//                 Discover premium cosmetics that enhance your natural beauty.
//                 From bold lipsticks to radiant foundations, find your perfect
//                 match.
//               </p>
//             </div>
//
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
//               >
//                 Shop Collection
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg rounded-full transition-all duration-300"
//               >
//                 Watch Tutorial
//               </Button>
//             </div>
//
//             {/* Stats */}
//             <div className="flex justify-center lg:justify-start gap-8 pt-8">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-purple-600">50K+</div>
//                 <div className="text-sm text-gray-500">Happy Customers</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-pink-600">200+</div>
//                 <div className="text-sm text-gray-500">Premium Products</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-rose-600">4.9★</div>
//                 <div className="text-sm text-gray-500">Customer Rating</div>
//               </div>
//             </div>
//           </div>
//
//           {/* Right content - Product showcase */}
//           <div className="relative">
//             {/* Main product image */}
//             <div className="relative z-20 mx-auto w-80 h-80 lg:w-96 lg:h-96">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
//               <Image
//                 src="/placeholder.svg?height=400&width=400"
//                 alt="Premium Cosmetics Collection"
//                 width={400}
//                 height={400}
//                 className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
//               />
//             </div>
//
//             {/* Floating product cards */}
//             <div className="absolute top-0 left-0 z-30 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-float">
//               <Image
//                 src="/placeholder.svg?height=80&width=80"
//                 alt="Lipstick"
//                 width={80}
//                 height={80}
//                 className="w-16 h-16 object-cover rounded-xl mb-2"
//               />
//               <div className="text-sm font-semibold text-gray-800">
//                 Rouge Velvet
//               </div>
//               <div className="text-xs text-gray-500">$24.99</div>
//             </div>
//
//             <div className="absolute top-20 right-0 z-30 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-float delay-500">
//               <Image
//                 src="/placeholder.svg?height=80&width=80"
//                 alt="Foundation"
//                 width={80}
//                 height={80}
//                 className="w-16 h-16 object-cover rounded-xl mb-2"
//               />
//               <div className="text-sm font-semibold text-gray-800">
//                 Glow Foundation
//               </div>
//               <div className="text-xs text-gray-500">$39.99</div>
//             </div>
//
//             <div className="absolute bottom-10 left-10 z-30 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-float delay-1000">
//               <Image
//                 src="/placeholder.svg?height=80&width=80"
//                 alt="Eyeshadow Palette"
//                 width={80}
//                 height={80}
//                 className="w-16 h-16 object-cover rounded-xl mb-2"
//               />
//               <div className="text-sm font-semibold text-gray-800">
//                 Sunset Palette
//               </div>
//               <div className="text-xs text-gray-500">$49.99</div>
//             </div>
//
//             <div className="absolute bottom-0 right-10 z-30 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 animate-float delay-700">
//               <Image
//                 src="/placeholder.svg?height=80&width=80"
//                 alt="Mascara"
//                 width={80}
//                 height={80}
//                 className="w-16 h-16 object-cover rounded-xl mb-2"
//               />
//               <div className="text-sm font-semibold text-gray-800">
//                 Volume Max
//               </div>
//               <div className="text-xs text-gray-500">$19.99</div>
//             </div>
//
//             {/* Decorative circles */}
//             <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-pink-200 rounded-full opacity-60"></div>
//             <div className="absolute -bottom-10 -left-10 w-24 h-24 border-2 border-purple-200 rounded-full opacity-60"></div>
//           </div>
//         </div>
//       </div>
//
//       {/* Bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
//           <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
//         </svg>
//       </div>
//
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }
