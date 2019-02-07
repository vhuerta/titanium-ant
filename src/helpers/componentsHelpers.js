import get from 'lodash.get';
import { growl } from 'helpers/growlHelper';

export function generateClasses(Styles) {
  return modifiers => {
    const styles = modifiers.map(m => Styles[m]).filter(c => c);
    return styles.join(' ');
  };
}

export function parseError(apolloError) {
  // Try to parse errors from server
  if (!apolloError) return null;
  const error = get(apolloError, 'graphQLErrors[0]', null);
  const message = get(error, 'message', 'error.connection_error');

  // If no graphQLErrors
  if (!error) return { message };

  // Parse details error
  const fields = get(error, 'detail', {});
  return { message, fields };
}

export function onGQLError(apolloError) {
  const error = parseError(apolloError);
  growl({ title: 'Error', text: error.message, type: 'danger' });
}
