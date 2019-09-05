import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import series from '../../series.json';
import SerieCard from "../components/SerieCard";

const isEven = number => {
    return number % 2 === 0;
}

const SeriesPage = props => (
    <View>
        <FlatList
            data={series}
            renderItem={({ item, index }) => ( // essa propriedade index é repassada pelo flatlist
                <SerieCard serie={item}
                    isFirstColumn={isEven(index)}
                    onNavigate={() => props.navigation.navigate('SerieDetail',{serie: item})}
                />
            )}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            ListHeaderComponent={props => (<View style={styles.marginTop} />)} // pode passar qlqr componente
            ListFooterComponent={props => (<View style={styles.marginBottom} />)} // pode passar qlqr componente
        />
    </View>
);

const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5,
    },
    marginBottom: {
        marginBottom: 5,
    }
})

export default SeriesPage;