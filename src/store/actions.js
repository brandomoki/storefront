
export const selectCategory = (category) => {
  return {
    type: 'SELECT',
    payload: category,
  };
};
