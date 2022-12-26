import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./data/resolvers.graphql";
import { typeDefs } from "./data/schema.graphql";
import { PORT } from "./config/config";

const server = new ApolloServer({typeDefs, resolvers });

const app = express();
server.start().then(() => {
    server.applyMiddleware({ app });
    app.listen({ port : PORT }, () => {
        console.log(`Server is running on the port ${PORT}`);
    });
});

app.get("/", (req,res) => {
    console.log("Apollo graphql server is running..")
});