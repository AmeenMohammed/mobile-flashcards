import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { addCardToDeck } from '../utils/api';
import { red } from '../utils/colors';
import { connect } from 'react-redux';
import { addCard } from '../actions';

class AddCard extends Component {
  state = { 
    question: '',
    answer: '',
    questionTooShort: false,
    answerTooShort: false
  };

  createCard = () => {  
      const { dispatch, title } = this.props
    if(this.state.question.length > 6 && this.state.answer.length > 1) {
      const cardObj = {
        question: this.state.question,
        answer: this.state.answer
      }
      addCardToDeck(title, cardObj)
      dispatch(addCard(title, cardObj))
      this.setState({ 
        question: '',
        answer: ''
      })
      this.props.navigation.navigate('DeckDetails', { title: title })
    } else {
        this.setState({
            questionTooShort:true,
            answerTooShort:true
        })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.questionTooShort === true && <Text style={styles.error}>The question is too short!</Text>}
        <TextInput
          placeholder="Enter ur Question"
          underlineColorAndroid='#000'
          style={styles.input}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          onFocus={() => this.setState({ question: '', questionTooShort: false })}
        />
        {this.state.answerTooShort === true && <Text style={styles.error}>The answer is too short!</Text>}
        <TextInput
          placeholder="Enter ur Answer"
          underlineColorAndroid='#000'
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          onFocus={() => this.setState({ answer: '', answerTooShort: false })}
        />
          <Button title='Add Card' color="#000" onPress={this.createCard}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  error: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: red
  },
  input: {
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 17
  }
});
function mapStateToProps( state, {route}) {
    const {title} = route.params
  return { title }
}
export default connect(mapStateToProps)(AddCard);