import Image from "next/image";
import Link from "next/link";
import banner from "../assets/Banner.png";
import AddWishlist from "./AddWishlist";
import { getProducts } from "../action";

export default async function FeaturedProducts() {
  const data = await getProducts();

  return (
    <div className="pt-10">
      <div>
        <div className="flex justify-between items-center mb-6 px-6">
          <h1 className="pt-5 text-4xl font-bold mb-6">Featured Products</h1>
          <Link href="/products">
            <button className="btn btn-outline btn-secondary">SEE ALL</button>
          </Link>
        </div>

        <div
          className="bg-cover bg-center py-8 pb-10"
          style={{
            backgroundImage: `url(${banner.src})`,
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
            {data.slice(0, 5).map((products, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-transform duration-500 hover:scale-105"
              >
                <div className="relative h-[350px]">
                  <AddWishlist id={products._id}/>
                  <Image
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
                    src={products.thumbnail}
                    alt={products.name}
                    width={400}
                    height={400}
                  />
                </div>

                <div className="flex-grow p-4 flex flex-col justify-between">
                  <div>
                    <p className="block text-lg font-bold text-gray-800 dark:text-white">
                      {products.name}
                    </p>
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      {products.price}
                    </span>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <Link href={`/products/${products.slug}`}>
                      <button className="btn btn-outline btn-secondary w-full">
                        See Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
