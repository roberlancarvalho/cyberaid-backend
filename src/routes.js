const express =  require('express');
const OngController = require( './controllers/OngController');
const IncidentController = require( './controllers/IncidentController');
const ProfileController = require( './controllers/ProfileController');
const SessionController = require( './controllers/SessionController');
const routes = express.Router();//desacoplando o módulo de rotas do express em uma nova variável

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);//criada recentemente

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create); 

routes.delete('/incidents/:id' , IncidentController.delete);


module.exports = routes; //exportando essas rotas disponíveis para o index possa acessá-las     