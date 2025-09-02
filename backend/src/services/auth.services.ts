import { isValidCredentials } from "../repositories/user.repository";

export function validateLogin(username: string, password: string): boolean {
  return isValidCredentials(username, password);
}
