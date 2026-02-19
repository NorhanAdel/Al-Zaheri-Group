export function isAdmin(token: string) {
  return token === process.env.ADMIN_TOKEN;
}
