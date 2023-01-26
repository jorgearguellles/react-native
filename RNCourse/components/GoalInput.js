import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

function GoalInput(props){
  const { onAddGoal, visible, endAddGoalHandler } = props;
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={visible} animationType="slide">  
      <View style={styles.inputContainer}>
        <Image 
          source={require('../assets/images/goal.png')}
          style={styles.image}
          />
        <TextInput 
          placeholder='Your course goal!'
          style={styles.textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title='Add goal' 
              onPress={addGoalHandler}
              color={'#b180f0'}
              />
          </View>
          <View style={styles.button}>
            <Button 
              title='Cancel' 
              onPress={endAddGoalHandler}
              color={'#f31282'}
              />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer:{
    backgroundColor: '#311b6b',
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 14,

  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button:{
    width: 100,
    marginHorizontal: 8,
    color: 'red'
  }
});