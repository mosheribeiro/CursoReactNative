import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

const TodoList = ({ todos }) => (
    <View>
        {
            todos.map(todo =>
                <Text key={todo.id}> {todo.text} </Text>)
        }
    </View>
);

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(mapStateToProps)(TodoList);

