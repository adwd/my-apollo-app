import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

const json = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'Character',
        possibleTypes: [{ name: 'Human' }, { name: 'Droid' }],
      },
      {
        kind: 'UNION',
        name: 'SearchResult',
        possibleTypes: [
          { name: 'Human' },
          { name: 'Droid' },
          { name: 'Starship' },
        ],
      },
    ],
  },
};

export const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: json,
});
