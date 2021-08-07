import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Dimensions, FlatList } from 'react-native';
import firebase from '../../firebase';
// import PagerView from 'react-native-pager-view';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Header from '../Header';

export default function Refrigerantes({navigation}) {
  
  const [refrigerantes, setRefrigerantes] = useState([]);

  useEffect(
    () => navigation.addListener('focus', () => {
        pegaRefrigerantes()
    }),[]
  )

  const  pegaRefrigerantes = async () => {
  const prods = firebase.db.collection("produtos");
  const querySnapshot = await prods.where('Departamento', '==', 'Refrigerantes').get();
  const items = querySnapshot.docs;
  const listRefrigerantes = [];
  items.forEach(
      doc => {
        listRefrigerantes.push({
              ...doc.data(),
              key: doc.id
        })
      })    
      setRefrigerantes(listRefrigerantes);
  }

  return(
    <View>
      <Header />
      <View style={styles.bgtitulo}>
          <Text style={styles.titulo}>Refrigerantes</Text>
      </View>
      <FlatList
        horizontal
        data={refrigerantes}
        renderItem = { ({item}) =>(
          <View style={{paddingHorizontal: 10}}>
            <ImagedCarouselCard
            width={300}
            height={300}
            shadowColor="#051934"
            source={require('./imagens_cruzeiro/coca.jpg')}
            text={`${item.Nome} \nR$: ${item.Preço}`}
            overlayBackgroundColor={"#2E3192DD"}
            />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
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
    backgroundColor: "#ED1C2422",
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
