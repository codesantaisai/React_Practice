import { Component } from 'react';
// import './App.css';
import Table from './table';

class App extends Component {
  render() {
    const character = [{
      name:"jathu",
      age:23
    },
    {
      name:"isai",
      age:23
    },
    {
      name:"meidheen",
      age:23
    }]
    return (
    <div className="App">
      <Table charactersData = {character}/>
    </div>
  )
  }
}

export default App;
