const RtmClient = require('@slack/client').RtmClient;
const CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

function handleOnAuthenticated(rtmStartData){
    console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel`);
}

function addAuthenticatedHandler(rtm, handler) {
    rtom.on(CLIENT_EVENTS.RTM.AUTHENTICATED, handler);
}
//var token = process.env.SLACK_API_TOKEN || '';

module.exports.init = function slackClient(token, logLeverl){
    const rtm = new RtmClient(token, {logLevel: 'debug'});
    addAuthenticatedHandler(rtm, handleOnAuthenticated);
    return rtm;
}