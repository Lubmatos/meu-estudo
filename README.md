# 📚 Estudo de Caso - Listagem de Alunos (Web + Mobile)

Este projeto é um estudo de caso dividido em duas aplicações:

| Projeto | Tecnologia |
|--------|------------|
| `/web` | React + Vite + Axios + React Router DOM + Vitest |
| `/mobile` | React Native + Expo |

O objetivo é consumir a **API REST de alunos**, exibir lista e detalhes, implementar rotas e testes automatizados.

---

## 🌐 Parte Web (React + Vite)



### ▶ Link do Site 

https://meu-estudo-git-main-luiza-matos-projects.vercel.app/

### 🛠 Tecnologias utilizadas
- React
- Vite
- Axios
- React Router DOM
- Bootstrap
- Vitest + React Testing Library

## ▶ Passos para rodar localmente
```bash
cd web
npm install
npm run dev
```
## 🧪 Instruções para rodar testes com Vitest
```bash
cd web
npm run test
```
Os testes incluem:
- Renderização dos componentes
- Verificação da lista de alunos
- Teste da navegação entre rotas
- Teste de requisições mockadas da API

## 🧭 Explicação das rotas utilizadas:

O projeto utiliza React Router DOM para navegação:

| Rota         | Componente          | Descrição                              |
| ------------ | ------------------- | -------------------------------------- |
| `/`          | `AlunoList.jsx`     | Lista todos os alunos consumindo a API |
| `/aluno/:id` | `AlunoDetalhes.jsx` | Exibe os detalhes do aluno selecionado |
| `*`          | `NotFound.jsx`      | Página para rotas inválidas            |

Fluxo das rotas: 
1- O usuário acessa / → vê a lista de alunos
2 -Ao clicar em “Ver detalhes”, é redirecionado para /aluno/{id}
3- A tela de detalhes faz uma nova requisição API utilizando o id
4 - Caso digite uma rota inválida, cai no NotFound

## 📡 API utilizada

Documentação Swagger:
https://proweb.leoproti.com.br/swagger-ui/index.html

Endpoints importantes:
| Ação                | Método | URL            |
| ------------------- | ------ | -------------- |
| Listar alunos       | GET    | `/alunos`      |
| Buscar aluno por id | GET    | `/alunos/{id}` |

## 📱 Parte Mobile (Expo + React Native)

A aplicação mobile consome a mesma API do professor e possui:
- Tela inicial com lista de alunos
- Tela de detalhes com informações individuais
- Navegação entre telas
- Requisições feitas com Axios

## 🛠 Tecnologias utilizadas 

- Expo
- React Native
- React Navigation
- Axios
- VsCode
- JavaScript

## Executar

Entrar na pasta
```bash 
cd mobile
npm install
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
npm install axios
npx expo start
```

📱 A aplicação pode ser aberta em:

- Expo Go (Android ou iPhone)
- Browser (tecla w)


## 🚀 Deploy Web no Vercel

Criar conta: https://vercel.com

Conectar ao GitHub

Selecionar o repositório meu-estudo-caso

Ao escolher o projeto, marcar a pasta web/

Build Framework: Vite

Variable Build Command: npm run build

Output: dist

Publicar

## 👩‍💻 Autora

Projeto desenvolvido por Luiza como estudo de caso acadêmico.

