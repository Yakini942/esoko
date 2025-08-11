import Hero from "../home/hero";
import FeaturedProducts, { CategoryItem } from "../home/featured-products";
import Testimonials, { Testimonial } from "../home/testimonials";
import WhyChooseEsoko from "../home/whychooseus";
import PromoBanners from "../home/promo-banners";
import PromoSection, { PromoItem } from "../home/promo-section";

export default function Home() {
  const sampleCategories: CategoryItem[] = [
    { id: "c1", name: "Clothing", imageUrl: "https://images.unsplash.com/photo-1521334726092-b509a19597f5?w=1600&q=80&auto=format&fit=crop", href: "/shop/clothing" },
    { id: "c2", name: "Electronics", imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600&q=80&auto=format&fit=crop", href: "/shop/electronics" },
    { id: "c3", name: "Home & Garden", imageUrl: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1600&q=80&auto=format&fit=crop", href: "/shop/home-garden" },
    { id: "c4", name: "Sports & Outdoors", imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80&auto=format&fit=crop", href: "/shop/sports" },
  ];

  const testimonials: Testimonial[] = [
    { id: "t1", name: "Aisha K.", photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&q=80&auto=format&fit=crop", text: "Great quality and fast shipping. I love shopping here!", rating: 5 },
    { id: "t2", name: "Daniel M.", photoUrl: "https://images.unsplash.com/photo-1502767089025-6572583495b0?w=256&q=80&auto=format&fit=crop", text: "Wholesale team was super helpful and pricing is fair.", rating: 5 },
    { id: "t3", name: "Grace N.", photoUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=256&q=80&auto=format&fit=crop", text: "Products are exactly as described. Highly recommend.", rating: 4 }
  ];

  const promos: PromoItem[] = [
    { id: "p1", title: "Summer Sale", subtitle: "Up to 50% off select items", ctaText: "Shop Sale", ctaHref: "/shop/sale", imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80&auto=format&fit=crop" },
    { id: "p2", title: "Free Shipping", subtitle: "On orders over $50", ctaText: "Learn More", ctaHref: "/shipping", imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&q=80&auto=format&fit=crop" },
    { id: "p3", title: "Wholesale Program", subtitle: "Exclusive pricing for businesses", ctaText: "Apply Now", ctaHref: "/wholesale", imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80&auto=format&fit=crop" },
    { id: "p4", title: "Gift Cards", subtitle: "Perfect for any occasion", ctaText: "Buy Gift Card", ctaHref: "/gift-cards", imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero */}
      <Hero
        title="Quality Products for Retail and Wholesale"
        subtitle="Trusted by customers and businesses alike. Explore new arrivals and bestsellers."
        ctaText="Shop Now"
        ctaHref="/shop"
        alignment="center"
        variant="gradient"
      />

      {/* Promo Section */}
      <PromoSection promos={promos} heading="Promotions" background="beige" />

      {/* Featured Categories */}
      <FeaturedProducts categories={sampleCategories} title="Featured Categories" />

      {/* Why Choose Esoko */}
      <WhyChooseEsoko />

      {/* Customer Testimonials */}
      <Testimonials testimonials={testimonials} />
    </div>
  );
}
