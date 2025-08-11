'use client';

import { Tab, Disclosure } from '@headlessui/react';
import { ChevronRight } from 'lucide-react';

interface ProductDetailsTabsProps {
  description: string;
  shipping: string;
  returns: string;
}

export default function ProductDetailsTabs({ description, shipping, returns }: ProductDetailsTabsProps) {
  return (
    <div>
      {/* Tabs (Desktop) */}
      <div className="hidden md:block">
        <Tab.Group>
          <Tab.List className="flex gap-6 border-b border-[#456882]/30">
            {[
              { id: 'desc', label: 'Description' },
              { id: 'ship', label: 'Shipping Info' },
              { id: 'return', label: 'Return Policy' },
            ].map((t) => (
              <Tab key={t.id} className={({ selected }) => `py-2 -mb-px border-b-2 ${selected ? 'border-[#456882] text-[#456882]' : 'border-transparent text-[#1B3C53] hover:text-[#456882]'}`}>
                {t.label}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            <Tab.Panel>
              <div className="p-4 rounded-md bg-[#F9F3EF] text-[#1B3C53]">{description}</div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-4 rounded-md bg-[#F9F3EF] text-[#1B3C53]">{shipping}</div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="p-4 rounded-md bg-[#F9F3EF] text-[#1B3C53]">{returns}</div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Accordion (Mobile) */}
      <div className="md:hidden space-y-2">
        {['Description', 'Shipping Info', 'Return Policy'].map((title, idx) => (
          <Disclosure key={title}>
            {({ open }) => (
              <div className="border border-[#456882]/20 rounded-md overflow-hidden">
                <Disclosure.Button className="w-full flex justify-between items-center px-4 py-3 text-left text-[#1B3C53]">
                  <span className="font-semibold">{title}</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${open ? 'rotate-90' : ''}`} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4 text-[#1B3C53] bg-[#F9F3EF]">
                  {idx === 0 && description}
                  {idx === 1 && shipping}
                  {idx === 2 && returns}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
