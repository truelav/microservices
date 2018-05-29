const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
const RTM_EVENTS = require('@slack/client').RTM_EVENTS;

function handleOnAuthenticated(rtmStartData){
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
}

function addAuthenticatedHandler(rtm, handler) {
    rtom.on(CLIENT_EVENTS.RTM.AUTHENTICATED, handler);
}

function handleOnMessage(message){
    console.log(message)
}
//var token = process.env.SLACK_API_TOKEN || '';

module.exports.init = function slackClient(token, logLevel){
    const rtm = new RtmClient(token, {logLevel: logLevel});
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    rtm.on(RTM_EVENTS.MESSAGE, handleOnMessage);
    return rtm;
}

module.exports.addAuthenticatedHandler = addAuthenticatedHandler;