import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import menu from '../images/menu.png';
import user from '../images/user.png';
import register from '../images/registerImg.jpg';
import go from '../images/go.png';

export default class After_QR_Scan extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.Header}>
            <View style={styles.HeaderMenuIcon}>
              <TouchableOpacity onPress={this.Handler}>
                <Image source={menu} style={{width: 60, height: 60}} />
              </TouchableOpacity>
            </View>
            <View style={styles.HeaderUser}>
              <Image source={user} style={{width: 40, height: 40}} />
              <Text style={styles.HeaderUserText}>M.Ahsan</Text>
            </View>
          </View>
          <View style={{margin: 10}} />
          <View style={styles.RegisterationContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25}}>RegisterationId</Text>
            </View>
            <View style={styles.registerImg}>
              <Image source={register} style={{width: 150, height: 150}} />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}>
                Owner Details
              </Text>
            </View>
            <View style={styles.registerImg}>
              <Image source={go} style={{width: 30, height: 30}} />
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}>Color</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Details Goes Here</Text>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}>Breed</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Details Goes Here</Text>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}>Gender</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Details Goes Here</Text>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}>Age</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Details Goes Here</Text>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}>Type</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Details Goes Here</Text>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}>
                Vaccination history
              </Text>
            </View>
            <View style={styles.registerImg}>
              <Image source={go} style={{width: 30, height: 30}} />
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Perform Vaccination Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Generate Report
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
    paddingBottom: 10,
    paddingTop: 10,
  },
  registerId: {
    flex: 2,
    width: 50,
    alignItems: 'stretch',
    paddingLeft: 10,
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
    width: 300,
    borderWidth: 2.5,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    alignItems: 'center',
    height: 60,
    marginTop: 10,
  },
});
