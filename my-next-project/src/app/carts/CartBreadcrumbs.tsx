import Link from "next/link";

export default function CartBreadcrumbs() {
  return (
    <nav className="mb-6 text-sm text-[--color-secondary]">
      <ol className="flex gap-2">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <span className="mx-1">&gt;</span>
        </li>
        <li className="font-bold text-[--color-secondary]">Cart</li>
      </ol>
    </nav>
  );
}
