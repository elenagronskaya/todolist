import { createSelector } from 'reselect';

export const selectState = (state) => (state);
export const selectAlert = createSelector(selectState, ({alert}) => alert.alert);