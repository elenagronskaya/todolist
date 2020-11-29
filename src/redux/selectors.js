import { createSelector } from 'reselect';

export const selectState = (state) => (state);

export const selectTodos = createSelector(selectState, ({todos}) => todos);
export const selectAlert = createSelector(selectState, ({alert}) => alert);