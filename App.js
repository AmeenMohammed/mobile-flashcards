import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { createStore } from 'redux'
import DecksList from './components/DecksList'

const store = createStore(reducer, middleware)
export default class App extends React.Component  {
  render(){
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <DecksList />
      </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
