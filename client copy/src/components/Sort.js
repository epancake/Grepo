import React, { useState } from 'react';

const Sort = ({sortResults}) => {

  const [sortMethod, setSort] = useState('');

  const setSortMethod = (event) => {
    event.preventDefault()
    setSort(event.target.name)
    sortResults(event.target.name)
  }

  return (
    <div>
      <button name='relevance' onClick={setSortMethod}>Sort by Relevance</button>
      <button name='stars' onClick={setSortMethod}>Sort by Stars</button>
      <p>Sorting by {sortMethod}</p>
    </div>
  );
}

export default Sort