import React from "react";
import { Text, View } from "react-native";

export default function myProfile() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>myProfile</Text>
    </View>
  );
}
