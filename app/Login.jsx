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
                <Text 
                variant= "bodyMedium"
                fontSize={16} 
                marginBottom={40}
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
                    placeholder="******"
                    secureTextEntry
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
            </View> 
            {/*Botão de Login*/}
                <Button 
                    mode="contained"
                    onPress={() => {}}
                    buttonColor='#1F5A2E'
                    contentStyle={{height: 50, width: 205}}
                    justifyContent= 'center'
                    style={{marginTop: 30, borderRadius: 25}}
                > Entrar </Button>
            {/*Esqueci minha senha*/}
            <Button 
                mode="text"
                onPress={() => {}}
                textColor='#0E3014'
                marginTop={4}
            > Esqueceu a senha? </Button>
            {/* Criar Conta */}
            <Button 
                mode="text"
                onPress={() => {}}
                textColor='#9D1B1B'
            > Criar Conta </Button>

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
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logoRed: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#A32D2D', // Tom de vermelho
    },
    logoGreen: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#1F5A2E', // Tom de verde
    },
    inputContainer: {
        width: '100%',
        gap: 24,
    },
    input: {
        backgroundColor: '#F4FFE1',
    },
});