const express = require('express');
const app = express();

app.use(express.json());


app.listen(3003,()=>console.log('server started at 3003'));