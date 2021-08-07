import React, {useContext, useEffect, useState} from 'react';
import {View, Text,  StyleSheet, TextInput, Button, ActivityIndicator } from 'react-native';
import firebase from '../firebase';
import {UserContext} from './UserContext.jsx';

export default function Login({navigation}) {
    const {logado, deslogado} = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [newUser, setNewUser] = useState(false);
    const [state, setState] = useState({
        email:'',
        senha:'',
        msg:'',
    })

    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
    }

    useEffect(
      ()=>{
        const auth = firebase.auth;
        const unsubscribed = auth.onAuthStateChanged(
          user => {
            if(user){
              if(user.emailVerified){
                logado(user);
                navigation.navigate("Cadastro_Clientes")
              }else{
                auth.signOut();
                deslogado();
                setLoading(false);
              }
            }else{
              setLoading(false);
            }
          }
        )
        return() => {
          unsubscribed();
        }
      },[]
    )

    const login = async () => {
      const auth = firebase.auth;
      const {email, senha} = state;
      try{
        const resposta = await auth.signInWithEmailAndPassword(email, senha);
      }catch(error){
        setState({...state, msg:'Email ou senha inválidos!'});
      }
    }

    const cadastrar = async ()=> {
      const auth = firebase.auth;
      const {email, senha} = state;
      if(senha.length >= 6){
        try{
          const resposta = await auth.createUserWithEmailAndPassword(email, senha);
          auth.currentUser.sendEmailVerification();
          setNewUser(false);
          setState({...state, msg: "Verifique sua conta de email."})
        }catch(error){
          setState({...state, msg: "Não foi possível cadastrar o usuário."})
        }
      }else{
        setState({...state,msg:"Senha deve conter no mínimo 6 caracteres."})
      }
    }

    if(loading){
      return <ActivityIndicator/>
    }

    return(
        <View style={styles.loginView}>
            <View style={styles.formView}>
                <Text>{newUser ? 'Novo Usuário' : 'Login'}</Text>

                <TextInput style={styles.input}
                    placeholder='Email'
                    defaultValue={state.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                />
                                
                <TextInput style={styles.input}
                    placeholder='Senha'
                    defaultValue={state.senha}
                    secureTextEntry={true}
                    onChangeText={(value) => handleInputChange('senha', value)}
                />

                {newUser ? 
                  <Button title="Cadastrar"
                  onPress={cadastrar}/> 
                  : <Button title="Login"
                  onPress={login}/>
                }

                <Text style={styles.msg}>{state.msg}</Text>
                <Text onPress={()=>setNewUser(true)}>Cadastre-se</Text>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    loginView: {
      width:'100%',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    formView: {
      width: '80%'
    },
    input:{
      fontSize:16,
      padding: 5,
      margin: 5,
    },
    msg:{
      color:'red',
    }
  })
