const _ = require('lodash');

const db = require('../services/db');
const { getDateFieldByStatus } = require('../lib/status-utils');

module.exports = async function listResults(req, res) {
    const results = await db.Result.findAll({});
    const response = _.map(results, (r) => {
        const {
            id, repositoryName, status,
            findings = {},
        } = r;
        const arr = findings.findings || [];
        return {
            id,
            repositoryName,
            status,
            timestamp: r[getDateFieldByStatus(status)],
            findings: arr.length,
        };
    });
    res.json(response);
};
