import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "سارا محمدی",
    role: "آرایشگر حرفه‌ای",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "محصولات سینوز کیفیت فوق‌العاده‌ای دارند. من از رژ لب‌های مات و کرم پودرهای این برند در کار حرفه‌ای‌ام استفاده می‌کنم و نتایج همیشه عالی بوده.",
    product: "رژ لب مات شماره ۱۲",
  },
  {
    id: 2,
    name: "نیلوفر احمدی",
    role: "اینفلوئنسر زیبایی",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "من عاشق سرم‌های مراقبت پوست سینوز هستم. بعد از یک ماه استفاده، پوستم کاملاً احیا شده و لطافت فوق‌العاده‌ای پیدا کرده. به همه دوستانم پیشنهاد می‌کنم.",
    product: "سرم ویتامین C",
  },
  {
    id: 3,
    name: "مریم کریمی",
    role: "مشتری دائمی",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "من پوست حساسی دارم و همیشه با محصولات آرایشی دچار مشکل می‌شدم، اما محصولات سینوز هیچ حساسیتی برای من ایجاد نکرده‌اند. واقعاً ممنونم که به فکر پوست‌های حساس هم هستید.",
    product: "کرم مرطوب‌کننده هیالورونیک",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            نظرات مشتریان ما
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            ببینید مشتریان ما درباره محصولات آرایشی و بهداشتی سینوز چه می‌گویند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full -mr-16 -mt-16 opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12 opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-rose-200 opacity-50">
                <Quote size={32} />
              </div>

              <div className="relative">
                {/* User info */}
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-rose-200"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
                      <div className="bg-rose-100 text-rose-500 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {testimonial.id}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Product tag */}
                <div className="flex items-center">
                  <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                    محصول: {testimonial.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-blue-500 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 shadow-md">
            مشاهده همه نظرات
          </button>
        </div>
      </div>
    </section>
  );
}
