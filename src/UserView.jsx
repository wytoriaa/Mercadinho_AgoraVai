import React, {useContext, useEffect, useState} from 'react';
import {View, Text,  StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import firebase from '../firebase';
import {UserContext} from './UserContext';



export default function UserView(){
    const {user, deslogado} = useContext(UserContext);
    const [userView, setUserView] = useState(false);

    const logout = async () =>{
        const auth = firebase.auth;
        await auth.signOut();
        deslogado();
    }

    if(userView){
        return(
            <View>
                <Text>Usuario {user.name} logado</Text>
                <Button title="Sair" onPress={logout} />
                <Text onPress={()=>setUserView(false)}>Ocultar</Text>
            </View>
            )
    }else{
        return(
            <View>
                <Text onPress={()=>setUserView(true)}>Usuário</Text>
            </View>
            )
    }
}
