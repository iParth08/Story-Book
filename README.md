# StoryBook : A Blog Post Site with Dashboard


## Tech Stack
1. React
2. Tailwind CSS
3. Flowbite - Tailwind Component Library
4. ExpressJs - for backend
5. MongoDB
6. Mongoose

## Features
1. Database Integrated
2. CRUD Operation
3. Authentication and Google OAuth

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
- Creating Models :: rules and schema
  - User Schema and Model Created
  - 

- Creating Routes :: links 
  - User Route created
  - Sign-Up Route

- Creating Controllers :: logic to act on the link
  - user controller
  - signup controller
    - taking body
    - validation of input / blank data handle
    - hashing the password :: encrypted only
    - saving to database and catching error
  
- Error Handling Middleware
  - in index.js and error handler

> 22nd January 2024

- Frontend UI
  - Sign Up page UI
  - No google auth ye {!important}
- Backend Features
  - Configure Proxy : *set a bridge between frontend and backend*
  - Sign Up functionality :: Success by post request
  - Loading
  - Naviagte on Success
  - Alert error 

> 23rd January 2024

<!-- ! ALERTS -->
1. Payload in Network can expose data in current scenario
2. No password strength check here
3. 