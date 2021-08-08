import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity} from 'react-native';

export default function EditProdutos({ route, navigation }) {

    const [ok, setOk] = useState(false);

    const key = route.params;

    const [state, setState] = useState({
        codigo:'',
        grupo:'',
        descricao:'',
        nome:'',
        preco:'',
        status:{
            porcentagem:'',
            promocao:false,
        },
        quantidade:'',
    })


    useEffect(
        () => navigation.addListener('focus', () => {

            userById(key);
        }), []
    )


    //recebendo um doc através do id
    const userById = async (id) => {
        //iniciando a referência do firebase firestore, acessando a collection users
        const produtos = firebase.db.collection('produtos');
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
      
        const produtos = firebase.db.collection('product');
        //através da função assincrona com await ele irá executar o comando de update() realizando a alteração no doc com a key. O state com os valores atualizados serão usados para dar o update. A função then irá mostrar uma mensagem de alerta dizendo edited, caso não consiga editar, será acionado catch.
        await produtos.doc(key).update(state).then(
            () => {
                alert("edited")
                //quando ocorre a deleção o estado ok é alterado para true e renderizado
                setOk(true);
            }
        ).catch(
            () => alert("não foi possivel editar")
        )
    }
   



    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Editar Produtos</Text>
            <TextInput placeholder="Codigo" defaultValue={state.codigo}
                onChangeText={(value) => handleInputChange('codigo', value)} style={styles.input} />
            <TextInput placeholder="Produto" defaultValue={state.nome}
                onChangeText={(value) => handleInputChange('nome', value)} style={styles.input} />
            <TextInput placeholder="Grupo" defaultValue={state.grupo}
                onChangeText={(value) => handleInputChange('grupo', value)} style={styles.input} />
            <TextInput placeholder="Descrição" defaultValue={state.descricao}
                onChangeText={(value) => handleInputChange('descricao', value)} style={styles.input} />
            <TextInput placeholder="Preço" defaultValue={state.preco}
                onChangeText={(value) => handleInputChange('preco', value)} style={styles.input} />
            <TextInput placeholder="Quantidade" defaultValue={state.quantidade}
                onChangeText={(value) => handleInputChange('quantidade', value)} style={styles.input} />
            <Text>Promoção:</Text>
            <Switch value={state.status.promocao} onValueChange={(valorSwitch) => setState({ ...state, promocao: valorSwitch })} />
            <TextInput placeholder="Porcentagem" defaultValue={state.status.porcentagem}
                onChangeText={(value) => handleInputChange('porcentagem', Number(value))} style={styles.input} />
          

            <TouchableOpacity style={styles.botao} onPress={() => editarProduto()}><Text>Editar</Text></TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 12
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
        backgroundColor: 'blue',
        padding: 10
    }


})









