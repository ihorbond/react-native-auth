import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		apiKey: "AIzaSyD_to5EAOnRd0kKTVyDqoMQZgP8Th-bB2Q",
		authDomain: "authentication-a585c.firebaseapp.com",
		databaseURL: "https://authentication-a585c.firebaseio.com",
		projectId: "authentication-a585c",
		storageBucket: "authentication-a585c.appspot.com",
		messagingSenderId: "541624232645"
	});
	}
	render () {
		return (
			<View>
			<Header headerText="Authentication" />
			<LoginForm />
			</View>
		);
	}
}

export default App;
