import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" })); // frontend on another port
app.use(express.json()); // parse JSON bodies

// Credenciais estáticas para demonstração
const VALID_USER = "admin";
const VALID_PASS = "123456";

// Tipo para o corpo da requisição de login
type LoginBody = {
  username: string;
  password: string;
};

// Teste de saúde simples
app.get("/health", (_req: Request, res: Response) => {
  return res.status(200).json({ ok: true });
});

// POST /login — typed body + runtime validation
app.post("/login", (req: Request<{}, any, LoginBody>, res: Response) => {
  const { username, password } = req.body ?? {};

  // Erro se o tipo estiver errado
  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({
      error:
        'Payload inválido. O esperado é JSON: { "username": "string", "password": "string" }',
    });
  }

  // Verificação de credenciais
  if (username === VALID_USER && password === VALID_PASS) {
    return res
      .status(200)
      .json({ message: "Login feito com sucesso! Redirecionando..." });
  }

  // Credenciais inválidas
  return res.status(401).json({ error: "Credenciais inválidas" });
});

const PORT = Number(process.env.PORT) || 3333;
app.listen(PORT, () => {
  console.log(`✅ Backend (TS) funcionando em http://localhost:${PORT}`);
});
