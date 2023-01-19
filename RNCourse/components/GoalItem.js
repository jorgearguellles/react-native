import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props){
  const {text, onDeleteItem, id} = props;

  return(
    <View style={styles.goalItem}>
      <Pressable 
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{color: '#210644'}}
        style={ ({pressed}) => pressed ? styles.pressedItem : null} 
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem:{
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText:{
    color: 'white',
    padding: 8,
  }
});