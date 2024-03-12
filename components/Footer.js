import { View, Text, StyleSheet } from 'react-native'

export function Footer() {
  return(
    <View>
      <View style={styles.style_view}></View>
      <View style={styles.container}>
        <Text style={[styles.name, styles.align_text_sr]}>4. Saturn Returns</Text>
      </View>
      <View>
        <Text style={[styles.align_text_ag, styles.name]}>Ariana Grande</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 20,
  },
  
  name: {
    color: '#ffffff'
  },

  align_text_ag: {
    textAlign: 'center',
    marginTop: -95,
    fontSize: 12,
    opacity: '0.70'
  },

  align_text_sr: {
    textAlign: 'center',
    marginBottom: 80,
    margin: -5,
    fontSize: 15
  },

  style_view: {
    backgroundColor: '#ffffff',
    height: 1,
    marginRight: 100,
    marginTop: 50
  }
})