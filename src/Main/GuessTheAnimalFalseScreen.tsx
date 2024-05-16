import { View, Text, Image, Pressable } from 'react-native'

import { styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import GuessTheAnimalScreen from './GuessTheAnimalScreen';

export const screenName = 'GuessTheAnimalFalseScreen';

function GuessTheAnimalFalseScreen(): React.JSX.Element {

    const navigation = useNavigation();

    const handleTyAgain = () => {
        if (navigation)
            navigation.navigate(GuessTheAnimalScreen as never)
    }
    const handleNext = () => {
        // if (navigation)
        //     navigation.navigate(GuessTheAnimalScreen as never)
    }
    return (
        <View>
            <View>
                <Image source={require('../../assets/PAY-main.png')} style={styles.imageExersize}></Image>
                <Text style={styles.label}>{'Eh? Wrong answer :('}
                    That is: Racoon
                </Text>
            </View>
            <View>
            <Pressable style={styles.button} onPress={handleNext}>
                    <Text style={styles.textButton}>Next</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleTyAgain}>
                    <Text style={styles.textButton}>Next</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default GuessTheAnimalFalseScreen;