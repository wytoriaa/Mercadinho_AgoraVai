import React, {useState, useEffect} from 'react';
import { View, Button, Image, StyleSheet, Text, Dimensions, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../firebase';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Header from './Header';

export default function Home({navigation}){

    // const [state, setState] = useState([]);
    const [acougue, setAcougue] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [higiene, setHigiene] = useState([]);
    
    useEffect(
        () => navigation.addListener('focus', () => {
            // pegaDados()
            pegaAcougue()
            pegaBebidas()
            pegaHigiene()

        }),[]
    )

    // *********** LISTA TODOS OS ITENS *******************//
    const  pegaDados = async () => {
    //iniciando a referência do firebase firestore, acessando a collection users
    const prods = firebase.db.collection("produtos");
    //constante que armazena o que chamamos de querySnapshot esperando o retorno da função através do await. get() é uma função que retorna o valor  para o querySnapshot
    const querySnapshot = await prods.get();
    //dados está recebendo os documentos alinhados no formato de array com várias informações
    const items = querySnapshot.docs;
    //forEach irá trazer doc a doc para receber mostrar os dados organizados em object através do comando data()
    const listItens = [];
    items.forEach(
      doc => {
          listItens.push({
              ...doc.data(),
              key: doc.id
          })
      })    
      setState(listItens);
        //console.log(listItens)
    }

    // *********** LISTA ITENS DO ACOUGUE ************/
    const  pegaAcougue = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Açougue').get();
    const items = querySnapshot.docs;
    const listAcougue = [];
    items.forEach(
        doc => {
            listAcougue.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setAcougue(listAcougue);
    }
    // *********** LISTA DAS BEBIDAS ************/
    const  pegaBebidas = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Bebidas').get();
    const items = querySnapshot.docs;
    const listBebidas = [];
    items.forEach(
        doc => {
            listBebidas.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setBebidas(listBebidas);
    }
    // *********** LISTA DOS ITENS DE HIGIENE ************/
    const  pegaHigiene = async () => {
    const prods = firebase.db.collection("higiene");
    const querySnapshot = await prods.where('Departamento', '==', 'Higiene').get();
    const items = querySnapshot.docs;
    const lisHigiene = [];
    items.forEach(
        doc => {
            lisHigiene.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setHigiene(lisHigiene);
    }

    console.log(acougue)
    
    return (
    <View style ={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Header />
        <ScrollView>
            {/* AÇOUGUE */}
            <View>
                <Text>Açougue</Text>
                    <FlatList
                        horizontal
                        data={acougue}
                        renderItem = { ({item}) =>(
                                <ImagedCarouselCard
                                width={Dimensions.get('window').width/2.1}
                                height={300}
                                shadowColor="#051934"
                                source={`${item.urlImg}`}
                                text={`${item.Nome} \n R$:${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                        )}
                    />
            </View>
            
            {/* <View>
                <Text>Bebidas</Text>
                    <FlatList
                        horizontal
                        data={bebidas}
                        renderItem = { ({item}) =>(
                                <ImagedCarouselCard
                                width={Dimensions.get('window').width/2.1}
                                height={300}
                                shadowColor="#051934"
                                source={require(item.urlImg)}
                                text={`${item.Nome} \n ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />

                        )}
                    />
            </View>
            
            <View>
                <Text>Higiene</Text>
                    <FlatList
                        horizontal
                        data={higiene}
                        renderItem = { ({item}) =>(
                                <ImagedCarouselCard
                                width={Dimensions.get('window').width/2.1}
                                height={300}
                                shadowColor="#051934"
                                source={require(item.urlImg)}
                                text={`${item.Nome} \n ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />

                        )}
                    />
            </View> */}

        </ScrollView>
    </View>            
    )
}

    const styles = StyleSheet.create({
        container: {
          paddingTop: 5,
          height:10
        },
        tinyLogo: {
          display: 'flex',
          flexDirection:'row',  
          margin:5,  
          width: 400,
          height: 200,
          borderRadius: 20,
        },

    })