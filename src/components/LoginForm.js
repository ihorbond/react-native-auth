import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
	state = { email: '', password: ''};


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
				<CardSection>
					<Button> Login </Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
