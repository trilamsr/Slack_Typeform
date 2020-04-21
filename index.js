const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
    Database_connection_string, Ngrok_token
} = require('./settings.json');
const app = express();
const schema = require('./Models/GraphQL/GraphQLSchema');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const cors = require('cors');
const ngrok = require('ngrok')

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
// cross origin middleware
app.use(cors());

// Routing
const routes = require('./Routes/serverRoutes')(app)

const port = 1234;
mongoose.set('useCreateIndex', true)
mongoose.connect(Database_connection_string, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        app.listen(process.env.PORT || port, () => {
            console.log(`Connection to databse established. Listening on Port ${port}`);
        })
    }).catch(err => console.log(err))


// ngrok configuration
const {activateWebhook} = require('./APIs/Typeform/API')
const url = ngrok.connect({
    addr: 1234,
    authtoken: Ngrok_token,
    onStatusChange: (status) => console.log( `ngrok is now ${status}`),
}).then(url => {
    let full_url = url+`/webhooks/typeform`
    activateWebhook(full_url)
})
