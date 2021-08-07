import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Dimensions, FlatList } from 'react-native';
import firebase from '../../firebase';
// import PagerView from 'react-native-pager-view';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Header from '../Header';

export default function BebidasQuentes({navigation}) {
  
  const [bebidasQuentes, setBebidasQuentes] = useState([]);

  useEffect(
    () => navigation.addListener('focus', () => {
        pegaBebidasQuentes()
    }),[]
  )
  
  const  pegaBebidasQuentes = async () => {
  const prods = firebase.db.collection("produtos");
  const querySnapshot = await prods.where('Departamento', '==', 'BebidasQuentes').get();
  const items = querySnapshot.docs;
  const listBebidasQuentes = [];
  items.forEach(
      doc => {
        listBebidasQuentes.push({
              ...doc.data(),
              key: doc.id
          })
      })    
  setBebidasQuentes(listBebidasQuentes);
  }

  return(
    <View>
      <Header />
      <View style={styles.bgtitulo}>
          <Text style={styles.titulo}>Bebidas Quentes</Text>
      </View>
      {console.log(bebidasQuentes)}
      <FlatList
        horizontal
        data={bebidasQuentes}
        renderItem = { ({item}) =>(
          <View style={{paddingHorizontal: 10}}>
            <ImagedCarouselCard
            width={300}
            height={300}
            shadowColor="#051934"
            source={require('./imagens_cruzeiro/skol.jpg')}
            text={`${item.Nome} \nR$: ${item.Preço}`}
            overlayBackgroundColor={"#2E3192DD"}
            />
          </View>
        )}
      />
    </View>
  )
}
// const MyPager = () => {
//   return (
//     <View style={styles.viewPager}>
//       <Header />
//       <View style={styles.bgtitulo}>
//         <Text style={styles.titulo}>Bebidas Quentes</Text>
//       </View>
//       <PagerView style={styles.viewPager} initialPage={0}>
//         <View style={styles.page} key="1">
//             <Image source={require("./imagens_cruzeiro/skol.jpg")} style={styles.img} />
//             <View style={styles.bgtexto}>
//               <Text style={styles.texto}>Cervejas - Skol</Text>
//             </View>
//         </View>
//         <View style={styles.page} key="2">
//           <Image source={require("./imagens_cruzeiro/skol.jpg")} style={styles.img} />
//           <View style={styles.bgtexto}>
//             <Text style={styles.texto}>Vodka</Text>
//           </View>
//         </View>

//         <View style={styles.page} key="3">
//         <Image source={require("./imagens_cruzeiro/skol.jpg")} style={styles.img} />
//           <View style={styles.bgtexto}>
//             <Text style={styles.texto}>Vinho</Text>
//           </View>
//         </View>
//       </PagerView>
//     </View>
//   );
// };

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

// export default MyPager;