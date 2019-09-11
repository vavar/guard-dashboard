const statusToDate = {
    queued: 'queuedAt',
    'in-progress': 'scanningAt',
    success: 'finishedAt',
    failure: 'finishedAt',
};

function getDateFieldByStatus(status) {
    return statusToDate[status];
}

module.exports = {
    getDateFieldByStatus,
};
