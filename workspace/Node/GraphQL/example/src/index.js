import express from 'express';
import resolvers from './resolvers';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';


const app = express()

app.get("/", (req,res) => {
    res.send("Up and running with graphql crash course");
})

const root = resolvers

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root
}))

app.listen(3000, () => console.log("Running at 3000"))