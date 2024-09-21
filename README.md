### Initializing a MERN app

```bash
mkdir backend
mkdir frontend
touch backend/server.js
npm init -y
```

In `package.json` add the following to use `import express` instead of `require`:
`"type": "module",`

### Installing packages

```bash
npm install express mongoose dotenv
npm install nodemon -D # -D to make it a dev dependency

cd frontend
npm create vite@latest .
# select React & vanilla JS
npm install
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install react-router-dom
npm install react-icons
npm install @chakra-ui/icons
npm install zustand
```

### Running the server

```bash
npm run dev
```
