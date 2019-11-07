import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import Line from '../components/Line';
import LongText from '../components/LongText';

export default class SerieDetailPage extends Component {

    render() {
        //const {serie} = this.props.navigation.state.params;
        const serie = {
            "id": 3,
            "title": "Todo mundo odeia o Chris",
            "gender": "Comédia",
            "rate": 100,
            "img":
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NTg4MTc5OF5BMl5BanBnXkFtZTcwMzc2MzYzMQ@@._V1_.jpg",
            "description":
                "Everybody Hates Chris (Todo Mundo Odeia o Chris (título no Brasil) ou Todos Contra o Chris (título em Portugal)) é uma série de televisão estadunidense de comédia dramática inspirado nas experiências pessoais de Chris Rock no bairro de Bed-Stuy, em Nova Iorque, seguindo um estilo muito parecido com a série Anos Incríveis."
        }
        return (
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{
                        uri: serie.img
                    }} />
                <Line label="Título" content={serie.title}/>
                <Line label="Genêro" content={serie.gender}/>
                <Line label="Nota" content={serie.rate}/>
                <LongText label="Descrição" content={serie.description}/>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
    }
});
