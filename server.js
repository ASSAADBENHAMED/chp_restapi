const express = require ('express');

const app = express();
app.use(express.json());
const dotevn = require ('dotenv');
dotevn.config({ path: './config/.env'});

//connecting database
const connectdb = require('./helpers/connectdb');
connectdb();

//!routers
 app.use('/api/user', require('./Routers/userouters'));


 const port= process.env.PORT ;
app.listen(port,(err)=>
err ? console.log(err) : console.log(`server is running on port ${port}`));
