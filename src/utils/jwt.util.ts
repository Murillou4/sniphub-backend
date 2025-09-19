import type { JwtPayload } from "../types/jwt-payload";
import type { SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export function generateToken(
  payload: Omit<JwtPayload, "iat" | "exp">
): string {
  const options: SignOptions = { expiresIn: "1h" };
  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}
