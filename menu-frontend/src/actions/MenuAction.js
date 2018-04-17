export const fetchMenu = (menuItems) => {

  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/items')
      .then((res)=>res.json())
      .then((menuItems)=> dispatch({
        type: 'LOAD_MENU',
        payload: menuItems
      }))
  }
}

export const menuSelect = (menuId) => {
  return {
    type: 'MENU_ID',
    payload:menuId
  }
}

export const selectItem = (menuItem) => {
  return {
    type: 'SELECT_ITEM',
    payload: menuItem
  }
}

export const getFlashCard = () => {
  return {
    type: 'GET_CARD'

  }
}

export const flipCard = () => {
  return {
    type: 'FLIP_CARD'
  }
}

export const addRecomendation = (options) => {
  return {
    type: 'ADD_RECO',
    payload:options
  }
}

export const removeRecomendation = (options) => {

  return {
    type: 'REMOVE_RECO',
    payload:options
  }
}
