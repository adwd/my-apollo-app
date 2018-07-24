/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodos
// ====================================================

export interface GetTodos_todoes {
  __typename: 'Todo';
  id: string;
  text: string;
  done: boolean;
}

export interface GetTodos {
  todoes: (GetTodos_todoes | null)[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TodoFragment
// ====================================================

export interface TodoFragment {
  __typename: 'Todo';
  id: string;
  text: string;
  done: boolean;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
