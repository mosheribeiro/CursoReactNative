import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { peoples } = props;
    const { onPressItem } = props;

    const itens = peoples.map((people, index) => {
        return <PeopleListItem navigateToPeopleDetail={onPressItem} key={index} people={people} />
    })

    return (
        <FlatList
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem
                    people={item}
                    navigateToPeopleDetail={onPressItem}     
                />
            )}
        keyExtractor={(item,index) => `${item.name.first+index}`}  />
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList;