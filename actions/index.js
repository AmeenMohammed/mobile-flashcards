import { getDecks } from '../utils/api'

export const GET_DECKS = 'GET_DECKS'

export function getAllDecks() {
  return (dispatch) => {
    getDecks()
      .then((decks) => {
        dispatch({
          type: GET_DECKS, 
          decks
        })
      })
  }
}
