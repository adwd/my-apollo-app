/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addTodo
// ====================================================

export interface addTodo_createTodo {
  __typename: 'Todo';
  id: string;
  text: string;
  done: boolean;
}

export interface addTodo {
  createTodo: addTodo_createTodo;
}

export interface addTodoVariables {
  text: string;
  done: boolean;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTodos
// ====================================================

export interface getTodos_todoes {
  __typename: 'Todo';
  id: string;
  text: string;
  done: boolean;
}

export interface getTodos {
  todoes: (getTodos_todoes | null)[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: todoFragment
// ====================================================

export interface todoFragment {
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
