import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import {black} from '../utils/colors'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api';
import {addDeck} from '../actions'
import {CommonActions} from '@react-navigation/native';

class AddDeck extends Component{
    state = {
        title:''
    }
    AddNewDeck = () => {
      const { dispatch } = this.props
        saveDeckTitle(this.state.title)
        const deck = {
          [this.state.title]: {
            title: this.state.title,
            questions: []
          }
        }
        dispatch(addDeck(deck))
        this.toHome()
        this.setState({ title: '' }); 
    }
    toHome = () => {
      this.props.navigation.dispatch(
          CommonActions.goBack({
              key: 'DecksList',
          }))
        }
    
    render(){
        return(
            <View style={styles.container}>
            <TextInput
              placeholder="Enter Deck Name"
              style={styles.titleInput}
              onChangeText={title => this.setState({ title })}
              value={this.state.title}
              onFocus={() => this.setState({ title: ''})}
            />
              <Button 
                    title="Add Deck"
                    onPress={this.AddNewDeck}
                    color={black}
                    />
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-start',
    },
    titleInput: {
      padding: 10,
      marginTop: 35,
      marginBottom: 10,
      fontSize: 17
    },

  });
export default connect()(AddDeck)