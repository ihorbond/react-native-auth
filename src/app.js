import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
		apiKey: "AIzaSyD_to5EAOnRd0kKTVyDqoMQZgP8Th-bB2Q",
		authDomain: "authentication-a585c.firebaseapp.com",
		databaseURL: "https://authentication-a585c.firebaseio.com",
		projectId: "authentication-a585c",
		storageBucket: "authentication-a585c.appspot.com",
		messagingSenderId: "541624232645"
	});

	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			this.setState({ loggedIn: true})
		} else {
			this.setState({ loggedIn: false})
		}
	});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true: return (
				<Button onPress={() => firebase.auth().signOut()}>
					Log Out
				</Button>
			)
			case false: return <LoginForm />
			default: return <Spinner />
		}
	}


	render () {
		return (
			<View>
			<Header headerText="Authentication" />
			{this.renderContent()}
			</View>
		);
	}
}

export default App;
