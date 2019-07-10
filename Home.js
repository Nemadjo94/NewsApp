import React from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import NewsItem from './NewsItem';


// primer kako mozemo da umemo dimenzije telefona/ekrana
// https://facebook.github.io/react-native/docs/dimensions
// import { Dimensions } from 'react-native';
// const {
//   width,
//   height,
// } = Dimensions.get('window');



// ovde unesite vas api key
// da bi dobili api key treba da posetite
// https://newsapi.org/ i registrujte se
const YOUR_API_KEY = ''; // unesi svoj api kljuc
const API = 'https://newsapi.org/v2/top-headlines?country=rs&apiKey=' + YOUR_API_KEY;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }
    componentDidMount() {
        // Izbacujemo korisniku gresku ako api key ne postoji
        if (!YOUR_API_KEY) {
            Alert.alert('Potrebno je uneti newsapi.org API KEY');
            return null;
        }

        // koristimo fetch da dohvatimo podatke
        // sa newsapi.org API-a
        fetch(API)
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    articles: result.articles,
                });
            }).catch(() => {
                Alert.alert('Doslo je do greske');
            });
    }
    render() {
        // renderujemo listu vesti u ScrollView
        const articles = this.state.articles;
        return (<ScrollView contentContainerStyle={styles.container}>
            {articles.map(function(article, index) {
                return <NewsItem
                    key={index}
                    id={index + 1}
                    category="headline"
                    source={article.source.name}
                    title={article.title}
                    image={article.urlToImage}
                    time={article.publishedAt}
                    content={article.content}
                />
            })}
        </ScrollView>);
    }
}


// Menjamo navigation title
// https://reactnavigation.org/docs/en/headers.html
Home.navigationOptions ={
    title: 'Trending',
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
});

