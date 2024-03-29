const host = 'https://afternoon-hollows-97494.herokuapp.com'

export const getResults = (term, sortMethod) => dispatch => {
    get(term, sortMethod)
    .then((results) => {
        dispatch(receiveResults(results.data))
    })
}

function get(term, sortMethod) {
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
    dispatch({
        type: 'RECEIVE_RESULTS',
        payload: results
    })
}