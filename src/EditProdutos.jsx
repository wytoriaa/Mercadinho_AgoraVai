import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, ScreenlView, ScrollView} from 'react-native';


export default function EditProdutos({ route, navigation }) {

    const [ok, setOk] = useState(false);

    const key = route.params;

    const[state, setState] = useState({
        Departamento: '',
        Descrição: '',
        Nome: '',
        Preço:'',
        Codigo:'',
        Promoção:false,
        ValorPromoção:'',
        Quantidade:'',
        urlImg:''
    })


    useEffect(
        () => navigation.addListener('focus', () => {
            userById(key);
        }), []
    );


    //recebendo um doc através do id
    const userById = async (id) => {
        //iniciando a referência do firebase firestore, acessando a collection users
        const produtos = firebase.db.collection('prod');
        //através da função doc() iremos passar como parâmetro o id do documento.
        const doc = await produtos.doc(id).get();
        //doc.data() irá mostrar os dados no formato de objeto.
        setState(doc.data());
    }


    // console.log(state);
    //função para realizar mudança automática no estado
    const handleInputChange = (name, value) => {
        setState({
            ...state, [name]: value
        })
    }




 
    const editarProduto = async () => {
      
        const produtos = firebase.db.collection('prod');
        //através da função assincrona com await ele irá executar o comando de update() realizando a alteração no doc com a key. O state com os valores atualizados serão usados para dar o update. A função then irá mostrar uma mensagem de alerta dizendo edited, caso não consiga editar, será acionado catch.
        await produtos.doc(key).update(state).then(
            () => {
                // alert("Produto editado com sucesso!")
                //quando ocorre a deleção o estado ok é alterado para true e renderizado
                setOk(true);
            }
        ).catch(
            () => alert("Não foi possível editar.")
        )
    }
   
    if(ok){
        navigation.popToTop();
    }


    return (

        <View style={styles.container}>
            <ScrollView >

            <Text style={styles.h1}>Cadastro dos Produtos</Text>
            <Text>Nome:</Text>
            <TextInput placeholder="Nome" defaultValue={state.Nome}
                        onChangeText={(value)=>handleInputChange('Nome', value)} style={styles.input}/>
            <Text>Departamento:</Text>
            <TextInput placeholder="Grupo" defaultValue={state.Departamento}
                        onChangeText={(value)=>handleInputChange('Departamento', value)} style={styles.input}/>
            <Text>Descrição:</Text>            
            <TextInput placeholder="Descrição" defaultValue={state.Descrição}
                        onChangeText={(value)=>handleInputChange('Descrição', value)} style={styles.input}/>
            <Text>Preço:</Text>
            <TextInput placeholder="Preço" defaultValue={state.Preço}
                        onChangeText={(value)=>handleInputChange('Preço', value)} style={styles.input}/>
            <Text>Codigo:</Text>
            <TextInput placeholder="Codigo" defaultValue={state.Codigo}
                        onChangeText={(value)=>handleInputChange('Codigo', value)} style={styles.input}/>
            <Text>Quantidade:</Text>
            <TextInput placeholder="Quantidade" defaultValue={state.Quantidade}
                        onChangeText={(value)=>handleInputChange('Quantidade', value)} style={styles.input}/>              
            <Text>Promoção:</Text>            
            <Switch value={state.Promoção} onValueChange={(value)=> setState({...state, Promoção: value})}/>   

            <Text>Valor promoção:</Text>
            <TextInput placeholder="ValorPromoção" defaultValue={state.ValorPromoção}
                        onChangeText={(value)=>handleInputChange('ValorPromoção', value)} style={styles.input}/>  

            <Text>urlImg:</Text>
            <TextInput placeholder="urlImg" defaultValue={state.urlImg}
                        onChangeText={(value)=>handleInputChange('urlImg', value)} style={styles.input}/>  
                
            <TouchableOpacity style={styles.botao} onPress={()=>{editarProduto()}}><Text>Editar</Text></TouchableOpacity>


        </ScrollView> 
      </View>

      
        
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:2
    }, 
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: "5%"
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12
    },
    input: {
        height: 40,
        width: '90%',
        borderWidth: 2,
        padding: 10,
        margin: 8,
        borderRadius: 10,
        borderColor: 'grey'
    },
    botao: {
        backgroundColor:'#3bbdc2',
        margin:10,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    }


})

