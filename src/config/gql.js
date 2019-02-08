import ApolloClient from 'apollo-boost';
import merge from 'lodash.merge';

import { AuthGql } from 'auth';

const client = new ApolloClient({
  uri        : process.env.REACT_APP_API_GQL_ENDPOINT,
  clientState: {
    typeDefs : [AuthGql.typeDefs],
    defaults : merge({}, AuthGql.defaults),
    resolvers: merge({}, AuthGql.resolvers)
  }
});

export default client;
