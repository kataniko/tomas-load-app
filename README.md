# Country Finder (React)

Este projeto React é uma APP para encontrar informações detalhadas sobre países ao redor do mundo. 
É possivel filtrar por região e fazer pesquisa pelo nome de cada um dos países .

## Funcionalidades

- **Pesquisa:** Encontre rapidamente um país pelo nome na barra de pesquisa.

- **Informações Detalhadas:** Visualize informações essenciais sobre cada país, incluindo:
  - Nome oficial
  - Capital
  - População
  - Região
  - Moedas
  - Borders
  - Bandeira etc..

## Tecnologias Utilizadas

- **React:** 
- **Axios:** HTTP client to fetch data .
- **MaterialUI:** Components from Google
- **Styled-Components:** Styling lib 
- **Framer-motion:**  Animations
- **Spline:**  3D in the background

## How to Run de Project

1. Rep Clone:

   git clone https://github.com/seu-usuario/country-finder.git

2. Dependencies Installation: 

  cd country-finder && npm install
  If there is a problem doing the "npm install" use "npm install --force" , eveything will be alright.

3. Start the project: 
  
  npm run dev (vite)

## Project Structure

```plaintext
country-finder/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Appbar/
│   │   ├── Card/
│   │   ├── Header/
│   │   ├── List/
│   │   ├── LoadingSpinner.jsx
│   │   ├── BackgroundAnimation.jsx
│   │   ├── MainContent.jsx
│   │   ├── Pagination.jsx
│   │   └── TransitionPage.jsx
│   ├── Context/
│   │   └── TimeContext.jsx
│   ├── pages/
│   │   ├── Details/
│   │   └── Home/
│   ├── services/
│   │   └── countryService.js
│   ├── styles/
│   ├── theme/
│   │   └── theme.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── README.md
└── ...


