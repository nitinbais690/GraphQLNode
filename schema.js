const _ = require( 'lodash');

const graphQL = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
}=graphQL;


const users = [{
    id: '1',
    firtsName: 'Abhi',
    lastName: 'Ram',
    age:35,
},
{
    id: '12',
    firtsName: 'Shri',
    lastName: 'Ram',
    age:34,
},
{
    id: '13',
    firtsName: 'Sheeta',
    lastName: 'Ram',
    age:38,
}]

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
                return _.find(users,{id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})