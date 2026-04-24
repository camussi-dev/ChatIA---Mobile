import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "./style";

export default function Index() {
  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior={Platform.OS === "android" ? "height" : "padding"}
    >
      <View style={styles.container}>
        <ScrollView style={styles.chat}>
          <Text></Text>
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
          ></TextInput>
          <Button title="Enviar"></Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
