import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import logo from '../images/logo.png';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      u_name: '',
      u_pass: '',
    };

    this.Handler = this.Handler.bind(this);
    this.forgetPass = this.forgetPass.bind(this);
    this.Register = this.Register.bind(this);
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  forgetPass() {
    this.props.navigation.navigate('ForgetPass');
  }
  Register() {
    this.props.navigation.navigate('Register');
  }
  Handler() {
    if (this.state.u_name === '') {
      Alert.alert('User Email is required');
    } else if (this.state.u_pass === '') {
      Alert.alert('User password is required');
    } else {
      const data = {email: this.state.u_name, password: this.state.u_pass};
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      fetch('https://whispering-bayou-41917.herokuapp.com/users/login', options)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          if (data === 'User Not found') {
            Alert.alert(data);
          } else {
            this.props.navigation.navigate('Main');
          }
        })
        .catch((err) => {
          Alert.alert(err);
        });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.logo}>
            <Image source={logo} style={{width: 400, height: 200}} />
          </View>
          {/* <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'} keyboardVerticalOffset={65}> */}
          <View style={styles.content}>
            <View style={styles.Input}>
              <TextInput
                placeholder="Enter Your Email"
                style={styles.textInput}
                onChangeText={(text) => this.setState({u_name: text})}
              />
            </View>
            <View style={styles.Input}>
              <TextInput underlineColorAndroid="transparent" value={this.state.hide} 
              textContentType={'password'} multiline={false} 
              secureTextEntry={this.state.hidePassword} placeholder="Enter Your Password" style={styles.textInput}
                onChangeText={(text) => this.setState({u_pass: text})}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.touchableBtn} 
              onPress={this.setPasswordVisibility}>
                <Image source={(this.state.hidePassword) ? require('../images/hide.png') : require('../images/view.png')}
                style={styles.buttonImage}/>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonHolder}>
              <TouchableOpacity style={styles.button} onPress={this.Handler}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={this.forgetPass}>
                <Text style={styles.forgotPass}>
                  Forgot Password ? Click Here
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 2}} />
          </View>
          {/* </KeyboardAvoidingView> */}
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
    marginTop: -80,
    flexDirection: 'row',
  },
  content: {
    flex: 3,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: -300,
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
  touchableBtn:{
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  }
});
