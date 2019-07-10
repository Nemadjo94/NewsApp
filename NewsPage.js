import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const NewsPage = ({ navigation }) => {
    // uzimamo podatke koje smo prosledili pozivajuci funkciju
    // this.props.navigate('NewsPage', {
    //   id,
    //   source,
    //   title,
    //   ...
    // });
    const {
        id,
        source,
        title,
        category,
        image,
        time,
        content,
    } = navigation.state.params;
    return (<ScrollView style={styles.container}>
        <Text style={[
            styles.title,
            styles.big
        ]}>
            {title}
        </Text>
        {image ? <Image
            source={{
                uri: image,
            }}
            style={styles.cover}
        /> : null}
        <Text style={styles.source}>{source}</Text>
        <Text>
            <Text style={styles.bold}>
                {category}
            </Text>
            {' '}
            <Text style={styles.time}>{time}</Text>
        </Text>
       <Text>{content}</Text>
       {/* dodali smo Lorem Ipsum da bi pokazali kako scroll view funkcionise */}
       <Text>
        {`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat hendrerit ligula, elementum varius neque gravida id. Ut placerat nisl sed sollicitudin fermentum. Quisque mauris urna, consectetur et porta non, venenatis a turpis. Integer dolor dolor, facilisis ac aliquet id, commodo vitae augue. Mauris a ante lobortis, laoreet magna id, auctor neque. Vestibulum ut lacus et velit gravida aliquet. Cras finibus tempus velit nec fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nulla magna. Donec suscipit sapien ex, a rhoncus urna volutpat sit amet. Ut eu odio turpis. Donec viverra tellus sit amet convallis tempor. Nulla accumsan erat ut consequat dictum.

            Aliquam rhoncus, massa in tempus bibendum, ex quam ultricies sem, vel varius mi felis in ante. Cras dui augue, condimentum eu metus eu, cursus porta purus. Donec id feugiat felis. Nam fermentum sodales ligula pellentesque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mattis sem malesuada sapien vestibulum lobortis. Sed non mauris sem. Morbi faucibus, massa ac rutrum dictum, enim enim tempor tortor, non rhoncus tellus nunc in nisl. Suspendisse potenti.

            Donec ullamcorper molestie augue. Ut eu orci aliquet, laoreet mauris in, suscipit magna. Duis interdum justo in sodales tincidunt. Aenean elementum ultrices rhoncus. Sed maximus condimentum tellus, eu hendrerit massa vehicula sed. Vestibulum rhoncus ullamcorper tempor. Donec ex enim, tempus sed metus in, consectetur ornare metus. Donec sollicitudin fringilla enim ac volutpat.

            Praesent tristique orci ac accumsan consectetur. Pellentesque gravida leo eget sollicitudin ultricies. Ut consectetur ut ligula et pretium. Cras mollis pharetra metus in elementum. Cras maximus mauris pulvinar maximus porta. Etiam convallis ornare sapien, vitae volutpat lorem luctus ac. Maecenas sed leo eget metus condimentum aliquam. Aliquam erat volutpat. Nunc eget molestie sapien. Mauris non purus augue. Pellentesque maximus in neque sollicitudin ultrices. Donec elementum ut odio eu ornare. Cras pulvinar quis diam et placerat. Vivamus in massa consequat, ullamcorper sapien nec, dictum ligula.

            Ut eu tincidunt massa. Fusce bibendum quam quis quam dictum, quis gravida libero porttitor. Cras egestas venenatis turpis quis feugiat. Mauris fringilla vulputate orci, ac iaculis sapien condimentum eget. Praesent fringilla accumsan mi, eget commodo mauris elementum sed. Fusce dui leo, rhoncus quis nibh auctor, dignissim sollicitudin nunc. Nam eu erat vel nunc sagittis sodales ut ac velit. Donec volutpat euismod pellentesque. Donec sagittis sapien lacus, sit amet vestibulum ligula tristique vitae.
        `}
        </Text>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    counter: {
        color: 'blue',
        fontSize: 20,
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
        flex: 1,
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
})

export default NewsPage;



