import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import {StyleSheet, Button, Text, View, ActivityIndicator, FlatList, TextInput} from 'react-native';

export default function ListarProdutos({navigation}){
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState([]);
    const [dados, setDados] = useState([]);
    useEffect(
        () => navigation.addListener('focus', () => {pegaDados()}),[]
    )
    const pegaDados = async () => {
        const product = firebase.db.collection("prod");
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

        var byDate = listProdutos.slice(0);
        byDate.sort(function(a,b) {
            console.log(typeof(a.Codigo))
            return a.Codigo - b.Codigo;
        });
        setState(byDate)

        setDados(byDate)
        setLoading(false)
    }
    // console.log(state)
    if(loading){
        return <ActivityIndicator/>
    }

    const handleInputChange2 = (value) => {
        var escrito = value;
        const local = Object.values(state);
        var allDados = [];

        for(var key in local) {
            var controle= '';
            var controleT= '';
            console.log(typeof(local[key].Nome))
            for(var c = 0;c < escrito.length; c++){
                controle = controle + local[key].Nome[c]
                controleT = controleT + local[key].Departamento[c]
                // console.log(local[key].nome[c])
            }

            console.log(local.key)
            if(escrito.toUpperCase() == controle.toUpperCase() || escrito.toUpperCase() == controleT.toUpperCase()){
                allDados.push({
                    Nome:local[key].Nome,
                    Codigo:local[key].Codigo,
                    Departamento:local[key].Departamento,
                    Descriçao:local[key].Descriçao,
                    Preço:local[key].Preço,
                    status:{
                        Promoção:local[key].Promoção,
                        ValorPromoção:local[key].ValorPromoção
                    },
                    Quantidade:local[key].Quantidade
                })
            }else if(escrito == ""){
                allDados = state
            }  
        }

        setDados(allDados)

    }    




    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Produtos Cadastrados</Text>
            <TextInput style={styles.input}
                    placeholder='Pesquisar'
                    onChangeText={(valor)=> handleInputChange2((valor))}
                />
            <Text> </Text>
            <Button title="Adicionar" onPress={()=>{setLoading(true); navigation.navigate('CadastroProdutos')}}/>
          
            <FlatList data={dados} renderItem={({item}) => (<View style={styles.container}>
               
                <Text>{item.Codigo} - {item.Nome}</Text>
                <Text>Preço: R$ {parseFloat(item.Preço).toFixed(2)}</Text>
                <Text>{item.Departamento}</Text>
                <Text>{item.Descriçao}</Text>
                <Text>{item.Promoção}</Text>
                <Text>{item.key}</Text>
               
                <Text>{item.Quantidade}</Text>
                <View style={ {flex: 1, flexDirection:'row'}}>
                    <Button title="editar"  onPress={()=>{navigation.navigate("EditProdutos", item.key)}}/>
                    <Button title=" X " color="red" onPress={()=>navigation.navigate("DeleteProdutos", item.key)}/>
                </View>

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
        marginTop:5,
        borderRadius:10
    },
    alert:{
        backgroundColor:'red',
    }
});