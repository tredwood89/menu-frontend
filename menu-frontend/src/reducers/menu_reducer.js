import { flashCardInfo } from '../FlashCards'

const defaultState = {

  menu:[],
  selectedItem:{},
  flashCard:{},
  cardClicked:false,
  filteredItems:[],
  menuTitle:"",
  flashCardOption:false
  }


export const menu_reducer = ( state=defaultState, action) => {
  switch (action.type) {

    case 'LOAD_MENU':
    console.log(action.payload.data);
    let menuTitle = state.menuTitle
    let menuData = action.payload.data
    let itemArr = menuData.filter( item => {
      return item.attributes.menu === menuTitle
    })
    console.log(itemArr);
      return {
        ...state,
          menu: [...state.menu, itemArr]
      }

      case 'MENU_ID':
      // console.log('here');
      // console.log(action.payload);
        return {
          ...state,
            menuTitle:action.payload
        }

    case 'SELECT_ITEM':
      return {
        ...state,
          selectedItem: action.payload
      }
    case 'GET_CARD':
    console.log(flashCardInfo);
      let number = Math.floor((Math.random() * 5) + 1)
      let option = state.flashCardOption
      return {
        ...state,
      flashCard:flashCardInfo[option][number],
      cardClicked:false,
      selectedItem:{}

      }
      case 'SET_FLASHCARD':
      console.log(action.payload);
        return {
          ...state,
            flashCardOption:action.payload
        }

      case 'FLIP_CARD':
        return {
          ...state,
          cardClicked:!state.cardClicked
        }

      case 'ADD_RECO':
      let originalMenu = [...state.menu][0]
      let newMenu

      state.filteredItems.length === 0 || state.filteredItems[0].length === 0 ? newMenu = originalMenu : newMenu = [...state.filteredItems][0]


        let matchVal = action.payload[0][1].matchValue
        let filterVal = action.payload[0][1].sortValue

          let filteredMenu = newMenu.filter( item => {
            return  Array.isArray(item.attributes[filterVal]) ? !(item.attributes[filterVal].includes(matchVal)) : null || item.attributes[filterVal] === matchVal

          })

        return {
          ...state,
            filteredItems: [ filteredMenu ]
        }

        case 'REMOVE_RECO':
          let actionOptions = action.payload
          let origMenu = [...state.menu][0]

          let newFilterMenu = actionOptions.reduce( (filtered, option) => {
            let filterVal = option[1].sortValue
            let matchVal = option[1].matchValue
            let filterHolder
            filtered.length === 0 ? filterHolder = origMenu : filterHolder = filtered
              filtered = []
              filterHolder.forEach( item => {

                if( (Array.isArray(item.attributes[filterVal]) ? !(item.attributes[filterVal].includes(matchVal)) : null) || item.attributes[filterVal] === matchVal ){
                    filtered.push(item)
                }

              })
              return filtered

          },[])

          return {
            ...state,
            filteredItems:[ newFilterMenu ]
          }

    default:
      return state

  }
}
