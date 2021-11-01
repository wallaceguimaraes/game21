import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles/pages/start';
import Glass from './src/assets/icons/glass.svg';

export default function Start() {
 return (
    <View>
        <ImageBackground source={require('../assets/background/background.png')} style={styles.imageBackground}> 
            <Text>Vamos iniciar...</Text>
            <Text>Você começa!</Text>
            <Glass width={64} height={64}/>    
        </ImageBackground>
    </View>
    );
}


