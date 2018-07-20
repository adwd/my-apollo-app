/* tslint:disable */
//  This file was automatically generated and should not be edited.

/**
 * The episodes in the Star Wars trilogy
 */
export enum Episode {
  /**
   * Star Wars Episode V: The Empire Strikes Back, released in 1980.
   */
  EMPIRE = 'EMPIRE',
  /**
   * Star Wars Episode VI: Return of the Jedi, released in 1983.
   */
  JEDI = 'JEDI',
  /**
   * Star Wars Episode IV: A New Hope, released in 1977.
   */
  NEWHOPE = 'NEWHOPE',
}

export interface GetHeroQuery {
  hero:
    | (
        | {
            __typename: 'Human';
            /**
             * The name of the character
             */
            name: string;
            /**
             * The friends of the character, or an empty list if they have none
             */
            friends: Array<
              | (
                  | {
                      __typename: 'Human';
                      /**
                       * The ID of the character
                       */
                      id: string;
                      /**
                       * The name of the character
                       */
                      name: string;
                      /**
                       * The movies this character appears in
                       */
                      appearsIn: Array<Episode | null>;
                    }
                  | {
                      __typename: 'Droid';
                      /**
                       * The ID of the character
                       */
                      id: string;
                      /**
                       * The name of the character
                       */
                      name: string;
                      /**
                       * The movies this character appears in
                       */
                      appearsIn: Array<Episode | null>;
                    })
              | null
            > | null;
          }
        | {
            __typename: 'Droid';
            /**
             * The name of the character
             */
            name: string;
            /**
             * The friends of the character, or an empty list if they have none
             */
            friends: Array<
              | (
                  | {
                      __typename: 'Human';
                      /**
                       * The ID of the character
                       */
                      id: string;
                      /**
                       * The name of the character
                       */
                      name: string;
                      /**
                       * The movies this character appears in
                       */
                      appearsIn: Array<Episode | null>;
                    }
                  | {
                      __typename: 'Droid';
                      /**
                       * The ID of the character
                       */
                      id: string;
                      /**
                       * The name of the character
                       */
                      name: string;
                      /**
                       * The movies this character appears in
                       */
                      appearsIn: Array<Episode | null>;
                    })
              | null
            > | null;
          })
    | null;
}

export type friendFragment =
  | {
      __typename: 'Human';
      /**
       * The ID of the character
       */
      id: string;
      /**
       * The name of the character
       */
      name: string;
      /**
       * The movies this character appears in
       */
      appearsIn: Array<Episode | null>;
    }
  | {
      __typename: 'Droid';
      /**
       * The ID of the character
       */
      id: string;
      /**
       * The name of the character
       */
      name: string;
      /**
       * The movies this character appears in
       */
      appearsIn: Array<Episode | null>;
    };
