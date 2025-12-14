import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

//tela do app
//o navegation permite mudar de tela
export default function Splash() {
    const router = useRouter();

    useEffect (() => {
        //tempo de espera
        const timer = setTimeout(() => {
            //navega para a tela de bem-vindo
            router.replace ('/BemVindo');
        }, 2000);  // 2000 equivale a 1,5 segundos
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/QUIXAGUIA.png')}
                style={styles.logo}
                resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4FFE1'
    },
    logo: {
        width: 305.25,
        height: 93.77,
    },
});
