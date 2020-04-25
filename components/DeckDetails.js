import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'
import { connect } from 'react-redux'
import { black, white } from '../utils/colors';

class DeckDetails extends Component{
    render(){
        return(
            <View style={styles.deckCard}>
            <View>
              <Text style={styles.deckTitle}>{this.props.deck.title}</Text>
              <Text style={styles.cardNumber}>This deck has {this.props.deck.questions.length} cards</Text>
            </View>
            <View>
              <Button 
                title="Start Quiz"
                color={black}
                />
              <Button  
                title="Add Card"
                color={black}
              />
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
    deckCard: {
      flex: 1,
      justifyContent: 'space-around',
      margin: 25,
      padding: 25,
      backgroundColor: white,
    },
    deckTitle: {
      fontSize: 23,
      marginBottom: 5,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    cardNumber: {
      fontSize: 15,
      textAlign: 'center'
    }
  });
  function mapStateToProps(state, {route}) {
      const {title} = route.params
    return { deck: state[title] }
  }
export default connect(mapStateToProps)(DeckDetails)