import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Picker,
} from 'react-native';
import notification from '../images/notification.png';
import img from '../images/registerImg.jpg';
import imgUpload from '../images/imgUpload.png';
import user from '../images/user.png';
// import {Picker} from '@react-native-community/picker';

export default class Animal_Register_Form extends Component {
  state = {value: '', gender: ''};
  updateUser = (val) => {
    this.setState({value: val});
  };
  updateGender = (val) => {
    this.setState({gender: val});
  };
  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.Header}>
            <View style={styles.HeaderMenuIcon}>
              <TouchableOpacity onPress={this.Handler}>
                <Image source={notification} style={{width: 60, height: 60}} />
              </TouchableOpacity>
            </View>
            <View style={styles.HeaderUser}>
              <Image source={user} style={{width: 40, height: 40}} />
              <Text style={styles.HeaderUserText}>KYLS</Text>
            </View>
          </View>
          <View style={{margin: 10}} />

          <View>
            <Text style={{fontSize: 25, color: '#7f8c8d', fontWeight: 'bold'}}>
              Animal Register Form
            </Text>
          </View>
          <View style={{margin: 20}} />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
              marginLeft: 20,
            }}>
            <View style={{flex: 1, height: 1, backgroundColor: '#7f8c8d'}} />
          </View>

          <View style={{margin: 10}} />
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  marginRight: 30,
                  marginLeft: 30,
                  fontSize: 25,
                  fontWeight: 'bold',
                }}
                placeholder="Enter Color"
              />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  marginRight: 30,
                  marginLeft: 30,
                  fontSize: 25,
                  fontWeight: 'bold',
                }}
                placeholder="Enter Breed"
              />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#ff5733',
                  marginRight: 30,
                  marginLeft: 30,
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                  
                <Picker
                  style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                  }}
                  selectedValue={this.state.value}
                  onValueChange={this.updateUser}>
                  <Picker.Item label="Choose livestock type" value="" />
                  <Picker.Item label="Buffalo" value="Buffalo" />
                  <Picker.Item label="Cow" value="Cow" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.ageHolder}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Age</Text>
            </View>
            <View style={styles.registerId}>
              <TextInput
                style={{
                  borderWidth: 1,
                  fontSize: 25,
                  fontWeight: 'bold',
                  borderColor: '#ff5733',
                  paddingLeft: 10,
                }}
                placeholder="Your Age"
              />
            </View>
            <View style={styles.registerId}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#ff5733',
                  marginRight: 30,
                  marginLeft: 30,
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                <Picker
                  style={{
                    fontWeight: 'bold',
                  }}
                  selectedValue={this.state.value}
                  onValueChange={this.updateUser}>
                  <Picker.Item label="Gender" value="" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <TextInput
                style={{
                  borderBottomWidth: 1,

                  fontSize: 25,
                  fontWeight: 'bold',
                }}
                placeholder="Enter Animal Identification"
              />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                Please Upload 4 photos of animal (Front - Rear - Left - Right )
              </Text>
            </View>
            <View style={styles.registerText}>
              <TouchableOpacity style={{marginRight: 30}}>
                <Image source={imgUpload} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Image source={img} style={{width: 60, height: 60}} />
            </View>
            <View style={styles.registerId}>
              <Image source={img} style={{width: 60, height: 60}} />
            </View>
            <View style={styles.registerId}>
              <Image source={img} style={{width: 60, height: 60}} />
            </View>
            <View style={styles.registerId}>
              <Image source={img} style={{width: 60, height: 60}} />
            </View>
          </View> */}
          <TouchableOpacity style={styles.button} onPress={this.Handler2}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Register
            </Text>
          </TouchableOpacity>
          <View style={{margin: 10}} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  Header: {
    flexDirection: 'row',
    height: 80,
    alignContent: 'stretch',
    backgroundColor: '#ff5733',
    justifyContent: 'center',
  },
  HeaderMenuIcon: {
    flex: 3,
    marginTop: 10,
    marginLeft: 15,
  },
  HeaderUser: {
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
    marginLeft: 30,
  },
  HeaderUserText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  RegisterationContent: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  DetailsContent: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  registerId: {
    flex: 1,
    width: 50,
    alignItems: 'stretch',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ageHolder: {
    width: 50,
    alignItems: 'stretch',
    paddingLeft: 10,
    justifyContent: 'center',
    marginLeft: 30,
  },
  registerText: {
    flex: 1,
    width: 50,
    alignItems: 'flex-end',
    paddingRight: 10,
    justifyContent: 'center',
  },
  registerImg: {
    width: 50,
    alignItems: 'flex-end',
    paddingRight: 10,
    flex: 2,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    width: 200,
    borderWidth: 2.5,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    alignItems: 'center',
    height: 60,
    marginTop: 10,
  },
  DetailsContent2: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
  },
});
