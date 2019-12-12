import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // Bind in this way or use arrow functions!
    // this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // arrow function automatically bind the 'this'
  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search monsters' handleSearch={this.handleSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
