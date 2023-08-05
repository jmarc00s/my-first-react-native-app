import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 8,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  form: {
    marginTop: 30,
    width: "100%",
    height: "auto",
    padding: 10,
  },
  label: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    borderRadius: 50,
    width: "90%",
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#FF0043",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingVertical: 14,
    marginLeft: 12,
    marginTop: 30,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
