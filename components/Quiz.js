import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableWithoutFeedback,
  StyleSheet,
  Button } from 'react-native'
import {CommonActions} from '@react-navigation/native'
import { connect } from 'react-redux'
import { white, black } from '../utils/colors'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'

const NoCards = () => (
  <View style={styles.noCards}>
    <Text style={styles.noCardsText}>This deck has no question cards.</Text>
  </View>
)

const ResultScreen = (props) => (
  <View style={styles.resultCard}>
    <Text style={styles.resultCardText}>Total questions answered: {props.totalAnswered}</Text>
    <Text style={styles.resultCardText}>Correct Answers: {props.correct}</Text>
    <Button title='Restart' color={black} onPress={props.restart} />
    <Button title='Go Back' color={black} onPress={props.goBack} />
  </View>
)

const ShowQuestionOrAnswer = (props) => (
  <TouchableWithoutFeedback onPress={props.toggle}>
    <View>
      {
        props.current == 'question'
        ? <Text>Show Answer</Text>
        : <Text>Show Question</Text>
      }
    </View>
  </TouchableWithoutFeedback>
)

class Quiz extends Component {
  state = { 
    currentQuestion: 0,
    correctAnswers: 0,
    show: 'question',
    showResults: false
  }

  showQuestionOrAnswer = () => {
    const show = (this.state.show) === 'question'
      ? 'answer'
      : 'question'
  
    this.setState({ show });
  }

  userAnswered(e, answer) {
      e.preventDefault()
    if(answer === 'correct') {
      this.setState({ correctAnswers: this.state.correctAnswers + 1 });
    }
    
    if(this.state.currentQuestion === this.props.questions.length -1) {
      this.setState({ showResults: true });
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
  }

  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      correctAnswers: 0,
      show: 'question',
      showResults: false
    })
    clearLocalNotification()
    .then(setLocalNotification)   
  }

  goBack = () => {
    this.props.navigation.dispatch(
        CommonActions.goBack())
  }

  render() { 
    if(this.props.questions.length === 0) {
      return <NoCards/>
    }

    if(this.state.showResults) {
      return (
        <ResultScreen 
          totalAnswered={this.props.questions.length}
          correct={this.state.correctAnswers}
          restart={this.restartQuiz}
          goBack={this.goBack}
        />
      )
    }
    
    const showingCard = this.props.questions[this.state.currentQuestion];

    return (
      <View style={styles.container}>
        <View style={styles.quizProgress}>
          <Text>Card {this.state.currentQuestion + 1}/{this.props.questions.length}</Text>
        </View>

          {
            this.state.show == 'question'
            ? <Text style={styles.questionText}>{showingCard.question}</Text>
            : <Text style={styles.answerText}>{showingCard.answer}</Text>
          }

          <ShowQuestionOrAnswer
            toggle={this.showQuestionOrAnswer}
            current={this.state.show}
          />
            <Button color={black} title='Correct' onPress={(e) => this.userAnswered(e, 'correct')}/>
            <Button color={black} title='Incorrect' onPress={(e) => this.userAnswered(e, 'incorrect')}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  noCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noCardsText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  resultCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  quizProgress: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    backgroundColor: white
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 25,
    padding: 25,
    backgroundColor: white,
  },
  questionText: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  answerText: {
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: black
  }
})

function mapStateToProps(state, {route}) {
  return { questions: state[route.params.title].questions }
}

export default connect(mapStateToProps)(Quiz)