const express = require("express");
const path = require("path");

// const app = express();

const { GraphQLServer, PubSub } = require("graphql-yoga");

const messages = [];

const typeDefs = `
    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
      postMessage(user: String!, content: String!): ID!
    }

    type Subscription {
      messages: [Message!]
    }
`;

// For subscriptions, keep persistent list of subscribers to track
const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (parent, { user, content }) => {
      const id = messages.length;
      messages.push({ id, user, content });
      subscribers.forEach((fn) => fn());
      return id;
    },
  },
  Subscription: {
    messages: {
      subscribe: (parent, args, { pubsub }) => {
        // Define a new random channel
        const channel = Math.random().toString(36).slice(2, 15);
        // When a new user comes on
        onMessagesUpdates(() => pubsub.publish(channel, { messages }));
        // Instead of waiting for a user to post something for you to see it, this setTimeout will send data as soon as they start publishing
        setTimeout(() => pubsub.publish(channel, { messages }), 0);
        return pubsub.asyncIterator(channel);
      },
    },
  },
};

const options = {
  port: process.env.PORT || 4000,
  endpoint: "/graphql",
  playground: "/playground",
};

// Create a new PubSub that will be supplied as context
const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(options, ({ port }) => {
  console.log(`Server on https://localhost:${port}`);
});

server.express.use(express.static("public"));

server.express.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
  // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
