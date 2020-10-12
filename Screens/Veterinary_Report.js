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
import user from '../images/user.png';
import info from '../images/info.png';
import go from '../images/go.png';

export default class Veterinary_Report extends Component {
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
            <Text style={{fontSize: 25, color: '#ff5733', fontWeight: 'bold'}}>
              Veterinary Report
            </Text>
          </View>
          <View style={{margin: 20}} />
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Where was the animal first seen ill ?
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  fontSize: 17,
                }}
              />
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Cause of Death ?
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  fontSize: 17,
                }}
              />
            </View>
            <View style={styles.registerImg}>
              <TouchableOpacity>
                <Image source={info} style={{width: 50, height: 50}} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Place of Death ?
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  fontSize: 17,
                }}
              />
            </View>
          </View>

          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Time and Date of Death ?
              </Text>
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  fontSize: 17,
                }}
                placeholder="Time"
              />
            </View>
            <View style={styles.registerId}>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  fontSize: 17,
                }}
                placeholder="Date"
              />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Date of last calving ?
              </Text>
              <TextInput
                style={{
                  borderBottomWidth: 2,
                  fontSize: 17,
                }}
              />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={{
                  borderWidth: 2,
                  fontSize: 17,
                  paddingLeft: 10,
                }}
                placeholder="Additional Details (Optional)"
                placeholderTextColor="#000000"
              />
            </View>
          </View>
          <View style={styles.DetailsContent}>
            <View style={styles.registerId}>
              <Text style={{fontSize: 25, color: '#ff5733'}}></Text>
            </View>
            <View style={styles.registerText}>
              <TouchableOpacity style={styles.button}>
                <View style={styles.DetailsContent2}>
                  <View style={styles.registerId}></View>
                  <View style={styles.registerImg}>
                    <Image source={go} style={{width: 30, height: 30}} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
    justifyContent: 'center',
    marginBottom: 20,
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
