import React, {useEffect, useState} from 'react';
import firebase from '../firebase';
import { StyleSheet, TextInput, Text, View, Button,ScrollView , TouchableOpacity , Linking} from 'react-native';

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
        // pedido:'',
        quantidade:'',
        
    });

    const handleWhatsAppPress = async () => {
        let mensagem = "?text=* Olá Sr. Santana, segue os dados do cliente para venda %0A Nome: %0A " + state.nome +  " %0A E-mail: %0A " + state.email + " %0A Endereço: %0A " + state.endereco + " %0A Número: %0A " + state.número + " %0A Cep: %0A " + state.cep + " %0A Complemento: %0A " + state.complemento + " %0A Quantidade: %0A " + state.quantidade;

        await Linking.openURL("https://wa.me/+5511960232774/" + mensagem)
        


        // await Linking.openURL(https://wa.me/+5511960232774/?text='Olá Sr. Santana, segue os dados do cliente para venda %0A Nome: %0A ' + nome +  ' %0A E-mail: %0A ' + state.email + ' %0A Endereço: %0A ' + state.endereco + ' %0A Número: %0A ' + state.número + ' %0A Cep: %0A ' + state.cep + ' %0A Complemento: %0A ' + state.complemento + ' %0A Quantidade: %0A ' + state.quantidade `)
        
    };


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
       
        await firebase.db.collection('compra').add(state).then(
            ()=>{
                alert("salved");
               
                setOk(true);
            }
        ).catch(
            ()=>alert("não foi possivel inserir")
        )
    }
   
    if(ok){
        alert("Compra Realizada");
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
                {/* <TextInput
                    style={styles.input}
                    placeholder='Pedido'
                    defaultValue={state.pedido}
                    onChangeText={
                        (value)=>handleInputChange('pedido', value)
                    }
                /> */}
                <TextInput
                    style={styles.input}
                    placeholder='Quantidade'
                  
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

                {/* <TouchableOpacity style={styles.botao} 
                onPress={()=>AddUser()}><Text>Realizar Pedido</Text></TouchableOpacity>   */}

                <TouchableOpacity style={styles.botao}

                onPress={handleWhatsAppPress}><Text>Realizar Pedido</Text></TouchableOpacity>

            </View>
        </ScrollView>
        
        
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