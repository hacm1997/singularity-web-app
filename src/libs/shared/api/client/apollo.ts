import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// New Apollo Client instance.
const client = new ApolloClient({
  link: createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});

export default client;
