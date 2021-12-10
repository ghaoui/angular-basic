import { createAction, props } from '@ngrx/store';

type User = {
  name: string; age: number; designation: string
}

export const create = createAction(
  '[Users] Create',
  props<User>()
);
