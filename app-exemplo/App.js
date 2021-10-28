import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";

import { HomeScreen } from "./screens/HomeScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { PeopleScreen } from "./screens/PeopleScreen";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Overview" }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="People" component={PeopleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
