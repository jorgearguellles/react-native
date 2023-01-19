import { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

function GoalInput(props){
  const { onAddGoal } = props;
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler(){
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder='Your course goal!'
        style={styles.textInput} 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button 
        title='Add goal' 
        style={styles.button} 
        onPress={addGoalHandler}
      />
    </View>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});