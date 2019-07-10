import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import NewsPage from './NewsPage';

// https://reactnavigation.org/docs/en/hello-react-navigation.html
// prosledjujemo createStackNavigator funkciji
// sve nase "screenove" tako da react navigation
// unapred zna gde mozemo da idemo
// navigation.push('NewsPage')
const AppNavigator = createStackNavigator({
    Home,
    NewsPage,
}, {
    // kazemoo react-navigation
    // koja nam je pocetna stranica
    initialRouteName: 'Home'
});

// react-navigation zahteva od nas onda
// da prosledimo taj dobijeni Stack
// metodi createAppContainer
// koju exporutjemo i samim tim ona postaje glavna
// komponenta nase aplikacije
export default createAppContainer(AppNavigator);



