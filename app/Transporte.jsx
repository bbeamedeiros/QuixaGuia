import { View, Text, StyleSheet, ScrollView, Dimensions, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { DataTable } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Ajuste o caminho se necessário
import { doc, getDoc } from 'firebase/firestore';

const { width } = Dimensions.get('window');

//dizendo como q cada célula vai ser
const CelulaOnibus = ({nome, horario}) => (
  <View style={styles.cellContent}>
    <Text style={styles.cellNome}>{nome}</Text>
    <Text style={styles.cellHorario}>{horario}</Text>
  </View>
)

const Transporte = () => {
  const [ufcSchedules, setUfcSchedules] = useState(null);
  const [ifceSchedules, setIfceSchedules] = useState(null);
  const [paradas, setParadas] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar horários da UFC
        const ufcDoc = await getDoc(doc(db, 'onibus', 'onibusUFC'));
        if (ufcDoc.exists()) {
          setUfcSchedules(ufcDoc.data());
        }

        // Buscar horários do IFCE
        const ifceDoc = await getDoc(doc(db, 'onibus', 'onibusIFCE'));
        if (ifceDoc.exists()) {
          setIfceSchedules(ifceDoc.data());
        }

         // Buscar paradas
        const paradasDoc = await getDoc(doc(db, 'transporte', 'paradas'));
        if (paradasDoc.exists()) {
          setParadas(paradasDoc.data().lista || []);
        }

      } catch (error) {
        console.error('Erro ao buscar horários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#9D1B1B" />
        <Text style={{ marginTop: 10, color: '#9D1B1B' }}>Carregando informações...</Text>
      </View>
    );
  }

  //aqui ele vai gerar um card pra cada parada que vem do Firebase
  const CardParadas = () => {
    const abrirMaps = (url) => {
      Linking.openURL(url).catch(err => console.error('Erro ao abrir o mapa:', err));
    };
    
    return (
      <View>
        {paradas.map((parada, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.cardParada}
            onPress={() => abrirMaps(parada.url)}
            activeOpacity={0.7}
          >
            <Text style={styles.paradaNumero}>{parada.numero}. {parada.nome}</Text>
            <Text style={styles.paradaEndereco}>{parada.endereco}</Text>
            <Text style={styles.paradaQuixada}>{parada.cidade}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

//gerando as tabelas com as celulas de antes
const TabelaBusUFC = () => {
    if (!ufcSchedules) return null;
    
    const maxLinhas = Math.max(
      ufcSchedules.rodoviaria?.length || 0,
      ufcSchedules.campus?.length || 0
    );

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

      {/* aqui ele vai gerar uma linha da tabela pra cada coiso q tiver lá no firebase */}
      {Array.from({ length: maxLinhas }).map((_, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>
            {ufcSchedules.rodoviaria[index] && (
              <CelulaOnibus 
                nome={ufcSchedules.rodoviaria[index].nome}
                horario={ufcSchedules.rodoviaria[index].horario}
              />
            )}
          </DataTable.Cell>
          
          <DataTable.Cell>
            {ufcSchedules.campus[index] && (
              <CelulaOnibus 
                nome={ufcSchedules.campus[index].nome}
                horario={ufcSchedules.campus[index].horario}
              />
            )}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

const TabelaBusIFCE = () => {
    if (!ifceSchedules) return null;
    
    const maxLinhas = Math.max(
      ifceSchedules.rodoviaria?.length || 0,
      ifceSchedules.campus?.length || 0
    );

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

      {/*aqui ele vai gerar uma linha da tabela pra cada coiso q tiver lá no firebase */}
      {Array.from({ length: maxLinhas }).map((_, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>
            {ifceSchedules.rodoviaria[index] && (
              <CelulaOnibus 
                nome={ifceSchedules.rodoviaria[index].nome}
                horario={ifceSchedules.rodoviaria[index].horario}
              />
            )}
          </DataTable.Cell>
          
          <DataTable.Cell>
            {ifceSchedules.campus[index] && (
              <CelulaOnibus 
                nome={ifceSchedules.campus[index].nome}
                horario={ifceSchedules.campus[index].horario}
              />
            )}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

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

//aqui ele vai gerar um card pra cada parada que tiver na const anterior
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
      marginBottom: 20
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