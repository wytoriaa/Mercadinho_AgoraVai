import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, StatusBar, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Principal from "./src/Principal"
import Login from './src/Login';
import { UserContext } from './src/UserContext';
import ListarProdutos from './src/ListarProdutos';
import EditProdutos from './src/EditProdutos';
import CadastroProdutos from './src/CadastroProdutos';
import DeleteProdutos from  "./src/DeleteProdutos" 
import Principal2 from './src/Principal2';
import Login_Clientes from './src/Login_Clientes';
import Cadastro_Clientes from './src/Cadastro_Clientes';
import Login_Compra_Agua from './src/Login_Compra_Agua';
import Compra_Agua from './src/Compra_Agua';
//criar uma funçao para os icones aparecerem na barra de navegação do app
//function escolhendoIcone({color, size}){

//}
//EXISTE
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {

   //verifica se ta logado
   const [isLogged, setIsLogged] = useState(false);
   //recebe o dado de logado
   const [user, setUser] = useState(null);
   
   const logado = async (user) => {
     setIsLogged(true);
     setUser(user);
   }
   const deslogado = async () => {
     setIsLogged(false); // voltando para o login
     setUser(null); // eu retiro o usuário
   }

   
  return (
  <NavigationContainer style={styles.container}>
    <StatusBar/>
    <UserContext.Provider value={{user, logado, deslogado}}>
    <Stack.Navigator initialRouteName={Principal} screenOptions={{
      headerShown: false
    }}
    //  navigationOptions: { header: { visible: false } }
>
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ListarProdutos" component={ListarProdutos} />
      <Stack.Screen name="EditProdutos" component={EditProdutos} />
      <Stack.Screen name="CadastroProdutos" component={CadastroProdutos} />
      
      <Stack.Screen name="DeleteProdutos" component={DeleteProdutos} />
      <Stack.Screen name="Login_Clientes" component={Login_Clientes} />
      <Stack.Screen name="Cadastro_Clientes" component={Cadastro_Clientes} />
      <Stack.Screen name="Login_Compra_Agua" component={Login_Compra_Agua} />
      <Stack.Screen name="Compra_Agua" component={Compra_Agua} />
    </Stack.Navigator>

    {/* <Stack.Navigator initialRouteName={Principal}
    //  navigationOptions: { header: { visible: false } }
>
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Login_Clientes" component={Login_Clientes} />
      <Stack.Screen name="Cadastro_Clientes" component={Cadastro_Clientes} />
     
    </Stack.Navigator> */}
    </UserContext.Provider>
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