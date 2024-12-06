"use client";
import { deleteWishlist } from "../action";

export default function DeleteWishlist({fetchData, id}: {fetchData: () => void, id: string}) {
  // const [isDeleted, setIsDeleted] = useState(false);

  // const handleRemoveWishlist = async () => {
  //   try {

  //     setIsDeleted(true);
  //   } catch (error) {
  //     console.error("Failed to remove from wishlist", error);
  //   }
  // };

  return (
    <button
      onClick={async () => {
        await deleteWishlist(id);
        fetchData();
      }}
      type="button"
      className="btn btn-circle absolute top-2 right-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // className={`h-6 w-6 ${
        //   isDeleted
        //     ? "fill-gray-500 stroke-gray-500"
        //     : "hover:fill-red-500 hover:stroke-red-500"
        // }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0L12 20.364z"
        />
      </svg>
    </button>
  );
}
