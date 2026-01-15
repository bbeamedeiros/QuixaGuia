import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {
  Text,
  Avatar,
  Button,
  ActivityIndicator,
  List,
  Divider,
  Appbar,
} from "react-native-paper";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

export default function Perfil() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "usuarios", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        }
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
        Alert.alert("Erro", "Não foi possível carregar os dados do perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    Alert.alert("Sair", "Deseja encerrar sua sessão?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        onPress: async () => {
          await signOut(auth);
          router.replace("/Login");
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#21582B" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbarHeader}>
        <Appbar.BackAction color="#F4FFE1" onPress={() => router.back()} />
        <Appbar.Content title="Meu Perfil" titleStyle={styles.appbarTitle} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerPerfil}>
          <Avatar.Icon size={100} icon="account" backgroundColor="#21582B" />
          <Text style={styles.userName}>
            {userData?.nome} {userData?.sobrenome}
          </Text>
          <Text style={styles.userEmail}>{userData?.email}</Text>
        </View>

        <View style={styles.cardInfo}>
          <List.Item
            title="Endereço"
            description={userData?.endereco || "Não informado"}
            left={(props) => (
              <List.Icon {...props} icon="map-marker" color="#9D1B1B" />
            )}
          />
          <Divider />
          <List.Item
            title="Bairro"
            description={userData?.bairro || "Não informado"}
            left={(props) => (
              <List.Icon {...props} icon="home-city" color="#9D1B1B" />
            )}
          />
        </View>

        <Button
          mode="contained"
          onPress={handleLogout}
          buttonColor="#9D1B1B"
          style={styles.logoutBtn}
          labelStyle={{ fontFamily: "Urbanist_700Bold" }}
        >
          Sair da conta 
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4FFE1" },
  // Estilos da Appbar de voltar
  appbarHeader: {
    backgroundColor: "#21582B",
  },
  appbarTitle: {
    fontFamily: "TiltWarp_400Regular",
    color: "#F4FFE1",
    fontSize: 20,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4FFE1",
  },
  headerPerfil: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  userName: {
    fontFamily: "TiltWarp_400Regular",
    fontSize: 28,
    color: "#0E3014",
    marginTop: 15,
  },
  userEmail: {
    fontFamily: "Urbanist_400Regular",
    fontSize: 16,
    color: "#1F5A2E",
  },
  cardInfo: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 15,
    elevation: 2,
    paddingVertical: 10,
  },
  logoutBtn: {
    width: "100%",
    marginTop: 30,
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
  },
});
