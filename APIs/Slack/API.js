const {Slack_bot_token} = require('./../../settings.json')
const slack = require('slack');

async function postMessage(message) {
    slack.chat.postMessage({
        token: Slack_bot_token,
        channel:'general',
        text: message
    }).catch (err => {
        console.log(err)
    })
}

module.exports = {postMessage}