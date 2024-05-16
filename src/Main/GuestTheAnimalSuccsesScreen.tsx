
import { View, Text, Image, TextInput, Button, StyleSheet, Pressable } from 'react-native';

import { styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

export const screenName = 'GuessTheAnimalSuccsesScreen';

function GuessTheAnimalSuccsesScreen(): React.JSX.Element {

    const navigation = useNavigation();

    const handleNext = () => {
        // if (navigation)
        //     navigation.navigate(GuessTheAnimalScreen as never)
    }

    return (
        <View>
            <View>
                <Image source={require('../../assets/PAY-main.png')} style={styles.imageExersize}></Image>
                <Text style={styles.label}>Holy Molly! That is Right!</Text>
            </View>
            <View>
                <Pressable style={styles.button} onPress={handleNext}>
                    <Text style={styles.textButton}>Next</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default GuessTheAnimalSuccsesScreen;