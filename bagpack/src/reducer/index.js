const initialstate = {
  items: [],
  redo :[]
}
export default function bagpack(state = initialstate, action) {
  switch (action.type) {
    case 'ADDLIST':
      return {
        ...state,
        items: [...state.items, {value:action.value, done:false}]
      }
    case 'DELETLIST' :
     state.items.splice(action.id, 1)
    return {
      items: [...state.items]
    }
    case 'CHECKED_ITEMS' : {
      state.items[action.id].done = !state.items[action.id].done;
      return {
        items: [...state.items]
      }
    }
    case  "UNDO" : {
    var undoitem = state.items.splice(state.items.length-1,1)
      return {
        ...state,
        items : [...state.items],
        redo : [...state.redo,...undoitem] ,

      } 
    }
    case  "REDO" : { 
      var redoitem = state.redo.splice(state.redo.length-1,1)
      return {
        ...state,
        items : [...state.items, ...redoitem],
        redo :[...state.redo]
      }
    }
    default:
      return state;
  }
}