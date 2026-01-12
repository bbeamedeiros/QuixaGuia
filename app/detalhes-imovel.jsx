import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

export default function DetalhesImovel() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.topBar}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Voltar" />
        <Appbar.Action icon="bookmark-outline" onPress={() => {}} />
        <Appbar.Action icon="menu" onPress={() => {}} />
      </Appbar.Header>

      <View style={styles.content}>
        <Text style={[styles.titulo, { color: '#9D1B1B' }]}>R$ 450,00</Text>
        <Text style={styles.textoPequeno}>Rua Basílio Emiliano Pinto, nº 243</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width, // Garante que ocupa a largura total da página no ScrollView
    flex: 1,
    alignItems: 'left',
    backgroundColor: '#F4FFE1',
    alignContent: 'left'
  },
  topBar: {
    backgroundColor: '#F4FFE1',
  },
  content: {
    paddingHorizontal: 28,
  },
  titulo: {
    fontFamily: 'TiltWarp_400Regular',
    fontSize: 36,
  },
   textoPequeno: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 16,
  },
  idText: {
    fontSize: 16,
    color: '#5d5d5d',
  },
  button: {
    marginTop: 20,
  },
});