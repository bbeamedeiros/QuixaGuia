import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Text, TextInput, Button, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
//header personalizado - recebe tres props 
const Header = ({ router, onBack, title }) => (
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
            <View style={styles.logo}>
                <Text style={styles.logoRed}>Quixa<Text style={styles.logoGreen}>Guia</Text></Text>
            </View>

            <Text style={styles.stepTitle}>
                Antes de iniciar o cadastro, qual dessas opções você se encaixa:
            </Text>

            <Button
                mode='contained'
                onPress={() => setStep(2)}
                buttonColor='#9D1B1B'
                style={styles.stepButtonInicial}
                contentStyle={styles.stepButtonContent}
            >
                Novo Morador
            </Button>
            
            {/* Botão de proprietário */}
            <Button
                mode='contained'
                onPress={() => setStep(2)}
                buttonColor='#9D1B1B'
                style={styles.stepButton}
                contentStyle={styles.stepButtonContent}
            >
                Proprietário
            </Button>
        </View>
    );
    {/*2 - DADOS PESSOAIS */ }
    const renderStep2 = () => (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.stepContainer2}>
                <Text style={styles.stepTitle}>Por favor, preencha seus dados pessoais:</Text>

                {/*nome */}
                <TextInput
                    label="Nome*"
                    mode="outlined"
                    value={dados.nome}
                    onChangeText={(text) => atualizaCampo('nome', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                {/*sobrenome */}
                <TextInput
                    label="Sobrenome*"
                    mode="outlined"
                    value={dados.sobrenome}
                    onChangeText={(text) => atualizaCampo('sobrenome', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <TextInput
                    label="Endereço*"
                    mode="outlined"
                    value={dados.endereço}
                    onChangeText={(text) => atualizaCampo('endereço', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <TextInput
                    label="Número*"
                    mode="outlined"
                    value={dados.número}
                    onChangeText={(text) => atualizaCampo('número', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <TextInput
                    label="Bairro*"
                    mode="outlined"
                    value={dados.bairro}
                    onChangeText={(text) => atualizaCampo('bairro', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <Button
                    onPress={() => setStep(3)}
                    mode='contained'
                    buttonColor='#9D1B1B'
                    style={styles.stepButton}
                    contentStyle={styles.stepButtonContent}
                >
                    Próximo
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>
    );
    {/*3 - CADASTRO FINALIZADO */}
    const renderStep3 = () => (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.stepContainer2}>
                <Text style={styles.stepTitle}> Finalize o seu cadastro:</Text>
                <TextInput
                    label="Email*"
                    mode="outlined"
                    value={dados.email}
                    onChangeText={(text) => atualizaCampo('email', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <TextInput
                    label="Nome de Usuário*"
                    mode="outlined"
                    value={dados.username}
                    onChangeText={(text) => atualizaCampo('username', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <TextInput
                    label="Senha*"
                    mode="outlined"
                    value={dados.senha}
                    onChangeText={(text) => atualizaCampo('senha', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <TextInput
                    label="Confirmar Senha*"
                    mode="outlined"
                    value={dados.confirmarSenha}
                    onChangeText={(text) => atualizaCampo('confirmarSenha', text)}
                    outlineColor='#1F5A2E'
                    activeOutlineColor="#1F5A2E"
                    style={styles.input}
                />
                <Button
                    onPress={() => { }}
                    mode='contained'
                    buttonColor='#9D1B1B'
                    style={styles.stepButton}
                    contentStyle={styles.stepButtonContent}
                >
                    Cadastrar
                </Button>
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
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4FFE1',
        padding: 20,
    },
    header: {
        position: 'absolute',
        top: 40,
        height: 60,
        backgroundColor: '#F4FFE1',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    stepContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 40,
    },
    logoRed: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#A32D2D', // Tom de vermelho
    },
    logoGreen: {
        fontWeight: 'bold',
        color: '#1F5A2E', // Tom de verde
    },
    stepTitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#0F100D',
    },
    stepButtonInicial: {
        width: '70%',
        marginVertical: 10,
        borderRadius: 25,
    },
    stepContainer2: {
        paddingTop: 150,
        padding: 20,
    },
    input: {
        width: '100%',
        marginBottom: 15,
        backgroundColor: '#F4FFE1',
    },
    stepButton: {
        width: '70%',
        alignSelf: 'center',
        borderRadius: 25,
    },
    stepButtonContent: {
        height: 50,
    },
});
