"use server";
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.NEXT_PUBLIC_STREAM_API_SECRET;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User not found");

  if (!apiKey || !apiSecret) {
    throw new Error("Stream API key or secret not found");
  }

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 3600;

  const issued = Math.floor(new Date().getTime() / 1000);

  const token = client.createToken(user.id, exp, issued);

  return token;
};
