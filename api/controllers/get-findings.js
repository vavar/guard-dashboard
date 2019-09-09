'use strict';
const _ = require('lodash');
const HTTPStatus = require('http-status');
const debug = require('debug')('api-get-findings');

const db = require('../models');

class NotFoundScanResult extends Error {
    constructor() {
        super('not found scan result')
    }
}


module.exports = async function getFindings(req, res) {
    const { id } = req.params;
    try {
        const scanResult = await db.Result.findByPk(id);
        if (!scanResult) {
            throw new NotFoundScanResult();
        }
        res.json(scanResult.findings);
    } catch (err) {
        debug(err);
        res.status(HTTPStatus.NOT_FOUND).end();
    }
}