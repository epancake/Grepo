export default (state = {}, action) => {
    switch (action.type) {
    case 'RECEIVE_RESULTS':
      return {
       result: action.payload
      }
    default:
      return state
    }
   }