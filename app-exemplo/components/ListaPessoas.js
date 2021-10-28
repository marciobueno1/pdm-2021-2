import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View,
  Text,
} from "react-native";
import { useQuery } from "react-query";

import { Pessoa } from "./Pessoa";
import { carregaPessoas } from "../api";

export const ListaPessoas = ({
  urlApi,
  page,
  setBtAnteriorDisabled,
  setBtProximaDisabled,
}) => {
  console.log("urlApi = ", urlApi);
  const { isLoading, error, data, isFetching } = useQuery(
    `pessoas${page}`,
    carregaPessoas(urlApi)
  );
  console.log("data", data);
  const renderItem = ({ item }) => <Pessoa pessoa={item} />;
  if (isLoading) {
    return <ActivityIndicator size="large" color="green" />;
  }
  if (error || data?.detail === "Not found") {
    return (
      <View>
        <Text>Erro: {(error && JSON.stringify(error)) || "Not found"}</Text>
      </View>
    );
  }
  setBtAnteriorDisabled(data.previous == null);
  setBtProximaDisabled(data.next == null);
  return (
    <View>
      {isFetching && <ActivityIndicator size="large" color="red" />}
      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listaInterna}
        style={styles.lista}
        extraData={urlApi}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lista: {
    backgroundColor: "green",
  },
  listaInterna: {
    backgroundColor: "blue",
  },
});
