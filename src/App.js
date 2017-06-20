import React, { Component } from 'react';
import './App.css';
import FormNewItem from './FormNewItem';
import ListItems from './ListItems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Checklist</h2>
        </div>
        
        <FormNewItem/>
        <ListItems/>
      </div>
    );
  }
}

export default App;
