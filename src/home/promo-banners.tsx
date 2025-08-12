import Link from "next/link";

export type HeroAlignment = "center" | "left";
export type HeroVariant = "gradient" | "image";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  alignment?: HeroAlignment;
  variant?: HeroVariant;
  imageUrl?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
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
      ? "bg-gradient-to-r from-[#1B3C53] via-[#2E536D] to-[#456882]"
      : "relative bg-gray-900";

  return (
    <section
      className={`w-full min-h-screen flex ${background} overflow-hidden`}
    >
      {/* Image background with overlay */}
      {variant === "image" && imageUrl && (
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex">
        <div
          className={`flex flex-col ${containerAlignment} justify-center w-full py-20 md:py-28`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
            {title}
            <span className="block mt-3 w-16 h-1 bg-gradient-to-r from-[#F9F3EF] to-[#D2C1B6] rounded-full mx-auto md:mx-0" />
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl text-[#F9F3EF] max-w-2xl opacity-90 leading-relaxed">
              {subtitle}
            </p>
          )}

          <div
            className={`mt-10 ${
              isCentered ? "justify-center" : "justify-start"
            } flex`}
          >
            <Link
              href={typeof ctaHref === "string" && ctaHref ? ctaHref : "/"}
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#456882] to-[#1B3C53] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
