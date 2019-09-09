const _ = require('lodash');
const HTTPStatus = require('http-status');
const debug = require('debug')('drone-save-action');

const db = require('../services/db');

module.exports = async function listResults(req, res) {
    const results = await db.Result.findAll({});
    const response = _.map(results, (r) => {
        const { id, repositoryName, status, findings} = r;
        return {
            id,
            repositoryName,
            status,
            findings: findings.findings.length,
        }
    });
    res.json(response);
}