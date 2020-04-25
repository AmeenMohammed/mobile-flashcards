import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button, Text } from 'react-native'
import {black, red} from '../utils/colors'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api';
import {addDeck} from '../actions'

class AddDeck extends Component{
    state = {
        title:'',
        error:false
    }
    AddNewDeck = () => {
      const { dispatch } = this.props
      if(this.state.title === '' || this.state.title.length < 3){
        this.setState({
          error:true
        })
      }else{
        saveDeckTitle(this.state.title)
        const deck = {
          [this.state.title]: {
            title: this.state.title,
            questions: []
          }
        }
        dispatch(addDeck(deck))
        this.toDeck(this.state.title)
        this.setState({ title: '', error:'' }); 
      }
    }
    toDeck = (title) => {
      this.props.navigation.navigate(
         'DeckDetails',
         {title: title}
         )
       }
    
    render(){
      const { error } = this.state
        return(
            <View style={styles.container}>
            {error === true &&<Text style={styles.error}>Enter A deck name at least 3 digits!</Text>}
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
    error: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: red
    }

  });
export default connect()(AddDeck)