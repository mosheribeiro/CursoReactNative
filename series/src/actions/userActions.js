const USER_LOGIN = 'USER_LOGIN';
const userLogin = user => ({
    type: USER_LOGIN,
    user
});

const USER_LOGOUT = 'USER_LOGOUT';
const userLogout = () => ({
    type: USER_LOGOUT,
});

export const tryLogin = ({email, password}) => ({

/*     const loginUserSuccess = user => {
        this.setState({ message: 'Sucesso!' });
    }

    const loginUserFailed = error => {
        this.setState({ message: this.getMessageByErrorCode(error.code) });
    } */

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
});