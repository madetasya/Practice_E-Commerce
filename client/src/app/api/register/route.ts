import { handlerError } from "@/app/helpers/errorHandler";
import User from "@/models/user";

export async function POST(request: Request) {
  try {
    const { name, username, email, password } = await request.json();
    await User.register({ name, username, email, password });
    // console.log("masuuuk");

    return Response.json(
      {
        message: "Created User Account Successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return handlerError(error);
  }
}
