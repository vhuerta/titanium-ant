
import gql from 'graphql-tag';

export const VERIFY_TOKEN = gql`
  {
    verifyToken {
      id
      name
      fathersSurname
      mothersSurname
      email
    }
  }
`;