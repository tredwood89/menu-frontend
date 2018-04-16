import { flashCardInfo } from '../FlashCards'

const defaultState = {

  menu:[],
  selectedItem:{},
  flashCard:{},
  cardClicked:false,
  filteredItems:[]
  }


export const menu_reducer = ( state=defaultState, action) => {
  switch (action.type) {

    case 'LOAD_MENU':
      return {
        ...state,
        menu: [...state.menu, action.payload.data]
      }

    case 'SELECT_ITEM':
      return {
        ...state,
          selectedItem: action.payload
      }
    case 'GET_CARD':
      let number = Math.floor((Math.random() * 5) + 1)
      return {
        ...state,
      flashCard:flashCardInfo[number],
      cardClicked:false,
      selectedItem:{}

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