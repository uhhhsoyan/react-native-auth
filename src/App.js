import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebaseData from './components/firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(firebaseData);
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
