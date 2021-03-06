import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import { deletetodo,checked} from '../action';




class Unpacked extends Component {
 
  handdledelete = (e) => {
    this.props.dispatch(deletetodo(e.target.id));
  }

  // handleChange = (e) => {
  // //  console.log(e.target.id , "hlo")
  //   // e.target.id
  // }

  render(){
    const { items } = this.props;
    return (
      <Fragment>
        <h2>unpacked Items</h2>
        <div className="unpacked_items">     
          {
           items && items.map((value, index)=> {
             if(!value.done){

               return (
                 <div key = {index} className="item_display">
                  <div className= "render_items">
                    <input type ="checkbox" id={index} onChange ={() =>this.props.dispatch(checked(index))}></input>
                    <h2>{value.value} </h2>
                    <button id={index} onClick={this.handdledelete}>X</button>
                  </div>         
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

export default connect(mapStateToProps) (Unpacked);