import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
//meu componentes
import PeopleList from '../components/PeopleList';

// terceiros
import axios from "axios";
import { red } from 'ansi-colors';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
  // setTimeout(() => {
    axios.get('https://randomuser.me/api/?nat=br&results=50')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
          loading: false
        });
      }).catch(error => {
        this.setState({ 
          loading: false,
          error: true 
        })
      });
   // }, 1500);

  }

  renderLoading() {
    if (this.state.loading) {

    } else {
      return null;
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator size='large' color='#6ca2f7' />
            : this.state.error
              ? <Text style={styles.error}>Problemas de conexão. Tente novamente!!!</Text>
              : <PeopleList peoples={this.state.peoples}
                onPressItem={(pageParams) => {
                  this.props.navigation.navigate('PeopleDetail', pageParams);
                }} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error:{
    color: 'red',
    alignSelf:'center'
  }
});
