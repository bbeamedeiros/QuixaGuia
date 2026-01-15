import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Appbar,
  Searchbar,
  BottomNavigation,
  Avatar,
  useTheme,
  Icon,
} from "react-native-paper";
import { useFonts, TiltWarp_400Regular } from "@expo-google-fonts/tilt-warp";
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import { useRouter } from "expo-router";
import Transporte from "./Transporte";
import Imoveis from "./Imoveis";
import Perfil from "./Perfil";

const { width } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    TiltWarp_400Regular,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_700Bold,
  });

  const Carrossel = ({ items }) => {
    const theme = useTheme();

    const preferredItemWidth = 150;
    const itemSpacing = 8;
    const horizontalPadding = 8;

    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.scrollContainer,
            { paddingHorizontal: horizontalPadding },
          ]}
          style={styles.carousel}
        >
          {items.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.itemContainer,
                {
                  width: preferredItemWidth,
                  marginRight: index < items.length - 1 ? itemSpacing : 0,
                },
              ]}
            >
              <Image
                source={{ uri: item.imageUri }}
                style={[styles.image, { borderRadius: theme.roundness * 3 }]}
                accessibilityLabel={item.contentDescription}
                resizeMode="cover"
              />
            </View>
          ))}
        </ScrollView>
      </>
    );
  };

  //botando a appBar com a Search bar dentro
  const FotoUsuario = () => (
    <TouchableOpacity
      style={styles.fotoUsuario}
      onPress={() => router.push("/Perfil")}
    >
      <Avatar.Icon
        size={48}
        color=""
        backgroundColor={"#F4FFE1"}
        icon="account"
      />
    </TouchableOpacity>
  );

  const AppBar = () => (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Action icon="menu" color="#F4FFE1" onPress={() => {}} />
      <SearchBar />
      <FotoUsuario />
    </Appbar.Header>
  );

  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState("");
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
  const TelaInicial = () => {
    const eventosItems = [
      {
        id: 0,
        imageUri:
          "https://i.pinimg.com/736x/09/73/66/0973665d2b868d76c93d686c3c17a5c9.jpg",
        contentDescription: "evento1",
      },
      {
        id: 1,
        imageUri:
          "https://i.pinimg.com/736x/70/3d/24/703d24642637b21bdc3fbf2c08cd57da.jpg",
        contentDescription: "evento2",
      },
      {
        id: 2,
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zMOUexaAc1mpzQP7OMI-j2UKraKxQf7vIQ&s",
        contentDescription: "evento3",
      },
    ];

    const lugaresItems = [
      {
        id: 0,
        imageUri:
          "https://imgs.search.brave.com/pCR-KpHHC3YQyDOE16xELd-9T7oJFrn4Frwhxtwz5Vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZW51/LnJlc3RhdXJhbnRn/dXJ1LmNvbS9tMC9R/LURvY2UtUXVpeGFk/YS1JLVBhc3RlbGFy/aWEtSS1IYW1idXJn/dWVyaWEtZS1QaXp6/YXJpYS1SZXN0YXVy/YW50LW1lbnUtMS5q/cGc",
        contentDescription: "novidade1",
      },
      {
        id: 1,
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafB_-cfJYH2okH4jG0ufqAV3tNRkLD0c52A&s",
        contentDescription: "novidade2",
      },
      {
        id: 2,
        imageUri:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-R5u1H-z3-dRszrnykgD_EE32MZjhQad1nA&s",
        contentDescription: "novidade3",
      },
    ];

    return (
      <View style={styles.container}>
        <AppBar />
        <ScrollView>
          <View style={styles.infos}>
            <View style={styles.localContainer}>
              <Icon source="pin" size={20} color="#000" />
              <Text
                style={[
                  styles.textoPequeno,
                  { textDecorationLine: "underline" },
                  { fontWeight: "bold" },
                ]}
              >
                Rua Basílio Emiliano Pinto nº 243
              </Text>
            </View>
            <Text style={styles.titulo}>Descubra</Text>
            <Text style={styles.textoPequeno}>
              Fique por dentro de eventos futuros
            </Text>
          </View>
          <Carrossel items={eventosItems} />

          <View style={styles.infos}>
            <Text style={styles.titulo}>Lugares</Text>
            <Text style={styles.textoPequeno}>
              Confira as últimas atualizações
            </Text>
          </View>
          <Carrossel items={lugaresItems} />
        </ScrollView>
      </View>
    );
  };
  const ImoveisRoute = () => (
    <View style={styles.container}>
      <AppBar />
      <Imoveis />
    </View>
  );

  const TransporteRoute = () => (
    <View style={styles.container}>
      <AppBar />
      <Transporte />
    </View>
  );

  const LugaresRoute = () => <Text>Indisponível nessa versão</Text>;

  const BottomNav = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {
        key: "home",
        title: "Home",
        focusedIcon: "home",
        unfocusedIcon: "home-outline",
      },
      { key: "imoveis", title: "Imóveis", focusedIcon: "store-outline" },
      { key: "transporte", title: "Transporte", focusedIcon: "bus" },
      {
        key: "lugares",
        title: "Lugares",
        focusedIcon: "food",
        unfocusedIcon: "food-outline",
      },
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
        activeColor="#F4FFE1" // cor quando selecionado
        inactiveColor="#D4EFB1" // cor quando NÃO selecionado
      />
    );
  };

  //aqui vem a renderização na tela
  return (
    <View style={styles.container}>
      <BottomNav />
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    width: width, // Garante que ocupa a largura total da página no ScrollView
    flex: 1,
    alignItems: "left",
    backgroundColor: "#F4FFE1",
  },
  appbar: {
    backgroundColor: "#21582B",
    width: width,
  },
  barraPesquisa: {
    backgroundColor: "#D4Efb1",
    width: 250,
    borderRadius: 28,
  },
  fotoUsuario: {
    paddingLeft: 12,
  },
  textoPequeno: {
    fontFamily: "Urbanist_400Regular",
    fontSize: 16,
  },
  titulo: {
    fontFamily: "TiltWarp_400Regular",
    color: "#9D1B1B",
    fontSize: 36,
  },
  infos: {
    paddingLeft: 14,
    paddingTop: 14,
  },
  navBar: {
    backgroundColor: "#21582B",
  },
  localContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingBottom: 8,
  },
  carousel: {
    marginTop: 16,
    marginBottom: 16,
  },
  scrollContainer: {
    alignItems: "center",
  },
  itemContainer: {
    height: 205,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
