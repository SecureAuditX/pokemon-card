import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import PokemonCard from './components/PokemonCard';

export default function App() {
  // Charmander character
    const charmanderData = {
        name: "charmander",
        image: require("./assets/charmander.png"),
        type: "Fire",
        hp: 39,
        moves: ["Scratch", "Ember", "Growl", "Leer"],
        weaknesses: ["Water", "Rock"]
    }
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...charmanderData}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
