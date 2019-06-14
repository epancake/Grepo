import React, { useState } from 'react';

const Search = ({getResults, results}) => {

  const [searchterm, setTerm] = useState('');
  const [sortMethod, setSort] = useState('score');

  const updateField = event => {
    setTerm(event.target.value);
  };

  const submitSearch = event => {
    event.preventDefault()
    getResults(searchterm, sortMethod)
  }


  const setSortMethod = event => {
    event.preventDefault()
    setSort(event.target.name)
    getResults(searchterm, event.target.name)
  }

  const showSorter = () => {
    if (results.result) {
      return (
        <div className='sorter'>
          <p>Showing {results.result.items.length} of {results.result.total_count} results,<br/>sorted by {sortMethod === 'score' ? 'relevance' : sortMethod}</p>
          <div className='sort-options'>
            <button name='score' onClick={setSortMethod} className={sortMethod === 'score' ? 'active' : 'inactive'}>Sort by Relevance</button>
            <button name='stars' onClick={setSortMethod} className={sortMethod === 'stars' ? 'active' : 'inactive'}>Sort by Stars</button>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='searchForm'>
      <div className='searcher'>
        <p className='instructions'>Hi, enter a search term for GitHub repos you want to find. We just need a solid lead on the case!</p>
        <form onSubmit={submitSearch}>
            <input
              placeholder='Search Term'
              value={searchterm}
              name="searchterm"
              onChange={updateField}
            />
          <button>Submit</button>
        </form>
      </div>
      {showSorter()} 
    </div>
  );
}

export default Search