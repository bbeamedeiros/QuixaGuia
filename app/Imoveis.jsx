import { View, Text, StyleSheet, ScrollView, Dimensions, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Button, Card} from 'react-native-paper';

const { width } = Dimensions.get('window');


const LeftContent = props => <Avatar.Icon {...props} icon="emoticon-kiss" />

const CardImovel = () => (
  <Card>
    <Card.Title title="Jean Maynard" subtitle="Proprietário" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text>R$ 450,00</Text>
      <Text>Rua Basílio Emiliano Pinto, nº 243</Text>
    </Card.Content>

    <Card.Actions>
      <Button>Ver Mais</Button>
    </Card.Actions>
  </Card>
);

const Imoveis = () => {
    return (
<View style={styles.infos}>
    <Text style={styles.titulo}>Imóveis</Text>
    <CardImovel/>
      </View>
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

export default Imoveis