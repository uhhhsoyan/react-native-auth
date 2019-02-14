import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCOv9dwEtjYF0PijK6zLqF25MkIxGzo9TU',
            authDomain: 'auth-e983d.firebaseapp.com',
            databaseURL: 'https://auth-e983d.firebaseio.com',
            projectId: 'auth-e983d',
            storageBucket: 'auth-e983d.appspot.com',
            messagingSenderId: '947053514176'
        });
    
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
