import Login from '../Screens/Login';
import ForgetPass from '../Screens/ForgetPass';
import ForgetPass2 from '../Screens/ForgetPass2';
import Main from '../Screens/MainScreen';
import QRCodeScan from '../Screens/QRCodeScan';
import After_QR_Scan from '../Screens/After_QR_Scan';
import Animal_Register_Form from '../Screens/Animal_Register_Form';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const screens = {
  Login: {
    screen: Login,
  },
  ForgetPass: {
    screen: ForgetPass,
  },
  ForgetPass2: {
    screen: ForgetPass2,
  },
  Main: {
    screen: Main,
  },
  QRCodeScan: {
    screen: QRCodeScan,
  },
  After_QR_Scan: {
    screen: After_QR_Scan,
  },
  Animal_Register_Form: {
    screen: Animal_Register_Form,
  }
};

const stackNavigator = createStackNavigator(screens, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff5733',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const AppContainer = createAppContainer(stackNavigator);
export default AppContainer;
