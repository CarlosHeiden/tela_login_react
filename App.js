import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Expressão regular para validar o formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Usa useEffect para validar o e-mail sempre que o campo muda
  useEffect(() => {
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  // O botão fica desativado se o e-mail ou a senha estiverem vazios
  const isButtonDisabled = !isEmailValid || password.length === 0;

  const handleLogin = () => {
    // Requisito 2: Exibir alerta ao clicar em "ENTRAR"
    Alert.alert('Login realizado com sucesso!');
  };

  const handleRegister = () => {
    // Requisito 3: Exibir alerta ao clicar em "Registrar-se"
    Alert.alert('Tela de Registro em breve!');
  };

  const handleForgotPassword = () => {
    // Requisito 3: Exibir alerta ao clicar em "Redefinir a Senha"
    Alert.alert('Tela de Redefinir a Senha em breve!');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.card}>
        {/* Imagem do Logótipo */}
        <Image
          source={require('./assets/logo_petvida01.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Bem-vindo a PetVida</Text>

        {/* Campo de e-mail */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address" // Requisito 2: Aceitar apenas e-mails
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#999"
        />

        {/* Campo de senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry // Requisito 2: Campo de senha protegido
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#999"
        />

        {/* Botão de Login */}
        <Button
          title="ENTRAR"
          onPress={handleLogin}
          disabled={isButtonDisabled} // Requisito 2: Botão desabilitado
          color="#3498db"
        />

        {/* Links */}
        <View style={styles.linksContainer}>
          <Pressable onPress={handleRegister}>
            <Text style={styles.link}>Registrar-se</Text>
          </Pressable>
          <Text style={styles.linkSeparator}>|</Text>
          <Pressable onPress={handleForgotPassword}>
            <Text style={styles.link}>Redefinir a Senha</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5ff',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#aed390ff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
    alignSelf: 'center',
    borderRadius: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
  },
  linksContainer: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'center',
  },
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  linkSeparator: {
    color: '#ccc',
    marginHorizontal: 12,
  },
});

export default App;
