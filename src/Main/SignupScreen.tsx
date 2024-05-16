import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native';

import { colors, styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import LoginScreen, { screenName as LoginName } from './LoginScreen';

export const screenName = 'SignupScreen';

    
function SignupScreen(): React.JSX.Element {

  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (navigation)
        navigation.navigate(LoginName as never);
  };

  const handleGoogle = () => {
  };

    return (
      <View style={styles.container}>
        <Text style={styles.textTitleLogin}>Create an Account</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name:</Text>
            <View style={styles.emailInputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Your First Name"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name:</Text>
            <View style={styles.emailInputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Your Last Name"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
        </View>
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
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Continue</Text>
        </Pressable>
        <View style={styles.container}>
          <Text style={styles.text}>Already you member? <Text style={styles.loginButton} onPress={handleLogin}>Login</Text></Text>
        </View>
      </View>
    );

  };
  
  export default SignupScreen;