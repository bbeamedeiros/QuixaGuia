import { View,ScrollView, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button, Appbar, Icon } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

export default function DetalhesImovel() {
  const router = useRouter();

  const images = [
    { id: '1', uri: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg', span: 'large' },
    { id: '2', uri: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg', span: 'small' },
    { id: '3', uri: 'https://images.pexels.com/photos/11273549/pexels-photo-11273549.jpeg', span: 'small' },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.topBar}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Voltar" />
        <Appbar.Action icon="bookmark-outline" onPress={() => {}} />
        <Appbar.Action icon="menu" onPress={() => {}} />
      </Appbar.Header>
  
      <ScrollView>
      <View style={styles.content}>
        <Text style={[styles.titulo, { color: '#21582B' }]}>R$ 450,00</Text>
        <Text style={styles.textoPequeno}>Rua Basílio Emiliano Pinto, nº 243</Text>

        <View style={styles.gridContainer}>
          <View style={styles.largeImageContainer}>
            <Image
            source={{uri: images[0].uri}}
            style={styles.largeImage}
            resizeMode='cover'/>
          </View>
          <View style={styles.smallImagesRow}>
          <View style={styles.smallImageContainer}>
            <Image
            source={{uri: images[1].uri}}
            style={styles.smallImage}
            resizeMode='cover'/>
          </View>
          <View style={styles.smallImageContainer}>
            <Image 
            source={{ uri: images[2].uri }} 
            style={styles.smallImage}
            resizeMode="cover"
              />
          </View>
        </View>
      </View>

    <View style={styles.infoImoveis}>
      <View style={styles.telefoneContainer}>
      <Icon source="whatsapp" size={20} color="#000" />
    <Text style={[styles.textoPequeno, { textDecorationLine: 'underline' }, {fontWeight: 'bold'}]}>88 99249 5452</Text>
    </View>
    <Text style={styles.textoPequeno}> - O apartamento possui 2 quartos, 1  banheiro e uma área externa pequena;</Text>
<Text style={styles.textoPequeno}> - Luz não inclusa;</Text>
<Text style={styles.textoPequeno}> - Proprietário: Jean Maynard.</Text>
    </View>
    <View>
      <Text style={styles.titulo}>Avaliações</Text>
    </View>
     </View>
  </ScrollView>
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
    color: '#9D1B1B'
  },
  infoImoveis: {
     backgroundColor: '#D4Efb1',
     borderRadius: 8,
     paddingHorizontal: 28,
     paddingVertical: 14,
     marginVertical: 14
  },
  telefoneContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingBottom: 8
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
  gridContainer: {
    marginTop: 16
  },
   largeImageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  largeImage: {
    width: '100%',
    height: '100%',
  },
  smallImagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallImageContainer: {
    width: '49.25%',
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
  },
  smallImage: {
    width: '100%',
    height: '100%'
  },
});