import { View, Text, StyleSheet } from 'react-native'

export function Header() {
  return (
    <View>
    
      <View style={[styles.form1, styles.container, styles.align_voltar]}>
        <Text style={[styles.name, styles.align_text_voltar]}>Voltar</Text>
      </View>
    
      <View style={[styles.container, styles.form2, styles.align_menu]}>
        <Text style={[styles.name, styles.align_text_menu]}>Menu</Text>
      </View>
      <View>
        <Text style={[styles.name, styles.align_ym]}>YM</Text>
      </View>
      <View style={[styles.container, styles.align_biblioteca]}>
        <Text style={[styles.name, styles.align_text_biblioteca]}>Biblioteca</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F1F',
  },

  name: {
    color: '#D9D9D9'
  },

  align_ym: {
    textAlign: 'center',
    color: '#D9D9D9',
    fontSize: 22,
    fontWeight: 'bold'
  },

  align_menu: {
    margin: -19,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 300
  },

  align_text_menu: {
    textAlign: 'center'
  },

  align_voltar: {
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 295
  },

  align_text_voltar: {
    textAlign: 'center'
  },

  align_biblioteca: {
    marginRight: 140,
    marginLeft: 140,
    borderRadius: 10,
    marginTop: 30
  },

  align_text_biblioteca: {
    textAlign: 'center'
  },

  form1: {
    marginRight: 250
  },

  form2: {
    marginLeft: 250
  }
})