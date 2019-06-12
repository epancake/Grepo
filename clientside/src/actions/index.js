const host = 'http://localhost:4000'

export const getResults = (term) => dispatch => {
    get(term)
    .then((results) => {
        dispatch(receiveResults(results.data))
    })
}

function get(term) {
    return fetch(`${host}/${term}`, {
        method: 'get',
    }).then(handleResponse)
}

function handleResponse(response) {
    if (response.ok) {
        return response.json()
    }

    return response.text().then(text => {
        const error = JSON.parse(text)
        return Promise.reject({ ...error, status: response.status })
    })
}

const receiveResults = (results) => dispatch => {
    console.log('dispatching', results)
    dispatch({
        type: 'RECEIVE_RESULTS',
        payload: results
    })
}

// export const simpleAction = () => dispatch => {
//     console.log('getting')
//     get('fire')
//     .then(results => console.log('t', results))
//     .then((results) => {
//         dispatch(receiveResults(results))
//     })
//    }

export const sortResults = (sortMethod) => dispatch => {
    switch (sortMethod) {
        // case 'relevance':
        //     dispatch({
        //         type: 'SORT_BY_RELEVANCE'
        //     })
        //     break;
        case 'stars':
            dispatch({
                type: 'SORT_BY_STARS'
            })
            break
        default:
            dispatch({
                type: 'SORT_BY_RELEVANCE'
            })
        }
}