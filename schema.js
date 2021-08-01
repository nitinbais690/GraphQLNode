
const graphQL = require('graphql');
const axios =require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
}=graphQL;

 const UserType= new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString },
        firtsName: {type: GraphQLString },
        lastName: {type: GraphQLString},
        age: {type: GraphQLInt},
    }
})

 const RootQuery = new GraphQLObjectType({
    name: 'RootQueryQL',
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLString}
            },
            resolve(parentValue, args){
                return axios.get(`http://localhost:3000/users/${args.id}`).then(res=> res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})