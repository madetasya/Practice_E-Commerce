import FeaturedProducts from "./components/FeaturedProducts";
import PromoCarousel from "./components/Promo";

import NavbarHome from "./components/NavbarHome";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <div className="flex-grow pt-4">
      </div>
      <div>
        <main>
          <PromoCarousel />
          <FeaturedProducts />
        </main>
      </div>
    </div>
  );
}
