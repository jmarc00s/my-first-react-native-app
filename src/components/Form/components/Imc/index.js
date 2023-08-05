import React from "react";
import { Text, View } from "react-native";

export const Imc = ({ imc, message }) => {
  return (
    <View>
      <Text>{message}</Text>
      <Text>{imc}</Text>
    </View>
  );
};
