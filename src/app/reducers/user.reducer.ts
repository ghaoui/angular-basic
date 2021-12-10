import { createReducer, on } from '@ngrx/store';

import { create } from '../actions/users.actions';

export const initialState: ReadonlyArray<{
  name: string;
  age: number;
  designation: string;
}> = [];

export const usersReducer = createReducer(
  initialState,
  on(create, (state, { name, age, designation }) => [
    ...state,
    { name, age, designation },
  ])
);
