import React from 'react';
import { View, Button, Image, StyleSheet, Text, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Header from './Header';

export default function HomeScreen(){
    return (
    
    <View style ={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Header />
        <View style = {styles.container}>
        </View>
        <ScrollView>
        <View style = {styles.container}/>
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://blog.superfilter.com.br/wp-content/uploads/2020/08/vale-a-pena-comprar-agua-de-galao.jpg',
                    }}/>
        </View> 
        <View style = {{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent: "space-evenly"}}>
        <ImagedCarouselCard
            width={Dimensions.get('window').width/2.1}
            height={300}
            shadowColor="#051934"
            source={require("./assets/imagens/produtos/produto.png")}
            text={"Nome do produto \n R$60"}
            overlayBackgroundColor={"#2E3192DD"}
        />
              
        <ImagedCarouselCard
            width={Dimensions.get('window').width/2.1}
            height={300}
            shadowColor="#051934"
            source={require("./assets/imagens/produtos/produto.png")}
            text={"Nome do produto \n R$20"}
            overlayBackgroundColor={"#2E3192DD"}

        />
        </View>       
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/227436569_4024710797637991_8994688771645762604_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEjZsXzNi-UMlR5kAXt-UtZZ6SXodPFqPlnpJeh08Wo-dkRYan9SIEw81jbTcVPrVLyRU25uTW8Ta90DqnGKsbc&_nc_ohc=IyXapmxvJsoAX-mFqfM&_nc_ht=scontent.frec31-1.fna&oh=a3887ef9f78b6ec9d05af0256eda560f&oe=612B67B8',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/217524237_4024710930971311_908679880742604397_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeH2IhmxcUbUOznkuAAnZu_VJH0cyG8uuKMkfRzIby64o4vVXHfPTcbXlmG9UHDAvnhMfi59fYY96uFPyBotX68L&_nc_ohc=YgDAva4Pux8AX_CR01q&tn=72GiimqC7QX0-X-C&_nc_ht=scontent.frec31-1.fna&oh=4a294789e1973278e055f9a38c14bbf6&oe=612D3031',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/228101983_4024710924304645_1531546530766385967_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeGoSELEduExJ-HpkPrOaQGrhosMOTBfi1CGiww5MF-LUA7dXX39ASeX-5YrlxZ3jjDhj0VaifQpp-G9_dJb1Whk&_nc_ohc=zvA-Hfuyd7cAX9ypKCJ&_nc_ht=scontent.frec31-1.fna&oh=bd6987cea0eef0ae1f811e945bc499f5&oe=612C904E',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/227795002_4024744920967912_2992368347733141832_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFXRtx_e_E3vNE0rVGLCJsqP5EUOYICg9Q_kRQ5ggKD1HtH08HBuxrQ8a4OjUruaFcbroqphQbRdtk1DI0w6L9Y&_nc_ohc=dpbjI0myznQAX_3jxqD&_nc_ht=scontent.frec31-1.fna&oh=f7201c3bd34ff80e28e445b4a450d772&oe=61298629',
                    }}/>
        </View> 
        <View>
            <Image style={styles.tinyLogo}
                    source={{
                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.6435-9/229193115_4024744950967909_1392087484166642906_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF1gesPdjdNRTsIz0a0umhK9f5dErqT2Kr1_l0SupPYqrZMBJ7R3GzaeBAR2IFNQlsAu9ss4v3qC5zG4iJuxrPW&_nc_ohc=eTCeCn3oC3sAX-8X6vC&_nc_ht=scontent.frec31-1.fna&oh=143fefce8ebf145013a7c7c2a51e28ad&oe=612D290F',
                    }}/>
        </View> 
            </ScrollView>
        </View>
    
            
        )
    }
    const styles = StyleSheet.create({
        container: {
          paddingTop: 5,
          height:10
        },
        tinyLogo: {
          display: 'flex',
          flexDirection:'row',  
          margin:5,  
          width: 400,
          height: 200,
          borderRadius: 20,
        },

    })