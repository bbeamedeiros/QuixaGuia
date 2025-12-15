import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import { router, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
//header personalizado - recebe tres props 
const header = ({ router, onBack, title }) => (
    <View style={styles.header}>
        <IconButton
            icon="arrow-left"
            size={24}
            onPress={onBack ? onBack : () => router.back()}
        />
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
);


export default function CriarConta() {
    const router = useRouter();
    const [step, setStep] = useState(1); //vai começar na primeira etapa

    const [dados, setDados] = useState({
        nome: '',
        sobrenome: '',
        endereço: '',
        número: '',
        bairro: '',
        email: '',
        username: '',
        senha: '',
        confirmarSenha: ''
    });
    {/*atualizar os dados do formulário */ }
    const atualizaCampo = (name, value) => {
        setDados({
            ...dados,
            [name]: value
        });
    };
    {/*função para voltar*/ }
    const voltarEtapa = () => {
        if (step > 1) {
            setStep(step - 1); //voltar etapa
        } else {
            router.back(); // se estiver na primeira etapa, volta para a tela anterior
        }
    }

    {/*1 - ESCOLHA O USUARIO */ }

    const renderStep1 = () => (
        <View style={styles.stepContainer}>
            {/*novo morador e proprietario*/}
            <Text style={styles.stepTitle}>Antes de iniciar o cadastro, qual dessas opções você se encaixa:</Text>
            <Button
                mode='contained'
                onPress={() => setStep(2)}
                buttonColor='#9D1B1B'
                style={style.stepButton}
                contentStyle={styles.stepButtonContent}
            >
                Novo Morador
            </Button> {/*mudar para a etapa 2*/}
            <Button
                mode='contained'
                onPress={() => setStep(2)}
                buttonColor='#9D1B1B'
                style={style.stepButton}
                contentStyle={styles.stepButtonContent}
                onPress={() => { }}
            >
                Proprietário
            </Button>
        </View>
    );
    
    {/*2 - DADOS PESSOAIS */ }
    const renderStep2 = () => (
        <KeyboardAvoidingView>
            <ScrollView>
                <Button onPress={() => setStep(3)}>Próximo</Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
    {/*3 - CADASTRO FINALIZADO */ }
    const renderStep3 = () => (
        <KeyboardAvoidingView>
            <ScrollView>
                <Button onPress={() => { }}>Cadastrar</Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );

    return (
        <View style={styles.container}>
            <Header router={router} onBack={voltarEtapa} title="Criar Conta" />

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}

        </View>
    );

