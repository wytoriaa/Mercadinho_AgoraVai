import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Dimensions, FlatList } from 'react-native';
import firebase from '../../firebase';
// import PagerView from 'react-native-pager-view';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Header from '../Header';

export default function Acougue({navigation}) {
  
  const [acougue, setAcougue] = useState([]);

  useEffect(
    () => navigation.addListener('focus', () => {
        pegaAcougue()
    }),[]
  )
  
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
// console.log(acougue)
  return(
    <View>
      <Header />
      <View style={styles.bgtitulo}>
          <Text style={styles.titulo}>Açougue</Text>
      </View>
      {console.log(acougue)}
      <FlatList
        horizontal
        data={acougue}
        renderItem = { ({item}) =>(
          <View style={{paddingHorizontal: 10}}>
            <ImagedCarouselCard
            width={300}
            height={300}
            shadowColor="#051934"
            source={require('./imagens_cruzeiro/picanha.jpg')}
            text={`${item.Nome} \nR$: ${item.Preço} Kg`}
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
//         <Text style={styles.titulo}>Açougue</Text>
//       </View>
//       <PagerView style={styles.viewPager} initialPage={0}>
//         <View style={styles.page} key="1">
//             <Image source={require("../assets/imagens/produtos/acougue/contra-file-swift.jpg")} style={styles.img} />
//             <View style={styles.bgtexto}>
//               <Text style={styles.texto}>Contra Filé - Swift</Text>
//             </View>
//         </View>
//         <View style={styles.page} key="2">
//           <Image source={require("../assets/imagens/produtos/acougue/miolo-alcatra-big-carnes.jpg")} style={styles.img} />
//           <View style={styles.bgtexto}>
//             <Text style={styles.texto}>Miolo da Alcatra - Big Carnes</Text>
//           </View>
//         </View>

//         <View style={styles.page} key="3">
//         <Image source={require("../assets/imagens/produtos/acougue/picanha-maturatta.jpg")} style={styles.img} />
//           <View style={styles.bgtexto}>
//             <Text style={styles.texto}>Picanha - Maturatta</Text>
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