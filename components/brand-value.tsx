import { Leaf, Heart, Shield, Award, Droplet, Sparkles } from "lucide-react";

const values = [
  {
    id: 1,
    title: "مواد طبیعی",
    description: "استفاده از مواد اولیه طبیعی و ارگانیک برای سلامت پوست شما",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    id: 2,
    title: "بدون تست روی حیوانات",
    description: "ما متعهد به تولید محصولات بدون آزمایش روی حیوانات هستیم",
    icon: Heart,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
  {
    id: 3,
    title: "ضمانت کیفیت",
    description: "تمام محصولات ما دارای ضمانت کیفیت و اصالت هستند",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 4,
    title: "برنده جوایز متعدد",
    description:
      "افتخار به دریافت جوایز متعدد در زمینه محصولات آرایشی و بهداشتی",
    icon: Award,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    id: 5,
    title: "فرمولاسیون پیشرفته",
    description: "استفاده از فناوری‌های نوین در تولید محصولات با کیفیت برتر",
    icon: Droplet,
    color: "text-violet-600",
    bgColor: "bg-violet-100",
  },
  {
    id: 6,
    title: "سازگار با محیط زیست",
    description: "بسته‌بندی‌های قابل بازیافت و دوستدار محیط زیست",
    icon: Sparkles,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
];

export default function BrandValuesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100 rounded-full -ml-32 -mt-32 opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full -mr-40 -mb-40 opacity-30" />

      <div className="max-w-screen-xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">
            ارزش‌های ما
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            چرا سینوز را انتخاب کنید؟
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            ما در سینوز متعهد به ارائه محصولات با کیفیت، طبیعی و سازگار با محیط
            زیست هستیم
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
            >
              {/* Icon */}
              <div
                className={`${value.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
              >
                {value.icon && (
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>

              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-full -mt-16 -mr-16 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Brand story */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-100 to-transparent rounded-full -mt-32 -mr-32 opacity-30" />

          <div className="relative">
            <h3 className="text-2xl font-bold mb-4">داستان سینوز</h3>
            <div className="w-20 h-1 bg-blue-500 mb-6 rounded-full" />

            <p className="text-gray-600 mb-4 leading-relaxed">
              سینوز در سال ۱۳۹۵ با هدف تولید محصولات آرایشی و بهداشتی با کیفیت،
              طبیعی و سازگار با محیط زیست تأسیس شد. ما معتقدیم که زیبایی و سلامت
              پوست باید در کنار هم باشند.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              امروز، سینوز به یکی از برندهای پیشرو در صنعت آرایشی و بهداشتی
              تبدیل شده است. ما همچنان به تعهد خود برای تولید محصولات با کیفیت و
              دوستدار محیط زیست پایبند هستیم و افتخار می‌کنیم که بخشی از سفر
              زیبایی شما هستیم.
            </p>

            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              بیشتر درباره ما
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
