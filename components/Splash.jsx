import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

//tela do app
//o navegation permite mudar de tela
export default function Splash({ navigation }) {
    userEffect (() => {
        //tempo de espera
        const timer = setTimeout(() => {
            //navega para a tela de bem-vindo
            navegation.replace ('Bem-vindo');
        }, 1500);  // 1500 equivale a 1,5 segundos
        
        return () => clearTimeout(time);
    }, []);

    return (
        <View style={styles.container}>
            <text style={styles.logo}>LOGO</text>
        </View>
    );
}
