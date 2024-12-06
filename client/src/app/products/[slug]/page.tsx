import { getProductBySlug } from "@/app/action";
import Navbar from "@/app/components/Navbar";
import ProductCarousel from "@/app/components/ProductCarousel";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.thumbnail],
    },
  };
}

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getProductBySlug(params.slug);
  const images = data.images;

  return (
    <div>
      <Navbar />
      <section>
        <div className="mx-10 py-8 sm:py-12 flex flex-wrap gap-8 pt-5">
          <header className="flex-shrink-0">
            <h2 className="text-xl font-bold text-pink-600 sm:text-3xl">
              {data.name}
            </h2>
            <p className="mt-4 max-w-md text-gray-500">{data.description}</p>
            <br />
            <p className="text-lg font-bold text-pink-600">{data.price}</p>
          </header>

          <div className="flex-grow grid grid-flow-col justify-stretch">
            <ProductCarousel images={images} />
          </div>
        </div>
      </section>
    </div>
  );
}
