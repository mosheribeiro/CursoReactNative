import React from 'react';
import {
    View, StyleSheet, TextInput,
    Button, ActivityIndicator, Text, Alert
} from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';


export default class LoginPage extends React.Component {
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

        const loginUserSuccess = user => {
            this.setState({ message: 'Sucesso!' });
        }

        const loginUserFailed = error => {
            this.setState({ message: this.getMessageByErrorCode(error.code) });
        }

        const { mail, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(user => {
                loginUserSuccess(user);
                //console.log('Usuário autenticado!!!', user);
            })
            .catch(error => {
                if (error.code == 'auth/user-not-found') {
                    Alert.alert('Usuário não encontrado',
                        'Deseja criar um cadastro com as informações inseridas?',
                        [{
                            text: 'Não',
                            onPress: () => { console.log('Usuário não quer criar uma conta.') },
                            style: 'cancel' //somente para IOS
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase.auth()
                                    .createUserWithEmailAndPassword(mail, password)
                                    .then(user => {
                                        loginUserSuccess(user);
                                    })
                                    .catch(error => {
                                        loginUserFailed(error)
                                    })
                            }
                        }],
                        { cancelable: false }// não permite o usuário clicar fora do alert
                    );
                }
                else loginUserFailed(error);
                //console.log('Usuário não encontrado!!!', error)

            })
            .then(() => this.setState({ isLoading: false }));
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
    }

});