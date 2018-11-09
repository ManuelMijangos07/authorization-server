'use strict'
const authorizationServiceUrl = 'http://localhost';
const dbUrl = 'localhost';
const port = require('./ports.js');

const serviceHttpUrl = 'http://localhost';
const serviceHost = 'localhost';

module.exports = {
    AUTHORIZATION_SERVICE_ROUTE: `${serviceHttpUrl}:${port.AUTHORIZATION_SERVICE_PORT.normal}`,
    AUTHORIZATION_SERVICE_URL: authorizationServiceUrl,
    DB_ROUTE: `${dbUrl}:${port.DB_PORT}`,
    SERVICE_HOST: serviceHost,
};