import React,  { Component, Fragment} from 'react'

class Undo extends Component {
  render(){
    return (
      <Fragment>
        <button>undo</button>
        <button>Redo</button>
      </Fragment>
    )
  }
}

export default Undo;