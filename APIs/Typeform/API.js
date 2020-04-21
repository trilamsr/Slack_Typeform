const { createClient } = require('@typeform/api-client');
const { Typeform_token, Typeform_uid } = require('./../../settings.json')


const typeformAPIClient = createClient({token: Typeform_token})
// const form = typeformAPIClient.forms.get({uid: Typeform_uid}).then(doc => console.log(doc))


const activateWebhook = (url) => {
    typeformAPIClient.webhooks.create({
        uid: Typeform_uid,
        tag: "email_submission",
        url: url,
        enable: true
    })
    console.log(`Activated ${url}`)
} 


module.exports = {activateWebhook}