import { getDecks } from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

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

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}