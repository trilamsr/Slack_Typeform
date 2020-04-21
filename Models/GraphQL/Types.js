const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLID, 
} = graphql

const EmailType = new GraphQLObjectType({
    name: 'Email',
    fields: () => ({
        id: {type: GraphQLID},
        email: {type: GraphQLString}
    })
})

module.exports = {
    EmailType
}