import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ListaPessoas } from "../components/ListaPessoas";

export function PeopleScreen() {
  const [btAnteriorDisabled, setBtAnteriorDisabled] = useState(true);
  const [btProximaDisabled, setBtProximaDisabled] = useState(false);
  const [page, setPage] = useState(1);
  const handleAnteriorPress = () => {
    setPage(page - 1);
  };
  const handleProximaPress = () => {
    setPage(page + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontFamily: "sans-serif" }}>
        Lista de Pessoas
      </Text>
      <View style={styles.viewBotoes}>
        <Button
          title="Anterior"
          disabled={btAnteriorDisabled}
          onPress={handleAnteriorPress}
        />
        <Button
          title="Próxima"
          disabled={btProximaDisabled}
          onPress={handleProximaPress}
        />
      </View>
      <ListaPessoas
        urlApi={`https://swapi.dev/api/people/?page=${page}`}
        page={page}
        setBtAnteriorDisabled={setBtAnteriorDisabled}
        setBtProximaDisabled={setBtProximaDisabled}
      />
    </View>
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
