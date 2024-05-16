import React, { useEffect, useState, } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, styles } from './src/Styles/globalStyles';

import OnBoarding, { screenName as OnboardingName } from './src/Main/OnBoarding';
import LoginScreen, { screenName as LoginName } from './src/Main/LoginScreen';
import SignupScreen, { screenName as SignupName } from './src/Main/SignupScreen';
import SignupPassScreen, { screenName as SignupPassName } from './src/Main/SignupPassScreen'
import LanguageSelectionScreen, { screenName as SelectionName} from './src/Main/LanguageSelectScreen';
import MainScreen, { screenName as MainName } from './src/Main/MainScreen';
import ProfileScreen, { screenName as ProfileName } from './src/Main/ProfileScreen';
import GuessTheAnimalScreen, { screenName as GuessTheAnimalName} from './src/Main/GuessTheAnimalScreen';
import GuessTheAnimalSuccsesScreen, { screenName as GuessTheAnimalSuccsesName } from './src/Main/GuestTheAnimalSuccsesScreen';
import GuessTheAnimalFalseScreen, { screenName as GuessTheAnimalFalseName } from './src/Main/GuessTheAnimalFalseScreen';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();

  const isDarkMode = useColorScheme() === 'dark';
  // const navigation = useNavigation();
  const [boardIndex, setBoardIndex] = useState(0);

  useEffect(() => {
    // console.log(typeof navigation)
  })

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.main}
      />
      <Stack.Navigator>
        <Stack.Screen name={OnboardingName} component={OnBoarding} options={{headerShown: false}}/>
        <Stack.Screen name={LoginName} component={LoginScreen} options={{headerTitleAlign: 'center', headerStyle: [{ backgroundColor: '#410FA3'}], headerTintColor: 'white'}}/>
        <Stack.Screen name={SignupName} component={SignupScreen} options={{headerTitleAlign: 'center', headerStyle: [{ backgroundColor: '#410FA3'}], headerTintColor: 'white'}}/>
        <Stack.Screen name={SignupPassName} component={SignupPassScreen} options={{headerTitleAlign: 'center', headerStyle: [{ backgroundColor: '#410FA3'}], headerTintColor: 'white'}}/>
        <Stack.Screen name={SelectionName} component={LanguageSelectionScreen} options={{headerTitleAlign: 'center', headerStyle: [{ backgroundColor: '#410FA3'}], headerTintColor: 'white'}}/>
        <Stack.Screen name={MainName} component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name={ProfileName} component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name={GuessTheAnimalName} component={GuessTheAnimalScreen} options={{headerTitleAlign: 'center', headerStyle: [{ backgroundColor: '#410FA3'}], headerTintColor: 'white'}}/>
        <Stack.Screen name={GuessTheAnimalSuccsesName} component={GuessTheAnimalSuccsesScreen} options={{headerTitleAlign: 'center', headerStyle: [{ backgroundColor: '#410FA3'}], headerTintColor: 'white'}}/>
        <Stack.Screen name={GuessTheAnimalFalseName} component={GuessTheAnimalFalseScreen} options={{headerTitleAlign: 'center', headerStyle: [{ backgroundColor: '#410FA3'}], headerTintColor: 'white'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
