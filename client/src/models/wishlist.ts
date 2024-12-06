import { db } from "@/db/config";

import { ObjectId } from "mongodb";
import { z } from "zod";

export const data = z.object({
  _id: z.instanceof(ObjectId).optional(),
  productId: z.instanceof(ObjectId),
  userId: z.instanceof(ObjectId),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

type wishlistType = z.infer<typeof data>;

class Wishlist {
  static coll = db.collection<wishlistType>("wishlists");
  static async create({
    productId,
    userId,
  }: {
    productId: string;
    userId: string;
  }) {
    const addWishlist = {
      productId: new ObjectId(productId),
      userId: new ObjectId(userId),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return await this.coll.insertOne(addWishlist);
  }
  static async all(id: string) {
    const pipeline = [
      {
        $match: {
          userId: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
    ];
    return await this.coll.aggregate(pipeline).toArray();
  }

  static async delete(id: string) {
    return await this.coll.deleteOne({ _id: new ObjectId(id) });
  }
}

export default Wishlist;
