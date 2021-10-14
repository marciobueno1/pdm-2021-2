import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Tarefa } from "./components/Tarefa";

const tarefas = [
  { cod: 1, descricao: "Tarefa 1", feita: false },
  { cod: 2, descricao: "Tarefa 2", feita: true },
  { cod: 3, descricao: "Tarefa 3", feita: false },
  { cod: 4, descricao: "Tarefa 4", feita: false },
  { cod: 5, descricao: "Tarefa 5", feita: true },
  { cod: 6, descricao: "Tarefa 6", feita: true },
  { cod: 7, descricao: "Tarefa 7", feita: false },
  { cod: 8, descricao: "Tarefa 8", feita: false },
  { cod: 9, descricao: "Tarefa 9", feita: true },
  { cod: 10, descricao: "Tarefa 10", feita: true },
];

export default function App() {
  const renderItem = ({ item }) => <Tarefa tarefa={item} />;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontFamily: "sans-serif" }}>
        Lista de Tarefas
      </Text>
      <FlatList
        data={tarefas}
        renderItem={renderItem}
        keyExtractor={(item) => item.cod.toString()}
        contentContainerStyle={styles.listaInterna}
        style={styles.lista}
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
  lista: {
    backgroundColor: "green",
  },
  listaInterna: {
    backgroundColor: "blue",
  },
});

function AppOld() {
  const [selecionavel, setSelecionavel] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontFamily: "sans-serif" }}>Sans-serif</Text>
      <Text style={{ fontSize: 50, fontFamily: "serif" }}>serif</Text>
      <TouchableHighlight onPress={() => console.log("Highlight")}>
        <View
          style={{
            backgroundColor: "black",
            width: 320,
            height: 150,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: 50, color: "white", fontFamily: "monospace" }}
            selectable={selecionavel}
          >
            monospace
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => console.log("Opacity")}>
        <View
          style={{
            backgroundColor: "black",
            width: 320,
            height: 150,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: 50, color: "white", fontFamily: "monospace" }}
            selectable={selecionavel}
          >
            monospace
          </Text>
        </View>
      </TouchableOpacity>
      <Pressable
        style={styles.pressableMargins}
        onPress={() => console.log("Pressionado!")}
      >
        <Text style={styles.text}>I'm pressable!</Text>
      </Pressable>
      <Button
        title="Pressione"
        onPress={() => setSelecionavel(!selecionavel)}
      />
      <StatusBar style="auto" />
    </View>
  );
}
