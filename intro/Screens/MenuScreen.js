import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import { Button } from 'react-native-web';
import TextInputScreen from './TextInputScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';
import ActivityScreen from './ActivityScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import FlatScreen from './FlatScreen';
import Repaso1Screen from './Repaso1Screen';
import ScrollScreen2 from './ScrollScreen2';


export default function MenuScreen () {
    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'TextInput':
            return <TextInputScreen/>
        case 'image':
            return <ImageScreen/>
        case 'scroll':
            return <ScrollScreen/>
        case 'activity':
            return <ActivityScreen/>
        case 'flatlist':
            return <FlatScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomsheet':
            return <BottomSheetScreen/>
        case 'repaso1':
            return <Repaso1Screen/>
        case 'ScrollScreen2':
            return <ScrollScreen2/>
        case 'menu':
            default: 
                return (
                    <View>
                        <Text> Menu de Practicas </Text>
                        <Button onPress={() => setScreen('contador')} title="Pract: Contador"/>
                        <Button onPress={() => setScreen('botones')} title="Pract: Botones"/>
                        <Button onPress={() => setScreen('TextInput')} title="Pract: TextInput"/>
                        <Button onPress={() => setScreen('image')} title="Pract: Image"/>
                        <Button onPress={() => setScreen('scroll')} title="Pract: ScrollView"/>
                        <Button onPress={() => setScreen('activity')} title="Pract: ActivityIndicator"/>
                        <Button onPress={() => setScreen('modal')} title="Pract: Modal"/>
                        <Button onPress={() => setScreen('bottomsheet')} title="Pract: BottomSheet"/>
                        <Button onPress={() => setScreen('flatlist')} title="Pract: FlatList"/>
                        <Button onPress={() => setScreen('repaso1')} title="Pract: Repaso 1"/>
                        <Button onPress={() => setScreen('ScrollScreen2')} title="Pract: ScrollScreen2"/>
                    </View>
                )

    }
}
const styles = StyleSheet.create({})
