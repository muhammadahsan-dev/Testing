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
import user from '../images/user.png';
import register from '../images/registerImg.jpg';
import go from '../images/go.png';

export default class Registration_Details extends Component {
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
          <View style={{margin: 10}} />
          <View style={styles.RegisterationContent}>
            <View style={styles.registerId}>
              <Text
                style={{fontSize: 25, color: '#7f8c8d', fontWeight: 'bold'}}>
                RegistrationID
              </Text>
            </View>
            
          </View>
          <View style={styles.RegisterationContent}>
            <View style={styles.registerId}>
              <Image source={register} style={{width: 100, height: 100}} />
            </View>
            <View style={styles.registerText}></View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#7f8c8d'}}>Phone No</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>92-349-2322XXX</Text>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#7f8c8d'}}>Branch Name</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>RYK-Saddar</Text>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#7f8c8d'}}>City</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Rahim Yaar Khan</Text>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#7f8c8d'}}>District</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Rahim Yaar Khan</Text>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#7f8c8d'}}>Address</Text>
            </View>
            <View style={styles.registerImg}>
              <Text style={{fontSize: 25}}>Mohalla ABC St 13 New XYZ Town</Text>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#7f8c8d'}}>
                Number of animals to be registered
              </Text>
            </View>
            <View style={styles.registerText}>
              <Text style={{fontSize: 25}}>4</Text>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}></Text>
            </View>
            <View style={styles.registerText}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.DetailsContent2}>
                  <View style={styles.registerId}>
                    <Text
                      style={{
                        fontSize: 30,
                        color: 'black',
                      }}>
                      Verify
                    </Text>
                  </View>
                  <View style={styles.registerImg}>
                    <Image source={go} style={{width: 30, height: 30}} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

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
    marginLeft:15,
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
    marginLeft: 50
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
  registerText: {
    flex: 2,
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
    padding: 10,
    width: 200,
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
