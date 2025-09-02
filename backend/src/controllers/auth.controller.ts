import { Request, Response } from "express";
import { LoginBody } from "../types/auth";
import { validateLogin } from "../services/auth.services";

export function loginController(
  req: Request<{}, any, LoginBody>,
  res: Response
) {
  const { username, password } = req.body ?? {};

  // 400 se payload inválido
  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({
      error:
        'Payload inválido. Esperado: { "username": "string", "password": "string" }',
    });
  }

  const ok = validateLogin(username, password);

  if (ok) {
    return res
      .status(200)
      .json({ message: "Login feito com sucesso! Redirecionando..." });
  }
  return res.status(401).json({ error: "Credenciais inválidas" });
}
