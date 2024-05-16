import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, Pressable } from 'react-native';

import { colors, styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import GuessTheAnimalSuccsesScreen from './GuestTheAnimalSuccsesScreen';
import GuessTheAnimalFalseScreen from './GuessTheAnimalFalseScreen';

export const screenName = 'GuessTheAnimalScreen';

function GuessTheAnimalScreen(): React.JSX.Element {
    const [word, setWord] = useState('');
    const [screen, setScreen] = useState(1);
    const navigation = useNavigation();

    const handleCheckWord = () => {
        if (word.toLowerCase() === 'raccon') {
            navigation.navigate(GuessTheAnimalSuccsesScreen as never);
        }
        else {
            navigation.navigate(GuessTheAnimalFalseScreen as never);
        }
    };

    const handleProfile = () => {
        // if (navigation)
        //     navigation.navigate(ProfileScreen as never);
    };

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image source={require('../../assets/PAY-main.png')} style={styles.imageExersize}></Image>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Write who is on image:</Text>
                    <TextInput
                        style={styles.input}
                        value={word}
                        onChangeText={(text) => setWord(text)}
                    />
                </View>
                <Pressable style={styles.button} onPress={handleCheckWord}>
                    <Text style={styles.textButton}>Check Word</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default GuessTheAnimalScreen;