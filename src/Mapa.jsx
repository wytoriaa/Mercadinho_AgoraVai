import React from 'react';
import { StyleSheet, View, Text, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import customStyle from '../customStyle';
import Header from './Header';

export default function Mapa({ navigation }) {
    return (
        <>
        <Header />
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
            <Text>Localização - Cruzeiro Frios</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        padding: 10,
        width: Dimensions.get('window').width/1.2,
        height: Dimensions.get('window').width/1.2,
    }
});