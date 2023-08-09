const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors = require('cors')

require('dotenv/config');
const api = process.env.API_URL;

const usersRouter = require('./routers/users');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors())

//routers
app.use(`${api}/register`,usersRouter);

const User = require('./models/user');


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    dbname: 'tour_guide',
})
.then(()=>{
    console.log('Database connection is ready...')
})
.catch((err)=>{
    console.log(err);
}
)

app.listen(3001, ()=>{
    console.log(api);
    console.log('server is running http://localhost:3001')
})
