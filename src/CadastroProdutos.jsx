import React, {useEffect, useState} from 'react';
import firebase from '../firebase';
import { StyleSheet, TextInput, Text, View, Button, Switch, TouchableOpacity } from 'react-native';
// import {Picker} from '@react-native-picker/picker';

export default function CadastroProdutos({navigation}){
    const[ok, setOk] = useState(false);
    const[state, setState] = useState({
        codigo:'',
        grupo:'',
        descricao:'',
        nome:'',
        preco:'',
        status:{
            porcentagem:'',
            promocao:false,
        },
        quantidade:''
    })

    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
    }

        
    const cadastro = async()=>{
        await firebase.db.collection("produtos").add(state)
        .then(
            ()=>{
                alert("Produto Cadastrado com Sucesso!");
                setOk(true)
            }    
        )
        .catch(
            error=>alert(error)
        )
    }
    // if(ok){
    //     navigation.popToTop();
    // }

    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Cadastro dos Produtos</Text>
            <TextInput placeholder="Codigo" defaultValue={state.codigo}
                        onChangeText={(value)=>handleInputChange('codigo', value)} style={styles.input}/>
            <TextInput placeholder="Produto" defaultValue={state.nome}
                        onChangeText={(value)=>handleInputChange('nome', value)} style={styles.input}/>
            <TextInput placeholder="Grupo" defaultValue={state.grupo}
                        onChangeText={(value)=>handleInputChange('grupo', value)} style={styles.input}/>            
            <TextInput placeholder="Descrição" defaultValue={state.descricao}
                        onChangeText={(value)=>handleInputChange('descricao', value)} style={styles.input}/>
            <TextInput placeholder="Preço" defaultValue={state.preco}
                        onChangeText={(value)=>handleInputChange('preco', value)} style={styles.input}/>
            <TextInput placeholder="Quantidade" defaultValue={state.quantidade}
                        onChangeText={(value)=>handleInputChange('quantidade', value)} style={styles.input}/>              
            <Text>Promoção:</Text>
            <Switch value={state.status.promocao} onValueChange={(valorSwitch)=> setState({...state, promocao: valorSwitch})}/> 
            <TextInput placeholder="Porcentagem" defaultValue={state.status.porcentagem}
                        onChangeText={(value)=>handleInputChange('porcentagem', Number(value))} style={styles.input}/> 
             {/* <Picker selectedValue={state.Promoção} onValueChange={(itemValue, itemIndex) =>  setState({...state, Promoção: itemValue})}>
                    <Picker.Item label="Off" value={Boolean(false)} />
                    <Picker.Item label="On" value={Boolean(true)}  /> 
            </Picker>  */}
            {/* <TextInput placeholder="Promoção" defaultValue={state.Promoção}
                        onChangeText={(value)=>handleInputChange('Promoção', value)} />   */}
            
            <TouchableOpacity style={styles.botao} onPress={()=>cadastro()}><Text>Cadastrar</Text></TouchableOpacity>                                
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:12
    }, 
    h1:{
        fontSize:20,
        fontWeight:'bold',
        padding:12
    },
    input:{
        height: 40,
        width:'90%',
        borderWidth:2,
        padding:10,
        margin:8,
        borderRadius:10,
        borderColor:'grey'
    },
    botao:{
        backgroundColor:'blue',
        padding: 10
    }

    
})