import Link from "next/link";

export function TopBar() {
  return (
    <div className="border-b bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between text-sm">
          <p className="text-rose-800">
            ارسال رایگان برای خرید بالای ۱ میلیون تومان
          </p>
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse text-rose-700">
            <Link
              href="/track-order"
              className="hover:text-rose-900 transition-colors"
            >
              پیگیری سفارش{" "}
            </Link>
            <Link
              href="/help"
              className="hover:text-rose-900 transition-colors"
            >
              راهنمایی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
