import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false};

	onButtonPress() {
		this.setState({ error: '', loading: true })
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(this.onLoginSuccess.bind(this))
			.catch(this.onLoginFail.bind(this));
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication Failed',
			loading: false
		})
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		})
	}

	renderButton() {
			if (this.state.loading) {
				return <Spinner size='small' />
			}
			return (
				<Button onPress={this.onButtonPress.bind(this)}>
					Login
				</Button>
			);
		}

	render () {
		return (
			<Card>

				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						onChangeText={email => this.setState({ email })}
						value={this.state.email}
					/>
				</CardSection>

				<CardSection>
					<Input
					secureTextEntry
					placeholder="Enter password"
					label="Password"
					onChangeText={password => this.setState({ password })}
					value={this.state.password}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
}

export default LoginForm;
