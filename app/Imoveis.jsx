import { View, Text, StyleSheet, ScrollView, Dimensions, Linking, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar, Button, Card} from 'react-native-paper';
import { useRouter } from 'expo-router'

const { width } = Dimensions.get('window');

const LeftContent = () => (
    <Avatar.Icon size={36} icon="emoticon-kiss" />
);

const CardImovel = ({id, titulo, proprietario, preco, endereco, descricao, imagem}) => {
  const router = useRouter();

  const handleVerMais = () => {
    router.push ({
      pathname: '/detalhes-imovel',
      params: {id}
    })
  }

  return (
  <Card style={styles.containerImovel}>
    <Card.Title title="Jean Maynard" subtitle="Proprietário" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Text style={styles.textoMedio}>R$ 450,00</Text>
      <Text style={styles.textoPequeno}>Rua Basílio Emiliano Pinto, nº 243</Text>
      <Text style={styles.textoPequeno}>Apartamento localizado no Centro, clique para ver mais informações.</Text>
    </Card.Content>
    <Card.Actions>
      <Button style={styles.btn}
        onPress={handleVerMais}
      ><Text style={styles.btn}>Ver Mais</Text></Button>
    </Card.Actions>
  </Card>
  )
};

const Imoveis = () => {
    return (
<View style={styles.infos}>
    <Text style={styles.titulo}>Imóveis</Text>
    <CardImovel id="1" preco="450,00"/>
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
  containerImovel: {
   backgroundColor: '#d3e5b3' ,
  },
  textoPequeno: {
    fontSize: 14,
    paddingTop: 12,
    color: '#5d5d5d'

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
    fontSize: 16,
    paddingTop: 12,
    color: '#000'
  },
  btn: {
    backgroundColor: '#21582B',
    color:'#FFF'
  }
})

export default Imoveis