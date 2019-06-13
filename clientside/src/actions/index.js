const host = 'http://localhost:4000'

export const getResults = (term, sortMethod) => dispatch => {
    get(term, sortMethod)
    .then((results) => {
        dispatch(receiveResults(results.data))
    })
}

function get(term, sortMethod) {
    console.log('request to', `${host}/${sortMethod}/${term}`)
    return fetch(`${host}/${sortMethod}/${term}`, {
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