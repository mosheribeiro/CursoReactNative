import { createAppContainer, createStackNavigator} from 'react-navigation';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
const AppNavigator = createStackNavigator({
  'Login':{
    screen: LoginPage,
    navigationOptions:{
      title:'Bem vindo!',
    }
  },
  'Main':{
    screen: MainPage,
    navigationOptions:{
      title:'OPA!',
    }
  },
},{
  defaultNavigationOptions: {
    title: 'Séries!',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle:{
      color:'white',
      fontSize: 30,
    }
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;