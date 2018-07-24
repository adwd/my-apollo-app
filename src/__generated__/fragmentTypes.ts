import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
const json = require('./fragmentTypes.json');

export const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: json,
});
