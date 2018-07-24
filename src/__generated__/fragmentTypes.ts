import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

const json = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'Node',
        possibleTypes: [{ name: 'Todo' }, { name: 'User' }],
      },
    ],
  },
};

export const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: json,
});
