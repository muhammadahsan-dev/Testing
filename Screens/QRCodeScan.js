import React from 'react';
import { Linking, Alert, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeScan extends React.Component{

  ifScaned = e => {
     this.props.navigation.navigate("Animal_Register_Form");
    
    // Linking.openURL(e.data).catch(err=>
    //   Alert.alert("Invalid QRCode",e.data));
    //   console.log(e.data);
  }

 

  render(){
    return(
      <QRCodeScanner
      containerStyle ={{backgroundColor:"#FFF",marginBottom:"35%"}}
      onRead = {this.ifScaned}
      reactivate = {true}
      permissionDialogMessage = "Need Permission To Access Camera"
      reactivateTimeout = {10}
      showMarker = {true}
      markerStyle = {{borderColor:"#FFF",borderRadius:10}}
      /> 
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    borderWidth: 2.5,
    borderBottomWidth: 5,
    borderRightWidth: 5,
  }
})