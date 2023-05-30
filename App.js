import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';
import Welcome from './assets/screens/Welcome';
import W2 from './assets/screens/W2';
export default function App() {
  return (
       <Welcome/>
     // <W2/>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
