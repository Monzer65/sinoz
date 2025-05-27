import type { CartItem, Product } from "./types";

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}

export function findCartItem(
  items: CartItem[],
  productId: string,
): CartItem | undefined {
  return items.find((item) => item.product.id === productId);
}

export function addToCart(
  items: CartItem[],
  product: Product,
  quantity = 1,
): CartItem[] {
  const existingItem = findCartItem(items, product.id);

  if (existingItem) {
    return items.map((item) =>
      item.product.id === product.id
        ? {
            ...item,
            quantity: Math.min(item.quantity + quantity, product.stock),
          }
        : item,
    );
  }

  return [
    ...items,
    {
      id: crypto.randomUUID(),
      product,
      quantity: Math.min(quantity, product.stock),
    },
  ];
}

export function removeFromCart(
  items: CartItem[],
  productId: string,
): CartItem[] {
  return items.filter((item) => item.product.id !== productId);
}

export function updateCartItemQuantity(
  items: CartItem[],
  productId: string,
  quantity: number,
): CartItem[] {
  if (quantity <= 0) {
    return removeFromCart(items, productId);
  }

  return items.map((item) =>
    item.product.id === productId
      ? { ...item, quantity: Math.min(quantity, item.product.stock) }
      : item,
  );
}
