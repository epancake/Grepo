import React, { Component } from 'react';
import '../styles/App.scss';
import SearchContainer from './SearchContainer'
import ResultsContainer from './ResultsContainer'

class App extends Component {

  render() {
   return (
    <div className="App">
      <header className="App-header">
        <h1>Grepo - the Grep for Repos</h1>
      </header>
      <SearchContainer/>
      <main className='main-content'>
        <ResultsContainer/>
      </main>
    </div>
   );
  }
 }

 export default App
