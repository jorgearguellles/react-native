import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setIsModalVisible(true);
  };

  function endAddGoalHandler(){
    setIsModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals( currentCourseGoals => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  };
  
  function deleteGoalHandler(id){
    setCourseGoals( currentCourseGoals => {
      return currentCourseGoals.filter( (goal) => goal.id !== id)
      
    })
  };

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal !'
        color='#5e0acc' 
        onPress={startAddGoalHandler}
      />
      { isModalVisible 
        ? <GoalInput 
            onAddGoal={addGoalHandler}
            visible={isModalVisible}
            endAddGoalHandler={endAddGoalHandler}
            /> 
        : null
      }
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals} 
          renderItem={ (itemData) => {
            return (
              <GoalItem 
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            )
          }} 
          keyExtractor={ (item, index) => item.id }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    padding: 10,
    flex: 5,
  },
});
