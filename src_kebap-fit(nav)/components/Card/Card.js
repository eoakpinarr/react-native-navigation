import { View, Text } from 'react-native'
import React from 'react'
import styles from './Card.style'

const Card = ({ad,soyad,yaş,email,memleket}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Kullanıcı Adı: {ad}</Text>
            <Text style={styles.text}>Kullanıcı Soyadı: {soyad}</Text>
            <Text style={styles.text}>Kullanıcı Yaşı: {yaş}</Text>
            <Text style={styles.text}>Kullanıcı E Maili: {email}</Text>
            <Text style={styles.text}>Kullanıcı Memleketi: {memleket}</Text>
        </View>
    )
}

export default Card