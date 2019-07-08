import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from './Input';
import { connect } from 'react-redux';
import { addTodo } from '../actions/Index';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

    }

    onChangeText(text) {
        this.setState({
            text: text,
        });
    }

    onPress() {
        this.props.dispatchAddTodo(this.state.text);
    }

    render() {
        const { text } = this.state;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="add"
                        onPress={() =>
                            this.onPress()
                        }
                    />
                </View>
            </View>
        );
    }
}

/* const mapDispatchToProps = dispatch => {
    return {
        dispatchAddTodo: text => dispatch(addTodo(text))
    }
} */
// outra forma de declararo mesmo código de cima - atalaho
/* const mapDispatchToProps = {
        dispatchAddTodo:addTodo
} */

export default connect(null, /*mapDispatchToProps*/{
    dispatchAddTodo:addTodo}
    )(TodoForm);

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
    }
})