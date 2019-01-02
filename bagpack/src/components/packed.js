import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import {checked} from '../action';

class Packed extends Component {
  render(){
    const { items} = this.props;
    return (
      <Fragment>
        <h2>Packed Items</h2>
        <div className="packed_items">     
          {
           items && items.map((value, index)=> {
             if(value.done){
               return (
                 <div key = {index} className="item_display">
                  <p>
                  <input type ="checkbox" id={index} onChange ={() =>this.props.dispatch(checked(index))}></input>
                  {value.value} 
                  <button id={index} onClick={this.handdledelete}>X</button>
                  </p>         
                </div>
              )
            }
            })
          }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state)=> {
  return state;
 }

export default connect(mapStateToProps)(Packed);