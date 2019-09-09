'use strict';
const router = require('express').Router();
const controller = require('./controllers');
const utils = require('./lib/utils');

const routes = [
    {
        path: '/api/results',
        method: 'POST',
        handler: controller.createResult,
    },
    {
        path: '/api/results/:id/findings',
        method: 'GET',
        handler: controller.getFindings,
    },
    {
        path: '/api/results',
        method: 'GET',
        handler: controller.listResults,
    },
];

utils.setRoutes(router, routes);

module.exports = router;