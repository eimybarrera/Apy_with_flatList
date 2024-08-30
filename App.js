import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, FlatList } from "react-native-web";

export default function App() {
  const [Data, setData] = useState([]);
  const web = "https://api.thedogapi.com";

  const getApi = () => {
    fetch(`${web}/v1/images/search?limit=100`)
      .then((response) => response.json())
      .then((dataApi) => setData(dataApi))
      .catch((error) => console.log(error));
  };
  const Item = ({ item }) => (
    <View style={styles.containerBooks}>
      <Text style={styles.text}>{item.id}</Text>
      <Image source={{ uri: item.url }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button onPress={getApi} title="VerPerros" color="#7e2e8a"> </Button>
      <FlatList
        data={Data}
        renderItem={Item}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.conteinerDataApi}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5cbe9",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBooks: {
    width: 200,
    height: 200,
    backgroundColor: "#dc9ee6",
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  conteinerDataApi: {
    alignItems: "center",
  },
  text: {
    color: "#333", 
    marginBottom: 5,
  },
});
