import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import series from '../../series.json';
import SerieCard from "../components/SerieCard";

const isEven = number =>{
    return number % 2 === 0;
}

const SeriesPage = props => (
    <View>
        <FlatList
            data={series}
            renderItem={({ item, index }) => ( // essa propriedade index é repassada pelo flatlist
                <SerieCard serie={item} 
                isFirstColumn={isEven(index)}
                />
            )}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
        />
    </View>
);

const styles = StyleSheet.create({

})

export default SeriesPage;