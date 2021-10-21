import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Pessoa = ({ pessoa }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{pessoa.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "beige",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});
