import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import Header from './Header';

const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/227436569_4024710797637991_8994688771645762604_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEjZsXzNi-UMlR5kAXt-UtZZ6SXodPFqPlnpJeh08Wo-dkRYan9SIEw81jbTcVPrVLyRU25uTW8Ta90DqnGKsbc&_nc_ohc=IyXapmxvJsoAX-mFqfM&_nc_ht=scontent.frec31-1.fna&oh=a3887ef9f78b6ec9d05af0256eda560f&oe=612B67B8',
                    }}/>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/227436569_4024710797637991_8994688771645762604_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEjZsXzNi-UMlR5kAXt-UtZZ6SXodPFqPlnpJeh08Wo-dkRYan9SIEw81jbTcVPrVLyRU25uTW8Ta90DqnGKsbc&_nc_ohc=IyXapmxvJsoAX-mFqfM&_nc_ht=scontent.frec31-1.fna&oh=a3887ef9f78b6ec9d05af0256eda560f&oe=612B67B8',
                    }}/>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/227436569_4024710797637991_8994688771645762604_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEjZsXzNi-UMlR5kAXt-UtZZ6SXodPFqPlnpJeh08Wo-dkRYan9SIEw81jbTcVPrVLyRU25uTW8Ta90DqnGKsbc&_nc_ohc=IyXapmxvJsoAX-mFqfM&_nc_ht=scontent.frec31-1.fna&oh=a3887ef9f78b6ec9d05af0256eda560f&oe=612B67B8',
                    }}/>
            <Text style={styles.texto}>Arraste para o lado para ver mais produtos ➡️</Text>        
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
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
  tinyLogo: {
    display: 'flex',
    flexDirection:'row',  
    margin:5,  
    width: 400,
    height: 200,
    borderRadius: 20,
  },
  texto:{
    fontSize: 15,
    textAlign: 'center'
  }
});

export default MyPager;