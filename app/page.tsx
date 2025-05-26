import { Header } from "@/components/header";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Demo Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Welcome to ShopHub</h1>
          <p className="text-xl text-muted-foreground">
            Your one-stop destination for amazing products
          </p>

          {/* Demo sections to show scrolling behavior */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-64 bg-muted rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground">Product {i + 1}</span>
              </div>
            ))}
          </div>

          {/* More content to demonstrate sticky header */}
          <div className="mt-16 space-y-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-muted/50 rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground">
                  Content Section {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
