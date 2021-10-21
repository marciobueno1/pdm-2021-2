import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { ListaPessoas } from "./components/ListaPessoas";

const queryClient = new QueryClient();

export default function App() {
  const [page, setPage] = useState(1);
  const handleAnteriorPress = () => {
    setPage(page - 1);
  };
  const handleProximaPress = () => {
    setPage(page + 1);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontFamily: "sans-serif" }}>
          Lista de Pessoas
        </Text>
        <View style={styles.viewBotoes}>
          <Button title="Anterior" onPress={handleAnteriorPress} />
          <Button title="Próxima" onPress={handleProximaPress} />
        </View>
        <ListaPessoas
          urlApi={`https://swapi.dev/api/people/?page=${page}`}
          page={page}
        />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    paddingTop: 35,
  },
  pressableMargins: {
    marginTop: 15,
    marginBottom: 20,
  },
  text: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
  },
  viewBotoes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
