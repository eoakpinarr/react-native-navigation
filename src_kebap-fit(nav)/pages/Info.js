import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const Info = ({route}) => {

  const {user} = route.params

  return (
    <SafeAreaView>
      <Card 
      ad= {user.ad}
      soyad= {user.soyad}
      yaş= {user.yaş}
      email= {user.email}
      memleket= {user.memleket}
      />
    </SafeAreaView>
  )
}

export default Info

const styles = StyleSheet.create({})