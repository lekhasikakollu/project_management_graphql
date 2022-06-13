const { projects, clients } = require("../sampleData");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require("graphql");

const ClientType = new GraphQLObjectType({
    name: 'ClientType',
    fields: ()=> ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=> ({
        client: {
        type: ClientType,
        args: {id: {type: GraphQLID}},
        resolve(parent, args){
            return clients.find((client) => client.id === args.id)
        }
    }
})
});

module.exports = new GraphQLSchema({
    query: RootQueryType
})

