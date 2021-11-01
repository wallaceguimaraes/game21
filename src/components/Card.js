import React from 'react';
import { View } from 'react-native';
import styles from '../styles/components/card';
import { LinearGradient } from 'expo-linear-gradient';



export default function Card() {
 return (

    <LinearGradient
        colors={['#ffffff', '#C3CBCE']}
        start={{ x: 0.7, y: 0.1 }}
        style={styles.card}>
        
        <View style={styles.iconUp}>

        </View>

        <Text style={styles.titleName}>Bem vindo(a) {name} !</Text>

        <View style={styles.iconDown}>

        </View>
    
    </LinearGradient>
        
  );
}