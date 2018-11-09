'use strict';

require('dotenv').config({ path: `${__dirname}/.env`});

exports.port = require('./config/ports.js');
exports.routeServices = require('./config/routing-services.js');
exports.isset = require('./common_functions').isset;

// Schemas
exports.schemas = require('./schemas');