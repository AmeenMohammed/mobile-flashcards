import { GET_DECKS, ADD_DECK } from '../actions'

export default function deckReducer(state = {}, action) {
  switch(action.type) {
    case GET_DECKS:
      return {
          ...state,
          ...action.decks
        }
    case ADD_DECK:
      return{
        ...state,
        ...action.deck
      }    
    default:
      return state
  }
}