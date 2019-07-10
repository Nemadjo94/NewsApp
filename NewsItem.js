import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';


const NewsItem = ({
  id,
  source,
  title,
  category,
  image,
  time,
  content,
  navigation,
}) => {
  return (<View style={styles.container}>
        {/*
            prikazujemo featured sliku
            ako je prva slika i slika postoji
        */}
        {id === 1 && image ? <Image
            source={{
                uri: image,
            }}
            style={styles.cover}
        /> : null}
        <View style={styles.item}>
            <View style={styles.counterWrap}>
                <Text style={styles.counter}>{id}.</Text>
            </View>
            <View style={styles.mediaText}>
                <Text style={styles.source}>{source}</Text>
                <TouchableHighlight
                    // dodajemo event handler
                    // da kad korisnik pritisne na title
                    // da se otvori nova stranica
                    // koja prikazuje vesti
                    // njoj prosledjuemo ostale podatke
                    // prvi parametar je stranica ka kojoj idemo
                    // a drugi je koje podatke saljemo
                    // ti podaci ce biti dostupni u
                    // navigation.state.params na NewsPage strani
                    // https://reactnavigation.org/docs/en/params.html
                    onPress={() => navigation.push('NewsPage', {
                        id,
                        source,
                        title,
                        category,
                        image,
                        time,
                        content,
                    })}
                    // boja koja ce se prikazati kada
                    // kliknemo na dugme
                    // to jest title
                    underlayColor="#ddd"
                >
                    <Text
                        style={[
                            styles.title,
                            id === 1 ? styles.big : {},
                        ]}
                    >
                        {title}
                    </Text>
                </TouchableHighlight>
                <Text>
                    <Text style={styles.bold}>
                        {category}
                    </Text>
                    {' '}
                    <Text style={styles.time}>{time}</Text>
                </Text>
            </View>
            {/* prikazujemo sliku samo ako nije prva i ako postoji */}
            {image && id !== 1 ? <Image
                source={{
                    uri: image,
                }}
                style={styles.image}
            /> : null}
       </View>
    </View>);
}


// withNavigation koristimo da bi dobili
// navigation prop u komponenti
// https://reactnavigation.org/docs/en/connecting-navigation-prop.html
export default withNavigation(NewsItem);

const styles = StyleSheet.create({
    counter: {
        color: 'blue',
        fontSize: 20,
    },
    counterWrap: {
        marginRight: 5,
    },
    cover: {
        flex: 1,
        height: 200,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    source: {
        fontSize: 20,
        marginBottom: 5,
        color: 'red',
    },
    container: {
        paddingHorizontal: 20,
    },
    mediaText: {
        flex: 1,
        marginRight: 5,
    },
    item: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    big: {
        fontSize: 24,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#333',
    },
        time: {
        color: '#555',
    },
    bold: {
        fontWeight: "bold",
        color: '#333',
    }
});
