import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class LongText extends Component {
    constructor(props){
        super(props);

        this.state ={
            isExpanded: false
        }
    }
    render() {
        const { label = "", content = "-" } = this.props;
        const {isExpanded} = this.state;
        return (
            <View style={styles.line}>
                <Text style={[
                    styles.cell,
                    styles.label,
                ]}>{label}:</Text>
                <Text style={[
                    styles.cell,
                    styles.content,
                    isExpanded ? styles.expanded : styles.collapsed
                ]}>{content}</Text>
            </View>
        );

    }

}
const styles = StyleSheet.create({
    line: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
        textDecorationLine: 'underline',
        paddingBottom: 8,
    },
    content: {
        flex: 3,
        textAlign: 'justify', //IOS

    },
    collapsed: {
        maxHeight: 65,
    },
    expanded: {
        flex: 1,
    }

});