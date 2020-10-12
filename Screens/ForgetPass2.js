import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from '../images/logo.png';

export default class ForgetPass2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.logo}>
            <Image source={logo} style={{width: 400, height: 200}} />
          </View>
          <View style={styles.content}>
            <View style={styles.Input}>
              <TextInput
                placeholder="Enter Password"
                style={styles.textInput}
              />
            </View>
            <View style={styles.Input}>
              <TextInput
                placeholder="Re-enter Password"
                style={styles.textInput}
              />
            </View>
            <View style={styles.buttonHolder}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  subContainer: {
    marginTop: 80,
    backgroundColor: 'white',
  },
  logo: {
    flex: 3,
    padding: 30,
    justifyContent: 'center',
    marginTop: -10,
    flexDirection: 'row',
  },
  content: {
    flex: 3,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: -400,
  },
  Input: {
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ecf0f1',
    marginTop: 15,
    borderBottomColor: '#ff5733',
    borderBottomWidth: 3,
  },
  textInput: {
    color: 'black',
    fontSize: 25,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    borderWidth: 2.5,
    borderBottomWidth: 5,
    borderRightWidth: 5,
  },
  buttonHolder: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPass: {
    marginTop: 25,
    fontSize: 17,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
