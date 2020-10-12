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

export default class ForgetPass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.logo}>
            <Image source={logo} style={{width: 400, height: 200}} />
          </View>
          <View style={styles.content}>
            <View>
              <Text style={{fontSize: 24}}>
                Enter Code send to your verified mobile Number to change
                password
              </Text>
            </View>
            <View style={styles.Input}>
              <TextInput placeholder="Enter Code" style={styles.textInput} />
            </View>
            <View style={styles.buttonHolder}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  Verify
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
    marginTop: 50,
    backgroundColor: 'white',
  },
  logo: {
    flex: 3,
    padding: 30,
    justifyContent: 'center',
    marginTop: -10,
    flexDirection: 'row',
    marginBottom: 100,
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
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
