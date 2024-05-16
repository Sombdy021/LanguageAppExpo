import React, { useState, } from 'react';
import { useNavigation } from '@react-navigation/native';

import { colors, styles } from '../Styles/globalStyles';
import { screenName as LoginName } from './LoginScreen';
import { screenName as SelectionName } from './LanguageSelectScreen';

import {
    Text,
    useColorScheme,
    View,
    Image,
    Button,
    Pressable,
} from 'react-native';

const root = "../../";

export const screenName = 'OnBoarding';

function OnBoarding(): React.JSX.Element {

    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();
    const [boardIndex, setBoardIndex] = useState(0);

    const images = [
        require(root + 'assets/illustrations1.png'),
        require(root + 'assets/illustrations2.png'),
        require(root + 'assets/illustrations3.png'),
    ];

    const textTitle = [

        'Confidence in your words',
        'Take your time to learn',
        'The lessons you need to learn',
    ];

    const textDescription = [
        "With conversation-based learning, you'll be talking from lesson one",
        "Develop a habit of learning and make it a part of your daily routine",
        "Using a variety of learning styles to learn and retain",
    ];

    const button = [
        'Next',
        'More',
        'Choose a language',
    ];

    const changeImage = () => {
        if (boardIndex == 2) {
            navigation.navigate(SelectionName as never);
        }
        const newIndex = (boardIndex + 1) % images.length;
        setBoardIndex(newIndex);
    };

      
    const handleLogin = () => {
        if (navigation) {
          navigation.navigate(LoginName as never);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={images[boardIndex]}
                style={styles.image}
            />
            <View style={styles.circleContainer}>
                <View style={[styles.circle, boardIndex == 0 ? { backgroundColor: colors.orange } : { backgroundColor: colors.circle, opacity: 0.25 }]}></View>
                <View style={[styles.circle, boardIndex == 1 ? { backgroundColor: colors.orange } : { backgroundColor: colors.circle, opacity: 0.25 }]}></View>
                <View style={[styles.circle, boardIndex == 2 ? { backgroundColor: colors.orange } : { backgroundColor: colors.circle, opacity: 0.25 }]}></View>
            </View>

            <Text style={styles.textTitle}>{textTitle[boardIndex]}</Text>
            <Text style={styles.textDescription}>{textDescription[boardIndex]} </Text>

            <Pressable style={styles.button} onPress={changeImage}>
                <Text style={styles.textButton}>
                    {button[boardIndex]}
                </Text>
            </Pressable>
            <Pressable style={styles.skipButton} onPress={handleLogin}>
                <Text style={[styles.skipButton, { marginTop: 16 }]}>Skip onboarding</Text>
            </Pressable>
        </View>
    );
};
 
export default OnBoarding;