"use client";
import { addWishlist } from "../action";

export type WishlistProps = {
  id: string;
};

export default function AddWishlist(props: WishlistProps) {
  const { id } = props;
   return (
     <button
       onClick={() => addWishlist(id)}
       className="btn btn-circle absolute top-2 right-2"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className="size-6 hover:stroke-red-600 hover:fill-red-600"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
         />
       </svg>
     </button>
   );
}
