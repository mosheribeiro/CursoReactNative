import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const SerieCard = ({ serie }) => (
    <View style={styles.container}>
        <View style={styles.card}>
            <Image
                source={{
                    uri: serie.img
                }}
                aspectRatio={1} // precisa especificar a altura e não distorce a imagem
                resizeMode="cover" //default
            />
            <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>{serie.title}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        height: Dimensions.get('window').width / 2,
    },
    card: {
        flex: 1,
        borderWidth: 1,
    },
    cardTitleWrapper: {
        backgroundColor: 'pink',
        height: 50,
        position: 'absolute',
        bottom: 0,
    },
    cardTitle: {

    }
});

export default SerieCard;