interface CartItem {
  id: string | number;
  image: string;
  title: string;
  subtitle?: string;
  price: number;
  discountedPrice?: number;
  quantity: number;
}

export default function CartItemsList({ items = [] }: { items?: CartItem[] }) {
  // Placeholder for cart items
  return (
    <div className="bg-[--color-cream] rounded-lg p-4 divide-y divide-[--color-warm]">
      {items.map((item, idx) => (
        <div key={item.id || idx} className="flex items-center py-4 gap-4">
          <a href={`/product/${item.id}`} className="block w-16 h-16 rounded overflow-hidden">
            <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
          </a>
          <div className="flex-1">
            <a href={`/product/${item.id}`} className="font-bold text-[--color-primary] hover:underline text-base">
              {item.title}
            </a>
            <div className="text-sm text-gray-500">{item.subtitle}</div>
          </div>
          <div className="flex flex-col items-end min-w-[120px]">
            <div className="font-bold text-lg text-right">
              {item.discountedPrice ? (
                <>
                  <span className="line-through text-gray-400 mr-2">${item.price}</span>
                  <span>${item.discountedPrice}</span>
                </>
              ) : (
                <>${item.price}</>
              )}
            </div>
            <div className="flex items-center mt-2">
              <button className="px-2 py-1 border rounded-l text-[--color-secondary]">-</button>
              <span className="px-3">{item.quantity}</span>
              <button className="px-2 py-1 border rounded-r text-[--color-secondary]">+</button>
            </div>
            <button className="mt-2 text-xs text-[--color-secondary] border border-[--color-secondary] rounded px-2 py-1 hover:bg-[--color-error] hover:text-white">Remove</button>
            <div className="text-right text-sm mt-1">Subtotal: <span className="font-semibold">${item.quantity * (item.discountedPrice || item.price)}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
}
