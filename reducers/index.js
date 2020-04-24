import { GET_DECKS } from '../actions'

export default function deckReducer(state = {}, action) {
  switch(action.type) {
    case GET_DECKS:
      return action.decks
    default:
      return state
  }
}