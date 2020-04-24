import 'react-native-gesture-handler'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import DecksList from './DecksList'
import AddDeck from './AddDeck'
import { black, white } from '../utils/colors'

const Tabs = createMaterialTopTabNavigator()

const MainNav = () => (
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
  );

  export default MainNav