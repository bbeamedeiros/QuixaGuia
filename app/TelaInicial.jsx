import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, TextInput, Button, useTheme, Appbar, Searchbar } from 'react-native-paper';
import { useFonts, TiltWarp_400Regular } from '@expo-google-fonts/tilt-warp';
import {
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_700Bold
} from '@expo-google-fonts/urbanist';


const { width } = Dimensions.get('window');

export default function Home() {
    let [fontsLoaded] = useFonts({
        TiltWarp_400Regular,
        Urbanist_400Regular,
        Urbanist_500Medium,
        Urbanist_700Bold,
    });

    const AppBar = () => (
  <Appbar.Header style={styles.appbar}>
    <Appbar.BackAction onPress={() => {}} />
<SearchBar/>

  </Appbar.Header>
);

const SearchBar= () => {
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

 return (
    
    <View style={styles.container}>
        <AppBar/>
        <View style={styles.infos}>
        <Text style={styles.textoPequeno}>R. Basílio Pinto nº 243</Text>
        </View>
        <View style={styles.infos}>
            <Text style={styles.titulo}>Descubra</Text>
            </View>
     </View>
 )
}

const styles = StyleSheet.create({
    container: {
        width: width, // Garante que ocupa a largura total da página no ScrollView
        flex: 1,
        alignItems: 'left',
        
        backgroundColor: '#F4FFE1',
    },
    appbar:{
        backgroundColor: '#21582B',
        width: width,
        
    },
    barraPesquisa:{
        backgroundColor: '#D4Efb1',
        width: 250,
        borderRadius: 28
    },
    textoPequeno: {
        fontFamily: 'Urbanist_400Regular',
        fontSize: 16

    },
    titulo: {
        fontFamily: 'TiltWarp_400Regular',
        color: '#9D1B1B',
        fontSize: 36
    },
    infos: {
    
    }
})