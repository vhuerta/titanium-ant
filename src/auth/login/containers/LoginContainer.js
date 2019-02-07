import React from 'react';
import { Mutation } from 'react-apollo';

import { LOGIN, SET_CURRENT_USER } from 'auth/Auth.gql';
import { onGQLError } from 'helpers/componentsHelpers';
import LoginForm from 'auth/login/components/LoginForm';

function SetCurrentUserMutation() {
  return (
    <Mutation mutation={SET_CURRENT_USER} onError={onGQLError}>
      {setCurrentUser => {
        return (
          <Mutation
            mutation={LOGIN}
            onError={onGQLError}
          >
            {(login, props) => <LoginForm login={login} setCurrentUser={setCurrentUser} {...props} />}
          </Mutation>
        );
      }}
    </Mutation>
  );
}

export default SetCurrentUserMutation;
