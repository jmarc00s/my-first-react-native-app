import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Imc } from "./components/Imc";

export const Form = () => {
  const [form, setForm] = useState({
    height: "",
    weight: "",
  });

  const [imc, setImc] = useState(0);

  const handleImcCalculation = () => {
    const heightSquared = +form.height * +form.height;
    setImc((+form.weight / heightSquared).toFixed(2));
    console.log(+form.weight);
  };

  const handleFormChange = (text, name) =>
    setForm((prevState) => ({ ...prevState, [name]: text }));

  return (
    <View>
      <View style={styles.container}>
        <Text>Altura</Text>
        <TextInput
          value={form.height}
          placeholder="Ex: 1.83"
          keyboardType="numeric"
          onChangeText={(text) => handleFormChange(text, "height")}
        />
        <Text>Peso</Text>
        <TextInput
          value={form.weight}
          id="weight"
          onChangeText={(text) => handleFormChange(text, "weight")}
          placeholder="Ex: 75.5"
          keyboardType="numeric"
        />
        <Button onPress={handleImcCalculation} title="Calcular IMC" />
      </View>

      {!!imc && <Imc message="IMC" imc={imc} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
    marginBottom: 16,
  },
});
