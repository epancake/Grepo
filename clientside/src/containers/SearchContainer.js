import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResults } from '../actions';
import Search from '../components/Search'

import PropTypes from 'prop-types';

const SearchContainer = ({ getResults, results }) => {

    return (<div>
      <Search 
        getResults={getResults}
        results={results}/>  
    </div>)
}
  
  SearchContainer.propTypes = {
    getResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state, props) => {
    return {results: state.results}
  }
  
  const mapDispatchToProps = {
    getResults
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchContainer)
