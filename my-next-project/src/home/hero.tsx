import Link from "next/link";

export type HeroAlignment = "center" | "left";
export type HeroVariant = "gradient" | "image";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  alignment?: HeroAlignment;
  variant?: HeroVariant;
  imageUrl?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  alignment = "center",
  variant = "gradient",
  imageUrl,
}: HeroProps) {
  const isCentered = alignment === "center";

  const containerAlignment = isCentered
    ? "text-center items-center"
    : "text-left items-start";

  const background =
    variant === "gradient"
      ? "bg-gradient-to-br from-[#1B3C53] via-[#2B5673] to-[#456882]"
      : "relative bg-gray-900";

  return (
    <section className={`w-full min-h-screen flex ${background} overflow-hidden relative`}>
      {/* Image background with overlay */}
      {variant === "image" && imageUrl && (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex">
        <div
          className={`flex flex-col ${containerAlignment} justify-center w-full py-20 md:py-28`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          <div
            className={`mt-8 flex gap-4 flex-wrap ${
              isCentered ? "justify-center" : "justify-start"
            }`}
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-200"
            >
              {ctaText}
            </Link>

            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-white/70 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-colors duration-200"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
