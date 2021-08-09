import React, {useState} from 'react';
import firebase from '../firebase';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListarProdutos from './ListarProdutos';

export default function DeleteProdutos({route, navigation}){
   
    const [ok,setOk] = useState(false);

    const key = route.params;
    
    
    const deleteProdutos = async () =>{
   
    const produtos = firebase.db.collection('produtos');
    
    await produtos.doc(key).delete()
    .then(
      ()=>{
          alert("deleted");
        
          setOk(true);
    }
    ).catch(
      ()=>alert("não encontrado")
    )
  }
   
    if(ok){
      
        navigation.popToTop();
    }


   return(
        <View style={styles.container}>
            <Text style={styles.h1}>Deseja excluir o Produto?</Text>
            {/**o botão abaixo aciona a função de exclusão */}
            <Button
                title="Sim"
                onPress={deleteProdutos}
            />
            {/**o botão abaixo aciona a função de remover todos da pilha */}
            <Button
                title="Não"
                onPress={()=>navigation.popToTop()}
            />
        </View>
        
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
