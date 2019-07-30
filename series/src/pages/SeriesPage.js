import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import series from '../../series.json';
import SerieCard from "../components/SerieCard";


const SeriesPage = props => (
    <View>
        <FlatList
            data={series}
            renderItem={({ item }) => (
                <SerieCard serie={item} />
            )}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
        />
    </View>
);

const styles = StyleSheet.create({

})

export default SeriesPage;