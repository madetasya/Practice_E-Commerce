// models/products.ts

import { ProductType } from "@/app/types";
import { db } from "@/db/config";

export default class Product {
  static collection = db.collection<ProductType>("products");

  static async getAll() {
    return await this.collection.find().toArray();
  }

  static async getBySlug(slug: string) {
    return await this.collection.findOne({ slug });
  }

  static async searchByName(query: string) {
    return await this.collection
      .find({ name: { $regex: query, $options: "i" } })
  }
}
