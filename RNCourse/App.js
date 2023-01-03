import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your course goal!' style={styles.textInput}/>
        <Button title='Add goal' style={styles.button}/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 100,
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 15,
  }
});
