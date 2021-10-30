import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles/start';

export default function Start() {
 return (
    <View>
        <ImageBackground source={require('../assets/background/background.png')} style={styles.imageBackground}> 
            <Text>Vamos iniciar...</Text>
            
            <Text>Você começa!</Text>
        </ImageBackground>
    </View>
    );
}


