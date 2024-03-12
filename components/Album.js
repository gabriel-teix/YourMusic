import { View, Text, StyleSheet } from 'react-native'

export function Album({ musicas }) {
  return(
    <View>
      <View style={styles.align_escutando}>
        <Text style={[styles.name, styles.align_text_escutando]}>Você está escutando o álbum: </Text>
      </View>
      <View style={styles.align_es}>
        <Text style={[styles.name, styles.align_text_es]}>eternal sunshine</Text>
      </View>
      <View style={[styles.container, styles.opacity_container]}>
        <Text style={styles.name_musicas}>{musicas.join('\n')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    fontSize: 12,
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    margin: 10,
    marginTop: 30
  },

  opacity_container: {
    opacity: '0.60'
  },

  name_musicas: {
    color: '#ffffff',
  },

  name: {
    color: '#D9D9D9'
  },

  align_escutando: {
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 10
  },

  align_text_escutando: {
    textAlign: 'center'
  },

  align_es: {
    backgroundColor: '#000000',
    marginTop: 15,
    marginLeft: 120,
    marginRight: 120,
    borderRadius: 10,
    opacity: '0.60'
  },

  align_text_es: {
    textAlign: 'center'
  },
})