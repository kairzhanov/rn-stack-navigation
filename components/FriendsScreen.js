import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { FriendsContext } from './../context/FriendsContext';

export default class FriendsScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Add Friends Here! </Text>

                {
                    this.context.possibleFriends.map((friend, index) => (
                        <Button
                        key={ friend }
                        title={ `Add ${ friend }` }
                        onPress={() =>
                            this.context.addFriend(index)
                        }
                        />
                    ))
                }

                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Home')
                    }
                    />
            </View>
        )
    }
}

FriendsScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})