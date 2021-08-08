import React, {useState, useEffect} from 'react';
import { View, Button, Image, StyleSheet, Text, Dimensions, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../firebase';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Header from './Header';

export default function Home({navigation}){

    // const [state, setState] = useState([]);
    const [acougue, setAcougue] = useState([]);
    const [bebidas, setBebidas] = useState([]);
    const [matinais, setMatinais] = useState([]);
    const [higiene, setHigiene] = useState([]);
    const [alimentacao, setAlimentacao] = useState([]);
    const [limpeza, setLimpeza] = useState([]);
    const [pet, setPet] = useState([]);
    const [bomboniere, setBomboniere] = useState([]);
    const [condimentos, setCondimentos] = useState([]);
    const [padaria, setPadaria] = useState([]);
    const [mercearia, setMercearia] = useState([]);
    const [vestuario, setVestuario] = useState([]);
    const [enlatados, setEnlatados] = useState([]);
    const [hortifruti, setHortiFruti] = useState([]);
    const [descartaveis, setDescartaveis] = useState([]);
    const [massas, setMassas] = useState([]);
    const [laticinios, setLaticinios] = useState([]);
    const [cereais, setCereais] = useState([]);
    const [geral, setGeral] = useState([]);
    
    useEffect(
        () => navigation.addListener('focus', () => {
            // pegaDados()
            pegaAcougue()
            pegaBebidas()
            pegaMatinais()
            pegaHigiene()
            pegaAlimentacao()
            pegaLimpeza()
            pegaPet()
            pegaBomboniere()
            pegaCondimentos()
            pegaPadaria()
            pegaMercearia()
            pegaVestuario()
            pegaEnlatados()
            pegaHortiFruti()
            pegaDescartaveis()
            pegaMassas()
            pegaLaticinios()
            pegaCereais()
            pegaGerais()

        }),[]
    )

    // *********** LISTA TODOS OS ITENS *******************//
    const  pegaDados = async () => {
    //iniciando a referência do firebase firestore, acessando a collection users
    const prods = firebase.db.collection("produtos");
    //constante que armazena o que chamamos de querySnapshot esperando o retorno da função através do await. get() é uma função que retorna o valor  para o querySnapshot
    const querySnapshot = await prods.get();
    //dados está recebendo os documentos alinhados no formato de array com várias informações
    const items = querySnapshot.docs;
    //forEach irá trazer doc a doc para receber mostrar os dados organizados em object através do comando data()
    const listItens = [];
    items.forEach(
      doc => {
          listItens.push({
              ...doc.data(),
              key: doc.id
          })
      })    
      setState(listItens);
        //console.log(listItens)
    }

    // *********** LISTA ITENS DO ACOUGUE ************/
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
    // *********** LISTA DAS BEBIDAS ************/
    const  pegaBebidas = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Bebidas').get();
    const items = querySnapshot.docs;
    const listBebidas = [];
    items.forEach(
        doc => {
            listBebidas.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setBebidas(listBebidas);
    }

    // *********** LISTA DOS ITENS MATINAIS ************/
    const  pegaMatinais = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Matinais').get();
    const items = querySnapshot.docs;
    const listMatinais = [];
    items.forEach(
        doc => {
            listMatinais.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setMatinais(listMatinais);
    }

    // *********** LISTA DOS ITENS DE HIGIENE ************/
    const  pegaHigiene = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Higiene Pessoal' || 'Higiene').get();
    const items = querySnapshot.docs;
    const lisHigiene = [];
    items.forEach(
        doc => {
            lisHigiene.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setHigiene(lisHigiene);
    }
    // *********** LISTA DOS ITENS DE ALIMENTACAO ************/
    const  pegaAlimentacao  = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Alimentação').get();
    const items = querySnapshot.docs;
    const listAlimentacao  = [];
    items.forEach(
        doc => {
            listAlimentacao.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setAlimentacao(listAlimentacao);
    }

    // *********** LISTA DOS ITENS DE LIMPEZA ************/
    const  pegaLimpeza  = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Limpeza').get();
    const items = querySnapshot.docs;
    const listLimpeza  = [];
    items.forEach(
        doc => {
            listLimpeza.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setLimpeza(listLimpeza);
    }

    // *********** LISTA DOS ITENS DE PET ************/
    const  pegaPet  = async () => {
        const prods = firebase.db.collection("produtos");
        const querySnapshot = await prods.where('Departamento', '==', 'Pet').get();
        const items = querySnapshot.docs;
        const listPet  = [];
        items.forEach(
            doc => {
                listPet.push({
                    ...doc.data(),
                    key: doc.id
                })
            })    
        setPet(listPet);
        }
    
    // *********** LISTA DOS ITENS DE BOMBONIERE ************/
    const  pegaBomboniere  = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Bomboniere').get();
    const items = querySnapshot.docs;
    const listBomboniere  = [];
    items.forEach(
        doc => {
            listBomboniere.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setBomboniere(listBomboniere);
    }
    // *********** LISTA DOS ITENS DE CONDIMENTOS/TEMPEROS ************/
    const  pegaCondimentos  = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Condimentos/Temperos').get();
    const items = querySnapshot.docs;
    const listCondimentos  = [];
    items.forEach(
        doc => {
            listCondimentos.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setCondimentos(listCondimentos);
    }
    // *********** LISTA DOS ITENS DE PADARIA ************/
    const  pegaPadaria  = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Padaria').get();
    const items = querySnapshot.docs;
    const listPadaria  = [];
    items.forEach(
        doc => {
            listPadaria.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setPadaria(listPadaria);
    }
    // *********** LISTA DOS ITENS DE MERCEARIA ************/
    const  pegaMercearia  = async () => {
        const prods = firebase.db.collection("produtos");
        const querySnapshot = await prods.where('Departamento', '==', 'Mercearia').get();
        const items = querySnapshot.docs;
        const listMercearia  = [];
        items.forEach(
            doc => {
                listMercearia.push({
                    ...doc.data(),
                    key: doc.id
                })
            })    
        setMercearia(listMercearia);
        }
    // *********** LISTA DOS ITENS DE VESTUARIO ************/
    const  pegaVestuario = async () => {
        const prods = firebase.db.collection("produtos");
        const querySnapshot = await prods.where('Departamento', '==', 'Vestuário').get();
        const items = querySnapshot.docs;
        const listVestuario  = [];
        items.forEach(
            doc => {
                listVestuario.push({
                    ...doc.data(),
                    key: doc.id
                })
            })    
        setVestuario(listVestuario);
        }

    // *********** LISTA DOS ITENS DE ENLATADOS ************/
    const  pegaEnlatados = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Enlatados').get();
    const items = querySnapshot.docs;
    const listEnlatados  = [];
    items.forEach(
        doc => {
            listEnlatados.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setEnlatados(listEnlatados);
    }

    // *********** LISTA DOS ITENS DE HORTFRUTI ************/
    const  pegaHortiFruti = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'HortiFruti').get();
    const items = querySnapshot.docs;
    const listHortiFruti  = [];
    items.forEach(
        doc => {
            listHortiFruti.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setHortiFruti(listHortiFruti);
    }
    // *********** LISTA DOS ITENS DE DESCARTAVEIS ************/
    const  pegaDescartaveis = async () => {
    const prods = firebase.db.collection("produtos");
    const querySnapshot = await prods.where('Departamento', '==', 'Descartáveis').get();
    const items = querySnapshot.docs;
    const listDescartaveis  = [];
    items.forEach(
        doc => {
            listDescartaveis.push({
                ...doc.data(),
                key: doc.id
            })
        })    
    setDescartaveis(listDescartaveis);
    }
    // *********** LISTA DOS ITENS DE MASSAS ************/
    const  pegaMassas = async () => {
        const prods = firebase.db.collection("produtos");
        const querySnapshot = await prods.where('Departamento', '==', 'Massas').get();
        const items = querySnapshot.docs;
        const listMassas  = [];
        items.forEach(
            doc => {
                listMassas.push({
                    ...doc.data(),
                    key: doc.id
                })
            })    
        setMassas(listMassas);
        }
    // *********** LISTA DOS LATICINIOS ************/
    const  pegaLaticinios = async () => {
        const prods = firebase.db.collection("produtos");
        const querySnapshot = await prods.where('Departamento', '==', 'Latícinios').get();
        const items = querySnapshot.docs;
        const listLaticinios  = [];
        items.forEach(
            doc => {
                listLaticinios.push({
                    ...doc.data(),
                    key: doc.id
                })
            })    
        setLaticinios(listLaticinios);
        }
    // *********** LISTA DOS CEREAIS ************/
    const  pegaCereais = async () => {
        const prods = firebase.db.collection("produtos");
        const querySnapshot = await prods.where('Departamento', '==', 'Cereais').get();
        const items = querySnapshot.docs;
        const listCereais  = [];
        items.forEach(
            doc => {
                listCereais.push({
                    ...doc.data(),
                    key: doc.id
                })
            })    
        setCereais(listCereais);
        }
    // *********** LISTA DOS GERAIS ************/
    const  pegaGerais = async () => {
        const prods = firebase.db.collection("produtos");
        const querySnapshot = await prods.where('Departamento', '==', 'Geral').get();
        const items = querySnapshot.docs;
        const listGeral  = [];
        items.forEach(
            doc => {
                listGeral.push({
                    ...doc.data(),
                    key: doc.id
                })
            })    
        setGeral(listGeral);
        }
        

    return (
    <View style ={{flex: 1, alignItems:'center', justifyContent:'center', backgroundColor: "#FFF"}}>
        <Header />
        <ScrollView>
            
            {/* AÇOUGUE */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Açougue</Text>
                </View>
                <FlatList
                        horizontal
                        data={acougue}
                        renderItem = { ({item}) =>(
                                <View style={{paddingHorizontal: 10}}>
                                    <ImagedCarouselCard
                                    width={300}
                                    height={300}
                                    shadowColor="#051934"
                                    source={{uri: `${item.urlImg}`}}
                                    text={`${item.Nome} \nR$: ${item.Preço} Kg`}
                                    overlayBackgroundColor={"#2E3192DD"}
                                    />
                                    {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                    <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                                </View>
                        )}
                    />
            </View>
            {/* BEBIDAS */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Bebidas</Text>
                </View>
                    <FlatList
                        horizontal
                        data={bebidas}
                        renderItem = { ({item}) =>(
                            <View style={{paddingHorizontal: 10}}>
                                <ImagedCarouselCard
                                width={300}
                                height={300}
                                shadowColor="#051934"
                                source={{uri: `${item.urlImg}`}}
                                text={`${item.Nome} \nR$: ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                                {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                            </View>
                        )}
                    />
            </View>
            {/* MATINAIS */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Matinais</Text>
                </View>
                    <FlatList
                        horizontal
                        data={matinais}
                        renderItem = { ({item}) =>(
                            <View style={{paddingHorizontal: 10}}>
                                <ImagedCarouselCard
                                width={300}
                                height={300}
                                shadowColor="#051934"
                                source={{uri: `${item.urlImg}`}}
                                text={`${item.Nome} \nR$: ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                                {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                            </View>
                        )}
                    />
            </View>

            {/* HIGIENE */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Higiene</Text>
                </View>
                    <FlatList
                        horizontal
                        data={higiene}
                        renderItem = { ({item}) =>(
                            <View style={{paddingHorizontal: 10}}>
                                <ImagedCarouselCard
                                width={300}
                                height={300}
                                shadowColor="#051934"
                                source={{uri: `${item.urlImg}`}}
                                text={`${item.Nome} \nR$: ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                                {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                            </View>
                        )}
                    />
            </View>

            {/* ALIMENTACAO */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Alimentação</Text>
                </View>
                    <FlatList
                        horizontal
                        data={alimentacao}
                        renderItem = { ({item}) =>(
                            <View style={{paddingHorizontal: 10}}>
                                <ImagedCarouselCard
                                width={300}
                                height={300}
                                shadowColor="#051934"
                                source={{uri: `${item.urlImg}`}}
                                text={`${item.Nome} \nR$: ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                                {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                            </View>
                        )}
                    />
            </View>

            {/* LIMPEZA */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Limpeza</Text>
                </View>
                    <FlatList
                        horizontal
                        data={limpeza}
                        renderItem = { ({item}) =>(
                            <View style={{paddingHorizontal: 10}}>
                                <ImagedCarouselCard
                                width={300}
                                height={300}
                                shadowColor="#051934"
                                source={{uri: `${item.urlImg}`}}
                                text={`${item.Nome} \nR$: ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                                {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                            </View>
                        )}
                    />
            </View>
            
            {/* PET */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Pet</Text>
                </View>
                    <FlatList
                        horizontal
                        data={pet}
                        renderItem = { ({item}) =>(
                            <View style={{paddingHorizontal: 10}}>
                                <ImagedCarouselCard
                                width={300}
                                height={300}
                                shadowColor="#051934"
                                source={{uri: `${item.urlImg}`}}
                                text={`${item.Nome} \nR$: ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                                {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                            </View>
                        )}
                    />
            </View>
            {/* BOMBONIERE */}
            <View>
                <View style={styles.bgtitulo}>
                    <Text style={styles.titulo}>Bomboniere</Text>
                </View>
                    <FlatList
                        horizontal
                        data={bomboniere}
                        renderItem = { ({item}) =>(
                            <View style={{paddingHorizontal: 10}}>
                                <ImagedCarouselCard
                                width={300}
                                height={300}
                                shadowColor="#051934"
                                source={{uri: `${item.urlImg}`}}
                                text={`${item.Nome} \nR$: ${item.Preço}`}
                                overlayBackgroundColor={"#2E3192DD"}
                                />
                                {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                                <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                            </View>
                        )}
                    />
            </View>
            {/* CONDIMENTOS/TEMPEROS */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Condimentos/Temperos</Text>
            </View>
                <FlatList
                    horizontal
                    data={condimentos}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* PADARIA */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Padaria</Text>
            </View>
                <FlatList
                    horizontal
                    data={padaria}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* MERCEARIA */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Mercearia</Text>
            </View>
                <FlatList
                    horizontal
                    data={mercearia}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* VESTUARIO */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Vestuário</Text>
            </View>
                <FlatList
                    horizontal
                    data={vestuario}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* ENLATADOS */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Enlatados</Text>
            </View>
                <FlatList
                    horizontal
                    data={enlatados}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* HORTIFRUTI */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Horti-Fruti</Text>
            </View>
                <FlatList
                    horizontal
                    data={hortifruti}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço} Kg`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>

            {/* DESCARTAVEIS */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Descartáveis</Text>
            </View>
                <FlatList
                    horizontal
                    data={descartaveis}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>

            {/* MASSAS */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Massas</Text>
            </View>
                <FlatList
                    horizontal
                    data={massas}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* LATICINIOS */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Laticinios</Text>
            </View>
                <FlatList
                    horizontal
                    data={laticinios}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* CEREAIS */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Cereais</Text>
            </View>
                <FlatList
                    horizontal
                    data={cereais}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
            </View>
            {/* GERAL */}
            <View>
            <View style={styles.bgtitulo}>
                <Text style={styles.titulo}>Geral</Text>
            </View>
                <FlatList
                    horizontal
                    data={geral}
                    renderItem = { ({item}) =>(
                        <View style={{paddingHorizontal: 10}}>
                            <ImagedCarouselCard
                            width={300}
                            height={300}
                            shadowColor="#051934"
                            source={{uri: `${item.urlImg}`}}
                            text={`${item.Nome} \nR$: ${item.Preço}`}
                            overlayBackgroundColor={"#2E3192DD"}
                            />
                            {/* <Text>Typo: {typeof(item.urlImg.replace('"', ''))}</Text>
                            <Text>Typo: {item.urlImg.replace('"', '')}</Text> */}
                        </View>
                    )}
                />
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
        titulo: {
            fontSize: 26,
            color: "#fff",
            padding: 10,
            fontFamily: "sans-serif-medium",
          },
        bgtitulo:{
            width: Dimensions.get('window').width,
            backgroundColor: "#ED1C24",
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginVertical: 10,
          },

    })