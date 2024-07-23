import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

function SignupScreen({ navigation }) {
  return (
    <>
    <Spacer>

      <Text h3>SignupScreen</Text>
    </Spacer>
      <Input label="Email" />
      <Spacer/>
      <Input label="Password" />
      <Spacer>

      <Button title="Sign Up" />
      </Spacer>
    </>
  );
}
const styles = StyleSheet.create({});

export default SignupScreen;
