import {View, Text, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import { useRouter } from 'expo-router';
import Login from './Login';
//pega a largura da tela
const { width } = Dimensions.get('window');

export default function BemVindo(){
    const router = useRouter();
    //estado que controla a paginação da primeira tela para a segunda
    const [page, setPage] = useState(0);

    //Função que vai identificar a página que o usuário está ao deslizar
    const handleScroll = (event) => {
        const offset = event.nativeEvent.contentOffset.x; //quantos pixels foram empurrados?
        const activePage = Math.round(offset / width);//divisão para descobrir o índice da página
        setPage(activePage); //resultado
  };
    return (
        <View style={styles.container}>
            <ScrollView 
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
            >

            {/* TELA 1 COMPLETA (Fundo verde escuro + card verde claro)*/}

            <View style={styles.header}> 
                <Text style= {styles.logo}>QuixaGuia</Text>
                <Text style= {styles.subtitle}>Hospitalidade e Mobilidade Urbana</Text>
            </View>
             {/*parte de baixo - verde escuro*/}
             <View style={styles.card}>
                <Image
                    source={require ('../assets/images/Map.png')}
                    style={styles.map}
                />

                <Text style= {styles.title}>
                    Bem-vinde ao QuixaGuia 
                </Text>

                <Text style= {styles.sub}>
                    Encontre tudo o que você precisa{'\n'}
                    para se adaptar a Quixadá
                </Text>

            </View>

            </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1F5A2E',
  },
  header: {
    paddingTop: 130,
    paddingBottom: 100,
    alignItems: 'center',
  },
  logo: {
    fontSize: 60,
    color: '#F4FFE1',
  },
  subtitle: {
    fontSize: 20,
    color: '#F4FFE1',
    marginTop: -5,
  },
  card: {
    flex: 1,
    backgroundColor: '#F4FFE1',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    alignItems: 'center',
    paddingTop: 0,
    padding: 20,
  },
  map: {
    width: 270,
    height: 270,
    marginBottom: 20, 
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -9,
    marginBottom: 2,
    textAlign: 'center',
  },
  sub: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20
  },
});