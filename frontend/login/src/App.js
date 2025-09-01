import { useState } from "react";
import "./Login.css"; 

export default function Login() {
  const [username, setUsuario] = useState("");
  const [password, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMensagem(`Sucesso no login`);
      } else {
        const errorData = await response.json();
        setMensagem(`Erro no login`);
      }
    } catch (error) {
      setMensagem("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </form>
    </div>
  );
}
