import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello Sexy World 1</Text>
      <Text style={styles.dummyText}>Hello Sexy World 2</Text>
      <Button title='Click me!' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    borderWidth: 1,
    borderColor: 'blue',
    margin: 16,
    padding: 16,
  }
});
