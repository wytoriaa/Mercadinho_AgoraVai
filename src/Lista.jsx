import React, {useState, useEffect} from 'react';
import firebase from '../firebase';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, TextInput} from 'react-native';

export default function ListarProdutos({navigation}){
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState([]);
    const [dados, setDados] = useState([]);

    useEffect(
        () => navigation.addListener('focus', () => {pegaDados()}),[]

    )
    const pegaDados = async () => {
        const product = firebase.db.collection("product");
        // const resposta = await product.where('grupo', '==', 'CARNES').get();
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
            return a.codigo - b.codigo;
        });
        setState(byDate)
        setDados(byDate)
        setLoading(false)
    }
    // console.log(state)
    if(loading){
        return<ActivityIndicator/>
    }

    const handleInputChange2 = (value) => {
        var escrito = value;
        const local = Object.values(state);
        var allDados = [];


        for(var key in local) {
            var controle= '';
            var controleT= '';
            console.log(typeof(local[key].nome))
            for(var c = 0;c < escrito.length; c++){
                controle = controle + local[key].nome[c]
                controleT = controleT + local[key].grupo[c]
                // console.log(local[key].nome[c])
            }
            console.log(controle)
            if(escrito.toUpperCase() == controle.toUpperCase() || escrito.toUpperCase() == controleT.toUpperCase()){
                allDados.push({
                    nome:local[key].nome,
                    codigo:local[key].codigo,
                    grupo:local[key].grupo,
                    unidade:local[key].unidade,
                    descricao:local[key].descricao,
                    preco:local[key].preco,
                    status:{
                        promocao:local[key].promocao,
                        porcentagem:local[key].porcentagem
                    },
                    quantidade:local[key].quantidade
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
            {/* <Button title="Adicionar" onPress={()=>{setLoading(true); navigation.navigate('CadastroProdutos')}}/> */}
            
            <FlatList data={dados} renderItem={({item}) => (<View style={styles.container}>
                <Text>{item.codigo} - {item.nome}</Text>
                <Text>R$ {parseFloat(item.preco).toFixed(2)}</Text>
                <Text>{item.grupo}</Text>
                <Text>{item.descricao}</Text>

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