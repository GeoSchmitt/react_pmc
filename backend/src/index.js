const express = require('express');
const server = express();
//USANDO O CORS PQ A MINHA VIDA NÃO TA DIFICIO O SUFICIENTE, 
//AINDA PRECISA TER ERRO DE CORS PRA MELHORAR TUDO,
//INFERNOOOOOOOOOOO
const cors = require('cors');
server.use(express.json());
//DALE
server.use(cors());

const UserRoutes = require('./routes/UserRoutes');
const ImovelRoutes = require('./routes/ImovelRoutes');
const PlantaRoutes = require('./routes/PlantaRoutes');

server.use('/user', UserRoutes);
server.use('/imovel', ImovelRoutes);
server.use('/planta', PlantaRoutes);

server.listen(3333, ()=>{
    console.log('ONLINE, só DALE');
})