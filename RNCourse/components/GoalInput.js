import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

function GoalInput(props){
  const { onAddGoal, visible } = props;
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  function closeModalHandler(){
    console.log('Close Modal')
  }

  return (
    <Modal visible={visible} animationType="slide">  
      <View style={styles.inputContainer}>
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
              />
          </View>
          <View style={styles.button}>
            <Button 
              title='Cancel' 
              onPress={closeModalHandler}
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
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button:{
    width: 100,
    marginHorizontal: 8,
  }
});