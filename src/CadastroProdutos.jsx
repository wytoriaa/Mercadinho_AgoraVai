import React, { useState} from 'react';
import firebase from '../firebase';
import { StyleSheet, Text, View, TouchableOpacity, Switch, TextInput, ScrollView} from 'react-native';

export default function CadastroProdutos({navigation}){
    const [ok, setOk] = useState(false);
   
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

    const handleInputChange = (name, value) =>{
        setState({
            ...state, [name]: value
        })
    }

          
    const cadastro = async()=>{
        await firebase.db.collection("prod").add(state)
        .then(
            ()=>{
                alert("Produto Cadastrado com Sucesso!");
                navigation.navigate("Home");
                setState(Departamento, '');
                setState(Descrição, '');
                setState(Nome, '');
                setState(Preço, 0);
                setState(Codigo, 0);
                setState(Promoção, false);
                setState(ValorPromoção, '');
                setState(Quantidade, '');
                setState(urlImg, '');
            }    
        )
        .catch(
            error=>alert(error)
        )
    }

    if(ok){
        navigation.popToTop();
    }

    return(
        <View style={styles.container}>
            <ScrollView >
                <Text style={styles.h1}>Cadastro dos Produtos</Text>
                <Text>Nome:</Text>
                <TextInput placeholder="Produto" defaultValue={state.Nome}
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
                
                <TouchableOpacity style={styles.botao} onPress={()=>cadastro()}><Text>Cadastrar</Text></TouchableOpacity>                                
                
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
        backgroundColor:'#3bbdc2',
        margin:10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    }

    
})