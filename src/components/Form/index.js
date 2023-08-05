import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Imc } from "./components/Imc";

export const Form = () => {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex: 1.83" keyboardType="numeric" />
        <Text>Peso</Text>
        <TextInput placeholder="Ex: 75.5" keyboardType="numeric" />
        <Button title="Calcular IMC" />
      </View>
      <Imc message="IMC" imc={50} />
    </View>
  );
};

const styles = StyleSheet.create({});
