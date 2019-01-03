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
    if(!this.state.value) return
    this.props.dispatch(addtodo(this.state.value));
    this.setState({
      value: "",
    })
  }

  render() {
    return (
      <Fragment>
      <div className="App">      
        <input type="text"  className="input_field"placeholder="Enter value" onChange={(e) => this.handleChange(e)} value={this.state.value}></input>
        <button className="add_btn"onClick={this.handleSubmit}>Add</button>     
      </div>   
      </Fragment>
    )
  }
}

export default connect() (Input);
