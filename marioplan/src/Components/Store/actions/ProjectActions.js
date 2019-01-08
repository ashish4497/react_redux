export const createProject = (project) => {
  return (dispatch, getState, {getFirebase,getFirestore}) => {
    //make async database
    const firestore = getFirestore();
    console.log(firestore)
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      authorLastName : 'Ninja',
      authorId :1234,
      createdAt :new Date()
    }).then (() => {
      dispatch(
        {type: 'CREATE_PROJECT', project}
      );
    }).catch((error)=>{
        dispatch({type: 'CREATE_PROJECT_ERROR',error})
    })
  
  }
}