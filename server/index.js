const express = require('express');
const app = express();

app.use(express.json());

//Configuring the database
const db = require('./models')

//Routers
// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/test', (req, res) => {
    res.send([1,2,3])
})



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Listening to port 3001...');
    });
})