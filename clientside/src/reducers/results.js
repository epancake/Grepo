export default (state = {}, action) => {
    switch (action.type) {
    case 'RECEIVE_RESULTS':
        console.log('ar', action.payload)
      return {
       result: action.payload
      }
    case 'SORT_BY_STARS':
      let newStarsState = {result: {items: state.result.items.sort((a, b)=> {
        return b.stargazers_count-a.stargazers_count
      })}}
      return { ...newStarsState, ...state}
    case 'SORT_BY_RELEVANCE':
      let newRelevanceState = {result: {items: state.result.items.sort((a, b)=> {
        return b.score-a.score
      })}}
      return { ...newRelevanceState, ...state}
    default:
      return state
    }
   }