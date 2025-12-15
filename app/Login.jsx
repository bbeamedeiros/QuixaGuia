import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function LoginPage() {
    return (
        <View style={styles.container}>
            {/*Título*/}
            <View style={styles.header}>
                <Text style={styles.logoRed}>Quixa<Text style={styles.logoGreen}>Guia</Text>
                </Text>
                <Text variant= "bodyMedium" style={styles.subtitle}>Hospitalidade e Mobilidade Urbana</Text>
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
                    placeholder="******"
                    secureTextEntry
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
            </View> 
            {/*Botão de Login*/}
                <Button 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width, // Garante que ocupa a largura total da página no ScrollView
        flex: 1,
        alignItems: 'center',
        paddingTop: 130, // Alinhado com o header do BemVindo
        paddingHorizontal: 40,
        backgroundColor: '#F4FFE1',
    },
    logoRed: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#A32D2D', // Tom de vermelho
    },
    logoGreen: {
        color: '#1F5A2E', // Tom de verde
    },
    subtitle: {
        fontSize: 16,
        color: '#333',
        marginBottom: 50,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    inputBox: {
        width: '100%',
        marginBottom: 25,
    },
    label: {
        position: 'absolute',
        top: -10,
        left: 15,
        backgroundColor: '#F4FFE1',
        zIndex: 1,
        paddingHorizontal: 5,
        fontSize: 12,
        color: '#1F5A2E',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1.5,
        borderColor: '#1F5A2E',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1F5A2E',
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 20,
        color: '#1F5A2E',
        textDecorationLine: 'underline',
    },
});