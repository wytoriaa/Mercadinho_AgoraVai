import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, } from 'react-native';
import PagerView from 'react-native-pager-view';
import Header from '../Header';

const MyPager = () => {
  return (
    <View style={styles.viewPager}>
      <Header />
      <View style={styles.bgtitulo}>
        <Text style={styles.titulo}>Hort Fruit</Text>
      </View>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
            <Image source={require("./imagens_cruzeiro/laranja.jpg")} style={styles.img} />
            <View style={styles.bgtexto}>
              <Text style={styles.texto}>Laranja - pera</Text>
            </View>
        </View>
        <View style={styles.page} key="2">
          <Image source={require("./imagens_cruzeiro/uva.jpg")} style={styles.img} />
          <View style={styles.bgtexto}>
            <Text style={styles.texto}>Uva - Ruby</Text>
          </View>
        </View>

        <View style={styles.page} key="3">
        <Image source={require("./imagens_cruzeiro/suco_laranja.jpg")} style={styles.img} />
          <View style={styles.bgtexto}>
            <Text style={styles.texto}>Suco Integral</Text>
          </View>
        </View>
      </PagerView>
    </View>
  );
};