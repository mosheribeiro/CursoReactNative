import firebase from 'firebase';


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
                                .createUserWithEmailAndPassword(email, password)
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
}