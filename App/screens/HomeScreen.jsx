import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';


const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Text className="text-lg font-black">This is my first app UI</Text>
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />
        </View>
    );
};


export default HomeScreen;

const styles = StyleSheet.create({

});
