import React, {useEffect, useState} from 'react';
import firebase from '../firebase';
import { StyleSheet, TextInput, Text, View, Button,ScrollView} from 'react-native';

export default function AddUsers({navigation}){
    
    const [ok,setOk] = useState(false);
    
    const [state, setState] = useState({
        nome: '',
        email: '',
        endereco:'',
        numero:'',
        cep:'',
        bairro:'',
        complemento:'',
        referencia:'',
        telefone:'',
        pedido:'',
        quantidade:'',
        
    });

    // const useState = ({ bairro }) => {
    //     if (bairro == 'Cruzeiro') {
    //       return alert ('Sua água chegara em breve!')
    //     }
    //     else {
    //        return alert ('Não entregamos nesse bairro!')
    //     }

    //   }

    
    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
        
    }

 
 
    const addUser = async () => {
       
        await firebase.db.collection('cadastro').add(state).then(
            ()=>{
                alert("salved");
               
                setOk(true);
            }
        ).catch(
            ()=>alert("não foi possivel inserir")
        )
    }
   
    if(ok){
        alert("cadastrado");
        navigation.popToTop();
    }

   
    console.log(state);
    return(
        
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.h1}>Pedido Água</Text>
               
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
                    keyboardType='numeric'
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
                    placeholder='Bairro : Cruzeiro'
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
                <TextInput
                    style={styles.input}
                    placeholder='Pedido'
                    defaultValue={state.pedido}
                    onChangeText={
                        (value)=>handleInputChange('pedido', value)
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder='Quantidade'
                    keyboardType='numeric'
                    defaultValue={state.quantidade}
                    onChangeText={
                        (value)=>handleInputChange('quantidade', value)
                    }
                />
                

                <Button
                    style={styles.input}
                    title="Realizar Pedido"
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
        height:50, 
        width:'90%',
        borderWidth:1, 
        padding:10,
        marginTop:5
      }
});