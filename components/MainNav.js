import 'react-native-gesture-handler'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DecksList from './DecksList'
import AddDeck from './AddDeck'
import { black, white } from '../utils/colors'
import {createStackNavigator} from '@react-navigation/stack'
import DeckDetails from './DeckDetails'
import AddCard from './AddCard'
import Quiz from './Quiz'

const Tabs = createMaterialTopTabNavigator()
const Stack = createStackNavigator();

const TabNav = () => (
    <Tabs.Navigator
        initialRouteName="Decks"
        tabBarOptions={{
            header: null,
            activeTintColor: white,
            showIcon: false,
            style: {
                height: 80,
                backgroundColor: black,
                shadowColor: "rgba(0, 0, 0, 0.24)",
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }}
    >
        <Tabs.Screen name="Decks" component={DecksList}/>
        <Tabs.Screen name="Add Deck" component={AddDeck}/>
    </Tabs.Navigator>
  )
  const MainNav = () => (
      <Stack.Navigator headerMode="screen">
          <Stack.Screen
              name="Home"
              component={TabNav}
              options={{headerShown: false}}/>
        <Stack.Screen
          name="DeckDetails"
          component={DeckDetails}
          options={({ route }) => ({ 
            title: route.params.title,
            headerTintColor: white,
            headerStyle:{
                backgroundColor:black,
                },        
            }) }

          />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{
              title:"Add Card",
            headerTintColor: white,
            headerStyle:{
                backgroundColor:black,
                },        
          }}
          />
         <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={({ route }) => ({ 
            title: route.params.title,
            headerTintColor: white,
            headerStyle:{
                backgroundColor:black,
                },        
            }) }

          /> 
      </Stack.Navigator>
  )
export default MainNav