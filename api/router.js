const HTTPStatus = require('http-status');

const router = require('express').Router();
const controller = require('./controllers');
const utils = require('./lib/utils');
const { version } = require('./package.json');

const routes = [
    {
        path: '/api/results',
        method: 'POST',
        handler: controller.createResult,
    },
    {
        path: '/api/repository/:id/findings',
        method: 'GET',
        handler: controller.getFindings,
    },
    {
        path: '/api/results',
        method: 'GET',
        handler: controller.listResults,
    },
    {
        path: '/api/health',
        method: 'GET',
        handler: async (req, res) => res.status(HTTPStatus.OK).end(),
    },
    {
        path: '/api/version',
        method: 'GET',
        handler: async (req, res) => res.json({ version }).end(),
    },
];

utils.setRoutes(router, routes);

module.exports = router;
