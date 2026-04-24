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
import { useState } from "react";

export default function Index() {
  const [input, setInput] = useState("");
  // Estado que armazena todas as mensagens da conversa
  const [message, setMessage] = useState<{ role: string; content: string }[]>(
    [],
  );

  // Função executada ao clicar no botão
  async function sendMessage() {
    // Impede envio de mensagem vazia
    if (!input.trim()) return;

    // Cria objeto da mensagem do usuário
    const userMessage = {
      role: "user",
      content: input,
    };

    // Adiciona mensagem do usuário ao chat
    setMessage((prev) => [...prev, userMessage]); 
    // "..." representa os "spread operator" -> ele "espalha" os itens do array dentro de outro array

    // Limpa o campo de texto:
    setInput("");
  }

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
