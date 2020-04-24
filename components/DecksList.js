import React, { Component} from 'react' 
import { Text, FlatList, StyleSheet, View  } from 'react-native'
import { getAllDecks } from '../actions'
import { connect } from 'react-redux'
import { white, black, gray} from '../utils/colors'
class DecksList extends Component{

    componentDidMount(){
        const {dispatch} = this.props
        dispatch(getAllDecks())
    }
    render(){
        return(
            <FlatList 
            style={styles.list}
            data={Object.values(this.props.decks)}
            keyExtractor={(item)=>item.title}
            renderItem={({ item }) => (
            <View style={styles.deckItem}>
                <Text style={styles.deckTitle}>{item.title}</Text>
                <Text style={styles.cardNumber}>Cards: {item.questions.length}</Text>
              </View>
            )}
          />
        )
    }
}
const styles = StyleSheet.create({
    list: {
      flex: 1,
      alignSelf: 'stretch',
      marginTop: 5,
      padding: 10
    },
    deckItem: {
        backgroundColor: black,
        marginBottom: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 10, height: 10 },
      },
      deckTitle: {
        marginBottom: 5,
        fontSize: 18,
        color: white,
      },
      cardNumber: {
        color: gray,
        fontSize: 15
      }
  });
function mapStateToProps(decks){
    return{
        decks
    }
}
export default connect(mapStateToProps)(DecksList)