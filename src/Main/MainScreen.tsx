import { View, Text, Image,  Pressable } from 'react-native';

import { styles } from '../Styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import GuessTheAnimalScreen from './GuessTheAnimalScreen';

export const screenName = 'MainScreen';

function MainScreen(): React.JSX.Element {

    const navigation = useNavigation();

    const handleProfile = () => {
        if (navigation)
            navigation.navigate(ProfileScreen as never);
    };
    const handleGuessTheAnimal = () => {
        if (navigation)
            navigation.navigate(GuessTheAnimalScreen as never);
    };
    const handlePress = (text) => {
    };

    return (
        <View style={{backgroundColor: 'white'}}>
            <View style={styles.profileContainer}>
                <Pressable onPress={handleProfile}>
                    <Image style={styles.avatar} />
                    <Text style={styles.userNickName}>Hello, Emil</Text>
                </Pressable>
                <Text style={styles.textProfileDescription}>Are you ready for learning today?</Text>
            </View>
            <View style={{ ...styles.container, marginTop: 0, alignItems: 'flex-start', height: 260, marginBottom: 11 }}>
                <Text style={{ ...styles.userNickName, marginLeft: 24, marginTop: 11, color: 'black' }}>Top users</Text>
                <View style={styles.containerTopUser}>
                    <Image source={require('../../assets/vanGogh.png')} style={styles.imageTopUser} />
                    <Text style={styles.centerTextTopUser}>Vincent van Gogh</Text>
                    <Text style={styles.rightTextTopUser}>12 points</Text>
                </View>
                <View style={{ ...styles.containerTopUser, marginTop: 10 }}>
                    <Image source={require('../../assets/Mendeleev.png')} style={styles.imageTopUser} />
                    <Text style={styles.centerTextTopUser}>Dmitri Ivanovich Mendeleev</Text>
                    <Text style={styles.rightTextTopUser}>10 points</Text>
                </View>
                <View style={{ ...styles.containerTopUser, marginTop: 10 }}>
                    <Image source={require('../../assets/Tepes.png')} style={styles.imageTopUser} />
                    <Text style={styles.centerTextTopUser}>Vlad Tepes </Text>
                    <Text style={styles.rightTextTopUser}>8 points</Text>
                </View>
            </View>
            <View style={{ ...styles.container, marginTop: 0, alignItems: 'flex-start', paddingHorizontal: 24 }}>
                <Text style={{ ...styles.userNickName, marginTop: 0, color: 'black', marginBottom: 9 }}>Available excersises</Text>
                <View style={styles.row}>
                    <Pressable style={{...styles.tile, backgroundColor: '#5B7BFE'}} onPress={handleGuessTheAnimal}>
                        <Image source={require('../../assets/beer.png')} style={styles.imageGame} />
                        <Text style={styles.textGame}>Guess the animal</Text>
                    </Pressable>
                    <Pressable style={{...styles.tile, backgroundColor: '#D6185D'}} onPress={() => handlePress('Tile 2')}>
                        <Image source={require('../../assets/pencil.png')} style={styles.imageGame} />
                        <Text style={styles.textGame}>Word practice</Text>
                    </Pressable>
                </View>
                <View style={styles.row}>
                    <Pressable style={{...styles.tile, backgroundColor: '#F76400', marginTop: 17}} onPress={() => handlePress('Tile 3')}>
                        <Image source={require('../../assets/stereo.png')} style={styles.imageGame} />
                        <Text style={styles.textGame}>Audition</Text>
                    </Pressable>
                    <Pressable style={{...styles.tile, backgroundColor: '#5BA890', marginTop: 17}} onPress={() => handlePress('Tile 4')}>
                        <Image source={require('../../assets/game.png')} style={styles.imageGame} />
                        <Text style={styles.textGame}>Game</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default MainScreen;