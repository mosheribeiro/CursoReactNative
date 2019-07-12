import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Input from './Input';
import { connect } from 'react-redux';
import { addTodo, setTodoText, updateTodo } from '../actions/Index';


class TodoForm extends React.Component {
    /*     constructor(props) {
            super(props);
            this.state = {
                text: ''
            }
    
        } */

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
        /*         this.setState({
                    text: text,
                }); */
    }

    onPress() {
        const { todo } = this.props;
        if (todo.id) {
            this.props.dispatchUpdateTodo(todo);
        } else {
            const { text } = this.props.todo;
            this.props.dispatchAddTodo(text);
            /*         this.setState({ text: '' }); */
            //this.props.dispatchSetTodoText('');
        }
    }

    render() {
        const { text, id } = this.props.todo;
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
                        title={id ? "save" : "add"}
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

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(mapStateToProps, /*mapDispatchToProps*/
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodoText,
        dispatchUpdateTodo: updateTodo
    })(TodoForm);

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