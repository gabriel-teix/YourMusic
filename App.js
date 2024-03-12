import { SafeAreaView, StyleSheet } from 'react-native'
import { Header } from './components/Header'
import { Foto } from './components/Foto'
import { Album } from './components/Album'
import { Footer } from './components/Footer'
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {

function handlePressOut() {
    
  }

  return (
    <SafeAreaView>
      <LinearGradient
        // Background Linear Gradient
        colors={['#000000', '#683D1E',]}
        style={styles.linearGradient}
      />
      <Header />
      <Foto />
      <Album 
        musicas={['1. intro (end of the world)', '2. bye', '3. dont wanna break up again', '4. Saturn Returns (interlude)', '5. eternal sunshine', '6. supernatural', '7. true story', '8. the boys is mine', '9. yes, and?', '10. we cant be friend (wait for your love)', '11. i wish i hated you', '12. the ordinary things (feat. nonna)']}
      />
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  }
})