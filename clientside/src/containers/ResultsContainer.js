import React from 'react'
import { connect } from 'react-redux'
import Result from '../components/Result'


const ResultsContainer = ({results}) => {
  if (results.result) {
    return (
      <div>Results:
        {results.result.items.map(result => (
            <Result
              key={result.id}
              repo={result.name}
              owner={result.owner.login}
              stars={result.stargazers_count}
              language={result.language}
              description={result.description}/>
        ))}  
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state, props) => {
  return {results: state.results}
}

export default connect(
  mapStateToProps
)(ResultsContainer)