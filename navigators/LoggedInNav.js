import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import myProfile from "../screens/myProfile";
import Notifications from "../screens/Notifications";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import StackNavFactory from "./SharedStackNav";

const Tabs = createBottomTabNavigator();
export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255,255,255,0.5)",
        },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="TapFeed"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"Feed"} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="TapSearch"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName={"search"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"Search"} />}
      </Tabs.Screen>

      <Tabs.Screen
        name="TapCamera"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName={"camera"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"View"} />}
      </Tabs.Screen>

      <Tabs.Screen
        name="TapNotifications"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName={"heart"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"Notifications"} />}
      </Tabs.Screen>

      <Tabs.Screen
        name="TapmyProfile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon iconName={"person"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={"myProfile"} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
