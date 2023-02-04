import './pre-start'; // Must be the first import
import logger from 'jet-logger';

import EnvVars from '@src/declarations/major/EnvVars';
import server from './server';


// **** Start server **** //

const msg = ('Express server started on port: ' + EnvVars.port.toString());
server.listen(EnvVars.port, () => logger.info(msg));

const express = require('express'); 
const path = require('path'); 

const app = express(); 
const publicPath = path.join(__dirname, '/src/public')

app.use(express.static(publicPath));
app.listen(5000); 
