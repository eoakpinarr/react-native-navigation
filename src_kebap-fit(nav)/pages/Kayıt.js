import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Buton from '../components/Buton'
import Input from '../components/Input'
import { useNavigation } from '@react-navigation/native'

const Kayıt = () => {

    const navigation = useNavigation()

    const [ad, setAd] = useState();
    const [soyad, setSoyad] = useState();
    const [yaş, setYas] = useState();
    const [email, setEmail] = useState();
    const [memleket, setMemleket] = useState();

    function handeSubmit() {
        if (!ad || !soyad || !yaş || !email || !memleket) {
            Alert.alert('Hiçbir Bilgi Boş Bırakılamaz');
            return;
        }

        console.log(ad, soyad, yaş, email, memleket)

        const user = { ad, soyad, yaş, email, memleket }

        navigation.navigate('Info', { user });
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.okyanusfly.com/wp-content/uploads/fitnessmi-body-buildingmi.jpg' }}
                style={{ width: '100%', height: '40%' }}
            />
            <Input text={'Adınız'} input={'Adınızı Girin...'} change={ad} onChangeText={setAd} />
            <Input text={'Soyadınız'} input={'Soyadınızı Girin...'} change={soyad} onChangeText={setSoyad} />
            <Input text={'Yaşınız'} input={'Yaşınızı Girin...'} change={yaş} onChangeText={setYas} />
            <Input text={'E-mail'} input={'E-mail Adresinizi Girin...'} change={email} onChangeText={setEmail} />
            <Input text={'Memleketiniz'} input={'Memleketinizi Girin...'} change={memleket} onChangeText={setMemleket} />
            <Buton text={'Kayıt Ol'} onPress={handeSubmit}/>
        </View>
    )
}

export default Kayıt

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})
