const VALID_USER = "admin";
const VALID_PASS = "123456";

export function isValidCredentials(
  username: string,
  password: string
): boolean {
  return username === VALID_USER && password === VALID_PASS;
}
