import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors, styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import LoginScreen, { screenName as LoginName } from './LoginScreen';

export const screenName = 'SignupPassScreen';

    
function SignupPassScreen(): React.JSX.Element {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (navigation)
        navigation.navigate(LoginName as never);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); // Функция для переключения видимости пароля
  };


    return (
      <View style={styles.container}>
        <Text style={styles.textTitleLogin}>Choose a Password</Text>
        <View style={styles.signupPassContainer}>
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
        <View style={styles.signupPassConfContainer}>
        <Text style={styles.label}>Confirm Password:</Text>
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

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Continue</Text>
        </Pressable>
        <View style={styles.container}>
          <Text style={styles.text}>Already you member? <Text style={styles.loginButton} onPress={handleLogin}>Login</Text></Text>
        </View>
      </View>
    );

  };
  
  export default SignupPassScreen;