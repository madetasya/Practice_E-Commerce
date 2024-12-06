'use server';
import { sign, verify } from "jsonwebtoken";
import * as jose from "jose";

export const signToken = (payload: { _id: string }) => {
  return sign(payload, process.env.JWT_SECRET as string);
};

export const verifyToken = (token: string) => {
  return verify(token, process.env.JWT_SECRET as string);
};

export const verifyJose = async <T>(token: string) => {
  const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

  const { payload } = await jose.jwtVerify<T>(token, secretKey);
  return payload;
};
