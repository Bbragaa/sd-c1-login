<!-- Esse é o README, que é basicamente uma parte da documentação para fazer uma introdução geral do projeto e explicar como alguém pode contribuir, assim como outros tipos de informações sobre os devs e detalhes do software. Os comentários separam o documento em partes -->

<!-- Voltar para o topo -->

<a id="readme-top"></a>

<!-- Shields do Projeto -->

<div align="center">

[![Contribuidores][contributors-shield]][contributors-url] &nbsp;&nbsp;
[![Forks][forks-shield]][forks-url] &nbsp;&nbsp;
[![Stars][stars-shield]][stars-url] &nbsp;&nbsp;
[![Issues][issues-shield]][issues-url] &nbsp;&nbsp;
[![Licença][license-shield]][license-url]

</div>

<!-- Logo e título -->
<br />
<div align="center">
  <a href="https://github.com/Bbragaa/sd-c1-login.git">
    <img src="backend/documents/images/gatinho.jpg" alt="Gatinho" width="400" height="380">

  </a>

  <h3 align="center">Sistema de Login</h3>

  <p align="center">
    Projeto em dupla para a disciplina de Sistemas Distribuídos – Ciclo 01.
    <br />
    <a href="#sobre-o-projeto"><strong>Explorar a documentação »</strong></a>
    <br />
    <br />
    <a href="#uso">Exemplos de uso</a>
    ·
    <a href="https://github.com/Bbragaa/sd-c1-login/issues/new?labels=bug&template=bug_report.md">Reportar bug</a>
    ·
    <a href="https://github.com/Bbragaa/sd-c1-login/issues/new?labels=enhancement&template=feature_request.md">Sugerir feature</a>
  </p>
</div>

<!-- Sumário -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#tecnologias-usadas">Tecnologias usadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#roteiro">Roteiro</a></li>
    <li><a href="#contribuição">Contribuição</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>

<!-- Conteúdo geral (já separado por títulos) -->

## Sobre o Projeto

<br/>
<p align="center">
  <img src="documents/images/product_image_not_found.webp" alt="Screenshot do Produto" width="400" height = "400">
</p>
<br/>

Este projeto implementa um **Login App** simples para o **Trabalho Prático – Ciclo 01**, com **frontend** e **backend** para consolidar conceitos de cliente-servidor e comunicação HTTP. O backend expõe um endpoint `POST /login` que valida credenciais **estáticas** (sem banco de dados) e responde com os **status codes** exigidos (200/401/400). O frontend (feito pelo Eduardo) envia a requisição e exibe mensagens de sucesso/erro conforme a resposta do servidor. Os testes da API podem ser feitos via **Insomnia**.

**Principais objetivos:**

- Tela de login com campos **username** e **password** (input type `password`).
- Botão **Entrar** que dispara `POST /login` com **JSON** `{ username, password }`.
- Backend em **Express** validando credenciais estáticas (`admin` / `123456`).
- Retornar:
  - **200 (OK)** para credenciais corretas;
  - **401 (Unauthorized)** para credenciais inválidas;
  - **400 (Bad Request)** para payload incorreto (tipos/campos ausentes).
- **Sem banco de dados** (valores em variáveis).
- **README** claro para que o professor rode apenas seguindo as instruções.

### Tecnologias usadas

- **Backend:** Node.js, Express, TypeScript
- **Ferramentas de Dev:** ts-node-dev, npm
- **Testes de API:** Insomnia
- **Controle de versão:** Git/GitHub
- **Frontend:** HTML, CSS, JavaScript (consumindo `POST /login`)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Começando

Este guia explica como configurar e executar o projeto localmente.

### Pré-requisitos

- **Node.js 18+**
- **npm 9+**

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Bbragaa/sd-c1-login.git
   cd sd-c1-login
   ```

2. Instale as dependências do backend:

   ```bash
   cd backend
   npm install
   ```

3. Execute o servidor:

   Desenvolvimento (recarrega automaticamente):

   ```bash
   npm run dev
   ```

   Build e execução em produção:

   ```bash
   npm run build
   npm start
   ```

   O backend estará disponível em:

   ```bash
   http://localhost:3333
   ```

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Uso

Exemplo de fluxo:

1. Usuário acessa o frontend e insere **username** e **password**.
2. O frontend envia uma requisição `POST /login` em JSON para o backend.
3. O backend valida as credenciais estáticas e retorna a resposta adequada.
4. O frontend exibe a mensagem de sucesso ou erro conforme o status recebido.

### Endpoints úteis:

- **GET /health**

  - Retorna `200 OK` com:
    ```json
    { "ok": true }
    ```

- **POST /login**
  - Body esperado:
    ```json
    { "username": "admin", "password": "123456" }
    ```
  - Respostas:
    - ✅ **200 OK** → `{ "message": "Login feito com sucesso! Redirecionando..." }`
    - ❌ **401 Unauthorized** → `{ "error": "Credenciais inválidas" }`
    - ❌ **400 Bad Request** → `{ "error": "Payload inválido. O esperado é JSON: { username: string, password: string }" }`

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Roteiro

- [x] Estrutura inicial do repositório (backend + frontend placeholder)
- [x] Configuração do backend com Express + TypeScript
- [x] Implementação do endpoint `/health`
- [x] Implementação do endpoint `/login` com retornos 200/401/400
- [ ] Desenvolvimento da tela de login no frontend
- [ ] Integração frontend ↔ backend
- [ ] Testes finais e ajustes para apresentação

Consulte as issues abertas para ver o progresso e sugerir melhorias:  
https://github.com/Bbragaa/sd-c1-login/issues

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contribuição

Contribuições são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch de feature (`git checkout -b feat/minha-feature`)
3. Commit das mudanças (`git commit -m 'feat: adiciona minha feature'`)
4. Push da branch (`git push origin feat/minha-feature`)
5. Abra um Pull Request

Diretrizes resumidas:

- Padrões de commit: `feat:`, `fix:`, `docs:`, `test:`, `chore:`, `refactor:`
- Atualize a documentação quando alterar comportamento

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Licença

Distribuído sob a licença MIT ou de uso interno.

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contato

- Artur Braga — arturhenriquefc@gmail.com - https://www.linkedin.com/in/artur-braga-103860323
- Eduardo Brasil - edbrasil081@gmail.com - https://www.linkedin.com/in/eduardo-brasil-666670255/

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Agradecimentos

- Choose a License — https://choosealicense.com
- Shields.io — https://shields.io
- Markdown Guide — https://www.markdownguide.org
- LM Studio — https://lmstudio.ai

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

<!-- Referências para links e imagens -->

[contributors-shield]: https://img.shields.io/github/contributors/Bbragaa/sd-c1-login.svg?style=for-the-badge
[contributors-url]: https://github.com/Bbragaa/sd-c1-login/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Bbragaa/sd-c1-login.svg?style=for-the-badge
[forks-url]: https://github.com/Bbragaa/sd-c1-login/network/members
[stars-shield]: https://img.shields.io/github/stars/Bbragaa/sd-c1-login.svg?style=for-the-badge
[stars-url]: https://github.com/Bbragaa/sd-c1-login/stargazers
[issues-shield]: https://img.shields.io/github/issues/Bbragaa/sd-c1-login.svg?style=for-the-badge
[issues-url]: https://github.com/Bbragaa/sd-c1-login/issues
[license-shield]: https://img.shields.io/github/license/Bbragaa/sd-c1-login.svg?style=for-the-badge
[license-url]: https://github.com/Bbragaa/sd-c1-login/blob/main/LICENSE
