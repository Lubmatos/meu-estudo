# 📚 Estudo de Caso - Listagem de Alunos (Web + Mobile)

Este projeto é um estudo de caso dividido em duas aplicações:

| Projeto | Tecnologia |
|--------|------------|
| `/web` | React + Vite + Axios + React Router DOM + Vitest |
| `/mobile` | React Native + Expo |

O objetivo é consumir a **API REST de alunos**, exibir lista e detalhes, implementar rotas e testes automatizados.

---

## 🌐 Parte Web (React + Vite)

### 🛠 Tecnologias utilizadas
- React
- Vite
- Axios
- React Router DOM
- Bootstrap
- Vitest + React Testing Library

### ▶ Link do Site 

https://meu-estudo-git-main-luiza-matos-projects.vercel.app/


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

