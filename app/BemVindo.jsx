import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useRouter } from 'expo-router';

export default function BemVindo(){
    const router = useRouter();

    return (
        <View style={styles.container}>

            {/*parte de cima - verde claro*/}
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
                    Encontre tudo o que você precisa 
                    para se adaptar a Quixadá
                </Text>

                <Pressable onPress={() => router.push('/Login')}>
                    <Text>Continuar</Text>
                </Pressable>
             </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 20,
  },
  image: {

  },
  title: {

  },
  sub: {

  },
});