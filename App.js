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
import ListarProdutos from './src/ListarProdutos';
import CadastroProdutos from './src/CadastroProdutos';
import EditProdutos from './src/EditProdutos';
import Mapa from './src/Mapa';
import Higiene_Pessoal from './src/produtos/higiene_pessoal';
import Limpeza from './src/produtos/limpeza';
import Bebidas_Quentes from './src/produtos/bebidas_quentes';
import Biscoitos from './src/produtos/biscoitos';
import Molhos from './src/produtos/molhos';
import Perfumaria from './src/produtos/perfumaria';
import Temperos from './src/produtos/temperos';
import Bomboniere from './src/produtos/bomboniere';
import Mercearia from './src/produtos/mercearia';
import Salgadinhos from './src/produtos/salgadinhos';
import Refrigerantes from './src/produtos/refrigerantes';





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

      <Drawer.Screen name="Higiene_Pessoal" component={Higiene_Pessoal}
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

      <Drawer.Screen name="Bebidas_Quentes" component={Bebidas_Quentes}
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
      
      <Drawer.Screen name="ListarProdutos" component={ListarProdutos}
        options={{
          title: 'Produtos',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />


     <Drawer.Screen name="CadastroProdutos" component={CadastroProdutos}
        options={{
          title: 'Cadastrar Produto',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
            />
          ),
        }}
      />




     <Drawer.Screen name="EditProdutos" component={EditProdutos}
        options={{
          title: 'Editar Produto',
          drawerIcon: ({focused, size}) => (
            <Icons
              name="shopping-cart"
              size={size}
              color={focused ? '#FFF' : '#ED1C24'}
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