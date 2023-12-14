import React from "react";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import CreateAccount from "../screens/CreateAccount";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerMode: "screen",
        headerTitle: () => false,
        headerTransparent: () => true,
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen
        name="CreateAccount"
        options={{}}
        component={CreateAccount}
      />
    </Stack.Navigator>
  );
}
