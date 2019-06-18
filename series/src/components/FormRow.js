import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const FormRow = props => {
    const { children } = props;
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
};

export default FormRow;

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        elevation: 1,
    }
});