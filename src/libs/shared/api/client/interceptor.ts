import { GraphQLClient } from "graphql-request";

// GraphQL client instance with the API endpoint
export const gqlClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_API_URL}/graphql`
);
