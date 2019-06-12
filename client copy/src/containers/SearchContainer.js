import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResults } from '../actions';
import { sortResults } from '../actions';
import Search from '../components/Search'
import Sort from '../components/Sort'

import PropTypes from 'prop-types';

const SearchContainer = ({ getResults, sortResults }) => (
    <div>
      <Search 
        getResults={getResults}/>     
      <Sort 
        sortResults={sortResults}/> 
    </div>
  )
  
  SearchContainer.propTypes = {
    getResults: PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state, props) => ({
  })
  
  const mapDispatchToProps = {
    getResults,
    sortResults
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchContainer)
