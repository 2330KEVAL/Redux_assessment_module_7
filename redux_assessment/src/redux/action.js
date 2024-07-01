export const UPDATE_FIELD = 'UPDATE_FIELD';

export const updateField = (field, value) => ({
  type: UPDATE_FIELD,
  payload: { field, value }
});