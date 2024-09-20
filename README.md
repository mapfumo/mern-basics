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
```

### Running the server

```bash
npm run dev
```
