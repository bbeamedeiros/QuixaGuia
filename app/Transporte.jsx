import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';
import React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from 'expo-router';
const { width } = Dimensions.get('window');

const ufc = [
  {
   key: 1,
   rodoviaria: [
      { nome: 'Ônibus A', horario: '07h10' },
      { nome: 'Ônibus B', horario: '07h15' },
      { nome: 'Ônibus A', horario: '07h40' },
      { nome: 'Ônibus B', horario: '07h45' },
      { nome: 'Ônibus A', horario: '09h35' },
      { nome: 'Ônibus B', horario: '11h25' },
      { nome: 'Ônibus A', horario: '11h45' },
      { nome: 'Ônibus B', horario: '12h05' },
      { nome: 'Ônibus A', horario: '12h15' },
      { nome: 'Ônibus B', horario: '12h35' },
      { nome: 'Ônibus A', horario: '12h50' },
      { nome: 'Ônibus B', horario: '13h05' },
      { nome: 'Ônibus A', horario: '13h30' },
      { nome: 'Ônibus B', horario: '15h30' },
      { nome: 'Ônibus A', horario: '16h00' },
      { nome: 'Ônibus B', horario: '17h35' },
      { nome: 'Ônibus A', horario: '17h45' },
      { nome: 'Ônibus B', horario: '18h05' },
      { nome: 'Ônibus A', horario: '18h15' },
      { nome: 'Ônibus B', horario: '18h35' },
      { nome: 'Ônibus A', horario: '18h45' },
  ],
   campus: [
   { nome: 'Ônibus A', horario: '07h25' },
      { nome: 'Ônibus A', horario: '07h30' },
      { nome: 'Ônibus A', horario: '09h20' },
      { nome: 'Ônibus B', horario: '11h10' },
      { nome: 'Ônibus A', horario: '11h20' },
      { nome: 'Ônibus B', horario: '11h40' },
      { nome: 'Ônibus A', horario: '12h00' },
      { nome: 'Ônibus B', horario: '12h20' },
      { nome: 'Ônibus A', horario: '12h30' },
      { nome: 'Ônibus B', horario: '12h50' },
      { nome: 'Ônibus A', horario: '13h15' },
      { nome: 'Ônibus B', horario: '15h15' },
      { nome: 'Ônibus A', horario: '15h45' },
      { nome: 'Ônibus B', horario: '17h20' },
      { nome: 'Ônibus A', horario: '17h30' },
      { nome: 'Ônibus B', horario: '17h50' },
      { nome: 'Ônibus A', horario: '18h00' },
      { nome: 'Ônibus B', horario: '18h20' },
      { nome: 'Ônibus A', horario: '18h30' },
      { nome: 'Ônibus B', horario: '22h10' },
      { nome: 'Ônibus A', horario: 'GARAGEM' },
  ]
}
]

const CelulaOnibus = ({nome, horario}) => (
  <View style={styles.cellContent}>
    <Text style={styles.cellNome}>{nome}</Text>
    <Text style={styles.cellHorario}>{horario}</Text>
  </View>
)
const TabelaBus = () => {
  const maxLinhas = Math.max(
    ufc[0].rodoviaria.length,
    ufc[0].campus.length
  )

   return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title style={styles.header}>
          <Text style ={styles.textoMedio}>Saída da Rodoviária</Text>
          </DataTable.Title>
        <DataTable.Title style={styles.header}>
          <Text style ={styles.textoMedio}>Saída do Campus</Text>
          </DataTable.Title>
      </DataTable.Header>

      {/* Cria uma linha para cada índice */}
      {Array.from({ length: maxLinhas }).map((_, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>
            {ufc[0].rodoviaria[index] && (
              <CelulaOnibus 
                nome={ufc[0].rodoviaria[index].nome}
                horario={ufc[0].rodoviaria[index].horario}
              />
            )}
          </DataTable.Cell>
          
          <DataTable.Cell>
            {ufc[0].campus[index] && (
              <CelulaOnibus 
                nome={ufc[0].campus[index].nome}
                horario={ufc[0].campus[index].horario}
              />
            )}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const Transporte = () => {
  return (
    <ScrollView style={styles.infos}>
      <Text style={styles.titulo}>Itinerário dos ônibus - UFC</Text>
    <TabelaBus/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width, // Garante que ocupa a largura total da página no ScrollView
        flex: 1,
        alignItems: 'left',
        backgroundColor: '#F4FFE1',
        padding: 28,
    },
    textoPequeno: {
        fontFamily: 'Urbanist_400Regular',
        fontSize: 16,

    },
    titulo: {
        fontFamily: 'TiltWarp_400Regular',
        color: '#9D1B1B',
        fontSize: 36,
    },
    infos: {
        padding: 14
    },
    header: {
      backgroundColor: '#D4EFB1',
      justifyContent: 'center',
    },
    textoMedio: {
      fontFamily: 'Urbanist_700Bold',
      fontSize: 16,
      color: '#000'
    },
     cellContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    cellNome: {
        fontFamily: 'Urbanist_500Medium',
        fontSize: 14,
        color: '#21582B',
        marginBottom: 4,
    },
    cellHorario: {
        fontFamily: 'Urbanist_700Bold',
        fontSize: 16,
        color: '#000',
    }
})

export default Transporte;