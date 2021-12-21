let response = {
    error: false,
    message: '',
    body: '',
    method: ''
};

const statusMessage = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
};

exports.success = function(req, res, msg, status) {
    console.log('im in 3');
    let statusCode = status;
    let statusMessage = msg;
    if (!status) {
        status = 200;
    }
    if (!msg) {
        statusMessage = statusMessages[status];
    }
    console.log(msg);
    response = {
        error: false,
        message: statusMessage,
        body: req.body,
        method: req.method
    };

    res.status(statusCode).send(response);
};

exports.error = function(req, res, msg, details, status, e) {
    console.log('[response error] ' + details)
    let statusCode = status;
    let statusMessage = msg;
    if (!status) {
        status = 500;
    }
    if (!msg) {
        statusMessage = statusMessages[status];
    }
    response = {
        error: true,
        message: statusMessage,
        body: req.body,
        method: req.method
    };
    console.log(e);
    res.status(statusCode).send(response);
};