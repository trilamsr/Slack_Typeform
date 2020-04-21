const Email = require('./../Models/Database/emailSchema')
const {inTheNews} = require('./../APIs/Axios/API')
const {postMessage} = require('./../APIs/Slack/API')


const postTypeform = (req, res) => {
    let input = req.body.form_response.answers[0].text
    let email = new Email({
        email: input
    })
    email.save().then(async (data) => {
        const message = await inTheNews()
        console.log(message)
        postMessage(message)
        res.status(200).json(data)
    }).catch(err => {
        console.log("validation failed")
        res.status(200).json(err)
    })
}

module.exports = {
    postTypeform
}