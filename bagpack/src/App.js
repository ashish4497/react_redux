import React, { Component } from 'react';
import './App.scss';
import Input from './components/inputfield';
import Unpacked from './components/unpacked';
import Undo from './components/undo';
import Packed from './components/packed';




class App extends Component {
  render() {
    return (
    <div className="App">
     <div className= "component1">
        <Input />
      </div>
      <div className= "component2">
       <Undo />
      </div>
      <div className="display_items">
      <div className= "component3">
        <Unpacked />
      </div>
      <div className = "component4">
        <Packed/>
      </div>
      </div>
    </div>
    );
  }
}

export default App;
