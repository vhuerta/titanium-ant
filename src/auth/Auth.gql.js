import gql from 'graphql-tag';

import { setUser, setToken, getUser, getToken } from 'helpers/authHelpers';

const defaults = {
  currentUser: {
    token     : getToken(),
    user      : getUser(),
    __typename: 'CurrentUser'
  }
};

const resolvers = {
  Mutation: {
    setCurrentUser: (_, { input }, { cache }) => {
      const currentUser = { ...input, __typename: 'CurrentUser' };
      const data = { currentUser };
      setUser(currentUser.user);
      setToken(currentUser.token);
      cache.writeData({ data });
      return currentUser;
    }
  }
};

const typeDefs = gql`
  type User {
    id: ID!
    name: String
    fathersSurname: String
    mothersSurname: String
    email: String
  }

  type CurrentUser {
    token: String!
    user: User!
  }

  type Query {
    currentUser: CurrentUser
  }

  input UserInput {
    id: ID!
    name: String
    fathersSurname: String
    mothersSurname: String
    email: String
  }

  input CurrentUserInput {
    token: String!
    user: UserInput!
  }

  type Mutation {
    setCurrentUser(input: CurrentUserInput!): CurrentUser
  }
`;

export const GET_CURRENT_USER = gql`
  {
    currentUser {
      token
      user {
        id
        name
        fathersSurname
        mothersSurname
        email
      }
    }
  }
`;

export const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($token: String!, $user: User!) {
    setCurrentUser(input: { token: $token, user: $user }) @client {
      token
      user
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      id
      token
      user {
        id
        name
        fathersSurname
        mothersSurname
        email
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp(
    $name: String!
    $fathersSurname: String!
    $mothersSurname: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signUp(
      input: {
        name: $name
        fathersSurname: $fathersSurname
        mothersSurname: $mothersSurname
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      token
      user {
        id
        name
        fathersSurname
        mothersSurname
        email
      }
    }
  }
`;

export default { defaults, typeDefs, resolvers };
