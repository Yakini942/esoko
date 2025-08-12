'use client';

import Link from 'next/link';

export interface Crumb {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-[#456882]">
        {items.map((c, idx) => (
          <li key={c.href} className="flex items-center gap-1">
            {idx > 0 && <span className="text-[#456882]/60">/</span>}
            {idx === items.length - 1 ? (
              <span className="font-semibold">{c.name}</span>
            ) : (
              <Link className="hover:underline" href={c.href}>
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
