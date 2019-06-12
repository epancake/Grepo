import React, { Component } from 'react';
import '../styles/App.scss';
import SearchContainer from './SearchContainer'
import ResultsContainer from './ResultsContainer'

class App extends Component {

  render() {
   return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Github Search Emporium</h1>
      </header>
      <SearchContainer/>
      <ResultsContainer/>
    </div>
   );
  }
 }

 export default App
