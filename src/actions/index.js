export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  }
};

// the function is the action creator
//while the return value with the type
//is the action.