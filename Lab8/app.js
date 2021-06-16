const express = require('express');

const app = express();
app.use(express.json()); 

//app.get('/', (req, res) => res.send('Hello World!'));

require('./routes/product.routes')(app);
require('./routes/laptop.routes')(app);

app.listen(8080, () => console.log('Server started. Example app listening on port 8080!'));