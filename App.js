import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { StyleSheet, StatusBar, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Home from './src/Home';
import Carrossel from './src/Carrossel'
import Login from './src/Login';
import Acougue from './src/produtos/acougue';
import Mapa from './src/Mapa';



//criar uma funçao para os icones aparecerem na barra de navegação do app
//function escolhendoIcone({color, size}){

//}
//EXISTE
//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer style={styles.container}>
    <StatusBar/>
    <Drawer.Navigator initialRouteName={Home}
    drawerContentOptions={{
      activeTintColor: '#FFF',
      inactiveTintColor: '#FFF',
      itemStyle: { alignItems:'flex-start',},
    }} drawerStyle={{
      backgroundColor:  '#2E3192',
      alignItems: "center",
    }}>
      
      <Drawer.Screen name="Home" component={Home} 
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="home"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Login" component={Login}
        options={{
          title: 'Login',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="login"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Acougue" component={Acougue}
        options={{
          title: 'Açougue',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Mapa" component={Mapa} 
        options={{
          title: 'Mapa',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="home"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
        }}
      />
      
    </Drawer.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});