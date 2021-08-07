# Templates Expressjs
 This is basic templates project expressjs for backend
# Install:
    npm install
# Setting .env:   
    change your environments in .env
    make new file .env.production if you want to deploy and keep your private environments
# Usage:
    npm run dev ( use .env)
    or npm start
# Structure:
    ./src/controller/ -> Manager API
    ./src/middleware/ -> Manager middleware
    ./src/models/ -> Manager mongoose Schema
    ./src/routers/routes -> routes API
    ./src/ -> Manager public html
    ./scratch -> manager localstorage if you use localstorage
# Tutorial
    jwt: https://www.npmjs.com/package/jsonwebtoken
    socket.io: https://socket.io/docs/v4
    node-localstorage: https://www.npmjs.com/package/node-localstorage
    mongoose: https://mongoosejs.com/docs/guide.html
    mongodb: https://docs.mongodb.com/manual/ 
# Dependency:
    {
        Cors,
        Axios,
        dotenv,
        jsonwebtoken,
        nodemon,
        body-parser,
        socket.io,
        node-localstorage,
        mongodb,
        mongoose
    }
    
    
