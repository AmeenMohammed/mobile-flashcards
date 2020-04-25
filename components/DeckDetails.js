import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'
import { connect } from 'react-redux'
import { black, white } from '../utils/colors';

class DeckDetails extends Component{
  navigateToAddCard = (e, title)=>{
    e.preventDefault()
    this.props.navigation.navigate(
      'AddCard',
      {title:title}
      )
  }
  navigateToQuiz = (e, title)=>{
    e.preventDefault()
    this.props.navigation.navigate(
      'Quiz',
      {title:title}
      )
  }
    render(){
        return(
            <View style={styles.deckCard}>
            <View>
              <Text style={styles.deckTitle}>{this.props.deck.title}</Text>
              <Text style={styles.cardNumber}>This deck has {this.props.deck.questions.length} cards</Text>
            </View>
            <View>
              <Button 
                onPress={(e) => this.navigateToQuiz(e, this.props.deck.title)}
                title="Start Quiz"
                color={black}
                />
              <Button  
                onPress={(e) => this.navigateToAddCard(e, this.props.deck.title)}
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