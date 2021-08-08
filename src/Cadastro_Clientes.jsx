import React, {useEffect, useState} from 'react';
import firebase from '../firebase';
import { StyleSheet, TextInput, Text, View, Button,ScrollView} from 'react-native';

export default function AddUsers({navigation}){
     //constante de verificação que será usada para realizar o retorno a página principal do app. enquanto for false veremos a renderização de confirmação. Quando for true, direciona para o inicio. 
    const [ok,setOk] = useState(false);
     //estado que irá receber os valores do firebase para inserção
    const [state, setState] = useState({
        nome: '',
        email: '',
        endereco:'',
        numero:'',
        cep:'',
        bairro:'',
        complemento:'',
        referencia:'',
        telefone:''
        
    });

    // console.log(state);
    //função para realizar mudança automática no estado
    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
    }

    //inserir em uma collection
    const addUser = async () => {
        //através da função assincrona com await ele irá executar o comando de add() onde irá inserir o objeto dentro collection users. Será criado um doc com um id aleatório com as informações passadas dentro dele. A função then irá mostrar uma mensagem de alerta dizendo salved, caso não consiga inserir, será acionado catch.
        await firebase.db.collection('cadastro').add(state).then(
            ()=>{
                alert("salved");
                //quando ocorre a deleção o estado ok é alterado para true e renderizado
                setOk(true);
            }
        ).catch(
            ()=>alert("não foi possivel inserir")
        )
    }
    //quando ocorre a renderização por conta da exclusão, por ok ser true ele entra no if e retorna para a página anterior.    
    if(ok){
        alert("cadastrado");
        navigation.popToTop();
    }

    console.log(state);
    return(
        
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.h1}>Cadastro</Text>
                {/**campo  Nome*/}
                {/* <Text>{state.nome}</Text>
                <Text>{state.email}</Text> */}
                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    defaultValue={state.nome}
                    onChangeText={
                        (value)=>handleInputChange('nome', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    textContentType='emailAddress'
                    defaultValue={state.email}
                    onChangeText={
                        (value)=>handleInputChange('email', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Endereço'
                    defaultValue={state.endereco}
                    onChangeText={
                        (value)=>handleInputChange('endereco', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Numero'
                    defaultValue={state.numero}
                    onChangeText={
                        (value)=>handleInputChange('numero', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Cep'
                    defaultValue={state.cep}
                    onChangeText={
                        (value)=>handleInputChange('cep', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Bairro'
                    defaultValue={state.bairro}
                    onChangeText={
                        (value)=>handleInputChange('bairro', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Complemento'
                    defaultValue={state.complemento}
                    onChangeText={
                        (value)=>handleInputChange('complemento', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Referência'
                    defaultValue={state.referencia}
                    onChangeText={
                        (value)=>handleInputChange('referencia', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Fone'
                    defaultValue={state.telefone}
                    onChangeText={
                        (value)=>handleInputChange('telefone', value)
                    }
                />

                <Button
                    style={styles.input}
                    title="Adicionar"
                    onPress={addUser}
                />
            </View>
        </ScrollView>
        
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    padding:12
  },
  h1:{
      fontSize:20,
      fontWeight:'bold',
      padding:12
  }, 
  input:{
    height:60, 
    width:'90%',
    borderWidth:1, 
    padding:10,
    marginTop:5
  }
});