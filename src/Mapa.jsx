import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import customStyle from '../customStyle';
import Header from './Header';
import Footer from './Footer';

export default function Mapa({ navigation }) {
    return (
        <>
        <Header />
        <ScrollView style={{backgroundColor: "#fff"}}>
            <View style={styles.container}>
                <MapView
                    customMapStyle={customStyle}
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: -2.893663,
                        longitude: -40.852778,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0021,
                    }}
                >

                    <Marker
                        coordinate={{
                            latitude: -2.893663,
                            longitude: -40.852778,
                        }}
                        title="Cruzeiro Frios"
                        description="R. Quintino Bocaiúva, 964"

                    />
                </MapView>
            </View>
            <View style={{display: "flex", justifyContent: "center", alignSelf: "center", paddingVertical: 15,}}>
                <Image source={require("./assets/imagens/layout/frente.jpg")} />
            </View>
            <View style={styles.ViewText}>
                <Text style={{fontSize: 20, fontFamily: "sans-serif-medium", color: "#2E3192", fontWeight: "bold",}}>Mercantil Cruzeiro Frios</Text>
                <Text style={{textAlign: "left", color: "#ED1C24", fontSize: 16,}}>R. Quintino Bocaiúva, 972
                    {"\n"}Cruzeiro
                    {"\n"}Camocim - CE
                    {"\n"}62400-000</Text>
            </View>
            <Footer />
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10,
    },
    mapStyle: {
        padding: 10,
        width: Dimensions.get('window').width/1.2,
        height: Dimensions.get('window').width/1.2,
    },
    ViewText:{
        paddingHorizontal: 30,
        backgroundColor: "#FFF"
    }
});