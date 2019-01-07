import React, {Component} from 'react'

class CreateProject extends Component {
  state = {
    title:"",
    content:""
  }
  render() {
    return (
      <div className="container">
      <form onSubmit={this.handelSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id = "email" onChange={this.handelChange}/>
        </div>
        <div className="input-field">
          <label htmlFor="Content">Project Content</label>
          <textarea id="content" className="materalized texrarea" onChange={this.handelChange}></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
    )
  }
}
export default CreateProject;