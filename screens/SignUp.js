// screens/SignUp.js

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import t from 'tcomb-form-native';
import User, { formOptions } from '../models/User';
import styles from './SignUp.styles';

 export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { newUser: null }
    }

    componentDidMount() {
        // focus on the "name" field
        this.refs.form.getComponent('name').refs.input.focus();
    }

    onSubmit() {
        const { form } = this.refs;
        const newUser = form.getValue();
        if (!newUser) return;
        console.log(newUser);
        this.clearForm();
    }

    clearForm() {
        this.setState({ newUser: null });
    }

    onChange(newUser) {
        this.setState({ newUser });
    }


    render() {
        const Form = t.form.Form;

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}>
                    <Text style={styles.title}>Sign up for Washed Out</Text>
                    <Form
                        ref="form"
                        type={User}
                        options={formOptions}
                        value={this.state.newUser}
                        onChange={this.onChange} />

                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.onSubmit}
                        underlayColor='black'
                    >
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

    