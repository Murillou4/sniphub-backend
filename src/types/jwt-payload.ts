import type { AuthProvider } from "../enums/auth-provider.enum";

export interface JwtPayload {
  // Claims padrão
  sub: string; // userId
  iat: number;
  exp: number;
  iss: "sniphub-api";
  aud: "sniphub-frontend";

  // Infos úteis
  role: "user" | "admin";
  provider: AuthProvider;
  sessionId: string;
  mfa: boolean;

  // Infos para UX
  name: string;
}
