import { Text, View } from 'react-native'
import React from 'react'
import styles from './Input.style'
import { TextInput } from 'react-native'

const Input = ({ text, input, onChangeText, change }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TextInput
                style={styles.input}
                placeholder={input}
                onChangeText={onChangeText}
                value={change}
            />
        </View>
    )
}

export default Input

