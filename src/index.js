const express = require('express');
const cors = require('cors');
const server = express();

const ProductRoutes = require('./routes/ProductRoutes');
server.use(cors());
server.use(express.json());

server.use('/Product', ProductRoutes);


server.listen(3333, () => {

});