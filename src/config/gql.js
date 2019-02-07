import ApolloClient from 'apollo-boost';
import merge from 'lodash.merge';

import {AuthGql} from 'auth';

const client = new ApolloClient({
  uri: 'https://wireless-bear-develop.herokuapp.com/graphql',
  clientState: {
    typeDefs: [AuthGql.typeDefs],
    defaults: merge({}, AuthGql.defaults),
    resolvers: merge({}, AuthGql.resolvers)
  }
});

export default client;
