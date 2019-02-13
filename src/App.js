import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCOv9dwEtjYF0PijK6zLqF25MkIxGzo9TU',
            authDomain: 'auth-e983d.firebaseapp.com',
            databaseURL: 'https://auth-e983d.firebaseio.com',
            projectId: 'auth-e983d',
            storageBucket: 'auth-e983d.appspot.com',
            messagingSenderId: '947053514176'
          });
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <Text style={{ color: 'white' }}>An app</Text>
            </View>
        );
    }
}

export default App;
