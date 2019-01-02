export const addtodo = (value) => {
  // console.log("check1",value)
  return {
    type:"ADDLIST",
    value 
  }
}

export const deletetodo = (id) => {
  // console.log(id)
  return {
    type:"DELETLIST",
    id
  }
}

export const checked = (id) => {
  return {
    type : "CHECKED_ITEMS",
    id
  }
}