import {
  StyleSheet,
} from 'react-native';

export const colors = {
  main: '#410FA3',
  blue: '#5B7BFE',
  dark: '#080E1E',
  light: '#FFFFFF',
  orange: '#F76400',
  circle: '#080E1E',
};
export const dark = {
  main: '#410FA3',
  blue: '#5B7BFE',
  dark: '#080E1E',
  light: '#FFFFFF',
  orange: '#F76400',
  circle: '#080E1E',
};


export const styles = StyleSheet.create({
  imageExersize: {
    width: 328,
    height: 328,
  },
  textGame: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
  },
  imageGame: {
    width: 79,
    height: 71,
    resizeMode: 'contain',
  },
  tile: {
    width: 153,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rightTextTopUser: {
    fontSize: 17,
    color: 'black',
    width: 73,
    textAlign: 'right',
  },
  centerTextTopUser: {
    fontSize: 17,
    fontWeight: 'bold',
    width: 173,
  },
  imageTopUser: {
    width: 32,
    height: 32,
    marginRight: 24,
  },
  containerTopUser: {
    marginLeft: 24,
    marginTop: 5,
    width: 344,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: '#E5E5E5',
  },
  textProfileDescription: {
    fontSize: 17,
    fontWeight: '500',
    color: '#B6B6B6',
    marginBottom: 11,
  },
  userNickName: {
    fontWeight: '500',
    fontSize: 22,
    color: 'white',
    marginTop: 5,
  },
  profileContainer: {
    paddingLeft: 24,
    width: '100%',
    backgroundColor: '#410FA3',
  },
  profileAvatar: {
    resizeMode: 'center',
    marginTop: 20,
    height: 134,
    width: 134,
    borderRadius: 100,
    backgroundColor: '#5BA890',
    paddingLeft: 20,
    marginTop: 6,
  },
  avatar: {
    marginTop: 20,
    height: 54,
    width: 54,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    paddingLeft: 20,
    marginTop: 6,
  },
  languageButton: {
    padding: 10,
    margin: 5,
    // borderWidth: 0.3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 327,
    height: 67,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#FFF6EB',
  },
  selectedLanguage: {
    backgroundColor: '#F76400',
  },
  languageText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
  },
  chooseButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  chooseButtonText: {
    color: 'white',
    fontSize: 18,
  },
  textTitleLogin: {
    fontWeight: '500',
    textAlign: 'center',
    width: '80%',
    fontSize: 22,
    color: 'black',
    marginBottom: 32,
    marginTop: 40,
  },
  loginButton: {
    color: '#5B7BFE',
    marginTop: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontWeight: '700',
  },
  skipButton: {
    marginTop: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  forgotButton: {
    fontWeight: '400',
    fontSize: 15,
    color: '#D6185D',
    // marginBottom: 10,
    paddingRight: 195,
    paddingBottom: 32,
    // paddingTop: 12,
  },
  passwordInput: {
    width: '87%',
    // paddingRight: 40,
  },
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 12,
    marginBottom: 20,
    height: 56,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'gray',
    borderRadius: 12,
    // marginBottom: 20,
    height: 56,
  },
  signupPassContainer: {
    width: '80%',
    marginBottom: 20,
  },
  signupPassConfContainer: {
    width: '80%',
    marginBottom: 142,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: '#363B44',
    fontWeight: '400',
    marginBottom: 8,
  },
  imageLogin: {
    width: 105,
    height: 82,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    fontSize: 15,
    width: '100%',
    height: 56,
    paddingHorizontal: 20,
    paddingVertical: 18,
    // marginBottom: 24,
  },
  skipButton: {
    // marginTop: 5,
    paddingHorizontal: 16,
    // paddingVertical: 8,
  },
  textSkipButton: {
    color: colors.orange,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    // flex: 1,
    // height: '1',
    // width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: 24,
    marginBottom: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'main',
  },
  textDescription: {
    textAlign: 'center',
    flex: -1,
    width: '70%',
    alignItems: 'center',
    justifyContent: "center",
    fontSize: 15,
    color: 'black',
    marginBottom: 50,
  },
  textTitleLanguage: {
    fontWeight: '500',
    fontSize: 22,
    width: '80%',
    paddingLeft: 24,
  },
  textTitle: {
    fontWeight: '500',
    textAlign: 'center',
    width: '80%',
    fontSize: 22,
    color: 'black',
    marginBottom: 8,
  },
  textButton: {
    fontWeight: '500',
    fontSize: 20,
    color: 'white',
    lineHeight: 24,
  },
  text: {
    textAlign: 'center',
    flex: -1,
    alignItems: 'center',
    justifyContent: "center",
    fontSize: 17,
    color: 'black',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 56,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#5B7BFE',
  },
  image: {
    marginTop: 50,
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 7,
  },
  circleContainer: {
    height: 10,
    width: 50,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});