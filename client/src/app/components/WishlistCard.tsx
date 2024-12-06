import { wishlistType } from "../types";
import DeleteWishlist from "./RemoveWishlist";
import Image from "next/image";

type Props = {
  item: wishlistType;
  fetchData: () => void;
};

export default function WishlistCard(props: Props) {
  const { item, fetchData } = props;

  return (
    <div className="pt-10 md:mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">My Wishlist</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          <div className="relative flex-1 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="relative">
              <DeleteWishlist fetchData={fetchData} id={item._id} />
              <Image
                className="object-cover w-full h-56"
                src={item.product.thumbnail}
                alt="featured"
                width={400}
                height={400}
              />
            </div>

            <div className="py-5 px-3 text-start">
              <p className="block text-xl font-bold text-gray-800 dark:text-white">
                {item.product.name}
              </p>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {item.product.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
