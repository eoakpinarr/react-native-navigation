import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buton from '../components/Buton'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

  const navigation = useNavigation()
  
  function onPressFunc() {
    navigation.navigate('Kayıt')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kebap Fitness Salonu</Text>
      <Buton text={'Kayıt Oluştur'} onPress={onPressFunc} />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
})