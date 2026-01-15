import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, TiltWarp_400Regular } from '@expo-google-fonts/tilt-warp';
import {
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_700Bold
} from '@expo-google-fonts/urbanist';
//tela do app
//o navegation permite mudar de tela

export default function Splash() {
    const router = useRouter();

    useEffect(() => {

        //tempo de espera
        const timer = setTimeout(() => {
            //navega para a tela de bem-vindo
            router.replace('/BemVindo');
        }, 1500);  // 2000 equivale a 1,5 segundos

        return () => clearTimeout(timer);
    }, []);

    let [fontsLoaded] = useFonts({
        TiltWarp_400Regular,
        Urbanist_400Regular,
        Urbanist_500Medium,
        Urbanist_700Bold,
    });


    return (
        <View style={styles.container}>
            {/*Título*/}
            <View style={styles.header}>
                <Text style={styles.logoRed}>Quixa<Text style={styles.logoGreen}>Guia</Text></Text>

                <Text
                    variant="bodyMedium"
                    style={styles.subtitle}
                >Hospitalidade e Mobilidade Urbana</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#F4FFE1',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logoRed: {
        fontFamily: 'TiltWarp_400Regular',
        fontSize: 50,
        color: '#A32D2D', // Tom de vermelho
    },
    logoGreen: {
        fontFamily: 'TiltWarp_400Regular',
        color: '#1F5A2E', // Tom de verde
    },
    subtitle: {
        fontFamily: 'Urbanist_400Regular',
        fontSize: 16,
        color: '#0E3014',
        marginTop: -14,
    },
});
