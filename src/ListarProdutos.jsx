import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import {StyleSheet, Button, Text, View, ActivityIndicator, FlatList} from 'react-native';

export default function ListarProdutos({navigation}){
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState([]);
    useEffect(
        () => navigation.addListener('focus', () => {pegaDados()}),[]
    )
    const pegaDados = async () => {
        const product = firebase.db.collection("produtos");
        const resposta = await product.get();
        const listProdutos = [];
        resposta.forEach(
            doc =>{
                listProdutos.push({
                    ...doc.data(),
                    key: doc.id
                })
            }
        )
        setState(listProdutos)
        setLoading(false)
    }
    console.log(state)
    if(loading){
        return<ActivityIndicator/>
    }
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Produtos Cadastrados</Text>
            <Button title="Adicionar" onPress={()=>{setLoading(true); navigation.navigate('CadastroProdutos')}}/>
          
            <FlatList data={state} renderItem={({item}) => (<View style={styles.container}>
                <Text>{item.codigo}</Text>
                <Text>{item.nome}</Text>
                <Text>{item.preco}</Text>
                <Text>{item.grupo}</Text>
                <Text>{item.descricao}</Text>
                <Text>{item.quantidade}</Text>
                <Text>{item.status.promocao}</Text>
                <Text>{item.status.porcentagem}</Text>
                <Button title="editar" onPress={()=>navigation.navigate("EditProdutos", item.key)}/>
                <Button title="X" color="red" onPress={()=>navigation.navigate("DeleteProdutos", item.key)}/>
            </View>)}/>
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
        height: 60,
        width:'90%',
        borderWidth:1,
        padding:10,
        marginTop:5
    },
    alert:{
        backgroundColor:'red',
    }
});