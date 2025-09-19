/**
 * Representa os diferentes provedores de autenticação disponíveis em uma aplicação.
 * O uso de um enum com valores de string garante que o código seja claro,
 * consistente e menos propenso a erros de digitação.
 */
export enum AuthProvider {
  LOCAL = "local",
  GOOGLE = "google",
  FACEBOOK = "facebook",
  GITHUB = "github",
}
