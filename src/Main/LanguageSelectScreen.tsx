import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { colors, styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import LoginScreen, { screenName as LoginName } from './LoginScreen';

export const screenName = 'LanguageSelectionScreen';

function LanguageSelectionScreen(): React.JSX.Element {

  const [selectedLanguage, setSelectedLanguage] = useState(1);

  const navigation = useNavigation();

  const languages = [
    { id: 1, name: 'Russian' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Chinese' },
    { id: 4, name: 'Belarus' },
    { id: 5, name: 'Kazakh' },
  ];

  const handleLanguageSelection = (languageId) => {
    setSelectedLanguage(languageId);
  };

  const handleChoose = () => {
    if (navigation)
      navigation.navigate(LoginName as never);
  };

  return (
    <View>
        <Text style={[styles.textTitleLanguage, { width: '100%', marginTop: 12, paddingLeft: 32 }]}>What is your Mother language?</Text>
        <View style={[styles.container, {marginTop: 16}]}>
        {languages.map((language) => (
            <Pressable
            key={language.id}
            style={[
            styles.languageButton,
            selectedLanguage === language.id && styles.selectedLanguage,
        ]}
        onPress={() => handleLanguageSelection(language.id)}
        >
            <Text style={styles.languageText}>{language.name}</Text>
        </Pressable>
        ))}
        <Pressable style={[styles.button, {marginTop: 150}]} onPress={handleChoose}>
            <Text style={styles.textButton}>Choose</Text>
        </Pressable>
        </View>
    </View>
  );
};

export default LanguageSelectionScreen;