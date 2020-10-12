import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import menu from '../images/menu.png';
import user from '../images/user.png';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    VacName: 'Lorem Ipsum is',
    Date: '01, January 2021',
    vetName: 'Vet 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    VacName: 'Lorem Ipsum is',
    Date: '02, January 2021',
    vetName: 'Vet 2',
  },
];

const Item = ({VacName, date, vetName}) => (
  <View style={styles.item}>
    <View style={styles.listItem}>
      <View style={styles.item2}>
        <Text style={{flex: 5, fontSize: 20, color: '#ff5733'}}>Vac Name</Text>
        <Text style={{flex: 6, fontSize: 20}}>{VacName}</Text>
      </View>
      <View style={{margin: 5}} />

      <View style={styles.item2}>
        <Text style={{flex: 5, fontSize: 20, color: '#ff5733'}}>Date</Text>
        <Text style={{flex: 6, fontSize: 20}}>{date}</Text>
      </View>
      <View style={{margin: 5}} />

      <View style={styles.item2}>
        <Text style={{flex: 5, fontSize: 20, color: '#ff5733'}}>Vet Name</Text>
        <Text style={{flex: 6, fontSize: 20}}>{vetName}</Text>
      </View>
    </View>
  </View>
);
export default class Vaccination_History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: true,
      isValidPass: false,
    };
    this.Handler = this.Handler.bind(this);
    this.Add_Handler = this.Add_Handler.bind(this);
  }

  Handler() {
    console.log('Menu Clicked !');
  }
  Add_Handler() {
    console.log('Add Clicked !');
  }
  render() {
    const renderItem = ({item}) => (
      <Item VacName={item.VacName} date={item.Date} vetName={item.vetName} />
    );

    return (
      <View>
        <View style={styles.container}>
          <View style={styles.Header}>
            <View style={styles.HeaderMenuIcon}>
              <TouchableOpacity onPress={this.Handler}>
                <Image source={menu} style={{width: 60, height: 60}} />
              </TouchableOpacity>
            </View>
            <View style={styles.HeaderUser}>
              <Image source={user} style={{width: 40, height: 40}} />
              <Text style={styles.HeaderUserText}>KYLS</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Text style={{fontSize: 26, color: '#ff5733'}}>
              Vaccination History
            </Text>
            <View style={{margin: 20}} />

            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={styles.button} onPress={this.Add_Handler}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: '100%',
  },
  Header: {
    marginTop: -60,
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
  content: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
  },
  item: {
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#95a5a6',
    borderTopColor: '#95a5a6',
  },
  listItem: {
    backgroundColor: '#fff',
  },
  item2: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    width: 220,
    alignSelf: 'center',
    borderWidth: 2.5,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    alignItems: 'center',
    height: 60,
    marginTop: 190,
  },
});
