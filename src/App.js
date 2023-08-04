import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      dragons: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users=> this.setState({ dragons: users })  )
  }

  render(){
    const { dragons, searchField } = this.state;
    const filteredDragons = dragons.filter( dragon=> 
        dragon.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        < SearchBox 
          placeholder='Search Monsters'
          changeHandler = { e =>  this.setState( {searchField: e.target.value}) }
        />
        <CardList dragons = {filteredDragons} />
          
      </div>
    );
  }

}


export default App;
