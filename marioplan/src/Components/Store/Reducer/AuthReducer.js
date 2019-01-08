const initState ={
  authReeor : null
}

const authReducer = (state = initState, action) => {    
  switch(action.type) { 
    case 'LOGIN_ERROR' :
    return {
      ...state,
      authError: 'Login Failed'
    }
    case 'LOGIN_SUCESS' :
    console.log("loginsucess")
      return {
        ...state,
        authError: null
      }
      case 'SIGNOUT_SUCCESS' : 
      console.log("signout sucess")
      return state;
      default:
       return state
  }
}

export default authReducer;