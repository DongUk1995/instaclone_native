import React, { useEffect, useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;
export default function CreateAccount({ navigation }) {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const onCompleted = (data) => {
    const {
      createAccount: { ok },
    } = data;
    const { username, password } = getValues();
    if (ok) {
      navigation.navigate("LogIn", {
        username,
        password,
      }); //onCompleted는 ok와 username, password 받고 login으로 아이디 패스워드를 보낸다.
    }
  };
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    { onCompleted }
  );
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passowrdRef = useRef();
  const onNext = (nextone) => {
    nextone?.current?.focus();
  };
  const onValid = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };
  useEffect(() => {
    register("firstName", { required: true });
    register("lastName", { required: true });
    register("username", { required: true });
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);
  return (
    <AuthLayout>
      <TextInput
        autoFocus
        placeholder="First Name"
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text) => setValue("firstName", text)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
        onChangeText={(text) => setValue("lastName", text)}
      />
      <TextInput
        ref={usernameRef}
        placeholder="Username"
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passowrdRef)}
        onChangeText={(text) => setValue("email", text)}
      />
      <TextInput
        ref={passowrdRef}
        placeholder="password"
        placeholderTextColor={"rgba(255,255,255,0.8)"}
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
      />
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
