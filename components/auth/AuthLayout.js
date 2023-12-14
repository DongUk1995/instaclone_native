import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`;
const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
  margin: 0 auto;
`;

export default function AuthLayout({ children }) {
  const dismissKeyborad = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyborad}
      disabled={Platform.OS === "web"}
    >
      <Container>
        <KeyboardAvoidingView
          style={{
            width: "100%",
          }}
          behavior="position"
          keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}
        >
          <Logo
            resizeMode="contain"
            source={require("../../assets/logo.png")}
          />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
