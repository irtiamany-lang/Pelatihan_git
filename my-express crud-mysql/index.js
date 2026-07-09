require('dotenv').config()
const express = require('express');
const { movieRouter } = require('./srs/routes/movieRouter');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')


const cors = require('cors');
const {userRouter} = require('./srs/routes/userRouter');
var corsOptions = {
origin: 'http://localhost:3000',
optionsSuccessStatus: 200
}


app.use(cors(corsOptions))
app.use(express.json())
app.use('/api', movieRouter)
app.use('/', userRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// app.get('/', (req, res) => {
//   res.send('Hello Dunia!');
// });



