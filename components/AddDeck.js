import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import {black} from '../utils/colors'
class AddDeck extends Component{
    state = {
        title:''
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
              <Button title="Add Deck"
                     color={black}/>
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
export default AddDeck