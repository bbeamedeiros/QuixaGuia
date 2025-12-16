import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { useFonts, TiltWarp_400Regular } from '@expo-google-fonts/tilt-warp';
import {
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_700Bold
} from '@expo-google-fonts/urbanist';

const { width } = Dimensions.get('window');

export default function LoginPage() {
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
            {/*Formulário de Login*/}
            <View style={styles.inputContainer}>
                <TextInput
                    label="Usuário"
                    mode="outlined"
                    placeholder="Digite seu usuário"
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />

                <TextInput
                    label="Senha"
                    mode="outlined"
                    placeholder="   ******"
                    secureTextEntry
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
            </View>
            {/*Botão de Login*/}
            <Button
                mode="contained"
                onPress={() => { }}
                buttonColor='#1F5A2E'
                contentStyle={{ height: 50, width: 205 }}
                style={{ marginTop: 30, borderRadius: 25 }}
                labelStyle={{ fontFamily: 'Urbanist_700Bold' }}
            > Entrar </Button>
            {/*Esqueci minha senha*/}
            <Button
                mode="text"
                onPress={() => { }}
                textColor='#0E3014'
                marginTop={4}
                labelStyle={{ fontFamily: 'Urbanist_500Medium' }}
            > Esqueceu a senha? </Button>
            {/* Criar Conta */}
            <Button
                mode="text"
                onPress={() => router.push('/CriarConta')}
                textColor='#9D1B1B'
                labelStyle={{ fontFamily: 'Urbanist_500Medium' }}
            > Criar Conta </Button>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width, // Garante que ocupa a largura total da página no ScrollView
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
    inputContainer: {
        width: '100%',
        gap: 24,
    },
    input: {
        backgroundColor: '#F4FFE1',
    },
});