const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList } = graphql
const EmailType = require('./Types').EmailType
const Email = require('../Database/emailSchema')


const RootQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        emails: {
            type: new GraphQLList(EmailType),
            resolve(parent, args) {
                let emails = Email.find({}).exec()
                return emails
            }
        }
    })
})





module.exports = RootQuery