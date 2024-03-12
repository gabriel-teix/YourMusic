import { View, Image, StyleSheet } from 'react-native'

export function Foto() {
  return(
    <View>
      <Image style={styles.foto_album} source={require('../assets/es2.jfif')} />
    </View>
  )
}

const styles = StyleSheet.create({
  foto_album: {
    height: 200,
    width: 200,
    marginTop: 50,
    alignSelf: 'center'
  }
})