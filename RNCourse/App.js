import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your course goal!' style={styles.textInput}/>
        <Button title='Add goal'/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 50
  },
  textInput:{
    borderWidth: 1,
    borderColor: 'blue',
    padding: 15,
  }
});
