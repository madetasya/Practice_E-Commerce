import { UserSchema, UserType } from "@/app/types";
import { db } from "@/db/config";
import { hash } from "bcryptjs";

export default class User {
  static collection = db.collection<UserType>("Users");
  static async getAll() {
    return await this.collection.find().toArray();
  }
  static async getUserByEmail(email: string) {
    const user = await this.collection.findOne({ email });
    return user;
  }

  static async register(newUser: UserType) {
    console.log(newUser);
    UserSchema.parse(newUser);

    const user = await User.getUserByEmail(newUser.email);
    if (user) {
      throw new Error("Email already exists");
    }

    const findUser = await this.collection.findOne({
      $or: [{ email: newUser.email }, { username: newUser.username }],
    });

    if (findUser) {
      throw { message: "Email or username already exists", status: 400 };
    }

    const newData = {
      ...newUser,
      password: await hash(newUser.password, 10),
    };

    return await this.collection.insertOne(newData);
  }
}
