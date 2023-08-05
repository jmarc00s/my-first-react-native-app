import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Imc } from "./components/Imc";
import { styles } from "./style";

export const Form = () => {
  const [form, setForm] = useState({
    height: "",
    weight: "",
  });

  const [imc, setImc] = useState(0);

  const resetForm = () => setForm({ height: "", weight: "" });
  const disableSubmit = !form.height.length || !form.weight.length;

  const handleImcCalculation = () => {
    const heightSquared = +form.height * +form.height;
    setImc((+form.weight / heightSquared).toFixed(2));
    resetForm();
  };

  const handleFormChange = (text, name) =>
    setForm((prevState) => ({ ...prevState, [name]: text }));

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Altura</Text>
        <TextInput
          style={styles.input}
          value={form.height}
          placeholder="Ex: 1.83"
          keyboardType="numeric"
          onChangeText={(text) => handleFormChange(text, "height")}
        />
        <Text style={styles.label}>Peso</Text>
        <TextInput
          style={styles.input}
          value={form.weight}
          id="weight"
          onChangeText={(text) => handleFormChange(text, "weight")}
          placeholder="Ex: 75.5"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          disabled={disableSubmit}
          onPress={handleImcCalculation}
        >
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>
      </View>

      {!!imc && <Imc message="IMC" imc={imc} />}
    </View>
  );
};
