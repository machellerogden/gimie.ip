'use strict';

const os = require('os');
const _ = require('lodash');

function ip() {
    const ip = _.result(_.find(_.result(os.networkInterfaces(), 'en0', []), { family: 'IPv4' }), 'address', 'unknown');
    return ip;
}

ip.label = 'Public IP';

module.exports = {
    ip
};
