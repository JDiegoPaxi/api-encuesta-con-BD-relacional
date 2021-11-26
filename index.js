const  express = require('express');
require('dotenv').config();
const cors=require('cors');



const app = express();
app.use(cors());

app.use(express.json());



const port = process.env.PORT;


app.use('/sistemaencuestas',require('./routes/encuesta'));


app.listen(port, () => console.log(`Servidor online`));