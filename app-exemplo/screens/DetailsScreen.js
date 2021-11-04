import React from "react";
import { Button, Text, View } from "react-native";

export function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params || {};
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details", { itemId: 33 })}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Mudar Parâmetro"
        onPress={() => navigation.setParams({ itemId: 44 })}
      />
      <Button
        title="Mudar Título"
        onPress={() => navigation.setOptions({ title: "Detalhes" })}
      />
    </View>
  );
}
