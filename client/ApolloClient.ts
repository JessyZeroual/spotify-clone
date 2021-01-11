import { ApolloClient, InMemoryCache } from "@apollo/client";
import pjson from "./package.json";

const client = new ApolloClient({
  uri: `http://${pjson["server-host"]}:8000/graphql`,
  cache: new InMemoryCache()
});

export default client;
