import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {  View } from 'react-native'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { createStore } from 'redux'
import { black } from './utils/colors'
import Constants from 'expo-constants'
import { StatusBar } from 'react-native'
import MainNav from './components/MainNav'


const store = createStore(reducer, middleware)

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component  {
  render(){
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
      <UdaciStatusBar backgroundColor={black} barStyle="light-content"/>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
      </View>
      </Provider>
    )
  }
}
