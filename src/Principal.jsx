import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { StyleSheet, StatusBar, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
// COMPONENTES
import Login from './Login';
import Home from './Home';
import Mapa from './Mapa';
import Login_Clientes from './Login_Clientes'
// import Carrossel from './Carrossel'
import ListarProdutos from './ListarProdutos';
import CadastroProdutos from './CadastroProdutos';
import EditProdutos from './EditProdutos';
//--------------------------------------------
import Acougue from './produtos/acougue';
import HigienePessoal from './produtos/HigienePessoal';
import Limpeza from './produtos/limpeza';
import BebidasQuentes from './produtos/BebidasQuentes';
import Biscoitos from './produtos/biscoitos';
import Molhos from './produtos/molhos';
import Perfumaria from './produtos/perfumaria';
import Temperos from './produtos/temperos';
import Bomboniere from './produtos/bomboniere';
import Mercearia from './produtos/mercearia';
import Salgadinhos from './produtos/salgadinhos';
import Refrigerantes from './produtos/refrigerantes';
import Enlatados from './produtos/Enlatados';
import Hortifruti from './produtos/Hortifruti';

//criar uma funçao para os icones aparecerem na barra de navegação do app
//function escolhendoIcone({color, size}){

//}
//EXISTE
//const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Principal() {
  return (
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

      <Drawer.Screen name="Login_Clientes" component={Login_Clientes}
            options={{
            title: 'Login Clientes',
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

      <Drawer.Screen name="Higiene_Pessoal" component={HigienePessoal}
        options={{
          title: 'Higiene Pessoal',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Limpeza" component={Limpeza}
        options={{
          title: 'Limpeza',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Bebidas_Quentes" component={BebidasQuentes}
        options={{
          title: 'Bebidas_Quentes',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

     <Drawer.Screen name="Biscoitos" component={Biscoitos}
        options={{
          title: 'Biscoitos',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

     <Drawer.Screen name=" Molhos" component={Molhos}
        options={{
          title: 'Molhos',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Perfumaria" component={Perfumaria}
        options={{
          title: 'Perfumaria',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Refrigerantes" component={Refrigerantes}
        options={{
          title: 'Refrigerantes',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Temperos" component={Temperos}
        options={{
          title: 'Temperos',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Bomboniere" component={Bomboniere}
        options={{
          title: 'Bomboniere',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Mercearia" component={Mercearia}
        options={{
          title: 'Mercearia',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Salgadinhos" component={Salgadinhos}
        options={{
          title: 'Salgadinhos',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Enlatados" component={Enlatados}
        options={{
          title: 'Enlatados',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />

      
      <Drawer.Screen name="Hortifruti" component={Hortifruti}
        options={{
          title: 'Hortifruti',
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