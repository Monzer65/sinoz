import BrandValuesSection from "@/components/brand-value";
import CategorySection from "@/components/category-section";
import HeroSection from "@/components/hero";
import NewsletterSection from "@/components/newsletter";
import ProductCard from "@/components/product-card";
import SpecialOffersSection from "@/components/special-offers";
import TestimonialsSection from "@/components/testimonials";
import type { Product } from "@/lib/types";

// Mock products data
const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "High-quality wireless headphones with noise cancellation",
    stock: 15,
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Feature-rich smartwatch with health tracking",
    stock: 8,
  },
  {
    id: "3",
    name: "Laptop Stand",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Ergonomic laptop stand for better posture",
    stock: 25,
  },
  {
    id: "4",
    name: "USB-C Hub",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Multi-port USB-C hub with 4K HDMI output",
    stock: 0,
  },
  {
    id: "5",
    name: "Wireless Mouse",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Precision wireless mouse with long battery life",
    stock: 12,
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "RGB mechanical keyboard with tactile switches",
    stock: 6,
  },
];

export default function Home() {
  return (
    <div>
      {/*<Hero />*/}
      <HeroSection />
      <CategorySection />
      <SpecialOffersSection />
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <BrandValuesSection />
      <TestimonialsSection />

      <NewsletterSection />
    </div>
  );
}
