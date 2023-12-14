import React from "react";
import Profile from "../screens/Profile";
import Photo from "../screens/Photo";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import myProfile from "../screens/myProfile";
import Feed from "../screens/Feed";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: "white",
        headerShadowVisible: true,
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "black",
          shadowColor: "rgba(255,255,255,0.3)",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen
          name={"Feed"}
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                style={{ height: 40, Width: 120 }}
                resizeMode="center"
                source={require("../assets/logo.png")}
              />
            ),
          }}
        />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={"Search"} component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}
      {screenName === "MyProfile" ? (
        <Stack.Screen name={"Myprofile"} component={myProfile} />
      ) : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
