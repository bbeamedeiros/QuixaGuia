import { View, Text, StyleSheet, ScrollView, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import React from 'react';
const { width } = Dimensions.get('window');

const paradas = [
  {
    key: 1,
    numero: '1',
    nome: 'Rodoviária de Quixadá',
    endereco: '2406, Av. Presidente Vargas, 2320 - Centro',
    quixada: 'Quixadá - CE, 63900-000',
    url: 'https://maps.google.com/?q=Rodoviária+de+Quixadá,+Av.+Presidente+Vargas,+2320,+Quixadá,+CE'
  },
  {
    key: 2,
    numero: '2',
    nome: 'Anexo',
    endereco: 'R. Basílio Pinto, 420 - Centro',
    quixada: 'Quixadá - CE, 63900-000',
    url: 'https://maps.google.com/?q=R.+Basílio+Pinto,+420,+Quixadá,+CE'
  },
  {
    key: 3,
    numero: '3',
    nome: 'Construtec',
    endereco: 'R. Basílio Emiliano Pinto, 958 - Planalto Universitário.',
    quixada: 'Quixadá - CE, 63902-106',
    url: 'https://maps.google.com/?q=R.+Basílio+Emiliano+Pinto,+958,+Quixadá,+CE'
  },
  {
    key: 4,
    numero: '4',
    nome: 'Rustik',
    endereco: 'R. Basílio Emiliano Pinto, 1255 - Combate',
    quixada: 'Quixadá - CE, 63900-145',
    url: 'https://maps.google.com/?q=R.+Basílio+Emiliano+Pinto,+1255,+Quixadá,+CE'
  },
  {
    key: 5,
    numero: '5',
    nome: 'Loteamento',
    endereco: 'R. José Freitas Queiroz, 2127',
    quixada: 'Quixadá - CE, 63900-000',
    url: 'https://maps.google.com/?q=R.+José+Freitas+Queiroz,+2127,+Quixadá,+CE'
  }
]

const CardParadas = () => {
 const abrirMaps = (url) => {
    Linking.openURL(url).catch(err => console.error('Erro ao abrir o mapa:', err));
  };
return(
  <View>
    {paradas.map((parada) => (
       <TouchableOpacity 
          key={parada.key} 
          style={styles.cardParada}
          onPress={() => abrirMaps(parada.url)}
          activeOpacity={0.7}
        >
        <Text style={styles.paradaNumero}>{parada.numero}. {parada.nome}</Text>
        <Text style={styles.paradaEndereco}>{parada.endereco}</Text>
        <Text style={styles.paradaQuixada}>{parada.quixada}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
}

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

const ifce = [
  {
   key: 2,
   rodoviaria: [
       { nome: 'Ônibus A', horario: '07h20' },
      { nome: 'Ônibus B', horario: '07h21' },
      { nome: 'Ônibus A', horario: '09h10' },
      { nome: 'Ônibus B', horario: '13h15' },
      { nome: 'Ônibus A', horario: '13h30' },
      { nome: 'Ônibus B', horario: '15h10' },
      { nome: 'Ônibus A', horario: '18h10' },
      { nome: 'Ônibus B', horario: '18h35' },
      { nome: 'Ônibus A', horario: '20h15' },
  ],
   campus: [
   { nome: 'Ônibus A', horario: '09h40' },
      { nome: 'Ônibus B', horario: '11h30' },
      { nome: 'Ônibus A', horario: '11h50' },
      { nome: 'Ônibus B', horario: '12h' },
      { nome: 'Ônibus A', horario: '15h40' },
      { nome: 'Ônibus B', horario: '17h30' },
      { nome: 'Ônibus A', horario: '17h50' },
      { nome: 'Ônibus B', horario: '18h' },
      { nome: 'Ônibus A', horario: '21h45' },
  ]
}
]

const CelulaOnibus = ({nome, horario}) => (
  <View style={styles.cellContent}>
    <Text style={styles.cellNome}>{nome}</Text>
    <Text style={styles.cellHorario}>{horario}</Text>
  </View>
)

const TabelaBusUFC = () => {
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

const TabelaBusIFCE = () => {
  const maxLinhas = Math.max(
    ifce[0].rodoviaria.length,
    ifce[0].campus.length
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
            {ifce[0].rodoviaria[index] && (
              <CelulaOnibus 
                nome={ifce[0].rodoviaria[index].nome}
                horario={ifce[0].rodoviaria[index].horario}
              />
            )}
          </DataTable.Cell>
          
          <DataTable.Cell>
            {ifce[0].campus[index] && (
              <CelulaOnibus 
                nome={ifce[0].campus[index].nome}
                horario={ifce[0].campus[index].horario}
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
      <View style ={styles.blocoInfo}>
    <Text style={styles.titulo}>Itinerário dos ônibus - UFC</Text>
    <TabelaBusUFC/>
    </View>
    <View style ={styles.blocoInfo}>
    <Text style={styles.titulo}>Itinerário dos ônibus - IFCE</Text>
    <TabelaBusIFCE/>
    </View>
    <View style ={styles.blocoInfo}>
    <Text style={styles.titulo}>Paradas</Text>
    <CardParadas/>
    </View>
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
    blocoInfo: {
      paddingBottom: 28
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
        padding: 14,
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
    cardParada: {
      marginBottom: 20,
    },
    paradaNumero: {
      fontFamily: 'Urbanist_700Bold',
      fontSize: 18,
      color: '#9D1B1B',
      marginBottom: 4,
    },
    paradaEndereco: {
      fontFamily: 'Urbanist_400Regular',
      fontSize: 16,
      color: '#000',
      marginBottom: 2,
    },
    paradaQuixada: {
      fontFamily: 'Urbanist_400Regular',
      fontSize: 14,
      color: '#666',
    },
     cellContent: {
        flexDirection: 'column',
        alignItems: 'left',
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