import React from 'react'
import { connect } from 'react-redux'
import Result from '../components/Result'


const ResultsContainer = ({results}) => {
  if (results.result) {
    console.log('res', results.result.items)
    return (
      <div>Results:
        {results.result.items.map(result => {
          return (
            <Result
              key={result.id}
              repo={result.name}
              owner={result.owner.login}
              stars={result.stargazers_count}
              language={result.language}
              description={result.description}/>
          )
        })}  
      </div>
    )
  } else {
    return (<p>Let's search!</p>)
  }
}

const mapStateToProps = (state, props) => {
  console.log('state', state)
  return {results: state.results}
}

export default connect(
  mapStateToProps
)(ResultsContainer)