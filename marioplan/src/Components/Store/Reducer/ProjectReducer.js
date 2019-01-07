const initState ={
  projects:[
    {id :'1', title:"please", content:"bla bla bla"},
    {id :'2', title:"help", content:"bla bla bla"},
    {id :'3', title:" me ", content:"bla bla bla"}
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT' : 
    console.log('created project', action.project)
  }
  return state
}
export default projectReducer;