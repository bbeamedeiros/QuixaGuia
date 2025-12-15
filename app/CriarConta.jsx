import React, { useState } from 'react';
import {View, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {Text, TextInput, Button, IconButton} from 'react-native-paper';
import { router, useRouter } from 'expo-router';    

const { width } = Dimensions.get('window');

const header = ({router, onBack})

export default function CriarConta() {
    const router = useRouter();
    const [step, setStep] = useState(1);

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
    {/*atualizar os dados do formulário */}
    const handleChange = (name, value) => {
        setDados({
            ...dados,
            [name]: value
        });
    };
    
