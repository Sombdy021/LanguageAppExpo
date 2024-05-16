import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./Styles/illustrations.png')}
        style={styles.image}
      />
    <Text style={styles.text}>LANGUAGE APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
  
    flex: -1,
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#410FA3',
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 27,
    color: 'black', 
    fontWeight:'bold',
  }
});

export default SplashScreen;