import styled from "styled-components/native";
import React from "react";
import { colors } from "./colors";
import { TouchableOpacity } from "react-native";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;
export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const gotoLogIn = () => navigation.navigate("LogIn");
  return (
    <AuthLayout>
      <AuthButton
        text="Create New Account"
        disabled={false}
        onPress={goToCreateAccount}
      />
      <TouchableOpacity onPress={gotoLogIn}>
        <LoginLink>Log In</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
