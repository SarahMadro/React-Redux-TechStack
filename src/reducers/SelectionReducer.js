
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};

//reducers will always consist of
//switch statements to show what
//the reducer needs to respond to