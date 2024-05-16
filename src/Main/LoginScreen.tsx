import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import SignupScreen from './SignupScreen';
import SignupPassScreen from './SignupPassScreen';
import MainScreen from './MainScreen';

export const screenName = 'Login';

function LoginScreen(): React.JSX.Element {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (navigation)
        navigation.navigate(MainScreen as never);
  };
  const handlePassword = () => {
    if (navigation)
        navigation.navigate(SignupPassScreen as never);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); // Функция для переключения видимости пароля
  };
  const handleSignup = () => {
    if (navigation) {
      navigation.navigate(SignupScreen as never); // Перенаправление на страницу SignUp
    }
  };
  const handleGoogle = () => {
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/login.png')}
        style={styles.imageLogin}
      />
      <Text style={styles.textTitle}>For free, join now and start learning</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail:</Text>
          <View style={styles.emailInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
            />
            <Pressable style={{ height: 24 }} onPress={togglePasswordVisibility}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="black" />
            </Pressable>
          </View>
      </View>
      <Pressable style={styles.skipButton} onPress={handlePassword}>
        <Text style={styles.forgotButton}>Forgot Password</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Login</Text>
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.text}>Not a member? <Text style={styles.loginButton} onPress={handleSignup}>Signup</Text></Text>
        <Text style={styles.text}>Use can use <Text style={styles.loginButton} onPress={handleGoogle}>Google for </Text><Text style={styles.text}> sign in </Text></Text>
      </View>
    </View>
  );
};

export default LoginScreen;