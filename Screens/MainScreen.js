import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  // Linking,
  // Alert,
} from 'react-native';


import user from '../images/user.png';
import search from '../images/search.png';
import mic from '../images/mic.png';
import go from '../images/go.png';
import QR from '../images/QR.png';
import notification from '../images/notification.png';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Reports',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Activity Log',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <View style={styles.listItem}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => console.log('Arrow Clicked')}>
        <Image source={go} style={styles.GoImageStyle} />
      </TouchableOpacity>
    </View>
  </View>
);
export default class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: true,
      isValidPass: false,
    };
    this.Handler = this.Handler.bind(this);
    this.Mic_Handler = this.Mic_Handler.bind(this);
    // this.QR_Handler = this.QR_Handler.bind(this);
    this.Arrow_Handler = this.Arrow_Handler.bind(this);
    this.registerationform = this.registerationform.bind(this);
    this.qrcodescan = this.qrcodescan.bind(this);
  }

  qrcodescan() {
    this.props.navigation.navigate('QRCodeScan');
  }

  registerationform() {
    this.props.navigation.navigate('RegisterationForm');
  }
  Handler() {
    console.log('Notification Clicked !');
  }
  Mic_Handler() {
    console.log('Mic Clicked !');
  }
  // QR_Handler() {
  //   console.log('QR Clicked !');
  // }
  Arrow_Handler() {
    console.log('Arrow Clicked !');
  }
  render() {
    const renderItem = ({item}) => <Item title={item.title} />;

    return ( 
      <View>
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

          <View style={styles.content}>
            <View style={styles.Input}>
              <View style={styles.SectionStyle}>
                <Image source={search} style={styles.ImageStyle} />
                <TextInput style={styles.inputField} placeholder="Search" />
                <TouchableOpacity onPress={this.Mic_Handler}>
                  <Image source={mic} style={styles.ImageStyle} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{margin: 30}} />
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            <View style={styles.QRCode}>
              <Image source={QR} style={{width: 130, height: 130}} />
              <TouchableOpacity style={styles.button} onPress={this.qrcodescan}>
                <Text
                  style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                  Scan QR Code
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  Header: {
    marginTop: 80,
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
  content: {
    marginTop: 30,
  },
  Input: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 15,
  },
  textInput: {
    color: '#ff5733',
    fontSize: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderRadius: 20,
  },
  inputField: {
    backgroundColor: '#fff',
    borderRadius: 20,
    color: '#ff5733',
    height: 60,
    fontSize: 20,
    width: 400,
    marginRight: -40,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
  },

  ImageStyle: {
    margin: 10,
    padding: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  GoImageStyle: {
    margin: 10,
    padding: 10,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#95a5a6',
    borderTopColor: '#95a5a6',
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff5733',
    width: 360,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  QRCode: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    color: 'white',
    marginBottom: 360,
  },
  QrImage: {
    flex: 2,
    backgroundColor: 'blue',
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    width: 220,
    borderWidth: 2.5,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    alignItems: 'center',
    height: 60,
    marginTop: 10,
  },
});
