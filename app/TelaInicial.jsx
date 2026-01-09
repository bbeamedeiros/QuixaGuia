
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Appbar, Searchbar, BottomNavigation } from 'react-native-paper';
import { useFonts, TiltWarp_400Regular } from '@expo-google-fonts/tilt-warp';
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_700Bold
} from '@expo-google-fonts/urbanist';
import Transporte from './Transporte';

const { width } = Dimensions.get('window');

export default function Home() {
  let [fontsLoaded] = useFonts({
    TiltWarp_400Regular,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_700Bold,
  });

  //botando a appBar com a Search bar dentro
  const AppBar = () => (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Action icon="menu" color="#F4FFE1" onPress={() => { }} />
      <SearchBar />
    </Appbar.Header>
  );

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
      <Searchbar
        style={styles.barraPesquisa}
        placeholder="Pesquisar"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    );
  };

  //aqui já são as telas, que estao atreladas à navbar
  const TelaInicial = () => (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.infos}>
        <Text style={styles.textoPequeno}>R. Basílio Emiliano Pinto, 243</Text>
        <Text style={styles.titulo}>Descubra</Text>
        <Text style={styles.textoPequeno}>Fique por dentro de eventos futuros</Text>
      </View>
    </View>
  )

  const ImoveisRoute = () => (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.infos}>
        <Text style={styles.titulo}>Imóveis</Text>
      </View>
    </View>
  )

  const TransporteRoute = () => (
    <View style={styles.container}>
      <AppBar />
      <Transporte />
    </View>
  )

  const LugaresRoute = () => <Text>Indisponível nessa versão</Text>;

  const BottomNav = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
      { key: 'imoveis', title: 'Imóveis', focusedIcon: 'store-outline' },
      { key: 'transporte', title: 'Transporte', focusedIcon: 'bus' },
      { key: 'lugares', title: 'Lugares', focusedIcon: 'food', unfocusedIcon: 'food-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
      home: TelaInicial,
      imoveis: ImoveisRoute,
      transporte: TransporteRoute,
      lugares: LugaresRoute,
    });

    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.navBar}
        activeColor="#F4FFE1"    // cor quando selecionado
        inactiveColor="#D4EFB1"   // cor quando NÃO selecionado
      />
    );
  };

  //aqui vem a renderização na tela
  return (
    <View style={styles.container}>
      <BottomNav />
    </View>
  )
}

//styles
const styles = StyleSheet.create({
  container: {
    width: width, // Garante que ocupa a largura total da página no ScrollView
    flex: 1,
    alignItems: 'left',
    backgroundColor: '#F4FFE1',
  },
  appbar: {
    backgroundColor: '#21582B',
    width: width,
  },
  barraPesquisa: {
    backgroundColor: '#D4Efb1',
    width: 250,
    borderRadius: 28
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
    paddingLeft: 14,
    paddingTop: 14
  },
  navBar: {
    backgroundColor: '#21582B',

  }
})