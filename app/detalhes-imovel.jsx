import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter, useLocalSearchParams, router } from 'expo-router';
import { Appbar } from 'react-native-paper';

const TopBar = () => (
  <Appbar.Header style={styles.topBar}>
    <Appbar.BackAction onPress={() => router.back()} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);

export default function DetalhesImovel() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TopBar/>
      <Text style={styles.titulo}>Detalhes do Imóvel {id}</Text>
      <Button 
        mode="contained" 
        onPress={() => router.back()}
      >
        Voltar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor: '#F4FFE1',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  topBar: {
    backgroundColor: '#F4FFE1'
  }
}); 


