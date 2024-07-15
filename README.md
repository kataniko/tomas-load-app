# Country Finder (React)

## Functionalities

- **Search:** Find a country using the search bar.

- **Detailed Inforations:** Check specified information about each country:
  - Oficial Name
  - Capital
  - Population
  - Region
  - Currencies
  - Borders
  - Flags etc..

## Techs used

- **React:** 
- **Axios:** HTTP client to fetch data .
- **MaterialUI:** Components from Google
- **Styled-Components:** Styling lib 
- **Framer-motion:**  Animations
- **Spline:**  3D in the background

## How to Run de Project

1. Rep Clone:

   git clone https://github.com/kataniko/tomas-load-app.git

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


