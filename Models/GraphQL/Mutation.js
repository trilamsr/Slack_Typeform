const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLNonNull} = graphql
const EmailType = require('./Types').EmailType

const Email = require('../Database/emailSchema')
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEmail: {
            type: EmailType,
            args: {
                email: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let email = new Email({
                    email: args.email
                })
                return email.save()
            }
        }
    }
})



module.exports = Mutation