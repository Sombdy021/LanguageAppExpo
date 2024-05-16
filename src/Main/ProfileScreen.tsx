import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import MainScreen from './MainScreen';
import LanguageSelectionScreen from './LanguageSelectScreen';

export const screenName = 'ProfileScreen';

function ProfileScreen(): React.JSX.Element {

    const [profileImage, setProfileImage] = useState(require('../../assets/profile.png'));
    const navigation = useNavigation();

    const handleProfile = () => {
        if (navigation)
            navigation.navigate(MainScreen as never);
    };

    const handleDark = () => {
        // if (navigation)
        //     navigation.navigate()
    };

    const handleLogout = () => {
        // if (navigation)
        //     navigation.navigate()
    };

    const handleLanguageSelect = () => {
        if (navigation)
            navigation.navigate(LanguageSelectionScreen as never)
    };

    const handleChangeImage = () => {
      setProfileImage(require('../../assets/Mendeleev.png'));
    };

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.profileContainer}>
                <Pressable style={{ marginBottom: 20 }} onPress={handleProfile}>
                    <Image source={require('../../assets/profile.png')} style={styles.profileAvatar} />
                    <Text style={styles.userNickName}>Your profile, Emil</Text>
                </Pressable>
            </View>
            <View style={{...styles.container, marginTop: 267}}>
                <Pressable style={styles.button} onPress={handleDark}>
                    <Text style={styles.textButton}>Switch to Dark</Text>
                </Pressable>
                <Pressable style={{...styles.button, marginTop: 10}} onPress={handleLanguageSelect}>
                    <Text style={styles.textButton}>Change mother language</Text>
                </Pressable>
                <Pressable style={{...styles.button, marginTop: 10}} onPress={handleChangeImage}>
                    <Text style={styles.textButton}>Change your image</Text>
                </Pressable>
                <Pressable style={{...styles.button, marginTop: 10, backgroundColor: '#E5E5E5'}} onPress={handleLogout}>
                    <Text style={styles.textButton}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
};


export default ProfileScreen;