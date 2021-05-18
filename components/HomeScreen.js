import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { FriendsContext } from './../context/FriendsContext';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> You have { this.context.currentFriends.length } friends: </Text>
                {
                    this.context.currentFriends.map((friend, index) => (
                        <Text style={styles.text} key={index} >{ friend }</Text>
                    ))
                }
                <Button
                    title="Add some friends"
                    onPress={() =>
                        this.props.navigation.navigate('Friends')
                    }
                    />
            </View>
        )
    }
}

HomeScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})
