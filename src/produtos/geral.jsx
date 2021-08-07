import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, } from 'react-native';
import PagerView from 'react-native-pager-view';
import Header from '../Header';

const MyPager = () => {
  return (
    <View style={styles.viewPager}>
      <Header />
      <View style={styles.bgtitulo}>
        <Text style={styles.titulo}>Geral</Text>
      </View>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
            <Image source={require("./imagens_cruzeiro/lanterna.jpg")} style={styles.img} />
            <View style={styles.bgtexto}>
              <Text style={styles.texto}>Lanterna</Text>
            </View>
        </View>
        <View style={styles.page} key="2">
          <Image source={require("./imagens_cruzeiro/fosforo.jpg")} style={styles.img} />
          <View style={styles.bgtexto}>
            <Text style={styles.texto}>Fósforo</Text>
          </View>
        </View>

        <View style={styles.page} key="3">
        <Image source={require("./imagens_cruzeiro/caneta.jpg")} style={styles.img} />
          <View style={styles.bgtexto}>
            <Text style={styles.texto}>Caneta - caixa</Text>
          </View>
        </View>
      </PagerView>
    </View>
  );
};