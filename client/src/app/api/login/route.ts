import { handlerError } from "@/app/helpers/errorHandler";
import { signToken } from "@/app/helpers/jwt";
import User from "@/models/user";
import { compare } from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const user = await User.getUserByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const payload = {
      _id: user._id.toString(),
    };

    const accessToken = signToken(payload);
    cookies().set("Authorization", `Bearer ${accessToken}`);

    return Response.json({ accessToken });
  } catch (error) {
    return handlerError(error);
  }
}
