import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearcBox } from './components/search/search.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searcField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json() )
      .then(users => this.setState({ monsters: users}));
  }
  handleChange = e => {
    this.setState({ searcField:e.target.value })
  }
  render() {
    const {monsters, searcField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searcField.toLowerCase()))
    return (
      <div className="App">
        <h1>Robo Friends</h1>
        <SearcBox 
          placeholder="Search Friends" 
          handleChange={this.handleChange}
        />
        
        <CardList monsters={filteredMonsters} />                    
      </div>
    );
  }
}
export default App;
