var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var root = { hello: () => 'Hello World' }

graphql(schema, '{ hello }', root).then((res) => {
    console.log(res);
});