import React from 'react';

const Search = ({repo, owner, stars, language, description, url}) => (
    <div className='result-card'>
      <div className='data-row'>
        <div className='short-data'>
          <label>Repo:</label>
          <div>
            <a href={url}>{repo}</a>
          </div>
        </div>
        <div className='short-data'>
          <label>Owner:</label>
          <div>{owner}</div>
        </div>
        <div className='short-data'>
          <label>Stars:</label>
          <div>{stars}</div>
        </div>
        <div className='short-data'>
          <label>Language:</label>
          <div>{language}</div>
        </div>
      </div>
      <div className='long-data data-row'>
        <label>Description:</label>
        <div>{description}</div>
      </div>
    </div>
  );

export default Search