# StoryBook : A Blog Post Site with Dashboard


## Tech Stack
1. React
2. Tailwind CSS
3. Flowbite - Tailwind Component Library
4. ExpressJs - for backend
5. MongoDB
6. Mongoose

## Features


## Daily Progress
> 20th January 2024
- Set basic template
  - React installed with Vite
  - Tailwind configured
  
- Set Pages and Routes
  - Basic templates pages : About, SignIn, SignUp, Projects, Dashboard, Home
  - Installed `react-router-dom` and created Routes
  
- Creating Different Components
  - Configures `Flowbite-react`
  - Using `react-icon`
  - Header Component => Navigation and Logo

  ```json
  //while setting flowbite in content []
  "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
  ```

> 21st January 2024
- Setting Server using Expressjs
  - installed `mongoose`
  - Basic template created
  - Backend structured in root folder
   
- Database Creation and Integration
  - database created in Mongo
  - install & configure `dotenve`
  - `mongoose.connect` to connect to the database

```js
  npm i dotenv

  import dotenv from "dotenve";

  dotenv.config();

  const var = process.env.VARIABLE // VARIABLE = VALUE

```
- Creating Model 
  - User Schema and Model Created
  


