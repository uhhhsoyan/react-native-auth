import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
