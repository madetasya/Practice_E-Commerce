import { z } from "zod";

export type ProductType = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

// export type UserType = {
//   name: string;
//   username: string;
//   email: string;
//   password: string;
// };

export const UserSchema = z.object({
  name: z.string({ message: "Name is required" }),
  username: z.string({ message: "Username is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});

export type UserType = z.infer<typeof UserSchema>;

export type wishlistType = {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  product: ProductType;
};