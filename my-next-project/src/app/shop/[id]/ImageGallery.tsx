'use client';

import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => setSelectedIndex((i) => (i + 1) % images.length);
  const prevImage = () => setSelectedIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section>
      <div className="bg-[#F9F3EF] rounded-lg p-4">
        <div className="relative group overflow-hidden rounded-md">
          <img
            src={images[selectedIndex]}
            alt={title}
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          />
          <button
            onClick={prevImage}
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/80 text-[#1B3C53] hover:text-[#456882]"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextImage}
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/80 text-[#1B3C53] hover:text-[#456882]"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              className={`aspect-square rounded-md overflow-hidden border ${
                i === selectedIndex ? 'border-[#456882]' : 'border-transparent'
              }`}
              onClick={() => setSelectedIndex(i)}
              aria-label={`Select image ${i + 1}`}
            >
              <img src={src} alt="Thumbnail" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Transition show={lightboxOpen} as={Fragment}>
        <Dialog onClose={setLightboxOpen} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-out duration-200"
                enterFrom="scale-95"
                enterTo="scale-100"
                leave="transform transition ease-in duration-150"
                leaveFrom="scale-100"
                leaveTo="scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-4xl">
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="absolute -top-10 right-0 p-2 text-white/90 hover:text-white"
                    aria-label="Close"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  <div className="relative bg-[#F9F3EF] rounded-md overflow-hidden">
                    <img
                      src={images[selectedIndex]}
                      alt="Zoomed"
                      className="w-full h-auto object-contain"
                    />
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/80 text-[#1B3C53] hover:text-[#456882]"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md bg-white/80 text-[#1B3C53] hover:text-[#456882]"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
