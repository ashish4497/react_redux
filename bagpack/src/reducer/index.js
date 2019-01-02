const initialstate = {
  items: [],
}
export default function bagpack(state = initialstate, action) {
  switch (action.type) {
    case 'ADDLIST':
      return {
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
    default:
      return state;
  }
}