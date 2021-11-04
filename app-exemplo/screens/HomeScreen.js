import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export function HomeScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Maçã", value: "maca" },
  ]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to People"
        onPress={() => navigation.navigate("People")}
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 87,
            otherParam: "anything you want here",
          })
        }
      />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        textStyle={styles.text}
      />
      <Text>Value = {value ? value : "null"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: "beige",
  },
  text: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
  },
});
