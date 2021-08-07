import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, } from 'react-native';
import PagerView from 'react-native-pager-view';
import Header from '../Header';

const MyPager = () => {
  return (
    <View style={styles.viewPager}>
      <Header />
      <View style={styles.bgtitulo}>
        <Text style={styles.titulo}>Mercearia</Text>
      </View>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
            <Image source={require("./imagens_cruzeiro/pao.jpg")} style={styles.img} />
            <View style={styles.bgtexto}>
              <Text style={styles.texto}>Pão de Forma - Visconti</Text>
            </View>
        </View>
        <View style={styles.page} key="2">
          <Image source={require("./imagens_cruzeiro/pao_integral.jpg")} style={styles.img} />
          <View style={styles.bgtexto}>
            <Text style={styles.texto}>Pão Integral - Visconti</Text>
          </View>
        </View>

        <View style={styles.page} key="3">
        <Image source={require("./imagens_cruzeiro/pao.jpg")} style={styles.img} />
          <View style={styles.bgtexto}>
            <Text style={styles.texto}>Pão de Forma - Visconti</Text>
          </View>
        </View>
      </PagerView>
    </View>
  );
};

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

export default MyPager;