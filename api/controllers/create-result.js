const HTTPStatus = require('http-status');
const debug = require('debug')('api-save-action');

const db = require('../services/db');
const { getDateFieldByStatus } = require('../lib/status-utils');

module.exports = async function createResult(req, res) {
    const {
        repositoryName, status, findings,
    } = req.body;

    const result = await db.Result.findOrCreate({
        where: { repositoryName },
        defaults: {
            repositoryName,
        },
    });
    result.status = status;
    result[getDateFieldByStatus(status)] = Date.now();
    result.findings = findings;
    try {
        await db.Result.update(result, { where: { repositoryName } });
    } catch (err) {
        debug('create scan result error', err);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).end();
        return;
    }

    res.json(result);
};
