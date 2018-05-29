'use strict';

const slackClient = require('../server/slack-client')
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);

const slackToken = 'the token goes in here...';
const slackLogLevel = 'debug';

const rtm = slackClient.init(slackToken, slackLogLevel);
rtm.start();

server.listen(3000);

server.on('listening', function() {
    console.log(`Multiservice is listening on ${server.address().port} in ${service.get('env')} mode.`);
});
