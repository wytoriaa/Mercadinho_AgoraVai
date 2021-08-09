import React, {useState, useEffect} from 'react';
import { View, Button, Image, StyleSheet, Text, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../firebase';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Header from './Header';
import Footer from './Footer';

export default function Home({navigation}){

  
    
    const [promocoes, setPromocoes] = useState([]);

    useEffect(
      () => navigation.addListener('focus', () => {
          pegaPromocoes()
      }),[]
    )
    
    const  pegaPromocoes = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Promoção', '==', true).get();
    const items = querySnapshot.docs;
    const listPromocoes = [];
    items.forEach(
        doc => {
            listPromocoes.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setPromocoes(listPromocoes);
    }
  
    return(
      
      <View style={{backgroundColor: "#FFF"}}>
        <Header />

        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  paddingVertical: 10}}>
          <View>
          <TouchableOpacity onPress={()=> navigation.navigate("Compra_Agua")}>
            <Image style={{width:60, height: 110, paddingHorizontal: 20}} source={ require('./produtos/imagens_cruzeiro/agua.jpg')}/>
          </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: 20, display:'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=> navigation.navigate("Compra_Agua")}>
            <Text style={{fontSize: 22}}>Peça sua água</Text>
            <Text>OBS: entregamos apenas no {'\n'} bairro do Cruzeiro.</Text>
          </TouchableOpacity>
          </View> 
          <View>
          <TouchableOpacity onPress={()=> navigation.navigate("Compra_Agua")}>
            <Image style={{width:60, height: 60, }} source={ require('./produtos/imagens_cruzeiro/whats.jpg')}/>
            </TouchableOpacity>
          </View>
        </View>
        
        

        <FlatList
          vertical
          data={promocoes}
          renderItem = { ({item}) =>(
            <View style={{padding: 10, display: "flex", justifyContent: "center", alignItems: "center",}}>
            
            <View style={styles.bgtitulo}>
          <Text style={styles.titulo}>Promoções</Text>
        </View>

              <ImagedCarouselCard
                width={300}
                height={300}
                shadowColor="#051934"
                source={{uri: `${item.urlImg}`}}
                text={(item.Nome) + "\n" + "De R$:" + (item.Preço) + " por R$" + (item.Preço*.8).toFixed(2)}
                overlayBackgroundColor={"#2E3192DD"}
              />
            </View>
          )}
        />
        <Footer />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
      backgroundColor: "#FFF",
      justifyContent: 'center',
      alignItems: 'center',
    },
    titulo:{
      fontSize: 26,
      textAlign: 'center',
      padding: 20,
      fontFamily: "sans-serif-light",
    },
    bgtitulo:{
      width: Dimensions.get('window').width,
      // backgroundColor: "#ED1C2422",
      backgroundColor: "#CCC",
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    texto:{
      fontSize: 15,
      textAlign: 'center',
      padding: 20,
    },
    bgtexto:{
      width: Dimensions.get('window').width,
      backgroundColor: "#2E319222",
      marginVertical: 10,
    },
    img: {
      width: Dimensions.get('window').width/1.3,
      height: Dimensions.get('window').width/1.3,
    },
  });