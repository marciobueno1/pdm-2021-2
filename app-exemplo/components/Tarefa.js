import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Tarefa = ({ tarefa }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          { textDecorationLine: tarefa.feita ? "line-through" : "none" },
        ]}
      >
        {tarefa.descricao}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});
