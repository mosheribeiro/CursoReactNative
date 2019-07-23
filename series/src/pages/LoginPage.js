import React from 'react';
import {
    View, StyleSheet, TextInput,
    Button, ActivityIndicator, Text, Alert
} from 'react-native';
import firebase from 'firebase';

import {connect} from 'react-redux';

import {tryLogin} from '../actions/index';

import FormRow from '../components/FormRow';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: '',
        }
    }

    componentDidMount() {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyD0xDtlC5b9nI0LODUjW2pyIeYzDLut99Q",
            authDomain: "series-a9ce6.firebaseapp.com",
            databaseURL: "https://series-a9ce6.firebaseio.com",
            projectId: "series-a9ce6",
            storageBucket: "series-a9ce6.appspot.com",
            messagingSenderId: "1080339270119",
            appId: "1:1080339270119:web:a8011c526e5bb18f"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        });
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)// se não tem nada na  mensagem
            return null;
        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }

    tryLogin() {
        this.setState({
            isLoading: true,
            message: '',
        });

        const { mail: email, password } = this.state;

       this.props.tryLogin({email, password})

    }

    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado'
            default:
                return 'Erro não identificado';
        }
    }
    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />;

        return (<Button title='Entrar'
            onPress={() => this.tryLogin()}
        />);
    }

    render() {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="usuario@mail.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        secureTextEntry placeholder="******"
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>
                {this.renderButton()}
                {this.renderMessage()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    },

});

export default connect(null, {tryLogin})(LoginPage)