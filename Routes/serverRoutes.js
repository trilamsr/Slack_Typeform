const controller = require('../Controllers/server');


module.exports = app => {
    app.post(`/webhooks/typeform`, controller.postTypeform)
}