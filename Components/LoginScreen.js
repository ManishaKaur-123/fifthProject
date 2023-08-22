import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /@user\.ca$|@admin\.ca$/;
    return emailRegex.test(email);
  };

const handleLogin = async () => {
    if (validateEmail(email)) {
      try {
        // Store user data in local storage
        const userData = {
          email: email,
          password: password,
        };
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        console.warn('User data stored successfully');
        // Perform any additional actions or navigation here
        navigation.navigate('UserLogin', { userData: userData });
      } catch (error) {
        console.warn('Error storing user data:', error);
      }
    } else {
      console.warn('Invalid email format');
    }
  };

  return (
    <View style={styles.container}>
    
        <Text style={styles.loginForm}>Login Form </Text>
        <View style={styles.inputContainer}>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email Here"
          placeholderTextColor={`#000000`}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.email}>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Password Here"
        placeholderTextColor={`#000000`}
        secureTextEntry={true}
        onChangeText={(newPassword) => setPassword(newPassword)}
      /></View>
      <TouchableOpacity>
        <Button onPress={handleLogin} title="Login" />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   loginForm: {
//     FontSize: 100,
//     FontColor: `#00ffff`,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   email: {
//     FontSize: 50,
//     FontColor: `#000000`,
//   },
//   Password: {
//     FontSize: 50,
//     FontColor: `#000000`,
//   },
//   TextInput: {
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: "#00ffff",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginForm: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 5,
    padding: 10,
  },
});

export default LoginScreen;
