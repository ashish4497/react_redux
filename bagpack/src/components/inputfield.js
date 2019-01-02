import React, { Component,Fragment } from 'react';
import { addtodo} from '../action';
import {connect} from 'react-redux'


class Input extends Component {
  constructor(){
    super()
    this.state = {
      value : ""
    }
  }

  handleChange = (e) => {
    this.setState({
      value:e.target.value,
    })
    
  }
  handleSubmit = () => {
    this.props.dispatch(addtodo(this.state.value));
    this.setState({
      value: "",
    })
  }

  render() {
    return (
      <Fragment>
      <div className="App">      
        <input type="text" placeholder="Enter value" onChange={(e) => this.handleChange(e)} value={this.state.value}></input>
        <button onClick={this.handleSubmit}>Add</button>     
      </div>
      
      </Fragment>
    )
  }
}

export default connect() (Input);
