import {
  Sun,
  Droplets,
  Sparkles,
  FlaskConical,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const categories = [
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

export default function CategorySection() {
  return (
    <section className="max-w-screen-xl mx-auto p-6 py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          خرید بر اساس دسته‌بندی
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          از مجموعه کامل محصولات آرایشی و بهداشتی سینوز، دسته مورد علاقه‌تان را
          انتخاب کنید
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative p-4 sm:p-5 md:p-6">
                <div
                  className={`${category.bgColor} w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500`}
                >
                  <IconComponent
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${category.iconColor}`}
                  />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-normal">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between pt-3">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                    <div className="flex items-center text-blue-500 text-xs sm:text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
                      مشاهده همه
                      <svg
                        className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="text-center mt-10 sm:mt-12">
        <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          مشاهده تمام محصولات
        </button>
      </div>
    </section>
  );
}
