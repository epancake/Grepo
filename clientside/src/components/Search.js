import React, { useState } from 'react';

const Search = ({getResults}) => {

  const [searchterm, setTerm] = useState('');

  const updateField = e => {
    setTerm(e.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault()
    getResults(searchterm)
  }

  return (
    <div>
      <form onSubmit={submitSearch}>
        <label>
          Searchterm:
          <input
            value={searchterm}
            name="searchterm"
            onChange={updateField}
          />
        </label>
        <button>Submit</button>
      </form>

    </div>
  );
}

export default Search