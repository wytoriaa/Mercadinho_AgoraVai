import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
// COMPONENTES
import Login from './Login';
import Home from './Home';
import Mapa from './Mapa';
import Login_Clientes from './Login_Clientes'
// import Carrossel from './Carrossel'
//--------------------------------------------
import Acougue from './produtos/Acougue';
import HigienePessoal from './produtos/HigienePessoal';
import Limpeza from './produtos/Limpeza';
import Bebidas from './produtos/Bebidas';
import Matinais from './produtos/Matinais';
import CondimentosTemperos from './produtos/CondimentosTemperos';
import Bomboniere from './produtos/Bomboniere';
import Mercearia from './produtos/Mercearia';
import Enlatados from './produtos/Enlatados';
import HortiFruti from './produtos/HortiFruti';
import Massas from './produtos/Massas';
import Descartaveis from './produtos/Descartaveis';
import Padaria from './produtos/Padaria';
import Laticinios from './produtos/Laticinios';
import Vestuario from './produtos/Vestuario';
import Geral from './produtos/Geral';
import Pet from './produtos/Pet';


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
      activeTintColor: '#2E3192',
      inactiveTintColor: '#2E3192',
      itemStyle: { alignItems:'flex-start',},
    }}
    screenOptions={{
      drawerStyle:{
        backgroundColor:  '#CCC',
      },
    }}
    >
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
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Login" component={Login}
        options={{
          title: 'Login',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="login"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Login_Clientes" component={Login_Clientes}
            options={{
            title: 'Login Clientes',
            drawerIcon: ({focused, size}) => (
                <Icons
                name="login"
                size={size}
                color={focused ? '#2E3192' : '#ED1C24'}
                />
            ),
            headerStyle: {
              backgroundColor: '#2E3192',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      />

      <Drawer.Screen name="Acougue" component={Acougue}
        options={{
          title: 'Açougue',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Higiene_Pessoal" component={HigienePessoal}
        options={{
          title: 'Higiene Pessoal',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Limpeza" component={Limpeza}
        options={{
          title: 'Limpeza',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Bebidas" component={Bebidas}
        options={{
          title: 'Bebidas',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

     <Drawer.Screen name="Matinais" component={Matinais}
        options={{
          title: 'Matinais',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

     <Drawer.Screen name="CondimentosTemperos" component={CondimentosTemperos}
        options={{
          title: 'CondimentosTemperos',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Bomboniere" component={Bomboniere}
        options={{
          title: 'Bomboniere',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Mercearia" component={Mercearia}
        options={{
          title: 'Mercearia',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Enlatados" component={Enlatados}
        options={{
          title: 'Enlatados',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="HortiFruti" component={HortiFruti}
        options={{
          title: 'HortiFruti',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Massas" component={Massas}
        options={{
          title: 'Massas',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Descartaveis" component={Descartaveis}
        options={{
          title: 'Descartaveis',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      
      <Drawer.Screen name="Padaria" component={Padaria}
        options={{
          title: 'Padaria',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Laticinios" component={Laticinios} 
        options={{
          title: 'Laticinios',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="place"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        
      />

      <Drawer.Screen name="Vestuario" component={Vestuario}
        options={{
          title: 'Vestuario',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Geral" component={Geral}
        options={{
          title: 'Geral',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Drawer.Screen name="Pet" component={Pet}
        options={{
          title: 'Pet',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#2E3192' : '#ED1C24'}
            />
          ),
          headerStyle: {
            backgroundColor: '#2E3192',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />








    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3192',
    alignItems: 'center',
    justifyContent: 'center',
  },
});