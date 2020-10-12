import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import notification from '../images/notification.png';
import img from '../images/registerImg.jpg';
import imgUpload from '../images/imgUpload.png';
import user from '../images/user.png';
import go from '../images/go.png';

export default class Claim_Lodge_Report extends Component {
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
              <Text style={styles.HeaderUserText}>M.Ahsan</Text>
            </View>
          </View>
          <View style={{margin: 10}} />

          <View>
            <Text style={{fontSize: 25, color: '#ff5733', fontWeight: 'bold'}}>
              Claim Lodge Report
            </Text>
          </View>
          <View style={{margin: 10}} />
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Upload 4 photos of animal (Front - Left - Right - Rear)
              </Text>
            </View>
            <View style={styles.registerText}>
              <TouchableOpacity>
                <Image source={imgUpload} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.DetailsContent}>
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
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Upload photo of CNIC of farmer
              </Text>
            </View>
            <View style={styles.registerText}>
              <TouchableOpacity>
                <Image source={imgUpload} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Image source={img} style={{width: 60, height: 60}} />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Veterinary Verification Form
              </Text>
            </View>
            <View style={styles.registerText}>
              <TouchableOpacity>
                <Image source={go} style={{width: 30, height: 30}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Owner's Verification Code
              </Text>
            </View>
            <View style={styles.registerText}></View>
          </View>
          <View style={{margin: 10}} />

          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Request Claim
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
    borderWidth: 1,
    borderColor: '#bdc3c7',
    paddingBottom: 20,
    paddingTop: 20,
  },
  registerId: {
    flex: 4,
    width: 50,
    alignItems: 'stretch',
    paddingLeft: 10,
    justifyContent: 'center',
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
