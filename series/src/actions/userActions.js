import firebase from 'firebase';

import {Alert} from 'react-native';


export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
const userLoginSucess = user => ({
    type: USER_LOGIN_SUCESS,
    user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
});

export const tryLogin = ({ email, password }) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(userLoginSucess(user));
            return user;
        })
        .catch(error => {
            if (error.code == 'auth/user-not-found') {
                return new Promise((resolve, reject) => {
                    Alert.alert('Usuário não encontrado',
                        'Deseja criar um cadastro com as informações inseridas?',
                        [{
                            text: 'Não',
                            onPress: () => resolve(), // por causa da promise. nesse caso vai cair no proximo then
                            style: 'cancel' //somente para IOS
                        }, {
                            text: 'Sim',
                            onPress: () => {
                                firebase.auth()
                                    .createUserWithEmailAndPassword(email, password)
                                    .then(user => {
                                        resolve(user); // poderia colocar direto resolve que funcionaria
                                    })
                                    .catch(reject) // essa forma também poderia ser utilizada no de cima
                            }
                        }],
                        { cancelable: false }// não permite o usuário clicar fora do alert
                    );
                })

            }

            return Promise.reject(error);
        })
}