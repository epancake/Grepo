export default (state = {}, action) => {
    switch (action.type) {
    case 'RECEIVE_RESULTS':
        console.log('ar', action.payload)
      return {
       result: action.payload
      }
    default:
      return state
    }
   }