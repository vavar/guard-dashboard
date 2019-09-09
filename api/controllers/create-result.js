const HTTPStatus = require('http-status');
const debug = require('debug')('drone-save-action');

const db = require('../models');

module.exports = async function createResult(req, res) {
    const {
        status, findings, scanningAt, finishedAt,
    } = req.body;
    const result = {
        status,
        findings,
        scanningAt,
        finishedAt,
        queuedAt: Date.now(),
    };

    try {
        await db.Result.save(result);
    } catch (err) {
        debug('create scan result error', err);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.json(result);
};
